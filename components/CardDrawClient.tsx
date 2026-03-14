'use client';

import { useState, useEffect } from 'react';
import { useLang } from '@/lib/useLang';
import { TAROT_CARDS, type TarotCard } from '@/lib/tarot-data';

type Lang = 'ko' | 'en' | 'zh' | 'ja';

const tr = {
  ko: {
    pageTitle: '오늘의 카드',
    pageSubtitle: '마음을 비우고 한 장을 선택하세요',
    instruction: '마음이 이끄는 카드를 선택하세요',
    resultTitle: '오늘 당신의 카드',
    keywordLabel: '키워드',
    messageLabel: '오늘의 메시지',
    retryBtn: '다시 뽑기',
    shareBtn: '공유하기',
    shareText: (name: string, keyword: string) =>
      `오늘 나의 타로 카드는 「${name}」— ${keyword}\n당신의 오늘을 알아보세요 👉 https://www.starfate.day/card-draw`,
    footerText: '✦ 오락 목적의 콘텐츠입니다 ✦',
  },
  en: {
    pageTitle: "Today's Card",
    pageSubtitle: 'Clear your mind and choose one card',
    instruction: 'Let your heart guide you to a card',
    resultTitle: 'Your Card for Today',
    keywordLabel: 'Keyword',
    messageLabel: "Today's Message",
    retryBtn: 'Draw Again',
    shareBtn: 'Share',
    shareText: (name: string, keyword: string) =>
      `My tarot card today is "${name}" — ${keyword}\nDiscover yours 👉 https://www.starfate.day/card-draw?lang=en`,
    footerText: '✦ For entertainment purposes only ✦',
  },
  zh: {
    pageTitle: '今日牌卡',
    pageSubtitle: '清空思绪，选择一张牌',
    instruction: '跟随内心的指引选择一张牌',
    resultTitle: '你今日的牌卡',
    keywordLabel: '关键词',
    messageLabel: '今日讯息',
    retryBtn: '重新抽牌',
    shareBtn: '分享',
    shareText: (name: string, keyword: string) =>
      `我今日的塔罗牌是「${name}」— ${keyword}\n快来查看你的牌 👉 https://www.starfate.day/card-draw?lang=zh`,
    footerText: '✦ 仅供娱乐目的 ✦',
  },
  ja: {
    pageTitle: '今日のカード',
    pageSubtitle: '心を空にして一枚を選んでください',
    instruction: '心が導くままにカードを選んでください',
    resultTitle: '今日あなたのカード',
    keywordLabel: 'キーワード',
    messageLabel: '今日のメッセージ',
    retryBtn: 'もう一度引く',
    shareBtn: 'シェアする',
    shareText: (name: string, keyword: string) =>
      `今日の私のタロットカードは「${name}」— ${keyword}\nあなたも調べてみよう 👉 https://www.starfate.day/card-draw?lang=ja`,
    footerText: '✦ エンタメ目的のコンテンツです ✦',
  },
};

const ROMAN = ['0', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X',
  'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX', 'XXI'];

