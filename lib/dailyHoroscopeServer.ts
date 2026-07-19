import 'server-only';

import { getRequestContext } from '@cloudflare/next-on-pages';
import {
  buildFallbackHoroscope,
  getDailyZodiac,
  normalizeDailyHoroscope,
  type DailyHoroscope,
  type DailyZodiacSlug,
} from './dailyHoroscope';

interface KVNamespaceLike {
  get(key: string): Promise<string | null>;
  put(key: string, value: string, options?: { expirationTtl?: number }): Promise<void>;
}

function getCloudflareEnv(): Record<string, unknown> | undefined {
  try {
    return getRequestContext().env as Record<string, unknown>;
  } catch {
    return undefined;
  }
}

function getKV(): KVNamespaceLike | undefined {
  return getCloudflareEnv()?.LEADERBOARD_KV as KVNamespaceLike | undefined;
}

function getGeminiKey(): string {
  const cloudflareKey = getCloudflareEnv()?.GEMINI_API_KEY;
  return typeof cloudflareKey === 'string' ? cloudflareKey : (process.env.GEMINI_API_KEY ?? '');
}

async function generateWithGemini(
  zodiacSlug: DailyZodiacSlug,
  date: string,
): Promise<DailyHoroscope> {
  const zodiac = getDailyZodiac(zodiacSlug);
  if (!zodiac) throw new Error('Invalid zodiac sign');

  const apiKey = getGeminiKey();
  if (!apiKey) return buildFallbackHoroscope(zodiacSlug, date);

  const [year, month, day] = date.split('-');
  const dateLabel = `${year}년 ${Number(month)}월 ${Number(day)}일`;
  const prompt = `당신은 오락 및 자기성찰용 별자리 운세 편집자입니다. ${dateLabel} ${zodiac.ko}의 일일 운세를 아래 JSON 형식으로 작성하세요.

{
  "score": 55~95 사이 정수,
  "summary": "핵심 요약 25~45자",
  "overall": "종합운 140~200자",
  "love": "연애·인간관계 운세 100~150자",
  "money": "금전운 100~150자",
  "work": "직업·학업운 100~150자",
  "health": "생활 건강 조언 80~120자",
  "luckyColor": "색상 한 단어",
  "luckyNumber": 1~99 사이 정수,
  "luckyItem": "10자 이내 일상 물건",
  "advice": "오늘 실천할 조언 30~50자"
}

작성 원칙:
- JSON만 출력하고 마크다운은 쓰지 마세요.
- 같은 표현을 반복하거나 본문에 점수를 다시 쓰지 마세요.
- 미래를 확정적으로 예언하지 말고 선택을 돌아보는 참고 문장으로 쓰세요.
- 투자, 치료, 법률 판단을 지시하지 마세요.
- 각 항목에 오늘 바로 적용할 수 있는 구체적인 행동 하나를 포함하세요.
- ${zodiac.ko}의 상징인 ${zodiac.element} 원소와 ${zodiac.planet}을 자연스럽게 반영하세요.`;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
    },
  );
  const json = await response.json() as {
    candidates?: { content?: { parts?: { text?: string }[] } }[];
    error?: { message?: string };
  };

  if (!response.ok || json.error) {
    throw new Error(json.error?.message ?? `Gemini HTTP ${response.status}`);
  }

  const text = json.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ?? '';
  const cleaned = text.replace(/^```json\n?/i, '').replace(/\n?```$/, '').trim();
  return normalizeDailyHoroscope(JSON.parse(cleaned), zodiacSlug, date);
}

export async function getDailyHoroscope(
  zodiacSlug: DailyZodiacSlug,
  date: string,
  options: { force?: boolean } = {},
): Promise<DailyHoroscope> {
  const zodiac = getDailyZodiac(zodiacSlug);
  if (!zodiac) throw new Error('Invalid zodiac sign');

  const cacheKey = `horoscope:v2:${date}:${zodiacSlug}`;
  const kv = getKV();

  if (kv && !options.force) {
    try {
      const cached = await kv.get(cacheKey);
      if (cached) return normalizeDailyHoroscope(JSON.parse(cached), zodiacSlug, date);
    } catch {
      // A cache read failure should not block a useful daily page.
    }
  }

  let horoscope: DailyHoroscope;
  try {
    horoscope = await generateWithGemini(zodiacSlug, date);
  } catch {
    horoscope = buildFallbackHoroscope(zodiacSlug, date);
  }

  if (kv) {
    try {
      await kv.put(cacheKey, JSON.stringify(horoscope), { expirationTtl: 86400 });
    } catch {
      // The response remains valid even if persistence is temporarily unavailable.
    }
  }

  return horoscope;
}
