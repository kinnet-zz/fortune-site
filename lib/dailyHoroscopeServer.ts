import 'server-only';

import { getRequestContext } from '@cloudflare/next-on-pages';
import {
  buildFallbackHoroscope,
  getDailyZodiac,
  normalizeDailyHoroscope,
  type DailyHoroscope,
  type DailyZodiacSlug,
  type HoroscopeLang,
  DEFAULT_HOROSCOPE_LANG,
} from './dailyHoroscope';

interface KVNamespaceLike {
  get(key: string): Promise<string | null>;
  put(key: string, value: string, options?: { expirationTtl?: number }): Promise<void>;
}

export interface DailyHoroscopeResult {
  horoscope: DailyHoroscope;
  cacheStatus: 'HIT' | 'MISS';
  source: 'ai' | 'fallback';
  generationError?: DailyHoroscopeGenerationError;
  // What the model provider actually answered. Without these the batch job
  // could only report the vague 'upstream' and a repeatedly failing run said
  // nothing about whether it was a quota (429) or an overload (503).
  upstreamStatus?: number;
  upstreamCode?: string;
}

export type DailyHoroscopeGenerationError =
  | 'missing-api-key'
  | 'timeout'
  | 'upstream'
  | 'invalid-response';

class DailyHoroscopeGenerationFailure extends Error {
  constructor(
    readonly code: DailyHoroscopeGenerationError,
    readonly upstreamStatus?: number,
    readonly upstreamCode?: string,
  ) {
    super(code);
  }
}

const AI_CACHE_TTL_SECONDS = 86400;
const FALLBACK_CACHE_TTL_SECONDS = 300;
// The model returns eleven fields in one JSON body per language. At 6s a large
// part of the daily batch was aborted mid-generation and every zodiac fell back
// to the same static template, so the timeout leaves room for a full response.
const GEMINI_TIMEOUT_MS = 25000;
const GEMINI_MODEL = 'gemini-3.1-flash-lite';

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

export function horoscopeCacheKey(
  date: string,
  zodiacSlug: string,
  lang: HoroscopeLang,
): string {
  return `horoscope:v5:${lang}:${date}:${zodiacSlug}`;
}

export function horoscopeFallbackCacheKey(
  date: string,
  zodiacSlug: string,
  lang: HoroscopeLang,
): string {
  return `horoscope:fallback:v5:${lang}:${date}:${zodiacSlug}`;
}

function buildPrompt(zodiacSlug: DailyZodiacSlug, date: string, lang: HoroscopeLang): string {
  const zodiac = getDailyZodiac(zodiacSlug);
  if (!zodiac) throw new Error('Invalid zodiac sign');

  const name = zodiac.name[lang];
  const planet = zodiac.planet[lang];
  const element = zodiac.element[lang];
  const [year, month, day] = date.split('-');

  if (lang === 'ko') {
    const dateLabel = `${year}년 ${Number(month)}월 ${Number(day)}일`;
    return `당신은 오락 및 자기성찰용 별자리 운세 편집자입니다. ${dateLabel} ${name}의 일일 운세를 아래 JSON 형식으로 작성하세요.

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
- JSON만 출력하고 마크다운은 쓰지 마세요. 모든 문장은 한국어로 작성하세요.
- 같은 표현을 반복하거나 본문에 점수를 다시 쓰지 마세요.
- 미래를 확정적으로 예언하지 말고 선택을 돌아보는 참고 문장으로 쓰세요.
- 투자, 치료, 법률 판단을 지시하지 마세요.
- 각 항목에 오늘 바로 적용할 수 있는 구체적인 행동 하나를 포함하세요.
- ${name}의 상징인 ${element} 원소와 ${planet}을 자연스럽게 반영하세요.`;
  }

  if (lang === 'ja') {
    const dateLabel = `${year}年${Number(month)}月${Number(day)}日`;
    return `あなたは娯楽と自己省察のための星座運勢の編集者です。${dateLabel}の${name}の今日の運勢を、次のJSON形式で書いてください。

{
  "score": 55〜95の整数,
  "summary": "要点 30〜60文字",
  "overall": "総合運 120〜180文字",
  "love": "恋愛・人間関係の運勢 90〜140文字",
  "money": "金運 90〜140文字",
  "work": "仕事・学業の運勢 90〜140文字",
  "health": "生活の健康アドバイス 70〜120文字",
  "luckyColor": "色を一語",
  "luckyNumber": 1〜99の整数,
  "luckyItem": "日常の品を短く（12文字以内）",
  "advice": "今日実践する助言 30〜50文字"
}

書き方の原則:
- JSONだけを出力し、マークダウンは使わないでください。本文はすべて日本語で書いてください。
- 同じ表現を繰り返したり、本文にスコアを書き直したりしないでください。
- 未来を断定して予言せず、選択を振り返る参考の文章として書いてください。
- 投資・治療・法律上の判断を指示しないでください。
- 各項目に、今日すぐ実行できる具体的な行動をひとつ含めてください。
- ${name}の象徴である${element}の元素と${planet}を自然に反映してください。`;
  }

  const dateLabel = new Date(Date.UTC(Number(year), Number(month) - 1, Number(day)))
    .toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
  return `You are an editor of horoscopes used for entertainment and self-reflection. Write today's reading for ${name} on ${dateLabel} in the following JSON shape.

{
  "score": integer from 55 to 95,
  "summary": "one-sentence gist, 12-20 words",
  "overall": "overall reading, 55-80 words",
  "love": "love and relationships reading, 35-55 words",
  "money": "money reading, 35-55 words",
  "work": "work and study reading, 35-55 words",
  "health": "everyday health advice, 30-55 words",
  "luckyColor": "a single colour word",
  "luckyNumber": integer from 1 to 99,
  "luckyItem": "an ordinary object, at most 4 words",
  "advice": "one action to take today, 15-25 words"
}

Rules:
- Output JSON only, with no markdown. Write every sentence in English.
- Do not repeat the same phrasing or restate the score inside a field.
- Do not foretell the future as settled fact; write as a reference for reviewing choices.
- Do not give investment, medical or legal instructions.
- Include one concrete action in each field that can be taken today.
- Naturally reflect ${name}'s ${element} element and its ruling planet ${planet}.`;
}

