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

    const response = await POST(new NextRequest(
      'https://starfate.day/api/daily-horoscope/generate-all',
      {
        method: 'POST',
        headers: {
          Authorization: 'Bearer cron-secret',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ date: '2026-07-20' }),
      },
    ));
    const body = await response.json() as { generated: number; failed: number };

    expect(response.status).toBe(200);
    expect(body).toMatchObject({ generated: 12, failed: 0 });
    expect(getDailyHoroscopeMock).toHaveBeenCalledTimes(12);
    for (const [zodiac, date, options] of getDailyHoroscopeMock.mock.calls) {
      expect(typeof zodiac).toBe('string');
      expect(date).toBe('2026-07-20');
      expect(options).toEqual({ force: false, generate: true });
    }
  });

  it('rejects invalid generation dates', async () => {
    getRequestContextMock.mockReturnValue({ env: { CRON_SECRET: 'cron-secret' } });

    const response = await POST(new NextRequest(
      'https://starfate.day/api/daily-horoscope/generate-all',
      {
        method: 'POST',
        headers: {
          Authorization: 'Bearer cron-secret',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ date: '2026-02-30' }),
      },
    ));

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

    const response = await POST(new NextRequest(
      'https://starfate.day/api/daily-horoscope/generate-all',
      {
        method: 'POST',
        headers: {
          Authorization: 'Bearer cron-secret',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ date: '2026-07-20' }),
      },
    ));
    const body = await response.json() as {
      generated: number;
      failed: number;
      results: { error?: string }[];
    };

    expect(body).toMatchObject({ generated: 0, failed: 12 });
    expect(body.results.every((result) => result.error === 'missing-api-key')).toBe(true);
  });
});
