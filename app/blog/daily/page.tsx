'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const bgStyle = {
  background: 'linear-gradient(160deg, #050520 0%, #0a0a2e 30%, #130a2e 60%, #1a0a3e 100%)',
  minHeight: '100vh',
};

const ZODIACS = [
  { slug: 'aries',       ko: '양자리',     emoji: '♈', dateRange: '3/21~4/19' },
  { slug: 'taurus',      ko: '황소자리',   emoji: '♉', dateRange: '4/20~5/20' },
  { slug: 'gemini',      ko: '쌍둥이자리', emoji: '♊', dateRange: '5/21~6/21' },
  { slug: 'cancer',      ko: '게자리',     emoji: '♋', dateRange: '6/22~7/22' },
  { slug: 'leo',         ko: '사자자리',   emoji: '♌', dateRange: '7/23~8/22' },
  { slug: 'virgo',       ko: '처녀자리',   emoji: '♍', dateRange: '8/23~9/22' },
  { slug: 'libra',       ko: '천칭자리',   emoji: '♎', dateRange: '9/23~10/23' },
  { slug: 'scorpio',     ko: '전갈자리',   emoji: '♏', dateRange: '10/24~11/22' },
  { slug: 'sagittarius', ko: '사수자리',   emoji: '♐', dateRange: '11/23~12/21' },
  { slug: 'capricorn',   ko: '염소자리',   emoji: '♑', dateRange: '12/22~1/19' },
  { slug: 'aquarius',    ko: '물병자리',   emoji: '♒', dateRange: '1/20~2/18' },
  { slug: 'pisces',      ko: '물고기자리', emoji: '♓', dateRange: '2/19~3/20' },
];

type ScoreMap = Record<string, { score: number; summary: string; luckyColor: string }>;

function getTodayKST(): string {
  const now = new Date();
  const kst = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  return kst.toISOString().slice(0, 10);
}

function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-');
  const date = new Date(dateStr);
  const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
  return `${year}년 ${parseInt(month)}월 ${parseInt(day)}일 (${weekdays[date.getDay()]}요일)`;
}

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
  const [scores, setScores] = useState<ScoreMap>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 12개 동시 fetch
    Promise.allSettled(
      ZODIACS.map((z) =>
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
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link href="/blog" className="text-purple-400 hover:text-purple-300 text-sm mb-8 inline-block">
          ← 블로그 목록으로
        </Link>

        <header className="mb-12 text-center">
          <div className="text-5xl mb-4">🔮</div>
          <h1 className="text-3xl font-bold text-white mb-3">오늘의 별자리 운세</h1>
          <p className="text-white/50 text-sm">{formatDate(today)}</p>
          <p className="text-white/40 text-xs mt-2">AI가 매일 새롭게 생성하는 12별자리 운세</p>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {ZODIACS.map((z) => {
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
            🌙 매일 자정(KST) 이후 AI가 오늘의 천체 에너지를 분석해 운세를 새롭게 생성합니다.
          </p>
        </div>
      </div>
    </div>
  );
}
