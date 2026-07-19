export const runtime = 'edge';

import { NextRequest, NextResponse } from 'next/server';
import {
  getDailyZodiac,
  getTodayKST,
  isValidDailyDate,
  type DailyZodiacSlug,
} from '@/lib/dailyHoroscope';
import { getDailyHoroscope } from '@/lib/dailyHoroscopeServer';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const zodiac = (searchParams.get('zodiac') ?? '').toLowerCase();
  const today = getTodayKST();
  const date = searchParams.get('date') ?? today;
  const force = searchParams.get('force') === 'true';
  const secret = process.env.CRON_SECRET ?? '';
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
  return NextResponse.json(result.horoscope, {
    headers: {
      'Cache-Control': 'no-store',
      'X-Cache': result.cacheStatus,
      'X-Content-Source': result.source,
    },
  });
}
