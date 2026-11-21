'use client';

import Link from 'next/link';
import { useLang } from '@/lib/useLang';
import { t } from '@/lib/i18n';
import { CHINESE_ZODIAC_CONTENT } from '@/lib/chinese-zodiac-data';
import { stripLeadingEmoji } from '@/lib/text';

const CHINESE_ZODIAC_BASE = [
  { emoji: '🐭', english: 'Rat', elementKey: '물 💧', years: [1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020] },
  { emoji: '🐮', english: 'Ox', elementKey: '땅 🌍', years: [1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021] },
  { emoji: '🐯', english: 'Tiger', elementKey: '나무 🌿', years: [1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022] },
  { emoji: '🐰', english: 'Rabbit', elementKey: '나무 🌿', years: [1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023] },
  { emoji: '🐉', english: 'Dragon', elementKey: '나무/흙', years: [1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024] },
  { emoji: '🐍', english: 'Snake', elementKey: '불 🔥', years: [1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025] },
  { emoji: '🐎', english: 'Horse', elementKey: '불 🔥', years: [1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026] },
  { emoji: '🐑', english: 'Goat', elementKey: '땅 🌍', years: [1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027] },
  { emoji: '🐒', english: 'Monkey', elementKey: '금 ⚙️', years: [1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016, 2028] },
  { emoji: '🐓', english: 'Rooster', elementKey: '금 ⚙️', years: [1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029] },
  { emoji: '🐕', english: 'Dog', elementKey: '흙 🌍', years: [1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030] },
  { emoji: '🐷', english: 'Pig', elementKey: '물 💧', years: [1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031] },
];

const WUXING_ELEMENT: Record<string, Record<string, string>> = {
  '물 💧': { en: 'Water 💧', zh: '水 💧', ja: '水 💧' },
  '땅 🌍': { en: 'Earth 🌍', zh: '土 🌍', ja: '土 🌍' },
  '나무 🌿': { en: 'Wood 🌿', zh: '木 🌿', ja: '木 🌿' },
  '불 🔥': { en: 'Fire 🔥', zh: '火 🔥', ja: '火 🔥' },
  '금 ⚙️': { en: 'Metal ⚙️', zh: '金 ⚙️', ja: '金 ⚙️' },
  '흙 🌍': { en: 'Earth 🌍', zh: '土 🌍', ja: '土 🌍' },
  '나무/흙': { en: 'Wood/Earth', zh: '木/土', ja: '木/土' },
};

