import type { Metadata } from 'next';
import Link from 'next/link';
import AuthorBio from '@/components/AuthorBio';

export const metadata: Metadata = {
  title: '세계 문화 속의 점성술 — 바빌로니아·인도·마야·켈트 전통 비교 | StarFate',
  description: '서양 점성술만이 점성술이 아닙니다. 바빌로니아, 인도 베딕, 마야, 켈트, 이슬람 등 세계 각 문명의 독자적인 점성술 전통과 그 문화적 의미를 비교합니다.',
  alternates: { canonical: 'https://www.starfate.day/blog/astrology-world-cultures' },
  openGraph: {
    title: '세계 문화 속의 점성술 — 바빌로니아·인도·마야·켈트 전통 비교',
    description: '세계 각 문명의 독자적인 점성술 전통과 그 문화적 의미를 비교합니다.',
    type: 'article',
  },
};

const bgStyle = {
  background: 'linear-gradient(160deg, #050520 0%, #0a0a2e 30%, #130a2e 60%, #1a0a3e 100%)',
  minHeight: '100vh',
};

const traditions = [
  {
    name: '바빌로니아 점성술', period: '기원전 2000년~', origin: '메소포타미아(현 이라크)',
    emoji: '🏛️',
    summary: '현대 서양 점성술의 직접적 조상. 왕과 국가의 운명을 예측하는 "문치 점성술(Mundane Astrology)"로 시작됨.',
    key: [
      '목적: 왕실과 국가의 운명 예측 (개인 운세는 나중에 발달)',
      '방법: 월식, 행성 이동, 기상 현상을 관찰',
      '문서: 에누마 아누 엔릴(Enuma Anu Enlil) — 70개 점토판에 기록된 7000개의 점성술 조짐',
      '황도대: 18개 별자리에서 12개로 체계화',
    ],
    legacy: '그리스를 통해 로마, 이슬람, 유럽 전체로 전파. 현대 서양 점성술의 뿌리.',
  },
  {
    name: '베딕 점성술(Jyotisha)', period: '기원전 1500년~', origin: '인도',
    emoji: '🕉️',
    summary: '힌두교 6개 베단가(Vedanga) 중 하나. "눈"을 의미하는 Jyotisha는 베다 경전을 올바르게 해석하기 위한 천문학적 지식 체계.',
    key: [
      '특징: 항성 황도대(Sidereal Zodiac) 사용 — 실제 별자리 위치 기준',
      '나크샤트라(Nakshatra): 달이 27~28일 동안 지나는 27개 별자리 구간 (서양과 다름)',
      '다샤(Dasha): 행성 주기 체계로 인생의 단계별 운세 분석',
      '차트: 북인도식(사각형), 남인도식(사각형 회전), 케랄라식 등 다양',
    ],
    legacy: '인도에서 여전히 결혼 날짜 선정, 사업 시작일 결정에 광범위하게 사용. 약 5000만 명의 점성술사 추정.',
  },
  {
    name: '마야 점성술', period: '기원전 1000년~기원후 900년', origin: '중앙아메리카',
    emoji: '🌽',
    summary: '마야 달력 체계(촐킨과 하압)에 기반한 독자적 점성술. 서양이나 인도와 독립적으로 발전한 완전히 다른 체계.',
    key: [
      '촐킨(Tzolkin): 260일 주기의 신성 달력. 20개 날 이름 × 13개 숫자',
      '하압(Haab): 365일의 태양 달력. 18개월(20일씩) + 5일',
      '달력 라운드: 촐킨 + 하압의 조합으로 52년 주기 형성',
      '목적: 농사, 의례, 전쟁의 길일 선정. 개인의 운명 예측',
    ],
    legacy: '마야 문화의 정교한 천문학 지식의 증거. 2012년 마야 달력 종료 오해로 현대에도 주목 받음.',
  },
  {
    name: '켈트 점성술', period: '기원전 500년~기원후 500년', origin: '유럽 (아일랜드, 스코틀랜드, 갈리아)',
    emoji: '🌿',
    summary: '자연의 순환에 기반한 드루이드(Druid) 사제들의 별 지식. 나무 달력(Tree Calendar)이 가장 독특한 특징.',
    key: [
      '오검 나무 달력: 1년을 13개 나무 달(月)로 나눔. 각 나무는 특정 성격과 에너지를 상징',
      '예: 자작나무(12/24~1/20) — 새 시작, 개척 / 참나무(6/10~7/7) — 힘, 안정',
      '사마인(Samhain), 임볼크(Imbolc) 등 8개 절기로 1년의 에너지 흐름을 파악',
      '별자리보다 계절의 변화와 자연의 리듬을 중시',
    ],
    legacy: '네오-드루이디즘, 위카 등 현대 자연 신앙에서 부활. "켈틱 점성술"이라는 현대 체계도 등장.',
  },
  {
    name: '이슬람 점성술(Ilm al-Nujum)', period: '기원후 7세기~15세기', origin: '아라비아, 페르시아',
    emoji: '🌙',
    summary: '그리스-바빌로니아 점성술을 이슬람 문명이 계승·발전시킨 형태. 유럽 중세 점성술에 결정적 영향을 미침.',
    key: [
      '번역 운동: 프톨레마이오스의 테트라비블로스 등 그리스 원전을 아랍어로 번역',
      '발전: 알-킨디, 아부 마샤르 등이 점성술 이론을 크게 발전시킴',
      '선택 점성술(Electional Astrology): 중요한 행동을 위한 최적의 시기 선정',
      '호라리 점성술(Horary Astrology): 질문한 시점의 차트로 그 질문에 대한 답을 구함',
    ],
    legacy: '12~17세기 유럽 대학에서 공식 교과목으로 가르쳐진 점성술의 토대 형성. 현대 아랍 세계에서도 여전히 인기.',
  },
];

