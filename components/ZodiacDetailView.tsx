'use client';

import Link from 'next/link';
import ConstellationIcon from '@/components/Constellation';
import { useLang } from '@/lib/useLang';
import { t } from '@/lib/i18n';
import { siteCopy } from '@/lib/site-copy';
import type { ZodiacEntry } from '@/lib/zodiac-data';
import type { Lang } from '@/lib/i18n';

export interface ZodiacDetailKo {
  slug: string;
  name: string;
  english: string;
  symbol: string;
  period: string;
  element: string;
  planet: string;
  color: string;
  traits: string[];
  personality: string;
  love: string;
  money: string;
  career: string;
  history: string;
  health: string;
  compatible: string;
  incompatible: string;
  lucky: string;
  strengths: string[];
  weaknesses: string[];
  famous: string;
}

const OTHER_SIGNS_LABEL: Record<Lang, string> = {
  ko: '다른 별자리 보기',
  en: 'Other signs',
  zh: '其他星座',
  ja: '他の星座',
};

const PERIODS = [
  '3/21 – 4/19',
  '4/20 – 5/20',
  '5/21 – 6/21',
  '6/22 – 7/22',
  '7/23 – 8/22',
  '8/23 – 9/22',
  '9/23 – 10/23',
  '10/24 – 11/22',
  '11/23 – 12/21',
  '12/22 – 1/19',
  '1/20 – 2/18',
  '2/19 – 3/20',
];

// Element index in t(lang).elementItems for each sign (Aries → Pisces)
const ELEMENT_INDEX = [0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3];

