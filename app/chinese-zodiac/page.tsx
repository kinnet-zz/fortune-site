import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '12띠 운세 정보 | 오늘의 운세 - 동양 십이지 완벽 가이드',
  description: '동양 십이지(쥐, 소, 호랑이, 토끼, 용, 뱀, 말, 양, 원숭이, 닭, 개, 돼지)의 성격, 특성, 궁합을 완벽하게 알아보세요. 내 띠가 무엇인지 확인하고 운세를 확인해보세요.',
  alternates: { canonical: '/chinese-zodiac' },
};

const CHINESE_ZODIAC_DATA = [
  {
    animal: '쥐',
    emoji: '🐭',
    english: 'Rat',
    element: '물 💧',
    years: [1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020],
    traits: ['영리하고 재치 있음', '적응력이 뛰어남', '호기심이 많음', '절약적'],
    personality: '쥐띠는 십이지 중 첫 번째로, 영리하고 재치 있는 성격을 가집니다. 새로운 환경에 빠르게 적응하는 능력이 뛰어나며, 관찰력이 날카롭습니다. 기회를 잘 포착하고 실용적인 사고를 갖고 있습니다. 사교적이어서 인맥이 넓으며, 필요한 것을 얻기 위한 방법을 항상 찾아냅니다.',
    strengths: '영리함, 적응력, 사교성, 실용적 사고',
    weaknesses: '때로 이기적, 소심함, 투기적 성향',
    compatible: '소띠, 용띠',
    careers: '비즈니스, 금융, 언론, 정치',
    famous: '대부분의 성공한 기업가들',
  },
  {
    animal: '소',
    emoji: '🐮',
    english: 'Ox',
    element: '땅 🌍',
    years: [1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021],
    traits: ['성실하고 근면함', '강한 의지와 인내', '신뢰할 수 있음', '보수적이고 전통적'],
    personality: '소띠는 성실하고 근면한 성격으로 유명합니다. 한 번 맡은 일은 끝까지 해내는 강한 책임감을 가지고 있습니다. 말보다는 행동으로 보여주는 타입이며, 약속을 매우 중요하게 여깁니다. 변화보다는 안정을 선호하며, 체계적이고 계획적입니다.',
    strengths: '성실함, 신뢰성, 인내심, 결단력',
    weaknesses: '고집스러움, 변화에 대한 저항, 완고함',
    compatible: '쥐띠, 뱀띠',
    careers: '농업, 건축, 의학, 교육, 군사',
    famous: '많은 의사와 교수들',
  },
  {
    animal: '호랑이',
    emoji: '🐯',
    english: 'Tiger',
    element: '나무 🌿',
    years: [1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022],
    traits: ['용감하고 자신감 넘침', '카리스마 있는 리더십', '경쟁적이고 야망 있음', '독립적'],
    personality: '호랑이띠는 용감하고 열정적인 자연의 지도자입니다. 강한 자신감과 카리스마로 자연스럽게 주목을 받습니다. 불의를 보면 참지 못하는 정의감과, 약자를 돕는 따뜻한 마음도 가지고 있습니다. 예측 불가능한 면이 있지만, 그것이 오히려 매력이 되기도 합니다.',
    strengths: '용기, 카리스마, 추진력, 관대함',
    weaknesses: '충동적, 반항적, 성급함',
    compatible: '말띠, 개띠',
    careers: '군인, 소방관, 사업가, 정치인, 운동선수',
    famous: '많은 스포츠 스타들',
  },
  {
    animal: '토끼',
    emoji: '🐰',
    english: 'Rabbit',
    element: '나무 🌿',
    years: [1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023],
    traits: ['온화하고 우아함', '예술적 감각이 뛰어남', '평화를 사랑함', '신중하고 조심스러움'],
    personality: '토끼띠는 십이지 중 가장 운이 좋은 동물 중 하나로 여겨집니다. 온화하고 우아한 성격으로 주변 사람들에게 사랑받습니다. 예술적 감각이 뛰어나고, 아름다운 것에 끌립니다. 갈등을 싫어하고 평화로운 환경을 선호하며, 외교적인 방식으로 문제를 해결합니다.',
    strengths: '우아함, 외교술, 예술성, 세심함',
    weaknesses: '지나치게 신중함, 우유부단, 표면적인 관계',
    compatible: '양띠, 돼지띠',
    careers: '예술, 외교, 건강 관련 직종, 패션',
    famous: '많은 예술가와 외교관들',
  },
  {
    animal: '용',
    emoji: '🐉',
    english: 'Dragon',
    element: '나무/흙',
    years: [1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024],
    traits: ['힘 있고 카리스마 넘침', '자신감 있고 열정적', '성공 지향적', '창의적이고 지적'],
    personality: '용띠는 십이지 중 유일한 신화적 동물로, 가장 강력한 에너지를 가집니다. 타고난 리더십과 카리스마로 어디서든 눈에 띄며, 성공을 향한 열망이 넘칩니다. 높은 이상과 목표를 가지며, 직접적이고 솔직한 성격입니다. 독립심이 강하고 자신만의 방식을 고집합니다.',
    strengths: '리더십, 열정, 창의성, 자신감',
    weaknesses: '오만할 수 있음, 완벽주의, 고집스러움',
    compatible: '쥐띠, 원숭이띠',
    careers: 'CEO, 예술가, 정치인, 건축가',
    famous: '많은 유명 CEO와 예술가들',
  },
  {
    animal: '뱀',
    emoji: '🐍',
    english: 'Snake',
    element: '불 🔥',
    years: [1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025],
    traits: ['지혜롭고 직관적', '신중하고 사려 깊음', '우아하고 매력적', '철학적 사고'],
    personality: '뱀띠는 지혜와 직관이 뛰어난 별자리입니다. 깊이 생각하고 신중하게 행동하며, 직관적으로 상황을 파악하는 능력이 있습니다. 우아하고 신비로운 매력이 있어 사람들을 끌어당깁니다. 철학적이고 정신적인 면에 관심이 많으며, 물질적 성공보다는 지혜를 추구합니다.',
    strengths: '지혜, 직관, 우아함, 분석력',
    weaknesses: '의심이 많음, 게으를 수 있음, 소유욕',
    compatible: '소띠, 닭띠',
    careers: '철학자, 작가, 심리학자, 교사, 점성가',
    famous: '많은 작가와 철학자들',
  },
  {
    animal: '말',
    emoji: '🐎',
    english: 'Horse',
    element: '불 🔥',
    years: [1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026],
    traits: ['활동적이고 자유롭움', '열정적이고 에너지 넘침', '독립적이고 여행을 좋아함', '표현력이 풍부'],
    personality: '말띠는 자유롭고 활동적인 정신을 가진 별자리입니다. 광활한 초원을 달리는 말처럼, 자유와 독립을 갈망합니다. 열정적이고 에너지 넘치며, 새로운 환경과 경험을 즐깁니다. 화려한 언변과 표현력으로 사람들을 매료시키고, 운동과 야외 활동을 즐깁니다.',
    strengths: '활동력, 자유로운 정신, 표현력, 독립성',
    weaknesses: '인내심 부족, 이기적일 수 있음, 결정 어려움',
    compatible: '호랑이띠, 양띠',
    careers: '운동선수, 여행가, 세일즈맨, 언론인',
    famous: '많은 운동선수와 탐험가들',
  },
  {
    animal: '양',
    emoji: '🐑',
    english: 'Goat',
    element: '땅 🌍',
    years: [1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027],
    traits: ['창의적이고 예술적', '온화하고 친절함', '공감 능력이 뛰어남', '낭만적'],
    personality: '양띠는 온화하고 예술적인 감성을 가진 별자리입니다. 창의적인 재능과 미적 감각이 뛰어나며, 아름다운 것을 만들고 감상하는 것을 좋아합니다. 타인에 대한 깊은 공감과 이해심을 가지고 있어 상대방의 마음을 잘 읽습니다. 평화로운 환경과 조화로운 관계를 원합니다.',
    strengths: '창의성, 온화함, 공감 능력, 예술성',
    weaknesses: '지나치게 의존적, 우유부단, 걱정이 많음',
    compatible: '토끼띠, 돼지띠',
    careers: '예술가, 음악가, 디자이너, 상담사',
    famous: '많은 예술가와 음악가들',
  },
  {
    animal: '원숭이',
    emoji: '🐒',
    english: 'Monkey',
    element: '금 ⚙️',
    years: [1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016, 2028],
    traits: ['영리하고 재치 있음', '호기심 많고 장난기 있음', '빠른 학습 능력', '창의적 문제 해결'],
    personality: '원숭이띠는 십이지 중 가장 영리하고 재치 있는 별자리입니다. 빠른 사고력과 뛰어난 문제 해결 능력을 가지고 있으며, 새로운 것을 배우는 속도가 빠릅니다. 유머 감각이 뛰어나고, 어떤 상황에서도 긍정적인 면을 찾습니다. 사교적이고 활기차며, 창의적인 방법으로 장애물을 극복합니다.',
    strengths: '지능, 재치, 적응력, 문제 해결 능력',
    weaknesses: '무책임할 수 있음, 규율 부족, 부정직할 수 있음',
    compatible: '용띠, 쥐띠',
    careers: '과학자, 엔지니어, 작가, 배우, 외교관',
    famous: '많은 과학자와 발명가들',
  },
  {
    animal: '닭',
    emoji: '🐓',
    english: 'Rooster',
    element: '금 ⚙️',
    years: [1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029],
    traits: ['근면하고 꼼꼼함', '솔직하고 자신감 있음', '완벽주의 성향', '관찰력이 뛰어남'],
    personality: '닭띠는 근면하고 부지런한 성격으로 유명합니다. 매우 꼼꼼하고 세심하며, 맡은 일을 완벽하게 해내려는 완벽주의 성향이 있습니다. 솔직하고 직접적인 소통을 선호하며, 때로는 지나치게 비판적으로 보일 수 있습니다. 높은 자존감을 가지고 있으며, 외모와 이미지 관리에 신경을 씁니다.',
    strengths: '근면성, 꼼꼼함, 솔직함, 자신감',
    weaknesses: '비판적, 완벽주의로 인한 스트레스, 지나친 자만',
    compatible: '소띠, 뱀띠',
    careers: '군인, 외과 의사, 치과 의사, 세프, 배우',
    famous: '많은 의료 전문가들과 군인들',
  },
  {
    animal: '개',
    emoji: '🐕',
    english: 'Dog',
    element: '흙 🌍',
    years: [1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030],
    traits: ['충실하고 신의가 있음', '공정하고 정의로움', '보호 본능이 강함', '헌신적'],
    personality: '개띠는 충성심과 신의를 가장 중요하게 여기는 별자리입니다. 한 번 믿음을 준 사람에게는 끝까지 함께하며, 불의를 보면 참지 못하는 강한 정의감을 가집니다. 소중한 사람들을 보호하려는 본능이 강하며, 성실하고 책임감이 있습니다. 다소 내성적이지만, 가까운 사람들에게는 따뜻합니다.',
    strengths: '충성심, 성실함, 정의감, 신뢰성',
    weaknesses: '걱정이 많음, 지나치게 비판적, 완고함',
    compatible: '호랑이띠, 말띠',
    careers: '경찰관, 사회복지사, 군인, 교사, 판사',
    famous: '많은 사회 운동가와 법조인들',
  },
  {
    animal: '돼지',
    emoji: '🐷',
    english: 'Pig',
    element: '물 💧',
    years: [1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031],
    traits: ['온화하고 관대함', '성실하고 순수함', '즐거움을 추구함', '결단력 있음'],
    personality: '돼지띠는 순수하고 관대한 마음을 가진 별자리입니다. 타인에 대한 강한 신뢰와 낙관적인 세계관을 가지며, 인생의 즐거움을 충분히 누리는 것을 믿습니다. 성실하고 책임감이 있어 맡은 일을 끝까지 완수합니다. 물질적인 풍요와 편안함을 즐기며, 주변 사람들을 행복하게 만드는 것을 좋아합니다.',
    strengths: '관대함, 성실함, 낙관성, 순수함',
    weaknesses: '지나치게 신뢰, 물질적 탐닉, 고집스러움',
    compatible: '토끼띠, 양띠',
    careers: '의사, 연구원, 엔터테이너, 서비스 업종',
    famous: '많은 의사와 봉사자들',
  },
];

