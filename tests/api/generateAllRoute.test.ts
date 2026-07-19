import { afterEach, describe, expect, it, vi } from 'vitest';
import { NextRequest } from 'next/server';

const { getRequestContextMock } = vi.hoisted(() => ({
  getRequestContextMock: vi.fn(),
}));

vi.mock('@cloudflare/next-on-pages', () => ({
  getRequestContext: getRequestContextMock,
}));

import { POST } from '../../app/api/daily-horoscope/generate-all/route';

afterEach(() => {
  getRequestContextMock.mockReset();
  vi.unstubAllGlobals();
});

describe('daily horoscope generation job', () => {
  it('forwards authorization to all zodiac requests so cache misses can generate', async () => {
    getRequestContextMock.mockReturnValue({ env: { CRON_SECRET: 'cron-secret' } });
    const fetchMock = vi.fn().mockImplementation(async () => new Response('{}', {
      status: 200,
      headers: {
        'X-Cache': 'MISS',
        'X-Content-Source': 'ai',
      },
    }));
    vi.stubGlobal('fetch', fetchMock);

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
    expect(fetchMock).toHaveBeenCalledTimes(12);
    for (const [, options] of fetchMock.mock.calls) {
      expect(options.headers.Authorization).toBe('Bearer cron-secret');
    }
  });

  it('rejects invalid generation dates', async () => {
    getRequestContextMock.mockReturnValue({ env: { CRON_SECRET: 'cron-secret' } });
    const fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);

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
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('reports fallback responses as generation failures', async () => {
    getRequestContextMock.mockReturnValue({ env: { CRON_SECRET: 'cron-secret' } });
    vi.stubGlobal('fetch', vi.fn().mockImplementation(async () => new Response('{}', {
      status: 200,
      headers: {
        'X-Cache': 'HIT',
        'X-Content-Source': 'fallback',
      },
    })));

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

    expect(body).toMatchObject({ generated: 0, failed: 12 });
  });
});
