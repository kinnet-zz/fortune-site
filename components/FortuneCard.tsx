'use client';

import { useState, useEffect, useRef } from 'react';
import { trackEvent } from '@/lib/analytics';
import { type Lang, t } from '@/lib/i18n';
import { encodeSharedResult } from '@/lib/sharedFortune';
import ConstellationIcon, { CONSTELLATIONS, zodiacSlugFromName } from '@/components/Constellation';

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
}

interface SectionProps {
  index: string;
  title: string;
  content: string;
  color: string;
  delay: number;
}

function FortuneSection({ index, title, content, color, delay }: SectionProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`relative border-t border-[rgba(226,205,162,0.16)] pt-5 transition-all duration-700 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
      }`}
    >
      <div className="mb-2 flex items-baseline gap-3">
        <span className="font-display text-[0.72rem] italic tracking-[0.18em]" style={{ color }}>
          {index}
        </span>
        <h3 className="text-[0.62rem] font-semibold uppercase tracking-[0.28em]" style={{ color }}>
          {title}
        </h3>
      </div>
      <p className="text-[0.88rem] leading-7 text-[rgba(247,240,225,0.78)] text-keep-all">{content}</p>
    </div>
  );
}

function ScoreRing({ score }: { score: number }) {
  const [animated, setAnimated] = useState(false);
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.max(0, Math.min(100, score));
  const offset = circumference - (clamped / 100) * circumference;

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 260);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-[6.4rem] w-[6.4rem] flex-shrink-0">
      <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90" aria-hidden="true">
        <defs>
          <linearGradient id="scoreGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fdf3d5" />
            <stop offset="45%" stopColor="#ecd193" />
            <stop offset="100%" stopColor="#a9803f" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r={radius} fill="none" stroke="rgba(226,205,162,0.18)" strokeWidth="3" />
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="url(#scoreGold)"
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={animated ? offset : circumference}
          style={{ transition: 'stroke-dashoffset 1.5s cubic-bezier(0.22,1,0.36,1)', filter: 'drop-shadow(0 0 6px rgba(226,205,162,0.35))' }}
        />
        <circle cx="50" cy="50" r="31" fill="none" stroke="rgba(226,205,162,0.25)" strokeWidth="0.6" strokeDasharray="1 5" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display text-[1.85rem] font-semibold leading-none text-[#f7f0e1]">{clamped}</span>
        <span className="mt-1 text-[0.55rem] uppercase tracking-[0.22em] text-[rgba(247,240,225,0.42)]">/ 100</span>
      </div>
    </div>
  );
}

