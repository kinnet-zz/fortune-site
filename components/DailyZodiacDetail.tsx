'use client';

import Link from 'next/link';
import ConstellationIcon from '@/components/Constellation';
import {
  DAILY_ZODIACS,
  type DailyHoroscope,
  type DailyZodiacSlug,
  type HoroscopeLang,
} from '@/lib/dailyHoroscope';
import { DAILY_DETAIL_COPY, ZODIAC_STATIC_INFO } from '@/lib/daily-zodiac-info';
import { normalizeLang } from '@/lib/i18n';
import { useLang } from '@/lib/useLang';

const WEEKDAYS: Record<HoroscopeLang, string[]> = {
  ko: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
  en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  ja: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
};

const MONTHS_EN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function formatDailyDate(iso: string, lang: HoroscopeLang): { main: string; weekday: string } {
  const [y, m, d] = iso.split('-').map(Number);
  const weekday = WEEKDAYS[lang][new Date(Date.UTC(y, m - 1, d)).getUTCDay()];
  if (lang === 'ko') return { main: `${y}년 ${m}월 ${d}일`, weekday };
  if (lang === 'ja') return { main: `${y}年${m}月${d}日`, weekday };
  return { main: `${MONTHS_EN[m - 1]} ${d}, ${y}`, weekday };
}

function ScoreRing({ score, unit }: { score: number; unit: string }) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  const color = score >= 80 ? '#e6ecf5' : score >= 65 ? '#6b6a63' : '#8a857b';

  return (
    <div className="relative flex items-center justify-center" style={{ width: 100, height: 100 }}>
      <svg width="100" height="100" style={{ transform: 'rotate(-90deg)' }}>
        <circle cx="50" cy="50" r={radius} fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="8" />
        <circle
          cx="50" cy="50" r={radius} fill="none"
          stroke={color} strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 1s ease' }}
        />
      </svg>
      <div className="absolute text-center">
        <div className="text-[#f2f0ea] font-bold text-xl leading-none">{score}</div>
        <div className="text-[#9aa3b2] text-xs">{unit}</div>
      </div>
    </div>
  );
}

