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
  upstreamStatus?: number;
  upstreamCode?: string;
  upstreamMessage?: string;
}

const GENERATION_CONCURRENCY = 4;
// Small gap between the jobs of one run: the provider starts answering with
// upstream errors when a dozen requests land in the same breath, and the gap
// costs a couple of seconds for a whole language.
const JOB_GAP_MS = 300;
// Signs that failed get another try after a pause, then one more later. The
// provider is usually back within seconds; a longer outage still surfaces as a
// failed run, which is the signal worth keeping.
const RETRY_DELAYS_MS = [2000, 8000];
// Cloudflare allows a fixed number of subrequests per Worker invocation, and a
// sign needs three (KV read, model call, KV write). Once the runtime says the
// budget is gone, every further sign and every retry fails the same way, so the
// rest of the run is reported as deferred instead of burning the invocation.
const SUBREQUEST_LIMIT_MARKER = 'Too many subrequests';

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// POST /api/daily-horoscope/generate-all
// Authorization: Bearer {CRON_SECRET}
// body: { date?: "2026-03-28", force?: true, lang?: "ko" | "en" | "ja" | [...], langs?: [...] }
//   lang/langs restrict the run; omitting both generates every offered language.
//   The daily workflow calls this once per language so each request stays
//   within the edge request budget and a sign that fails can be retried later
//   without regenerating the languages that already succeeded.
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
  let budgetExhausted = false;

  const generateAt = async (index: number) => {
    const { lang, zodiac } = jobs[index];
    try {
      const result = await getDailyHoroscope(zodiac, date, {
        force,
        generate: true,
        lang,
      });
      if (result.upstreamMessage && result.upstreamMessage.includes(SUBREQUEST_LIMIT_MARKER)) {
        budgetExhausted = true;
      }
      results[index] = {
        lang,
        zodiac,
        status: result.source === 'ai' ? 'ok' : 'error',
        cached: result.cacheStatus === 'HIT',
        ai: result.source === 'ai',
        ...(result.generationError ? { error: result.generationError } : {}),
        ...(result.upstreamStatus ? { upstreamStatus: result.upstreamStatus } : {}),
        ...(result.upstreamCode ? { upstreamCode: result.upstreamCode } : {}),
        ...(result.upstreamMessage ? { upstreamMessage: result.upstreamMessage } : {}),
      };
    } catch {
      results[index] = { lang, zodiac, status: 'error', error: 'internal' };
    }
  };

  // A few signs at a time: twelve model calls at the full timeout would
  // outlast the request budget, and bursts larger than a dozen a minute start
  // coming back as upstream errors. Languages run one after another rather
  // than all at once, with a short gap between the signs of each language.
  const runBatch = async (indexes: number[]) => {
    let cursor = 0;
    const worker = async () => {
      while (cursor < indexes.length) {
        const position = cursor;
        cursor += 1;
        if (position > 0) {
          await sleep(JOB_GAP_MS);
        }
        if (budgetExhausted) {
          const job = jobs[indexes[position]];
          results[indexes[position]] = {
            lang: job.lang,
            zodiac: job.zodiac,
            status: 'error',
            error: 'deferred',
          };
          continue;
        }
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

  // Only an upstream hiccup (or a timeout) is worth asking for again; a missing
  // key or a malformed answer will fail the same way a second later.
  const retryableIndexes = () => results
    .map((result, index) => (
      result?.status === 'error' && (result.error === 'upstream' || result.error === 'timeout')
        ? index
        : -1
    ))
    .filter((index) => index >= 0);

  let failedIndexes = retryableIndexes();
  for (const delay of RETRY_DELAYS_MS) {
    if (failedIndexes.length === 0 || budgetExhausted) break;
    await sleep(delay);
    await runBatch(failedIndexes);
    failedIndexes = retryableIndexes();
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
