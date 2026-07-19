export const runtime = 'edge';

import { NextRequest, NextResponse } from 'next/server';
import { getDailyZodiac, getTodayKST, type DailyZodiacSlug } from '@/lib/dailyHoroscope';
import { getDailyHoroscope } from '@/lib/dailyHoroscopeServer';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const zodiac = (searchParams.get('zodiac') ?? '').toLowerCase();
  const date = searchParams.get('date') ?? getTodayKST();
  const force = searchParams.get('force') === 'true';
  const secret = process.env.CRON_SECRET ?? '';
  const auth = request.headers.get('Authorization') ?? '';
  const authorized = Boolean(secret) && auth === `Bearer ${secret}`;

  if (!getDailyZodiac(zodiac)) {
    return NextResponse.json({ error: 'Invalid zodiac sign' }, { status: 400 });
  }

  if (force && !authorized) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const horoscope = await getDailyHoroscope(zodiac as DailyZodiacSlug, date, { force });
  return NextResponse.json(horoscope, {
    headers: { 'Cache-Control': 'no-store' },
  });
}
