import type { Metadata } from 'next';
import Link from 'next/link';
import { CardArtwork, type ArtworkVariant } from '@/components/Artwork';

export const metadata: Metadata = {
  title: '별자리·운세 가이드 블로그 | StarFate',
  description: '점성술, 별자리, 운세에 관한 가이드. 서양 별자리와 동양 12지의 역사, 궁합, 해석법을 문화적 배경과 함께 설명합니다.',
  alternates: { canonical: 'https://starfate.day/blog' },
  openGraph: {
    title: '별자리·운세 가이드 블로그 | StarFate',
    description: '점성술, 별자리, 운세에 관한 깊이 있는 가이드 모음',
    type: 'website',
    url: 'https://starfate.day/blog',
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
    description: '별자리 간 궁합의 원리부터 실전 연애 궁합까지. 원소별 궁합 패턴과 행성 상징을 점성술의 문화적 해석으로 소개합니다.',
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
    title: '오늘의 운세를 제대로 읽는 방법 — 운세 해석의 현명한 활용법',
    description: '매일 접하는 운세를 어떻게 해석하고 실생활에 적용할 수 있을까요? 운세의 한계와 건강한 활용법을 알려드립니다.',
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
    slug: 'zodiac-myths-facts',
    title: '별자리, 안 믿는다면서 왜 자꾸 보게 될까?',
    description: '별자리 이야기가 오래 살아남은 이유를 밤하늘의 역사, 바넘 효과, 연애와 관계의 실제 장면을 통해 읽어봅니다.',
    date: '2026년 8월 1일',
    readTime: '5분',
    category: '별자리 문화',
    emoji: '🌌',
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
  {
    slug: 'barnum-effect-astrology',
    title: "MBTI보다 정교한 '운명의 알고리즘': 왜 우리는 여전히 별자리에 열광하는가?",
    description: '1948년 포러 실험에서 시작된 바넘 효과. 왜 별자리 설명은 항상 "나한테 딱 맞는 것 같은가"? 심리학 연구로 분석한 별자리 신뢰의 메커니즘.',
    date: '2025년 7월 8일',
    readTime: '11분',
    category: '심리 분석',
    emoji: '🧠',
  },
  {
    slug: 'morning-fortune-ritual',
    title: "운명을 바꾸는 아침 5분: StarFate가 제안하는 나만의 운세 활용법",
    description: '골위처의 실행 의도 연구, 점화 효과, 자아 고갈 이론으로 설계한 아침 운세 루틴. 운세를 예언이 아닌 의도 설정 도구로 활용하는 5단계 방법.',
    date: '2025년 7월 15일',
    readTime: '8분',
    category: '리추얼 라이프',
    emoji: '🌅',
  },
  {
    slug: 'nasa-ophiuchus-13th-zodiac',
    title: '뱀주인자리는 왜 황도 12궁에 포함되지 않을까? — 천문학과 점성술의 차이',
    description: '“별자리가 바뀌었다” 논쟁의 배경과 열대 황도대, 실제 별자리, 세차운동의 차이를 구분해 설명합니다.',
    date: '2025년 7월 22일',
    readTime: '9분',
    category: '천문학 팩트',
    emoji: '🐍',
  },
  {
    slug: 'twin-study-astrology',
    title: '같은 날 태어난 2,000명을 추적했다 — 쌍둥이 연구가 별자리에 던진 가장 불편한 질문',
    description: '제프리 딘의 타임트윈 연구, 숀 칼슨의 Nature 이중맹검 실험, 화성 효과 재현 실패까지. 데이터가 말하는 별자리의 예측력과 그럼에도 우리가 별자리를 보는 이유.',
    date: '2025년 8월 5일',
    readTime: '10분',
    category: '데이터 분석',
    emoji: '👯',
  },
  {
    slug: 'ancient-egypt-astronomy',
    title: '고대 이집트는 왜 별자리로 나일강 범람을 예측했나 — 천문학과 점성술이 갈라지기 전의 역사',
    description: '시리우스 헬리아칼 라이징, 덴데라 조디악, 프톨레마이오스의 테트라비블로스까지. 케플러와 갈릴레오도 점성술 차트를 그렸던 시절의 이야기.',
    date: '2025년 8월 12일',
    readTime: '12분',
    category: '별자리 역사',
    emoji: '🏛️',
  },
  {
    slug: 'zodiac-in-medieval-art',
    title: '중세 기도서 달력에는 왜 별자리가 함께 그려졌나 — 성무일도서와 황도대 미술',
    description: '베리 공작의 성무일도서 달력 그림, 12달의 노동, 지오토가 그린 별, 뒤러의 천구도까지. 중세와 르네상스 미술에서 별자리가 시간을 표시하는 장치로 쓰인 이유를 살펴봅니다.',
    date: '2026년 11월 2일',
    readTime: '10분',
    category: '별자리 역사',
    emoji: '🖼️',
  },
  {
    slug: 'lunar-calendar-rule',
    title: '윤달은 왜 생길까 — 음력의 19년 주기와 2033년 문제',
    description: '삭망월 29.53일과 태양년 365.24일의 차이, 19년에 7번 윤달을 넣는 메톤 주기, 중기가 없는 달을 윤달로 삼는 규칙, 그리고 2033년에 달력 계산이 갈리는 이유.',
    date: '2026년 11월 7일',
    readTime: '11분',
    category: '달력과 시간',
    emoji: '🌘',
  },
  {
    slug: 'saturn-return-psychology',
    title: '토성 회귀는 서른의 위기를 설명할까 — 점성술과 발달심리학 사이',
    description: '토성의 29.46년 공전 주기, 첫 토성 회귀가 29~30세에 오는 이유, 레빈슨의 서른 전환 연구, 그리고 별자리 예측력에 대한 실증 연구 결과를 함께 정리합니다.',
    date: '2026년 11월 11일',
    readTime: '9분',
    category: '심리 분석',
    emoji: '🪐',
  },
  {
    slug: 'star-name-etymology',
    title: '베텔게우스, 알골, 미자르 — 별 이름은 누가 지었나',
    description: '아랍어에서 온 밝은 별 이름들, 프톨레마이오스 목록이 번역되며 생긴 오해, 2016년 국제천문연맹의 공식 별 이름 목록, 그리고 한국 전통의 28수와 천상열차분야지도.',
    date: '2026년 11월 16일',
    readTime: '10분',
    category: '별자리 문화',
    emoji: '✨',
  },
  {
    slug: 'islamic-astronomy-legacy',
    title: '마라가 천문대에서 코페르니쿠스까지 — 이슬람 천문학이 유럽에 넘긴 것',
    description: '지혜의 집의 번역, 알콰리즈미, 1259년 마라가 천문대와 투시 부부, 울루그베그의 사마르칸트 관측, 톨레도 번역과 알폰시안 표까지. 유럽 천문학이 물려받은 계산 기술의 계보.',
    date: '2026년 11월 19일',
    readTime: '12분',
    category: '별자리 역사',
    emoji: '🕌',
  },
];

const CATEGORIES = Array.from(new Set(ARTICLES.map((a) => a.category)));

const CATEGORY_ART: { match: string; variant: ArtworkVariant }[] = [
  { match: '궁합', variant: 'compatibility' },
  { match: '달', variant: 'moon' },
  { match: '행성', variant: 'orbit' },
  { match: '심리', variant: 'journal' },
  { match: '역사', variant: 'history' },
  { match: '문화', variant: 'zodiac' },
  { match: '커리어', variant: 'numbers' },
  { match: '점성술', variant: 'orbit' },
  { match: '운세', variant: 'yearly' },
];

function artworkFor(category: string): ArtworkVariant {
  return CATEGORY_ART.find((entry) => category.includes(entry.match))?.variant ?? 'journal';
}

export default function BlogIndexPage() {
  const featured = ARTICLES[ARTICLES.length - 1];
  const rest = ARTICLES.slice(0, -1).slice().reverse();

  return (
    <div className="relative min-h-screen bg-white">
      <section className="relative overflow-hidden border-b border-[#e8eaef]">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 46% 70% at 88% -20%, rgba(59,91,219,0.07) 0%, transparent 64%)' }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-5 pb-12 pt-10 sm:px-6 sm:pt-16">
          <nav className="flex items-center gap-2 text-[0.76rem] text-[#64748b]" aria-label="위치">
            <Link href="/" className="transition-colors hover:text-[#3b5bdb]">홈</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#475569]">가이드 블로그</span>
          </nav>
          <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="eyebrow">The journal</span>
              <h1 className="mt-4 text-[2.4rem] font-bold leading-[1.08] tracking-[-0.04em] text-[#0f172a] sm:text-[3.2rem]">
                별자리 &amp; <span className="font-display font-semibold italic text-[#3b5bdb]">운세 가이드</span>
              </h1>
              <p className="mt-4 max-w-xl text-[0.92rem] leading-8 text-[#64748b] text-keep-all">
                점성술의 역사, 별자리 궁합, 운세 해석법까지 — 깊이 있는 아스트롤로지 지식을 쌓아보세요.
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-[#e8eaef] bg-white px-3.5 py-2">
              <span className="text-[0.95rem] font-bold tabular-nums text-[#0f172a]">{ARTICLES.length}</span>
              <span className="text-[0.66rem] uppercase tracking-[0.1em] text-[#64748b]">Articles</span>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6">
        <Link
          href="/blog/daily"
          className="group mb-10 flex flex-col gap-4 rounded-2xl border border-[#e8eaef] bg-[#f8f9fb] p-5 transition-all duration-300 hover:border-[#dcdfe6] hover:bg-white hover:shadow-[0_18px_40px_-26px_rgba(15,23,42,0.25)] sm:flex-row sm:items-center sm:p-6"
        >
          <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl border border-[#e8eaef] bg-white text-[#3b5bdb]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.16" stroke="currentColor" strokeWidth="1.3" />
              <path d="M12 2.6v2.2M12 19.2v2.2M2.6 12h2.2M19.2 12h2.2M5.4 5.4l1.6 1.6M17 17l1.6 1.6M18.6 5.4L17 7M7 17l-1.6 1.6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
          </div>
          <div className="flex-1">
            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#3b5bdb]">
              Updated every midnight
            </span>
            <h2 className="mt-1.5 text-[1.15rem] font-bold tracking-[-0.03em] text-[#0f172a] sm:text-[1.35rem]">오늘의 12별자리 일일 운세</h2>
            <p className="mt-1 text-[0.8rem] text-[#64748b]">
              종합·사랑·금전·건강 운세와 행운 아이템까지 매일 새롭게 업데이트됩니다.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 text-[0.8rem] font-semibold text-[#3b5bdb] transition-transform duration-300 group-hover:translate-x-1">
            바로 보기 <span aria-hidden="true">→</span>
          </span>
        </Link>

        <div className="mb-8 flex flex-wrap items-center gap-2">
          <span className="mr-1 text-[0.66rem] uppercase tracking-[0.12em] text-[#64748b]">Topics</span>
          {CATEGORIES.map((cat) => (
            <span key={cat} className="tag-quiet">{cat}</span>
          ))}
        </div>

        <Link
          href={`/blog/${featured.slug}`}
          className="group mb-6 grid gap-6 overflow-hidden rounded-2xl border border-[#e8eaef] bg-white p-2 transition-all duration-300 hover:-translate-y-1 hover:border-[#dcdfe6] hover:shadow-[0_24px_50px_-30px_rgba(15,23,42,0.28)] lg:grid-cols-[1.05fr_1fr] lg:items-stretch"
        >
          <CardArtwork variant={artworkFor(featured.category)} className="!aspect-auto min-h-[13rem] lg:h-full" />
          <div className="flex flex-col justify-between px-4 pb-4 pt-2 lg:px-6 lg:py-6">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="tag">Featured</span>
                <span className="text-[0.7rem] text-[#64748b]">{featured.date} · {featured.readTime} 읽기</span>
              </div>
              <h2 className="mt-4 text-[1.4rem] font-bold leading-snug tracking-[-0.03em] text-[#0f172a] text-keep-all sm:text-[1.75rem]">
                {featured.title}
              </h2>
              <p className="mt-3 text-[0.84rem] leading-7 text-[#64748b] text-keep-all">
                {featured.description}
              </p>
            </div>
            <div className="mt-5 flex items-center gap-3 border-t border-[#eef0f4] pt-4">
              <span className="text-[0.7rem] font-medium uppercase tracking-[0.08em] text-[#64748b]">{featured.category}</span>
              <span className="ml-auto inline-flex items-center gap-2 text-[0.8rem] font-semibold text-[#3b5bdb]">
                읽기 <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </div>
          </div>
        </Link>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#e8eaef] bg-white p-2 transition-all duration-300 hover:-translate-y-1 hover:border-[#dcdfe6] hover:shadow-[0_18px_40px_-26px_rgba(15,23,42,0.28)]"
            >
              <CardArtwork variant={artworkFor(article.category)} />
              <div className="flex flex-1 flex-col px-2.5 pb-2 pt-3.5">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <span className="tag">{article.category}</span>
                  <span className="text-[0.64rem] text-[#64748b]">{article.readTime}</span>
                </div>
                <h2 className="text-[0.98rem] font-semibold leading-snug tracking-[-0.02em] text-[#0f172a] text-keep-all transition-colors group-hover:text-[#3b5bdb]">
                  {article.title}
                </h2>
                <p className="mt-2 line-clamp-2 text-[0.76rem] leading-5 text-[#64748b] text-keep-all">
                  {article.description}
                </p>
                <div className="mt-auto flex items-center justify-between border-t border-[#eef0f4] pt-3 text-[0.68rem] text-[#64748b]">
                  <span>{article.date}</span>
                  <span>{article.readTime} 읽기</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 rounded-[24px] border border-[#e8eaef] bg-[#f8f9fb] px-6 py-10 text-center">
          <span className="eyebrow eyebrow-center">Daily reading</span>
          <p className="text-[1.2rem] font-bold tracking-[-0.03em] text-[#0f172a]">가이드를 읽었다면, 오늘의 운세도 확인해보세요</p>
          <Link href="/" className="btn-primary mt-1 text-[0.88rem]">
            오늘의 운세 무료로 보기 <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
