export const runtime = 'edge';

import { NextRequest, NextResponse } from 'next/server';

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
// body: { date?: "2026-03-28" }  (optional, defaults to today KST)
export async function POST(request: NextRequest) {
  const secret = process.env.CRON_SECRET ?? '';
  const auth = request.headers.get('Authorization') ?? '';

  if (!secret || auth !== `Bearer ${secret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let date: string;
  try {
    const body = await request.json() as { date?: string };
    date = body.date ?? getTodayKST();
  } catch {
    date = getTodayKST();
  }

  const origin = new URL(request.url).origin;
  const results: { zodiac: string; status: 'ok' | 'error'; cached?: boolean }[] = [];

  for (const zodiac of ZODIACS) {
    try {
      const res = await fetch(`${origin}/api/daily-horoscope?zodiac=${zodiac}&date=${date}`, {
        headers: { 'User-Agent': 'StarFate-CronBot/1.0' },
      });
      const cacheStatus = res.headers.get('X-Cache');
      results.push({ zodiac, status: 'ok', cached: cacheStatus === 'HIT' });
    } catch {
      results.push({ zodiac, status: 'error' });
    }
  }

  const ok = results.filter((r) => r.status === 'ok').length;
  return NextResponse.json({
    date,
    total: ZODIACS.length,
    generated: ok,
    failed: ZODIACS.length - ok,
    results,
  });
}
