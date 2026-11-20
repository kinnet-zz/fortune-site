export const runtime = 'edge';

import { NextRequest, NextResponse } from 'next/server';
import { getRequestContext } from '@cloudflare/next-on-pages';
import { DAILY_ZODIACS, getTodayKST, isValidDailyDate } from '@/lib/dailyHoroscope';
import { getDailyHoroscope } from '@/lib/dailyHoroscopeServer';

interface GenerationResult {
  zodiac: string;
  status: 'ok' | 'error';
  cached?: boolean;
  ai?: boolean;
  error?: string;
}

const GENERATION_CONCURRENCY = 4;

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

  const results: (GenerationResult | null)[] = DAILY_ZODIACS.map(() => null);

  // Twelve sequential model calls at the full timeout would outlast the
  // request budget, so a few signs are generated at a time and the answers are
  // placed back in zodiac order.
  let cursor = 0;
  const worker = async () => {
    while (cursor < DAILY_ZODIACS.length) {
      const index = cursor;
      cursor += 1;
      const zodiac = DAILY_ZODIACS[index].slug;
      try {
        const result = await getDailyHoroscope(zodiac, date, {
          force,
          generate: true,
        });
        results[index] = {
          zodiac,
          status: result.source === 'ai' ? 'ok' : 'error',
          cached: result.cacheStatus === 'HIT',
          ai: result.source === 'ai',
          ...(result.generationError ? { error: result.generationError } : {}),
        };
      } catch {
        results[index] = { zodiac, status: 'error', error: 'internal' };
      }
    }
  };

  await Promise.all(
    Array.from({ length: Math.min(GENERATION_CONCURRENCY, DAILY_ZODIACS.length) }, worker),
  );

  const settled = results.map((result, index) => result ?? {
    zodiac: DAILY_ZODIACS[index].slug,
    status: 'error' as const,
    error: 'internal',
  });
  const ok = settled.filter((r) => r.status === 'ok').length;
  return NextResponse.json({
    date,
    force,
    total: DAILY_ZODIACS.length,
    generated: ok,
    failed: DAILY_ZODIACS.length - ok,
    results: settled,
  });
}
