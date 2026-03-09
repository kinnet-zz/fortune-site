'use client';

import { useEffect, useRef, useState } from 'react';
import { tIdol, AGENCY_COLORS, type IdolLang, type Agency } from '@/lib/idol-i18n';

interface IdolAnalysisResult {
  topAgency: Agency;
  scores: Record<Agency, number>;
  summary: string;
  features: {
    eyes: string;
    nose: string;
    lips: string;
    overall: string;
  };
  similarIdol: string;
}

interface IdolResultCardProps {
  result: IdolAnalysisResult;
  preview: string;
  lang: IdolLang;
  onRetry: () => void;
}

const AGENCIES: Agency[] = ['SM', 'JYP', 'YG', 'HYBE'];

function AgencyBar({ agency, score, isTop, animated }: {
  agency: Agency;
  score: number;
  isTop: boolean;
  animated: boolean;
}) {
  const colors = AGENCY_COLORS[agency];
  const pct = Math.round((score / 200) * 100);

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {isTop && <span className="text-yellow-400 text-sm">👑</span>}
          <span
            className="text-sm font-bold"
            style={{ color: isTop ? colors.text : 'rgba(255,255,255,0.5)' }}
          >
            {agency}
          </span>
        </div>
        <span
          className="text-sm font-black"
          style={{ color: isTop ? colors.text : 'rgba(255,255,255,0.4)' }}
        >
          {pct}%
        </span>
      </div>
      <div className="h-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: animated ? `${pct}%` : '0%',
            background: isTop
              ? `linear-gradient(90deg, ${colors.primary}88, ${colors.primary})`
              : 'rgba(255,255,255,0.12)',
            boxShadow: isTop ? `0 0 8px ${colors.primary}60` : 'none',
          }}
        />
      </div>
    </div>
  );
}