async function generateWithGemini(
  zodiacSlug: DailyZodiacSlug,
  date: string,
  lang: HoroscopeLang,
): Promise<DailyHoroscope> {
  const zodiac = getDailyZodiac(zodiacSlug);
  if (!zodiac) throw new Error('Invalid zodiac sign');

  const apiKey = getGeminiKey();
  if (!apiKey) throw new DailyHoroscopeGenerationFailure('missing-api-key');

  const prompt = buildPrompt(zodiacSlug, date, lang);

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), GEMINI_TIMEOUT_MS);
  let response: Response;
  try {
    response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
        signal: controller.signal,
      },
    );
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      throw new DailyHoroscopeGenerationFailure('timeout');
    }
    throw new DailyHoroscopeGenerationFailure('upstream');
  } finally {
    clearTimeout(timeout);
  }
  let json: {
    candidates?: { content?: { parts?: { text?: string }[] } }[];
    error?: { message?: string; status?: string };
  };
  try {
    json = await response.json() as typeof json;
  } catch {
    throw new DailyHoroscopeGenerationFailure('invalid-response');
  }

  if (!response.ok || json.error) {
    // 429 RESOURCE_EXHAUSTED (quota) and 503 UNAVAILABLE (overload) need
    // different handling, so keep the provider status on the failure.
    throw new DailyHoroscopeGenerationFailure('upstream', response.status, json.error?.status);
  }

  const text = json.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ?? '';
  const cleaned = text.replace(/^```json\n?/i, '').replace(/\n?```$/, '').trim();
  try {
    return normalizeDailyHoroscope(JSON.parse(cleaned), zodiacSlug, date, { lang });
  } catch {
    throw new DailyHoroscopeGenerationFailure('invalid-response');
  }
}

export async function getDailyHoroscope(
  zodiacSlug: DailyZodiacSlug,
  date: string,
  options: { force?: boolean; generate?: boolean; lang?: HoroscopeLang } = {},
): Promise<DailyHoroscopeResult> {
  const zodiac = getDailyZodiac(zodiacSlug);
  if (!zodiac) throw new Error('Invalid zodiac sign');

  const lang = options.lang ?? DEFAULT_HOROSCOPE_LANG;
  const cacheKey = horoscopeCacheKey(date, zodiacSlug, lang);
  const fallbackCacheKey = horoscopeFallbackCacheKey(date, zodiacSlug, lang);
  const kv = getKV();

  if (kv && !options.force) {
    try {
      const cached = await kv.get(cacheKey);
      if (cached) {
        return {
          horoscope: normalizeDailyHoroscope(JSON.parse(cached), zodiacSlug, date, {
            preserveGeneratedAt: true,
            lang,
          }),
          cacheStatus: 'HIT',
          source: 'ai',
        };
      }

      if (!options.generate) {
        const cachedFallback = await kv.get(fallbackCacheKey);
        if (cachedFallback) {
          return {
            horoscope: normalizeDailyHoroscope(JSON.parse(cachedFallback), zodiacSlug, date, {
              preserveGeneratedAt: true,
              lang,
            }),
            cacheStatus: 'HIT',
            source: 'fallback',
          };
        }
      }
    } catch {
      // A cache read failure should not block a useful daily page.
    }
  }

  let generationError: DailyHoroscopeGenerationError | undefined;
  let upstreamStatus: number | undefined;
  let upstreamCode: string | undefined;
  if (options.generate) {
    try {
      const horoscope = await generateWithGemini(zodiacSlug, date, lang);
      if (kv) {
        try {
          await kv.put(cacheKey, JSON.stringify(horoscope), {
            expirationTtl: AI_CACHE_TTL_SECONDS,
          });
        } catch {
          // A persistence failure should not discard valid generated content.
        }
      }
      return { horoscope, cacheStatus: 'MISS', source: 'ai' };
    } catch (error) {
      if (error instanceof DailyHoroscopeGenerationFailure) {
        generationError = error.code;
        upstreamStatus = error.upstreamStatus;
        upstreamCode = error.upstreamCode;
      } else {
        generationError = 'invalid-response';
      }
      // Public pages still receive deterministic content when generation fails.
    }
  }

  const horoscope = buildFallbackHoroscope(zodiacSlug, date, lang);
  if (kv) {
    try {
      await kv.put(fallbackCacheKey, JSON.stringify(horoscope), {
        expirationTtl: FALLBACK_CACHE_TTL_SECONDS,
      });
    } catch {
      // The response remains valid even if persistence is temporarily unavailable.
    }
  }

  return {
    horoscope,
    cacheStatus: 'MISS',
    source: 'fallback',
    generationError,
    upstreamStatus,
    upstreamCode,
  };
}
