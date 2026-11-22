'use client';

import Link from 'next/link';
import { useLang } from '@/lib/useLang';
import { t } from '@/lib/i18n';
import { siteCopy } from '@/lib/site-copy';
import type { ChineseZodiacEntry } from '@/lib/chinese-zodiac-data';
import type { Lang } from '@/lib/i18n';

export interface ChineseAnimalKo {
  slug: string;
  name: string;
  emoji: string;
  years: string;
  nextYear: string;
  element: string;
  color: string;
  personality: string;
  love: string;
  money: string;
  career: string;
  compatible: string;
  incompatible: string;
  lucky: { color: string; number: string; direction: string };
  traits: string[];
  weaknesses: string[];
}

const ELEMENT_NAMES: Record<string, Record<Exclude<Lang, 'ko'>, string>> = {
  물: { en: 'Water 💧', zh: '水 💧', ja: '水 💧' },
  땅: { en: 'Earth 🌍', zh: '土 🌍', ja: '土 🌍' },
  나무: { en: 'Wood 🌿', zh: '木 🌿', ja: '木 🌿' },
  불: { en: 'Fire 🔥', zh: '火 🔥', ja: '火 🔥' },
  금: { en: 'Metal ⚙️', zh: '金 ⚙️', ja: '金 ⚙️' },
  흙: { en: 'Earth 🌍', zh: '土 🌍', ja: '土 🌍' },
  '나무/흙': { en: 'Wood/Earth', zh: '木/土', ja: '木/土' },
};

const bgStyle = {
  background: '#101620',
  minHeight: '100vh',
};

