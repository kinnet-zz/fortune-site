'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const NAV_ITEMS = [
  { href: '/', label: '오늘의 운세' },
  { href: '/zodiac', label: '별자리 정보' },
  { href: '/chinese-zodiac', label: '12띠 정보' },
  { href: '/about', label: '사이트 소개' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="relative z-50 w-full"
      style={{
        background: 'rgba(5, 5, 32, 0.85)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* 로고 */}
        <Link
          href="/"
          className="flex items-center gap-2 text-white/90 font-bold text-base hover:text-white transition-colors"
        >
          <span className="text-xl">🔮</span>
          <span>오늘의 운세</span>
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
        </div>
      )}
    </header>
  );
}
