'use client';

import { useState, useEffect, useRef } from 'react';
import { tIdol, AGENCY_COLORS, type IdolLang, type Agency, type Gender } from '@/lib/idol-i18n';
import { normalizeLang } from '@/lib/i18n';
import IdolUpload from './IdolUpload';
import IdolResultCard from './IdolResultCard';

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

const AGENCY_INFO = {
  SM:   { emoji: '💎', idol: 'aespa · EXO · SHINee' },
  JYP:  { emoji: '🌟', idol: 'TWICE · ITZY · Stray Kids' },
  YG:   { emoji: '🔥', idol: 'BLACKPINK · BIGBANG · WINNER' },
  HYBE: { emoji: '✨', idol: 'BTS · NewJeans · LE SSERAFIM' },
};

export default function IdolClient() {
  const [lang, setLang] = useState<IdolLang>('ko');
  const [gender, setGender] = useState<Gender>('female');
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
      setLang(normalizeLang(p.get('lang')));
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
        body: JSON.stringify({ image: image.base64, mimeType: image.mimeType, lang, gender }),
      });
      const data = await res.json();
      if (!res.ok) {
        if (res.status === 429 || data.error === 'QUOTA_EXCEEDED') {
          setError(tr.quotaMsg);
        } else if (res.status === 422 || data.error === 'NO_FACE') {
          setError(tr.noFaceMsg);
        } else {
          setError(tr.errorMsg);
        }
        return;
      }
      setResult(data);
    } catch {
      setError(tr.errorMsg);
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
    <div className="min-h-screen" style={{ background: '#101620' }}>

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
          background: 'radial-gradient(ellipse 80% 100% at 50% 0%, transparent 0%, #101620 75%)'
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
          <h1 className="text-3xl sm:text-4xl font-black text-[#f2f0ea] leading-tight mb-3">
            {tr.pageTitle}
          </h1>
          <p className="text-[#9aa3b2] text-sm sm:text-base max-w-md mx-auto leading-relaxed">
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
            {/* 성별 선택 */}
            <div className="flex gap-3">
              {(['female', 'male'] as Gender[]).map((g) => {
                const isSelected = gender === g;
                const label = g === 'female' ? tr.genderFemale : tr.genderMale;
                const emoji = g === 'female' ? '👩' : '👨';
                return (
                  <button
                    key={g}
                    onClick={() => { setGender(g); setResult(null); setError(''); }}
                    className="flex-1 rounded-2xl py-3 text-sm font-semibold transition-all duration-200"
                    style={{
                      background: isSelected ? '#101620' : '#121722',
                      border: isSelected ? '1.5px solid #e6ecf5' : '1.5px solid rgba(184,199,220,0.14)',
                      color: isSelected ? '#f2f0ea' : '#9aa3b2',
                      boxShadow: isSelected ? '0 6px 18px -12px rgba(206,220,238,0.45)' : 'none',
                    }}
                  >
                    {emoji} {label}
                  </button>
                );
              })}
            </div>

            <IdolUpload onImageReady={handleImageReady} lang={lang} />

            {error && (
              <div className="px-4 py-3 rounded-2xl text-sm text-center"
                style={{ background: 'rgba(220,140,140,0.10)', border: '1px solid rgba(220,140,140,0.35)', color: '#f0c9c9' }}>
                {error}
              </div>
            )}

            {image && (
              <button
                onClick={handleAnalyze}
                className="w-full rounded-full py-4 text-base font-semibold transition-all duration-200 hover:bg-[#f4f8fd] active:scale-[0.99]"
                style={{
                  background: '#e6ecf5',
                  color: '#0a0e14',
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
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-base leading-none">{AGENCY_INFO[a].emoji}</span>
                      <span className="font-black text-sm" style={{ color: AGENCY_COLORS[a].text }}>{a}</span>
                    </div>
                    <div className="text-[#9aa3b2] text-xs">{tr.agencyDesc[a]}</div>
                    <div className="text-[#9aa3b2] text-xs mt-1">{AGENCY_INFO[a].idol}</div>
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
                style={{ border: '2px solid rgba(0,0,0,0.08)' }} />
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
            <p className="text-[#9aa3b2] text-sm text-center animate-pulse">
              {tr.analyzingMessages[loadingMsgIdx]}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