function getSpreadIndices(): number[] {
  const indices = Array.from({ length: TAROT_CARDS.length }, (_, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  return indices.slice(0, 7);
}

export default function CardDrawClient() {
  const { lang } = useLang();
  const t = tr[lang as Lang] ?? tr.ko;

  const [spreadIndices, setSpreadIndices] = useState<number[]>([]);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [selectedCard, setSelectedCard] = useState<TarotCard | null>(null);
  const [flipped, setFlipped] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => { setSpreadIndices(getSpreadIndices()); }, []);

  const handleSelect = (cardIndex: number) => {
    if (selectedCard) return;
    setSelectedCard(TAROT_CARDS[cardIndex]);
    setTimeout(() => setFlipped(true), 100);
    setTimeout(() => setRevealed(true), 700);
  };

  const handleRetry = () => {
    setSelectedCard(null);
    setFlipped(false);
    setRevealed(false);
    setHoveredIdx(null);
    setSpreadIndices(getSpreadIndices());
  };

  const handleShare = () => {
    if (!selectedCard) return;
    const l = lang as Lang;
    const text = t.shareText(selectedCard.name[l], selectedCard.keyword[l]);
    if (navigator.share) navigator.share({ text }).catch(() => {});
    else navigator.clipboard.writeText(text).catch(() => {});
  };

  const l = lang as Lang;

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #0d0118 0%, #150a2e 60%, #0d0118 100%)' }}>

      {/* 히어로 */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(99,102,241,0.18) 0%, transparent 70%)',
        }} />
        <div className="relative z-10 max-w-md mx-auto px-4 pt-10 pb-4 text-center">
          <h1 className="text-3xl font-black text-white mb-2">{t.pageTitle}</h1>
          <p className="text-white/40 text-sm">{t.pageSubtitle}</p>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 pb-20">

        {/* 카드 스프레드 */}
        {!revealed && spreadIndices.length > 0 && (
          <div className="mb-8">
            <p className="text-center text-purple-300/40 text-xs mb-6 tracking-widest uppercase">
              ✦ {t.instruction} ✦
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {spreadIndices.map((cardIdx, i) => (
                <div key={i} style={{ width: 'calc(25% - 9px)', flexShrink: 0 }}>
                  <TarotCardBack
                    card={TAROT_CARDS[cardIdx]}
                    isSelected={selectedCard === TAROT_CARDS[cardIdx]}
                    isHovered={hoveredIdx === i}
                    isFlipped={selectedCard === TAROT_CARDS[cardIdx] && flipped}
                    disabled={selectedCard !== null}
                    lang={l}
                    onHover={() => setHoveredIdx(i)}
                    onLeave={() => setHoveredIdx(null)}
                    onSelect={() => handleSelect(cardIdx)}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 결과 카드 */}
        {revealed && selectedCard && (
          <ResultCard
            card={selectedCard}
            lang={l}
            t={t}
            onRetry={handleRetry}
            onShare={handleShare}
          />
        )}

        <p className="text-center text-white/15 text-xs mt-8">{t.footerText}</p>
      </div>
    </div>
  );
}

/* ── 카드 뒷면 / 플립 컴포넌트 ── */
function TarotCardBack({
  card, isSelected, isHovered, isFlipped, disabled, lang,
  onHover, onLeave, onSelect,
}: {
  card: TarotCard; isSelected: boolean; isHovered: boolean;
  isFlipped: boolean; disabled: boolean; lang: Lang;
  onHover: () => void; onLeave: () => void; onSelect: () => void;
}) {
  return (
    <div
      className="relative select-none"
      style={{ perspective: '800px', aspectRatio: '2/3', cursor: disabled ? 'default' : 'pointer' }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={disabled ? undefined : onSelect}
    >
      <div
        className="w-full h-full transition-all duration-500"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped
            ? 'rotateY(180deg)'
            : isHovered && !disabled
              ? 'rotateY(-12deg) translateY(-8px) scale(1.04)'
              : 'rotateY(0deg)',
        }}
      >
        {/* 뒷면 */}
        <div
          className="absolute inset-0 rounded-xl overflow-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <CardBackFace isHovered={isHovered && !disabled} />
        </div>

        {/* 앞면 (플립 후 작은 미리보기) */}
        <div
          className="absolute inset-0 rounded-xl overflow-hidden flex flex-col"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: `linear-gradient(160deg, #1a0a3e 0%, #0f0628 100%)`,
            border: `2px solid ${card.color}70`,
          }}
        >
          {/* 상단 로마 숫자 */}
          <div className="flex justify-center pt-1.5">
            <span style={{ color: `${card.color}90`, fontSize: '0.55rem', fontWeight: 900, letterSpacing: '0.05em' }}>
              {ROMAN[card.id]}
            </span>
          </div>
          {/* 내부 장식 테두리 */}
          <div className="flex-1 mx-1.5 mb-1.5 rounded-lg overflow-hidden"
            style={{ border: `1px solid ${card.color}30`, background: `${card.color}08` }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={card.image} alt={card.name.en} className="w-full h-full object-cover object-top" />
          </div>
          {/* 하단 이름 */}
          <div className="pb-1.5 text-center">
            <span style={{ color: card.color, fontSize: '0.5rem', fontWeight: 700, letterSpacing: '0.04em' }}>
              {card.name[lang].toUpperCase()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── 카드 뒷면 디자인 ── */
function CardBackFace({ isHovered }: { isHovered: boolean }) {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center"
      style={{
        background: 'linear-gradient(160deg, #1e0a4e 0%, #2a1060 40%, #1a0840 100%)',
        border: isHovered ? '1.5px solid rgba(167,139,250,0.6)' : '1.5px solid rgba(139,92,246,0.3)',
        boxShadow: isHovered ? '0 8px 30px rgba(124,58,237,0.5), inset 0 0 20px rgba(139,92,246,0.1)' : '0 4px 15px rgba(0,0,0,0.5)',
        transition: 'all 0.3s',
      }}
    >
      {/* 외부 장식 테두리 */}
      <div className="absolute inset-[5px] rounded-lg" style={{ border: '1px solid rgba(139,92,246,0.25)' }} />
      <div className="absolute inset-[8px] rounded-md" style={{ border: '0.5px solid rgba(139,92,246,0.15)' }} />

      {/* 코너 장식 */}
      {['top-[10px] left-[10px]', 'top-[10px] right-[10px]', 'bottom-[10px] left-[10px]', 'bottom-[10px] right-[10px]'].map((pos, i) => (
        <div key={i} className={`absolute ${pos} text-purple-400/40`} style={{ fontSize: '0.5rem' }}>◆</div>
      ))}

      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: [
          'repeating-linear-gradient(45deg, rgba(139,92,246,0.4) 0px, rgba(139,92,246,0.4) 1px, transparent 1px, transparent 10px)',
          'repeating-linear-gradient(-45deg, rgba(139,92,246,0.4) 0px, rgba(139,92,246,0.4) 1px, transparent 1px, transparent 10px)',
        ].join(', '),
      }} />

      {/* 중앙 별 */}
      <div className="relative z-10 flex flex-col items-center gap-1">
        <div style={{ fontSize: '1.2rem', color: 'rgba(196,132,252,0.7)', filter: 'drop-shadow(0 0 6px rgba(167,139,250,0.6))' }}>✦</div>
        <div style={{ fontSize: '0.5rem', color: 'rgba(196,132,252,0.35)', letterSpacing: '0.15em' }}>TAROT</div>
      </div>
    </div>
  );
}

