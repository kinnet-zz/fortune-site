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
  const [guideOpen, setGuideOpen] = useState(false);
  const fortuneRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<HTMLDivElement>(null);
  const guideRef = useRef<HTMLDivElement>(null);
  const lastMenuTriggerRef = useRef<HTMLButtonElement | null>(null);

  const FORTUNE_ITEMS: NavItem[] = [
    { href: '/', emoji: '✦', label: lang === 'ko' ? '오늘의 운세' : lang === 'en' ? 'Daily Fortune' : lang === 'zh' ? '今日运势' : '今日の運勢' },
    { href: '/card-draw', emoji: '✦', label: lang === 'ko' ? '타로 카드 뽑기' : lang === 'en' ? 'Tarot Card' : lang === 'zh' ? '抽塔罗牌' : 'タロットカード' },
    { href: '/idol', emoji: '✦', label: lang === 'ko' ? '소속사 테스트' : lang === 'en' ? 'K-Idol Type' : lang === 'zh' ? '经纪公司测试' : 'K-アイドル診断' },
    { href: '/past-life', emoji: '✦', label: lang === 'ko' ? '나의 전생은?' : lang === 'en' ? 'Past Life' : lang === 'zh' ? '我的前世' : '私の前世' },
  ];

  const GUIDE_ITEMS: NavItem[] = [
    { href: '/blog/daily', emoji: '✦', label: lang === 'ko' ? '오늘의 별자리 운세' : lang === 'en' ? 'Daily Horoscope' : lang === 'zh' ? '今日星座运势' : '今日星座運勢' },
    { href: '/blog', emoji: '✦', label: lang === 'ko' ? '운세 가이드 블로그' : lang === 'en' ? 'Blog' : lang === 'zh' ? '运势博客' : '運勢ブログ' },
    { href: '/zodiac', emoji: '✦', label: lang === 'ko' ? '별자리 정보' : lang === 'en' ? 'Zodiac Info' : lang === 'zh' ? '星座信息' : '星座情報' },
    { href: '/chinese-zodiac', emoji: '✦', label: lang === 'ko' ? '12띠 정보' : lang === 'en' ? 'Chinese Zodiac' : lang === 'zh' ? '生肖信息' : '十二支情報' },
    { href: '/guide/zodiac-compatibility', emoji: '✦', label: lang === 'ko' ? '별자리 궁합' : lang === 'en' ? 'Compatibility' : lang === 'zh' ? '星座配对' : '星座相性' },
    { href: '/guide/horoscope-history', emoji: '✦', label: lang === 'ko' ? '운세의 역사' : lang === 'en' ? 'Astrology History' : lang === 'zh' ? '占星历史' : '占星の歴史' },
    { href: '/guide/tarot-guide', emoji: '✦', label: lang === 'ko' ? '타로 가이드' : lang === 'en' ? 'Tarot Guide' : lang === 'zh' ? '塔罗指南' : 'タロットガイド' },
    { href: '/guide/numerology', emoji: '✦', label: lang === 'ko' ? '수비학' : lang === 'en' ? 'Numerology' : lang === 'zh' ? '数字命理' : '数秘術' },
    { href: '/guide/past-life-culture', emoji: '✦', label: lang === 'ko' ? '전생과 윤회' : lang === 'en' ? 'Past Lives' : lang === 'zh' ? '前世轮回' : '前世と輪廻' },
    { href: '/guide/fortune-tips', emoji: '✦', label: lang === 'ko' ? '운세 활용법' : lang === 'en' ? 'Fortune Tips' : lang === 'zh' ? '运势技巧' : '運勢活用法' },
  ];

  const GAME_ITEMS: NavItem[] = [
    { href: '/number-game', emoji: '✦', label: lang === 'ko' ? '숫자 게임' : lang === 'en' ? 'Number Game' : lang === 'zh' ? '数字游戏' : '数字ゲーム' },
    { href: '/zodiac-memory', emoji: '✦', label: lang === 'ko' ? '별자리 기억' : lang === 'en' ? 'Zodiac Memory' : lang === 'zh' ? '星座记忆' : '星座記憶' },
  ];

  const fortuneLabel = lang === 'ko' ? '운세/테스트' : lang === 'en' ? 'Fortune' : lang === 'zh' ? '运势' : '運勢';
  const guideLabel = lang === 'ko' ? '블로그·백과' : lang === 'en' ? 'Blog & Guide' : lang === 'zh' ? '博客·百科' : 'ブログ·図鑑';
  const gameLabel = lang === 'ko' ? '게임' : lang === 'en' ? 'Game' : lang === 'zh' ? '游戏' : 'ゲーム';
  const homeLabel = lang === 'ko' ? '홈' : lang === 'en' ? 'Home' : lang === 'zh' ? '首页' : 'ホーム';

  const isFortuneActive = FORTUNE_ITEMS.some(i => i.href === pathname);
  const isGuideActive = GUIDE_ITEMS.some(i => i.href === pathname) || pathname.startsWith('/blog');
  const isGameActive = GAME_ITEMS.some(i => i.href === pathname);

  // 드롭다운 외부 클릭 시 닫기
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (fortuneRef.current && !fortuneRef.current.contains(e.target as Node)) setFortuneOpen(false);
      if (guideRef.current && !guideRef.current.contains(e.target as Node)) setGuideOpen(false);
      if (gameRef.current && !gameRef.current.contains(e.target as Node)) setGameOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      const hadOpenMenu = mobileOpen || fortuneOpen || guideOpen || gameOpen;
      setMobileOpen(false);
      setFortuneOpen(false);
      setGuideOpen(false);
      setGameOpen(false);
      if (hadOpenMenu) requestAnimationFrame(() => lastMenuTriggerRef.current?.focus());
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [fortuneOpen, gameOpen, guideOpen, mobileOpen]);

  const triggerClass = (active: boolean, open: boolean) =>
    `relative flex min-h-11 items-center gap-1.5 px-3 py-1.5 text-[0.8rem] font-medium tracking-[0.02em] transition-colors ${
      active || open ? 'text-[#f7f0e1]' : 'text-[rgba(247,240,225,0.62)] hover:text-[#f7f0e1]'
    }`;

  const menuPanel = 'absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 rounded-2xl p-1.5 shadow-2xl';

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{
        background: 'linear-gradient(180deg, #111730 0%, #0e142b 100%)',
        borderBottom: '1px solid rgba(226,205,162,0.28)',
        backdropFilter: 'blur(16px)',
      }}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-3 px-4">

        {/* 로고 */}
        <Link
          href="/"
          className="group flex min-h-11 flex-shrink-0 items-center gap-2.5"
          aria-label={`StarFate ${homeLabel}`}
        >
          <span className="relative grid h-9 w-9 place-items-center rounded-full border border-[rgba(226,205,162,0.5)] bg-[radial-gradient(circle_at_30%_25%,rgba(226,205,162,0.22),rgba(37,45,85,0.4)_65%,transparent_78%)]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2.5l1.6 6.1 6.1 1.6-6.1 1.6-1.6 6.1-1.6-6.1L4.3 10.2l6.1-1.6L12 2.5z" fill="#e2cda2" opacity="0.95" />
              <circle cx="19.4" cy="5.4" r="1" fill="#f7f0e1" opacity="0.85" />
              <circle cx="5" cy="18.6" r="0.8" fill="#c3a165" opacity="0.9" />
            </svg>
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[1.05rem] font-semibold tracking-[0.16em] text-[#f7f0e1]">
              STARFATE
            </span>
            <span className="mt-1 text-[0.55rem] tracking-[0.34em] text-[rgba(226,205,162,0.75)]">
              별자리 · 운세
            </span>
          </span>
        </Link>

        {/* 데스크탑 드롭다운 메뉴 */}
        <nav className="hidden flex-1 items-center justify-center gap-1 sm:flex" aria-label="주요 메뉴">

          <div ref={fortuneRef} className="relative">
            <button
              onClick={(event) => {
                const nextOpen = !fortuneOpen;
                setFortuneOpen(nextOpen);
                setGuideOpen(false);
                setGameOpen(false);
                if (nextOpen) lastMenuTriggerRef.current = event.currentTarget;
              }}
              aria-expanded={fortuneOpen}
              aria-controls="fortune-menu"
              className={triggerClass(isFortuneActive, fortuneOpen)}
            >
              {fortuneLabel}
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className={`transition-transform duration-300 ${fortuneOpen ? 'rotate-180' : ''}`}>
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              {isFortuneActive && <span className="absolute inset-x-3 -bottom-[1px] h-px bg-gradient-to-r from-transparent via-[#d9b877] to-transparent" />}
            </button>
            {fortuneOpen && (
              <div
                id="fortune-menu"
                className={menuPanel}
                style={{ background: '#fbf7ee', border: '1px solid rgba(169,128,63,0.3)', boxShadow: '0 30px 60px -34px rgba(20,23,43,0.45)' }}
              >
                {FORTUNE_ITEMS.map(({ href, label }, index) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setFortuneOpen(false)}
                    className="flex min-h-11 items-center gap-3 px-3 py-2.5 text-[0.82rem] transition-colors hover:bg-[rgba(17,23,48,0.045)]"
                    style={{ color: pathname === href ? '#a9803f' : 'rgba(20,23,43,0.72)' }}
                  >
                    <span className="text-[0.6rem] tracking-[0.2em] text-[rgba(169,128,63,0.55)]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span>{label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div ref={guideRef} className="relative">
            <button
              onClick={(event) => {
                const nextOpen = !guideOpen;
                setGuideOpen(nextOpen);
                setFortuneOpen(false);
                setGameOpen(false);
                if (nextOpen) lastMenuTriggerRef.current = event.currentTarget;
              }}
              aria-expanded={guideOpen}
              aria-controls="guide-menu"
              className={triggerClass(isGuideActive, guideOpen)}
            >
              {guideLabel}
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className={`transition-transform duration-300 ${guideOpen ? 'rotate-180' : ''}`}>
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              {isGuideActive && <span className="absolute inset-x-3 -bottom-[1px] h-px bg-gradient-to-r from-transparent via-[#d9b877] to-transparent" />}
            </button>
            {guideOpen && (
              <div
                id="guide-menu"
                className="absolute left-1/2 top-full mt-2 w-64 -translate-x-1/2 rounded-2xl p-1.5 shadow-2xl"
                style={{ background: '#fbf7ee', border: '1px solid rgba(169,128,63,0.3)', boxShadow: '0 30px 60px -34px rgba(20,23,43,0.45)' }}
              >
                {GUIDE_ITEMS.map(({ href, label }, index) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setGuideOpen(false)}
                    className="flex min-h-11 items-center gap-3 px-3 py-2.5 text-[0.82rem] transition-colors hover:bg-[rgba(17,23,48,0.045)]"
                    style={{ color: pathname === href ? '#a9803f' : 'rgba(20,23,43,0.72)' }}
                  >
                    <span className="text-[0.6rem] tracking-[0.2em] text-[rgba(169,128,63,0.55)]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span>{label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div ref={gameRef} className="relative">
            <button
              onClick={(event) => {
                const nextOpen = !gameOpen;
                setGameOpen(nextOpen);
                setFortuneOpen(false);
                setGuideOpen(false);
                if (nextOpen) lastMenuTriggerRef.current = event.currentTarget;
              }}
              aria-expanded={gameOpen}
              aria-controls="game-menu"
              className={triggerClass(isGameActive, gameOpen)}
            >
              {gameLabel}
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className={`transition-transform duration-300 ${gameOpen ? 'rotate-180' : ''}`}>
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              {isGameActive && <span className="absolute inset-x-3 -bottom-[1px] h-px bg-gradient-to-r from-transparent via-[#d9b877] to-transparent" />}
            </button>
            {gameOpen && (
              <div
                id="game-menu"
                className={menuPanel}
                style={{ background: '#fbf7ee', border: '1px solid rgba(169,128,63,0.3)', boxShadow: '0 30px 60px -34px rgba(20,23,43,0.45)' }}
              >
                {GAME_ITEMS.map(({ href, label }, index) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setGameOpen(false)}
                    className="flex min-h-11 items-center gap-3 px-3 py-2.5 text-[0.82rem] transition-colors hover:bg-[rgba(17,23,48,0.045)]"
                    style={{ color: pathname === href ? '#a9803f' : 'rgba(20,23,43,0.72)' }}
                  >
                    <span className="text-[0.6rem] tracking-[0.2em] text-[rgba(169,128,63,0.55)]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span>{label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

        </nav>

        {/* 언어 선택 + 모바일 햄버거 */}
        <div className="flex flex-shrink-0 items-center gap-1.5">
          <div className="hidden items-center gap-0.5 sm:flex">
            {(Object.entries(LANG_LABELS) as [Lang, string][]).map(([code, label]) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                aria-pressed={lang === code}
                className="min-h-11 min-w-11 rounded-full px-2 py-1 text-[0.68rem] font-medium tracking-[0.06em] transition-all"
                style={{
                  color: lang === code ? '#e2cda2' : 'rgba(247,240,225,0.45)',
                  borderBottom: lang === code ? '1px solid rgba(226,205,162,0.8)' : '1px solid transparent',
                  borderRadius: 0,
                }}
              >
                {label}
              </button>
            ))}
          </div>

          <button
            className="min-h-11 min-w-11 p-2 text-[rgba(247,240,225,0.72)] transition-colors hover:text-[#f7f0e1] sm:hidden"
            onClick={(event) => {
              const nextOpen = !mobileOpen;
              setMobileOpen(nextOpen);
              if (nextOpen) lastMenuTriggerRef.current = event.currentTarget;
            }}
            aria-label={mobileOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            <svg width="22" height="22" viewBox="0 0 20 20" fill="currentColor">
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
          id="mobile-navigation"
          className="max-h-[calc(100vh-4.25rem)] overflow-y-auto border-t sm:hidden"
          style={{ background: '#0e142b', borderColor: 'rgba(226,205,162,0.22)' }}
        >
          {[
            { title: fortuneLabel, items: FORTUNE_ITEMS },
            { title: guideLabel, items: GUIDE_ITEMS },
            { title: gameLabel, items: GAME_ITEMS },
          ].map((section) => (
            <div key={section.title} className="px-5 pt-5">
              <p className="mb-2 flex items-center gap-2 text-[0.6rem] font-semibold uppercase tracking-[0.32em] text-[rgba(226,205,162,0.7)]">
                <span className="h-px w-4 bg-[rgba(226,205,162,0.55)]" />
                {section.title}
              </p>
              {section.items.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-12 items-center justify-between gap-2 border-b py-2.5 text-[0.95rem] transition-colors"
                  style={{
                    color: pathname === href ? '#e2cda2' : 'rgba(247,240,225,0.75)',
                    borderColor: 'rgba(226,205,162,0.14)',
                  }}
                >
                  <span>{label}</span>
                  <span className="text-[rgba(226,205,162,0.5)]">→</span>
                </Link>
              ))}
            </div>
          ))}

          <div className="flex items-center gap-2 px-5 py-5">
            {(Object.entries(LANG_LABELS) as [Lang, string][]).map(([code, label]) => (
              <button
                key={code}
                onClick={() => { setLang(code); setMobileOpen(false); }}
                aria-pressed={lang === code}
                className="min-h-11 min-w-11 rounded-full px-3 py-1.5 text-xs font-medium transition-all"
                style={{
                  background: lang === code ? 'rgba(226,205,162,0.16)' : 'rgba(20,23,43,0.03)',
                  color: lang === code ? '#f7f0e1' : 'rgba(247,240,225,0.45)',
                  border: lang === code ? '1px solid rgba(226,205,162,0.5)' : '1px solid rgba(226,205,162,0.16)',
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
