'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import type { IdolLang } from '@/lib/idol-i18n';
import { SUPPORTED_LANGS, normalizeLang } from '@/lib/i18n';

export default function IdolHeader() {
  const pathname = usePathname();
  const [lang, setLang] = useState<IdolLang>('ko');

  useEffect(() => {
    const sync = () => {
      const p = new URLSearchParams(window.location.search);
      const l = p.get('lang');
      setLang(normalizeLang(l));
    };
    sync();
    window.addEventListener('idol-lang-change', sync);
    return () => window.removeEventListener('idol-lang-change', sync);
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
    <header className="sticky top-0 z-50 w-full border-b border-[rgba(184,199,220,0.14)] bg-[#0a0e15]/85 backdrop-blur-xl">
      <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* 로고 */}
        <Link href="/idol" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="flex gap-0.5">
            {['#00A0E9','#FF5C00','#D4AF37','#9B59B6'].map((c, i) => (
              <div key={i} className="w-1.5 h-5 rounded-full" style={{ background: c }} />
            ))}
          </div>
          <span className="text-[#f2f0ea] font-black text-sm tracking-tight ml-1">
            {lang === 'ko' ? '소속사 테스트' : 'K-Idol Type'}
          </span>
        </Link>

        <div className="flex items-center gap-2">
          {/* 운세로 돌아가기 */}
          <Link
            href="/"
            className="rounded-full border border-[rgba(184,199,220,0.14)] px-3 py-1.5 text-xs font-medium text-[#bdc5d1] transition-all hover:border-[rgba(184,199,220,0.28)] hover:text-[#f2f0ea]"
          >
            {lang === 'ko' ? '🔮 오늘의 운세' : '🔮 Fortune'}
          </Link>

          {/* 언어 토글 */}
          <div className="flex overflow-hidden rounded-full border border-[rgba(184,199,220,0.14)] bg-[#121722] p-0.5">
            {SUPPORTED_LANGS.map((l) => (
              <button
                key={l}
                onClick={() => switchLang(l)}
                className="px-2.5 py-1.5 text-xs font-bold transition-colors"
                style={{
                  background: lang === l ? '#101620' : 'transparent',
                  color: lang === l ? '#f2f0ea' : '#9aa3b2',
                  boxShadow: lang === l ? '0 1px 4px rgba(0,0,0,0.1)' : 'none',
                }}
              >
                {l === 'ko' ? '한국어' : l === 'en' ? 'EN' : '日本語'}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