export default function ChineseZodiacDetailView({
  data,
  localized,
  index,
  otherAnimals,
}: {
  data: ChineseAnimalKo;
  localized: Record<Lang, ChineseZodiacEntry>;
  index: number;
  otherAnimals: { slug: string; emoji: string; name: Record<Lang, string> }[];
}) {
  const { lang } = useLang();
  const tr = t(lang);
  const copy = siteCopy(lang);
  const isKo = lang === 'ko';
  const entry = localized[lang];
  const unit = lang === 'ja' || lang === 'zh' ? '年' : '';
  const displayName = `${tr.chineseZodiacAnimals[index]}${unit}`;
  const element = isKo ? data.element : ELEMENT_NAMES[data.element]?.[lang as Exclude<Lang, 'ko'>] ?? data.element;

  return (
    <div style={bgStyle}>
      <div className="max-w-3xl mx-auto px-6 py-16 text-[#f2f0ea]/80">
        <Link href="/chinese-zodiac" className="text-[#e6ecf5] hover:text-[#e6ecf5] text-sm mb-8 inline-block">
          {tr.backHome}
        </Link>

        {/* 헤더 */}
        <header className="mb-10 text-center">
          <div className="text-7xl mb-4">{data.emoji}</div>
          <h1 className="text-4xl font-bold text-[#f2f0ea] mb-2">{displayName}</h1>
          <div className="flex justify-center gap-3 mt-4 flex-wrap">
            <span className="px-3 py-1 rounded-full text-sm bg-[#101620]/[0.04] border border-white/10 text-[#bdc5d1]">
              🔥 {isKo ? `원소: ${element}` : element}
            </span>
            <span className="px-3 py-1 rounded-full text-sm bg-[#101620]/[0.04] border border-white/10 text-[#bdc5d1]">
              📅 {isKo ? `다음 ${data.name} 해: ${data.nextYear}년` : `${data.nextYear}`}
            </span>
          </div>
        </header>

        {/* 해당 연도 */}
        <section className="mb-8 p-6 rounded-2xl bg-[#101620]/[0.04] border border-white/10">
          <h2 className="text-base font-bold text-[#f2f0ea] mb-2">
            📅 {isKo ? `${data.name} 해당 연도` : tr.recentYearsLabel}
          </h2>
          <p className="text-[#bdc5d1] text-sm leading-relaxed">{data.years}</p>
        </section>

        {/* 핵심 특성 */}
        <section className="mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-green-500/10 border border-green-500/20">
              <h3 className="text-base font-bold text-[#2f6b4a] mb-3">{isKo ? '💪 강점' : tr.strengthsLabel}</h3>
              <ul className="space-y-1">
                {(isKo ? data.traits : entry.traits).map((item) => (
                  <li key={item} className="text-sm text-[#f2f0ea]/72 flex items-center gap-2">
                    <span className="text-[#2f6b4a]">·</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-5 rounded-2xl bg-red-500/10 border border-red-500/20">
              <h3 className="text-base font-bold text-[#9b3a3a] mb-3">{isKo ? '⚠️ 약점' : tr.weaknessesLabel}</h3>
              <ul className="space-y-1">
                {(isKo ? data.weaknesses : entry.weaknesses.split(/,\s*/)).map((item) => (
                  <li key={item} className="text-sm text-[#f2f0ea]/72 flex items-center gap-2">
                    <span className="text-[#9b3a3a]">·</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 성격 / 연애 / 금전 / 직업 */}
        {[
          { icon: '🌟', title: isKo ? '성격 & 특징' : tr.personalityLabel, content: isKo ? data.personality : entry.personality },
          ...(isKo
            ? [
                { icon: '💕', title: '연애운', content: data.love },
                { icon: '💰', title: '금전운', content: data.money },
                { icon: '💼', title: '직업운', content: data.career },
              ]
            : []),
        ].map(({ icon, title, content }) => (
          <section key={title} className="mb-6 p-6 rounded-2xl bg-[#101620]/[0.04] border border-white/10">
            <h2 className="text-lg font-bold text-[#f2f0ea] mb-3">{icon} {title}</h2>
            <p className="leading-relaxed text-[#f2f0ea]/72">{content}</p>
          </section>
        ))}

        {/* 궁합 & 직업 적성 */}
        <section className="mb-8 p-6 rounded-2xl bg-[#101620]/[0.04] border border-white/10">
          <h2 className="text-lg font-bold text-[#f2f0ea] mb-4">{isKo ? '💞 궁합' : tr.compatibleAnimalsLabel}</h2>
          <div className={`grid gap-4 ${isKo ? 'grid-cols-2' : 'grid-cols-1 sm:grid-cols-2'}`}>
            <div>
              <p className="text-sm text-[#2f6b4a] font-semibold mb-1">{isKo ? '✅ 잘 맞는 띠' : tr.compatibleAnimalsLabel}</p>
              <p className="text-[#f2f0ea]/72 text-sm">{isKo ? data.compatible : entry.compatible}</p>
            </div>
            <div>
              <p className="text-sm text-[#9b3a3a] font-semibold mb-1">{isKo ? '⚠️ 주의할 띠' : tr.careersLabel}</p>
              <p className="text-[#f2f0ea]/72 text-sm">{isKo ? data.incompatible : entry.careers}</p>
            </div>
          </div>
        </section>

        {/* 행운 (한국어 상세에만 존재) */}
        {isKo && (
          <section className="mb-10 p-6 rounded-2xl bg-[#e6ecf5]/10 border border-[#e6ecf5]/25">
            <h2 className="text-lg font-bold text-[#f2f0ea] mb-4">🍀 행운의 상징</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              <div>
                <p className="text-[#e6ecf5] font-semibold mb-1">행운의 색</p>
                <p className="text-[#bdc5d1]">{data.lucky.color}</p>
              </div>
              <div>
                <p className="text-[#e6ecf5] font-semibold mb-1">행운의 숫자</p>
                <p className="text-[#bdc5d1]">{data.lucky.number}</p>
              </div>
              <div>
                <p className="text-[#e6ecf5] font-semibold mb-1">행운의 방향</p>
                <p className="text-[#bdc5d1]">{data.lucky.direction}</p>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <div className="text-center p-8 rounded-2xl border border-[rgba(184,199,220,0.14)] bg-[#121722]">
          <p className="text-[#bdc5d1] mb-4 text-sm">
            {isKo ? `오늘 ${data.name}의 운세가 궁금하다면?` : copy.chineseZodiac.ctaTitle}
          </p>
          <Link href="/" className="btn-primary text-sm">
            {tr.chineseZodiacCTA} →
          </Link>
        </div>

        {/* 다른 띠 보기 */}
        <nav className="mt-10">
          <h3 className="text-sm text-[#9aa3b2] mb-3 font-semibold uppercase tracking-widest">
            {isKo ? '다른 띠 보기' : tr.findMyZodiacTitle}
          </h3>
          <div className="flex flex-wrap gap-2">
            {otherAnimals
              .filter((a) => a.slug !== data.slug)
              .map((a) => (
                <Link
                  key={a.slug}
                  href={`/chinese-zodiac/${a.slug}`}
                  className="px-3 py-1 rounded-full text-xs border border-white/10 text-[#bdc5d1] hover:border-[#3a4a61] hover:text-[#e6ecf5] transition-colors"
                >
                  {a.emoji} {a.name[lang]}
                </Link>
              ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
