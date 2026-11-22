import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { NextRequest } from 'next/server';
import { buildFallbackHoroscope, getTodayKST } from '../../lib/dailyHoroscope';

const { getDailyHoroscopeMock, getRequestContextMock } = vi.hoisted(() => ({
  getDailyHoroscopeMock: vi.fn(),
  getRequestContextMock: vi.fn(),
}));

vi.mock('@cloudflare/next-on-pages', () => ({
  getRequestContext: getRequestContextMock,
}));

vi.mock('@/lib/dailyHoroscopeServer', () => ({
  getDailyHoroscope: getDailyHoroscopeMock,
}));

import { GET } from '../../app/api/daily-horoscope/route';

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(new Date('2026-07-19T15:30:00Z'));
  getRequestContextMock.mockImplementation(() => {
    throw new Error('Cloudflare request context is unavailable');
  });
});

afterEach(() => {
  delete process.env.CRON_SECRET;
  getDailyHoroscopeMock.mockReset();
  getRequestContextMock.mockReset();
  vi.useRealTimers();
});

describe('daily horoscope API', () => {
  it('rejects malformed and unauthorized non-today dates before generation', async () => {
    const malformed = await GET(new NextRequest(
      'https://starfate.day/api/daily-horoscope?zodiac=aries&date=2026-02-30',
    ));
    const historical = await GET(new NextRequest(
      'https://starfate.day/api/daily-horoscope?zodiac=aries&date=2000-01-01',
    ));

    expect(malformed.status).toBe(400);
    expect(historical.status).toBe(403);
    expect(getDailyHoroscopeMock).not.toHaveBeenCalled();
  });

  it('rejects unauthenticated force regeneration', async () => {
    const response = await GET(new NextRequest(
      `https://starfate.day/api/daily-horoscope?zodiac=aries&date=${getTodayKST()}&force=true`,
    ));

    expect(response.status).toBe(401);
    expect(getDailyHoroscopeMock).not.toHaveBeenCalled();
  });

  it('serves public requests without enabling Gemini generation', async () => {
    const horoscope = buildFallbackHoroscope('aries', getTodayKST());
    getDailyHoroscopeMock.mockResolvedValue({
      horoscope,
      cacheStatus: 'HIT',
      source: 'ai',
    });

    const response = await GET(new NextRequest(
      'https://starfate.day/api/daily-horoscope?zodiac=aries',
    ));

    expect(response.status).toBe(200);
    expect(response.headers.get('X-Cache')).toBe('HIT');
    expect(response.headers.get('X-Content-Source')).toBe('ai');
    expect(getDailyHoroscopeMock).toHaveBeenCalledWith('aries', getTodayKST(), {
      force: false,
      generate: false,
      lang: 'ko',
    });
  });

  it('allows authenticated force regeneration and reports its source', async () => {
    process.env.CRON_SECRET = 'cron-secret';
    const horoscope = buildFallbackHoroscope('aries', getTodayKST());
    getDailyHoroscopeMock.mockResolvedValue({
      horoscope,
      cacheStatus: 'MISS',
      source: 'ai',
    });

    const response = await GET(new NextRequest(
      `https://starfate.day/api/daily-horoscope?zodiac=aries&date=${getTodayKST()}&force=true`,
      { headers: { Authorization: 'Bearer cron-secret' } },
    ));

    expect(response.status).toBe(200);
    expect(response.headers.get('X-Cache')).toBe('MISS');
    expect(response.headers.get('X-Content-Source')).toBe('ai');
    expect(getDailyHoroscopeMock).toHaveBeenCalledWith('aries', getTodayKST(), {
      force: true,
      generate: true,
      lang: 'ko',
    });
  });

  it('serves the requested language and falls back from a retired one', async () => {
    const horoscope = buildFallbackHoroscope('aries', getTodayKST(), 'ja');
    getDailyHoroscopeMock.mockResolvedValue({
      horoscope,
      cacheStatus: 'HIT',
      source: 'ai',
    });

    const japanese = await GET(new NextRequest(
      'https://starfate.day/api/daily-horoscope?zodiac=aries&lang=ja',
    ));
    const chinese = await GET(new NextRequest(
      'https://starfate.day/api/daily-horoscope?zodiac=aries&lang=zh',
    ));

    expect(japanese.status).toBe(200);
    expect(japanese.headers.get('X-Content-Language')).toBe('ja');
    expect(chinese.status).toBe(200);
    expect(chinese.headers.get('X-Content-Language')).toBe('en');
    expect(getDailyHoroscopeMock).toHaveBeenNthCalledWith(1, 'aries', getTodayKST(), {
      force: false,
      generate: false,
      lang: 'ja',
    });
    expect(getDailyHoroscopeMock).toHaveBeenNthCalledWith(2, 'aries', getTodayKST(), {
      force: false,
      generate: false,
      lang: 'en',
    });
  });

  it('lets the authenticated daily job generate only on a cache miss', async () => {
    getRequestContextMock.mockReturnValue({
      env: { CRON_SECRET: 'cloudflare-cron-secret' },
    });
    const horoscope = buildFallbackHoroscope('taurus', getTodayKST());
    getDailyHoroscopeMock.mockResolvedValue({
      horoscope,
      cacheStatus: 'MISS',
      source: 'ai',
    });

    const response = await GET(new NextRequest(
      `https://starfate.day/api/daily-horoscope?zodiac=taurus&date=${getTodayKST()}`,
      { headers: { Authorization: 'Bearer cloudflare-cron-secret' } },
    ));

    expect(response.status).toBe(200);
    expect(getDailyHoroscopeMock).toHaveBeenCalledWith('taurus', getTodayKST(), {
      force: false,
      generate: true,
      lang: 'ko',
    });
  });
});
