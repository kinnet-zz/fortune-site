'use client';

import { useState, useEffect, useRef } from 'react';
import { tIdol, type IdolLang, type Agency } from '@/lib/idol-i18n';
import IdolUpload from './IdolUpload';
import IdolResultCard from './IdolResultCard';

interface IdolAnalysisResult {
  topAgency: Agency;
  scores: Record<Agency, number>;
  summary: string;
  features: { eyes: string; nose: string; lips: string; overall: string };
  similarIdol: string;
}

export default function IdolClient() {
  const [lang, setLang] = useState<IdolLang>('ko');
  const [image, setImage] = useState<{ base64: string; mimeType: string } | null>(null);
  const [preview, setPreview] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<IdolAnalysisResult | null>(null);
  const [error, setError] = useState('');
  const [loadingMsg, setLoadingMsg] = useState('');
  const loadingIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const tr = tIdol(lang);

  // URL에서 lang 읽기 + IdolHeader 언어 변경 이벤트 수신
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('lang') === 'en') setLang('en');

    const onLangChange = () => {
      const p = new URLSearchParams(window.location.search);
      setLang(p.get('lang') === 'en' ? 'en' : 'ko');
    };
    window.addEventListener('idol-lang-change', onLangChange);
    return () => window.removeEventListener('idol-lang-change', onLangChange);
  }, []);

  // 결과 나오면 스크롤
  useEffect(() => {
    if (result && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [result]);

  const startLoadingMessages = () => {
    const msgs = tr.analyzingMessages;
    let i = 0;
    setLoadingMsg(msgs[0]);
    loadingIntervalRef.current = setInterval(() => {
      i = (i + 1) % msgs.length;
      setLoadingMsg(msgs[i]);
    }, 1800);
  };

  const stopLoadingMessages = () => {
    if (loadingIntervalRef.current) {
      clearInterval(loadingIntervalRef.current);
      loadingIntervalRef.current = null;
    }
  };

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
    startLoadingMessages();

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
          setError(tr.errorMsg);
        }
        return;
      }

      setResult(data);
    } catch {
      setError(tr.errorMsg);
    } finally {
      setIsLoading(false);
      stopLoadingMessages();
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
    <div
      className="min-h-screen relative"
      style={{
        background: 'linear-gradient(160deg, #050520 0%, #0a0a2e 30%, #130a2e 60%, #1a0a3e 100%)',
      }}
    >
      {/* 배경 글로우 */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(139,92,246,0.5) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      <main className="relative z-10 min-h-screen flex flex-col items-center px-4 py-8 pb-20">

        {/* 헤더 */}
        <div className="text-center mb-8 w-full max-w-md">
          <div className="flex justify-center gap-2 mb-3">
            {(['SM', 'JYP', 'YG', 'HYBE'] as const).map((a) => (
              <span
                key={a}
                className="text-xs font-black px-2.5 py-1 rounded-full"
                style={{
                  background: `${['rgba(0,160,233,0.2)', 'rgba(255,92,0,0.2)', 'rgba(212,175,55,0.2)', 'rgba(155,89,182,0.2)'][['SM','JYP','YG','HYBE'].indexOf(a)]}`,
                  color: `${['#60cbff', '#ff8c4a', '#f0cc5a', '#c77dff'][['SM','JYP','YG','HYBE'].indexOf(a)]}`,
                  border: `1px solid ${['rgba(0,160,233,0.3)', 'rgba(255,92,0,0.3)', 'rgba(212,175,55,0.3)', 'rgba(155,89,182,0.3)'][['SM','JYP','YG','HYBE'].indexOf(a)]}`,
                }}
              >
                {a}
              </span>
            ))}
          </div>
          <h1 className="text-2xl font-black text-white mb-2">{tr.pageTitle}</h1>
          <p className="text-white/40 text-sm">{tr.pageSubtitle}</p>
        </div>

        {/* 결과 영역 */}
        {result && !isLoading && (
          <div ref={resultRef} className="w-full max-w-md">
            <IdolResultCard
              result={result}
              preview={preview}
              lang={lang}
              onRetry={handleRetry}
            />
          </div>
        )}

        {/* 업로드 + 분석 버튼 */}
        {!result && !isLoading && (
          <div className="w-full max-w-md space-y-4">
            <IdolUpload onImageReady={handleImageReady} lang={lang} />

            {error && (
              <div
                className="px-4 py-3 rounded-2xl text-sm text-center"
                style={{
                  background: 'rgba(239,68,68,0.1)',
                  border: '1px solid rgba(239,68,68,0.3)',
                  color: '#fca5a5',
                }}
              >
                {error}
              </div>
            )}

            {image && (
              <button
                onClick={handleAnalyze}
                className="w-full py-4 rounded-2xl font-black text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: 'linear-gradient(135deg, #7c3aed 0%, #9333ea 50%, #6366f1 100%)',
                  boxShadow: '0 0 30px rgba(139,92,246,0.4)',
                  color: 'white',
                }}
              >
                ✨ {tr.analyzeBtn}
              </button>
            )}
          </div>
        )}

        {/* 로딩 */}
        {isLoading && (
          <div className="w-full max-w-md flex flex-col items-center gap-6 py-16">
            <div className="relative">
              <div
                className="w-24 h-24 rounded-full animate-spin"
                style={{
                  border: '3px solid rgba(139,92,246,0.2)',
                  borderTop: '3px solid #9333ea',
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-4xl">🔍</div>
            </div>
            <div className="text-center">
              <p className="text-white/60 text-sm animate-pulse">{loadingMsg || tr.analyzing}</p>
              {preview && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={preview}
                  alt=""
                  className="w-20 h-20 rounded-2xl object-cover mx-auto mt-4 opacity-50"
                />
              )}
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
