'use client';

import { useState, useEffect } from 'react';

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

interface FortuneCardProps {
  fortune: FortuneResult;
  onReset: () => void;
}

interface SectionProps {
  icon: string;
  title: string;
  content: string;
  color: string;
  delay: number;
}

function FortuneSection({ icon, title, content, color, delay }: SectionProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`rounded-2xl p-5 transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-sm font-bold tracking-widest uppercase" style={{ color }}>
          {title}
        </h3>
      </div>
      <p className="text-white/80 text-sm leading-relaxed font-medium">{content}</p>
    </div>
  );
}

function ScoreBar({ score }: { score: number }) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const stars = Array.from({ length: 5 }, (_, i) => {
    const filled = (score / 100) * 5;
    if (i < Math.floor(filled)) return 'full';
    if (i < filled) return 'half';
    return 'empty';
  });

  return (
    <div className="space-y-3">
      {/* 별점 */}
      <div className="flex justify-center gap-1">
        {stars.map((type, i) => (
          <span
            key={i}
            className={`text-2xl transition-all duration-500 ${
              animated ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {type === 'full' ? '⭐' : type === 'half' ? '🌟' : '☆'}
          </span>
        ))}
      </div>

      {/* 프로그레스 바 */}
      <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: animated ? `${score}%` : '0%',
            background: 'linear-gradient(90deg, #7c3aed, #a855f7, #ec4899)',
            boxShadow: '0 0 10px rgba(168, 85, 247, 0.5)',
          }}
        />
        {/* 반짝임 효과 */}
        <div
          className="absolute inset-y-0 left-0 rounded-full animate-shimmer"
          style={{
            width: animated ? `${score}%` : '0%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
            backgroundSize: '200% 100%',
            transition: 'width 1s ease-out',
          }}
        />
      </div>

      {/* 점수 텍스트 */}
      <div className="text-center">
        <span className="text-3xl font-black bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
          {score}
        </span>
        <span className="text-white/40 text-sm ml-1">/ 100</span>
      </div>
    </div>
  );
}

