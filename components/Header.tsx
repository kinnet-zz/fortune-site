'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { LANG_LABELS, type Lang } from '@/lib/i18n';
import { useLang } from '@/lib/useLang';

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang } = useLang();

  const NAV_ITEMS = [
    { href: '/idol', label: lang === 'ko' ? '🎤 소속사 관상' : '🎤 K-Idol Type' },
    { href: '/zodiac', label: lang === 'ko' ? '별자리 정보' : lang === 'en' ? 'Zodiac Info' : lang === 'zh' ? '星座信息' : '星座情報' },
    { href: '/chinese-zodiac', label: lang === 'ko' ? '12띠 정보' : lang === 'en' ? 'Chinese Zodiac' : lang === 'zh' ? '生肖信息' : '十二支情報' },
    { href: '/about', label: lang === 'ko' ? '사이트 소개' : lang === 'en' ? 'About' : lang === 'zh' ? '关于我们' : 'サイト紹介' },
  ];

  const logoLabel = lang === 'ko' ? '오늘의 운세' : lang === 'en' ? 'Fortune Teller' : lang === 'zh' ? '今日运势' : '今日の運勢';

  return (
    <header
      className="relative z-50 w-full"
      style={{
        background: 'rgba(5, 5, 32, 0.85)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between gap-2">
        {/* 로고 */}
        <Link
          href="/"
          className="flex items-center gap-2 text-white/90 font-bold text-base hover:text-white transition-colors flex-shrink-0"
        >
          <span className="text-xl">🔮</span>
          <span>{logoLabel}</span>
        </Link>

        {/* 데스크탑 네비게이션 */}
        <nav className="hidden sm:flex items-center gap-1" aria-label="메인 메뉴">
          {NAV_ITEMS.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200"
                style={{
                  color: isActive ? '#c084fc' : 'rgba(255,255,255,0.5)',
                  background: isActive ? 'rgba(124,58,237,0.15)' : 'transparent',
                }}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* 언어 선택 */}
        <div
          className="hidden sm:flex items-center gap-0.5 p-0.5 rounded-full flex-shrink-0"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {(Object.entries(LANG_LABELS) as [Lang, string][]).map(([code, label]) => (
            <button
              key={code}
              onClick={() => setLang(code)}
              className="px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-200"
              style={{
                background: lang === code ? 'rgba(124,58,237,0.6)' : 'transparent',
                color: lang === code ? '#e9d5ff' : 'rgba(255,255,255,0.4)',
                border: lang === code ? '1px solid rgba(167,139,250,0.4)' : '1px solid transparent',
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* 모바일 햄버거 버튼 */}
        <button
          className="sm:hidden text-white/60 hover:text-white/90 transition-colors p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴 열기"
          aria-expanded={menuOpen}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            {menuOpen ? (
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            ) : (
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            )}
          </svg>
        </button>
      </div>

      {/* 모바일 드롭다운 메뉴 */}
      {menuOpen && (
        <div
          className="sm:hidden border-t"
          style={{
            background: 'rgba(5, 5, 32, 0.97)',
            borderColor: 'rgba(255,255,255,0.07)',
          }}
        >
          <nav className="flex flex-col py-2 px-4" aria-label="모바일 메뉴">
            {NAV_ITEMS.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 px-2 text-sm font-medium border-b transition-colors"
                  style={{
                    color: isActive ? '#c084fc' : 'rgba(255,255,255,0.6)',
                    borderColor: 'rgba(255,255,255,0.05)',
                  }}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
          {/* 모바일 언어 선택 */}
          <div className="flex items-center gap-1 px-4 py-3">
            {(Object.entries(LANG_LABELS) as [Lang, string][]).map(([code, label]) => (
              <button
                key={code}
                onClick={() => { setLang(code); setMenuOpen(false); }}
                className="px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200"
                style={{
                  background: lang === code ? 'rgba(124,58,237,0.6)' : 'rgba(255,255,255,0.04)',
                  color: lang === code ? '#e9d5ff' : 'rgba(255,255,255,0.4)',
                  border: lang === code ? '1px solid rgba(167,139,250,0.4)' : '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
