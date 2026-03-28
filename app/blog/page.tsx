import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '별자리·운세 가이드 블로그 | StarFate',
  description: '점성술, 별자리, 운세에 관한 깊이 있는 가이드. 서양 별자리와 동양 12지의 역사, 궁합, 해석법까지 전문적인 정보를 제공합니다.',
  alternates: { canonical: 'https://www.starfate.day/blog' },
  openGraph: {
    title: '별자리·운세 가이드 블로그 | StarFate',
    description: '점성술, 별자리, 운세에 관한 깊이 있는 가이드 모음',
    type: 'website',
    url: 'https://www.starfate.day/blog',
  },
};

const ARTICLES = [
  {
    slug: 'what-is-astrology',
    title: '점성술이란 무엇인가? 서양 별자리의 역사와 기초 완벽 가이드',
    description: '수천 년의 역사를 가진 점성술의 기원부터 현대 별자리 해석법까지. 황도대 12별자리의 의미와 지배 행성, 원소의 관계를 체계적으로 정리했습니다.',
    date: '2025년 3월 1일',
    readTime: '8분',
    category: '점성술 기초',
    emoji: '🔮',
  },
  {
    slug: 'zodiac-compatibility-guide',
    title: '12 별자리 궁합 완벽 분석 — 나와 가장 잘 맞는 별자리는?',
    description: '별자리 간 궁합의 원리부터 실전 연애 궁합까지. 원소별 궁합 패턴과 행성 에너지를 기반으로 한 과학적 분석을 제공합니다.',
    date: '2025년 3월 5일',
    readTime: '10분',
    category: '별자리 궁합',
    emoji: '💞',
  },
  {
    slug: 'chinese-vs-western-zodiac',
    title: '동양 12지와 서양 별자리의 차이점 — 두 전통의 지혜를 비교하다',
    description: '음양오행에 기반한 동양 12지와 행성 에너지에 기반한 서양 별자리. 두 전통이 인간의 성격과 운명을 바라보는 방식의 공통점과 차이점을 분석합니다.',
    date: '2025년 3월 10일',
    readTime: '9분',
    category: '동서양 비교',
    emoji: '☯️',
  },
  {
    slug: 'how-to-read-daily-fortune',
    title: '오늘의 운세를 제대로 읽는 방법 — AI 점성술의 활용법',
    description: '매일 접하는 운세를 어떻게 해석하고 실생활에 적용할 수 있을까요? 운세의 과학적 원리와 건강한 활용법을 알려드립니다.',
    date: '2025년 3월 15일',
    readTime: '7분',
    category: '운세 활용',
    emoji: '📅',
  },
  {
    slug: 'planets-and-zodiac-signs',
    title: '지배 행성과 별자리의 관계 — 화성, 금성, 목성이 성격에 미치는 영향',
    description: '각 별자리를 지배하는 행성이 어떻게 성격과 운명을 형성하는지 탐구합니다. 행성의 신화적 의미부터 현대 점성술에서의 해석까지 깊이 있게 다룹니다.',
    date: '2025년 3월 20일',
    readTime: '11분',
    category: '행성과 별자리',
    emoji: '🪐',
  },
  {
    slug: 'zodiac-career-guide',
    title: '별자리별 최적 직업 가이드 — 나에게 맞는 커리어는?',
    description: '각 별자리의 타고난 강점과 성향에 맞는 직업과 커리어 방향을 분석합니다. 양자리부터 물고기자리까지 12별자리별 직업 적성을 상세히 살펴봅니다.',
    date: '2025년 3월 25일',
    readTime: '12분',
    category: '별자리 커리어',
    emoji: '💼',
  },
  {
    slug: 'moon-sign-guide',
    title: '달 별자리(Moon Sign) 완벽 가이드 — 감정과 내면을 지배하는 달의 힘',
    description: '태양 별자리보다 더 깊은 내면을 보여주는 달 별자리. 출생 시 달이 위치한 별자리가 감정, 직관, 관계 방식에 미치는 영향을 체계적으로 분석합니다.',
    date: '2025년 4월 1일',
    readTime: '9분',
    category: '달 별자리',
    emoji: '🌙',
  },
  {
    slug: 'rising-sign-guide',
    title: '상승 별자리(Rising Sign) 가이드 — 첫인상과 외면을 결정하는 어센던트',
    description: '출생 시간을 기반으로 계산되는 상승 별자리가 외모, 첫인상, 사회적 페르소나에 미치는 영향. 태양·달·상승 세 별자리를 종합한 깊이 있는 분석입니다.',
    date: '2025년 4월 5일',
    readTime: '8분',
    category: '상승 별자리',
    emoji: '⬆️',
  },
  {
    slug: 'chinese-zodiac-compatibility',
    title: '동양 12지 궁합 완벽 가이드 — 쥐·소·호랑이 최고의 파트너는?',
    description: '음양오행의 원리에 기반한 12지 동물별 궁합 분석. 최고의 궁합부터 주의가 필요한 조합까지, 동양 전통 궁합 이론을 현대적으로 해설합니다.',
    date: '2025년 4월 10일',
    readTime: '10분',
    category: '동양 궁합',
    emoji: '🐉',
  },
  {
    slug: 'numerology-lucky-numbers',
    title: '수비학과 행운의 숫자 — 생년월일로 알아보는 나의 숫자 에너지',
    description: '고대부터 전해 내려온 수비학(Numerology)의 원리와 생년월일로 계산하는 인생 수(Life Path Number). 숫자가 담고 있는 에너지와 의미를 탐구합니다.',
    date: '2025년 4월 15일',
    readTime: '8분',
    category: '수비학',
    emoji: '🔢',
  },
  {
    slug: 'zodiac-blood-type',
    title: '별자리와 혈액형 — 두 가지 성격 분석 시스템의 비교',
    description: '서양의 별자리와 동아시아의 혈액형 성격론을 비교 분석합니다. 두 체계의 유사점과 차이점, 그리고 각각이 성격 이해에 기여하는 방식을 살펴봅니다.',
    date: '2025년 4월 20일',
    readTime: '7분',
    category: '성격 분석',
    emoji: '🩸',
  },
  {
    slug: 'love-compatibility-guide',
    title: '연애 궁합 심층 분석 — 별자리별 최고의 파트너를 찾는 방법',
    description: '단순한 태양 별자리 궁합을 넘어 금성과 화성의 위치, 달 별자리까지 고려한 심층 연애 궁합 가이드. 실제 관계에서 작동하는 점성술의 원리를 설명합니다.',
    date: '2025년 4월 25일',
    readTime: '11분',
    category: '연애 궁합',
    emoji: '❤️',
  },
  {
    slug: 'zodiac-myths-facts',
    title: '별자리에 관한 오해와 진실 — 점성술의 과학적 사실 정리',
    description: '별자리 운세는 다 맞나요? 점성술은 미신일까요? 별자리에 관한 흔한 오해들을 과학적·역사적 관점에서 명확히 정리합니다.',
    date: '2025년 5월 1일',
    readTime: '6분',
    category: '별자리 상식',
    emoji: '❓',
  },
  {
    slug: 'chinese-zodiac-2026',
    title: '2026년 띠별 운세 완벽 가이드 — 내 띠의 올해 운세는?',
    description: '12가지 띠별로 2026년 한 해의 전반적인 운세, 연애운, 재물운, 건강운을 상세히 분석합니다. 각 띠가 올해 집중해야 할 것과 조심해야 할 것을 알아보세요.',
    date: '2025년 5월 10일',
    readTime: '15분',
    category: '연간 운세',
    emoji: '🐉',
  },
  {
    slug: '2026-yearly-horoscope',
    title: '2026년 별자리별 연간 운세 — 12별자리의 한 해 전망',
    description: '2026년 주요 행성 배치와 천체 이벤트가 12개 별자리에 미치는 영향을 분석합니다. 목성, 토성의 이동과 함께 당신의 별자리에 찾아올 기회와 도전을 미리 살펴보세요.',
    date: '2025년 5월 15일',
    readTime: '14분',
    category: '연간 운세',
    emoji: '⭐',
  },
];

