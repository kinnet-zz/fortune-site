export interface FortuneResult {
  zodiacSign: string;
  chineseZodiac: string;
  overall: string;
  love: string;
  money: string;
  work: string;
  luckyColor: string;
  luckyNumber: number;
  score: number;
}

const MAX_READING_LENGTH = 300;
const MAX_LABEL_LENGTH = 50;

function normalizeText(value: unknown, maxLength: number): string | null {
  if (typeof value !== 'string') return null;
  const normalized = value.trim().slice(0, maxLength);
  return normalized.length > 0 ? normalized : null;
}

export function normalizeFortuneResult(value: unknown): FortuneResult | null {
  if (typeof value !== 'object' || value === null) return null;
  const candidate = value as Record<string, unknown>;

  const zodiacSign = normalizeText(candidate.zodiacSign, MAX_LABEL_LENGTH);
  const chineseZodiac = normalizeText(candidate.chineseZodiac, MAX_LABEL_LENGTH);
  const overall = normalizeText(candidate.overall, MAX_READING_LENGTH);
  const love = normalizeText(candidate.love, MAX_READING_LENGTH);
  const money = normalizeText(candidate.money, MAX_READING_LENGTH);
  const work = normalizeText(candidate.work, MAX_READING_LENGTH);
  const luckyColor = normalizeText(candidate.luckyColor, MAX_LABEL_LENGTH);
  const luckyNumber = Number(candidate.luckyNumber);
  const score = Number(candidate.score);

  if (
    !zodiacSign || !chineseZodiac || !overall || !love || !money || !work || !luckyColor ||
    !Number.isFinite(luckyNumber) || !Number.isFinite(score)
  ) {
    return null;
  }

  return {
    zodiacSign,
    chineseZodiac,
    overall,
    love,
    money,
    work,
    luckyColor,
    luckyNumber: Math.max(1, Math.min(99, Math.round(luckyNumber))),
    score: Math.max(1, Math.min(100, Math.round(score))),
  };
}
