export const runtime = 'edge';

import { NextRequest, NextResponse } from 'next/server';
import { getRequestContext } from '@cloudflare/next-on-pages';
import {
  getDailyZodiac,
  getTodayKST,
  isValidDailyDate,
  type DailyZodiacSlug,
} from '@/lib/dailyHoroscope';
import { getDailyHoroscope } from '@/lib/dailyHoroscopeServer';

function getCronSecret(): string {
  try {
    const { env } = getRequestContext();
    const cloudflareSecret = (env as Record<string, unknown>).CRON_SECRET;
    if (typeof cloudflareSecret === 'string' && cloudflareSecret) {
      return cloudflareSecret;
    }
  } catch {
    // Next.js build/tests do not provide a Cloudflare request context.
  }

  return process.env.CRON_SECRET ?? '';
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const zodiac = (searchParams.get('zodiac') ?? '').toLowerCase();
  const today = getTodayKST();
  const date = searchParams.get('date') ?? today;
  const force = searchParams.get('force') === 'true';
  const secret = getCronSecret();
  const auth = request.headers.get('Authorization') ?? '';
  const authorized = Boolean(secret) && auth === `Bearer ${secret}`;

  if (!getDailyZodiac(zodiac)) {
    return NextResponse.json({ error: 'Invalid zodiac sign' }, { status: 400 });
  }

  if (!isValidDailyDate(date)) {
    return NextResponse.json({ error: 'Invalid date' }, { status: 400 });
  }

  if (force && !authorized) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (date !== today && !authorized) {
    return NextResponse.json({ error: 'Date not allowed' }, { status: 403 });
  }

  const result = await getDailyHoroscope(zodiac as DailyZodiacSlug, date, {
    force,
    generate: authorized,
  });
  const headers: Record<string, string> = {
    'Cache-Control': 'no-store',
    'X-Cache': result.cacheStatus,
    'X-Content-Source': result.source,
  };
  if (result.generationError) {
    headers['X-Generation-Error'] = result.generationError;
  }

  return NextResponse.json(result.horoscope, {
    headers,
  });
}