export default function IdolResultCard({ result, preview, lang, onRetry }: IdolResultCardProps) {
  const [animated, setAnimated] = useState(false);
  const [sharing, setSharing] = useState(false);
  const [shared, setShared] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const preBlobRef = useRef<Blob | null>(null);
  const tr = tIdol(lang);
  const topColors = AGENCY_COLORS[result.topAgency];

  const shareUrl = lang === 'ko'
    ? 'https://www.starfate.day/idol'
    : 'https://www.starfate.day/idol?lang=en';

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 300);
    return () => clearTimeout(t);
  }, []);

  // 미리 이미지 생성 (iOS Safari user activation 대응)
  useEffect(() => {
    const t = setTimeout(async () => {
      if (!cardRef.current) return;
      try {
        const html2canvas = (await import('html2canvas')).default;
        const canvas = await html2canvas(cardRef.current, {
          backgroundColor: '#0a0a2e',
          scale: 2,
          useCORS: true,
          allowTaint: true,
          logging: false,
        });
        canvas.toBlob((blob) => { preBlobRef.current = blob; }, 'image/png');
      } catch { /* silent */ }
    }, 1500);
    return () => clearTimeout(t);
  }, []);

  const handleShare = async () => {
    setSharing(true);
    try {
      let blob = preBlobRef.current;
      if (!blob && cardRef.current) {
        const html2canvas = (await import('html2canvas')).default;
        const canvas = await html2canvas(cardRef.current, {
          backgroundColor: '#0a0a2e',
          scale: 2,
          useCORS: true,
          allowTaint: true,
          logging: false,
        });
        blob = await new Promise<Blob | null>((res) => canvas.toBlob(res, 'image/png'));
      }
      if (!blob) throw new Error('blob null');

      const file = new File([blob], 'idol-result.png', { type: 'image/png' });

      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({ files: [file], title: tr.pageTitle, url: shareUrl });
      } else if (navigator.share) {
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'idol-result.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        await navigator.share({ title: tr.pageTitle, url: shareUrl });
      } else {
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'idol-result.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
      setShared(true);
      setTimeout(() => setShared(false), 3000);
    } catch (err) {
      if ((err as Error).name === 'AbortError') return;
    } finally {
      setSharing(false);
    }
  };

  const sortedAgencies = [...AGENCIES].sort((a, b) => result.scores[b] - result.scores[a]);

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      {/* 결과 카드 (공유용) */}
      <div
        ref={cardRef}
        className="rounded-3xl overflow-hidden"
        style={{
          background: 'linear-gradient(160deg, rgba(10,10,46,0.98) 0%, rgba(20,10,60,0.98) 100%)',
          border: `1px solid ${topColors.border}`,
          boxShadow: `0 0 40px ${topColors.primary}30, 0 20px 40px rgba(0,0,0,0.5)`,
        }}
      >
        {/* 상단 헤더 */}
        <div
          className="px-6 py-5 text-center relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${topColors.bg}, rgba(255,255,255,0.02))`,
            borderBottom: `1px solid ${topColors.border}`,
          }}
        >
          <p className="text-white/40 text-xs tracking-widest uppercase mb-2">
            {tr.resultTitle}
          </p>
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-2"
            style={{ background: topColors.bg, border: `1px solid ${topColors.border}` }}
          >
            <span className="text-2xl font-black" style={{ color: topColors.text }}>
              {result.topAgency}
            </span>
            <span className="text-white/50 text-sm font-medium">Entertainment</span>
          </div>
          <p className="text-white/50 text-xs">{tr.agencyDesc[result.topAgency]}</p>
        </div>

        {/* 사진 + 점수 */}
        <div className="px-6 py-5 flex gap-4">
          {/* 사진 */}
          <div className="flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={preview}
              alt="face"
              className="w-24 h-24 rounded-2xl object-cover"
              style={{ border: `2px solid ${topColors.border}` }}
            />
          </div>
          {/* 점수 바 */}
          <div className="flex-1 space-y-2.5">
            {sortedAgencies.map((agency) => (
              <AgencyBar
                key={agency}
                agency={agency}
                score={result.scores[agency]}
                isTop={agency === result.topAgency}
                animated={animated}
              />
            ))}
          </div>
        </div>

        {/* 종합 분석 */}
        <div
          className="mx-6 mb-4 rounded-2xl p-4"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <p className="text-white/30 text-xs tracking-widest uppercase mb-2">{tr.summaryLabel}</p>
          <p className="text-white/80 text-sm leading-relaxed">{result.summary}</p>
        </div>

        {/* 부위별 분석 */}
        <div className="mx-6 mb-4 space-y-2">
          <p className="text-white/30 text-xs tracking-widest uppercase">{tr.featuresLabel}</p>
          {[
            { label: tr.eyes, value: result.features.eyes, emoji: '👁️' },
            { label: tr.nose, value: result.features.nose, emoji: '👃' },
            { label: tr.lips, value: result.features.lips, emoji: '💋' },
            { label: tr.overall, value: result.features.overall, emoji: '✨' },
          ].map(({ label, value, emoji }) => (
            <div
              key={label}
              className="rounded-xl p-3 flex gap-2"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
            >
              <span className="text-base flex-shrink-0">{emoji}</span>
              <div>
                <span className="text-white/40 text-xs">{label} </span>
                <span className="text-white/70 text-xs leading-relaxed">{value}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 유사 스타일 */}
        <div
          className="mx-6 mb-5 rounded-xl px-4 py-3 flex items-center gap-3"
          style={{ background: topColors.bg, border: `1px solid ${topColors.border}` }}
        >
          <span className="text-lg">🌟</span>
          <div>
            <p className="text-white/40 text-xs mb-0.5">{tr.similarIdolLabel}</p>
            <p className="font-bold text-sm" style={{ color: topColors.text }}>{result.similarIdol}</p>
          </div>
        </div>

        {/* 워터마크 */}
        <div className="pb-4 text-center">
          <p className="text-white/15 text-xs">✦ starfate.day/idol ✦</p>
        </div>
      </div>

      {/* 버튼 */}
      <div className="flex gap-3">
        <button
          onClick={handleShare}
          disabled={sharing}
          className="flex-1 py-4 rounded-2xl font-bold text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
          style={{
            background: sharing ? 'rgba(255,255,255,0.04)' : `linear-gradient(135deg, ${topColors.primary}55, ${topColors.primary}33)`,
            border: `1px solid ${topColors.border}`,
            color: sharing ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.9)',
          }}
        >
          {sharing ? '⏳ 생성 중...' : shared ? '✅ 공유 완료!' : `📸 ${tr.shareBtn}`}
        </button>
        <button
          onClick={onRetry}
          className="flex-1 py-4 rounded-2xl font-bold text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.1)',
            color: 'rgba(255,255,255,0.6)',
          }}
        >
          🔄 {tr.retryBtn}
        </button>
      </div>

      <p className="text-center text-white/15 text-xs px-4">{tr.disclaimer}</p>
    </div>
  );
}
