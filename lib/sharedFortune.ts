export interface ShareableFortuneResult {
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

const MAX_READING_LENGTH = 120;
const MAX_LABEL_LENGTH = 40;
export const MAX_SHARED_TOKEN_LENGTH = 4_000;

function isBoundedString(value: unknown, maxLength: number): value is string {
  return typeof value === 'string' && value.length > 0 && value.length <= maxLength;
}

function isShareableFortune(value: unknown): value is ShareableFortuneResult {
  if (typeof value !== 'object' || value === null) return false;
  const result = value as Record<string, unknown>;

  return (
    isBoundedString(result.zodiacSign, MAX_LABEL_LENGTH) &&
    isBoundedString(result.chineseZodiac, MAX_LABEL_LENGTH) &&
    isBoundedString(result.overall, MAX_READING_LENGTH) &&
    isBoundedString(result.love, MAX_READING_LENGTH) &&
    isBoundedString(result.money, MAX_READING_LENGTH) &&
    isBoundedString(result.work, MAX_READING_LENGTH) &&
    isBoundedString(result.luckyColor, MAX_LABEL_LENGTH) &&
    typeof result.luckyNumber === 'number' && Number.isFinite(result.luckyNumber) &&
    result.luckyNumber >= 1 && result.luckyNumber <= 99 &&
    typeof result.score === 'number' && Number.isFinite(result.score) &&
    result.score >= 1 && result.score <= 100
  );
}

export function encodeSharedResult(fortune: ShareableFortuneResult): string {
  const sharePayload: ShareableFortuneResult = {
    ...fortune,
    zodiacSign: fortune.zodiacSign.slice(0, MAX_LABEL_LENGTH),
    chineseZodiac: fortune.chineseZodiac.slice(0, MAX_LABEL_LENGTH),
    overall: fortune.overall.slice(0, MAX_READING_LENGTH),
    love: fortune.love.slice(0, MAX_READING_LENGTH),
    money: fortune.money.slice(0, MAX_READING_LENGTH),
    work: fortune.work.slice(0, MAX_READING_LENGTH),
    luckyColor: fortune.luckyColor.slice(0, MAX_LABEL_LENGTH),
    luckyNumber: Number.isFinite(fortune.luckyNumber)
      ? Math.max(1, Math.min(99, fortune.luckyNumber))
      : 1,
    score: Number.isFinite(fortune.score)
      ? Math.max(1, Math.min(100, fortune.score))
      : 1,
  };
  const bytes = new TextEncoder().encode(JSON.stringify(sharePayload));
  let binary = '';
  bytes.forEach((byte) => { binary += String.fromCharCode(byte); });
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

export function decodeSharedResult(token: string): ShareableFortuneResult | null {
  if (!token || token.length > MAX_SHARED_TOKEN_LENGTH) return null;

  let parsed: unknown;
  try {
    const normalized = token.replace(/-/g, '+').replace(/_/g, '/');
    const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, '=');
    const binary = atob(padded);
    const bytes = Uint8Array.from(binary, (character) => character.charCodeAt(0));
    parsed = JSON.parse(new TextDecoder().decode(bytes));
  } catch {
    try {
      // 이전 공유 링크 형식도 계속 열 수 있도록 유지합니다.
      parsed = JSON.parse(decodeURIComponent(atob(token)));
    } catch {
      return null;
    }
  }

  return isShareableFortune(parsed) ? parsed : null;
}
