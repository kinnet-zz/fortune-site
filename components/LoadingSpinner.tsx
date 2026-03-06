'use client';

import { useEffect, useState } from 'react';
import { useLang } from '@/lib/useLang';
import { t } from '@/lib/i18n';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

export default function LoadingSpinner() {
  const { lang } = useLang();
  const tr = t(lang);
  const [messageIndex, setMessageIndex] = useState(0);
  const [stars] = useState<Star[]>(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 2,
      duration: Math.random() * 2 + 1.5,
    }))
  );

  useEffect(() => {
    setMessageIndex(0);
  }, [lang]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % tr.loadingMessages.length);
    }, 1800);
    return () => clearInterval(interval);
  }, [tr.loadingMessages.length]);

  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center justify-center py-8">
      {/* 메인 로딩 컨테이너 */}
      <div
        className="relative w-64 h-64 flex items-center justify-center rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, rgba(99,102,241,0.05) 60%, transparent 100%)',
        }}
      >
        {/* 흩어진 별들 */}
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              background: `hsl(${260 + star.id * 10}, 80%, 70%)`,
              animation: `twinkle ${star.duration}s ease-in-out infinite`,
              animationDelay: `${star.delay}s`,
              boxShadow: `0 0 ${star.size * 2}px rgba(167,139,250,0.8)`,
            }}
          />
        ))}

        {/* 외부 궤도 링 */}
        <div
          className="absolute w-56 h-56 rounded-full"
          style={{
            border: '1px solid rgba(167,139,250,0.15)',
            animation: 'orbit 6s linear infinite',
          }}
        >
          {/* 궤도 위의 별 */}
          <div
            className="absolute w-3 h-3 -top-1.5 left-1/2 -translate-x-1/2 rounded-full"
            style={{
              background: 'linear-gradient(135deg, #c084fc, #e879f9)',
              boxShadow: '0 0 10px rgba(192,132,252,0.8)',
            }}
          />
        </div>

        {/* 중간 궤도 링 */}
        <div
          className="absolute w-40 h-40 rounded-full"
          style={{
            border: '1px solid rgba(99,102,241,0.2)',
            animation: 'orbit 4s linear infinite reverse',
          }}
        >
          {/* 궤도 위의 별 */}
          <div
            className="absolute w-2 h-2 -top-1 left-1/2 -translate-x-1/2 rounded-full"
            style={{
              background: 'linear-gradient(135deg, #818cf8, #a5b4fc)',
              boxShadow: '0 0 8px rgba(129,140,248,0.8)',
            }}
          />
        </div>

        {/* 내부 원 */}
        <div
          className="absolute w-24 h-24 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(124,58,237,0.2), rgba(99,102,241,0.1))',
            border: '1px solid rgba(167,139,250,0.2)',
            animation: 'pulse-glow 2s ease-in-out infinite',
          }}
        />

        {/* 중앙 이모지 */}
        <div
          className="relative z-10 text-5xl"
          style={{ animation: 'float 3s ease-in-out infinite' }}
        >
          🔮
        </div>

        {/* 중앙 글로우 */}
        <div
          className="absolute w-16 h-16 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.4), transparent)',
            filter: 'blur(15px)',
          }}
        />
      </div>

      {/* 별 이모지 장식줄 */}
      <div className="flex items-center gap-2 mt-2 mb-6">
        {['⭐', '✨', '🌟', '✨', '⭐'].map((emoji, i) => (
          <span
            key={i}
            className="text-lg"
            style={{
              animation: `twinkle ${1.5 + i * 0.2}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          >
            {emoji}
          </span>
        ))}
      </div>

      {/* 텍스트 */}
      <div className="text-center min-h-[3.5rem] flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold text-white/90 mb-2">
          {tr.loadingTitle}
        </h2>
        <p
          key={messageIndex}
          className="text-purple-300/70 text-sm font-medium animate-fade-in-up"
        >
          {tr.loadingMessages[messageIndex]}
        </p>
      </div>

      {/* 로딩 도트 */}
      <div className="flex gap-2 mt-6">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full"
            style={{
              background: 'rgba(167,139,250,0.7)',
              animation: `twinkle 1.2s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

    </div>
  );
}
