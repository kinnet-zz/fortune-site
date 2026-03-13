'use client';

import { useState, useEffect } from 'react';
import { useLang } from '@/lib/useLang';
import { TAROT_CARDS, type TarotCard } from '@/lib/tarot-data';

type Lang = 'ko' | 'en' | 'zh' | 'ja';

const tr = {
  ko: {
    pageTitle: '오늘의 카드',
    pageSubtitle: '마음을 비우고 한 장을 선택하세요',
    instruction: '카드 위에 손을 올리고 마음이 이끄는 대로 선택하세요',
    resultTitle: '오늘 당신의 카드',
    keywordLabel: '키워드',
    messageLabel: '오늘의 메시지',
    retryBtn: '다시 뽑기',
    shareBtn: '공유하기',
    shareText: (name: string, keyword: string) =>
      `오늘 나의 타로 카드는 「${name}」— ${keyword}\n당신의 오늘을 알아보세요 👉 https://www.starfate.day/card-draw`,
    footerText: '✦ 오락 목적의 콘텐츠입니다 ✦',
    cardBack: '카드를 선택하세요',
  },
  en: {
    pageTitle: "Today's Card",
    pageSubtitle: 'Clear your mind and choose one card',
    instruction: 'Hover over the cards and let your heart guide you',
    resultTitle: 'Your Card for Today',
    keywordLabel: 'Keyword',
    messageLabel: "Today's Message",
    retryBtn: 'Draw Again',
    shareBtn: 'Share',
    shareText: (name: string, keyword: string) =>
      `My tarot card today is "${name}" — ${keyword}\nDiscover yours 👉 https://www.starfate.day/card-draw?lang=en`,
    footerText: '✦ For entertainment purposes only ✦',
    cardBack: 'Choose a card',
  },
  zh: {
    pageTitle: '今日牌卡',
    pageSubtitle: '清空思绪，选择一张牌',
    instruction: '将手悬于牌上，跟随内心的指引',
    resultTitle: '你今日的牌卡',
    keywordLabel: '关键词',
    messageLabel: '今日讯息',
    retryBtn: '重新抽牌',
    shareBtn: '分享',
    shareText: (name: string, keyword: string) =>
      `我今日的塔罗牌是「${name}」— ${keyword}\n快来查看你的牌 👉 https://www.starfate.day/card-draw?lang=zh`,
    footerText: '✦ 仅供娱乐目的 ✦',
    cardBack: '请选择牌卡',
  },
  ja: {
    pageTitle: '今日のカード',
    pageSubtitle: '心を空にして一枚を選んでください',
    instruction: 'カードに手をかざし、心が導くままに選んでください',
    resultTitle: '今日あなたのカード',
    keywordLabel: 'キーワード',
    messageLabel: '今日のメッセージ',
    retryBtn: 'もう一度引く',
    shareBtn: 'シェアする',
    shareText: (name: string, keyword: string) =>
      `今日の私のタロットカードは「${name}」— ${keyword}\nあなたも調べてみよう 👉 https://www.starfate.day/card-draw?lang=ja`,
    footerText: '✦ エンタメ目的のコンテンツです ✦',
    cardBack: 'カードを選んでください',
  },
};

// 카드 스프레드에 표시할 인덱스들을 셔플해서 고정
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

  useEffect(() => {
    setSpreadIndices(getSpreadIndices());
  }, []);

  const handleSelect = (cardIndex: number) => {
    if (selectedCard) return;
    const card = TAROT_CARDS[cardIndex];
    setSelectedCard(card);
    // 0.1s 후 플립 시작
    setTimeout(() => setFlipped(true), 100);
    // 0.7s 후 결과 표시
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
    if (navigator.share) {
      navigator.share({ text }).catch(() => {});
    } else {
      navigator.clipboard.writeText(text).catch(() => {});
    }
  };

  const l = lang as Lang;

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #0d0118 0%, #150a2e 50%, #0d0118 100%)' }}>

      {/* 히어로 */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(99,102,241,0.2) 0%, transparent 70%)',
        }} />
        <div className="relative z-10 max-w-md mx-auto px-4 pt-12 pb-6 text-center">
          <div className="text-6xl mb-4">🃏</div>
          <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-3">
            {t.pageTitle}
          </h1>
          <p className="text-white/40 text-sm max-w-xs mx-auto">{t.pageSubtitle}</p>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 pb-20">

        {/* 카드 스프레드 — 결과 나오기 전 */}
        {!revealed && spreadIndices.length > 0 && (
          <div className="mb-8">
            <p className="text-center text-purple-300/50 text-xs mb-6 tracking-widest uppercase">
              {t.instruction}
            </p>

            {/* 7장 카드 그리드 */}
            <div className="grid grid-cols-4 gap-3 mb-4">
              {spreadIndices.slice(0, 4).map((cardIdx, i) => (
                <CardBack
                  key={i}
                  isSelected={selectedCard !== null && TAROT_CARDS[cardIdx] === selectedCard}
                  isHovered={hoveredIdx === i}
                  isFlipped={selectedCard !== null && TAROT_CARDS[cardIdx] === selectedCard && flipped}
                  card={TAROT_CARDS[cardIdx]}
                  disabled={selectedCard !== null}
                  onHover={() => setHoveredIdx(i)}
                  onLeave={() => setHoveredIdx(null)}
                  onSelect={() => handleSelect(cardIdx)}
                />
              ))}
            </div>
            <div className="grid grid-cols-3 gap-3 px-6">
              {spreadIndices.slice(4, 7).map((cardIdx, i) => (
                <CardBack
                  key={i + 4}
                  isSelected={selectedCard !== null && TAROT_CARDS[cardIdx] === selectedCard}
                  isHovered={hoveredIdx === i + 4}
                  isFlipped={selectedCard !== null && TAROT_CARDS[cardIdx] === selectedCard && flipped}
                  card={TAROT_CARDS[cardIdx]}
                  disabled={selectedCard !== null}
                  onHover={() => setHoveredIdx(i + 4)}
                  onLeave={() => setHoveredIdx(null)}
                  onSelect={() => handleSelect(cardIdx)}
                />
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

        <p className="text-center text-white/20 text-xs mt-8">{t.footerText}</p>
      </div>
    </div>
  );
}

function CardBack({
  isSelected, isHovered, isFlipped, card, disabled,
  onHover, onLeave, onSelect,
}: {
  isSelected: boolean;
  isHovered: boolean;
  isFlipped: boolean;
  card: TarotCard;
  disabled: boolean;
  onHover: () => void;
  onLeave: () => void;
  onSelect: () => void;
}) {
  return (
    <div
      className="relative cursor-pointer select-none"
      style={{ perspective: '600px', aspectRatio: '2/3' }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={disabled ? undefined : onSelect}
    >
      <div
        className="w-full h-full transition-transform duration-500"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : isHovered && !disabled ? 'rotateY(-10deg) translateY(-6px)' : 'rotateY(0deg)',
        }}
      >
        {/* 카드 뒷면 */}
        <div
          className="absolute inset-0 rounded-xl flex items-center justify-center overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            background: 'linear-gradient(135deg, #1e0a4e 0%, #2d1060 50%, #1a0840 100%)',
            border: isHovered && !disabled ? `1.5px solid ${card.color}80` : '1.5px solid rgba(139,92,246,0.3)',
            boxShadow: isHovered && !disabled
              ? `0 8px 30px ${card.color}40, 0 0 0 1px ${card.color}30`
              : '0 4px 15px rgba(0,0,0,0.4)',
          }}
        >
          {/* 카드 뒷면 패턴 */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, rgba(139,92,246,0.3) 0px, rgba(139,92,246,0.3) 1px, transparent 1px, transparent 8px)',
          }} />
          <div className="relative z-10 text-2xl opacity-60">✦</div>
        </div>

        {/* 카드 앞면 (플립 후) */}
        <div
          className="absolute inset-0 rounded-xl flex flex-col items-center justify-center p-2 overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: `linear-gradient(135deg, ${card.color}22 0%, ${card.color}11 100%)`,
            border: `1.5px solid ${card.color}60`,
          }}
        >
          <div className="text-3xl">{card.emoji}</div>
        </div>
      </div>
    </div>
  );
}

