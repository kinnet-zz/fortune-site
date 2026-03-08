'use client';

import { useState, useEffect, useRef } from 'react';
import { type Lang, t } from '@/lib/i18n';

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
  lang: Lang;
  birthDate: string;
  gender: string;
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

export default function FortuneCard({ fortune, onReset, lang, birthDate, gender }: FortuneCardProps) {
  const [copied, setCopied] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  const [imageSharing, setImageSharing] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardVisible, setCardVisible] = useState(false);
  const tr = t(lang);

  useEffect(() => {
    const timer = setTimeout(() => setCardVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);


  const handleShare = async () => {
    const text = `🔮 ${tr.resultHeader} (${fortune.zodiacSign} / ${fortune.chineseZodiac})\n\n` +
      `⭐ ${tr.scoreLabel}: ${fortune.score}/100\n\n` +
      `✨ ${tr.overall}: ${fortune.overall}\n` +
      `💕 ${tr.love}: ${fortune.love}\n` +
      `💰 ${tr.money}: ${fortune.money}\n` +
      `💼 ${tr.work}: ${fortune.work}\n\n` +
      `🍀 ${tr.luckyColorLabel}: ${fortune.luckyColor}\n` +
      `🔢 ${tr.luckyNumberLabel}: ${fortune.luckyNumber}\n\n` +
      `https://www.starfate.day`;

    if (!navigator.clipboard) return;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const buildShareUrl = () => {
    const encoded = btoa(encodeURIComponent(JSON.stringify(fortune)));
    const params = new URLSearchParams({ r: encoded, bd: birthDate, g: gender });
    return `${window.location.origin}/?${params.toString()}`;
  };

  const handleLinkCopy = async () => {
    if (!navigator.clipboard) return;
    await navigator.clipboard.writeText(buildShareUrl());
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2500);
  };

  const handleImageShare = async () => {
    if (!cardRef.current) return;
    setImageSharing(true);
    try {
      const html2canvas = (await import('html2canvas')).default;
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: '#0f0a2d',
        scale: 2,
        useCORS: true,
        logging: false,
      });
      canvas.toBlob(async (blob) => {
        if (!blob) { setImageSharing(false); return; }
        const file = new File([blob], 'fortune.png', { type: 'image/png' });

        // 클립보드에 이미지 복사 (카카오톡 등 붙여넣기 가능하도록)
        try {
          if (navigator.clipboard && 'write' in navigator.clipboard) {
            await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
          }
        } catch { /* 미지원 기기 무시 */ }

        if (navigator.share && navigator.canShare({ files: [file] })) {
          await navigator.share({ files: [file], title: tr.resultHeader }).catch(() => {});
        } else {
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'fortune.png';
          a.click();
          URL.revokeObjectURL(url);
        }
        setImageSharing(false);
      }, 'image/png');
    } catch {
      setImageSharing(false);
    }
  };

  const scoreLevel = tr.scoreLevel(fortune.score);

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
        ref={cardRef}
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
              {tr.resultHeader}
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
              {tr.scoreLabel}
            </p>
            <ScoreBar score={fortune.score} />
          </div>

          {/* 운세 섹션들 */}
          <div className="px-8 py-6 space-y-4">
            <p className="text-white/30 text-xs tracking-widest uppercase font-medium mb-2">
              {tr.detailLabel}
            </p>
            <FortuneSection
              icon="✨"
              title={tr.overall}
              content={fortune.overall}
              color="#c084fc"
              delay={200}
            />
            <FortuneSection
              icon="💕"
              title={tr.love}
              content={fortune.love}
              color="#f9a8d4"
              delay={400}
            />
            <FortuneSection
              icon="💰"
              title={tr.money}
              content={fortune.money}
              color="#6ee7b7"
              delay={600}
            />
            <FortuneSection
              icon="💼"
              title={tr.work}
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
                {tr.luckyItemLabel}
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
                  <p className="text-white/40 text-xs mb-1">{tr.luckyColorLabel}</p>
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
                  <p className="text-white/40 text-xs mb-1">{tr.luckyNumberLabel}</p>
                  <p className="text-white/80 text-sm font-bold">{fortune.luckyNumber}</p>
                </div>
              </div>
            </div>
          </div>

          {/* 버튼 영역 */}
          <div className="px-8 pb-8 space-y-3">
            <div className="flex gap-3">
              {/* 이미지 공유 버튼 */}
              <button
                onClick={handleImageShare}
                disabled={imageSharing}
                className="flex-1 py-4 rounded-2xl font-bold text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: imageSharing
                    ? 'rgba(255,255,255,0.04)'
                    : 'linear-gradient(135deg, rgba(236,72,153,0.3), rgba(139,92,246,0.3))',
                  border: '1px solid rgba(236,72,153,0.3)',
                  color: imageSharing ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.8)',
                }}
              >
                <span className="flex items-center justify-center gap-2">
                  <span>{imageSharing ? '⏳' : '📸'}</span>
                  <span>{imageSharing ? tr.imageSharing : tr.imageShareBtn}</span>
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
                  <span>{tr.resetBtn}</span>
                </span>
              </button>
            </div>

            {/* 텍스트 공유 + 링크 복사 */}
            <div className="flex gap-3">
              <button
                onClick={handleShare}
                className="flex-1 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
                style={{
                  background: copied
                    ? 'linear-gradient(135deg, rgba(34,197,94,0.3), rgba(16,185,129,0.3))'
                    : 'rgba(255,255,255,0.03)',
                  border: copied ? '1px solid rgba(34,197,94,0.4)' : '1px solid rgba(255,255,255,0.07)',
                  color: copied ? '#86efac' : 'rgba(255,255,255,0.35)',
                }}
              >
                <span className="flex items-center justify-center gap-2">
                  {copied ? <><span>✅</span><span>{tr.copied}</span></> : <><span>📋</span><span>{tr.shareBtn}</span></>}
                </span>
              </button>
              <button
                onClick={handleLinkCopy}
                className="flex-1 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
                style={{
                  background: linkCopied
                    ? 'linear-gradient(135deg, rgba(99,102,241,0.3), rgba(139,92,246,0.3))'
                    : 'rgba(255,255,255,0.03)',
                  border: linkCopied ? '1px solid rgba(139,92,246,0.5)' : '1px solid rgba(255,255,255,0.07)',
                  color: linkCopied ? '#c4b5fd' : 'rgba(255,255,255,0.35)',
                }}
              >
                <span className="flex items-center justify-center gap-2">
                  {linkCopied ? <><span>✅</span><span>{tr.linkCopied}</span></> : <><span>🔗</span><span>{tr.linkCopyBtn}</span></>}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 장식 문구 */}
      <p className="text-center text-white/15 text-xs mt-6">
        {tr.disclaimer}
      </p>
    </div>
  );
}

