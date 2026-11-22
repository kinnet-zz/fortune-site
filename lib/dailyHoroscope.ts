// Languages that daily horoscopes are generated, cached and served in.
// `zh` dictionary data is kept elsewhere, but daily content is ko/en/ja only.
export const HOROSCOPE_LANGS = ['ko', 'en', 'ja'] as const;
export type HoroscopeLang = (typeof HOROSCOPE_LANGS)[number];
export const DEFAULT_HOROSCOPE_LANG: HoroscopeLang = 'ko';

export function isHoroscopeLang(value: unknown): value is HoroscopeLang {
  return typeof value === 'string' && (HOROSCOPE_LANGS as readonly string[]).includes(value);
}

/**
 * Resolves a requested daily-horoscope language. Retired languages (such as
 * `zh`) resolve to English and anything unknown to Korean, so a stale link or
 * cached client never asks for content that is not generated.
 */
export function normalizeHoroscopeLang(value: unknown): HoroscopeLang {
  if (isHoroscopeLang(value)) return value;
  if (typeof value === 'string' && value.toLowerCase().startsWith('zh')) return 'en';
  return DEFAULT_HOROSCOPE_LANG;
}

export type Localized = Record<HoroscopeLang, string>;

export const DAILY_ZODIACS = [
  { slug: 'aries', emoji: '♈', dateRange: '3/21~4/19', name: { ko: '양자리', en: 'Aries', ja: 'おひつじ座' }, element: { ko: '불', en: 'fire', ja: '火' }, planet: { ko: '화성', en: 'Mars', ja: '火星' } },
  { slug: 'taurus', emoji: '♉', dateRange: '4/20~5/20', name: { ko: '황소자리', en: 'Taurus', ja: 'おうし座' }, element: { ko: '흙', en: 'earth', ja: '地' }, planet: { ko: '금성', en: 'Venus', ja: '金星' } },
  { slug: 'gemini', emoji: '♊', dateRange: '5/21~6/21', name: { ko: '쌍둥이자리', en: 'Gemini', ja: 'ふたご座' }, element: { ko: '공기', en: 'air', ja: '風' }, planet: { ko: '수성', en: 'Mercury', ja: '水星' } },
  { slug: 'cancer', emoji: '♋', dateRange: '6/22~7/22', name: { ko: '게자리', en: 'Cancer', ja: 'かに座' }, element: { ko: '물', en: 'water', ja: '水' }, planet: { ko: '달', en: 'the Moon', ja: '月' } },
  { slug: 'leo', emoji: '♌', dateRange: '7/23~8/22', name: { ko: '사자자리', en: 'Leo', ja: 'しし座' }, element: { ko: '불', en: 'fire', ja: '火' }, planet: { ko: '태양', en: 'the Sun', ja: '太陽' } },
  { slug: 'virgo', emoji: '♍', dateRange: '8/23~9/22', name: { ko: '처녀자리', en: 'Virgo', ja: 'おとめ座' }, element: { ko: '흙', en: 'earth', ja: '地' }, planet: { ko: '수성', en: 'Mercury', ja: '水星' } },
  { slug: 'libra', emoji: '♎', dateRange: '9/23~10/23', name: { ko: '천칭자리', en: 'Libra', ja: 'てんびん座' }, element: { ko: '공기', en: 'air', ja: '風' }, planet: { ko: '금성', en: 'Venus', ja: '金星' } },
  { slug: 'scorpio', emoji: '♏', dateRange: '10/24~11/22', name: { ko: '전갈자리', en: 'Scorpio', ja: 'さそり座' }, element: { ko: '물', en: 'water', ja: '水' }, planet: { ko: '명왕성', en: 'Pluto', ja: '冥王星' } },
  { slug: 'sagittarius', emoji: '♐', dateRange: '11/23~12/21', name: { ko: '사수자리', en: 'Sagittarius', ja: 'いて座' }, element: { ko: '불', en: 'fire', ja: '火' }, planet: { ko: '목성', en: 'Jupiter', ja: '木星' } },
  { slug: 'capricorn', emoji: '♑', dateRange: '12/22~1/19', name: { ko: '염소자리', en: 'Capricorn', ja: 'やぎ座' }, element: { ko: '흙', en: 'earth', ja: '地' }, planet: { ko: '토성', en: 'Saturn', ja: '土星' } },
  { slug: 'aquarius', emoji: '♒', dateRange: '1/20~2/18', name: { ko: '물병자리', en: 'Aquarius', ja: 'みずがめ座' }, element: { ko: '공기', en: 'air', ja: '風' }, planet: { ko: '천왕성', en: 'Uranus', ja: '天王星' } },
  { slug: 'pisces', emoji: '♓', dateRange: '2/19~3/20', name: { ko: '물고기자리', en: 'Pisces', ja: 'うお座' }, element: { ko: '물', en: 'water', ja: '水' }, planet: { ko: '해왕성', en: 'Neptune', ja: '海王星' } },
] as const;