export default function FortuneCard({ fortune, onReset, lang }: FortuneCardProps) {
  const [copied, setCopied] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  const [imageSharing, setImageSharing] = useState(false);
  const [imageSaved, setImageSaved] = useState(false);
  const [readingDate, setReadingDate] = useState('');
  const cardRef = useRef<HTMLDivElement>(null);
  const preBlobRef = useRef<Blob | null>(null);
  const [cardVisible, setCardVisible] = useState(false);
  const tr = t(lang);

  useEffect(() => {
    const timer = setTimeout(() => setCardVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const locale = lang === 'ko' ? 'ko-KR' : lang === 'ja' ? 'ja-JP' : lang === 'zh' ? 'zh-CN' : 'en-US';
    setReadingDate(new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date()));
  }, [lang]);

  // iOS Safari 대응: 카드 렌더 후 미리 이미지 생성 (클릭 시 즉시 share 호출 위해)
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (!cardRef.current) return;
      try {
        const html2canvas = (await import('html2canvas')).default;
        const canvas = await html2canvas(cardRef.current, {
          backgroundColor: '#080a16',
          scale: 2,
          useCORS: true,
          allowTaint: true,
          logging: false,
          imageTimeout: 0,
        });
        canvas.toBlob((blob) => { preBlobRef.current = blob; }, 'image/png');
      } catch {
        // 조용히 실패 — 클릭 시 다시 생성
      }
    }, 1500); // 애니메이션 완료 후 생성
    return () => clearTimeout(timer);
  }, []);

  const shareParams = new URLSearchParams({ r: encodeSharedResult(fortune) });
  if (lang !== 'ko') shareParams.set('lang', lang);
  const shareUrl = `https://starfate.day/?${shareParams.toString()}`;

  const handleShare = async () => {
    const text = `🔮 ${tr.resultHeader} (${fortune.zodiacSign} / ${fortune.chineseZodiac})\n\n` +
      `⭐ ${tr.scoreLabel}: ${fortune.score}/100\n\n` +
      `✨ ${tr.overall}: ${fortune.overall}\n` +
      `💕 ${tr.love}: ${fortune.love}\n` +
      `💰 ${tr.money}: ${fortune.money}\n` +
      `💼 ${tr.work}: ${fortune.work}\n\n` +
      `🍀 ${tr.luckyColorLabel}: ${fortune.luckyColor}\n` +
      `🔢 ${tr.luckyNumberLabel}: ${fortune.luckyNumber}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: tr.resultHeader,
          text,
          url: shareUrl,
        });
        trackEvent('fortune_share', { method: 'native_text', language: lang });
        return;
      } catch (err) {
        if ((err as Error).name === 'AbortError') return;
        // share 실패 시 클립보드로 폴백
      }
    }

    if (!navigator.clipboard) return;
    await navigator.clipboard.writeText(`${text}\n${shareUrl}`);
    trackEvent('fortune_share', { method: 'clipboard_text', language: lang });
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleLinkCopy = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: tr.resultHeader,
          url: shareUrl,
        });
        trackEvent('fortune_share', { method: 'native_link', language: lang });
        return;
      } catch (err) {
        if ((err as Error).name === 'AbortError') return;
      }
    }

    if (!navigator.clipboard) return;
    await navigator.clipboard.writeText(shareUrl);
    trackEvent('fortune_share', { method: 'clipboard_link', language: lang });
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2500);
  };

  const handleImageShare = async () => {
    if (!cardRef.current) return;
    setImageSharing(true);
    try {
      // 미리 생성된 blob 사용 (iOS Safari user activation 만료 방지)
      let blob = preBlobRef.current;

      if (!blob) {
        const html2canvas = (await import('html2canvas')).default;
        const canvas = await html2canvas(cardRef.current, {
          backgroundColor: '#080a16',
          scale: 2,
          useCORS: true,
          allowTaint: true,
          logging: false,
          imageTimeout: 0,
        });
        blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/png'));
      }

      if (!blob) throw new Error('blob is null');

      const file = new File([blob], 'fortune.png', { type: 'image/png' });

      // 1순위: 이미지 파일 첨부 공유 (Android Chrome, iOS Safari 15+)
      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: tr.resultHeader,
          url: shareUrl,
        });
        trackEvent('fortune_share', { method: 'native_image', language: lang });
        setImageSaved(true);
        setTimeout(() => setImageSaved(false), 3500);
        return;
      }

      // 2순위: 파일 공유 미지원이지만 Web Share API는 있는 경우 → 이미지 다운로드 + 공유 시트 오픈
      if (navigator.share) {
        const objectUrl = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = objectUrl;
        a.download = 'fortune.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(objectUrl);

        await navigator.share({
          title: tr.resultHeader,
          text: tr.imageShareText,
          url: shareUrl,
        });
        trackEvent('fortune_share', { method: 'download_and_native', language: lang });
        setImageSaved(true);
        setTimeout(() => setImageSaved(false), 3500);
        return;
      }

      // 3순위: PC/미지원 → 다운로드만
      const objectUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = objectUrl;
      a.download = 'fortune.png';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(objectUrl);

      trackEvent('fortune_share', { method: 'image_download', language: lang });
      setImageSaved(true);
      setTimeout(() => setImageSaved(false), 3500);
    } catch (err) {
      if ((err as Error).name === 'AbortError') return;
      alert('이미지 생성에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setImageSharing(false);
    }
  };

  const scoreLevel = tr.scoreLevel(fortune.score);
  const slug = zodiacSlugFromName(fortune.zodiacSign);
  const englishName = slug ? CONSTELLATIONS[slug].en : '';

  return (
    <div
      className={`mx-auto w-full max-w-xl transition-all duration-700 ${
        cardVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
    >
      {/* 메인 카드 */}
      <div
        ref={cardRef}
        className="relative rounded-[0.5rem] p-[1px]"
        style={{
          background:
            'linear-gradient(150deg, rgba(169,128,63,0.7) 0%, rgba(169,128,63,0.25) 45%, rgba(17,23,48,0.35) 100%)',
          boxShadow: '0 36px 80px -44px rgba(20,23,43,0.5)',
        }}
      >
        <div
          className="relative overflow-hidden rounded-[0.46rem]"
          style={{
            background:
              'linear-gradient(170deg, #161d3d 0%, #111730 42%, #0f1529 100%)',
          }}
        >
          {/* 상단 헤더 */}
          <div className="relative overflow-hidden px-6 pb-6 pt-7 sm:px-8">
            <div className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full border border-[rgba(226,205,162,0.18)]" aria-hidden="true" />
            <div className="pointer-events-none absolute -right-8 -top-8 text-[rgba(226,205,162,0.14)]" aria-hidden="true">
              <span className="font-display text-7xl italic">✦</span>
            </div>

            <div className="flex items-center justify-between gap-3">
              <span className="text-[0.58rem] font-semibold uppercase tracking-[0.32em] text-[rgba(226,205,162,0.78)]">
                {tr.resultHeader}
              </span>
              <span className="text-[0.64rem] tracking-[0.16em] text-[rgba(247,240,225,0.55)]">{readingDate}</span>
            </div>

            <div className="mt-5 flex items-center justify-between gap-4">
              <div className="min-w-0">
                <div className="mb-2 text-[rgba(226,205,162,0.9)]">
                  <ConstellationIcon slug={slug} size={62} strokeWidth={1.1} animated />
                </div>
                <h2 className="font-display text-[1.8rem] font-semibold leading-tight text-[#f7f0e1] text-keep-all">
                  {fortune.zodiacSign}
                </h2>
                {englishName && (
                  <p className="mt-1 text-[0.62rem] uppercase tracking-[0.3em] text-[rgba(226,205,162,0.6)]">
                    {englishName}
                  </p>
                )}
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="chip-dark text-[0.68rem]">{fortune.chineseZodiac}</span>
                  <span className="chip-dark text-[0.68rem]">{scoreLevel}</span>
                </div>
              </div>
              <ScoreRing score={fortune.score} />
            </div>
          </div>

          {/* 운세 섹션들 */}
          <div className="space-y-5 px-6 pb-6 pt-2 sm:px-8">
            <FortuneSection index="01" title={tr.overall} content={fortune.overall} color="#f0d79d" delay={220} />
            <FortuneSection index="02" title={tr.love} content={fortune.love} color="#e8b3c4" delay={340} />
            <FortuneSection index="03" title={tr.money} content={fortune.money} color="#a9cfb5" delay={460} />
            <FortuneSection index="04" title={tr.work} content={fortune.work} color="#a9b8e8" delay={580} />
          </div>

          {/* 행운 정보 */}
          <div className="px-6 pb-6 sm:px-8">
            <div className="rounded-2xl border border-[rgba(226,205,162,0.22)] bg-[rgba(226,205,162,0.05)] px-5 py-5">
              <p className="mb-4 text-center text-[0.58rem] font-semibold uppercase tracking-[0.3em] text-[rgba(226,205,162,0.7)]">
                {tr.luckyItemLabel}
              </p>
              <div className="flex items-center justify-center gap-8">
                <div className="text-center">
                  <div
                    className="mx-auto mb-2.5 h-11 w-11 rounded-full ring-1 ring-[rgba(226,205,162,0.55)]"
                    style={{
                      background: getLuckyColorHex(fortune.luckyColor),
                      boxShadow: `0 0 24px ${getLuckyColorHex(fortune.luckyColor)}66, inset 0 0 12px rgba(0,0,0,0.28)`,
                    }}
                  />
                  <p className="mb-1 text-[0.58rem] uppercase tracking-[0.18em] text-[rgba(247,240,225,0.42)]">{tr.luckyColorLabel}</p>
                  <p className="text-[0.82rem] font-semibold text-[#f7f0e1]">{fortune.luckyColor}</p>
                </div>

                <div className="h-14 w-px bg-[rgba(226,205,162,0.22)]" />

                <div className="text-center">
                  <div className="mx-auto mb-2.5 flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(226,205,162,0.5)] bg-[linear-gradient(140deg,#e8d3a6,#c3a165)]">
                    <span className="font-display text-lg font-bold text-[#1a1408]">{fortune.luckyNumber}</span>
                  </div>
                  <p className="mb-1 text-[0.58rem] uppercase tracking-[0.18em] text-[rgba(247,240,225,0.42)]">{tr.luckyNumberLabel}</p>
                  <p className="text-[0.82rem] font-semibold text-[#f7f0e1]">{fortune.luckyNumber}</p>
                </div>
              </div>
            </div>
          </div>

          {/* 버튼 영역 */}
          <div className="space-y-2.5 px-6 pb-8 sm:px-8">
            <div className="flex flex-col gap-2.5 sm:flex-row">
              <button
                onClick={handleImageShare}
                disabled={imageSharing}
                className="btn-gold-warm flex-1 text-[0.86rem]"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span aria-hidden="true">{imageSharing ? '◌' : imageSaved ? '✓' : '↓'}</span>
                  <span>{imageSharing ? tr.imageSharing : imageSaved ? tr.imageSaved : tr.imageShareBtn}</span>
                </span>
              </button>

              <button onClick={onReset} className="btn-ghost-light flex-1 text-[0.86rem]">
                <span aria-hidden="true">↺</span>
                <span>{tr.resetBtn}</span>
              </button>
            </div>

            <div className="flex gap-2.5">
              <button
                onClick={handleShare}
                className="flex-1 rounded-full border px-3 py-2.5 text-[0.78rem] font-medium transition-colors"
                style={{
                  background: copied ? 'rgba(52,211,153,0.12)' : 'rgba(20,23,43,0.025)',
                  borderColor: copied ? 'rgba(52,211,153,0.45)' : 'rgba(226,205,162,0.32)',
                  color: copied ? '#a7f3d0' : 'rgba(247,240,225,0.72)',
                }}
              >
                {copied ? `✓ ${tr.copied}` : `↗ ${tr.shareBtn}`}
              </button>
              <button
                onClick={handleLinkCopy}
                className="flex-1 rounded-full border px-3 py-2.5 text-[0.78rem] font-medium transition-colors"
                style={{
                  background: linkCopied ? 'rgba(217,184,119,0.14)' : 'rgba(20,23,43,0.025)',
                  borderColor: linkCopied ? 'rgba(226,205,162,0.55)' : 'rgba(226,205,162,0.32)',
                  color: linkCopied ? '#e2cda2' : 'rgba(247,240,225,0.72)',
                }}
              >
                {linkCopied ? `✓ ${tr.linkCopied}` : `⌘ ${tr.linkCopyBtn}`}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 면책 조항 — AdSense 정책 준수 */}
      <div className="mt-6 space-y-1.5 text-center">
        <p className="text-[0.7rem] text-[rgba(20,23,43,0.42)]">{tr.disclaimer}</p>
        <p className="mx-auto max-w-sm rounded-xl border border border-[rgba(20,23,43,0.1)] bg-[#14172b]/[0.035]0 px-4 py-2 text-[0.7rem] leading-5 text-[rgba(20,23,43,0.5)]">
          ⚠️ 본 운세는 오락·자기성찰 목적의 콘텐츠입니다. 실제 미래를 예측하지 않으며, 중요한 의사결정의 근거로 사용하지 마세요.
        </p>
      </div>
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
    'purple': '#a855f7', 'violet': '#8b5cf6', 'lavender': '#6f5223',
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
    '紫色': '#a855f7', '紫': '#a855f7', '薰衣草色': '#6f5223',
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
    'ラベンダー': '#6f5223',
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