function getLuckyColorHex(colorName: string): string {
  const colorMap: Record<string, string> = {
    // Korean
    '빨간색': '#ef4444', '빨강': '#ef4444',
    '파란색': '#3b82f6', '파랑': '#3b82f6',
    '노란색': '#eab308', '노랑': '#eab308',
    '초록색': '#22c55e', '초록': '#22c55e',
    '보라색': '#a855f7', '보라': '#a855f7',
    '주황색': '#f97316', '주황': '#f97316',
    '분홍색': '#ec4899', '분홍': '#ec4899',
    '하늘색': '#38bdf8', '하늘': '#38bdf8',
    '하얀색': '#f1f5f9', '흰색': '#f1f5f9', '백색': '#f1f5f9',
    '검은색': '#374151', '검정': '#374151',
    '금색': '#f59e0b', '금': '#f59e0b',
    '은색': '#94a3b8', '은': '#94a3b8',
    '갈색': '#92400e', '남색': '#1e3a8a',
    '연두색': '#84cc16', '연두': '#84cc16',
    '자주색': '#9d174d', '베이지': '#d4b896',
    '민트': '#6ee7b7', '민트색': '#6ee7b7',
    '회색': '#6b7280', '회색계열': '#6b7280',
    // English
    'red': '#ef4444', 'crimson': '#dc2626',
    'blue': '#3b82f6', 'navy': '#1e3a8a', 'indigo': '#6366f1', 'teal': '#14b8a6',
    'yellow': '#eab308', 'amber': '#f59e0b', 'gold': '#f59e0b',
    'green': '#22c55e', 'emerald': '#10b981', 'lime': '#84cc16',
    'purple': '#a855f7', 'violet': '#8b5cf6', 'lavender': '#c4b5fd',
    'orange': '#f97316', 'coral': '#fb923c',
    'pink': '#ec4899', 'rose': '#f43f5e',
    'sky blue': '#38bdf8', 'sky': '#38bdf8', 'turquoise': '#2dd4bf', 'cyan': '#06b6d4',
    'white': '#f1f5f9', 'cream': '#fef9c3', 'ivory': '#fef9c3', 'beige': '#d4b896',
    'black': '#374151', 'charcoal': '#374151',
    'silver': '#94a3b8', 'gray': '#6b7280', 'grey': '#6b7280',
    'brown': '#92400e', 'chocolate': '#78350f',
    'mint': '#6ee7b7',
    // Chinese
    '红色': '#ef4444', '红': '#ef4444', '玫瑰红': '#f43f5e',
    '蓝色': '#3b82f6', '蓝': '#3b82f6', '深蓝色': '#1e3a8a', '深蓝': '#1e3a8a', '靛蓝': '#6366f1',
    '黄色': '#eab308', '黄': '#eab308', '金色': '#f59e0b', '金黄色': '#f59e0b',
    '绿色': '#22c55e', '绿': '#22c55e', '翠绿': '#10b981', '草绿': '#84cc16',
    '紫色': '#a855f7', '紫': '#a855f7', '薰衣草色': '#c4b5fd',
    '橙色': '#f97316', '橙': '#f97316', '珊瑚色': '#fb923c',
    '粉色': '#ec4899', '粉红色': '#ec4899', '粉红': '#ec4899',
    '天蓝色': '#38bdf8', '天蓝': '#38bdf8', '青色': '#06b6d4', '青': '#06b6d4',
    '白色': '#f1f5f9', '白': '#f1f5f9', '米色': '#d4b896', '奶白色': '#fef9c3',
    '黑色': '#374151', '黑': '#374151',
    '银色': '#94a3b8', '银': '#94a3b8', '灰色': '#6b7280', '灰': '#6b7280',
    '棕色': '#92400e', '棕': '#92400e', '褐色': '#92400e',
    '薄荷色': '#6ee7b7', '薄荷绿': '#6ee7b7',
    // Japanese (katakana & unique kanji only; shared CJK entries handled above)
    '赤': '#ef4444', '赤色': '#ef4444', '紅色': '#dc2626',
    '紺': '#1e3a8a', '紺色': '#1e3a8a',
    '金': '#f59e0b',
    '緑': '#22c55e', '緑色': '#22c55e', '黄緑': '#84cc16',
    'ラベンダー': '#c4b5fd',
    'オレンジ': '#f97316', 'オレンジ色': '#f97316', 'サーモン': '#fb923c',
    'ピンク': '#ec4899', 'ピンク色': '#ec4899',
    '水色': '#38bdf8', 'ターコイズ': '#2dd4bf', 'シアン': '#06b6d4',
    'ベージュ': '#d4b896', 'クリーム': '#fef9c3',
    '黒': '#374151', '黒色': '#374151',
    '銀': '#94a3b8', '銀色': '#94a3b8', 'グレー': '#6b7280',
    '茶': '#92400e', '茶色': '#92400e',
    'ミント': '#6ee7b7', 'ライム': '#84cc16', 'ライムグリーン': '#84cc16',
  };

  const normalized = colorName.trim().toLowerCase();
  return colorMap[colorName.trim()] || colorMap[normalized] || '#a855f7';
}