const bgStyle = {
  background: 'linear-gradient(160deg, #050520 0%, #0a0a2e 30%, #130a2e 60%, #1a0a3e 100%)',
  minHeight: '100vh',
};

const CATEGORIES = Array.from(new Set(ARTICLES.map((a) => a.category)));

export default function BlogIndexPage() {
  return (
    <div style={bgStyle}>
      <div className="max-w-4xl mx-auto px-6 py-16 text-white/80">
        <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm mb-8 inline-block">
          ← 홈으로
        </Link>

        <header className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-white mb-3">별자리 &amp; 운세 가이드</h1>
          <p className="text-white/50 text-base max-w-xl mx-auto leading-relaxed">
            점성술의 역사, 별자리 궁합, 운세 해석법까지 — 깊이 있는 아스트롤로지 지식을 쌓아보세요.
          </p>
          <p className="text-white/30 text-sm mt-3">총 {ARTICLES.length}개 아티클</p>
        </header>

        {/* 오늘의 일일 운세 배너 */}
        <Link
          href="/blog/daily"
          className="block rounded-2xl p-6 mb-10 transition-all hover:scale-[1.01]"
          style={{
            background: 'linear-gradient(135deg, rgba(124,58,237,0.25) 0%, rgba(99,102,241,0.15) 100%)',
            border: '1px solid rgba(124,58,237,0.35)',
          }}
        >
          <div className="flex items-center gap-4">
            <div className="text-5xl">🔮</div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span
                  className="px-2 py-0.5 rounded-full text-xs font-bold"
                  style={{ background: 'rgba(124,58,237,0.5)', color: 'rgba(221,214,254,1)' }}
                >
                  ✨ 매일 AI 자동 생성
                </span>
              </div>
              <h2 className="text-white font-bold text-xl mb-1">오늘의 12별자리 일일 운세</h2>
              <p className="text-white/50 text-sm">
                Gemini AI가 매일 새롭게 생성하는 별자리별 운세. 종합·사랑·금전·건강 운세와 행운 아이템까지 확인하세요.
              </p>
            </div>
            <div className="text-purple-300 text-sm font-medium whitespace-nowrap">바로 보기 →</div>
          </div>
        </Link>

        {/* 카테고리 태그 */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {CATEGORIES.map((cat) => (
            <span
              key={cat}
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{ background: 'rgba(124,58,237,0.2)', color: 'rgba(196,181,253,0.8)', border: '1px solid rgba(124,58,237,0.3)' }}
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="space-y-6">
          {ARTICLES.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="block rounded-2xl p-6 transition-all hover:scale-[1.01]"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl flex-shrink-0">{article.emoji}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span
                      className="px-2 py-0.5 rounded-full text-xs font-medium"
                      style={{ background: 'rgba(124,58,237,0.3)', color: 'rgba(196,181,253,1)' }}
                    >
                      {article.category}
                    </span>
                    <span className="text-white/30 text-xs">{article.date}</span>
                    <span className="text-white/30 text-xs">· {article.readTime} 읽기</span>
                  </div>
                  <h2 className="text-white font-bold text-lg mb-2 leading-tight">{article.title}</h2>
                  <p className="text-white/50 text-sm leading-relaxed">{article.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white text-sm transition-all duration-300 hover:scale-[1.02]"
            style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #9333ea 50%, #6366f1 100%)' }}
          >
            🔮 오늘의 운세 무료로 보기
          </Link>
        </div>
      </div>
    </div>
  );
}
