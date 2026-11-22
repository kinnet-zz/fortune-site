'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLang } from '@/lib/useLang';
import { siteCopy } from '@/lib/site-copy';
import { BLOG_ARTICLES, type BlogArticle } from '@/lib/blog-articles';
import { t } from '@/lib/i18n';
import { ZODIAC_SLUGS } from '@/components/Constellation';
import { CardArtwork, ZodiacArtwork, type ArtworkVariant } from '@/components/Artwork';
import { stripLeadingEmoji } from '@/lib/text';

const ZODIAC_PERIODS = ['3/21~4/19','4/20~5/20','5/21~6/21','6/22~7/22','7/23~8/22','8/23~9/22','9/23~10/23','10/24~11/22','11/23~12/21','12/22~1/19','1/20~2/18','2/19~3/20'];

const CHINESE_ZODIAC_YEARS = [
  '1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020',
  '1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021',
  '1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022',
  '1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023',
  '1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024',
  '1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025',
  '1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026',
  '1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027',
  '1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016, 2028',
  '1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029',
  '1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030',
  '1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031',
];

const CHINESE_ZODIAC_EMOJI = ['🐀', '🐂', '🐅', '🐇', '🐉', '🐍', '🐴', '🐑', '🐒', '🐓', '🐕', '🐖'];

const BLOG_PICK_SLUGS = ['what-is-astrology', 'zodiac-compatibility-guide', 'moon-sign-guide', '2026-yearly-horoscope'];

const BLOG_PICK_VARIANTS: Record<string, ArtworkVariant> = {
  'what-is-astrology': 'history',
  'zodiac-compatibility-guide': 'compatibility',
  'moon-sign-guide': 'moon',
  '2026-yearly-horoscope': 'yearly',
};

const DISCLOSURE_COPY = {
  ko: { zodiacOpen: '12별자리 전체 보기', zodiacClose: '별자리 접기', chineseOpen: '12지 전체 보기', chineseClose: '12지 접기' },
  en: { zodiacOpen: 'Show all 12 signs', zodiacClose: 'Collapse zodiac signs', chineseOpen: 'Show all 12 animals', chineseClose: 'Collapse Chinese zodiac' },
  zh: { zodiacOpen: '查看全部十二星座', zodiacClose: '收起星座', chineseOpen: '查看全部十二生肖', chineseClose: '收起生肖' },
  ja: { zodiacOpen: '12星座をすべて表示', zodiacClose: '星座を閉じる', chineseOpen: '十二支をすべて表示', chineseClose: '十二支を閉じる' },
} as const;

function SectionHead({ eyebrow, title, href, linkLabel, id }: { eyebrow: string; title: string; href?: string; linkLabel?: string; id?: string }) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2 id={id} className="mt-3 text-[1.4rem] font-bold tracking-[-0.03em] text-[#f2f0ea] sm:text-[1.7rem]">{title}</h2>
      </div>
      {href && linkLabel && (
        <Link
          href={href}
          className="group inline-flex min-h-9 items-center gap-1.5 text-[0.78rem] font-medium text-[#e6ecf5] transition-colors hover:text-[#dbe6f4]"
        >
          {linkLabel}
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      )}
    </div>
  );
}

