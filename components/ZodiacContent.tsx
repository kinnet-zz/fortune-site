'use client';

import Link from 'next/link';
import { useLang } from '@/lib/useLang';
import { t } from '@/lib/i18n';
import { ZODIAC_CONTENT } from '@/lib/zodiac-data';

const ZODIAC_BASE = [
  { english: 'Aries', symbol: '♈', period: '3/21 ~ 4/19', elementKey: '불 🔥', color: '#ef4444' },
  { english: 'Taurus', symbol: '♉', period: '4/20 ~ 5/20', elementKey: '땅 🌍', color: '#22c55e' },
  { english: 'Gemini', symbol: '♊', period: '5/21 ~ 6/21', elementKey: '공기 💨', color: '#eab308' },
  { english: 'Cancer', symbol: '♋', period: '6/22 ~ 7/22', elementKey: '물 💧', color: '#38bdf8' },
  { english: 'Leo', symbol: '♌', period: '7/23 ~ 8/22', elementKey: '불 🔥', color: '#f97316' },
  { english: 'Virgo', symbol: '♍', period: '8/23 ~ 9/22', elementKey: '땅 🌍', color: '#84cc16' },
  { english: 'Libra', symbol: '♎', period: '9/23 ~ 10/23', elementKey: '공기 💨', color: '#ec4899' },
  { english: 'Scorpio', symbol: '♏', period: '10/24 ~ 11/22', elementKey: '물 💧', color: '#7c3aed' },
  { english: 'Sagittarius', symbol: '♐', period: '11/23 ~ 12/21', elementKey: '불 🔥', color: '#6366f1' },
  { english: 'Capricorn', symbol: '♑', period: '12/22 ~ 1/19', elementKey: '땅 🌍', color: '#94a3b8' },
  { english: 'Aquarius', symbol: '♒', period: '1/20 ~ 2/18', elementKey: '공기 💨', color: '#38bdf8' },
  { english: 'Pisces', symbol: '♓', period: '2/19 ~ 3/20', elementKey: '물 💧', color: '#a78bfa' },
];

const ELEMENT_INDEX: Record<string, number> = {
  '불 🔥': 0, '땅 🌍': 1, '공기 💨': 2, '물 💧': 3,
};

const bgStyle = {
  background: 'linear-gradient(160deg, #050520 0%, #0a0a2e 30%, #130a2e 60%, #1a0a3e 100%)',
  minHeight: '100vh',
};