export default function ZodiacDetailView({
  data,
  localized,
  index,
  otherSigns,
}: {
  data: ZodiacDetailKo;
  localized: Record<Lang, ZodiacEntry>;
  index: number;
  otherSigns: { slug: string; name: Record<Lang, string> }[];
}) {
  const { lang } = useLang();
  const tr = t(lang);
  const copy = siteCopy(lang);
  const isKo = lang === 'ko';

  const entry = localized[lang];
  const displayName = tr.zodiacSigns[index];
  const period = isKo ? data.period : PERIODS[index];
  const element = isKo ? data.element : tr.elementItems[ELEMENT_INDEX[index]].element;
  const planet = isKo ? data.planet : tr.zodiacPlanets[index];
  const traits = isKo ? data.traits : entry.traits;
  const personality = isKo ? data.personality : entry.personality;
  const love = isKo ? data.love : entry.love;
  const money = isKo ? data.money : entry.money;
  const compatible = isKo ? data.compatible : entry.compatible;
  const lucky = isKo ? data.lucky : entry.lucky;

  return (
    <div className="relative min-h-screen">
      {/* 히어로 */}
      <section className="relative overflow-hidden border-b border-[var(--line)]">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 55% 80% at 20% -10%, rgba(0,0,0,0.09) 0%, transparent 62%), radial-gradient(ellipse 40% 60% at 90% 110%, rgba(206,220,238,0.12) 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-4xl px-5 pb-12 pt-10 sm:pt-14">
          <Link href="/zodiac" className="inline-flex min-h-11 items-center gap-2 text-[0.78rem] text-[var(--muted)] transition-colors hover:text-[#e6ecf5]">
            {tr.backHome}
          </Link>

          <div className="mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="eyebrow">{data.english} · {period}</span>
              <h1 className="mt-5 font-display text-[2.6rem] font-semibold leading-[1.08] text-[var(--ink)] sm:text-[4rem]">
                {displayName}
              </h1>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="chip-gold">{element}</span>
                <span className="chip-quiet">{tr.zodiacPlanets ? `${planet}` : planet}</span>
                <span className="chip-quiet">{period}</span>
              </div>
            </div>
            <div className="text-[var(--ink)]">
              <ConstellationIcon slug={data.slug} size={132} strokeWidth={0.9} animated />
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-5 py-12 text-[var(--ink-soft)]">
        {/* 핵심 특성 */}
        <section className="mb-10">
          <div className="mb-4 flex flex-wrap gap-2">
            {traits.map((trait) => (
              <span key={trait} className="rounded-full border border-[rgba(206,220,238,0.28)] bg-[rgba(206,220,238,0.08)] px-3 py-1.5 text-[0.74rem] text-[#e6ecf5]">
                {trait}
              </span>
            ))}
          </div>
          <p className="font-display text-[1.05rem] leading-8 text-[var(--ink)] text-keep-all">
            {personality}
          </p>
        </section>

        <div className="mb-10 h-px bg-[linear-gradient(90deg,transparent,rgba(206,220,238,0.4),transparent)]" />

        {/* 강점 & 약점 (한국어 상세에만 존재) */}
        {isKo && (
          <div className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <section className="rounded-2xl border border-[rgba(47,107,74,0.3)] bg-[rgba(47,107,74,0.06)] p-5">
              <h2 className="mb-3 border-0 pt-0 text-[0.64rem] font-semibold uppercase tracking-[0.26em] text-[#2f6b4a]">Strengths · 강점</h2>
              <ul className="space-y-1.5">
                {data.strengths.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-[0.82rem] text-[var(--muted)]">
                    <span className="h-1 w-1 rotate-45 bg-[#2f6b4a]" aria-hidden="true" /> {s}
                  </li>
                ))}
              </ul>
            </section>
            <section className="rounded-2xl border border-[rgba(155,58,58,0.3)] bg-[rgba(155,58,58,0.05)] p-5">
              <h2 className="mb-3 border-0 pt-0 text-[0.64rem] font-semibold uppercase tracking-[0.26em] text-[#9b3a3a]">Watch · 약점</h2>
              <ul className="space-y-1.5">
                {data.weaknesses.map((w) => (
                  <li key={w} className="flex items-center gap-2 text-[0.82rem] text-[var(--muted)]">
                    <span className="h-1 w-1 rotate-45 bg-[#9b3a3a]" aria-hidden="true" /> {w}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        )}

        {/* 연애 / 금전 / 직업 */}
        <div className="space-y-8">
          {[
            { index: '01', title: isKo ? '연애운' : tr.loveTrendLabel, content: love, accent: '#8a4a5e' },
            { index: '02', title: isKo ? '금전운' : tr.moneyTrendLabel, content: money, accent: '#2f6b4a' },
            ...(isKo ? [{ index: '03', title: '직업운', content: data.career, accent: '#39406e' }] : []),
          ].map(({ index: no, title, content, accent }) => (
            <section key={title} className="border-t border-[var(--line)] pt-6">
              <div className="mb-3 flex items-baseline gap-3">
                <span className="font-display text-[0.8rem] italic tracking-[0.18em]" style={{ color: accent }}>{no}</span>
                <h2 className="border-0 pt-0 font-display text-[1.15rem] font-semibold text-[var(--ink)]">{title}</h2>
              </div>
              <p className="text-[0.86rem] leading-8 text-[var(--muted)] text-keep-all">{content}</p>
            </section>
          ))}

          {isKo && [
            { index: '04', title: '신화와 역사', content: data.history, accent: '#4b4680' },
            { index: '05', title: '건강 & 웰니스', content: data.health, accent: '#2c6b63' },
          ].map(({ index: no, title, content, accent }) => (
            <section key={title} className="border-t border-[var(--line)] pt-6">
              <div className="mb-3 flex items-baseline gap-3">
                <span className="font-display text-[0.8rem] italic tracking-[0.18em]" style={{ color: accent }}>{no}</span>
                <h2 className="border-0 pt-0 font-display text-[1.15rem] font-semibold text-[var(--ink)]">{title}</h2>
              </div>
              <p className="text-[0.86rem] leading-8 text-[var(--muted)] text-keep-all">{content}</p>
            </section>
          ))}
        </div>

        {/* 궁합 */}
        <section className="mt-10 rounded-[0.4rem] border border-[var(--line)] bg-[#101620] p-6">
          <h2 className="mb-4 border-0 pt-0 font-display text-[1.1rem] font-semibold text-[var(--ink)]">
            {isKo ? '궁합' : copy.baseCompatible}
          </h2>
          <div className={`grid grid-cols-1 gap-4 ${isKo ? 'sm:grid-cols-2' : ''}`}>
            <div className="rounded-xl border border-[rgba(47,107,74,0.28)] bg-[rgba(47,107,74,0.06)] p-4">
              {isKo && (
                <p className="mb-1 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#2f6b4a]">잘 맞는 별자리</p>
              )}
              <p className="text-[0.86rem] text-[var(--ink)]">{compatible}</p>
            </div>
            {isKo && (
              <div className="rounded-xl border border-[rgba(155,58,58,0.3)] bg-[rgba(155,58,58,0.05)] p-4">
                <p className="mb-1 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#9b3a3a]">주의할 별자리</p>
                <p className="text-[0.86rem] text-[var(--ink)]">{data.incompatible}</p>
              </div>
            )}
          </div>
        </section>

        {/* 행운 & 유명인 */}
        <section className="mt-4 rounded-[0.4rem] border border-[rgba(206,220,238,0.35)] bg-[rgba(206,220,238,0.08)] p-6">
          <h2 className="mb-3 border-0 pt-0 font-display text-[1.1rem] font-semibold text-[var(--ink)]">
            {isKo ? '행운의 상징' : tr.luckyLabel}
          </h2>
          <p className="mb-4 text-[0.86rem] text-[var(--ink-soft)]">{lucky}</p>
          {isKo && (
            <>
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">유명한 {data.name}</p>
              <p className="mt-1.5 text-[0.82rem] text-[var(--muted)]">{data.famous}</p>
            </>
          )}
        </section>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-[rgba(184,199,220,0.14)] bg-[#121722] px-6 py-10 text-center">
          <span className="eyebrow eyebrow-light eyebrow-center">Today</span>
          <p className="text-[1.2rem] font-bold tracking-[-0.03em] text-[#f2f0ea]">
            {isKo ? `오늘 ${data.name}의 운세가 궁금하다면?` : copy.zodiac.ctaTitle}
          </p>
          <Link href="/" className="btn-gold-warm text-[0.88rem]">
            {tr.zodiacCTA} <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* 다른 별자리 링크 */}
        <nav className="mt-12">
          <h3 className="mb-4 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[var(--muted-2)]">
            {OTHER_SIGNS_LABEL[lang]}
          </h3>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {otherSigns
              .filter((s) => s.slug !== data.slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/zodiac/${s.slug}`}
                  className="group flex items-center gap-2 rounded-xl border border-[var(--line)] bg-[#101620] px-3 py-2.5 transition-all hover:border-[rgba(206,220,238,0.45)] hover:bg-[rgba(206,220,238,0.06)]"
                >
                  <span className="text-[var(--ink)]" aria-hidden="true">
                    <ConstellationIcon slug={s.slug} size={22} strokeWidth={1.4} />
                  </span>
                  <span className="text-[0.78rem] text-[var(--ink-soft)] transition-colors group-hover:text-[#e6ecf5]">{s.name[lang]}</span>
                </Link>
              ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