export default function InfoSection() {
  const { lang } = useLang();
  const tr = t(lang);
  const copy = siteCopy(lang);
  const animalUnit = lang === 'ko' ? '띠' : lang === 'ja' || lang === 'zh' ? '年' : '';
  const blogPicks: BlogArticle[] = BLOG_PICK_SLUGS.map(
    (slug) => BLOG_ARTICLES.find((a) => a.slug === slug)!,
  );
  const disclosureCopy = DISCLOSURE_COPY[lang];
  const [zodiacExpanded, setZodiacExpanded] = useState(false);
  const [chineseZodiacExpanded, setChineseZodiacExpanded] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* 서양 별자리 */}
      <section className="mx-auto mt-20 w-full max-w-6xl" aria-labelledby="zodiac-heading">
        <SectionHead
          id="zodiac-heading"
          eyebrow="The twelve signs"
          title={tr.zodiacGuideTitle}
          href="/zodiac"
          linkLabel={copy.info.zodiacLink}
        />
        <div id="zodiac-list" className="stagger grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {tr.zodiacSigns.map((sign, i) => (
            <div
              key={i}
              className={`zodiac-card group overflow-hidden rounded-2xl border border-[rgba(184,199,220,0.14)] bg-[#101620] p-2 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(184,199,220,0.28)] hover:shadow-[0_18px_40px_-26px_rgba(0,0,0,0.28)] ${i >= 4 && !zodiacExpanded ? 'hidden lg:block' : ''}`}
            >
              <ZodiacArtwork slug={ZODIAC_SLUGS[i]} />
              <div className="px-2 pb-1.5 pt-3">
                <div className="flex items-baseline justify-between gap-2">
                  <p className="text-[0.88rem] font-semibold tracking-[-0.02em] text-[#f2f0ea]">{sign}</p>
                  <span className="text-[0.6rem] tabular-nums text-[#9aa3b2]">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <p className="mt-0.5 text-[0.62rem] tabular-nums tracking-[0.02em] text-[#9aa3b2]">{ZODIAC_PERIODS[i]}</p>
                <p className="mt-2 line-clamp-2 text-[0.7rem] leading-5 text-[#9aa3b2] text-keep-all">{tr.zodiacGuideTraits[i]}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="mt-3 min-h-11 w-full rounded-full border border-[rgba(184,199,220,0.14)] bg-[#101620] text-[0.8rem] font-medium text-[#bdc5d1] transition-colors hover:border-[rgba(184,199,220,0.28)] hover:text-[#f2f0ea] lg:hidden"
          aria-expanded={zodiacExpanded}
          aria-controls="zodiac-list"
          onClick={() => setZodiacExpanded((open) => !open)}
        >
          {zodiacExpanded ? disclosureCopy.zodiacClose : disclosureCopy.zodiacOpen}
        </button>
      </section>

      {/* 동양 12지 */}
      <section className="mx-auto mt-16 w-full max-w-6xl" aria-labelledby="chinese-zodiac-heading">
        <div className="rounded-[24px] border border-[rgba(184,199,220,0.14)] bg-[#121722] px-5 py-8 sm:px-8 sm:py-9">
          <span className="eyebrow">The twelve animals</span>
          <div className="mb-6 mt-3 flex flex-wrap items-end justify-between gap-3">
            <h2 id="chinese-zodiac-heading" className="text-[1.4rem] font-bold tracking-[-0.03em] text-[#f2f0ea] sm:text-[1.7rem]">{copy.info.chineseTitle}</h2>
            <Link href="/chinese-zodiac" className="group inline-flex min-h-9 items-center gap-1.5 text-[0.78rem] font-medium text-[#e6ecf5] transition-colors hover:text-[#dbe6f4]">
              {copy.info.chineseLink}
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
          <div id="chinese-zodiac-list" className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-6">
            {CHINESE_ZODIAC_YEARS.map((years, i) => (
              <div
                key={i}
                className={`rounded-xl border border-[rgba(184,199,220,0.14)] bg-[#101620] p-3.5 transition-colors hover:border-[rgba(184,199,220,0.28)] ${i >= 4 && !chineseZodiacExpanded ? 'hidden lg:block' : ''}`}
              >
                <div className="mb-2 flex items-center gap-2">
                  <span className="grid h-7 w-7 place-items-center rounded-lg bg-[#121722] text-[0.9rem]">{CHINESE_ZODIAC_EMOJI[i]}</span>
                  <span className="text-[0.82rem] font-semibold tracking-[-0.02em] text-[#f2f0ea]">{tr.chineseZodiacAnimals[i]}{animalUnit}</span>
                </div>
                <p className="text-[0.6rem] leading-4 text-[#9aa3b2]">{years}</p>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="mt-3 min-h-11 w-full rounded-full border border-[rgba(184,199,220,0.14)] bg-[#101620] text-[0.8rem] font-medium text-[#bdc5d1] transition-colors hover:border-[rgba(184,199,220,0.28)] hover:text-[#f2f0ea] lg:hidden"
            aria-expanded={chineseZodiacExpanded}
            aria-controls="chinese-zodiac-list"
            onClick={() => setChineseZodiacExpanded((open) => !open)}
          >
            {chineseZodiacExpanded ? disclosureCopy.chineseClose : disclosureCopy.chineseOpen}
          </button>
        </div>
      </section>

      {/* 블로그 추천 */}
      <section className="mx-auto mt-16 w-full max-w-6xl" aria-labelledby="blog-picks-heading">
        <SectionHead
          id="blog-picks-heading"
          eyebrow="Editorial"
          title={copy.info.blogTitle}
          href="/blog"
          linkLabel={copy.info.blogLink}
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {blogPicks.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[rgba(184,199,220,0.14)] bg-[#101620] p-2 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(184,199,220,0.28)] hover:shadow-[0_18px_40px_-26px_rgba(0,0,0,0.28)]"
            >
              <CardArtwork variant={BLOG_PICK_VARIANTS[post.slug] ?? 'journal'} />
              <div className="flex flex-1 flex-col px-2 pb-2 pt-3.5">
                <span className="tag mb-2 self-start">{post.category[lang]}</span>
                <p className="text-[0.92rem] font-semibold leading-snug tracking-[-0.02em] text-[#f2f0ea] text-keep-all">
                  {post.title[lang]}
                </p>
                <span className="mt-auto flex items-center gap-1.5 pt-3 text-[0.72rem] font-medium text-[#e6ecf5]">
                  {copy.info.read}
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto mt-16 w-full max-w-3xl" aria-labelledby="faq-section-heading">
        <SectionHead id="faq-section-heading" eyebrow="Questions" title={tr.faqTitle} />
        <div className="divide-y divide-[rgba(184,199,220,0.14)] overflow-hidden rounded-2xl border border-[rgba(184,199,220,0.14)] bg-[#101620]">
          {copy.info.faq.map(({ q, a }, i) => {
            const isOpen = openFaq === i;
            const answerId = `faq-answer-${i}`;
            return (
              <div key={i}>
                <button
                  type="button"
                  className="flex min-h-14 w-full items-start gap-3 px-5 py-4 text-left text-[0.92rem] font-medium tracking-[-0.01em] text-[#f2f0ea] transition-colors hover:bg-[#121722] focus-visible:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                >
                  <span className="flex-1 text-keep-all">{q}</span>
                  <span
                    className={`mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full border border-[rgba(184,199,220,0.14)] text-[0.7rem] text-[#9aa3b2] transition-transform duration-300 ${isOpen ? 'rotate-45 border-[#e6ecf5] text-[#e6ecf5]' : ''}`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div id={answerId} hidden={!isOpen}>
                  <p className="px-5 pb-5 text-[0.84rem] leading-7 text-[#9aa3b2] text-keep-all">{a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 서비스 소개 */}
      <section className="mx-auto mt-14 w-full max-w-3xl" aria-labelledby="about-heading">
        <div className="rounded-2xl border border-[rgba(184,199,220,0.14)] bg-[#101620] p-6 sm:p-8">
          <span className="eyebrow">About</span>
          <h2 id="about-heading" className="mt-3 text-[1.15rem] font-bold tracking-[-0.03em] text-[#f2f0ea]">
            {stripLeadingEmoji(tr.serviceIntroTitle)}
          </h2>
          <p className="mt-3 text-[0.84rem] leading-7 text-[#9aa3b2] text-keep-all">{tr.serviceIntroText}</p>
          <p className="mt-3 text-[0.84rem] leading-7 text-[#9aa3b2] text-keep-all">
            {copy.info.aboutExtra}
          </p>
        </div>
      </section>
    </>
  );
}
