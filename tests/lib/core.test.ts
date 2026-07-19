import { afterEach, describe, expect, it, vi } from 'vitest';
import { getCookieConsent, isAdSensePath } from '../../lib/adConsent';
import { trackEvent } from '../../lib/analytics';
import {
  buildFallbackHoroscope,
  formatKoreanDate,
  getTodayKST,
  isValidDailyDate,
  normalizeDailyHoroscope,
} from '../../lib/dailyHoroscope';
import { normalizeFortuneResult } from '../../lib/fortuneResult';
import { decodeSharedResult, encodeSharedResult, MAX_SHARED_TOKEN_LENGTH } from '../../lib/sharedFortune';
import { getChineseZodiac, getZodiacSign } from '../../lib/zodiac';

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('analytics', () => {
  it('sends an event without personal form values', () => {
    const gtag = vi.fn();
    vi.stubGlobal('window', {
      gtag,
      localStorage: { getItem: () => 'accepted' },
    });

    trackEvent('fortune_result', { language: 'ko', score_bucket: 80 });

    expect(gtag).toHaveBeenCalledWith('event', 'fortune_result', {
      language: 'ko',
      score_bucket: 80,
    });
  });

  it('stays silent before consent scripts create gtag', () => {
    const gtag = vi.fn();
    vi.stubGlobal('window', {
      gtag,
      localStorage: { getItem: () => 'declined' },
    });
    expect(() => trackEvent('fortune_start')).not.toThrow();
    expect(gtag).not.toHaveBeenCalled();
  });

  it('queues an accepted event until the analytics script loads', () => {
    const dataLayer: unknown[][] = [];
    vi.stubGlobal('window', {
      dataLayer,
      localStorage: { getItem: () => 'accepted' },
    });

    trackEvent('shared_fortune_view', { language: 'ko' });

    expect(dataLayer).toContainEqual([
      'event',
      'shared_fortune_view',
      { language: 'ko' },
    ]);
  });
});

describe('AdSense consent and path rules', () => {
  it('accepts only known consent values', () => {
    const getItem = vi.fn()
      .mockReturnValueOnce('accepted')
      .mockReturnValueOnce('unexpected');
    vi.stubGlobal('window', { localStorage: { getItem } });

    expect(getCookieConsent()).toBe('accepted');
    expect(getCookieConsent()).toBeNull();
  });

  it('allows substantial editorial and daily horoscope pages', () => {
    expect(isAdSensePath('/blog/2026-yearly-horoscope')).toBe(true);
    expect(isAdSensePath('/guide/zodiac-compatibility')).toBe(true);
    expect(isAdSensePath('/blog/daily')).toBe(true);
    expect(isAdSensePath('/blog/daily/taurus')).toBe(true);
  });
});

describe('fortune calculations', () => {
  it('handles the Aries and Taurus boundary dates', () => {
    expect(getZodiacSign('1990-04-19').korean).toBe('양자리');
    expect(getZodiacSign('1990-04-20').korean).toBe('황소자리');
  });

  it('calculates the Chinese zodiac for past and future cycles', () => {
    expect(getChineseZodiac(1990)).toBe('말띠');
    expect(getChineseZodiac(2026)).toBe('말띠');
  });
});

describe('shared fortune links', () => {
  const fortune = {
    zodiacSign: '황소자리',
    chineseZodiac: '말띠',
    overall: '오늘은 중심을 지키세요.',
    love: '솔직하게 표현하세요.',
    money: '충동 지출을 피하세요.',
    work: '중요한 일에 집중하세요.',
    luckyColor: '노란색',
    luckyNumber: 1,
    score: 94,
  };

  it('round-trips Unicode results without birth date or gender', () => {
    expect(decodeSharedResult(encodeSharedResult(fortune))).toEqual(fortune);
  });

  it('rejects oversized or malformed URL payloads', () => {
    expect(decodeSharedResult('a'.repeat(MAX_SHARED_TOKEN_LENGTH + 1))).toBeNull();
    expect(decodeSharedResult('not-valid-base64')).toBeNull();
  });

  it('rejects a valid token whose result schema is unsafe', () => {
    const unsafe = btoa(JSON.stringify({
      zodiacSign: 'Taurus',
      chineseZodiac: 'Horse',
      overall: 'Overall',
      love: 'Love',
      money: 'Money',
      work: 'Work',
      luckyColor: 'yellow',
      luckyNumber: 1,
      score: 10_000,
    }));
    expect(decodeSharedResult(unsafe)).toBeNull();
  });
});