export type DailyZodiacSlug = (typeof DAILY_ZODIACS)[number]['slug'];

export interface DailyHoroscope {
  zodiac: DailyZodiacSlug;
  /** Korean name, kept so existing surfaces and cached records stay readable. */
  zodiacKo: string;
  /** Name in the language the record was generated for. */
  zodiacName: string;
  lang: HoroscopeLang;
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

export function zodiacName(slug: DailyZodiacSlug, lang: HoroscopeLang): string {
  const zodiac = getDailyZodiac(slug);
  return zodiac ? zodiac.name[lang] : slug;
}

export function getTodayKST(now = new Date()): string {
  const kst = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  return kst.toISOString().slice(0, 10);
}

export function isValidDailyDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const parsed = new Date(`${value}T00:00:00Z`);
  return Number.isFinite(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value;
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

interface FallbackCopy {
  summary: string[];
  love: string[];
  money: string[];
  work: string[];
  health: string[];
  advice: string[];
  luckyColors: string[];
  luckyItems: string[];
  overall: (zodiacName: string, planet: string, element: string) => string;
}

// Deterministic fallback content, written in each language so a cache miss or a
// failed model call never shows a Korean sentence to an English or Japanese
// reader.
const FALLBACK: Record<HoroscopeLang, FallbackCopy> = {
  ko: {
    summary: [
      '서두르기보다 우선순위를 분명히 하면 흐름이 좋아지는 날입니다.',
      '작은 선택 하나가 하루의 분위기를 긍정적으로 바꿀 수 있습니다.',
      '익숙한 방식에 한 가지 변화를 더하면 새로운 기회가 보입니다.',
      '주변의 말에 흔들리기보다 자신의 기준을 확인하기 좋은 날입니다.',
    ],
    love: [
      '상대의 말을 해석하기보다 그대로 듣는 태도가 관계의 긴장을 줄여줍니다. 솔로라면 편안한 대화에서 새로운 호감을 발견할 수 있습니다.',
      '짧더라도 솔직한 표현이 관계를 부드럽게 만듭니다. 답을 재촉하기보다 서로의 속도를 존중해보세요.',
      '가까운 사람에게 먼저 안부를 전하기 좋은 날입니다. 기대를 크게 만들기보다 작은 친절에 집중하면 관계가 안정됩니다.',
      '감정이 앞설 때는 바로 결론 내리지 말고 한 번 더 확인하세요. 차분한 질문이 오해를 줄이는 데 도움이 됩니다.',
    ],
    money: [
      '큰 결정보다 오늘 필요한 지출과 미룰 수 있는 지출을 구분해보세요. 작은 점검이 다음 선택을 더 편하게 만듭니다.',
      '충동구매를 피하고 이미 세운 계획을 유지하는 편이 좋습니다. 금전 결정은 운세보다 실제 예산을 기준으로 판단하세요.',
      '새로운 수익 아이디어를 메모하기 좋은 날입니다. 바로 투자하기보다 비용과 위험을 먼저 확인해보세요.',
      '정기 지출이나 구독 항목을 살펴보면 놓친 절약 지점을 찾을 수 있습니다. 무리한 선택은 잠시 보류하세요.',
    ],
    work: [
      '오전에 가장 중요한 일 하나를 먼저 끝내면 오후의 부담이 줄어듭니다. 협업에서는 진행 상황을 짧고 분명하게 공유하세요.',
      '새 일을 벌이기보다 진행 중인 작업을 정리하는 데 유리합니다. 막힌 부분은 혼자 끌기보다 구체적으로 도움을 요청해보세요.',
      '집중할 시간과 소통할 시간을 나누면 효율이 높아집니다. 완벽한 결과보다 확인 가능한 다음 단계에 집중하세요.',
      '예상과 다른 요청이 들어와도 우선순위를 다시 정하면 대응할 수 있습니다. 중요한 약속은 기록으로 남겨두세요.',
    ],
    health: [
      '오래 앉아 있었다면 가벼운 스트레칭과 수분 보충으로 리듬을 바꿔보세요. 불편함이 계속되면 운세가 아닌 전문가의 조언을 따르세요.',
      '수면 시간을 일정하게 유지하고 자극적인 음식은 줄이는 편이 좋습니다. 짧은 산책이 생각을 정리하는 데 도움이 됩니다.',
      '무리해서 계획을 채우기보다 중간 휴식 시간을 확보하세요. 몸의 이상 신호는 추측하지 말고 의료진과 상담하세요.',
      '화면에서 잠시 눈을 떼고 천천히 호흡해보세요. 오늘의 목표는 강한 운동보다 꾸준한 생활 리듬입니다.',
    ],
    advice: [
      '완벽한 답보다 지금 할 수 있는 한 걸음을 선택하세요.',
      '오늘의 감정과 실제 사실을 나누어 바라보세요.',
      '속도를 늦춰도 방향을 잃지 않으면 괜찮습니다.',
      '작은 약속 하나를 지키는 데 집중해보세요.',
    ],
    luckyColors: ['보라색', '파란색', '초록색', '노란색', '주황색', '분홍색', '하늘색', '금색', '빨간색', '흰색', '남색', '연보라'],
    luckyItems: ['작은 노트', '텀블러', '손거울', '향초', '이어폰', '꽃 한 송이', '책', '볼펜', '차 한 잔', '운동화', '일기장', '손수건'],
    overall: (name, planet, element) =>
      `${planet}과 ${element} 원소의 상징을 참고하면, 오늘 ${name}는 해야 할 일을 넓게 펼치기보다 우선순위를 좁힐 때 안정감을 얻기 쉽습니다. 주변의 반응을 예측하는 데 에너지를 쓰기보다 직접 확인할 수 있는 사실과 다음 행동에 집중해보세요.`,
  },
  en: {
    summary: [
      'Naming your priorities first will make the day flow better than rushing.',
      'One small choice can shift the mood of the whole day for the better.',
      'Adding a single change to a familiar routine opens a new opportunity.',
      'A good day to check your own standards instead of following every opinion around you.',
    ],
    love: [
      'Listening to what is actually said, rather than interpreting it, eases tension in a relationship. If you are single, an easy conversation can hold a new spark.',
      'A short but honest sentence softens a connection. Respect each other\u2019s pace instead of pressing for an answer.',
      'A good day to check in first with someone close. Focusing on small kindnesses keeps the relationship steady rather than raising expectations.',
      'When feelings run ahead, do not decide on the spot — check once more. A calm question prevents most misunderstandings.',
    ],
    money: [
      'Rather than a big decision, sort today\u2019s spending into what you need and what can wait. A small review makes the next choice easier.',
      'Avoid impulse purchases and keep to the plan you already made. Judge money matters by your real budget, not by a fortune.',
      'A good day to note down new income ideas. Check the cost and the risk before putting anything in.',
      'Looking through subscriptions and regular payments often uncovers a saving you missed. Hold off on anything that stretches you.',
    ],
    work: [
      'Finishing the one most important task before noon lightens the afternoon. In collaboration, share progress briefly and clearly.',
      'Better for tidying work in progress than for starting something new. When you are stuck, ask for specific help instead of carrying it alone.',
      'Separating focus time from conversation time raises your efficiency. Aim for a verifiable next step rather than a perfect result.',
      'If an unexpected request arrives, re-ordering your priorities lets you respond. Keep important promises in writing.',
    ],
    health: [
      'If you have been sitting a long time, change the rhythm with light stretching and water. If discomfort continues, follow a professional\u2019s advice rather than a fortune.',
      'Keep your sleep hours steady and cut back on overstimulating food. A short walk helps clear your thinking.',
      'Make room for a break rather than filling every hour. Do not guess at unusual body signals — talk to a clinician.',
      'Look away from the screen for a moment and breathe slowly. Today\u2019s goal is a steady daily rhythm rather than hard training.',
    ],
    advice: [
      'Choose the one step you can take now rather than the perfect answer.',
      'Look at today\u2019s feelings and today\u2019s facts as two separate things.',
      'Slowing down is fine as long as you keep your direction.',
      'Focus on keeping one small promise.',
    ],
    luckyColors: ['purple', 'blue', 'green', 'yellow', 'orange', 'pink', 'sky blue', 'gold', 'red', 'white', 'navy', 'lavender'],
    luckyItems: ['a small notebook', 'a tumbler', 'a pocket mirror', 'a scented candle', 'earphones', 'a single flower', 'a book', 'a pen', 'a cup of tea', 'sneakers', 'a diary', 'a handkerchief'],
    overall: (name, planet, element) =>
      `With ${planet} and the ${element} element behind it, ${name} tends to feel steadier today by narrowing priorities rather than spreading them wide. Spend less energy guessing how others will react and more on facts you can check and the next action you can take.`,
  },
  ja: {
    summary: [
      '急ぐより優先順位をはっきりさせると、流れがよくなる日です。',
      '小さな選択ひとつが、一日の空気を前向きに変えます。',
      'いつものやり方に変化をひとつ加えると、新しい機会が見えてきます。',
      '周りの言葉に揺れるより、自分の基準を確かめるのに良い日です。',
    ],
    love: [
      '相手の言葉を解釈するより、そのまま受け取る姿勢が関係の緊張をやわらげます。ひとりなら、気楽な会話の中に新しい好意が見つかります。',
      '短くても正直な表現が関係をなめらかにします。返事を急かすより、互いのペースを尊重してみましょう。',
      '近しい人に先に声をかけるのに良い日です。期待を大きくするより、小さな親切に集中すると関係が安定します。',
      '感情が先に立つときは、すぐ結論を出さずもう一度確かめましょう。落ち着いた問いかけが誤解を減らします。',
    ],
    money: [
      '大きな決断より、今日必要な出費と後回しにできる出費を分けてみましょう。小さな点検が次の選択を楽にします。',
      '衝動買いを避け、すでに立てた計画を保つほうが良い日です。お金の判断は運勢より実際の予算を基準にしてください。',
      '新しい収入のアイデアをメモするのに良い日です。すぐ投資する前に、費用とリスクを確かめましょう。',
      '定期支出やサブスクを見直すと、見落としていた節約が見つかります。無理な選択はいったん保留に。',
    ],
    work: [
      '午前にいちばん重要な仕事をひとつ終えると、午後の負担が軽くなります。協働では進み具合を短く明確に共有しましょう。',
      '新しく始めるより、進行中の仕事を整理するのに向いています。行き詰まった部分は抱え込まず、具体的に助けを求めましょう。',
      '集中する時間と対話する時間を分けると効率が上がります。完璧な結果より、確認できる次の一歩に集中してください。',
      '予想外の依頼が来ても、優先順位を組み直せば対応できます。大切な約束は記録に残しておきましょう。',
    ],
    health: [
      '長く座っていたなら、軽いストレッチと水分補給でリズムを変えてみましょう。不快感が続くときは運勢ではなく専門家の助言に従ってください。',
      '睡眠時間を一定に保ち、刺激の強い食べ物は控えめに。短い散歩が考えを整理する助けになります。',
      '予定を詰め込むより、途中の休憩を確保しましょう。体の異変は推測せず、医療者に相談してください。',
      '画面から少し目を離し、ゆっくり呼吸してみましょう。今日の目標は強い運動より、続けられる生活リズムです。',
    ],
    advice: [
      '完璧な答えより、いまできる一歩を選びましょう。',
      '今日の感情と今日の事実を分けて見てみましょう。',
      '速度を落としても、向きを失わなければ大丈夫です。',
      '小さな約束をひとつ守ることに集中してみましょう。',
    ],
    luckyColors: ['紫', '青', '緑', '黄色', 'オレンジ', 'ピンク', '水色', '金色', '赤', '白', '紺', '薄紫'],
    luckyItems: ['小さなノート', 'タンブラー', '手鏡', 'アロマキャンドル', 'イヤホン', '花ひと枝', '本', 'ペン', '一杯のお茶', 'スニーカー', '日記帳', 'ハンカチ'],
    overall: (name, planet, element) =>
      `${planet}と${element}の元素の象徴を踏まえると、今日の${name}はやることを広げるより優先順位を絞ると落ち着きやすくなります。周りの反応を予想することに力を使うより、自分で確かめられる事実と次の行動に集中してみてください。`,
  },
};

export function buildFallbackHoroscope(
  zodiacSlug: DailyZodiacSlug,
  date: string,
  lang: HoroscopeLang = DEFAULT_HOROSCOPE_LANG,
): DailyHoroscope {
  const zodiac = getDailyZodiac(zodiacSlug);
  if (!zodiac) throw new Error('Invalid zodiac sign');

  const copy = FALLBACK[lang];
  const seed = hashText(`${date}:${zodiacSlug}:${lang}`);
  const pick = <T,>(items: readonly T[], offset: number) => items[(seed + offset) % items.length];
  const name = zodiac.name[lang];

  return {
    zodiac: zodiacSlug,
    zodiacKo: zodiac.name.ko,
    zodiacName: name,
    lang,
    date,
    emoji: zodiac.emoji,
    score: 55 + (seed % 41),
    summary: pick(copy.summary, 0),
    overall: copy.overall(name, zodiac.planet[lang], zodiac.element[lang]),
    love: pick(copy.love, 1),
    money: pick(copy.money, 2),
    work: pick(copy.work, 3),
    health: pick(copy.health, 4),
    luckyColor: pick(copy.luckyColors, 5),
    luckyNumber: 1 + ((seed + 6) % 99),
    luckyItem: pick(copy.luckyItems, 7),
    advice: pick(copy.advice, 8),
    generatedAt: new Date().toISOString(),
  };
}

function cleanText(value: unknown, fallback: string, maxLength: number): string {
  if (typeof value !== 'string') return fallback;
  const cleaned = Array.from(value.trim()).slice(0, maxLength).join('');
  return cleaned || fallback;
}

function parseFiniteNumber(value: unknown): number | undefined {
  if (typeof value === 'number') return Number.isFinite(value) ? value : undefined;
  if (typeof value !== 'string' || value.trim() === '') return undefined;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : undefined;
}

function cleanGeneratedAt(value: unknown, fallback: string): string {
  if (typeof value !== 'string') return fallback;
  const timestamp = Date.parse(value);
  return Number.isFinite(timestamp) && new Date(timestamp).toISOString() === value
    ? value
    : fallback;
}

export function normalizeDailyHoroscope(
  value: unknown,
  zodiacSlug: DailyZodiacSlug,
  date: string,
  options: { preserveGeneratedAt?: boolean; lang?: HoroscopeLang } = {},
): DailyHoroscope {
  const lang = options.lang ?? DEFAULT_HOROSCOPE_LANG;
  const fallback = buildFallbackHoroscope(zodiacSlug, date, lang);
  if (typeof value !== 'object' || value === null) return fallback;

  const candidate = value as Record<string, unknown>;
  const score = parseFiniteNumber(candidate.score);
  const luckyNumber = parseFiniteNumber(candidate.luckyNumber);

  return {
    ...fallback,
    score: score !== undefined ? Math.max(55, Math.min(95, Math.round(score))) : fallback.score,
    summary: cleanText(candidate.summary, fallback.summary, 90),
    overall: cleanText(candidate.overall, fallback.overall, 500),
    love: cleanText(candidate.love, fallback.love, 350),
    money: cleanText(candidate.money, fallback.money, 350),
    work: cleanText(candidate.work, fallback.work, 350),
    health: cleanText(candidate.health, fallback.health, 300),
    luckyColor: cleanText(candidate.luckyColor, fallback.luckyColor, 20),
    luckyNumber: luckyNumber !== undefined
      ? Math.max(1, Math.min(99, Math.round(luckyNumber)))
      : fallback.luckyNumber,
    luckyItem: cleanText(candidate.luckyItem, fallback.luckyItem, 30),
    advice: cleanText(candidate.advice, fallback.advice, 120),
    generatedAt: options.preserveGeneratedAt
      ? cleanGeneratedAt(candidate.generatedAt, fallback.generatedAt)
      : fallback.generatedAt,
  };
}
