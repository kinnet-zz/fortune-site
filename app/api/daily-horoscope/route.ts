export const runtime = 'edge';

import { NextRequest, NextResponse } from 'next/server';
import { getRequestContext } from '@cloudflare/next-on-pages';

export interface DailyHoroscope {
  zodiac: string;
  zodiacKo: string;
  date: string;
  emoji: string;
  score: number;
  summary: string;
  overall: string;
  love: string;
  money: string;
  work: string;
  health: string;
  luckyColor: string;
  luckyNumber: number;
  luckyItem: string;
  advice: string;
  generatedAt: string;
}

const ZODIAC_MAP: Record<string, { ko: string; emoji: string; element: string; planet: string }> = {
  aries:       { ko: '양자리',     emoji: '♈', element: '불', planet: '화성' },
  taurus:      { ko: '황소자리',   emoji: '♉', element: '흙', planet: '금성' },
  gemini:      { ko: '쌍둥이자리', emoji: '♊', element: '공기', planet: '수성' },
  cancer:      { ko: '게자리',     emoji: '♋', element: '물', planet: '달' },
  leo:         { ko: '사자자리',   emoji: '♌', element: '불', planet: '태양' },
  virgo:       { ko: '처녀자리',   emoji: '♍', element: '흙', planet: '수성' },
  libra:       { ko: '천칭자리',   emoji: '♎', element: '공기', planet: '금성' },
  scorpio:     { ko: '전갈자리',   emoji: '♏', element: '물', planet: '명왕성' },
  sagittarius: { ko: '사수자리',   emoji: '♐', element: '불', planet: '목성' },
  capricorn:   { ko: '염소자리',   emoji: '♑', element: '흙', planet: '토성' },
  aquarius:    { ko: '물병자리',   emoji: '♒', element: '공기', planet: '천왕성' },
  pisces:      { ko: '물고기자리', emoji: '♓', element: '물', planet: '해왕성' },
};

const LUCKY_COLORS = ['보라색', '파란색', '초록색', '노란색', '주황색', '분홍색', '하늘색', '금색', '빨간색', '흰색', '남색', '연보라'];
const LUCKY_ITEMS = ['수정 팔찌', '네잎클로버', '작은 거울', '향초', '노트북', '꽃 한 송이', '책', '음악', '차(茶)', '산책', '일기장', '달빛 아래 산책'];

function getTodayKST(): string {
  const now = new Date();
  const kst = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  return kst.toISOString().slice(0, 10);
}

function getKV() {
  const { env } = getRequestContext();
  return (env as Record<string, { get: (k: string) => Promise<string | null>; put: (k: string, v: string, opts?: { expirationTtl?: number }) => Promise<void> }>)['LEADERBOARD_KV'];
}

function fallbackHoroscope(zodiac: string, date: string): DailyHoroscope {
  const info = ZODIAC_MAP[zodiac];
  const day = new Date(date).getDay();
  const seed = (zodiac.charCodeAt(0) * 7 + day * 13) % 100;
  const score = 50 + (seed % 45);
  return {
    zodiac,
    zodiacKo: info.ko,
    date,
    emoji: info.emoji,
    score,
    summary: `${info.ko}에게 오늘은 내면의 균형을 찾는 날입니다. ${info.planet}의 에너지가 당신을 부드럽게 이끌어 줍니다.`,
    overall: `${info.planet}의 영향으로 오늘 ${info.ko}에게는 새로운 에너지가 흐릅니다. ${info.element} 원소의 특성이 두드러지는 하루로, 자신의 강점을 믿고 나아가세요. 주변과의 소통에서 뜻밖의 기쁨을 발견할 수 있습니다.`,
    love: '감정을 솔직하게 표현하는 것이 관계에 긍정적인 변화를 가져옵니다. 파트너와 작은 것을 함께 나누는 시간을 가져보세요.',
    money: '충동적인 지출보다는 계획적인 소비가 필요한 날입니다. 작은 절약 습관이 미래의 안정을 만듭니다.',
    work: '집중력이 높아지는 오전 시간을 적극 활용하세요. 팀원과의 소통에서 새로운 아이디어가 나올 수 있습니다.',
    health: '규칙적인 수면과 수분 섭취에 신경 쓰세요. 간단한 스트레칭이 몸의 피로를 풀어줄 것입니다.',
    luckyColor: LUCKY_COLORS[seed % LUCKY_COLORS.length],
    luckyNumber: (seed % 9) + 1,
    luckyItem: LUCKY_ITEMS[seed % LUCKY_ITEMS.length],
    advice: '오늘 하루 자신을 믿고, 한 걸음씩 나아가세요.',
    generatedAt: new Date().toISOString(),
  };
}