describe('fortune response validation', () => {
  it('normalizes numeric ranges and rejects missing labels', () => {
    const valid = {
      zodiacSign: '황소자리',
      chineseZodiac: '말띠',
      overall: '종합운',
      love: '연애운',
      money: '금전운',
      work: '직업운',
      luckyColor: '노란색',
      luckyNumber: 999,
      score: -10,
    };

    expect(normalizeFortuneResult(valid)).toMatchObject({ luckyNumber: 99, score: 1 });
    expect(normalizeFortuneResult({ ...valid, zodiacSign: null })).toBeNull();
  });
});

describe('daily horoscope SEO content', () => {
  it('uses the Korean calendar date across the UTC day boundary', () => {
    expect(getTodayKST(new Date('2026-07-19T15:30:00Z'))).toBe('2026-07-20');
    expect(formatKoreanDate('2026-07-20')).toBe('2026년 7월 20일 (월요일)');
  });

  it('accepts only real ISO calendar dates', () => {
    expect(isValidDailyDate('2026-07-20')).toBe(true);
    expect(isValidDailyDate('2026-02-29')).toBe(false);
    expect(isValidDailyDate('2026-7-20')).toBe(false);
    expect(isValidDailyDate('not-a-date')).toBe(false);
  });

  it('creates deterministic but date-specific fallback content', () => {
    const today = buildFallbackHoroscope('aries', '2026-07-19');
    const todayAgain = buildFallbackHoroscope('aries', '2026-07-19');
    const tomorrow = buildFallbackHoroscope('aries', '2026-07-20');

    expect({ ...today, generatedAt: '' }).toEqual({ ...todayAgain, generatedAt: '' });
    expect([tomorrow.score, tomorrow.luckyNumber, tomorrow.summary]).not.toEqual([
      today.score,
      today.luckyNumber,
      today.summary,
    ]);
    expect(tomorrow.generatedAt).toBeTypeOf('string');
  });

  it('fills incomplete AI output and clamps unsafe numeric values', () => {
    const normalized = normalizeDailyHoroscope(
      { summary: '  오늘의 요약  ', score: 999, luckyNumber: -5, overall: '' },
      'taurus',
      '2026-07-20',
    );

    expect(normalized.summary).toBe('오늘의 요약');
    expect(normalized.score).toBe(95);
    expect(normalized.luckyNumber).toBe(1);
    expect(normalized.overall.length).toBeGreaterThan(100);
  });

  it('does not coerce blank numeric values and preserves trusted cache timestamps', () => {
    const fallback = buildFallbackHoroscope('aries', '2026-07-20');
    const generatedAt = '2026-07-20T00:10:00.000Z';
    const normalized = normalizeDailyHoroscope(
      { score: ' ', luckyNumber: null, generatedAt },
      'aries',
      '2026-07-20',
      { preserveGeneratedAt: true },
    );

    expect(normalized.score).toBe(fallback.score);
    expect(normalized.luckyNumber).toBe(fallback.luckyNumber);
    expect(normalized.generatedAt).toBe(generatedAt);
  });

  it('truncates text without splitting emoji surrogate pairs', () => {
    const normalized = normalizeDailyHoroscope(
      { luckyColor: `${'가'.repeat(19)}😀뒤` },
      'aries',
      '2026-07-20',
    );

    expect(normalized.luckyColor).toBe(`${'가'.repeat(19)}😀`);
    expect(normalized.luckyColor).not.toContain('�');
  });
});