export default function ChineseZodiacContent() {
  const { lang } = useLang();
  const tr = t(lang);
  const chineseContent = CHINESE_ZODIAC_CONTENT[lang];
  const CHINESE_ZODIAC_DATA = CHINESE_ZODIAC_BASE.map((base, i) => ({
    ...base,
    animal: tr.chineseZodiacAnimals[i],
    element: lang === 'ko' ? base.elementKey : (WUXING_ELEMENT[base.elementKey]?.[lang] ?? base.elementKey),
    ...chineseContent[i],
  }));

  return (
    <div className="relative min-h-screen">
      {/* 히어로 */}
      <section className="relative overflow-hidden border-b border-[rgba(169,128,63,0.14)]">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 55% 80% at 78% -10%, rgba(169,128,63,0.14) 0%, transparent 60%), radial-gradient(ellipse 45% 60% at 10% 110%, rgba(17,23,48,0.09) 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-5 pb-12 pt-10 sm:pt-16">
          <Link href="/" className="inline-flex min-h-11 items-center gap-2 text-[0.78rem] text-[var(--muted)] transition-colors hover:text-[#a9803f]">
            {tr.backHome}
          </Link>
          <div className="mt-7 grid grid-cols-1 items-end gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <span className="eyebrow">The twelve animals</span>
              <h1 className="mt-5 font-display text-[2.4rem] font-semibold leading-[1.1] text-[var(--ink)] sm:text-[3.4rem]">
                {tr.chineseZodiacPageTitle}
              </h1>
              <p className="mt-5 max-w-xl text-[0.92rem] leading-8 text-[var(--muted)] text-keep-all">
                {tr.chineseZodiacPageSubtitle}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="chip-gold">12 ANIMALS</span>
                <span className="chip-quiet">음양오행</span>
              </div>
            </div>
            <div className="grid grid-cols-6 gap-2" aria-hidden="true">
              {CHINESE_ZODIAC_DATA.slice(0, 12).map(({ emoji, english }) => (
                <span key={english} className="grid aspect-square place-items-center rounded-lg border border-[var(--line)] bg-[#fffdf8] text-[1.1rem] opacity-90">
                  {emoji}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 py-14 text-[var(--ink)]">
        {/* 내 띠 확인 */}
        <section className="mb-16" aria-labelledby="find-zodiac">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <span className="eyebrow">Find yours</span>
              <h2 id="find-zodiac" className="mt-3 font-display text-[1.5rem] font-semibold text-[var(--ink)]">{tr.findMyZodiacTitle}</h2>
            </div>
            <p className="max-w-md text-[0.74rem] leading-5 text-[var(--muted-2)] text-keep-all">{tr.lunarNote}</p>
          </div>
          <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-4 lg:grid-cols-6">
            {CHINESE_ZODIAC_DATA.map(({ animal, emoji, english, years }) => (
              <Link
                key={animal}
                href={`/chinese-zodiac/${english.toLowerCase()}`}
                className="group rounded-2xl border border-[#14172b]/8 bg-white/[0.022] p-3.5 text-center transition-all duration-500 hover:-translate-y-0.5 hover:border-[rgba(169,128,63,0.45)] hover:bg-[rgba(195,161,101,0.06)]"
              >
                <span className="mb-1 block text-[1.5rem] transition-transform duration-300 group-hover:scale-110">{emoji}</span>
                <span className="block text-[0.82rem] font-semibold text-[var(--ink)]/90">{animal}{tr.animalUnit}</span>
                <span className="mt-0.5 block text-[0.6rem] text-[var(--muted-2)]">
                  {years.slice(-3).join(', ')}...
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* 각 띠 상세 */}
        <section aria-labelledby="animals-heading">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <span className="eyebrow">Deep dive</span>
              <h2 id="animals-heading" className="mt-3 font-display text-[1.5rem] font-semibold text-[var(--ink)]">{tr.chineseDetailTitle}</h2>
            </div>
            <span className="text-[0.7rem] uppercase tracking-[0.24em] text-[var(--muted-2)]">01 — 12</span>
          </div>
          <div className="space-y-4">
            {CHINESE_ZODIAC_DATA.map(({ animal, emoji, english, element, years, traits, personality, strengths, weaknesses, compatible, careers }, index) => (
              <article key={animal} className="card-lux overflow-hidden rounded-3xl">
                <div className="grid grid-cols-1 gap-0 lg:grid-cols-[16rem_1fr]">
                  <div className="border-b border-[rgba(169,128,63,0.14)] p-6 lg:border-b-0 lg:border-r">
                    <div className="flex items-start justify-between">
                      <span className="text-[2.4rem] leading-none">{emoji}</span>
                      <span className="font-display text-[0.7rem] italic text-[var(--muted-2)]">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-[1.4rem] font-semibold text-[var(--ink)]">
                      {animal}{tr.animalUnit}
                    </h3>
                    <p className="mt-1 text-[0.64rem] uppercase tracking-[0.3em] text-[var(--gold)]">{english}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      <span className="chip-quiet text-[0.66rem]">{element}</span>
                    </div>
                    <p className="mt-3 text-[0.66rem] leading-5 text-[var(--muted-2)]">
                      {tr.recentYearsLabel} · {years.slice(-4).join(', ')}...
                    </p>
                  </div>

                  <div className="p-6 sm:p-7">
                    <div className="mb-4 flex flex-wrap gap-1.5">
                      {traits.map((trait) => (
                        <span key={trait} className="rounded-full border border-[rgba(169,128,63,0.28)] bg-[rgba(195,161,101,0.08)] px-2.5 py-1 text-[0.68rem] text-[#6f5223]">
                          {trait}
                        </span>
                      ))}
                    </div>
                    <p className="text-[0.84rem] leading-7 text-[var(--muted)] text-keep-all">{personality}</p>

                    <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div className="rounded-xl border border-[rgba(47,107,74,0.28)] bg-[rgba(47,107,74,0.06)] p-4">
                        <h4 className="mb-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-[#2f6b4a]">{stripLeadingEmoji(tr.strengthsLabel)}</h4>
                        <p className="text-[0.76rem] leading-6 text-[var(--muted)]">{strengths}</p>
                      </div>
                      <div className="rounded-xl border border-[rgba(155,58,58,0.3)] bg-[rgba(155,58,58,0.05)] p-4">
                        <h4 className="mb-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-[#9b3a3a]">{stripLeadingEmoji(tr.weaknessesLabel)}</h4>
                        <p className="text-[0.76rem] leading-6 text-[var(--muted)]">{weaknesses}</p>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[rgba(169,128,63,0.14)] pt-4">
                      <div className="flex flex-wrap gap-x-5 gap-y-1 text-[0.72rem] text-[var(--muted-2)]">
                        <span>{tr.compatibleAnimalsLabel} · <strong className="font-medium text-[var(--ink)]">{compatible}</strong></span>
                        <span>{tr.careersLabel} · <strong className="font-medium text-[var(--ink)]">{careers}</strong></span>
                      </div>
                      <Link
                        href={`/chinese-zodiac/${english.toLowerCase()}`}
                        className="group inline-flex min-h-9 items-center gap-1.5 text-[0.74rem] font-semibold text-[var(--gold)] transition-colors hover:text-[#14172b]"
                      >
                        상세 가이드
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-14 flex flex-col items-center gap-4 rounded-[0.6rem] border border-[rgba(226,205,162,0.2)] bg-[linear-gradient(160deg,#141a35,#0f1529)] px-6 py-10 text-center">
          <span className="eyebrow eyebrow-light eyebrow-center">Your reading</span>
          <Link href="/" className="btn-gold-warm text-[0.9rem]">
            {tr.chineseZodiacCTA} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
