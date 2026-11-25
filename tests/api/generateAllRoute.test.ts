import { afterEach, describe, expect, it, vi } from 'vitest';
import { NextRequest } from 'next/server';

const { getRequestContextMock, getDailyHoroscopeMock } = vi.hoisted(() => ({
  getRequestContextMock: vi.fn(),
  getDailyHoroscopeMock: vi.fn(),
}));

vi.mock('@cloudflare/next-on-pages', () => ({
  getRequestContext: getRequestContextMock,
}));

vi.mock('@/lib/dailyHoroscopeServer', () => ({
  getDailyHoroscope: getDailyHoroscopeMock,
}));

import { POST } from '../../app/api/daily-horoscope/generate-all/route';

function post(body: Record<string, unknown>) {
  return POST(new NextRequest(
    'https://starfate.day/api/daily-horoscope/generate-all',
    {
      method: 'POST',
      headers: {
        Authorization: 'Bearer cron-secret',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  ));
}

afterEach(() => {
  getRequestContextMock.mockReset();
  getDailyHoroscopeMock.mockReset();
  vi.unstubAllGlobals();
});

describe('daily horoscope generation job', () => {
  it('directly generates all zodiac signs after authenticating the job', async () => {
    getRequestContextMock.mockReturnValue({ env: { CRON_SECRET: 'cron-secret' } });
    getDailyHoroscopeMock.mockResolvedValue({
      horoscope: {},
      cacheStatus: 'MISS',
      source: 'ai',
    });

    const response = await post({ date: '2026-07-20', lang: 'ko' });
    const body = await response.json() as { generated: number; failed: number; langs: string[] };

    expect(response.status).toBe(200);
    expect(body).toMatchObject({ generated: 12, failed: 0, langs: ['ko'] });
    expect(getDailyHoroscopeMock).toHaveBeenCalledTimes(12);
    for (const [zodiac, date, options] of getDailyHoroscopeMock.mock.calls) {
      expect(typeof zodiac).toBe('string');
      expect(date).toBe('2026-07-20');
      expect(options).toEqual({ force: false, generate: true, lang: 'ko' });
    }
  });

  it('generates every offered language when none is requested', async () => {
    getRequestContextMock.mockReturnValue({ env: { CRON_SECRET: 'cron-secret' } });
    getDailyHoroscopeMock.mockResolvedValue({
      horoscope: {},
      cacheStatus: 'MISS',
      source: 'ai',
    });

    const response = await post({ date: '2026-07-20' });
    const body = await response.json() as { generated: number; failed: number; langs: string[] };

    expect(body).toMatchObject({ generated: 36, failed: 0, langs: ['ko', 'en', 'ja'] });
    expect(getDailyHoroscopeMock).toHaveBeenCalledTimes(36);
    for (const lang of ['ko', 'en', 'ja']) {
      const calls = getDailyHoroscopeMock.mock.calls.filter(([, , options]) => options.lang === lang);
      expect(calls).toHaveLength(12);
    }
  });

  it('accepts a list of languages and rejects unknown ones', async () => {
    getRequestContextMock.mockReturnValue({ env: { CRON_SECRET: 'cron-secret' } });
    getDailyHoroscopeMock.mockResolvedValue({
      horoscope: {},
      cacheStatus: 'MISS',
      source: 'ai',
    });

    const partial = await post({ date: '2026-07-20', langs: ['ja', 'ja'] });
    const partialBody = await partial.json() as { generated: number; langs: string[] };
    expect(partialBody).toMatchObject({ generated: 12, langs: ['ja'] });

    getDailyHoroscopeMock.mockClear();
    const invalid = await post({ date: '2026-07-20', lang: 'zh' });
    expect(invalid.status).toBe(400);
    expect(getDailyHoroscopeMock).not.toHaveBeenCalled();
  });

  it('rejects invalid generation dates', async () => {
    getRequestContextMock.mockReturnValue({ env: { CRON_SECRET: 'cron-secret' } });

    const response = await post({ date: '2026-02-30' });

    expect(response.status).toBe(400);
    expect(getDailyHoroscopeMock).not.toHaveBeenCalled();
  });

  it('reports fallback responses as generation failures', async () => {
    getRequestContextMock.mockReturnValue({ env: { CRON_SECRET: 'cron-secret' } });
    getDailyHoroscopeMock.mockResolvedValue({
      horoscope: {},
      cacheStatus: 'MISS',
      source: 'fallback',
      generationError: 'missing-api-key',
    });

    const response = await post({ date: '2026-07-20', lang: 'en' });
    const body = await response.json() as {
      generated: number;
      failed: number;
      results: { error?: string; lang: string }[];
    };

    expect(body).toMatchObject({ generated: 0, failed: 12 });
    expect(body.results.every((result) => result.error === 'missing-api-key')).toBe(true);
    expect(body.results.every((result) => result.lang === 'en')).toBe(true);
  }, 30000);

  it('passes the provider status through to the job response', async () => {
    getRequestContextMock.mockReturnValue({ env: { CRON_SECRET: 'cron-secret' } });
    getDailyHoroscopeMock.mockResolvedValue({
      horoscope: {},
      cacheStatus: 'MISS',
      source: 'fallback',
      generationError: 'upstream',
      upstreamStatus: 503,
      upstreamCode: 'UNAVAILABLE',
    });

    const response = await post({ date: '2026-07-20', lang: 'ko' });
    const body = await response.json() as {
      failed: number;
      results: { error?: string; upstreamStatus?: number; upstreamCode?: string }[];
    };

    expect(body.failed).toBe(12);
    expect(body.results.every((result) => (
      result.error === 'upstream'
      && result.upstreamStatus === 503
      && result.upstreamCode === 'UNAVAILABLE'
    ))).toBe(true);
  }, 30000);

  it('retries the signs that failed once more', async () => {
    getRequestContextMock.mockReturnValue({ env: { CRON_SECRET: 'cron-secret' } });
    let calls = 0;
    getDailyHoroscopeMock.mockImplementation(async () => {
      calls += 1;
      if (calls <= 12) {
        return {
          horoscope: {},
          cacheStatus: 'MISS',
          source: 'fallback',
          generationError: 'upstream',
          upstreamStatus: 503,
        };
      }
      return { horoscope: {}, cacheStatus: 'MISS', source: 'ai' };
    });

    const response = await post({ date: '2026-07-20', lang: 'en' });
    const body = await response.json() as { generated: number; failed: number };

    expect(getDailyHoroscopeMock).toHaveBeenCalledTimes(24);
    expect(body).toMatchObject({ generated: 12, failed: 0 });
  }, 30000);
});
