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

  const fortuneLabel = lang === 'ko' ? '운세·테스트' : lang === 'en' ? 'Fortune' : lang === 'zh' ? '运势' : '運勢';
  const guideLabel = lang === 'ko' ? '블로그·백과' : lang === 'en' ? 'Blog & Guide' : lang === 'zh' ? '博客·百科' : 'ブログ·図鑑';
  const gameLabel = lang === 'ko' ? '게임' : lang === 'en' ? 'Game' : lang === 'zh' ? '游戏' : 'ゲーム';
  const homeLabel = lang === 'ko' ? '홈' : lang === 'en' ? 'Home' : lang === 'zh' ? '首页' : 'ホーム';

  const isFortuneActive = FORTUNE_ITEMS.some((i) => i.href === pathname);
  const isGuideActive = GUIDE_ITEMS.some((i) => i.href === pathname) || pathname.startsWith('/blog');
  const isGameActive = GAME_ITEMS.some((i) => i.href === pathname);

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
    `relative flex min-h-10 items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[0.82rem] font-medium tracking-[-0.01em] transition-colors ${
      active || open
        ? 'bg-[#eef2ff] text-[#3b5bdb]'
        : 'text-[#475569] hover:bg-[#f4f5f8] hover:text-[#0f172a]'
    }`;

  const menuPanel =
    'absolute top-full left-1/2 -translate-x-1/2 mt-3 w-60 rounded-2xl border border-[#e8eaef] bg-white p-1.5 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.28)]';

  const renderMenu = (
    id: string,
    items: NavItem[],
    close: () => void,
    wide = false,
  ) => (
    <div id={id} className={`${menuPanel} ${wide ? '!w-68' : ''}`} style={wide ? { width: '17rem' } : undefined}>
      {items.map(({ href, label }, index) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            onClick={close}
            className={`flex min-h-10 items-center gap-3 rounded-xl px-3 py-2 text-[0.82rem] transition-colors ${
              active ? 'bg-[#eef2ff] text-[#3b5bdb]' : 'text-[#475569] hover:bg-[#f4f5f8] hover:text-[#0f172a]'
            }`}
          >
            <span className="w-5 text-[0.62rem] tabular-nums tracking-[0.08em] text-[#64748b]">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="font-medium">{label}</span>
          </Link>
        );
      })}
    </div>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e8eaef] bg-white/85 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">

        {/* 로고 */}
        <Link
          href="/"
          className="group flex min-h-11 flex-shrink-0 items-center gap-2.5"
          aria-label={`StarFate ${homeLabel}`}
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-[#e8eaef] bg-white shadow-[0_2px_10px_rgba(15,23,42,0.05)] transition-transform duration-300 group-hover:-translate-y-0.5">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2.6c.7 4.9 3.5 7.7 8.4 8.4-4.9.7-7.7 3.5-8.4 8.4-.7-4.9-3.5-7.7-8.4-8.4 4.9-.7 7.7-3.5 8.4-8.4z" fill="#3b5bdb" />
            </svg>
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[1.02rem] font-bold tracking-[-0.02em] text-[#0f172a]">StarFate</span>
            <span className="mt-1 text-[0.58rem] font-medium tracking-[0.08em] text-[#64748b]">
              별자리 · 운세
            </span>
          </span>
        </Link>

        {/* 데스크탑 메뉴 */}
        <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex" aria-label="주요 메뉴">

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
            </button>
            {fortuneOpen && renderMenu('fortune-menu', FORTUNE_ITEMS, () => setFortuneOpen(false))}
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
            </button>
            {guideOpen && renderMenu('guide-menu', GUIDE_ITEMS, () => setGuideOpen(false), true)}
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
            </button>
            {gameOpen && renderMenu('game-menu', GAME_ITEMS, () => setGameOpen(false))}
          </div>

        </nav>

        {/* 언어 선택 + 모바일 메뉴 */}
        <div className="flex flex-shrink-0 items-center gap-2">
          <div className="hidden items-center gap-0.5 rounded-full border border-[#e8eaef] bg-[#f8f9fb] p-1 md:flex">
            {(Object.entries(LANG_LABELS) as [Lang, string][]).map(([code, label]) => {
              const selected = lang === code;
              return (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  aria-pressed={selected}
                  className={`min-h-8 rounded-full px-2.5 py-1 text-[0.68rem] font-medium transition-all ${
                    selected
                      ? 'bg-white text-[#0f172a] shadow-[0_1px_4px_rgba(15,23,42,0.1)]'
                      : 'text-[#64748b] hover:text-[#475569]'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          <button
            className="grid min-h-11 min-w-11 place-items-center rounded-full text-[#475569] transition-colors hover:bg-[#f4f5f8] hover:text-[#0f172a] lg:hidden"
            onClick={(event) => {
              const nextOpen = !mobileOpen;
              setMobileOpen(nextOpen);
              if (nextOpen) lastMenuTriggerRef.current = event.currentTarget;
            }}
            aria-label={mobileOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            <svg width="21" height="21" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              {mobileOpen ? (
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              ) : (
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-[#e8eaef] bg-white lg:hidden"
        >
          {[
            { title: fortuneLabel, items: FORTUNE_ITEMS },
            { title: guideLabel, items: GUIDE_ITEMS },
            { title: gameLabel, items: GAME_ITEMS },
          ].map((section) => (
            <div key={section.title} className="px-5 pt-6">
              <p className="mb-2.5 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#64748b]">
                {section.title}
              </p>
              <div className="grid gap-0.5">
                {section.items.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex min-h-11 items-center justify-between gap-2 rounded-xl px-3 py-2.5 text-[0.92rem] transition-colors ${
                      pathname === href
                        ? 'bg-[#eef2ff] font-medium text-[#3b5bdb]'
                        : 'text-[#334155] hover:bg-[#f4f5f8]'
                    }`}
                  >
                    <span>{label}</span>
                    <span className="text-[#64748b]">→</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-6 border-t border-[#e8eaef] px-5 py-5">
            <div className="flex items-center gap-1 rounded-full border border-[#e8eaef] bg-[#f8f9fb] p-1">
              {(Object.entries(LANG_LABELS) as [Lang, string][]).map(([code, label]) => {
                const selected = lang === code;
                return (
                  <button
                    key={code}
                    onClick={() => { setLang(code); setMobileOpen(false); }}
                    aria-pressed={selected}
                    className={`min-h-9 flex-1 rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                      selected ? 'bg-white text-[#0f172a] shadow-[0_1px_4px_rgba(15,23,42,0.1)]' : 'text-[#64748b]'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
