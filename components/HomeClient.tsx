'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import FortuneForm from '../components/FortuneForm';
import FortuneCard from '../components/FortuneCard';
import LoadingSpinner from '../components/LoadingSpinner';
import AdUnit from '../components/AdUnit';
import InfoSection from '../components/InfoSection';
import { t } from '@/lib/i18n';
import { useLang } from '@/lib/useLang';

interface FortuneResult {
  zodiacSign: string;
  chineseZodiac: string;
  overall: string;
  love: string;
  money: string;
  work: string;
  luckyColor: string;
  luckyNumber: number;
  score: number;
}

interface BackgroundStar {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  delay: number;
  duration: number;
}

const STAR_COLORS = [
  'rgba(255,255,255,0.9)',
  'rgba(192,132,252,0.8)',
  'rgba(240,171,252,0.7)',
  'rgba(165,243,252,0.6)',
  'rgba(255,255,255,0.7)',
];

function BackgroundStars() {
  const [stars, setStars] = useState<BackgroundStar[]>([]);

  useEffect(() => {
    setStars(
      Array.from({ length: 120 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.3,
        opacity: Math.random() * 0.7 + 0.1,
        delay: Math.random() * 6,
        duration: Math.random() * 4 + 2,
      }))
    );
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            background: STAR_COLORS[star.id % STAR_COLORS.length],
            opacity: star.opacity,
            animation: `twinkle ${star.duration}s ease-in-out infinite`,
            animationDelay: `${star.delay}s`,
            boxShadow: star.size > 1.5
              ? `0 0 ${star.size * 3}px ${STAR_COLORS[star.id % STAR_COLORS.length]}`
              : 'none',
          }}
        />
      ))}

      {/* 떠다니는 별자리 기호 */}
      {['♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓'].map((sign, i) => (
        <div
          key={sign}
          className="absolute select-none"
          style={{
            left: `${(i * 8.5) % 95}%`,
            top: `${(i * 13 + 5) % 90}%`,
            fontSize: `${Math.random() * 14 + 10}px`,
            color: 'rgba(192,132,252,0.06)',
            animation: `float ${6 + i * 0.7}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
          }}
        >
          {sign}
        </div>
      ))}

      {/* 오로라 글로우 레이어들 */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 20% 40%, rgba(139,92,246,0.12) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 50% 60% at 80% 20%, rgba(236,72,153,0.08) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 90%, rgba(99,102,241,0.1) 0%, transparent 70%)',
        }}
      />
    </div>
  );
}

export default function HomeClient() {
  const { lang } = useLang();
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');
  const [fortune, setFortune] = useState<FortuneResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const lastGenderRef = useRef('');
  const prevLangRef = useRef(lang);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const r = params.get('r');
    if (!r) return;
    try {
      const raw = JSON.parse(decodeURIComponent(atob(r)));
      if (
        typeof raw !== 'object' || raw === null ||
        typeof raw.zodiacSign !== 'string' ||
        typeof raw.chineseZodiac !== 'string' ||
        typeof raw.overall !== 'string' ||
        typeof raw.love !== 'string' ||
        typeof raw.money !== 'string' ||
        typeof raw.work !== 'string' ||
        typeof raw.luckyColor !== 'string' ||
        typeof raw.luckyNumber !== 'number' ||
        typeof raw.score !== 'number'
      ) {
        return;
      }
      const decoded: FortuneResult = {
        zodiacSign: String(raw.zodiacSign).slice(0, 50),
        chineseZodiac: String(raw.chineseZodiac).slice(0, 50),
        overall: String(raw.overall).slice(0, 500),
        love: String(raw.love).slice(0, 500),
        money: String(raw.money).slice(0, 500),
        work: String(raw.work).slice(0, 500),
        luckyColor: String(raw.luckyColor).slice(0, 30),
        luckyNumber: Math.max(1, Math.min(99, Number(raw.luckyNumber))),
        score: Math.max(1, Math.min(100, Number(raw.score))),
      };
      const bd = params.get('bd') ?? '';
      const g = params.get('g') ?? '';
      setFortune(decoded);
      if (bd) setBirthDate(bd);
      if (g) { setGender(g); lastGenderRef.current = g; }
    } catch {
      // 잘못된 URL 파라미터는 무시
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (fortune && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [fortune]);

  const handleSubmit = useCallback(async (date: string, genderInput: string) => {
    setBirthDate(date);
    setGender(genderInput);
    lastGenderRef.current = genderInput;
    setIsLoading(true);
    setError(null);
    setFortune(null);

    try {
      const response = await fetch('/api/fortune', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ birthDate: date, gender: genderInput, language: lang }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        if (response.status === 429 || errorData.error === 'QUOTA_EXCEEDED') {
          throw new Error('QUOTA_EXCEEDED');
        }
        throw new Error('GENERAL_ERROR');
      }

      const data: FortuneResult = await response.json();
      setFortune(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'GENERAL_ERROR');
    } finally {
      setIsLoading(false);
    }
  }, [lang]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (prevLangRef.current === lang) return;
    prevLangRef.current = lang;
    if (fortune && birthDate && lastGenderRef.current) {
      handleSubmit(birthDate, lastGenderRef.current);
    }
  }, [lang]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleReset = () => {
    setFortune(null);
    setError(null);
    setBirthDate('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative aurora-bg">
      <BackgroundStars />

      {/* 상단 퍼플 글로우 */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] opacity-25 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(139,92,246,0.5) 0%, rgba(236,72,153,0.2) 50%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      {/* 좌측 핑크 글로우 */}
      <div
        className="fixed top-1/3 left-0 w-[400px] h-[600px] opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(240,171,252,0.6) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <main className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-start px-4 py-8 pb-16">
          {error && !isLoading && (
            <div
              className="w-full max-w-md mb-6 px-5 py-4 rounded-2xl flex items-start gap-3"
              style={{
                background: error === 'QUOTA_EXCEEDED' ? 'rgba(251,191,36,0.1)' : 'rgba(239,68,68,0.1)',
                border: error === 'QUOTA_EXCEEDED' ? '1px solid rgba(251,191,36,0.3)' : '1px solid rgba(239,68,68,0.3)',
              }}
            >
              <span className="text-xl flex-shrink-0">{error === 'QUOTA_EXCEEDED' ? '🌙' : '⚠️'}</span>
              <div>
                {error === 'QUOTA_EXCEEDED' ? (
                  <>
                    <p className="text-yellow-300 text-sm font-semibold mb-1">{t(lang).quotaTitle}</p>
                    <p className="text-yellow-300/70 text-sm">{t(lang).quotaMsg1}<br />{t(lang).quotaMsg2}</p>
                  </>
                ) : (
                  <>
                    <p className="text-red-300 text-sm font-semibold mb-1">{t(lang).errorTitle}</p>
                    <p className="text-red-300/70 text-sm">{t(lang).generalError}</p>
                  </>
                )}
                <button
                  onClick={handleReset}
                  className="mt-2 text-xs underline transition-colors"
                  style={{ color: error === 'QUOTA_EXCEEDED' ? 'rgba(251,191,36,0.5)' : 'rgba(239,68,68,0.5)' }}
                >
                  {t(lang).back}
                </button>
              </div>
            </div>
          )}

          {isLoading && (
            <div className="w-full flex justify-center py-8">
              <LoadingSpinner />
            </div>
          )}

          {fortune && !isLoading && (
            <div ref={resultRef} className="w-full flex justify-center">
              <FortuneCard fortune={fortune} onReset={handleReset} lang={lang} birthDate={birthDate} gender={gender} />
            </div>
          )}

          {!fortune && !isLoading && (
            <div className="w-full flex justify-center">
              <FortuneForm onSubmit={handleSubmit} isLoading={isLoading} lang={lang} />
            </div>
          )}

          {fortune && !isLoading && (
            <>
              <div className="mt-8 text-center">
                <p className="text-white/20 text-xs">{t(lang).retryHint}</p>
              </div>
              <div className="w-full max-w-lg mx-auto mt-6">
                <AdUnit slot="4511932122" format="auto" />
              </div>
            </>
          )}

          {!isLoading && <InfoSection />}

          {!isLoading && (
            <div className="w-full max-w-2xl mx-auto px-4 mt-10">
              <AdUnit slot="4511932122" format="horizontal" />
            </div>
          )}
        </div>
      </main>

      {/* 우측 하단 인디고 글로우 */}
      <div
        className="fixed bottom-0 right-0 w-[600px] h-[400px] opacity-12 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(99,102,241,0.5) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
    </div>
  );
}
