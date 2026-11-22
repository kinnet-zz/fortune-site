export const runtime = 'edge';
export const dynamic = 'force-dynamic';

import { notFound } from 'next/navigation';
import DailyZodiacDetail from '@/components/DailyZodiacDetail';
import {
  HOROSCOPE_LANGS,
  getDailyZodiac,
  getTodayKST,
  type DailyHoroscope,
  type DailyZodiacSlug,
  type HoroscopeLang,
} from '@/lib/dailyHoroscope';
import { getDailyHoroscope } from '@/lib/dailyHoroscopeServer';

export default async function ZodiacDailyPage({
  params,
}: {
  params: Promise<{ zodiac: string }>;
}) {
  const { zodiac: zodiacParam } = await params;
  const zodiac = zodiacParam.toLowerCase();
  const catalogEntry = getDailyZodiac(zodiac);
  if (!catalogEntry) notFound();

  const today = getTodayKST();

  // Every offered language is read up front so switching the language on this
  // page is instant and the server HTML keeps today's reading for crawlers.
  const results = await Promise.all(
    HOROSCOPE_LANGS.map((lang) => getDailyHoroscope(zodiac as DailyZodiacSlug, today, { lang })),
  );
  const readings = Object.fromEntries(
    HOROSCOPE_LANGS.map((lang, index) => [lang, results[index].horoscope]),
  ) as Record<HoroscopeLang, DailyHoroscope>;

  return (
    <DailyZodiacDetail
      slug={zodiac as DailyZodiacSlug}
      date={results[0].horoscope.date}
      readings={readings}
    />
  );
}
