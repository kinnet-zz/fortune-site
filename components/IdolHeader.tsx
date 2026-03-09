'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import type { IdolLang } from '@/lib/idol-i18n';

export default function IdolHeader() {
  const pathname = usePathname();
  const [lang, setLang] = useState<IdolLang>('ko');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('lang') === 'en') setLang('en');
  }, [pathname]);

  const switchLang = (l: IdolLang) => {
    setLang(l);
    const url = new URL(window.location.href);
    if (l === 'ko') url.searchParams.delete('lang');
    else url.searchParams.set('lang', l);
    window.history.pushState({}, '', url.toString());
    window.dispatchEvent(new Event('idol-lang-change'));
  };

  return (
    <header
      className="relative z-50 w-full"
      style={{
        background: 'rgba(5, 5, 32, 0.85)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* 로고 */}
        <Link
          href="/idol"
          className="flex items-center gap-2 text-white/90 font-bold text-base hover:text-white transition-colors"
        >
          <span className="text-xl">🎤</span>
          <span className="hidden sm:inline">
            {lang === 'ko' ? 'K-아이돌 소속사 관상' : 'K-Idol Face Type'}
          </span>
          <span className="sm:hidden">K-Idol</span>
        </Link>

        <div className="flex items-center gap-3">
          {/* 운세 사이트로 돌아가기 */}
          <Link
            href="/"
            className="text-xs px-3 py-1.5 rounded-full transition-colors"
            style={{
              color: 'rgba(255,255,255,0.35)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            🔮 {lang === 'ko' ? '운세 보기' : 'Fortune'}
          </Link>

          {/* 언어 전환 (ko/en만) */}
          <div
            className="flex rounded-xl overflow-hidden"
            style={{ border: '1px solid rgba(255,255,255,0.1)' }}
          >
            {(['ko', 'en'] as IdolLang[]).map((l) => (
              <button
                key={l}
                onClick={() => switchLang(l)}
                className="px-3 py-1.5 text-xs font-semibold transition-colors"
                style={{
                  background: lang === l ? 'rgba(139,92,246,0.4)' : 'transparent',
                  color: lang === l ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.35)',
                }}
              >
                {l === 'ko' ? '한국어' : 'EN'}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
