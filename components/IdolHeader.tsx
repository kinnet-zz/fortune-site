'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import type { IdolLang } from '@/lib/idol-i18n';

export default function IdolHeader() {
  const pathname = usePathname();
  const [lang, setLang] = useState<IdolLang>('ko');

  useEffect(() => {
    const sync = () => {
      const p = new URLSearchParams(window.location.search);
      setLang(p.get('lang') === 'en' ? 'en' : 'ko');
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
    <header className="relative z-50 w-full" style={{ background: '#0a0a0a', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* 로고 */}
        <Link href="/idol" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="flex gap-0.5">
            {['#00A0E9','#FF5C00','#D4AF37','#9B59B6'].map((c, i) => (
              <div key={i} className="w-1.5 h-5 rounded-full" style={{ background: c }} />
            ))}
          </div>
          <span className="text-white font-black text-sm tracking-tight ml-1">
            {lang === 'ko' ? '소속사 관상' : 'K-Idol Type'}
          </span>
        </Link>

        <div className="flex items-center gap-2">
          {/* 운세로 돌아가기 */}
          <Link
            href="/"
            className="text-xs px-3 py-1.5 rounded-full transition-all hover:opacity-80"
            style={{ color: 'rgba(255,255,255,0.3)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            {lang === 'ko' ? '🔮 운세' : '🔮 Fortune'}
          </Link>

          {/* 언어 토글 */}
          <div className="flex rounded-lg overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
            {(['ko', 'en'] as IdolLang[]).map((l) => (
              <button
                key={l}
                onClick={() => switchLang(l)}
                className="px-3 py-1.5 text-xs font-bold transition-colors"
                style={{
                  background: lang === l ? 'rgba(255,255,255,0.12)' : 'transparent',
                  color: lang === l ? 'white' : 'rgba(255,255,255,0.3)',
                }}
              >
                {l === 'ko' ? 'KO' : 'EN'}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