export default function ZodiacContent() {
  const { lang } = useLang();
  const tr = t(lang);
  const zodiacContent = ZODIAC_CONTENT[lang];
  const ZODIAC_DATA = ZODIAC_BASE.map((base, i) => ({
    ...base,
    sign: tr.zodiacSigns[i],
    element: tr.elementItems[ELEMENT_INDEX[base.elementKey]]?.element ?? base.elementKey,
    planet: tr.zodiacPlanets[i],
    ...zodiacContent[i],
  }));

  return (
    <div style={bgStyle}>
      <div className="max-w-4xl mx-auto px-6 py-16 text-white/80">
        <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm mb-8 inline-block">
          {tr.backHome}
        </Link>

        <header className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-white mb-3">{tr.zodiacPageTitle}</h1>
          <p className="text-white/50 text-base max-w-xl mx-auto leading-relaxed">{tr.zodiacPageSubtitle}</p>
        </header>

        {/* 원소 섹션 */}
        <section className="mb-12" aria-labelledby="elements-heading">
          <h2 id="elements-heading" className="text-xl font-bold text-white mb-4">{tr.elementsTitle}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {tr.elementItems.map(({ element, signs, desc }) => {
              const colorMap: Record<string, { color: string; border: string }> = {
                '불 🔥': { color: 'rgba(239,68,68,0.15)', border: 'rgba(239,68,68,0.3)' },
                'Fire 🔥': { color: 'rgba(239,68,68,0.15)', border: 'rgba(239,68,68,0.3)' },
                '火 🔥': { color: 'rgba(239,68,68,0.15)', border: 'rgba(239,68,68,0.3)' },
                '땅 🌍': { color: 'rgba(34,197,94,0.15)', border: 'rgba(34,197,94,0.3)' },
                'Earth 🌍': { color: 'rgba(34,197,94,0.15)', border: 'rgba(34,197,94,0.3)' },
                '土 🌍': { color: 'rgba(34,197,94,0.15)', border: 'rgba(34,197,94,0.3)' },
                '地 🌍': { color: 'rgba(34,197,94,0.15)', border: 'rgba(34,197,94,0.3)' },
                '공기 💨': { color: 'rgba(234,179,8,0.15)', border: 'rgba(234,179,8,0.3)' },
                'Air 💨': { color: 'rgba(234,179,8,0.15)', border: 'rgba(234,179,8,0.3)' },
                '风 💨': { color: 'rgba(234,179,8,0.15)', border: 'rgba(234,179,8,0.3)' },
                '風 💨': { color: 'rgba(234,179,8,0.15)', border: 'rgba(234,179,8,0.3)' },
                '물 💧': { color: 'rgba(56,189,248,0.15)', border: 'rgba(56,189,248,0.3)' },
                'Water 💧': { color: 'rgba(56,189,248,0.15)', border: 'rgba(56,189,248,0.3)' },
                '水 💧': { color: 'rgba(56,189,248,0.15)', border: 'rgba(56,189,248,0.3)' },
              };
              const style = colorMap[element] ?? { color: 'rgba(255,255,255,0.05)', border: 'rgba(255,255,255,0.1)' };
              return (
                <div key={element} className="rounded-xl p-4 text-center text-sm" style={{ background: style.color, border: `1px solid ${style.border}` }}>
                  <div className="text-lg mb-1">{element}</div>
                  <div className="text-white/50 text-xs mb-1">{signs}</div>
                  <div className="text-white/35 text-xs">{desc}</div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 별자리 상세 */}
        <section aria-labelledby="signs-heading">
          <h2 id="signs-heading" className="text-xl font-bold text-white mb-6">{tr.zodiacDetailTitle}</h2>
          <div className="space-y-6">
            {ZODIAC_DATA.map(({ sign, english, symbol, period, element, planet, traits, personality, love, money, compatible, lucky }) => (
              <article key={sign} className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="px-6 py-5 flex flex-wrap items-center gap-4" style={{ background: 'rgba(255,255,255,0.04)' }}>
                  <span className="text-4xl">{symbol}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-bold text-lg">{sign} <span className="text-white/40 font-normal text-base">({english})</span></h3>
                    <p className="text-purple-300/70 text-sm mt-0.5">{period}</p>
                  </div>
                  <div className="flex gap-3 text-xs">
                    <span className="px-3 py-1 rounded-full" style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.5)' }}>{element}</span>
                    <span className="px-3 py-1 rounded-full" style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.5)' }}>{planet}</span>
                  </div>
                </div>
                <div className="px-6 py-5 space-y-5" style={{ background: 'rgba(255,255,255,0.02)' }}>
                  <div>
                    <h4 className="text-white/50 text-xs uppercase tracking-widest font-medium mb-2">{tr.coreTraitsLabel}</h4>
                    <div className="flex flex-wrap gap-2">
                      {traits.map((trait) => (
                        <span key={trait} className="px-3 py-1 rounded-full text-xs text-white/70" style={{ background: 'rgba(124,58,237,0.2)', border: '1px solid rgba(124,58,237,0.3)' }}>{trait}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white/50 text-xs uppercase tracking-widest font-medium mb-2">{tr.personalityLabel}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{personality}</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-xl p-4" style={{ background: 'rgba(236,72,153,0.08)', border: '1px solid rgba(236,72,153,0.15)' }}>
                      <h4 className="text-pink-300/70 text-xs font-semibold mb-2">{tr.loveTrendLabel}</h4>
                      <p className="text-white/50 text-xs leading-relaxed">{love}</p>
                    </div>
                    <div className="rounded-xl p-4" style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)' }}>
                      <h4 className="text-green-300/70 text-xs font-semibold mb-2">{tr.moneyTrendLabel}</h4>
                      <p className="text-white/50 text-xs leading-relaxed">{money}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 text-xs text-white/40">
                    <span>🤝 {tr.compatibleSignsLabel}: <strong className="text-white/60">{compatible}</strong></span>
                    <span>🍀 {tr.luckyLabel}: <strong className="text-white/60">{lucky}</strong></span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-12 text-center">
          <Link href="/" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white text-sm transition-all duration-300 hover:scale-[1.02]" style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #9333ea 50%, #6366f1 100%)' }}>
            {tr.zodiacCTA}
          </Link>
        </div>
      </div>
    </div>
  );
}
