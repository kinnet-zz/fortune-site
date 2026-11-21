'use client';

import Link from 'next/link';
import { useLang } from '@/lib/useLang';
import { t } from '@/lib/i18n';
import { ZODIAC_CONTENT } from '@/lib/zodiac-data';
import ConstellationIcon, { ZODIAC_SLUGS, type ZodiacSlug } from '@/components/Constellation';
import { stripLeadingEmoji } from '@/lib/text';

const ZODIAC_BASE = [
  { english: 'Aries', symbol: '♈', period: '3/21 ~ 4/19', elementKey: '불 🔥', color: '#ef4444' },
  { english: 'Taurus', symbol: '♉', period: '4/20 ~ 5/20', elementKey: '땅 🌍', color: '#22c55e' },
  { english: 'Gemini', symbol: '♊', period: '5/21 ~ 6/21', elementKey: '공기 💨', color: '#eab308' },
  { english: 'Cancer', symbol: '♋', period: '6/22 ~ 7/22', elementKey: '물 💧', color: '#38bdf8' },
  { english: 'Leo', symbol: '♌', period: '7/23 ~ 8/22', elementKey: '불 🔥', color: '#f97316' },
  { english: 'Virgo', symbol: '♍', period: '8/23 ~ 9/22', elementKey: '땅 🌍', color: '#84cc16' },
  { english: 'Libra', symbol: '♎', period: '9/23 ~ 10/23', elementKey: '공기 💨', color: '#ec4899' },
  { english: 'Scorpio', symbol: '♏', period: '10/24 ~ 11/22', elementKey: '물 💧', color: '#7c3aed' },
  { english: 'Sagittarius', symbol: '♐', period: '11/23 ~ 12/21', elementKey: '불 🔥', color: '#a5b4cf' },
  { english: 'Capricorn', symbol: '♑', period: '12/22 ~ 1/19', elementKey: '땅 🌍', color: '#8b94a3' },
  { english: 'Aquarius', symbol: '♒', period: '1/20 ~ 2/18', elementKey: '공기 💨', color: '#38bdf8' },
  { english: 'Pisces', symbol: '♓', period: '2/19 ~ 3/20', elementKey: '물 💧', color: '#a78bfa' },
];

const ELEMENT_INDEX: Record<string, number> = {
  '불 🔥': 0, '땅 🌍': 1, '공기 💨': 2, '물 💧': 3,
};

const ELEMENT_THEME: Record<string, { color: string; border: string; label: string }> = {
  '불 🔥': { color: 'rgba(239,68,68,0.10)', border: 'rgba(239,68,68,0.28)', label: '#9b3a3a' },
  'Fire 🔥': { color: 'rgba(239,68,68,0.10)', border: 'rgba(239,68,68,0.28)', label: '#9b3a3a' },
  '火 🔥': { color: 'rgba(239,68,68,0.10)', border: 'rgba(239,68,68,0.28)', label: '#9b3a3a' },
  '땅 🌍': { color: 'rgba(34,197,94,0.10)', border: 'rgba(34,197,94,0.26)', label: '#2f6b4a' },
  'Earth 🌍': { color: 'rgba(34,197,94,0.10)', border: 'rgba(34,197,94,0.26)', label: '#2f6b4a' },
  '土 🌍': { color: 'rgba(34,197,94,0.10)', border: 'rgba(34,197,94,0.26)', label: '#2f6b4a' },
  '地 🌍': { color: 'rgba(34,197,94,0.10)', border: 'rgba(34,197,94,0.26)', label: '#2f6b4a' },
  '공기 💨': { color: 'rgba(234,179,8,0.10)', border: 'rgba(234,179,8,0.26)', label: '#e6ecf5' },
  'Air 💨': { color: 'rgba(234,179,8,0.10)', border: 'rgba(234,179,8,0.26)', label: '#e6ecf5' },
  '风 💨': { color: 'rgba(234,179,8,0.10)', border: 'rgba(234,179,8,0.26)', label: '#e6ecf5' },
  '風 💨': { color: 'rgba(234,179,8,0.10)', border: 'rgba(234,179,8,0.26)', label: '#e6ecf5' },
  '물 💧': { color: 'rgba(56,189,248,0.10)', border: 'rgba(56,189,248,0.26)', label: '#33507f' },
  'Water 💧': { color: 'rgba(56,189,248,0.10)', border: 'rgba(56,189,248,0.26)', label: '#33507f' },
  '水 💧': { color: 'rgba(56,189,248,0.10)', border: 'rgba(56,189,248,0.26)', label: '#33507f' },
};

