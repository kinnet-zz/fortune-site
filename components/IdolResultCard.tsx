'use client';

import { useEffect, useRef, useState } from 'react';
import { tIdol, AGENCY_COLORS, type IdolLang, type Agency } from '@/lib/idol-i18n';

interface SubScore {
  faceShape: number;
  eyes: number;
  noseLips: number;
  vibe: number;
  similarity: number;
}

interface IdolAnalysisResult {
  topAgency: Agency;
  scores: Record<Agency, number>;
  subScores: Record<Agency, SubScore>;
  summary: string;
  features: { eyes: string; nose: string; lips: string; overall: string };
  similarIdol: string;
}

const AGENCIES: Agency[] = ['SM', 'JYP', 'YG', 'HYBE'];
const AGENCY_EMOJI: Record<Agency, string> = { SM: '💎', JYP: '🌟', YG: '🔥', HYBE: '✨' };

export default function IdolResultCard({
  result, preview, lang, onRetry,
}: {
  result: IdolAnalysisResult;
  preview: string;
  lang: IdolLang;
  onRetry: () => void;
}) {
  const [animated, setAnimated] = useState(false);
  const [sharing, setSharing] = useState(false);
  const [shared, setShared] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const preBlobRef = useRef<Blob | null>(null);
  const tr = tIdol(lang);
  const top = result.topAgency;
  const colors = AGENCY_COLORS[top];
  const shareUrl = lang === 'ko' ? 'https://starfate.day/idol' : `https://starfate.day/idol?lang=${lang}`;

  const sorted = [...AGENCIES].sort((a, b) => result.scores[b] - result.scores[a]);
  const topScore = result.scores[top]; // 0.0 ~ 100.0

  const debutComment = lang === 'ko'
    ? topScore >= 75
      ? '🌟 아이돌 데뷔해도 되겠어요! 오디션에 도전해보세요!'
      : topScore >= 60
        ? '✨ 이 외모라면 아이돌 오디션에 지원할 만해요!'
        : topScore >= 45
          ? '💫 개성 있는 매력으로 무대에 설 가능성이 있어요!'
          : '🎶 당신만의 독특한 스타일이 빛나는 외모예요!'
    : lang === 'zh'
      ? topScore >= 75
        ? '🌟 完全可以出道！快去参加偶像选秀吧！'
        : topScore >= 60
          ? '✨ 这样的颜值完全可以去参加偶像选秀！'
          : topScore >= 45
            ? '💫 独特的个人魅力让你有机会站上舞台！'
            : '🎶 你有着属于自己的独特明星风格！'
      : lang === 'ja'
        ? topScore >= 75
          ? '🌟 アイドルデビューできそう！オーディションに挑戦してみて！'
          : topScore >= 60
            ? '✨ このビジュアルなら、アイドルオーディションに応募する価値アリ！'
            : topScore >= 45
              ? '💫 個性的な魅力でステージに立てる可能性があります！'
              : '🎶 あなただけの独自のスタースタイルが光っています！'
        : topScore >= 75
          ? '🌟 Idol debut material! You should audition!'
          : topScore >= 60
            ? '✨ Your looks are worth submitting for an idol audition!'
            : topScore >= 45
              ? '💫 Your unique charm could shine on stage!'
              : '🎶 You have your own one-of-a-kind star style!';

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 200);
    return () => clearTimeout(t);
  }, []);

  // iOS Safari 대응: 미리 이미지 생성
  useEffect(() => {
    const t = setTimeout(async () => {
      if (!cardRef.current) return;
      try {
        const html2canvas = (await import('html2canvas')).default;
        const canvas = await html2canvas(cardRef.current, {
          backgroundColor: '#ffffff', scale: 2, useCORS: true, allowTaint: true, logging: false,
        });
        canvas.toBlob((b) => { preBlobRef.current = b; }, 'image/png');
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
          backgroundColor: '#ffffff', scale: 2, useCORS: true, allowTaint: true, logging: false,
        });
        blob = await new Promise<Blob | null>((r) => canvas.toBlob(r, 'image/png'));
      }
      if (!blob) throw new Error('blob null');
      const file = new File([blob], 'idol-result.png', { type: 'image/png' });

      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({ files: [file], title: tr.pageTitle, url: shareUrl });
      } else if (navigator.share) {
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'idol-result.png';
        a.click();
        await navigator.share({ title: tr.pageTitle, url: shareUrl });
      } else {
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'idol-result.png';
        a.click();
      }
      setShared(true);
      setTimeout(() => setShared(false), 3000);
    } catch (e) {
      if ((e as Error).name === 'AbortError') return;
    } finally {
      setSharing(false);
    }
  };

  return (
    <div className="w-full space-y-4">
      {/* ── 공유용 카드 ── */}
      <div
        ref={cardRef}
        className="rounded-3xl overflow-hidden"
        style={{ background: '#ffffff', border: `1px solid ${colors.border}` }}
      >
        {/* 상단 컬러 배너 */}
        <div
          className="relative px-6 pt-6 pb-5 text-center overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${colors.primary}22 0%, ${colors.primary}08 100%)` }}
        >
          {/* 대형 배경 텍스트 */}
          <div
            className="absolute inset-0 flex items-center justify-center text-[120px] font-black select-none pointer-events-none"
            style={{ color: `${colors.primary}06`, letterSpacing: '-0.05em' }}
          >
            {top}
          </div>

          <div className="relative z-10">
            <div className="text-4xl mb-2">{AGENCY_EMOJI[top]}</div>
            <div
              className="inline-block px-5 py-2 rounded-full font-black text-xl mb-2 tracking-tight"
              style={{ background: colors.bg, border: `1px solid ${colors.border}`, color: colors.text }}
            >
              {top} Entertainment
            </div>
            <p className="text-[#64748b] text-xs">{tr.agencyTagline[top]}</p>
          </div>
        </div>

        {/* 사진 + 바 */}
        <div className="px-5 py-4 flex gap-4 items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={preview}
            alt="face"
            className="w-20 h-20 rounded-2xl object-cover flex-shrink-0"
            style={{ border: `2px solid ${colors.border}` }}
          />
          <div className="flex-1 space-y-2">
            {sorted.map((agency) => {
              const score = result.scores[agency]; // 0.0 ~ 100.0
              const isTop = agency === top;
              return (
                <div key={agency}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-bold" style={{ color: isTop ? colors.text : '#64748b' }}>
                      {isTop && '👑 '}{agency}
                    </span>
                    <span style={{ color: isTop ? colors.text : '#94a3b8' }}>
                      {score.toFixed(1)}%
                    </span>
                  </div>
                  <div className="h-2 rounded-full" style={{ background: 'rgba(15,23,42,0.04)' }}>
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: animated ? `${score}%` : '0%',
                        background: isTop ? `linear-gradient(90deg, ${colors.primary}88, ${colors.primary})` : 'rgba(15,23,42,0.08)',
                        boxShadow: isTop ? `0 0 8px ${colors.primary}50` : 'none',
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 구분선 */}
        <div style={{ height: '1px', background: 'rgba(15,23,42,0.04)', margin: '0 20px' }} />

        {/* 종합 분析 + 데뷔 멘트 */}
        <div className="px-5 py-4">
          <p className="text-[#64748b] text-xs uppercase tracking-widest mb-2">{tr.summaryLabel}</p>
          <p className="text-[#334155] text-sm leading-relaxed mb-3">{result.summary}</p>
          <p className="text-sm font-black leading-relaxed" style={{ color: colors.text }}>
            {debutComment}
          </p>
        </div>

        {/* 구분선 */}
        <div style={{ height: '1px', background: 'rgba(15,23,42,0.04)', margin: '0 20px 16px' }} />

        {/* 부위별 */}
        <div className="px-5 pb-4 grid grid-cols-2 gap-2">
          {[
            { label: tr.eyes, val: result.features.eyes, e: '👁️' },
            { label: tr.nose, val: result.features.nose, e: '👃' },
            { label: tr.lips, val: result.features.lips, e: '💋' },
            { label: tr.overall, val: result.features.overall, e: '✨' },
          ].map(({ label, val, e }) => (
            <div key={label} className="rounded-xl p-3" style={{ background: 'rgba(15,23,42,0.03)', border: '1px solid rgba(15,23,42,0.04)' }}>
              <p className="text-[#64748b] text-xs mb-1">{e} {label}</p>
              <p className="text-[#475569] text-xs leading-relaxed">{val}</p>
            </div>
          ))}
        </div>

        {/* 유사 스타일 */}
        <div className="mx-5 mb-5 px-4 py-3 rounded-2xl flex items-center gap-3"
          style={{ background: colors.bg, border: `1px solid ${colors.border}` }}>
          <span className="text-xl">🌟</span>
          <div>
            <p className="text-[#64748b] text-xs mb-0.5">{tr.similarIdolLabel}</p>
            <p className="font-black text-sm" style={{ color: colors.text }}>{result.similarIdol}</p>
          </div>
        </div>

        {/* 워터마크 */}
        <p className="text-center text-[#64748b] text-xs pb-4">starfate.day/idol</p>
      </div>

      {/* ── 버튼 ── */}
      <div className="flex gap-3">
        <button
          onClick={handleShare}
          disabled={sharing}
          className="flex-1 rounded-full py-3.5 text-sm font-semibold transition-all hover:opacity-95 active:scale-[0.99] disabled:opacity-40"
          style={{ background: `linear-gradient(90deg, ${colors.primary}, ${colors.primary}bb)`, color: '#fff' }}
        >
          {sharing ? '⏳' : shared ? '✅' : '📸'} {sharing ? tr.analyzing : shared ? '공유 완료!' : tr.shareBtn}
        </button>
        <button
          onClick={onRetry}
          className="flex-1 rounded-full border border-[#e8eaef] bg-white py-3.5 text-sm font-semibold text-[#475569] transition-all hover:border-[#dcdfe6] hover:text-[#0f172a] active:scale-[0.99]"
          
        >
          🔄 {tr.retryBtn}
        </button>
      </div>

      <p className="text-center text-[#64748b] text-xs">{tr.disclaimer}</p>
    </div>
  );
}
