'use client';

export const runtime = 'edge';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const bgStyle = {
  background: 'linear-gradient(160deg, #050520 0%, #0a0a2e 30%, #130a2e 60%, #1a0a3e 100%)',
  minHeight: '100vh',
};

const ZODIAC_SLUGS = [
  'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo',
  'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces',
];

interface DailyHoroscope {
  zodiac: string;
  zodiacKo: string;
  date: string;
  emoji: string;
  score: number;
  summary: string;
  overall: string;
  love: string;
  money: string;
  work: string;
  health: string;
  luckyColor: string;
  luckyNumber: number;
  luckyItem: string;
  advice: string;
}

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

function ScoreRing({ score }: { score: number }) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  const color = score >= 80 ? '#a78bfa' : score >= 65 ? '#60a5fa' : '#94a3b8';

  return (
    <div className="relative flex items-center justify-center" style={{ width: 100, height: 100 }}>
      <svg width="100" height="100" style={{ transform: 'rotate(-90deg)' }}>
        <circle cx="50" cy="50" r={radius} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
        <circle
          cx="50" cy="50" r={radius} fill="none"
          stroke={color} strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 1s ease' }}
        />
      </svg>
      <div className="absolute text-center">
        <div className="text-white font-bold text-xl leading-none">{score}</div>
        <div className="text-white/40 text-xs">점</div>
      </div>
    </div>
  );
}

function Section({ emoji, title, content }: { emoji: string; title: string; content: string }) {
  return (
    <div
      className="rounded-2xl p-5"
      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">{emoji}</span>
        <h3 className="text-white font-semibold text-sm">{title}</h3>
      </div>
      <p className="text-white/70 text-sm leading-relaxed">{content}</p>
    </div>
  );
}

export default function ZodiacDailyPage() {
  const params = useParams();
  const zodiac = (params?.zodiac as string ?? '').toLowerCase();
  const today = getTodayKST();

  const [data, setData] = useState<DailyHoroscope | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!ZODIAC_SLUGS.includes(zodiac)) {
      setError(true);
      setLoading(false);
      return;
    }
    fetch(`/api/daily-horoscope?zodiac=${zodiac}&date=${today}`)
      .then((r) => {
        if (!r.ok) throw new Error('fetch failed');
        return r.json() as Promise<DailyHoroscope>;
      })
      .then((d) => { setData(d); setLoading(false); })
      .catch(() => { setError(true); setLoading(false); });
  }, [zodiac, today]);

  if (error) {
    return (
      <div style={bgStyle} className="flex items-center justify-center">
        <div className="text-center text-white/50">
          <div className="text-4xl mb-4">🔮</div>
          <p>운세를 불러오는 데 문제가 생겼어요.</p>
          <Link href="/blog/daily" className="text-purple-400 hover:text-purple-300 text-sm mt-4 inline-block">
            ← 목록으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={bgStyle}>
      <article className="max-w-2xl mx-auto px-6 py-16">
        <Link href="/blog/daily" className="text-purple-400 hover:text-purple-300 text-sm mb-8 inline-block">
          ← 오늘의 전체 운세
        </Link>

        {loading || !data ? (
          <div className="space-y-4 animate-pulse">
            <div className="h-8 rounded-xl bg-white/5 w-3/4" />
            <div className="h-4 rounded-xl bg-white/5 w-1/2" />
            <div className="h-32 rounded-2xl bg-white/5 mt-8" />
            <div className="grid grid-cols-2 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-28 rounded-2xl bg-white/5" />
              ))}
            </div>
          </div>
        ) : (
          <>
            {/* Header */}
            <header className="mb-10">
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <span
                  className="px-2 py-0.5 rounded-full text-xs font-medium"
                  style={{ background: 'rgba(124,58,237,0.3)', color: 'rgba(196,181,253,1)' }}
                >
                  일일 운세
                </span>
                <span className="text-white/30 text-xs">{formatDate(data.date)}</span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="text-6xl">{data.emoji}</div>
                <div>
                  <h1 className="text-3xl font-bold text-white">{data.zodiacKo}</h1>
                  <p className="text-white/50 text-sm mt-1">{data.summary}</p>
                </div>
              </div>

              {/* Score + Lucky */}
              <div
                className="rounded-2xl p-5 flex items-center gap-6 flex-wrap"
                style={{ background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.2)' }}
              >
                <ScoreRing score={data.score} />
                <div className="flex-1 grid grid-cols-3 gap-4 min-w-0">
                  <div className="text-center">
                    <div className="text-white/40 text-xs mb-1">행운 색</div>
                    <div className="text-white font-semibold text-sm">{data.luckyColor}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white/40 text-xs mb-1">행운 숫자</div>
                    <div className="text-white font-semibold text-sm">{data.luckyNumber}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white/40 text-xs mb-1">행운 아이템</div>
                    <div className="text-white font-semibold text-sm">{data.luckyItem}</div>
                  </div>
                </div>
              </div>
            </header>

            {/* Overall */}
            <div
              className="rounded-2xl p-6 mb-6"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <h2 className="text-white font-bold text-base mb-3">🌟 종합 운세</h2>
              <p className="text-white/75 text-sm leading-relaxed">{data.overall}</p>
            </div>

            {/* Sections grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <Section emoji="💕" title="사랑 · 인간관계" content={data.love} />
              <Section emoji="💰" title="금전 · 재물" content={data.money} />
              <Section emoji="💼" title="직업 · 커리어" content={data.work} />
              <Section emoji="🌿" title="건강" content={data.health} />
            </div>

            {/* Advice */}
            <div
              className="rounded-2xl p-5 text-center"
              style={{ background: 'rgba(167,139,250,0.1)', border: '1px solid rgba(167,139,250,0.2)' }}
            >
              <div className="text-2xl mb-2">✨</div>
              <p className="text-purple-200 text-sm font-medium italic">&ldquo;{data.advice}&rdquo;</p>
              <p className="text-white/30 text-xs mt-2">오늘 하루를 위한 한 마디</p>
            </div>

            {/* Nav to other signs */}
            <nav className="mt-10">
              <p className="text-white/30 text-xs mb-4 text-center">다른 별자리 운세 보기</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {['aries','taurus','gemini','cancer','leo','virgo','libra','scorpio','sagittarius','capricorn','aquarius','pisces'].map((s) => (
                  <Link
                    key={s}
                    href={`/blog/daily/${s}`}
                    className={`px-3 py-1.5 rounded-full text-xs transition-colors ${
                      s === zodiac
                        ? 'text-white'
                        : 'text-white/40 hover:text-white/70'
                    }`}
                    style={s === zodiac ? { background: 'rgba(124,58,237,0.4)' } : { background: 'rgba(255,255,255,0.05)' }}
                  >
                    {s}
                  </Link>
                ))}
              </div>
            </nav>
          </>
        )}
      </article>
    </div>
  );
}
