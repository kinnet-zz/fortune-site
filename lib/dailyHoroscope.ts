export const DAILY_ZODIACS = [
  { slug: 'aries', ko: '양자리', emoji: '♈', element: '불', planet: '화성', dateRange: '3/21~4/19' },
  { slug: 'taurus', ko: '황소자리', emoji: '♉', element: '흙', planet: '금성', dateRange: '4/20~5/20' },
  { slug: 'gemini', ko: '쌍둥이자리', emoji: '♊', element: '공기', planet: '수성', dateRange: '5/21~6/21' },
  { slug: 'cancer', ko: '게자리', emoji: '♋', element: '물', planet: '달', dateRange: '6/22~7/22' },
  { slug: 'leo', ko: '사자자리', emoji: '♌', element: '불', planet: '태양', dateRange: '7/23~8/22' },
  { slug: 'virgo', ko: '처녀자리', emoji: '♍', element: '흙', planet: '수성', dateRange: '8/23~9/22' },
  { slug: 'libra', ko: '천칭자리', emoji: '♎', element: '공기', planet: '금성', dateRange: '9/23~10/23' },
  { slug: 'scorpio', ko: '전갈자리', emoji: '♏', element: '물', planet: '명왕성', dateRange: '10/24~11/22' },
  { slug: 'sagittarius', ko: '사수자리', emoji: '♐', element: '불', planet: '목성', dateRange: '11/23~12/21' },
  { slug: 'capricorn', ko: '염소자리', emoji: '♑', element: '흙', planet: '토성', dateRange: '12/22~1/19' },
  { slug: 'aquarius', ko: '물병자리', emoji: '♒', element: '공기', planet: '천왕성', dateRange: '1/20~2/18' },
  { slug: 'pisces', ko: '물고기자리', emoji: '♓', element: '물', planet: '해왕성', dateRange: '2/19~3/20' },
] as const;

export type DailyZodiacSlug = (typeof DAILY_ZODIACS)[number]['slug'];

