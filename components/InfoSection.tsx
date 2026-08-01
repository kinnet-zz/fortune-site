'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLang } from '@/lib/useLang';
import { t, type Lang } from '@/lib/i18n';

const ZODIAC_EMOJIS = ['♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓'];
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

const cardStyle = {
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,255,255,0.07)',
  backdropFilter: 'blur(12px)',
};

const glassCard = {
  background: 'rgba(255,255,255,0.035)',
  border: '1px solid rgba(216,180,254,0.14)',
  backdropFilter: 'blur(12px)',
};

export default function InfoSection() {
  const { lang } = useLang();
  const tr = t(lang);
  const disclosureCopy = DISCLOSURE_COPY[lang];
  const [zodiacExpanded, setZodiacExpanded] = useState(false);
  const [chineseZodiacExpanded, setChineseZodiacExpanded] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* 서양 별자리 — bento grid */}
      <section className="w-full max-w-6xl mx-auto px-4 mt-20" aria-labelledby="zodiac-heading">
        <div className="section-line mb-8" />
        <h2
          id="zodiac-heading"
          className="text-left text-white/85 text-xl sm:text-2xl font-semibold mb-6 font-serif-display"
        >
          {tr.zodiacGuideTitle}
        </h2>
        <div id="zodiac-list" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
          {tr.zodiacSigns.map((sign, i) => (
            <div
              key={i}
              className={`rounded-xl min-h-24 p-3 group ${i >= 4 && !zodiacExpanded ? 'hidden lg:block' : ''}`}
              style={glassCard}
            >
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="text-base transition-transform group-hover:scale-110"
                  style={{ color: 'rgba(192,132,252,0.8)' }}
                >
                  {ZODIAC_EMOJIS[i]}
                </span>
                <span className="text-white/80 text-sm font-semibold">{sign}</span>
              </div>
              <p className="text-purple-200/80 text-xs">{ZODIAC_PERIODS[i]}</p>
              <p className="text-white/65 text-xs mt-1 leading-relaxed text-keep-all">{tr.zodiacGuideTraits[i]}</p>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="lg:hidden mt-4 min-h-11 w-full rounded-xl border border-purple-300/25 text-purple-100 text-base font-semibold"
          aria-expanded={zodiacExpanded}
          aria-controls="zodiac-list"
          onClick={() => setZodiacExpanded((open) => !open)}
        >
          {zodiacExpanded ? disclosureCopy.zodiacClose : disclosureCopy.zodiacOpen}
        </button>
        <div className="mt-5 text-right">
          <Link
            href="/zodiac"
            className="inline-flex min-h-11 items-center text-purple-200 hover:text-white text-sm font-semibold transition-colors"
          >
            12별자리 상세 가이드 →
          </Link>
        </div>
      </section>

      {/* 동양 12지 */}
      <section className="w-full max-w-6xl mx-auto px-4 mt-14 py-6 rounded-3xl bg-white/[0.02]" aria-labelledby="chinese-zodiac-heading">
        <div className="section-line mb-8" />
        <h2
          id="chinese-zodiac-heading"
          className="text-left text-white/85 text-xl sm:text-2xl font-semibold mb-6 font-serif-display"
        >
          동양 12지 띠 안내
        </h2>
        <div id="chinese-zodiac-list" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
          {CHINESE_ZODIAC.map((item, i) => (
            <div key={i} className={`rounded-xl min-h-20 p-3 group ${i >= 4 && !chineseZodiacExpanded ? 'hidden lg:block' : ''}`} style={glassCard}>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-base transition-transform group-hover:scale-110">{item.emoji}</span>
                <span className="text-white/80 text-sm font-semibold">{item.name}</span>
              </div>
              <p className="text-purple-100/65 text-xs leading-relaxed">{item.years}</p>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="lg:hidden mt-4 min-h-11 w-full rounded-xl border border-purple-300/25 text-purple-100 text-base font-semibold"
          aria-expanded={chineseZodiacExpanded}
          aria-controls="chinese-zodiac-list"
          onClick={() => setChineseZodiacExpanded((open) => !open)}
        >
          {chineseZodiacExpanded ? disclosureCopy.chineseClose : disclosureCopy.chineseOpen}
        </button>
        <div className="mt-5 text-right">
          <Link
            href="/chinese-zodiac"
            className="inline-flex min-h-11 items-center text-purple-200 hover:text-white text-sm font-semibold transition-colors"
          >
            12지 상세 가이드 →
          </Link>
        </div>
      </section>

      {/* 블로그 추천 */}
      <section className="w-full max-w-4xl mx-auto px-4 mt-16" aria-labelledby="blog-picks-heading">
        <div className="section-line mb-8" />
        <h2
          id="blog-picks-heading"
          className="text-left text-white/85 text-xl sm:text-2xl font-semibold mb-6 font-serif-display"
        >
          별자리 &amp; 운세 가이드
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {BLOG_PICKS.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`rounded-xl p-5 card-glow group block min-h-28 ${index === 0 ? 'sm:col-span-3 sm:min-h-40' : ''}`}
              style={glassCard}
            >
              <span
                className="text-xl block mb-3 transition-transform group-hover:scale-110 origin-left"
                style={{ color: 'rgba(192,132,252,0.7)' }}
              >
                {post.emoji}
              </span>
              <p className={`${index === 0 ? 'text-xl sm:text-2xl font-serif-display' : 'text-base'} text-white/85 font-semibold leading-snug group-hover:text-white transition-colors text-keep-all`}>
                {post.title}
              </p>
            </Link>
          ))}
        </div>
        <div className="mt-5 text-right">
          <Link
            href="/blog"
            className="inline-flex min-h-11 items-center text-purple-200 hover:text-white text-sm font-semibold transition-colors"
          >
            전체 가이드 블로그 →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full max-w-3xl mx-auto px-4 mt-16" aria-labelledby="faq-section-heading">
        <div className="section-line mb-8" />
        <h2
          id="faq-section-heading"
          className="text-left text-white/85 text-xl sm:text-2xl font-semibold mb-6 font-serif-display"
        >
          자주 묻는 질문
        </h2>
        <div className="space-y-3">
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
            <div key={i} className="rounded-xl" style={glassCard}>
              <button
                type="button"
                className="min-h-14 w-full px-5 py-4 text-white/90 text-left text-base font-semibold flex items-start gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-purple-300 rounded-xl"
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => setOpenFaq(isOpen ? null : i)}
              >
                <span style={{ color: 'rgba(192,132,252,0.6)' }}>Q.</span>
                {q}
                <span className={`ml-auto text-purple-200 transition-transform ${isOpen ? 'rotate-45' : ''}`} aria-hidden="true">＋</span>
              </button>
              <div id={answerId} hidden={!isOpen}>
                <p className="text-white/78 text-base leading-7 px-5 pb-5 pl-10 text-keep-all">{a}</p>
              </div>
            </div>
          );})}
        </div>
      </section>

      {/* 서비스 소개 */}
      <section className="w-full max-w-3xl mx-auto px-4 mt-14" aria-labelledby="about-heading">
        <div
          className="rounded-2xl p-6"
          style={{
            background: 'rgba(139,92,246,0.03)',
            border: '1px solid rgba(192,132,252,0.08)',
          }}
        >
          <h2 id="about-heading" className="text-white/90 text-base font-semibold mb-3 font-serif-display">
            {tr.serviceIntroTitle}
          </h2>
          <p className="text-white/78 text-base leading-7 mb-3 text-keep-all">{tr.serviceIntroText}</p>
          <p className="text-white/70 text-base leading-7 text-keep-all">
            starfate.day는 별자리와 동양 12지를 함께 읽는 무료 운세 가이드입니다.
            한국어·영어·일본어·중국어를 지원하고, 타로와 별자리 궁합 등 가볍게 즐길 콘텐츠를 제공합니다.
            모든 운세는 오락과 자기성찰을 위한 참고 자료입니다.
          </p>
        </div>
      </section>
    </>
  );
}
