import { afterEach, describe, expect, it, vi } from 'vitest';
import { getCookieConsent, isAdSensePath } from '../../lib/adConsent';
import { trackEvent } from '../../lib/analytics';
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

  it('allows editorial pages and excludes noindex daily pages', () => {
    expect(isAdSensePath('/blog/2026-yearly-horoscope')).toBe(true);
    expect(isAdSensePath('/guide/zodiac-compatibility')).toBe(true);
    expect(isAdSensePath('/blog/daily')).toBe(false);
    expect(isAdSensePath('/blog/daily/taurus')).toBe(false);
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