function getRecentYears(years: number[]): string {
  return years.slice(-4).join(', ') + '년 ...';
}

const bgStyle = {
  background: 'linear-gradient(160deg, #050520 0%, #0a0a2e 30%, #130a2e 60%, #1a0a3e 100%)',
  minHeight: '100vh',
};

export default function ChineseZodiacPage() {
  return (
    <div style={bgStyle}>
      <div className="max-w-4xl mx-auto px-6 py-16 text-white/80">
        <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm mb-8 inline-block">
          ← 홈으로
        </Link>

        <header className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-white mb-3">12띠 운세 정보</h1>
          <p className="text-white/50 text-base max-w-xl mx-auto leading-relaxed">
            동양 전통의 십이지(十二支) 완벽 가이드. 내 띠의 성격, 강점, 약점, 궁합까지
            모두 알아보세요. 쥐, 소, 호랑이부터 돼지까지 12가지 띠를 상세히 안내합니다.
          </p>
        </header>

        {/* 내 띠 확인 */}
        <section className="mb-12" aria-labelledby="find-zodiac">
          <h2 id="find-zodiac" className="text-xl font-bold text-white mb-4">내 띠 확인하기</h2>
          <div
            className="rounded-2xl p-6 text-sm leading-relaxed"
            style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)' }}
          >
            <p className="text-white/60 mb-4">
              동양 십이지는 12년 주기로 반복됩니다. 태어난 해의 간지(干支)에 따라 띠가 결정됩니다.
              단, 음력 설날(정월 초하루) 이전에 태어난 경우 이전 해의 띠가 됩니다.
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {CHINESE_ZODIAC_DATA.map(({ animal, emoji, years }) => (
                <div
                  key={animal}
                  className="text-center rounded-xl p-2"
                  style={{ background: 'rgba(255,255,255,0.04)' }}
                >
                  <div className="text-2xl mb-1">{emoji}</div>
                  <div className="text-white/70 text-xs font-semibold">{animal}띠</div>
                  <div className="text-white/30 text-xs mt-1">
                    {years.slice(-3).join(', ')}...
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 각 띠 상세 */}
        <section aria-labelledby="animals-heading">
          <h2 id="animals-heading" className="text-xl font-bold text-white mb-6">12띠 상세 안내</h2>
          <div className="space-y-6">
            {CHINESE_ZODIAC_DATA.map(({ animal, emoji, english, element, years, traits, personality, strengths, weaknesses, compatible, careers }) => (
              <article
                key={animal}
                className="rounded-2xl overflow-hidden"
                style={{ border: '1px solid rgba(255,255,255,0.08)' }}
              >
                {/* 헤더 */}
                <div
                  className="px-6 py-5 flex flex-wrap items-center gap-4"
                  style={{ background: 'rgba(255,255,255,0.04)' }}
                >
                  <span className="text-4xl">{emoji}</span>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg">{animal}띠 <span className="text-white/40 font-normal text-base">({english})</span></h3>
                    <p className="text-purple-300/70 text-sm mt-0.5">
                      {element} · 최근 해: {getRecentYears(years)}
                    </p>
                  </div>
                </div>

                {/* 바디 */}
                <div className="px-6 py-5 space-y-4" style={{ background: 'rgba(255,255,255,0.02)' }}>
                  {/* 핵심 특성 */}
                  <div>
                    <h4 className="text-white/50 text-xs uppercase tracking-widest font-medium mb-2">핵심 특성</h4>
                    <div className="flex flex-wrap gap-2">
                      {traits.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-full text-xs text-white/70"
                          style={{ background: 'rgba(124,58,237,0.2)', border: '1px solid rgba(124,58,237,0.3)' }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 성격 */}
                  <div>
                    <h4 className="text-white/50 text-xs uppercase tracking-widest font-medium mb-2">성격 & 특징</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{personality}</p>
                  </div>

                  {/* 강점 & 약점 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div
                      className="rounded-xl p-4"
                      style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)' }}
                    >
                      <h4 className="text-green-300/70 text-xs font-semibold mb-2">✅ 강점</h4>
                      <p className="text-white/50 text-xs">{strengths}</p>
                    </div>
                    <div
                      className="rounded-xl p-4"
                      style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.15)' }}
                    >
                      <h4 className="text-red-300/70 text-xs font-semibold mb-2">⚠️ 약점</h4>
                      <p className="text-white/50 text-xs">{weaknesses}</p>
                    </div>
                  </div>

                  {/* 궁합 & 직업 */}
                  <div className="flex flex-col sm:flex-row gap-3 text-xs text-white/40">
                    <span>🤝 잘 맞는 띠: <strong className="text-white/60">{compatible}</strong></span>
                    <span className="hidden sm:inline text-white/20">·</span>
                    <span>💼 잘 맞는 직업: <strong className="text-white/60">{careers}</strong></span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white text-sm transition-all duration-300 hover:scale-[1.02]"
            style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #9333ea 50%, #6366f1 100%)' }}
          >
            🔮 내 띠 오늘 운세 보기
          </Link>
        </div>
      </div>
    </div>
  );
}
