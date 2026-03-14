'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { LANG_LABELS, type Lang } from '@/lib/i18n';
import { useLang } from '@/lib/useLang';

interface NavItem {
  href: string;
  label: string;
  emoji: string;
}

export default function Header() {
  const pathname = usePathname();
  const { lang, setLang } = useLang();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [fortuneOpen, setFortuneOpen] = useState(false);
  const [gameOpen, setGameOpen] = useState(false);
  const fortuneRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<HTMLDivElement>(null);

  const FORTUNE_ITEMS: NavItem[] = [
    { href: '/', emoji: '✨', label: lang === 'ko' ? '오늘의 운세' : lang === 'en' ? 'Daily Fortune' : lang === 'zh' ? '今日运势' : '今日の運勢' },
    { href: '/card-draw', emoji: '🃏', label: lang === 'ko' ? '타로 카드 뽑기' : lang === 'en' ? 'Tarot Card' : lang === 'zh' ? '抽塔罗牌' : 'タロットカード' },
    { href: '/idol', emoji: '🎤', label: lang === 'ko' ? '소속사 테스트' : lang === 'en' ? 'K-Idol Type' : lang === 'zh' ? '经纪公司测试' : 'K-アイドル診断' },
    { href: '/past-life', emoji: '🌀', label: lang === 'ko' ? '나의 전생은?' : lang === 'en' ? 'Past Life' : lang === 'zh' ? '我的前世' : '私の前世' },
    { href: '/zodiac', emoji: '⭐', label: lang === 'ko' ? '별자리 정보' : lang === 'en' ? 'Zodiac Info' : lang === 'zh' ? '星座信息' : '星座情報' },
    { href: '/chinese-zodiac', emoji: '🐉', label: lang === 'ko' ? '12띠 정보' : lang === 'en' ? 'Chinese Zodiac' : lang === 'zh' ? '生肖信息' : '十二支情報' },
  ];

  const GAME_ITEMS: NavItem[] = [
    { href: '/number-game', emoji: '🔢', label: lang === 'ko' ? '숫자 게임' : lang === 'en' ? 'Number Game' : lang === 'zh' ? '数字游戏' : '数字ゲーム' },
  ];

  const fortuneLabel = lang === 'ko' ? '운세/테스트' : lang === 'en' ? 'Fortune' : lang === 'zh' ? '运势' : '運勢';
  const gameLabel = lang === 'ko' ? '게임' : lang === 'en' ? 'Game' : lang === 'zh' ? '游戏' : 'ゲーム';

  const isFortuneActive = FORTUNE_ITEMS.some(i => i.href === pathname);
  const isGameActive = GAME_ITEMS.some(i => i.href === pathname);

  // 드롭다운 외부 클릭 시 닫기
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (fortuneRef.current && !fortuneRef.current.contains(e.target as Node)) setFortuneOpen(false);
      if (gameRef.current && !gameRef.current.contains(e.target as Node)) setGameOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <header
      className="relative z-50 w-full"
      style={{
        background: 'rgba(5, 5, 32, 0.9)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between gap-3">

        {/* 로고 */}
        <Link
          href="/"
          className="flex items-center gap-2 text-white/90 font-bold text-base hover:text-white transition-colors flex-shrink-0"
        >
          <span className="text-xl">🔮</span>
          <span className="hidden sm:inline">StarFate</span>
        </Link>

        {/* 데스크탑 드롭다운 메뉴 */}
        <nav className="hidden sm:flex items-center gap-1 flex-1 justify-center">

          {/* 운세 드롭다운 */}
          <div ref={fortuneRef} className="relative">
            <button
              onClick={() => { setFortuneOpen(o => !o); setGameOpen(false); }}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-all"
              style={{
                color: isFortuneActive ? '#c084fc' : 'rgba(255,255,255,0.55)',
                background: isFortuneActive ? 'rgba(124,58,237,0.15)' : 'transparent',
              }}
            >
              🔮 {fortuneLabel}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" className={`transition-transform ${fortuneOpen ? 'rotate-180' : ''}`}>
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              </svg>
            </button>
            {fortuneOpen && (
              <div
                className="absolute top-full left-0 mt-1 w-44 rounded-xl overflow-hidden shadow-xl"
                style={{ background: 'rgba(10,10,40,0.97)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                {FORTUNE_ITEMS.map(({ href, emoji, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setFortuneOpen(false)}
                    className="flex items-center gap-2 px-4 py-2.5 text-sm transition-colors hover:bg-white/5"
                    style={{ color: pathname === href ? '#c084fc' : 'rgba(255,255,255,0.65)' }}
                  >
                    <span>{emoji}</span>
                    <span>{label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* 게임/테스트 드롭다운 */}
          <div ref={gameRef} className="relative">
            <button
              onClick={() => { setGameOpen(o => !o); setFortuneOpen(false); }}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-all"
              style={{
                color: isGameActive ? '#c084fc' : 'rgba(255,255,255,0.55)',
                background: isGameActive ? 'rgba(124,58,237,0.15)' : 'transparent',
              }}
            >
              🎮 {gameLabel}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" className={`transition-transform ${gameOpen ? 'rotate-180' : ''}`}>
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              </svg>
            </button>
            {gameOpen && (
              <div
                className="absolute top-full left-0 mt-1 w-44 rounded-xl overflow-hidden shadow-xl"
                style={{ background: 'rgba(10,10,40,0.97)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                {GAME_ITEMS.map(({ href, emoji, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setGameOpen(false)}
                    className="flex items-center gap-2 px-4 py-2.5 text-sm transition-colors hover:bg-white/5"
                    style={{ color: pathname === href ? '#c084fc' : 'rgba(255,255,255,0.65)' }}
                  >
                    <span>{emoji}</span>
                    <span>{label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

        </nav>

        {/* 언어 선택 + 모바일 햄버거 */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* 언어 선택 (데스크탑) */}
          <div
            className="hidden sm:flex items-center gap-0.5 p-0.5 rounded-full"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            {(Object.entries(LANG_LABELS) as [Lang, string][]).map(([code, label]) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className="px-2.5 py-1 rounded-full text-xs font-medium transition-all"
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

          {/* 모바일 햄버거 */}
          <button
            className="sm:hidden text-white/60 hover:text-white/90 transition-colors p-2"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="메뉴 열기"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              {mobileOpen ? (
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              ) : (
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {mobileOpen && (
        <div
          className="sm:hidden border-t"
          style={{ background: 'rgba(5,5,32,0.98)', borderColor: 'rgba(255,255,255,0.07)' }}
        >
          {/* 운세 섹션 */}
          <div className="px-4 pt-3 pb-1">
            <p className="text-white/30 text-xs font-medium uppercase tracking-wider mb-1">🔮 {fortuneLabel}</p>
            {FORTUNE_ITEMS.map(({ href, emoji, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 py-2.5 px-2 text-sm border-b transition-colors"
                style={{
                  color: pathname === href ? '#c084fc' : 'rgba(255,255,255,0.6)',
                  borderColor: 'rgba(255,255,255,0.04)',
                }}
              >
                <span>{emoji}</span>
                <span>{label}</span>
              </Link>
            ))}
          </div>

          {/* 게임 섹션 */}
          <div className="px-4 pt-3 pb-1">
            <p className="text-white/30 text-xs font-medium uppercase tracking-wider mb-1">🎮 {gameLabel}</p>
            {GAME_ITEMS.map(({ href, emoji, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 py-2.5 px-2 text-sm border-b transition-colors"
                style={{
                  color: pathname === href ? '#c084fc' : 'rgba(255,255,255,0.6)',
                  borderColor: 'rgba(255,255,255,0.04)',
                }}
              >
                <span>{emoji}</span>
                <span>{label}</span>
              </Link>
            ))}
          </div>

          {/* 모바일 언어 선택 */}
          <div className="flex items-center gap-1 px-4 py-3">
            {(Object.entries(LANG_LABELS) as [Lang, string][]).map(([code, label]) => (
              <button
                key={code}
                onClick={() => { setLang(code); setMobileOpen(false); }}
                className="px-3 py-1.5 rounded-full text-xs font-medium transition-all"
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
