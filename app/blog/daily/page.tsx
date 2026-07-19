'use client';

export const runtime = 'edge';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { DAILY_ZODIACS, formatKoreanDate, getTodayKST } from '@/lib/dailyHoroscope';

const bgStyle = {
  background: 'linear-gradient(160deg, #050520 0%, #0a0a2e 30%, #130a2e 60%, #1a0a3e 100%)',
  minHeight: '100vh',
};

type ScoreMap = Record<string, { score: number; summary: string; luckyColor: string }>;

function ScoreBar({ score }: { score: number }) {
  const color = score >= 80 ? '#a78bfa' : score >= 65 ? '#60a5fa' : '#94a3b8';
  return (
    <div className="w-full bg-white/10 rounded-full h-1.5 mt-2">
      <div
        className="h-1.5 rounded-full transition-all duration-700"
        style={{ width: `${score}%`, background: color }}
      />
    </div>
  );
}

export default function DailyHoroscopePage() {
  const today = getTodayKST();
  const formattedDate = formatKoreanDate(today);
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
    <div style={bgStyle}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
      />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link href="/blog" className="text-purple-400 hover:text-purple-300 text-sm mb-8 inline-block">
          ← 블로그 목록으로
        </Link>

        <header className="mb-12 text-center">
          <div className="text-5xl mb-4">🔮</div>
          <h1 className="text-3xl font-bold text-white mb-3">{formattedDate} 12별자리 오늘의 운세</h1>
          <p className="text-white/50 text-sm">종합운·연애운·금전운·직업운을 별자리별로 확인하세요.</p>
          <p className="text-white/40 text-xs mt-2">매일 한국 시간 자정을 기준으로 새로운 참고 문장을 제공합니다.</p>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {DAILY_ZODIACS.map((z) => {
            const data = scores[z.slug];
            const score = data?.score;
            return (
              <Link
                key={z.slug}
                href={`/blog/daily/${z.slug}`}
                className="group block rounded-2xl p-4 transition-all hover:scale-105 hover:shadow-lg"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div className="text-3xl mb-2 text-center">{z.emoji}</div>
                <div className="text-white font-semibold text-sm text-center mb-0.5">{z.ko}</div>
                <div className="text-white/30 text-xs text-center mb-3">{z.dateRange}</div>

                {loading ? (
                  <div className="h-8 rounded animate-pulse" style={{ background: 'rgba(255,255,255,0.07)' }} />
                ) : score !== undefined ? (
                  <>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white/50 text-xs">운세 점수</span>
                      <span className="text-white font-bold text-sm">{score}점</span>
                    </div>
                    <ScoreBar score={score} />
                    {data.summary && (
                      <p className="text-white/40 text-xs mt-2 leading-relaxed line-clamp-2">{data.summary}</p>
                    )}
                    {data.luckyColor && (
                      <div className="mt-2 text-xs text-white/30">행운색 · {data.luckyColor}</div>
                    )}
                  </>
                ) : (
                  <div className="text-white/30 text-xs text-center">준비 중</div>
                )}

                <div
                  className="mt-3 text-center text-xs font-medium text-purple-300 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  자세히 보기 →
                </div>
              </Link>
            );
          })}
        </div>

        <div
          className="mt-12 rounded-2xl p-6 text-center"
          style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)' }}
        >
          <p className="text-white/60 text-sm">
            🌙 매일 자정(KST) 이후 별자리의 상징과 날짜를 바탕으로 새로운 자기성찰 문장을 제공합니다.
          </p>
        </div>

        <section
          className="mt-8 rounded-2xl p-6 space-y-4"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          <h2 className="text-white font-bold text-lg">오늘의 별자리 운세를 읽는 방법</h2>
          <p className="text-white/60 text-sm leading-relaxed">
            자신의 생일이 포함된 별자리를 선택하면 오늘의 종합 흐름과 연애·인간관계, 금전, 직업, 생활 건강 조언을 확인할 수 있습니다. 점수는 하루를 돌아보기 위한 가벼운 지표이며 실제 사건을 예측하지 않습니다.
          </p>
          <p className="text-white/60 text-sm leading-relaxed">
            결과가 좋을 때는 이미 계획한 행동을 차분히 이어가고, 낮게 나왔을 때는 중요한 결정을 서두르지 않는 자기점검 질문으로 활용해보세요.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/blog/how-to-read-daily-fortune" className="text-purple-300 hover:text-purple-200">
              운세를 건강하게 읽는 법 →
            </Link>
            <Link href="/zodiac" className="text-purple-300 hover:text-purple-200">
              12별자리 상세 가이드 →
            </Link>
            <Link href="/" className="text-purple-300 hover:text-purple-200">
              생년월일 맞춤 운세 →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
