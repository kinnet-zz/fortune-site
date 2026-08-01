import type { Lang } from '@/lib/i18n';

export type FortuneErrorCode = 'QUOTA_EXCEEDED' | 'GENERAL_ERROR';
export type FortuneErrorScope = 'form' | 'refresh';

export interface FortuneErrorState {
  code: FortuneErrorCode;
  scope: FortuneErrorScope;
}

export interface FortuneRequestSnapshot {
  id: number;
  lang: Lang;
  birthDate: string;
  gender: string;
}

export interface FortuneInputSnapshot {
  birthDate: string;
  gender: string;
}

export class FortuneRequestError extends Error {
  readonly code: FortuneErrorCode;

  constructor(code: FortuneErrorCode) {
    super(code === 'QUOTA_EXCEEDED' ? 'Fortune request quota exceeded' : 'Fortune request failed');
    this.name = 'FortuneRequestError';
    this.code = code;
  }
}

export function getFortuneErrorCode(error: unknown): FortuneErrorCode {
  return error instanceof FortuneRequestError ? error.code : 'GENERAL_ERROR';
}

export function getLocalDateInputValue(date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function makeFortuneRequestKey(lang: Lang, input: FortuneInputSnapshot): string {
  return `${lang}:${input.birthDate}:${input.gender}`;
}

export function shouldStartFortuneRequest(inFlightKey: string | null, nextKey: string): boolean {
  return inFlightKey !== nextKey;
}

export function isLatestFortuneRequest(
  activeRequestId: number,
  request: FortuneRequestSnapshot,
  currentLang: Lang,
  currentInput: FortuneInputSnapshot,
): boolean {
  return (
    activeRequestId === request.id &&
    currentLang === request.lang &&
    currentInput.birthDate === request.birthDate &&
    currentInput.gender === request.gender
  );
}

export function isAbortError(error: unknown): boolean {
  return typeof error === 'object' && error !== null && 'name' in error && error.name === 'AbortError';
}
