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

function BackgroundStars() {
  const [stars, setStars] = useState<BackgroundStar[]>([]);

  useEffect(() => {
    setStars(
      Array.from({ length: 80 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2.5 + 0.5,
        opacity: Math.random() * 0.6 + 0.1,
        delay: Math.random() * 4,
        duration: Math.random() * 3 + 2,
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
            background: 'white',
            opacity: star.opacity,
            animation: `twinkle ${star.duration}s ease-in-out infinite`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

      {/* 큰 별 몇 개 */}
      {[
        { x: 15, y: 20, emoji: '✦' },
        { x: 80, y: 15, emoji: '✦' },
        { x: 5, y: 70, emoji: '✦' },
        { x: 92, y: 60, emoji: '✦' },
        { x: 50, y: 8, emoji: '✦' },
      ].map((item, i) => (
        <div
          key={i}
          className="absolute text-white/10 text-2xl select-none"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            animation: `twinkle ${3 + i * 0.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.7}s`,
          }}
        >
          {item.emoji}
        </div>
      ))}

      {/* 은하수 느낌의 그라디언트 오버레이 */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 30% 50%, rgba(99,102,241,0.15) 0%, transparent 100%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(ellipse 40% 60% at 70% 30%, rgba(168,85,247,0.2) 0%, transparent 100%)',
        }}
      />
    </div>
  );
}

export default function HomePage() {
  const { lang, setLang } = useLang();
  const [birthDate, setBirthDate] = useState('');
  const [fortune, setFortune] = useState<FortuneResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const lastGenderRef = useRef('');
  const prevLangRef = useRef(lang);

  // 운세 결과가 나오면 스크롤
  useEffect(() => {
    if (fortune && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [fortune]);

  const handleSubmit = useCallback(async (date: string, gender: string) => {
    setBirthDate(date);
    lastGenderRef.current = gender;
    setIsLoading(true);
    setError(null);
    setFortune(null);

    try {
      const response = await fetch('/api/fortune', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ birthDate: date, gender, language: lang }),
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
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('GENERAL_ERROR');
      }
    } finally {
      setIsLoading(false);
    }
  }, [lang]); // eslint-disable-line react-hooks/exhaustive-deps

  // 언어 변경 시 운세 결과가 있으면 자동 재조회
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
    <div
      className="min-h-screen relative"
      style={{
        background: 'linear-gradient(160deg, #050520 0%, #0a0a2e 30%, #130a2e 60%, #1a0a3e 100%)',
      }}
    >
      {/* 배경 별들 */}
      <BackgroundStars />

      {/* 상단 배경 글로우 */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(124,58,237,0.4) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* 메인 컨텐츠 */}
      <main className="relative z-10 min-h-screen flex flex-col">

        {/* 콘텐츠 영역 */}
        <div className="flex-1 flex flex-col items-center justify-start px-4 py-8 pb-16">
          {/* 에러 메시지 */}
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

          {/* 로딩 스피너 */}
          {isLoading && (
            <div className="w-full flex justify-center py-8">
              <LoadingSpinner />
            </div>
          )}

          {/* 운세 결과 */}
          {fortune && !isLoading && (
            <div ref={resultRef} className="w-full flex justify-center">
              <FortuneCard fortune={fortune} onReset={handleReset} lang={lang} />
            </div>
          )}

          {/* 폼 - 결과가 없고 로딩 중이 아닐 때 */}
          {!fortune && !isLoading && (
            <div className="w-full flex justify-center">
              <FortuneForm onSubmit={handleSubmit} isLoading={isLoading} lang={lang} />
            </div>
          )}

          {/* 운세 결과 후 광고 */}
          {fortune && !isLoading && (
            <>
              <div className="mt-8 text-center">
                <p className="text-white/20 text-xs">
                  {t(lang).retryHint}
                </p>
              </div>
              <div className="w-full max-w-lg mx-auto mt-6">
                <AdUnit slot="4511932122" format="auto" />
              </div>
            </>
          )}

          {/* 폼 하단 정보 섹션 */}
          {!isLoading && (
            <InfoSection />
          )}

          {/* 하단 광고 */}
          {!isLoading && (
            <div className="w-full max-w-2xl mx-auto px-4 mt-10">
              <AdUnit slot="4511932122" format="horizontal" />
            </div>
          )}
        </div>

      </main>

      {/* 하단 배경 글로우 */}
      <div
        className="fixed bottom-0 right-0 w-[500px] h-[300px] opacity-15 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(99,102,241,0.5) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />
    </div>
  );
}
