'use client';

export const runtime = 'edge';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { DAILY_ZODIACS, formatKoreanDate, getTodayKST } from '@/lib/dailyHoroscope';
import ConstellationIcon, { type ZodiacSlug } from '@/components/Constellation';

type ScoreMap = Record<string, { score: number; summary: string; luckyColor: string }>;

function ScoreBar({ score }: { score: number }) {
  return (
    <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-[rgba(15,23,42,0.08)]">
      <div
        className="h-1 rounded-full transition-all duration-700"
        style={{
          width: `${score}%`,
          background: 'linear-gradient(90deg, #3b5bdb, #d3b47c)',
          boxShadow: 'none',
        }}
      />
    </div>
  );
}

export default function DailyHoroscopePage() {
  const today = getTodayKST();
  const formattedDate = formatKoreanDate(today);
  const weekdayMatch = formattedDate.match(/^(.*?)\s*\((.*?)\)$/);
  const dateMain = weekdayMatch ? weekdayMatch[1] : formattedDate;
  const dateWeekday = weekdayMatch ? weekdayMatch[2] : '';
  const [scores, setScores] = useState<ScoreMap>({});
  const [loading, setLoading] = useState(true);
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${formattedDate} 12별자리 오늘의 운세`,
    url: 'https://starfate.day/blog/daily',
    inLanguage: 'ko-KR',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: DAILY_ZODIACS.map((zodiac, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: `${zodiac.ko} 오늘의 운세`,
        url: `https://starfate.day/blog/daily/${zodiac.slug}`,
      })),
    },
  };

  useEffect(() => {
    // 12개 동시 fetch
    Promise.allSettled(
      DAILY_ZODIACS.map((z) =>
        fetch(`/api/daily-horoscope?zodiac=${z.slug}&date=${today}`)
          .then((r) => r.json() as Promise<{ score: number; summary: string; luckyColor: string; zodiac: string }>)
          .then((data) => ({ slug: z.slug, score: data.score, summary: data.summary, luckyColor: data.luckyColor }))
      )
    ).then((results) => {
      const map: ScoreMap = {};
      for (const r of results) {
        if (r.status === 'fulfilled') {
          map[r.value.slug] = { score: r.value.score, summary: r.value.summary, luckyColor: r.value.luckyColor };
        }
      }
      setScores(map);
      setLoading(false);
    });
  }, [today]);

  return (
    <div className="relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
      />

      {/* 히어로 */}
      <section className="relative overflow-hidden border-b border-[var(--line)]">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 50% 70% at 50% -10%, rgba(59,91,219,0.2) 0%, transparent 64%)' }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-5xl px-5 pb-12 pt-10 text-center sm:pt-14">
          <Link href="/blog" className="mb-8 inline-flex min-h-11 items-center gap-2 text-[0.78rem] text-[var(--muted)] transition-colors hover:text-[var(--gold)]">
            <span aria-hidden="true">←</span> 블로그 목록으로
          </Link>
          <div>
            <span className="eyebrow eyebrow-center mx-auto">Daily horoscope</span>
            <h1 className="mt-5 font-display text-[2.1rem] font-semibold leading-[1.15] text-[var(--ink)] sm:text-[3rem]">
              {formattedDate}
              <br />
              <span className="gold-ink italic">열두 별자리의 오늘</span>
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-[0.88rem] leading-7 text-[var(--muted)] text-keep-all">
              종합운·연애운·금전운·직업운을 별자리별로 확인하세요. 매일 한국 시간 자정을 기준으로 새로운 참고 문장을 제공합니다.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-5 py-12">
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4">
          {DAILY_ZODIACS.map((z) => {
            const data = scores[z.slug];
            const score = data?.score;
            return (
              <Link
                key={z.slug}
                href={`/blog/daily/${z.slug}`}
                className="zodiac-card card-lift group relative flex flex-col rounded-2xl border border-[var(--line)] bg-[#ffffff] p-4 hover:border-[rgba(59,91,219,0.45)] hover:bg-[#ffffff]"
              >
                <div className="flex items-start justify-between">
                  <span className="text-[var(--ink)]">
                    <ConstellationIcon slug={z.slug as ZodiacSlug} size={40} strokeWidth={1.2} />
                  </span>
                  <span className="text-[0.55rem] uppercase tracking-[0.22em] text-[var(--muted-2)]">{z.dateRange}</span>
                </div>
                <div className="mt-2 text-[0.92rem] font-semibold text-[var(--ink)]">{z.ko}</div>

                {loading ? (
                  <div className="mt-3 h-8 animate-pulse rounded bg-[#0f172a]/[0.04]" />
                ) : score !== undefined ? (
                  <>
                    <div className="mt-3 flex items-baseline justify-between">
                      <span className="text-[0.6rem] uppercase tracking-[0.18em] text-[var(--muted-2)]">오늘의 점수</span>
                      <span className="font-display text-[1.2rem] font-semibold text-[var(--gold)]">{score}</span>
                    </div>
                    <ScoreBar score={score} />
                    {data.summary && (
                      <p className="mt-2.5 line-clamp-2 text-[0.7rem] leading-5 text-[var(--muted)]">{data.summary}</p>
                    )}
                    {data.luckyColor && (
                      <div className="mt-2 flex items-center gap-1.5 text-[0.62rem] text-[var(--muted-2)]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#3b5bdb]" aria-hidden="true" />
                        행운색 · {data.luckyColor}
                      </div>
                    )}
                  </>
                ) : (
                  <div className="mt-3 text-[0.7rem] text-[var(--muted-2)]">준비 중</div>
                )}

                <span className="mt-3 inline-flex items-center gap-1 text-[0.66rem] font-medium text-[var(--gold)] opacity-0 transition-all duration-300 group-hover:opacity-100">
                  자세히 보기 <span aria-hidden="true">→</span>
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 rounded-2xl border border-[rgba(59,91,219,0.32)] bg-[rgba(59,91,219,0.09)] p-6 text-center">
          <p className="text-[0.8rem] leading-6 text-[var(--muted)]">
            ✦ 매일 자정(KST) 이후 별자리의 상징과 날짜를 바탕으로 새로운 자기성찰 문장을 제공합니다.
          </p>
        </div>

        <section className="card-lux mt-6 space-y-4 rounded-2xl p-6 sm:p-7">
          <h2 className="font-display text-[1.15rem] font-semibold text-[var(--ink)]">오늘의 별자리 운세를 읽는 방법</h2>
          <p className="text-[0.82rem] leading-7 text-[var(--muted)] text-keep-all">
            자신의 생일이 포함된 별자리를 선택하면 오늘의 종합 흐름과 연애·인간관계, 금전, 직업, 생활 건강 조언을 확인할 수 있습니다. 점수는 하루를 돌아보기 위한 가벼운 지표이며 실제 사건을 예측하지 않습니다.
          </p>
          <p className="text-[0.82rem] leading-7 text-[var(--muted)] text-keep-all">
            결과가 좋을 때는 이미 계획한 행동을 차분히 이어가고, 낮게 나왔을 때는 중요한 결정을 서두르지 않는 자기점검 질문으로 활용해보세요.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 border-t border-[var(--line)] pt-4 text-[0.76rem]">
            <Link href="/blog/how-to-read-daily-fortune" className="text-[var(--gold)] transition-colors hover:text-[#0f172a]">
              운세를 건강하게 읽는 법 →
            </Link>
            <Link href="/zodiac" className="text-[var(--gold)] transition-colors hover:text-[#0f172a]">
              12별자리 상세 가이드 →
            </Link>
            <Link href="/" className="text-[var(--gold)] transition-colors hover:text-[#0f172a]">
              생년월일 맞춤 운세 →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