const ELEMENT_SIGN_MAP: Record<string, string[]> = {
  '불 🔥': ['aries','leo','sagittarius'], 'Fire 🔥': ['aries','leo','sagittarius'], '火 🔥': ['aries','leo','sagittarius'],
  '땅 🌍': ['taurus','virgo','capricorn'], 'Earth 🌍': ['taurus','virgo','capricorn'], '土 🌍': ['taurus','virgo','capricorn'], '地 🌍': ['taurus','virgo','capricorn'],
  '공기 💨': ['gemini','libra','aquarius'], 'Air 💨': ['gemini','libra','aquarius'], '风 💨': ['gemini','libra','aquarius'], '風 💨': ['gemini','libra','aquarius'],
  '물 💧': ['cancer','scorpio','pisces'], 'Water 💧': ['cancer','scorpio','pisces'], '水 💧': ['cancer','scorpio','pisces'],
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
    <div className="relative min-h-screen">
      {/* 히어로 */}
      <section className="relative overflow-hidden border-b border-[var(--line)]">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{ background: 'radial-gradient(ellipse 60% 80% at 78% -10%, rgba(0,0,0,0.10) 0%, transparent 62%), radial-gradient(ellipse 40% 60% at 12% 110%, rgba(206,220,238,0.12) 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-5 pb-14 pt-10 sm:pt-16">
          <Link href="/" className="inline-flex min-h-11 items-center gap-2 text-[0.78rem] text-[var(--muted)] transition-colors hover:text-[#e6ecf5]">
            <span aria-hidden="true">←</span> 홈으로
          </Link>
          <div className="mt-8 grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="eyebrow">The zodiac encyclopedia</span>
              <h1 className="mt-5 font-display text-[2.4rem] font-semibold leading-[1.12] text-[var(--ink)] sm:text-[3.4rem]">
                열두 개의 별자리,
                <br />
                <span className="gold-ink italic">열두 가지 삶의 결</span>
              </h1>
              <p className="mt-6 max-w-xl text-[0.92rem] leading-8 text-[var(--muted)] text-keep-all">
                {tr.zodiacPageSubtitle}
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                <span className="chip-gold">12 SIGNS</span>
                <span className="chip-quiet">4 ELEMENTS</span>
                <span className="chip-quiet">4 LANGUAGES</span>
              </div>
            </div>

            <div className="relative hidden h-56 items-center justify-center lg:flex" aria-hidden="true">
              <div className="absolute h-52 w-52 animate-ring rounded-full border border-[var(--line)]" />
              <div className="absolute h-40 w-40 rounded-full border border-dashed border-[rgba(164,149,255,0.18)]" />
              <div className="absolute inset-0 grid grid-cols-4 place-items-center opacity-80">
                {(['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio'] as ZodiacSlug[]).map((slug) => (
                  <ConstellationIcon key={slug} slug={slug} size={34} className="text-[var(--gold)]" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 py-14 text-[var(--ink)]">
        {/* 내 별자리 확인하기 */}
        <section className="mb-16" aria-labelledby="find-zodiac">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <span className="eyebrow">Find yours</span>
              <h2 id="find-zodiac" className="mt-3 font-display text-[1.5rem] font-semibold text-[var(--ink)]">내 별자리 확인하기</h2>
            </div>
            <p className="text-[0.74rem] text-[var(--muted-2)]">생일을 눌러 상세 가이드로 이동하세요</p>
          </div>
          <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-4 lg:grid-cols-6">
            {ZODIAC_DATA.map(({ sign, english, period }, index) => (
              <Link
                key={english}
                href={`/zodiac/${english.toLowerCase()}`}
                className="zodiac-card group rounded-2xl border border-[var(--line)] bg-[#101620] p-3.5 text-center transition-all duration-500 hover:-translate-y-0.5 hover:border-[rgba(206,220,238,0.45)] hover:bg-[rgba(206,220,238,0.06)]"
              >
                <span className="mx-auto block w-fit text-[var(--ink)]">
                  <ConstellationIcon slug={ZODIAC_SLUGS[index]} size={44} strokeWidth={1.2} />
                </span>
                <span className="mt-2 block text-[0.82rem] font-semibold text-[var(--ink)]">{sign}</span>
                <span className="mt-0.5 block text-[0.62rem] tracking-[0.06em] text-[var(--gold)]">{period}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* 원소 섹션 */}
        <section className="mb-16" aria-labelledby="elements-heading">
          <div className="mb-5">
            <span className="eyebrow">Four elements</span>
            <h2 id="elements-heading" className="mt-3 font-display text-[1.5rem] font-semibold text-[var(--ink)]">{tr.elementsTitle}</h2>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {tr.elementItems.map(({ element, signs, desc }) => {
              const signLinks = ELEMENT_SIGN_MAP[element] ?? [];
              const signNames = signs.split(/[,，、]/).map(s => s.trim());
              const theme = ELEMENT_THEME[element] ?? { color: 'rgba(0,0,0,0.03)', border: 'rgba(0,0,0,0.08)', label: '#f7eeda' };
              return (
                <div key={element} className="rounded-2xl p-5" style={{ background: theme.color, border: `1px solid ${theme.border}` }}>
                  <div className="mb-3 text-[0.95rem] font-semibold" style={{ color: theme.label }}>{element}</div>
                  <div className="mb-2 flex flex-wrap gap-x-2 gap-y-1">
                    {signNames.map((name, i) => (
                      <Link
                        key={name}
                        href={`/zodiac/${signLinks[i] ?? name.toLowerCase()}`}
                        className="text-[0.74rem] text-[var(--ink-soft)] underline-offset-4 transition-colors hover:text-[#f2f0ea] hover:underline"
                      >
                        {name}
                      </Link>
                    ))}
                  </div>
                  <p className="text-[0.7rem] leading-5 text-[var(--muted-2)]">{desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 별자리 상세 */}
        <section aria-labelledby="signs-heading">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <span className="eyebrow">Deep dive</span>
              <h2 id="signs-heading" className="mt-3 font-display text-[1.5rem] font-semibold text-[var(--ink)]">{tr.zodiacDetailTitle}</h2>
            </div>
            <span className="text-[0.7rem] uppercase tracking-[0.24em] text-[var(--muted-2)]">01 — 12</span>
          </div>

          <div className="space-y-4">
            {ZODIAC_DATA.map(({ sign, english, period, element, planet, traits, personality, love, money, compatible, lucky }, index) => (
              <article key={sign} className="card-lux overflow-hidden rounded-3xl">
                <div className="grid grid-cols-1 gap-0 lg:grid-cols-[16rem_1fr]">
                  {/* 좌측 아이덴티티 */}
                  <div className="relative border-b border-[var(--line)] p-6 lg:border-b-0 lg:border-r">
                    <div className="flex items-start justify-between">
                      <span className="text-[var(--ink)]">
                        <ConstellationIcon slug={ZODIAC_SLUGS[index]} size={58} strokeWidth={1.1} />
                      </span>
                      <span className="font-display text-[0.7rem] italic text-[var(--muted-2)]">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-[1.5rem] font-semibold leading-tight text-[var(--ink)]">
                      {sign}
                    </h3>
                    <p className="mt-1 text-[0.64rem] uppercase tracking-[0.3em] text-[var(--gold)]">{english}</p>
                    <p className="mt-3 text-[0.78rem] tracking-[0.08em] text-[var(--gold)]">{period}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      <span className="chip-quiet text-[0.66rem]">{element}</span>
                      <span className="chip-quiet text-[0.66rem]">{planet}</span>
                    </div>
                  </div>

                  {/* 우측 본문 */}
                  <div className="p-6 sm:p-7">
                    <div className="mb-5 flex flex-wrap gap-1.5">
                      {traits.map((trait) => (
                        <span key={trait} className="rounded-full border border-[rgba(206,220,238,0.28)] bg-[rgba(206,220,238,0.08)] px-2.5 py-1 text-[0.68rem] text-[#e6ecf5]">
                          {trait}
                        </span>
                      ))}
                    </div>
                    <p className="text-[0.84rem] leading-7 text-[var(--muted)] text-keep-all">{personality}</p>

                    <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div className="rounded-xl border border-[rgba(138,74,94,0.3)] bg-[rgba(138,74,94,0.05)] p-4">
                        <h4 className="mb-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-[#8a4a5e]">{stripLeadingEmoji(tr.loveTrendLabel)}</h4>
                        <p className="text-[0.76rem] leading-6 text-[var(--muted)] text-keep-all">{love}</p>
                      </div>
                      <div className="rounded-xl border border-[rgba(47,107,74,0.28)] bg-[rgba(47,107,74,0.06)] p-4">
                        <h4 className="mb-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-[#2f6b4a]">{stripLeadingEmoji(tr.moneyTrendLabel)}</h4>
                        <p className="text-[0.76rem] leading-6 text-[var(--muted)] text-keep-all">{money}</p>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--line)] pt-4">
                      <div className="flex flex-wrap gap-x-5 gap-y-1 text-[0.72rem] text-[var(--muted-2)]">
                        <span>잘 맞는 별자리 · <strong className="font-medium text-[var(--ink)]">{compatible}</strong></span>
                        <span>행운 · <strong className="font-medium text-[var(--ink)]">{lucky}</strong></span>
                      </div>
                      <Link
                        href={`/zodiac/${english.toLowerCase()}`}
                        className="group inline-flex min-h-9 items-center gap-1.5 text-[0.74rem] font-semibold text-[var(--ink)] transition-colors hover:text-[#f2f0ea]"
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

        <div className="mt-14 flex flex-col items-center gap-4 rounded-2xl border border-[rgba(184,199,220,0.14)] bg-[#121722] px-6 py-10 text-center">
          <span className="eyebrow eyebrow-light eyebrow-center">Your reading</span>
          <p className="text-[1.3rem] font-bold tracking-[-0.03em] text-[#f2f0ea]">오늘 내 별자리의 운세가 궁금하다면</p>
          <Link href="/" className="btn-gold-warm mt-1 text-[0.9rem]">
            오늘의 운세 무료로 보기 <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