function ResultCard({
  card, lang, t, onRetry, onShare,
}: {
  card: TarotCard;
  lang: Lang;
  t: typeof tr.ko;
  onRetry: () => void;
  onShare: () => void;
}) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 50); }, []);

  return (
    <div
      className="transition-all duration-700"
      style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)' }}
    >
      {/* 큰 카드 표시 */}
      <div className="flex justify-center mb-6">
        <div
          className="relative rounded-2xl overflow-hidden flex flex-col items-center justify-center"
          style={{
            width: 160,
            height: 240,
            background: `linear-gradient(160deg, ${card.color}30 0%, ${card.color}10 100%)`,
            border: `2px solid ${card.color}80`,
            boxShadow: `0 0 40px ${card.color}40`,
          }}
        >
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `radial-gradient(circle at 50% 30%, ${card.color} 0%, transparent 60%)`,
          }} />
          <div className="relative z-10 text-7xl mb-3" style={{ filter: `drop-shadow(0 0 16px ${card.color}80)` }}>
            {card.emoji}
          </div>
          <div className="relative z-10 text-xs font-black tracking-widest uppercase px-3 text-center"
            style={{ color: card.color }}>
            {card.name[lang]}
          </div>
        </div>
      </div>

      {/* 결과 내용 */}
      <div
        className="rounded-3xl p-[1.5px]"
        style={{ background: `linear-gradient(135deg, ${card.color}60, ${card.color}20, ${card.color}40)` }}
      >
        <div
          className="rounded-3xl p-6 space-y-4"
          style={{ background: 'linear-gradient(160deg, #100828 0%, #0e0520 100%)' }}
        >
          <div className="text-center">
            <div className="text-white/40 text-xs tracking-widest uppercase mb-1">{t.resultTitle}</div>
            <h2 className="text-2xl font-black" style={{ color: card.color }}>
              {card.name[lang]}
            </h2>
          </div>

          {/* 키워드 뱃지 */}
          <div className="flex justify-center">
            <span
              className="px-4 py-1.5 rounded-full text-sm font-bold"
              style={{
                background: `${card.color}20`,
                border: `1px solid ${card.color}50`,
                color: card.color,
              }}
            >
              {t.keywordLabel} · {card.keyword[lang]}
            </span>
          </div>

          {/* 구분선 */}
          <div style={{ height: 1, background: `linear-gradient(90deg, transparent, ${card.color}30, transparent)` }} />

          {/* 메시지 */}
          <div>
            <div className="text-white/40 text-xs tracking-widest uppercase mb-2 text-center">{t.messageLabel}</div>
            <p className="text-white/80 text-sm leading-relaxed text-center">
              {card.message[lang]}
            </p>
          </div>

          {/* 버튼 */}
          <div className="flex gap-3 pt-2">
            <button
              onClick={onRetry}
              className="flex-1 py-3 rounded-2xl text-sm font-bold transition-all"
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
              className="flex-1 py-3 rounded-2xl text-sm font-bold transition-all"
              style={{
                background: `linear-gradient(135deg, ${card.color}50, ${card.color}30)`,
                border: `1px solid ${card.color}50`,
                color: '#fff',
              }}
            >
              {t.shareBtn} ✨
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
