'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLang } from '@/lib/useLang';
import { t, type Lang } from '@/lib/i18n';
import ConstellationIcon, { ZODIAC_SLUGS } from '@/components/Constellation';

const ZODIAC_PERIODS = ['3/21~4/19','4/20~5/20','5/21~6/21','6/22~7/22','7/23~8/22','8/23~9/22','9/23~10/23','10/24~11/22','11/23~12/21','12/22~1/19','1/20~2/18','2/19~3/20'];

const CHINESE_ZODIAC = [
  { emoji: '🐀', name: '쥐띠', years: '1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020' },
  { emoji: '🐂', name: '소띠', years: '1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021' },
  { emoji: '🐅', name: '호랑이띠', years: '1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022' },
  { emoji: '🐇', name: '토끼띠', years: '1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023' },
  { emoji: '🐉', name: '용띠', years: '1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024' },
  { emoji: '🐍', name: '뱀띠', years: '1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025' },
  { emoji: '🐴', name: '말띠', years: '1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026' },
  { emoji: '🐑', name: '양띠', years: '1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027' },
  { emoji: '🐒', name: '원숭이띠', years: '1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016, 2028' },
  { emoji: '🐓', name: '닭띠', years: '1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029' },
  { emoji: '🐕', name: '개띠', years: '1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030' },
  { emoji: '🐖', name: '돼지띠', years: '1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031' },
];

const BLOG_PICKS = [
  { slug: 'what-is-astrology', title: '점성술의 역사와 기초', emoji: '🔮' },
  { slug: 'zodiac-compatibility-guide', title: '12별자리 궁합 분석', emoji: '💞' },
  { slug: 'moon-sign-guide', title: '달 별자리 완벽 가이드', emoji: '🌙' },
  { slug: '2026-yearly-horoscope', title: '2026년 별자리 연간 운세', emoji: '⭐' },
];

const DISCLOSURE_COPY: Record<Lang, {
  zodiacOpen: string;
  zodiacClose: string;
  chineseOpen: string;
  chineseClose: string;
}> = {
  ko: { zodiacOpen: '12별자리 전체 보기', zodiacClose: '별자리 접기', chineseOpen: '12지 전체 보기', chineseClose: '12지 접기' },
  en: { zodiacOpen: 'Show all 12 signs', zodiacClose: 'Collapse zodiac signs', chineseOpen: 'Show all 12 animals', chineseClose: 'Collapse Chinese zodiac' },
  zh: { zodiacOpen: '查看全部十二星座', zodiacClose: '收起星座', chineseOpen: '查看全部十二生肖', chineseClose: '收起生肖' },
  ja: { zodiacOpen: '12星座をすべて表示', zodiacClose: '星座を閉じる', chineseOpen: '十二支をすべて表示', chineseClose: '十二支を閉じる' },
};

