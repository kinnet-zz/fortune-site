import { describe, expect, it } from 'vitest';
import {
  FortuneRequestError,
  getFortuneErrorCode,
  getLocalDateInputValue,
  isLatestFortuneRequest,
  makeFortuneRequestKey,
  shouldStartFortuneRequest,
} from '@/lib/homeFortune';

describe('homepage fortune helpers', () => {
  it('formats the date using local calendar fields instead of UTC', () => {
    const localDate = new Date(2026, 0, 2, 0, 15);
    expect(getLocalDateInputValue(localDate)).toBe('2026-01-02');
  });

  it('creates a stable key for synchronous duplicate-request prevention', () => {
    expect(makeFortuneRequestKey('ko', { birthDate: '1990-05-01', gender: '여자' }))
      .toBe('ko:1990-05-01:여자');
  });

  it('accepts only the latest request with matching language and input', () => {
    const request = { id: 3, lang: 'ko' as const, birthDate: '1990-05-01', gender: '여자' };
    const input = { birthDate: request.birthDate, gender: request.gender };

    expect(isLatestFortuneRequest(3, request, 'ko', input)).toBe(true);
    expect(isLatestFortuneRequest(4, request, 'ko', input)).toBe(false);
    expect(isLatestFortuneRequest(3, request, 'en', input)).toBe(false);
    expect(isLatestFortuneRequest(3, request, 'ko', { ...input, gender: '남자' })).toBe(false);
  });

  it('models duplicate suppression and a language-change race end to end', () => {
    const input = { birthDate: '1990-05-01', gender: '여자' };
    const firstKey = makeFortuneRequestKey('ko', input);
    expect(shouldStartFortuneRequest(null, firstKey)).toBe(true);

    let activeKey: string | null = firstKey;
    const first = { id: 1, lang: 'ko' as const, ...input };
    expect(shouldStartFortuneRequest(activeKey, firstKey)).toBe(false);

    const secondKey = makeFortuneRequestKey('en', input);
    expect(shouldStartFortuneRequest(activeKey, secondKey)).toBe(true);
    activeKey = secondKey;
    const second = { id: 2, lang: 'en' as const, ...input };

    expect(isLatestFortuneRequest(2, first, 'en', input)).toBe(false);
    expect(isLatestFortuneRequest(2, second, 'en', input)).toBe(true);
    expect(activeKey).toBe(secondKey);
  });

  it('uses typed error codes without inspecting Error.message', () => {
    expect(getFortuneErrorCode(new FortuneRequestError('QUOTA_EXCEEDED'))).toBe('QUOTA_EXCEEDED');
    expect(getFortuneErrorCode(new Error('QUOTA_EXCEEDED'))).toBe('GENERAL_ERROR');
  });
});
