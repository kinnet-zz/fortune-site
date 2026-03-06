'use client';

import Link from 'next/link';
import { useLang } from '@/lib/useLang';
import { t } from '@/lib/i18n';
import { CHINESE_ZODIAC_CONTENT } from '@/lib/chinese-zodiac-data';

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

const bgStyle = {
  background: 'linear-gradient(160deg, #050520 0%, #0a0a2e 30%, #130a2e 60%, #1a0a3e 100%)',
  minHeight: '100vh',
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
    <div style={bgStyle}>
      <div className="max-w-4xl mx-auto px-6 py-16 text-white/80">
        <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm mb-8 inline-block">
          {tr.backHome}
        </Link>

        <header className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-white mb-3">{tr.chineseZodiacPageTitle}</h1>
          <p className="text-white/50 text-base max-w-xl mx-auto leading-relaxed">{tr.chineseZodiacPageSubtitle}</p>
        </header>

        {/* 내 띠 확인 */}
        <section className="mb-12" aria-labelledby="find-zodiac">
          <h2 id="find-zodiac" className="text-xl font-bold text-white mb-4">{tr.findMyZodiacTitle}</h2>
          <div
            className="rounded-2xl p-6 text-sm leading-relaxed"
            style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)' }}
          >
            <p className="text-white/60 mb-4">{tr.lunarNote}</p>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {CHINESE_ZODIAC_DATA.map(({ animal, emoji, years }) => (
                <div
                  key={animal}
                  className="text-center rounded-xl p-2"
                  style={{ background: 'rgba(255,255,255,0.04)' }}
                >
                  <div className="text-2xl mb-1">{emoji}</div>
                  <div className="text-white/70 text-xs font-semibold">{animal}{tr.animalUnit}</div>
                  <div className="text-white/30 text-xs mt-1">
                    {years.slice(-3).join(', ')}...
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 각 띠 상세 */}
        <section aria-labelledby="animals-heading">
          <h2 id="animals-heading" className="text-xl font-bold text-white mb-6">{tr.chineseDetailTitle}</h2>
          <div className="space-y-6">
            {CHINESE_ZODIAC_DATA.map(({ animal, emoji, english, element, years, traits, personality, strengths, weaknesses, compatible, careers }) => (
              <article
                key={animal}
                className="rounded-2xl overflow-hidden"
                style={{ border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div
                  className="px-6 py-5 flex flex-wrap items-center gap-4"
                  style={{ background: 'rgba(255,255,255,0.04)' }}
                >
                  <span className="text-4xl">{emoji}</span>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg">{animal}{tr.animalUnit} <span className="text-white/40 font-normal text-base">({english})</span></h3>
                    <p className="text-purple-300/70 text-sm mt-0.5">
                      {element} · {tr.recentYearsLabel}: {years.slice(-4).join(', ')}...
                    </p>
                  </div>
                </div>

                <div className="px-6 py-5 space-y-4" style={{ background: 'rgba(255,255,255,0.02)' }}>
                  <div>
                    <h4 className="text-white/50 text-xs uppercase tracking-widest font-medium mb-2">{tr.coreTraitsLabel}</h4>
                    <div className="flex flex-wrap gap-2">
                      {traits.map((trait) => (
                        <span
                          key={trait}
                          className="px-3 py-1 rounded-full text-xs text-white/70"
                          style={{ background: 'rgba(124,58,237,0.2)', border: '1px solid rgba(124,58,237,0.3)' }}
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white/50 text-xs uppercase tracking-widest font-medium mb-2">{tr.personalityLabel}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{personality}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div
                      className="rounded-xl p-4"
                      style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)' }}
                    >
                      <h4 className="text-green-300/70 text-xs font-semibold mb-2">{tr.strengthsLabel}</h4>
                      <p className="text-white/50 text-xs">{strengths}</p>
                    </div>
                    <div
                      className="rounded-xl p-4"
                      style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.15)' }}
                    >
                      <h4 className="text-red-300/70 text-xs font-semibold mb-2">{tr.weaknessesLabel}</h4>
                      <p className="text-white/50 text-xs">{weaknesses}</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 text-xs text-white/40">
                    <span>🤝 {tr.compatibleAnimalsLabel}: <strong className="text-white/60">{compatible}</strong></span>
                    <span className="hidden sm:inline text-white/20">·</span>
                    <span>💼 {tr.careersLabel}: <strong className="text-white/60">{careers}</strong></span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white text-sm transition-all duration-300 hover:scale-[1.02]"
            style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #9333ea 50%, #6366f1 100%)' }}
          >
            {tr.chineseZodiacCTA}
          </Link>
        </div>
      </div>
    </div>
  );
}