export default function AstrologyWorldCulturesPage() {
  return (
    <div style={bgStyle}>
      <article className="max-w-3xl mx-auto px-6 py-16 text-white/80">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: '세계 문화 속의 점성술 — 바빌로니아·인도·마야·켈트 전통 비교',
              description: '세계 각 문명의 독자적인 점성술 전통과 그 문화적 의미를 비교합니다.',
              datePublished: '2026-04-12',
              dateModified: '2026-04-12',
              author: { '@type': 'Organization', name: 'StarFate 편집팀', url: 'https://www.starfate.day/about' },
              publisher: { '@type': 'Organization', name: 'StarFate', url: 'https://www.starfate.day' },
              mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.starfate.day/blog/astrology-world-cultures' },
            }),
          }}
        />

        <Link href="/blog" className="text-purple-400 hover:text-purple-300 text-sm mb-8 inline-block">
          ← 블로그 목록으로
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className="px-2 py-0.5 rounded-full text-xs font-medium" style={{ background: 'rgba(124,58,237,0.3)', color: 'rgba(196,181,253,1)' }}>
              세계 문화 비교
            </span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4 leading-tight">
            세계 문화 속의 점성술 — 바빌로니아·인도·마야·켈트 전통 비교
          </h1>
          <p className="text-white/50 text-base leading-relaxed">
            인류는 독립적으로, 서로 다른 대륙에서, 비슷한 질문에 답하려 했습니다. "별이 우리 삶에 무슨 의미인가?" 각 문명의 놀랍도록 다양한 답을 탐구합니다.
          </p>
        </header>

        <AuthorBio date="2026년 4월 12일" readTime="14분" category="세계 문화 비교" />

        <div className="space-y-8 text-sm leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-4">왜 모든 문명은 별을 바라봤는가</h2>
            <p className="mb-3">
              인류 역사에서 천문 관측과 점성술은 거의 모든 고대 문명에서 독자적으로 발전했습니다. 이것은 단순한 미신이 아니라, 생존을 위한 실용적 필요에서 시작됐습니다.
            </p>
            <p className="mb-3">
              별의 위치로 계절을 파악하여 농사를 짓고, 달의 주기로 밀물과 썰물을 예측하고, 행성의 이동으로 시간을 측정했습니다. 이 천문학적 지식이 종교적·철학적 의미 체계와 결합하면서 점성술이 탄생했습니다.
            </p>
            <p>
              놀라운 점은 서로 교류가 없었던 메소포타미아, 인도, 중국, 마야, 켈트 문명이 각각 독자적인 점성술 체계를 발전시켰다는 것입니다. 이는 "하늘에서 의미를 찾으려는 욕구"가 인간의 보편적인 특성임을 보여줍니다.
            </p>
          </section>

          {traditions.map((t) => (
            <section key={t.name}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{t.emoji}</span>
                <div>
                  <h2 className="text-xl font-bold text-white">{t.name}</h2>
                  <p className="text-white/40 text-xs mt-0.5">{t.period} · {t.origin}</p>
                </div>
              </div>
              <p className="mb-4 text-white/65">{t.summary}</p>
              <div className="rounded-2xl p-5 mb-3" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 className="text-white/70 font-semibold mb-3 text-xs uppercase tracking-wider">핵심 특징</h3>
                <ul className="space-y-2">
                  {t.key.map((k, i) => (
                    <li key={i} className="text-white/55 text-xs flex gap-2">
                      <span className="text-purple-400 flex-shrink-0">·</span>
                      {k}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl p-4" style={{ background: 'rgba(124,58,237,0.05)', border: '1px solid rgba(124,58,237,0.15)' }}>
                <p className="text-white/50 text-xs"><strong className="text-purple-300">현대적 유산:</strong> {t.legacy}</p>
              </div>
            </section>
          ))}

          <section>
            <h2 className="text-xl font-bold text-white mb-4">동양 점성술 — 중국, 한국, 일본</h2>
            <p className="mb-3">
              동아시아의 점성술은 음양오행(陰陽五行) 철학과 깊이 연결됩니다. 서양처럼 황도대 12별자리를 사용하지 않고, 60갑자(十天干 + 十二地支)를 기반으로 합니다.
            </p>
            <p className="mb-3">
              중국 점성술에서 가장 정교한 것은 사주명리(四柱命理)입니다. 태어난 연월일시 4개의 기둥(柱)과 각각의 천간·지지를 분석하여 개인의 성격, 운명, 관계를 읽습니다. 한국에서는 이를 "사주"라 부르며, 결혼, 사업, 이사 등 중요한 결정에 여전히 광범위하게 활용됩니다.
            </p>
            <p>
              일본의 경우 서양 점성술과 동양 12지, 그리고 독자적인 오행 점술(九星気学)이 공존합니다. 혈액형 성격론도 일본에서 독자적으로 발전한 성격 분류 체계입니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">공통점과 차이점 — 인류의 보편적 패턴</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl p-5" style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.15)' }}>
                <h3 className="text-green-300 font-semibold mb-3">🌐 공통점</h3>
                <ul className="space-y-2 text-white/60 text-xs">
                  <li>· 하늘의 순환과 지상의 사건을 연결</li>
                  <li>· 12 또는 13이라는 수(달 주기 기반)</li>
                  <li>· 개인 운명 + 국가/사회 운세 모두 포함</li>
                  <li>· 중요한 결정(결혼, 전쟁, 농사)에 활용</li>
                  <li>· 신관 또는 사제 계층이 지식 보유</li>
                </ul>
              </div>
              <div className="rounded-2xl p-5" style={{ background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.15)' }}>
                <h3 className="text-red-300 font-semibold mb-3">🔀 차이점</h3>
                <ul className="space-y-2 text-white/60 text-xs">
                  <li>· 기준점: 열대 황도대 vs 항성 황도대</li>
                  <li>· 시간 단위: 태양년 vs 음력 vs 260일 주기</li>
                  <li>· 강조점: 성격 vs 운명 vs 농사 시기</li>
                  <li>· 주체: 개인 vs 국가 vs 자연 주기</li>
                  <li>· 신성: 행성 신화 vs 자연 요소 vs 조상 신</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">현대 점성술의 통합적 시각</h2>
            <p className="mb-3">
              21세기 현대 점성술사들은 다양한 전통을 통합하는 경향이 있습니다. 서양 점성술의 심리적 분석틀, 베딕 점성술의 나크샤트라 체계, 중국 사주의 오행 분석을 결합하는 통합 점성술(Integrative Astrology)이 등장하고 있습니다.
            </p>
            <p>
              어느 전통이 "더 맞다"의 문제가 아닙니다. 각 전통은 그 문화가 하늘과 인간의 관계를 이해하는 방식을 반영합니다. 다양한 전통을 공부하면 점성술 자체가 인류 문화의 보편적 산물이라는 더 큰 그림을 볼 수 있습니다.
            </p>
          </section>

        </div>

        <div className="mt-8 p-6 rounded-2xl text-center" style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.3)' }}>
          <p className="text-white/60 mb-4 text-sm">나의 별자리와 띠 운세가 궁금하다면?</p>
          <Link href="/" className="inline-block px-6 py-3 rounded-full font-bold text-white text-sm" style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #9333ea 100%)' }}>
            🔮 오늘의 운세 무료로 보기 →
          </Link>
        </div>

        <nav className="mt-10">
          <h3 className="text-sm text-white/40 mb-3 font-semibold uppercase tracking-widest">관련 글</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/blog/what-is-astrology" className="p-4 rounded-xl text-sm hover:border-purple-400 transition-colors" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="text-white/70 font-medium">🔮 점성술이란 무엇인가?</div>
              <div className="text-white/30 text-xs mt-1">서양 별자리의 역사와 기초</div>
            </Link>
            <Link href="/blog/ancient-egypt-astronomy" className="p-4 rounded-xl text-sm hover:border-purple-400 transition-colors" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="text-white/70 font-medium">🏺 고대 이집트의 별자리</div>
              <div className="text-white/30 text-xs mt-1">별이 신이 되던 시대</div>
            </Link>
          </div>
        </nav>
      </article>
    </div>
  );
}
