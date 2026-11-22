export const runtime = 'edge';

import { NextRequest, NextResponse } from 'next/server';
import { getRequestContext } from '@cloudflare/next-on-pages';
import {
  DAILY_ZODIACS,
  HOROSCOPE_LANGS,
  getTodayKST,
  isHoroscopeLang,
  isValidDailyDate,
  type HoroscopeLang,
} from '@/lib/dailyHoroscope';
import { getDailyHoroscope } from '@/lib/dailyHoroscopeServer';

interface GenerationResult {
  lang: HoroscopeLang;
  zodiac: string;
  status: 'ok' | 'error';
  cached?: boolean;
  ai?: boolean;
  error?: string;
}

const GENERATION_CONCURRENCY = 4;

// POST /api/daily-horoscope/generate-all
// Authorization: Bearer {CRON_SECRET}
// body: { date?: "2026-03-28", force?: true, lang?: "ko" | "en" | "ja" | [...], langs?: [...] }
//   lang/langs restrict the run; omitting both generates every offered language.
//   The daily workflow calls this once per language so each request stays
//   within the edge request budget.
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
  let requestedLangs: unknown;
  try {
    const body = await request.json() as { date?: string; force?: boolean; lang?: unknown; langs?: unknown };
    date = body.date ?? getTodayKST();
    force = body.force === true;
    requestedLangs = body.langs ?? body.lang;
  } catch {
    date = getTodayKST();
  }

  if (!isValidDailyDate(date)) {
    return NextResponse.json({ error: 'Invalid date' }, { status: 400 });
  }

  const list = requestedLangs === undefined
    ? [...HOROSCOPE_LANGS]
    : (Array.isArray(requestedLangs) ? requestedLangs : [requestedLangs]);

  if (list.length === 0 || !list.every(isHoroscopeLang)) {
    return NextResponse.json({ error: 'Invalid language' }, { status: 400 });
  }

  const langs = Array.from(new Set(list as HoroscopeLang[]));
  const jobs = langs.flatMap((lang) => DAILY_ZODIACS.map((zodiac) => ({ lang, zodiac: zodiac.slug })));
  const results: (GenerationResult | null)[] = jobs.map(() => null);

  const generateAt = async (index: number) => {
    const { lang, zodiac } = jobs[index];
    try {
      const result = await getDailyHoroscope(zodiac, date, {
        force,
        generate: true,
        lang,
      });
      results[index] = {
        lang,
        zodiac,
        status: result.source === 'ai' ? 'ok' : 'error',
        cached: result.cacheStatus === 'HIT',
        ai: result.source === 'ai',
        ...(result.generationError ? { error: result.generationError } : {}),
      };
    } catch {
      results[index] = { lang, zodiac, status: 'error', error: 'internal' };
    }
  };

  // A few signs at a time: twelve model calls at the full timeout would
  // outlast the request budget, and bursts larger than a dozen a minute start
  // coming back as upstream errors. Languages therefore run one after another
  // rather than all at once, and any sign that failed gets one more try.
  const runBatch = async (indexes: number[]) => {
    let cursor = 0;
    const worker = async () => {
      while (cursor < indexes.length) {
        const position = cursor;
        cursor += 1;
        await generateAt(indexes[position]);
      }
    };
    await Promise.all(
      Array.from({ length: Math.min(GENERATION_CONCURRENCY, indexes.length) }, worker),
    );
  };

  for (const lang of langs) {
    const indexes = jobs
      .map((job, index) => (job.lang === lang ? index : -1))
      .filter((index) => index >= 0);
    await runBatch(indexes);
  }

  const failedIndexes = results
    .map((result, index) => (result?.status === 'error' ? index : -1))
    .filter((index) => index >= 0);
  if (failedIndexes.length > 0) {
    await runBatch(failedIndexes);
  }

  const settled = results.map((result, index) => result ?? {
    lang: jobs[index].lang,
    zodiac: jobs[index].zodiac,
    status: 'error' as const,
    error: 'internal',
  });
  const ok = settled.filter((r) => r.status === 'ok').length;
  return NextResponse.json({
    date,
    force,
    langs,
    total: jobs.length,
    generated: ok,
    failed: jobs.length - ok,
    results: settled,
  });
}