export interface DailyHoroscope {
  zodiac: DailyZodiacSlug;
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

export function getDailyZodiac(value: string) {
  return DAILY_ZODIACS.find((zodiac) => zodiac.slug === value);
}

export function getTodayKST(now = new Date()): string {
  const kst = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  return kst.toISOString().slice(0, 10);
}

export function formatKoreanDate(dateString: string): string {
  const [year, month, day] = dateString.split('-').map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
  return `${year}년 ${month}월 ${day}일 (${weekdays[date.getUTCDay()]}요일)`;
}

function hashText(value: string): number {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i += 1) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

const SUMMARY_TEMPLATES = [
  '서두르기보다 우선순위를 분명히 하면 흐름이 좋아지는 날입니다.',
  '작은 선택 하나가 하루의 분위기를 긍정적으로 바꿀 수 있습니다.',
  '익숙한 방식에 한 가지 변화를 더하면 새로운 기회가 보입니다.',
  '주변의 말에 흔들리기보다 자신의 기준을 확인하기 좋은 날입니다.',
];

const LOVE_TEMPLATES = [
  '상대의 말을 해석하기보다 그대로 듣는 태도가 관계의 긴장을 줄여줍니다. 솔로라면 편안한 대화에서 새로운 호감을 발견할 수 있습니다.',
  '짧더라도 솔직한 표현이 관계를 부드럽게 만듭니다. 답을 재촉하기보다 서로의 속도를 존중해보세요.',
  '가까운 사람에게 먼저 안부를 전하기 좋은 날입니다. 기대를 크게 만들기보다 작은 친절에 집중하면 관계가 안정됩니다.',
  '감정이 앞설 때는 바로 결론 내리지 말고 한 번 더 확인하세요. 차분한 질문이 오해를 줄이는 데 도움이 됩니다.',
];

const MONEY_TEMPLATES = [
  '큰 결정보다 오늘 필요한 지출과 미룰 수 있는 지출을 구분해보세요. 작은 점검이 다음 선택을 더 편하게 만듭니다.',
  '충동구매를 피하고 이미 세운 계획을 유지하는 편이 좋습니다. 금전 결정은 운세보다 실제 예산을 기준으로 판단하세요.',
  '새로운 수익 아이디어를 메모하기 좋은 날입니다. 바로 투자하기보다 비용과 위험을 먼저 확인해보세요.',
  '정기 지출이나 구독 항목을 살펴보면 놓친 절약 지점을 찾을 수 있습니다. 무리한 선택은 잠시 보류하세요.',
];

const WORK_TEMPLATES = [
  '오전에 가장 중요한 일 하나를 먼저 끝내면 오후의 부담이 줄어듭니다. 협업에서는 진행 상황을 짧고 분명하게 공유하세요.',
  '새 일을 벌이기보다 진행 중인 작업을 정리하는 데 유리합니다. 막힌 부분은 혼자 끌기보다 구체적으로 도움을 요청해보세요.',
  '집중할 시간과 소통할 시간을 나누면 효율이 높아집니다. 완벽한 결과보다 확인 가능한 다음 단계에 집중하세요.',
  '예상과 다른 요청이 들어와도 우선순위를 다시 정하면 대응할 수 있습니다. 중요한 약속은 기록으로 남겨두세요.',
];

const HEALTH_TEMPLATES = [
  '오래 앉아 있었다면 가벼운 스트레칭과 수분 보충으로 리듬을 바꿔보세요. 불편함이 계속되면 운세가 아닌 전문가의 조언을 따르세요.',
  '수면 시간을 일정하게 유지하고 자극적인 음식은 줄이는 편이 좋습니다. 짧은 산책이 생각을 정리하는 데 도움이 됩니다.',
  '무리해서 계획을 채우기보다 중간 휴식 시간을 확보하세요. 몸의 이상 신호는 추측하지 말고 의료진과 상담하세요.',
  '화면에서 잠시 눈을 떼고 천천히 호흡해보세요. 오늘의 목표는 강한 운동보다 꾸준한 생활 리듬입니다.',
];

const ADVICE_TEMPLATES = [
  '완벽한 답보다 지금 할 수 있는 한 걸음을 선택하세요.',
  '오늘의 감정과 실제 사실을 나누어 바라보세요.',
  '속도를 늦춰도 방향을 잃지 않으면 괜찮습니다.',
  '작은 약속 하나를 지키는 데 집중해보세요.',
];

const LUCKY_COLORS = ['보라색', '파란색', '초록색', '노란색', '주황색', '분홍색', '하늘색', '금색', '빨간색', '흰색', '남색', '연보라'];
const LUCKY_ITEMS = ['작은 노트', '텀블러', '손거울', '향초', '이어폰', '꽃 한 송이', '책', '볼펜', '차 한 잔', '운동화', '일기장', '손수건'];

export function buildFallbackHoroscope(zodiacSlug: DailyZodiacSlug, date: string): DailyHoroscope {
  const zodiac = getDailyZodiac(zodiacSlug);
  if (!zodiac) throw new Error('Invalid zodiac sign');

  const seed = hashText(`${date}:${zodiacSlug}`);
  const pick = <T,>(items: readonly T[], offset: number) => items[(seed + offset) % items.length];

  return {
    zodiac: zodiacSlug,
    zodiacKo: zodiac.ko,
    date,
    emoji: zodiac.emoji,
    score: 55 + (seed % 41),
    summary: pick(SUMMARY_TEMPLATES, 0),
    overall: `${zodiac.planet}과 ${zodiac.element} 원소의 상징을 참고하면, 오늘 ${zodiac.ko}는 해야 할 일을 넓게 펼치기보다 우선순위를 좁힐 때 안정감을 얻기 쉽습니다. 주변의 반응을 예측하는 데 에너지를 쓰기보다 직접 확인할 수 있는 사실과 다음 행동에 집중해보세요.`,
    love: pick(LOVE_TEMPLATES, 1),
    money: pick(MONEY_TEMPLATES, 2),
    work: pick(WORK_TEMPLATES, 3),
    health: pick(HEALTH_TEMPLATES, 4),
    luckyColor: pick(LUCKY_COLORS, 5),
    luckyNumber: 1 + ((seed + 6) % 99),
    luckyItem: pick(LUCKY_ITEMS, 7),
    advice: pick(ADVICE_TEMPLATES, 8),
    generatedAt: new Date().toISOString(),
  };
}

function cleanText(value: unknown, fallback: string, maxLength: number): string {
  if (typeof value !== 'string') return fallback;
  const cleaned = value.trim().slice(0, maxLength);
  return cleaned || fallback;
}

export function normalizeDailyHoroscope(
  value: unknown,
  zodiacSlug: DailyZodiacSlug,
  date: string,
): DailyHoroscope {
  const fallback = buildFallbackHoroscope(zodiacSlug, date);
  if (typeof value !== 'object' || value === null) return fallback;

  const candidate = value as Record<string, unknown>;
  const score = Number(candidate.score);
  const luckyNumber = Number(candidate.luckyNumber);

  return {
    ...fallback,
    score: Number.isFinite(score) ? Math.max(55, Math.min(95, Math.round(score))) : fallback.score,
    summary: cleanText(candidate.summary, fallback.summary, 90),
    overall: cleanText(candidate.overall, fallback.overall, 500),
    love: cleanText(candidate.love, fallback.love, 350),
    money: cleanText(candidate.money, fallback.money, 350),
    work: cleanText(candidate.work, fallback.work, 350),
    health: cleanText(candidate.health, fallback.health, 300),
    luckyColor: cleanText(candidate.luckyColor, fallback.luckyColor, 20),
    luckyNumber: Number.isFinite(luckyNumber)
      ? Math.max(1, Math.min(99, Math.round(luckyNumber)))
      : fallback.luckyNumber,
    luckyItem: cleanText(candidate.luckyItem, fallback.luckyItem, 30),
    advice: cleanText(candidate.advice, fallback.advice, 120),
  };
}
