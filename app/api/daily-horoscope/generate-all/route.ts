export const runtime = 'edge';

import { NextRequest, NextResponse } from 'next/server';
import { getRequestContext } from '@cloudflare/next-on-pages';
import { DAILY_ZODIACS, getTodayKST, isValidDailyDate } from '@/lib/dailyHoroscope';
import { getDailyHoroscope } from '@/lib/dailyHoroscopeServer';

// POST /api/daily-horoscope/generate-all
// Authorization: Bearer {CRON_SECRET}
// body: { date?: "2026-03-28", force?: true }  (force bypasses KV cache and regenerates)
export async function POST(request: NextRequest) {
  let secret: string;
  try {
    const { env } = getRequestContext();
    secret = (env as Record<string, string>)['CRON_SECRET'] ?? process.env.CRON_SECRET ?? '';
  } catch {
    secret = process.env.CRON_SECRET ?? '';
  }
  const auth = request.headers.get('Authorization') ?? '';

  if (!secret || auth !== `Bearer ${secret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let date: string;
  let force = false;
  try {
    const body = await request.json() as { date?: string; force?: boolean };
    date = body.date ?? getTodayKST();
    force = body.force === true;
  } catch {
    date = getTodayKST();
  }

  if (!isValidDailyDate(date)) {
    return NextResponse.json({ error: 'Invalid date' }, { status: 400 });
  }

  const results: {
    zodiac: string;
    status: 'ok' | 'error';
    cached?: boolean;
    ai?: boolean;
    error?: string;
  }[] = [];

  for (const { slug: zodiac } of DAILY_ZODIACS) {
    try {
      const result = await getDailyHoroscope(zodiac, date, {
        force,
        generate: true,
      });
      results.push({
        zodiac,
        status: result.source === 'ai' ? 'ok' : 'error',
        cached: result.cacheStatus === 'HIT',
        ai: result.source === 'ai',
        ...(result.generationError ? { error: result.generationError } : {}),
      });
    } catch {
      results.push({ zodiac, status: 'error', error: 'internal' });
    }
  }

  const ok = results.filter((r) => r.status === 'ok').length;
  return NextResponse.json({
    date,
    force,
    total: DAILY_ZODIACS.length,
    generated: ok,
    failed: DAILY_ZODIACS.length - ok,
    results,
  });
}