export default function FortuneCard({ fortune, onReset }: FortuneCardProps) {
  const [copied, setCopied] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setCardVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleShare = async () => {
    const text = `🔮 오늘의 운세 (${fortune.zodiacSign} / ${fortune.chineseZodiac})\n\n` +
      `⭐ 운세 점수: ${fortune.score}/100\n\n` +
      `✨ 종합운: ${fortune.overall}\n` +
      `💕 연애운: ${fortune.love}\n` +
      `💰 금전운: ${fortune.money}\n` +
      `💼 직업운: ${fortune.work}\n\n` +
      `🍀 행운의 색: ${fortune.luckyColor}\n` +
      `🔢 행운의 숫자: ${fortune.luckyNumber}\n\n` +
      `오늘의 운세 앱에서 확인하기 ✨`;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const scoreLevel = fortune.score >= 80 ? '최고의 날' :
    fortune.score >= 60 ? '좋은 날' :
    fortune.score >= 40 ? '보통의 날' : '주의가 필요한 날';

  const scoreEmoji = fortune.score >= 80 ? '🌟' :
    fortune.score >= 60 ? '⭐' :
    fortune.score >= 40 ? '🌙' : '💫';

  return (
    <div
      className={`w-full max-w-lg mx-auto transition-all duration-700 ${
        cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* 메인 카드 */}
      <div
        className="rounded-3xl p-[1px]"
        style={{
          background: 'linear-gradient(135deg, rgba(139,92,246,0.7), rgba(99,102,241,0.4), rgba(236,72,153,0.5))',
          boxShadow: '0 0 60px rgba(139, 92, 246, 0.3), 0 20px 40px rgba(0,0,0,0.5)',
        }}
      >
        <div
          className="rounded-3xl overflow-hidden"
          style={{
            background: 'linear-gradient(160deg, rgba(15,10,45,0.98) 0%, rgba(25,10,65,0.98) 100%)',
            backdropFilter: 'blur(20px)',
          }}
        >
          {/* 상단 헤더 */}
          <div
            className="px-8 py-6 text-center relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(124,58,237,0.3) 0%, rgba(99,102,241,0.2) 100%)',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            {/* 배경 장식 */}
            <div className="absolute top-2 left-4 text-purple-500/20 text-6xl select-none">✦</div>
            <div className="absolute bottom-2 right-4 text-indigo-500/20 text-4xl select-none">✦</div>
            <div className="absolute top-4 right-10 text-pink-500/20 text-2xl select-none animate-twinkle">★</div>
            <div className="absolute bottom-4 left-10 text-purple-400/20 text-2xl select-none animate-twinkle-delayed">★</div>

            <p className="text-purple-300/60 text-xs tracking-widest uppercase font-medium mb-3">
              오늘의 운세 결과
            </p>

            {/* 별자리 & 띠 */}
            <div className="flex justify-center gap-3 mb-4">
              <span
                className="px-4 py-1.5 rounded-full text-sm font-bold text-purple-200"
                style={{
                  background: 'rgba(124,58,237,0.3)',
                  border: '1px solid rgba(167,139,250,0.3)',
                }}
              >
                ♈ {fortune.zodiacSign}
              </span>
              <span
                className="px-4 py-1.5 rounded-full text-sm font-bold text-pink-200"
                style={{
                  background: 'rgba(236,72,153,0.2)',
                  border: '1px solid rgba(249,168,212,0.3)',
                }}
              >
                🐾 {fortune.chineseZodiac}
              </span>
            </div>

            {/* 오늘의 한마디 */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <span className="text-lg">{scoreEmoji}</span>
              <span className="text-white/70 text-sm font-semibold">{scoreLevel}</span>
            </div>
          </div>

          {/* 점수 섹션 */}
          <div className="px-8 py-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <p className="text-center text-white/40 text-xs tracking-widest uppercase font-medium mb-4">
              오늘의 운세 점수
            </p>
            <ScoreBar score={fortune.score} />
          </div>

          {/* 운세 섹션들 */}
          <div className="px-8 py-6 space-y-4">
            <p className="text-white/30 text-xs tracking-widest uppercase font-medium mb-2">
              세부 운세
            </p>
            <FortuneSection
              icon="✨"
              title="종합운"
              content={fortune.overall}
              color="#c084fc"
              delay={200}
            />
            <FortuneSection
              icon="💕"
              title="연애운"
              content={fortune.love}
              color="#f9a8d4"
              delay={400}
            />
            <FortuneSection
              icon="💰"
              title="금전운"
              content={fortune.money}
              color="#6ee7b7"
              delay={600}
            />
            <FortuneSection
              icon="💼"
              title="직업운"
              content={fortune.work}
              color="#93c5fd"
              delay={800}
            />
          </div>

          {/* 행운 정보 */}
          <div className="px-8 pb-6">
            <div
              className="rounded-2xl p-5"
              style={{
                background: 'linear-gradient(135deg, rgba(124,58,237,0.15), rgba(99,102,241,0.10))',
                border: '1px solid rgba(167,139,250,0.15)',
              }}
            >
              <p className="text-white/40 text-xs tracking-widest uppercase font-medium mb-4 text-center">
                오늘의 행운 아이템
              </p>
              <div className="flex justify-center gap-8">
                {/* 행운의 색상 */}
                <div className="text-center">
                  <div
                    className="w-12 h-12 rounded-full mx-auto mb-2 ring-2 ring-white/20"
                    style={{
                      background: getLuckyColorHex(fortune.luckyColor),
                      boxShadow: `0 0 20px ${getLuckyColorHex(fortune.luckyColor)}60`,
                    }}
                  />
                  <p className="text-white/40 text-xs mb-1">행운의 색</p>
                  <p className="text-white/80 text-sm font-bold">{fortune.luckyColor}</p>
                </div>

                {/* 구분선 */}
                <div
                  className="w-px self-stretch"
                  style={{ background: 'rgba(255,255,255,0.08)' }}
                />

                {/* 행운의 숫자 */}
                <div className="text-center">
                  <div
                    className="w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center ring-2 ring-purple-500/30"
                    style={{
                      background: 'linear-gradient(135deg, rgba(124,58,237,0.4), rgba(99,102,241,0.4))',
                    }}
                  >
                    <span className="text-xl font-black text-white">{fortune.luckyNumber}</span>
                  </div>
                  <p className="text-white/40 text-xs mb-1">행운의 숫자</p>
                  <p className="text-white/80 text-sm font-bold">{fortune.luckyNumber}</p>
                </div>
              </div>
            </div>
          </div>

          {/* 버튼 영역 */}
          <div className="px-8 pb-8 flex gap-3">
            {/* 공유하기 버튼 */}
            <button
              onClick={handleShare}
              className="flex-1 py-4 rounded-2xl font-bold text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden"
              style={{
                background: copied
                  ? 'linear-gradient(135deg, rgba(34,197,94,0.3), rgba(16,185,129,0.3))'
                  : 'rgba(255,255,255,0.06)',
                border: copied
                  ? '1px solid rgba(34,197,94,0.4)'
                  : '1px solid rgba(255,255,255,0.1)',
                color: copied ? '#86efac' : 'rgba(255,255,255,0.7)',
              }}
            >
              <span className="flex items-center justify-center gap-2">
                {copied ? (
                  <>
                    <span>✅</span>
                    <span>복사됨!</span>
                  </>
                ) : (
                  <>
                    <span>📋</span>
                    <span>공유하기</span>
                  </>
                )}
              </span>
            </button>

            {/* 다시 보기 버튼 */}
            <button
              onClick={onReset}
              className="flex-1 py-4 rounded-2xl font-bold text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: 'linear-gradient(135deg, #7c3aed 0%, #9333ea 50%, #6366f1 100%)',
                boxShadow: '0 0 20px rgba(139, 92, 246, 0.4)',
              }}
            >
              <span className="flex items-center justify-center gap-2 text-white">
                <span>🔮</span>
                <span>다시 보기</span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* 하단 장식 문구 */}
      <p className="text-center text-white/15 text-xs mt-6">
        ✦ 운세는 참고용입니다. 당신의 노력이 가장 중요합니다 ✦
      </p>
    </div>
  );
}

function getLuckyColorHex(colorName: string): string {
  const colorMap: Record<string, string> = {
    '빨간색': '#ef4444',
    '빨강': '#ef4444',
    '파란색': '#3b82f6',
    '파랑': '#3b82f6',
    '노란색': '#eab308',
    '노랑': '#eab308',
    '초록색': '#22c55e',
    '초록': '#22c55e',
    '보라색': '#a855f7',
    '보라': '#a855f7',
    '주황색': '#f97316',
    '주황': '#f97316',
    '분홍색': '#ec4899',
    '분홍': '#ec4899',
    '하늘색': '#38bdf8',
    '하늘': '#38bdf8',
    '하얀색': '#f1f5f9',
    '흰색': '#f1f5f9',
    '검은색': '#374151',
    '검정': '#374151',
    '금색': '#f59e0b',
    '금': '#f59e0b',
    '은색': '#94a3b8',
    '은': '#94a3b8',
    '갈색': '#92400e',
    '남색': '#1e3a8a',
    '연두색': '#84cc16',
    '연두': '#84cc16',
    '자주색': '#9d174d',
    '베이지': '#d4b896',
    '민트': '#6ee7b7',
    '민트색': '#6ee7b7',
  };

  const normalized = colorName.trim();
  return colorMap[normalized] || '#a855f7';
}
