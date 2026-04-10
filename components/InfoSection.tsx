'use client';

import Link from 'next/link';
import { useLang } from '@/lib/useLang';
import { t } from '@/lib/i18n';

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

const cardStyle = { background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' };

export default function InfoSection() {
  const { lang } = useLang();
  const tr = t(lang);

  return (
    <>
      {/* 이용 방법 */}
      <section className="w-full max-w-2xl mx-auto px-4 mt-16" aria-labelledby="how-to-heading">
        <h2
          id="how-to-heading"
          className="text-center text-white/50 text-xs tracking-widest uppercase font-medium mb-6"
        >
          {tr.howToTitle}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {tr.howToSteps.map(({ title, desc }, i) => (
            <div key={i} className="rounded-2xl p-5 text-center" style={cardStyle}>
              <div
                className="inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold text-purple-300 mb-3"
                style={{ background: 'rgba(124,58,237,0.25)' }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="text-white/80 text-sm font-semibold mb-2">{title}</h3>
              <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 서양 별자리 안내 */}
      <section className="w-full max-w-2xl mx-auto px-4 mt-12" aria-labelledby="zodiac-heading">
        <h2
          id="zodiac-heading"
          className="text-center text-white/50 text-xs tracking-widest uppercase font-medium mb-6"
        >
          {tr.zodiacGuideTitle}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {tr.zodiacSigns.map((sign, i) => (
            <div key={i} className="rounded-xl p-3" style={cardStyle}>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">{ZODIAC_EMOJIS[i]}</span>
                <span className="text-white/80 text-sm font-semibold">{sign}</span>
              </div>
              <p className="text-purple-300/60 text-xs">{ZODIAC_PERIODS[i]}</p>
              <p className="text-white/35 text-xs mt-1 leading-relaxed">{tr.zodiacGuideTraits[i]}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Link href="/zodiac" className="text-purple-400 hover:text-purple-300 text-xs underline underline-offset-2">
            12별자리 상세 가이드 보기 →
          </Link>
        </div>
      </section>

      {/* 동양 12지 띠 안내 */}
      <section className="w-full max-w-2xl mx-auto px-4 mt-12" aria-labelledby="chinese-zodiac-heading">
        <h2
          id="chinese-zodiac-heading"
          className="text-center text-white/50 text-xs tracking-widest uppercase font-medium mb-6"
        >
          동양 12지 띠 안내
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {CHINESE_ZODIAC.map((item, i) => (
            <div key={i} className="rounded-xl p-3" style={cardStyle}>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">{item.emoji}</span>
                <span className="text-white/80 text-sm font-semibold">{item.name}</span>
              </div>
              <p className="text-purple-300/50 text-xs leading-relaxed">{item.years}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Link href="/chinese-zodiac" className="text-purple-400 hover:text-purple-300 text-xs underline underline-offset-2">
            12지 상세 가이드 보기 →
          </Link>
        </div>
      </section>

      {/* 운세 가이드 블로그 추천 */}
      <section className="w-full max-w-2xl mx-auto px-4 mt-12" aria-labelledby="blog-picks-heading">
        <h2
          id="blog-picks-heading"
          className="text-center text-white/50 text-xs tracking-widest uppercase font-medium mb-6"
        >
          별자리 &amp; 운세 가이드
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {BLOG_PICKS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-xl p-4 transition-all hover:scale-[1.02]"
              style={cardStyle}
            >
              <span className="text-2xl block mb-2">{post.emoji}</span>
              <p className="text-white/70 text-sm font-medium leading-snug">{post.title}</p>
            </Link>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Link href="/blog" className="text-purple-400 hover:text-purple-300 text-xs underline underline-offset-2">
            전체 가이드 블로그 보기 →
          </Link>
        </div>
      </section>

      {/* 자주 묻는 질문 (FAQ) */}
      <section className="w-full max-w-2xl mx-auto px-4 mt-12" aria-labelledby="faq-section-heading">
        <h2
          id="faq-section-heading"
          className="text-center text-white/50 text-xs tracking-widest uppercase font-medium mb-6"
        >
          자주 묻는 질문
        </h2>
        <div className="space-y-3">
          {[
            {
              q: '오늘의 운세는 매일 바뀌나요?',
              a: '네. AI가 오늘 날짜를 기준으로 매일 새로운 운세를 생성합니다. 같은 생년월일이라도 날짜가 바뀌면 결과가 달라집니다.',
            },
            {
              q: '생년월일 정보가 저장되나요?',
              a: '아니요. 입력하신 생년월일은 운세 생성 후 즉시 파기되며 서버에 저장되지 않습니다. 개인정보는 전혀 수집하지 않습니다.',
            },
            {
              q: '운세 결과는 얼마나 정확한가요?',
              a: '본 서비스의 운세는 오락 및 자기성찰 목적의 AI 생성 콘텐츠입니다. 실제 미래를 예측하지 않으며, 중요한 결정의 근거로 사용하지 마세요.',
            },
            {
              q: '별자리와 띠는 어떻게 계산되나요?',
              a: '서양 별자리는 생년월일의 월·일을 기준으로, 동양 띠는 출생 연도를 기준으로 계산됩니다. 서양 별자리는 12개(양자리~물고기자리), 동양 띠는 12가지(쥐~돼지)입니다.',
            },
            {
              q: '서비스는 무료인가요?',
              a: '네, 완전 무료입니다. 생년월일과 성별만 입력하면 종합운·연애운·금전운·직업운·행운의 색·행운의 숫자를 바로 확인할 수 있습니다.',
            },
          ].map(({ q, a }, i) => (
            <div key={i} className="rounded-xl p-4" style={cardStyle}>
              <p className="text-white/70 text-sm font-semibold mb-1">Q. {q}</p>
              <p className="text-white/40 text-xs leading-relaxed">A. {a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 서비스 소개 */}
      <section className="w-full max-w-2xl mx-auto px-4 mt-12" aria-labelledby="about-heading">
        <div className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
          <h2 id="about-heading" className="text-white/70 text-sm font-semibold mb-3">
            {tr.serviceIntroTitle}
          </h2>
          <p className="text-white/40 text-xs leading-relaxed mb-3">{tr.serviceIntroText}</p>
          <p className="text-white/30 text-xs leading-relaxed">
            starfate.day는 별자리(서양 점성술)와 띠(동양 12지)를 결합한 AI 기반 무료 운세 서비스입니다.
            4개 언어(한국어·영어·일본어·중국어)를 지원하며, 오늘의 운세 외에도 타로 카드 운세, 전생 테스트,
            별자리 궁합, 숫자 게임 등 다양한 콘텐츠를 제공합니다.
            본 서비스의 모든 운세 콘텐츠는 오락 목적이며 실제 미래를 예측하지 않습니다.
          </p>
        </div>
      </section>
    </>
  );
}