async function generateWithGemini(zodiac: string, date: string): Promise<DailyHoroscope> {
  const info = ZODIAC_MAP[zodiac];
  const apiKey = (process.env.GEMINI_API_KEY ?? '') as string;
  if (!apiKey) return fallbackHoroscope(zodiac, date);

  const [year, month, day] = date.split('-');
  const dateLabel = `${year}년 ${parseInt(month)}월 ${parseInt(day)}일`;

  const prompt = `당신은 전문 점성술사입니다. ${dateLabel} ${info.ko}(${zodiac})의 일일 운세 블로그 아티클을 JSON으로 작성해주세요.

다음 JSON 형식으로 정확히 응답하세요 (JSON만, 마크다운 코드블록 없이):
{
  "score": 운세 점수 (55~95 사이 정수),
  "summary": "한 줄 요약 (30자 이내)",
  "overall": "종합 운세 (100~150자, 구체적이고 따뜻한 어조)",
  "love": "사랑/인간관계 운세 (80~120자)",
  "money": "금전/재물 운세 (80~120자)",
  "work": "직업/커리어 운세 (80~120자)",
  "health": "건강 운세 (60~100자)",
  "luckyColor": "오늘의 행운 색깔 (한 단어)",
  "luckyNumber": 행운의 숫자 (1~99 사이 정수),
  "luckyItem": "오늘의 행운 아이템 (10자 이내)",
  "advice": "오늘 하루를 위한 한 마디 조언 (40자 이내)"
}

${info.ko}의 특성: 원소(${info.element}), 지배행성(${info.planet})
날짜: ${dateLabel}
긍정적이고 실용적인 조언을 담아주세요.`;

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
      }
    );
    const json = await res.json() as { candidates?: { content?: { parts?: { text?: string }[] } }[] };
    const text = json.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ?? '';
    const cleaned = text.replace(/^```json\n?/, '').replace(/\n?```$/, '').trim();
    const parsed = JSON.parse(cleaned) as Partial<DailyHoroscope>;

    return {
      zodiac,
      zodiacKo: info.ko,
      date,
      emoji: info.emoji,
      score: typeof parsed.score === 'number' ? Math.min(95, Math.max(55, parsed.score)) : 70,
      summary: parsed.summary ?? `${info.ko}의 오늘 운세`,
      overall: parsed.overall ?? '',
      love: parsed.love ?? '',
      money: parsed.money ?? '',
      work: parsed.work ?? '',
      health: parsed.health ?? '',
      luckyColor: parsed.luckyColor ?? '보라색',
      luckyNumber: typeof parsed.luckyNumber === 'number' ? parsed.luckyNumber : 7,
      luckyItem: parsed.luckyItem ?? '수정',
      advice: parsed.advice ?? '오늘도 화이팅!',
      generatedAt: new Date().toISOString(),
    };
  } catch {
    return fallbackHoroscope(zodiac, date);
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const zodiac = (searchParams.get('zodiac') ?? '').toLowerCase();
  const date = searchParams.get('date') ?? getTodayKST();
  const force = searchParams.get('force') === 'true';
  const secret = process.env.CRON_SECRET ?? '';
  const auth = request.headers.get('Authorization') ?? '';
  const authorized = secret && auth === `Bearer ${secret}`;

  if (!ZODIAC_MAP[zodiac]) {
    return NextResponse.json({ error: 'Invalid zodiac sign' }, { status: 400 });
  }

  if (force && !authorized) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const cacheKey = `horoscope:v1:${date}:${zodiac}`;

  try {
    const kv = getKV();

    if (!force) {
      const cached = await kv.get(cacheKey);
      if (cached) {
        const data = JSON.parse(cached) as DailyHoroscope;
        return NextResponse.json(data, {
          headers: { 'Cache-Control': 'public, max-age=3600', 'X-Cache': 'HIT' },
        });
      }
    }

    const horoscope = await generateWithGemini(zodiac, date);
    await kv.put(cacheKey, JSON.stringify(horoscope), { expirationTtl: 86400 });

    return NextResponse.json(horoscope, {
      headers: { 'Cache-Control': 'no-store', 'X-Cache': 'MISS' },
    });
  } catch {
    const horoscope = fallbackHoroscope(zodiac, date);
    return NextResponse.json(horoscope, {
      headers: { 'Cache-Control': 'public, max-age=300' },
    });
  }
}
