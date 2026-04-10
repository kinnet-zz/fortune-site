export const runtime = 'edge';

import { NextRequest, NextResponse } from 'next/server';
import { getRequestContext } from '@cloudflare/next-on-pages';

const ZODIACS = [
  'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo',
  'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces',
];

function getTodayKST(): string {
  const now = new Date();
  const kst = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  return kst.toISOString().slice(0, 10);
}

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

  const origin = new URL(request.url).origin;
  const results: { zodiac: string; status: 'ok' | 'error'; cached?: boolean; ai?: boolean }[] = [];

  for (const zodiac of ZODIACS) {
    try {
      const url = force
        ? `${origin}/api/daily-horoscope?zodiac=${zodiac}&date=${date}&force=true`
        : `${origin}/api/daily-horoscope?zodiac=${zodiac}&date=${date}`;
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'StarFate-CronBot/1.0',
          ...(force ? { Authorization: `Bearer ${secret}` } : {}),
        },
      });
      const cacheStatus = res.headers.get('X-Cache');
      const data = await res.json() as { generatedAt?: string };
      // fallback 여부 판별: generatedAt이 없거나 fallback 특유의 score 범위
      results.push({ zodiac, status: 'ok', cached: cacheStatus === 'HIT', ai: !!data.generatedAt });
    } catch {
      results.push({ zodiac, status: 'error' });
    }
  }

  const ok = results.filter((r) => r.status === 'ok').length;
  return NextResponse.json({
    date,
    force,
    total: ZODIACS.length,
    generated: ok,
    failed: ZODIACS.length - ok,
    results,
  });
}