function Section({ emoji, title, content }: { emoji: string; title: string; content: string }) {
  return (
    <div
      className="rounded-2xl p-5"
      style={{ background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.05)' }}
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">{emoji}</span>
        <h3 className="text-[#f2f0ea] font-semibold text-sm">{title}</h3>
      </div>
      <p className="text-[#f2f0ea]/72 text-sm leading-relaxed">{content}</p>
    </div>
  );
}

export interface DailyZodiacDetailProps {
  slug: DailyZodiacSlug;
  date: string;
  readings: Record<HoroscopeLang, DailyHoroscope>;
}

export default function DailyZodiacDetail({ slug, date, readings }: DailyZodiacDetailProps) {
  const { lang: rawLang } = useLang();
  const lang = normalizeLang(rawLang);
  const copy = DAILY_DETAIL_COPY[lang];
  const reading = readings[lang] ?? readings.ko;
  const info = ZODIAC_STATIC_INFO[slug][lang];
  const catalog = DAILY_ZODIACS.find((z) => z.slug === slug);
  const name = reading.zodiacName;
  const { main: dateMain, weekday } = formatDailyDate(date, lang);
  const formattedDate = `${dateMain} (${weekday})`;
  const pageUrl = `https://starfate.day/blog/daily/${slug}`;
  const inLanguage = lang === 'ko' ? 'ko-KR' : lang === 'ja' ? 'ja-JP' : 'en-US';
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: `${formattedDate} ${copy.headline(name)}`,
      description: reading.summary,
      datePublished: `${date}T00:00:00+09:00`,
      dateModified: reading.generatedAt,
      mainEntityOfPage: pageUrl,
      author: { '@type': 'Organization', name: copy.structuredAuthor },
      publisher: { '@type': 'Organization', name: 'StarFate', url: 'https://starfate.day' },
      about: copy.aboutKeywords(name),
      inLanguage,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'StarFate', item: 'https://starfate.day/' },
        { '@type': 'ListItem', position: 2, name: copy.badge, item: 'https://starfate.day/blog/daily' },
        { '@type': 'ListItem', position: 3, name: copy.headline(name), item: pageUrl },
      ],
    },
  ];

  return (
    <div style={{ background: '#101620', minHeight: '100vh' }}>
      <article className="max-w-2xl mx-auto px-6 py-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
        />
        <Link href="/blog/daily" className="text-[#e6ecf5] hover:text-[#e6ecf5] text-sm mb-8 inline-block">
          {copy.backToDaily}
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span
              className="px-2 py-0.5 rounded-full text-xs font-medium"
              style={{ background: 'rgba(206,220,238,0.14)', color: '#e6ecf5' }}
            >
              {copy.badge}
            </span>
            <span className="text-[#bdc5d1] text-xs">{formattedDate}</span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="text-[var(--ink)]">
              <ConstellationIcon slug={slug} size={72} strokeWidth={1.05} animated />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[#f2f0ea]">{copy.headline(name)}</h1>
              <p className="text-[#bdc5d1] text-sm mt-1">{reading.summary}</p>
            </div>
          </div>

          <div
            className="rounded-2xl p-5 flex items-center gap-6 flex-wrap"
            style={{ background: 'rgba(206,220,238,0.12)', border: '1px solid rgba(206,220,238,0.12)' }}
          >
            <ScoreRing score={reading.score} unit={copy.scoreUnit} />
            <div className="flex-1 grid grid-cols-3 gap-4 min-w-0">
              <div className="text-center">
                <div className="text-[#9aa3b2] text-xs mb-1">{copy.luckyColorLabel}</div>
                <div className="text-[#f2f0ea] font-semibold text-sm">{reading.luckyColor}</div>
              </div>
              <div className="text-center">
                <div className="text-[#9aa3b2] text-xs mb-1">{copy.luckyNumberLabel}</div>
                <div className="text-[#f2f0ea] font-semibold text-sm">{reading.luckyNumber}</div>
              </div>
              <div className="text-center">
                <div className="text-[#9aa3b2] text-xs mb-1">{copy.luckyItemLabel}</div>
                <div className="text-[#f2f0ea] font-semibold text-sm">{reading.luckyItem}</div>
              </div>
            </div>
          </div>
        </header>

        <div
          className="rounded-2xl p-6 mb-6"
          style={{ background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.06)' }}
        >
          <h2 className="text-[#f2f0ea] font-bold text-base mb-3">{copy.overallTitle}</h2>
          <p className="text-[#f2f0ea]/75 text-sm leading-relaxed">{reading.overall}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <Section emoji="💕" title={copy.loveTitle} content={reading.love} />
          <Section emoji="💰" title={copy.moneyTitle} content={reading.money} />
          <Section emoji="💼" title={copy.workTitle} content={reading.work} />
          <Section emoji="🌿" title={copy.healthTitle} content={reading.health} />
        </div>

        <div
          className="rounded-2xl p-5 text-center"
          style={{ background: 'rgba(206,220,238,0.1)', border: '1px solid rgba(206,220,238,0.28)' }}
        >
          <div className="text-2xl mb-2">✨</div>
          <p className="text-[#e6ecf5] text-sm font-medium italic">&ldquo;{reading.advice}&rdquo;</p>
          <p className="text-[#9aa3b2] text-xs mt-2">{copy.adviceNote}</p>
        </div>

        <nav className="mt-10">
          <p className="text-[#9aa3b2] text-xs mb-4 text-center">{copy.otherSigns}</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {DAILY_ZODIACS.map((other) => (
              <Link
                key={other.slug}
                href={`/blog/daily/${other.slug}`}
                className={`px-3 py-1.5 rounded-full text-xs transition-colors ${
                  other.slug === slug ? 'text-[#f2f0ea]' : 'text-[#9aa3b2] hover:text-[#f2f0ea]/72'
                }`}
                style={other.slug === slug ? { background: 'rgba(206,220,238,0.3)' } : { background: 'rgba(0,0,0,0.04)' }}
              >
                {other.name[lang]}
              </Link>
            ))}
          </div>
        </nav>

        <section className="mt-12 space-y-6">
          <div
            className="rounded-2xl p-6"
            style={{ background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.05)' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{catalog?.emoji}</span>
              <div>
                <h2 className="text-[#f2f0ea] font-bold text-base">{copy.introTitle(name)}</h2>
                <p className="text-[#9aa3b2] text-xs">
                  {copy.introMeta(
                    catalog?.dateRange ?? '',
                    catalog?.element[lang] ?? '',
                    catalog?.planet[lang] ?? '',
                  )}
                </p>
              </div>
            </div>
            <p className="text-[#bdc5d1] text-sm leading-relaxed mb-3">
              <strong className="text-[#e6ecf5]">{info.trait}</strong>
            </p>
            <p className="text-[#bdc5d1] text-sm leading-relaxed">{info.desc}</p>
            <div className="mt-4">
              <Link href={`/zodiac/${slug}`} className="text-[#e6ecf5] hover:text-[#e6ecf5] text-xs transition-colors">
                {copy.guideLink(name)}
              </Link>
            </div>
          </div>

          <div
            className="rounded-2xl p-6"
            style={{ background: 'rgba(206,220,238,0.09)', border: '1px solid rgba(206,220,238,0.28)' }}
          >
            <h2 className="text-[#f2f0ea] font-bold text-base mb-3">{copy.tipTitle(name)}</h2>
            <p className="text-[#bdc5d1] text-sm leading-relaxed mb-4">{info.tip}</p>
            <div className="space-y-2 text-sm text-[#bdc5d1]">
              <div className="flex gap-2">
                <span className="text-[#e6ecf5] flex-shrink-0">▸</span>
                <span><strong className="text-[#f2f0ea]/72">{copy.scoreGuideTitle}</strong> {copy.scoreGuideBody}</span>
              </div>
              <div className="flex gap-2">
                <span className="text-[#e6ecf5] flex-shrink-0">▸</span>
                <span><strong className="text-[#f2f0ea]/72">{copy.luckyGuideTitle}</strong> {copy.luckyGuideBody}</span>
              </div>
              <div className="flex gap-2">
                <span className="text-[#e6ecf5] flex-shrink-0">▸</span>
                <span><strong className="text-[#f2f0ea]/72">{copy.noticeTitle}</strong> {copy.noticeBody}</span>
              </div>
            </div>
          </div>

          <div
            className="rounded-2xl p-5 text-center"
            style={{ background: 'rgba(0,0,0,0.025)', border: '1px solid rgba(0,0,0,0.05)' }}
          >
            <p className="text-[#9aa3b2] text-xs mb-3">{copy.ctaLead}</p>
            <Link
              href="/"
              className="inline-block px-6 py-3 rounded-full font-bold text-[#101620] text-sm"
              style={{ background: 'linear-gradient(135deg, #e6ecf5 0%, #f4f8fd 100%)' }}
            >
              {copy.ctaButton}
            </Link>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-[#f2f0ea] font-bold text-lg mb-4">{copy.relatedTitle(name)}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/card-draw"
              className="rounded-xl p-4 text-sm text-[#f2f0ea]/72 hover:text-[#f2f0ea] transition-colors"
              style={{ background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.06)' }}
            >
              {copy.relatedTarot}
            </Link>
            <Link
              href="/guide/zodiac-compatibility"
              className="rounded-xl p-4 text-sm text-[#f2f0ea]/72 hover:text-[#f2f0ea] transition-colors"
              style={{ background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.06)' }}
            >
              {copy.relatedCompatibility}
            </Link>
            <Link
              href="/blog/how-to-read-daily-fortune"
              className="rounded-xl p-4 text-sm text-[#f2f0ea]/72 hover:text-[#f2f0ea] transition-colors"
              style={{ background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.06)' }}
            >
              {copy.relatedHowToRead}
            </Link>
          </div>
        </section>

        <footer className="mt-8 border-t border-white/10 pt-5 text-sm leading-relaxed text-[#f2f0ea]/72">
          <p>{copy.updated(formattedDate)}</p>
          <p className="mt-2">{copy.footerNote}</p>
        </footer>
      </article>
    </div>
  );
}
