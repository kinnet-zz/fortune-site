'use client';

import { useState, useEffect, useRef } from 'react';
import FortuneForm from '../components/FortuneForm';
import FortuneCard from '../components/FortuneCard';
import LoadingSpinner from '../components/LoadingSpinner';

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
  const [stars] = useState<BackgroundStar[]>(() =>
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
  const [birthDate, setBirthDate] = useState('');
  const [fortune, setFortune] = useState<FortuneResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  // 운세 결과가 나오면 스크롤
  useEffect(() => {
    if (fortune && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [fortune]);

  const handleSubmit = async (date: string) => {
    setBirthDate(date);
    setIsLoading(true);
    setError(null);
    setFortune(null);

    try {
      const response = await fetch('/api/fortune', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ birthDate: date }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `서버 오류가 발생했습니다. (${response.status})`);
      }

      const data: FortuneResult = await response.json();
      setFortune(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('운세를 불러오는 중 오류가 발생했습니다. 다시 시도해주세요.');
      }
    } finally {
      setIsLoading(false);
    }
  };

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
        {/* 상단 네비게이션 느낌 */}
        <div className="flex justify-center pt-8 pb-4">
          <div
            className="flex items-center gap-2 px-5 py-2 rounded-full"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <span className="text-purple-300/60 text-xs tracking-widest uppercase font-medium">
              ✦ Fortune Teller ✦
            </span>
          </div>
        </div>

        {/* 콘텐츠 영역 */}
        <div className="flex-1 flex flex-col items-center justify-start px-4 py-8 pb-16">
          {/* 에러 메시지 */}
          {error && !isLoading && (
            <div
              className="w-full max-w-md mb-6 px-5 py-4 rounded-2xl flex items-start gap-3"
              style={{
                background: 'rgba(239,68,68,0.1)',
                border: '1px solid rgba(239,68,68,0.3)',
              }}
            >
              <span className="text-xl flex-shrink-0">⚠️</span>
              <div>
                <p className="text-red-300 text-sm font-semibold mb-1">오류 발생</p>
                <p className="text-red-300/70 text-sm">{error}</p>
                <button
                  onClick={handleReset}
                  className="mt-2 text-red-300/50 text-xs underline hover:text-red-300/80 transition-colors"
                >
                  다시 시도하기
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
              <FortuneCard fortune={fortune} onReset={handleReset} />
            </div>
          )}

          {/* 폼 - 결과가 없고 로딩 중이 아닐 때 */}
          {!fortune && !isLoading && (
            <div className="w-full flex justify-center">
              <FortuneForm onSubmit={handleSubmit} isLoading={isLoading} />
            </div>
          )}

          {/* 운세 결과 후 다시 입력 버튼 - 결과 아래에 폼 대신 */}
          {fortune && !isLoading && (
            <div className="mt-8 text-center">
              <p className="text-white/20 text-xs">
                다른 날짜로 운세를 확인하려면 &quot;다시 보기&quot;를 눌러주세요
              </p>
            </div>
          )}
        </div>

        {/* 푸터 */}
        <footer className="relative z-10 py-6 text-center space-y-3">
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.05)',
            }}
          >
            <span className="text-white/20 text-xs">⭐</span>
            <p className="text-white/20 text-xs font-medium">
              오늘의 운세 © {new Date().getFullYear()}
            </p>
            <span className="text-white/20 text-xs">⭐</span>
          </div>
          <div className="flex justify-center gap-6 text-xs pb-16">
            <a href="/privacy" className="text-white/30 hover:text-white/60 transition-colors">개인정보처리방침</a>
            <a href="/terms" className="text-white/30 hover:text-white/60 transition-colors">이용약관</a>
            <a href="/contact" className="text-white/30 hover:text-white/60 transition-colors">문의하기</a>
          </div>
        </footer>
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
