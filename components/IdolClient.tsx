'use client';

import { useState, useEffect, useRef } from 'react';
import { tIdol, AGENCY_COLORS, type IdolLang, type Agency } from '@/lib/idol-i18n';
import IdolUpload from './IdolUpload';
import IdolResultCard from './IdolResultCard';

interface IdolAnalysisResult {
  topAgency: Agency;
  scores: Record<Agency, number>;
  summary: string;
  features: { eyes: string; nose: string; lips: string; overall: string };
  similarIdol: string;
}

const AGENCIES: Agency[] = ['SM', 'JYP', 'YG', 'HYBE'];

const AGENCY_INFO = {
  SM:   { emoji: '💎', idol: 'aespa · EXO · SHINee' },
  JYP:  { emoji: '🌟', idol: 'TWICE · ITZY · Stray Kids' },
  YG:   { emoji: '🔥', idol: 'BLACKPINK · BIGBANG · WINNER' },
  HYBE: { emoji: '✨', idol: 'BTS · NewJeans · LE SSERAFIM' },
};

export default function IdolClient() {
  const [lang, setLang] = useState<IdolLang>('ko');
  const [image, setImage] = useState<{ base64: string; mimeType: string } | null>(null);
  const [preview, setPreview] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<IdolAnalysisResult | null>(null);
  const [error, setError] = useState('');
  const [loadingMsgIdx, setLoadingMsgIdx] = useState(0);
  const loadingRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const tr = tIdol(lang);

  useEffect(() => {
    const sync = () => {
      const p = new URLSearchParams(window.location.search);
      setLang(p.get('lang') === 'en' ? 'en' : 'ko');
    };
    sync();
    window.addEventListener('idol-lang-change', sync);
    return () => window.removeEventListener('idol-lang-change', sync);
  }, []);

  useEffect(() => {
    if (result && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [result]);

  const handleImageReady = (base64: string, mimeType: string, previewUrl: string) => {
    setImage({ base64, mimeType });
    setPreview(previewUrl);
    setResult(null);
    setError('');
  };

  const handleAnalyze = async () => {
    if (!image) return;
    setIsLoading(true);
    setError('');
    setResult(null);
    setLoadingMsgIdx(0);
    loadingRef.current = setInterval(() => {
      setLoadingMsgIdx((i) => (i + 1) % tr.analyzingMessages.length);
    }, 1800);

    try {
      const res = await fetch('/api/idol', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: image.base64, mimeType: image.mimeType, lang }),
      });
      const data = await res.json();
      if (!res.ok) {
        if (res.status === 429 || data.error === 'QUOTA_EXCEEDED') {
          setError(tr.quotaMsg);
        } else {
          setError(`[DEBUG] ${data.error || res.status}`);
        }
        return;
      }
      setResult(data);
    } catch (e) {
      setError(`[DEBUG-CATCH] ${e instanceof Error ? e.message : String(e)}`);
    } finally {
      setIsLoading(false);
      if (loadingRef.current) clearInterval(loadingRef.current);
    }
  };

  const handleRetry = () => {
    setResult(null);
    setImage(null);
    setPreview('');
    setError('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen" style={{ background: '#0a0a0a' }}>

      {/* 히어로 — 4색 에이전시 배너 */}
      <div className="relative overflow-hidden">
        {/* 4분할 컬러 배경 */}
        <div className="absolute inset-0 flex">
          {AGENCIES.map((a) => (
            <div
              key={a}
              className="flex-1 opacity-[0.07]"
              style={{ background: AGENCY_COLORS[a].primary }}
            />
          ))}
        </div>
        {/* 중앙 그라데이션 오버레이 */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 80% 100% at 50% 0%, transparent 0%, #0a0a0a 75%)'
        }} />

        <div className="relative z-10 max-w-2xl mx-auto px-4 pt-12 pb-8 text-center">
          {/* 소속사 뱃지 */}
          <div className="flex justify-center gap-2 mb-6 flex-wrap">
            {AGENCIES.map((a) => (
              <div
                key={a}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-black"
                style={{
                  background: AGENCY_COLORS[a].bg,
                  border: `1px solid ${AGENCY_COLORS[a].border}`,
                  color: AGENCY_COLORS[a].text,
                }}
              >
                <span>{AGENCY_INFO[a].emoji}</span>
                <span>{a}</span>
              </div>
            ))}
          </div>

          {/* 타이틀 */}
          <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-3">
            {tr.pageTitle}
          </h1>
          <p className="text-white/40 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
            {tr.pageSubtitle}
          </p>
        </div>
      </div>

      {/* 메인 컨텐츠 */}
      <div className="max-w-md mx-auto px-4 pb-16 space-y-6">

        {/* 결과 */}
        {result && !isLoading && (
          <div ref={resultRef}>
            <IdolResultCard result={result} preview={preview} lang={lang} onRetry={handleRetry} />
          </div>
        )}

        {/* 업로드 + 분석 */}
        {!result && !isLoading && (
          <>
            <IdolUpload onImageReady={handleImageReady} lang={lang} />

            {error && (
              <div className="px-4 py-3 rounded-2xl text-sm text-center"
                style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)', color: '#fca5a5' }}>
                {error}
              </div>
            )}

            {image && (
              <button
                onClick={handleAnalyze}
                className="w-full py-4 rounded-2xl font-black text-base transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                style={{
                  background: 'linear-gradient(90deg, #00A0E9, #9B59B6)',
                  color: 'white',
                  letterSpacing: '-0.02em',
                }}
              >
                {tr.analyzeBtn} ✨
              </button>
            )}

            {/* 소속사 미리보기 카드 */}
            {!image && (
              <div className="grid grid-cols-2 gap-3 pt-2">
                {AGENCIES.map((a) => (
                  <div
                    key={a}
                    className="rounded-2xl p-4"
                    style={{ background: AGENCY_COLORS[a].bg, border: `1px solid ${AGENCY_COLORS[a].border}` }}
                  >
                    <div className="text-2xl mb-1">{AGENCY_INFO[a].emoji}</div>
                    <div className="font-black text-sm mb-0.5" style={{ color: AGENCY_COLORS[a].text }}>{a}</div>
                    <div className="text-white/30 text-xs">{tr.agencyDesc[a]}</div>
                    <div className="text-white/20 text-xs mt-1">{AGENCY_INFO[a].idol}</div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* 로딩 */}
        {isLoading && (
          <div className="flex flex-col items-center gap-8 py-16">
            {preview && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={preview} alt="" className="w-28 h-28 rounded-3xl object-cover"
                style={{ border: '2px solid rgba(255,255,255,0.1)' }} />
            )}
            {/* 에이전시 컬러 스피너 */}
            <div className="relative w-16 h-16">
              {AGENCIES.map((a, i) => (
                <div
                  key={a}
                  className="absolute inset-0 rounded-full animate-spin"
                  style={{
                    border: `2px solid transparent`,
                    borderTopColor: AGENCY_COLORS[a].primary,
                    animationDuration: `${1.2 + i * 0.3}s`,
                    transform: `scale(${1 - i * 0.15})`,
                  }}
                />
              ))}
            </div>
            <p className="text-white/50 text-sm text-center animate-pulse">
              {tr.analyzingMessages[loadingMsgIdx]}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