function SectionHead({ eyebrow, title, href, linkLabel, light = false }: { eyebrow: string; title: string; href?: string; linkLabel?: string; light?: boolean }) {
  return (
    <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
      <div>
        <span className={light ? 'eyebrow eyebrow-light' : 'eyebrow'}>{eyebrow}</span>
        <h2 className={`mt-3 font-display text-[1.45rem] font-semibold sm:text-[1.8rem] ${light ? 'text-[#f7f0e1]' : 'text-[var(--ink)]'}`}>{title}</h2>
      </div>
      {href && linkLabel && (
        <Link
          href={href}
          className={`group inline-flex min-h-11 items-center gap-2 text-[0.76rem] font-medium transition-colors ${light ? 'text-[rgba(226,205,162,0.85)] hover:text-[#f7f0e1]' : 'text-[var(--gold)] hover:text-[var(--ink)]'}`}
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
  const disclosureCopy = DISCLOSURE_COPY[lang];
  const [zodiacExpanded, setZodiacExpanded] = useState(false);
  const [chineseZodiacExpanded, setChineseZodiacExpanded] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* 서양 별자리 */}
      <section className="mx-auto mt-24 w-full max-w-6xl px-4" aria-labelledby="zodiac-heading">
        <div className="section-line mb-9" />
        <SectionHead
          eyebrow="The twelve signs"
          title={tr.zodiacGuideTitle}
          href="/zodiac"
          linkLabel="12별자리 상세 가이드"
        />
        <div id="zodiac-list" className="stagger grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-6">
          {tr.zodiacSigns.map((sign, i) => (
            <div
              key={i}
              className={`zodiac-card group relative min-h-[9.5rem] rounded-[0.4rem] border border-[var(--line)] bg-[#fffdf8] p-4 transition-all duration-500 hover:-translate-y-0.5 hover:border-[rgba(169,128,63,0.45)] hover:shadow-[0_20px_40px_-36px_rgba(20,23,43,0.5)] ${i >= 4 && !zodiacExpanded ? 'hidden lg:block' : ''}`}
            >
              <div className="flex items-start justify-between">
                <span className="text-[var(--ink)]">
                  <ConstellationIcon slug={ZODIAC_SLUGS[i]} size={44} strokeWidth={1.15} />
                </span>
                <span className="font-display text-[0.62rem] italic text-[var(--muted-2)]">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <p className="mt-3 text-[0.92rem] font-semibold text-[var(--ink)]">{sign}</p>
              <p className="mt-0.5 text-[0.64rem] tracking-[0.08em] text-[var(--gold)]">{ZODIAC_PERIODS[i]}</p>
              <p className="mt-2 text-[0.7rem] leading-5 text-[var(--muted)] text-keep-all">{tr.zodiacGuideTraits[i]}</p>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="mt-4 min-h-11 w-full rounded-[0.2rem] border border-[var(--line)] text-[0.8rem] font-medium text-[var(--ink-soft)] transition-colors hover:border-[var(--gold)] lg:hidden"
          aria-expanded={zodiacExpanded}
          aria-controls="zodiac-list"
          onClick={() => setZodiacExpanded((open) => !open)}
        >
          {zodiacExpanded ? disclosureCopy.zodiacClose : disclosureCopy.zodiacOpen}
        </button>
      </section>

      {/* 동양 12지 — 다크 밴드 */}
      <section className="mx-auto mt-20 w-full max-w-6xl px-4" aria-labelledby="chinese-zodiac-heading">
        <div className="relative overflow-hidden rounded-[0.6rem] border border-[rgba(226,205,162,0.18)] bg-[linear-gradient(165deg,#141a35_0%,#0f1529_100%)] px-6 py-9 text-[#f7f0e1] sm:px-9 sm:py-10">
          <span className="eyebrow eyebrow-light">The twelve animals</span>
          <div className="mt-3 mb-7 flex flex-wrap items-end justify-between gap-3">
            <h2 id="chinese-zodiac-heading" className="font-display text-[1.45rem] font-semibold text-[#f7f0e1] sm:text-[1.8rem]">동양 12지 띠 안내</h2>
            <Link href="/chinese-zodiac" className="group inline-flex min-h-11 items-center gap-2 text-[0.76rem] font-medium text-[rgba(226,205,162,0.85)] transition-colors hover:text-[#f7f0e1]">
              12지 상세 가이드
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
          <div id="chinese-zodiac-list" className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
            {CHINESE_ZODIAC.map((item, i) => (
              <div
                key={i}
                className={`rounded-[0.3rem] border border-[rgba(226,205,162,0.18)] bg-[rgba(247,240,225,0.04)] p-3.5 transition-colors hover:border-[rgba(226,205,162,0.45)] ${i >= 4 && !chineseZodiacExpanded ? 'hidden lg:block' : ''}`}
              >
                <div className="mb-1.5 flex items-center gap-2">
                  <span className="text-[1rem]">{item.emoji}</span>
                  <span className="text-[0.84rem] font-semibold text-[#f7f0e1]">{item.name}</span>
                </div>
                <p className="text-[0.6rem] leading-4 text-[rgba(247,240,225,0.45)]">{item.years}</p>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="mt-4 min-h-11 w-full rounded-[0.2rem] border border-[rgba(226,205,162,0.25)] text-[0.8rem] font-medium text-[rgba(247,240,225,0.8)] transition-colors hover:bg-[rgba(226,205,162,0.08)] lg:hidden"
            aria-expanded={chineseZodiacExpanded}
            aria-controls="chinese-zodiac-list"
            onClick={() => setChineseZodiacExpanded((open) => !open)}
          >
            {chineseZodiacExpanded ? disclosureCopy.chineseClose : disclosureCopy.chineseOpen}
          </button>
        </div>
      </section>

      {/* 블로그 추천 */}
      <section className="mx-auto mt-20 w-full max-w-5xl px-4" aria-labelledby="blog-picks-heading">
        <div className="section-line mb-9" />
        <SectionHead
          eyebrow="Editorial"
          title="별자리 & 운세 가이드"
          href="/blog"
          linkLabel="전체 가이드 블로그"
        />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {BLOG_PICKS.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`card-lift group block border border-[var(--line)] bg-[#fffdf8] p-6 ${index === 0 ? 'sm:col-span-3 sm:min-h-[10rem] sm:p-8' : 'min-h-[8rem]'}`}
              style={{ borderRadius: '0.4rem' }}
            >
              <div className="flex items-start justify-between gap-3">
                <span className="text-[1.05rem] opacity-80">{post.emoji}</span>
                <span className="text-[0.58rem] uppercase tracking-[0.28em] text-[var(--muted-2)]">
                  0{index + 1}
                </span>
              </div>
              <p className={`mt-4 font-display font-semibold leading-snug text-[var(--ink)] text-keep-all transition-colors group-hover:text-[var(--gold)] ${index === 0 ? 'text-[1.35rem] sm:text-[1.75rem]' : 'text-[1.05rem]'}`}>
                {post.title}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto mt-20 w-full max-w-3xl px-4" aria-labelledby="faq-section-heading">
        <div className="section-line mb-9" />
        <SectionHead eyebrow="Questions" title="자주 묻는 질문" />
        <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {[
            {
              q: '오늘의 운세는 매일 바뀌나요?',
              a: '네. 오늘 날짜를 기준으로 별자리와 띠의 상징을 다시 조합해 매일 다른 참고 문장을 제공합니다. 같은 생년월일이라도 날짜가 바뀌면 결과가 달라집니다.',
            },
            {
              q: '생년월일 정보가 저장되나요?',
              a: '입력하신 생년월일은 운세 생성에만 사용되며 서버에 별도 저장되지 않습니다. 다만 서비스 운영을 위한 접속 로그와, 사용자가 동의한 경우에만 분석·광고 쿠키가 처리될 수 있습니다. 자세한 내용은 개인정보처리방침을 확인해 주세요.',
            },
            {
              q: '운세 결과는 얼마나 정확한가요?',
              a: '본 서비스의 운세는 오락 및 자기성찰 목적의 참고 콘텐츠입니다. 실제 미래를 예측하지 않으며, 중요한 결정의 근거로 사용하지 마세요.',
            },
            {
              q: '별자리와 띠는 어떻게 계산되나요?',
              a: '서양 별자리는 생년월일의 월·일을 기준으로, 동양 띠는 출생 연도를 기준으로 계산됩니다. 서양 별자리는 12개(양자리~물고기자리), 동양 띠는 12가지(쥐~돼지)입니다.',
            },
            {
              q: '서비스는 무료인가요?',
              a: '네, 완전 무료입니다. 생년월일과 성별만 입력하면 종합운·연애운·금전운·직업운·행운의 색·행운의 숫자를 바로 확인할 수 있습니다.',
            },
          ].map(({ q, a }, i) => {
            const isOpen = openFaq === i;
            const answerId = `faq-answer-${i}`;
            return (
              <div key={i}>
                <button
                  type="button"
                  className="flex min-h-14 w-full items-start gap-3 py-4 text-left text-[0.92rem] font-semibold text-[var(--ink)] focus-visible:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                >
                  <span className="font-display text-[0.85rem] italic text-[var(--gold)]">Q.</span>
                  <span className="flex-1 text-keep-all">{q}</span>
                  <span
                    className={`mt-0.5 text-[var(--gold)] transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                    aria-hidden="true"
                  >
                    ＋
                  </span>
                </button>
                <div id={answerId} hidden={!isOpen}>
                  <p className="pb-5 pl-8 text-[0.84rem] leading-7 text-[var(--muted)] text-keep-all">{a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 서비스 소개 */}
      <section className="mx-auto mt-16 w-full max-w-3xl px-4" aria-labelledby="about-heading">
        <div className="border border-[var(--line)] bg-[#fffdf8] p-6 sm:p-8" style={{ borderRadius: '0.4rem' }}>
          <span className="eyebrow">About</span>
          <h2 id="about-heading" className="mt-3 font-display text-[1.15rem] font-semibold text-[var(--ink)]">
            {tr.serviceIntroTitle}
          </h2>
          <p className="mt-3 text-[0.84rem] leading-7 text-[var(--muted)] text-keep-all">{tr.serviceIntroText}</p>
          <p className="mt-3 text-[0.84rem] leading-7 text-[var(--muted)] text-keep-all">
            starfate.day는 별자리와 동양 12지를 함께 읽는 무료 운세 가이드입니다.
            한국어·영어·일본어·중국어를 지원하고, 타로와 별자리 궁합 등 가볍게 즐길 콘텐츠를 제공합니다.
            모든 운세는 오락과 자기성찰을 위한 참고 자료입니다.
          </p>
        </div>
      </section>
    </>
  );
}