/* ── 결과 카드 ── */
function ResultCard({
  card, lang, t, onRetry, onShare,
}: {
  card: TarotCard; lang: Lang; t: typeof tr.ko;
  onRetry: () => void; onShare: () => void;
}) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 50); }, []);

  return (
    <div
      className="transition-all duration-700"
      style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(28px)' }}
    >
      {/* 타로카드 */}
      <div className="flex justify-center mb-7">
        <div
          className="relative flex flex-col overflow-hidden"
          style={{
            width: 180,
            height: 300,
            background: 'linear-gradient(160deg, #1a0840 0%, #0e0520 100%)',
            border: `2px solid ${card.color}80`,
            borderRadius: 16,
            boxShadow: `0 0 50px ${card.color}35, 0 20px 60px rgba(0,0,0,0.6)`,
          }}
        >
          {/* 외부 내부 이중 테두리 */}
          <div className="absolute inset-[6px] rounded-[10px] pointer-events-none" style={{ border: `1px solid ${card.color}35` }} />

          {/* 상단: 로마 숫자 */}
          <div className="flex items-center justify-center pt-4 pb-2 relative z-10">
            <div className="flex items-center gap-2">
              <div style={{ width: 20, height: 1, background: `${card.color}50` }} />
              <span style={{ color: card.color, fontSize: '0.75rem', fontWeight: 900, letterSpacing: '0.12em' }}>
                {ROMAN[card.id]}
              </span>
              <div style={{ width: 20, height: 1, background: `${card.color}50` }} />
            </div>
          </div>

          {/* 중앙 일러스트 영역 */}
          <div
            className="flex-1 mx-3 relative overflow-hidden"
            style={{
              border: `1px solid ${card.color}25`,
              borderRadius: 8,
              boxShadow: `inset 0 0 20px ${card.color}10`,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={card.image}
              alt={card.name.en}
              className="w-full h-full object-cover object-top"
              style={{ filter: `drop-shadow(0 0 8px ${card.color}40)` }}
            />
            {/* 키워드 오버레이 */}
            <div className="absolute bottom-2 left-0 right-0 flex justify-center">
              <div className="px-3 py-1 rounded-full" style={{
                background: `rgba(10,5,25,0.85)`,
                border: `1px solid ${card.color}50`,
                backdropFilter: 'blur(4px)',
              }}>
                <span style={{ color: `${card.color}ee`, fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.08em' }}>
                  {card.keyword[lang].toUpperCase()}
                </span>
              </div>
            </div>
          </div>

          {/* 하단: 카드 이름 배너 */}
          <div
            className="flex items-center justify-center py-3 mx-3 mb-3 mt-2 rounded-lg"
            style={{
              background: `linear-gradient(135deg, ${card.color}25, ${card.color}10)`,
              border: `1px solid ${card.color}35`,
            }}
          >
            <span style={{ color: card.color, fontSize: '0.7rem', fontWeight: 900, letterSpacing: '0.1em', textAlign: 'center' }}>
              {card.name[lang].toUpperCase()}
            </span>
          </div>
        </div>
      </div>

      {/* 메시지 박스 */}
      <div
        className="rounded-3xl p-[1.5px] mb-4"
        style={{ background: `linear-gradient(135deg, ${card.color}70, ${card.color}20, ${card.color}50)` }}
      >
        <div className="rounded-3xl p-6 space-y-4" style={{ background: 'linear-gradient(160deg, #100828 0%, #0e0520 100%)' }}>
          <div className="text-center">
            <div className="text-white/30 text-xs tracking-widest uppercase mb-1">{t.messageLabel}</div>
            <p className="text-white/80 text-sm leading-relaxed">{card.message[lang]}</p>
          </div>
        </div>
      </div>

      {/* 버튼 */}
      <div className="flex gap-3">
        <button
          onClick={onRetry}
          className="flex-1 py-3.5 rounded-2xl text-sm font-bold transition-all"
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            color: 'rgba(255,255,255,0.5)',
          }}
        >
          {t.retryBtn}
        </button>
        <button
          onClick={onShare}
          className="flex-1 py-3.5 rounded-2xl text-sm font-bold transition-all text-white"
          style={{
            background: `linear-gradient(135deg, ${card.color}60, ${card.color}30)`,
            border: `1px solid ${card.color}50`,
          }}
        >
          {t.shareBtn} ✨
        </button>
      </div>
    </div>
  );
}
