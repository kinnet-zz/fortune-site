import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const CHINESE_ZODIAC = [
  {
    slug: 'rat',
    name: '쥐띠',
    emoji: '🐭',
    years: '1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020',
    nextYear: '2032',
    element: '물',
    color: '#38bdf8',
    personality: '쥐띠는 영리하고 기민한 성격을 가지고 있습니다. 관찰력이 뛰어나고 주변 상황을 빠르게 파악하는 능력이 있습니다. 사교적이고 인간관계를 잘 구축하며, 어떤 환경에서도 잘 적응합니다. 표면적으로는 온순해 보이지만 내면에는 강한 의지와 야망이 숨어 있습니다.',
    love: '감정이 풍부하고 연인에게 헌신적입니다. 하지만 독립심도 강해 적당한 개인 공간이 필요합니다. 말(午)띠와는 상충 관계이므로 주의가 필요합니다.',
    money: '재물운이 좋고 돈을 모으는 능력이 뛰어납니다. 검소한 편이지만 필요할 때는 과감하게 투자합니다. 부동산이나 사업에서 좋은 성과를 냅니다.',
    career: '사업가, 금융가, 언론인, 작가, 연구원 직업에 적합합니다. 계획력과 실행력이 뛰어나 조직에서도 빠르게 성장합니다.',
    compatible: '소띠, 용띠, 원숭이띠',
    incompatible: '말띠, 닭띠, 토끼띠',
    lucky: { color: '파란색, 금색, 초록색', number: '2, 3', direction: '북쪽, 남동쪽' },
    traits: ['영리함', '기민함', '사교성', '야망', '적응력'],
    weaknesses: ['이기적', '소심함', '의심 많음', '과욕'],
  },
  {
    slug: 'ox',
    name: '소띠',
    emoji: '🐮',
    years: '1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021',
    nextYear: '2033',
    element: '흙',
    color: '#a3a3a3',
    personality: '소띠는 성실하고 끈기 있는 성격으로 유명합니다. 어떤 일이든 처음부터 끝까지 책임감 있게 수행합니다. 말보다 행동으로 보여주는 유형이며, 신뢰와 안정을 중시합니다. 변화를 싫어하고 전통을 중요시합니다.',
    love: '연애에서 매우 진지하고 헌신적입니다. 처음에는 표현이 서툴지만 한번 마음을 열면 끝까지 함께합니다. 쥐띠, 닭띠, 뱀띠와 잘 맞습니다.',
    money: '재정적으로 안정적이고 저축을 중요시합니다. 충동적인 소비를 하지 않으며, 꾸준한 노력으로 재물을 쌓습니다.',
    career: '농업, 건설, 제조, 의학, 교육 분야에서 두각을 나타냅니다. 리더보다는 실력 있는 전문가로 성장하는 유형입니다.',
    compatible: '쥐띠, 뱀띠, 닭띠',
    incompatible: '양띠, 말띠, 개띠',
    lucky: { color: '흰색, 노란색, 초록색', number: '1, 4', direction: '북쪽, 남쪽' },
    traits: ['성실함', '끈기', '책임감', '신뢰성', '인내심'],
    weaknesses: ['완고함', '변화 저항', '고집', '보수적'],
  },
  {
    slug: 'tiger',
    name: '호랑이띠',
    emoji: '🐯',
    years: '1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022',
    nextYear: '2034',
    element: '나무',
    color: '#f97316',
    personality: '호랑이띠는 용감하고 자신감 넘치는 성격입니다. 타고난 리더십으로 주변 사람들을 이끄는 카리스마가 있습니다. 정의감이 강하고 불의를 참지 못하며, 어떤 도전도 두려워하지 않습니다. 강렬하고 열정적인 삶을 살아갑니다.',
    love: '연애에서 매우 열정적이고 주도적입니다. 상대방에게 전폭적으로 헌신하지만, 자신의 독립성도 포기하지 않습니다. 말띠, 개띠와 특히 잘 맞습니다.',
    money: '대담한 투자를 즐기며, 큰 위험을 감수하더라도 큰 수익을 추구합니다. 기복이 있을 수 있으나 결국 성공하는 경우가 많습니다.',
    career: '군인, 경찰, 소방관, 정치인, 기업가 직업에 적합합니다. 리더십을 발휘할 수 있는 위치에서 진가를 발휘합니다.',
    compatible: '말띠, 개띠, 돼지띠',
    incompatible: '뱀띠, 원숭이띠',
    lucky: { color: '파란색, 회색, 주황색', number: '1, 3, 4', direction: '북쪽, 서쪽, 남쪽' },
    traits: ['용감함', '카리스마', '정의감', '리더십', '열정'],
    weaknesses: ['충동적', '고집', '무모함', '감정적'],
  },
  {
    slug: 'rabbit',
    name: '토끼띠',
    emoji: '🐰',
    years: '1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023',
    nextYear: '2035',
    element: '나무',
    color: '#ec4899',
    personality: '토끼띠는 온화하고 우아한 성격으로 주변의 사랑을 받습니다. 감수성이 풍부하고 예술적 재능이 있으며, 아름다운 것에 대한 안목이 뛰어납니다. 갈등을 싫어하고 평화로운 환경을 선호합니다.',
    love: '로맨틱하고 다정한 연애를 즐깁니다. 감성적으로 깊은 연결을 원하며, 상대방을 세심하게 배려합니다. 양띠, 돼지띠와 잘 맞습니다.',
    money: '신중한 재정 관리로 안정적인 자산을 형성합니다. 예술, 부동산 관련 투자에서 좋은 성과를 냅니다.',
    career: '예술가, 디자이너, 외교관, 상담가, 교사 직업에 적합합니다. 감성과 심미안을 살릴 수 있는 분야가 잘 맞습니다.',
    compatible: '양띠, 돼지띠, 개띠',
    incompatible: '닭띠, 용띠, 쥐띠',
    lucky: { color: '빨간색, 분홍색, 보라색', number: '3, 4', direction: '동쪽, 남동쪽' },
    traits: ['온화함', '우아함', '예술성', '섬세함', '공감능력'],
    weaknesses: ['우유부단', '회피적', '감정 기복', '소심함'],
  },
  {
    slug: 'dragon',
    name: '용띠',
    emoji: '🐲',
    years: '1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024',
    nextYear: '2036',
    element: '흙',
    color: '#eab308',
    personality: '용띠는 12지신 중 유일한 상상의 동물로, 특별한 운명을 타고난 별자리입니다. 자신감 넘치고 카리스마 있으며, 주변에 강렬한 인상을 남깁니다. 이상이 높고 완벽주의 성향이 있으며, 불가능한 것도 가능하게 만드는 에너지를 가집니다.',
    love: '열정적이고 강렬한 연애를 즐깁니다. 상대방에게 깊이 헌신하지만, 자신의 자아와 목표는 포기하지 않습니다. 쥐띠, 원숭이띠와 잘 맞습니다.',
    money: '사업 감각이 뛰어나고 큰 그림을 보는 능력이 있습니다. 과감한 투자로 큰 성공을 거두기도 합니다.',
    career: '기업가, 예술가, 정치인, 군사 전략가, 영화 제작자 직업에 적합합니다. 리더 위치에서 진가를 발휘합니다.',
    compatible: '쥐띠, 원숭이띠, 닭띠',
    incompatible: '개띠, 토끼띠, 용띠',
    lucky: { color: '금색, 은색, 회색', number: '1, 6, 7', direction: '동쪽, 북쪽, 서쪽' },
    traits: ['카리스마', '이상주의', '에너지', '자신감', '완벽주의'],
    weaknesses: ['오만함', '충동적', '까다로움', '비타협적'],
  },
  {
    slug: 'snake',
    name: '뱀띠',
    emoji: '🐍',
    years: '1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025',
    nextYear: '2037',
    element: '불',
    color: '#7c3aed',
    personality: '뱀띠는 지혜롭고 신중한 성격을 가졌습니다. 직관력이 뛰어나 상황을 꿰뚫어 보는 능력이 있으며, 말보다는 행동으로 보여주는 조용한 카리스마가 있습니다. 신비롭고 매력적인 분위기로 주변의 관심을 끌며, 깊은 사고력을 가지고 있습니다.',
    love: '연애에서 신중하고 깊은 감정을 가집니다. 한번 사랑에 빠지면 헌신적이지만 질투심도 강합니다. 소띠, 닭띠와 특히 잘 맞습니다.',
    money: '재물에 대한 감각이 뛰어나고 투자에서도 직관적인 판단을 합니다. 검소하면서도 질 높은 것을 선택하는 경향이 있습니다.',
    career: '철학자, 교육자, 점성가, 심리상담사, 과학자 직업에 적합합니다. 깊이 있는 사고와 분석이 필요한 분야에서 탁월합니다.',
    compatible: '소띠, 닭띠',
    incompatible: '호랑이띠, 돼지띠',
    lucky: { color: '빨간색, 노란색, 검정색', number: '2, 8, 9', direction: '남쪽, 북동쪽' },
    traits: ['지혜', '직관력', '신중함', '카리스마', '분석력'],
    weaknesses: ['의심', '소유욕', '냉담함', '복수심'],
  },
  {
    slug: 'horse',
    name: '말띠',
    emoji: '🐴',
    years: '1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026',
    nextYear: '2038',
    element: '불',
    color: '#ef4444',
    personality: '말띠는 자유롭고 활동적인 성격으로 유명합니다. 에너지가 넘치고 열정적이며, 새로운 모험을 즐깁니다. 타고난 소통 능력으로 어디서나 인기를 끌며, 독립심이 강해 자유로운 환경에서 최고의 능력을 발휘합니다.',
    love: '연애에서 열정적이고 로맨틱합니다. 구속을 싫어하므로 자유를 이해해 주는 파트너가 필요합니다. 호랑이띠, 양띠, 개띠와 잘 맞습니다.',
    money: '돈을 잘 벌지만 씀씀이도 큰 편입니다. 변화를 즐기는 성격으로 다양한 수입원을 만들어 내기도 합니다.',
    career: '세일즈, 여행 업계, 스포츠, 정치, 언론 분야에서 두각을 나타냅니다. 사람들과 활발히 소통하는 직업이 잘 맞습니다.',
    compatible: '호랑이띠, 양띠, 개띠',
    incompatible: '쥐띠, 소띠',
    lucky: { color: '노란색, 초록색', number: '2, 3, 7', direction: '동쪽, 서쪽, 남쪽' },
    traits: ['활동성', '자유로움', '열정', '소통능력', '독립심'],
    weaknesses: ['충동적', '인내심 부족', '이기적', '변덕스러움'],
  },
  {
    slug: 'goat',
    name: '양띠',
    emoji: '🐑',
    years: '1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027',
    nextYear: '2039',
    element: '흙',
    color: '#84cc16',
    personality: '양띠는 온화하고 친절한 성격으로 주변을 편안하게 만듭니다. 예술적 감수성이 풍부하고 창의적인 분야에서 재능을 발휘합니다. 강한 감수성으로 다른 사람의 감정을 잘 이해하며, 집단 내에서 조화를 추구합니다.',
    love: '감성적이고 로맨틱한 연애를 즐깁니다. 상대방에게 세심한 배려를 보여주며, 안정적이고 평화로운 관계를 원합니다. 토끼띠, 말띠, 돼지띠와 잘 맞습니다.',
    money: '직관적인 투자 감각이 있지만, 때로는 충동적인 소비를 하기도 합니다. 예술 관련 투자에서 좋은 결과를 얻는 경우가 많습니다.',
    career: '예술가, 디자이너, 배우, 음악가, 보육사 직업에 적합합니다. 창의성과 감수성을 발휘할 수 있는 분야가 잘 맞습니다.',
    compatible: '토끼띠, 말띠, 돼지띠',
    incompatible: '소띠, 개띠, 용띠',
    lucky: { color: '초록색, 빨간색, 보라색', number: '2, 7', direction: '북쪽, 북서쪽' },
    traits: ['온화함', '예술성', '공감능력', '창의성', '평화로움'],
    weaknesses: ['우유부단', '비관적', '의존성', '소극적'],
  },
  {
    slug: 'monkey',
    name: '원숭이띠',
    emoji: '🐒',
    years: '1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016, 2028',
    nextYear: '2040',
    element: '금',
    color: '#f59e0b',
    personality: '원숭이띠는 지능이 높고 재치 있는 성격으로 유명합니다. 빠른 두뇌 회전과 창의적인 아이디어로 어떤 문제도 해결해 냅니다. 유머감각이 뛰어나고 사교적이며, 어디서나 분위기를 띄우는 재주가 있습니다.',
    love: '연애에서 재미있고 활기찬 관계를 원합니다. 지루한 관계는 오래 지속하기 어려우며, 새로운 자극이 필요합니다. 쥐띠, 용띠와 특히 잘 맞습니다.',
    money: '사업 수완이 좋고 기회를 잡는 능력이 탁월합니다. 주식이나 신사업 투자에서 좋은 성과를 냅니다.',
    career: '사업가, 과학자, 엔지니어, 연예인, 마케터 직업에 적합합니다. 다재다능한 능력을 다양하게 활용할 수 있는 분야가 좋습니다.',
    compatible: '쥐띠, 용띠',
    incompatible: '호랑이띠, 돼지띠',
    lucky: { color: '흰색, 파란색, 금색', number: '1, 7, 8', direction: '북쪽, 북서쪽' },
    traits: ['지능', '재치', '창의성', '사교성', '유머'],
    weaknesses: ['교활함', '불성실', '자만심', '충동적'],
  },
  {
    slug: 'rooster',
    name: '닭띠',
    emoji: '🐓',
    years: '1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029',
    nextYear: '2041',
    element: '금',
    color: '#f97316',
    personality: '닭띠는 부지런하고 관찰력이 뛰어난 성격입니다. 세심하고 꼼꼼하게 일을 처리하며, 외모와 이미지에 신경을 많이 씁니다. 직설적이고 솔직한 성격으로 생각을 거침없이 표현하며, 완벽을 추구하는 경향이 있습니다.',
    love: '연애에서 헌신적이고 진지합니다. 상대방을 위해 최선을 다하지만 완벽을 요구하는 경향이 있어 갈등이 생길 수 있습니다. 소띠, 뱀띠, 용띠와 잘 맞습니다.',
    money: '세심한 재정 관리로 안정적인 자산을 형성합니다. 투자보다는 저축을 선호하는 경향이 있습니다.',
    career: '의사, 군인, 교사, 패션 디자이너, 분석가 직업에 적합합니다. 정확성과 세심함이 요구되는 분야에서 탁월합니다.',
    compatible: '소띠, 뱀띠, 용띠',
    incompatible: '쥐띠, 토끼띠, 개띠',
    lucky: { color: '금색, 갈색, 노란색', number: '5, 7, 8', direction: '남쪽, 남동쪽' },
    traits: ['부지런함', '세심함', '솔직함', '완벽주의', '관찰력'],
    weaknesses: ['비판적', '독선적', '자만심', '자기중심적'],
  },
  {
    slug: 'dog',
    name: '개띠',
    emoji: '🐶',
    years: '1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030',
    nextYear: '2042',
    element: '흙',
    color: '#92400e',
    personality: '개띠는 충성스럽고 정직한 성격으로 많은 사랑을 받습니다. 한번 인연을 맺으면 끝까지 함께하는 의리가 있으며, 불의를 보면 참지 못하는 정의감이 강합니다. 겸손하고 성실하게 자신의 역할을 다하는 유형입니다.',
    love: '연애에서 매우 충성스럽고 헌신적입니다. 신뢰를 중시하며 한번 마음을 주면 변하지 않습니다. 호랑이띠, 말띠와 특히 잘 맞습니다.',
    money: '돈보다는 의미 있는 일을 중시합니다. 재정적으로 검소하고 필요한 곳에만 지출하는 경향이 있습니다.',
    career: '사회복지사, 상담가, 교사, 의사, 변호사 직업에 적합합니다. 사람을 돕고 정의를 실현하는 분야에서 만족감을 느낍니다.',
    compatible: '호랑이띠, 말띠, 토끼띠',
    incompatible: '소띠, 용띠, 양띠',
    lucky: { color: '붉은색, 초록색, 보라색', number: '3, 4, 9', direction: '동쪽, 남쪽, 북쪽' },
    traits: ['충성심', '정직함', '정의감', '성실함', '겸손함'],
    weaknesses: ['비관적', '완고함', '방어적', '염려 과다'],
  },
  {
    slug: 'pig',
    name: '돼지띠',
    emoji: '🐷',
    years: '1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031',
    nextYear: '2043',
    element: '물',
    color: '#ec4899',
    personality: '돼지띠는 12지신 중 마지막이지만, 복과 행운을 상징합니다. 순수하고 솔직한 성격으로 주변에 좋은 영향을 미칩니다. 사교적이고 관대하며, 주변 사람들을 위해 아낌없이 베풉니다. 낙천적인 성격으로 어떤 상황에서도 긍정적인 면을 찾습니다.',
    love: '연애에서 진지하고 헌신적입니다. 상대방을 위해 모든 것을 바치는 순수한 사랑을 하며, 장기적인 관계를 원합니다. 토끼띠, 양띠와 특히 잘 맞습니다.',
    money: '관대한 성격으로 소비가 클 수 있습니다. 하지만 행운이 따라 예상치 못한 재물을 얻는 경우도 많습니다.',
    career: '서비스업, 의료, 예술, 요리, 교육 분야에서 두각을 나타냅니다. 사람들을 즐겁게 하고 도움을 주는 직업이 잘 맞습니다.',
    compatible: '토끼띠, 양띠, 호랑이띠',
    incompatible: '뱀띠, 원숭이띠',
    lucky: { color: '노란색, 회색, 갈색', number: '2, 5, 8', direction: '동쪽, 남서쪽, 북동쪽' },
    traits: ['순수함', '관대함', '낙천성', '사교성', '성실함'],
    weaknesses: ['순진함', '과소비', '우유부단', '쉽게 속음'],
  },
];

export async function generateStaticParams() {
  return CHINESE_ZODIAC.map((a) => ({ animal: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ animal: string }>;
}): Promise<Metadata> {
  const { animal } = await params;
  const data = CHINESE_ZODIAC.find((a) => a.slug === animal);
  if (!data) return {};
  return {
    title: `${data.name} 성격 특징 완벽 가이드 | StarFate`,
    description: `${data.name} 성격, 연애운, 금전운, 직업운 완벽 분석. ${data.name} 해당 연도: ${data.years}. 궁합 잘 맞는 띠와 주의해야 할 띠 총정리.`,
    alternates: { canonical: `/chinese-zodiac/${animal}` },
    openGraph: {
      title: `${data.name} 완벽 가이드 | StarFate`,
      description: `${data.name} 성격, 연애, 금전, 직업 분석 — StarFate`,
      type: 'article',
    },
  };
}

const bgStyle = {
  background: 'linear-gradient(160deg, #050520 0%, #0a0a2e 30%, #130a2e 60%, #1a0a3e 100%)',
  minHeight: '100vh',
};

export default async function ChineseZodiacAnimalPage({
  params,
}: {
  params: Promise<{ animal: string }>;
}) {
  const { animal } = await params;
  const data = CHINESE_ZODIAC.find((a) => a.slug === animal);
  if (!data) notFound();

  return (
    <div style={bgStyle}>
      <div className="max-w-3xl mx-auto px-6 py-16 text-white/80">
        <Link href="/chinese-zodiac" className="text-purple-400 hover:text-purple-300 text-sm mb-8 inline-block">
          ← 띠 목록으로
        </Link>

        {/* 헤더 */}
        <header className="mb-10 text-center">
          <div className="text-7xl mb-4">{data.emoji}</div>
          <h1 className="text-4xl font-bold text-white mb-2">{data.name}</h1>
          <div className="flex justify-center gap-3 mt-4 flex-wrap">
            <span className="px-3 py-1 rounded-full text-sm bg-white/5 border border-white/10 text-white/60">
              🔥 원소: {data.element}
            </span>
            <span className="px-3 py-1 rounded-full text-sm bg-white/5 border border-white/10 text-white/60">
              📅 다음 {data.name} 해: {data.nextYear}년
            </span>
          </div>
        </header>

        {/* 해당 연도 */}
        <section className="mb-8 p-6 rounded-2xl bg-white/5 border border-white/10">
          <h2 className="text-base font-bold text-white mb-2">📅 {data.name} 해당 연도</h2>
          <p className="text-white/60 text-sm leading-relaxed">{data.years}</p>
        </section>

        {/* 핵심 특성 */}
        <section className="mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-green-500/10 border border-green-500/20">
              <h3 className="text-base font-bold text-green-400 mb-3">💪 강점</h3>
              <ul className="space-y-1">
                {data.traits.map((t) => (
                  <li key={t} className="text-sm text-white/70 flex items-center gap-2">
                    <span className="text-green-400">·</span> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-5 rounded-2xl bg-red-500/10 border border-red-500/20">
              <h3 className="text-base font-bold text-red-400 mb-3">⚠️ 약점</h3>
              <ul className="space-y-1">
                {data.weaknesses.map((w) => (
                  <li key={w} className="text-sm text-white/70 flex items-center gap-2">
                    <span className="text-red-400">·</span> {w}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 성격 / 연애 / 금전 / 직업 */}
        {[
          { icon: '🌟', title: '성격 & 특징', content: data.personality },
          { icon: '💕', title: '연애운', content: data.love },
          { icon: '💰', title: '금전운', content: data.money },
          { icon: '💼', title: '직업운', content: data.career },
        ].map(({ icon, title, content }) => (
          <section key={title} className="mb-6 p-6 rounded-2xl bg-white/5 border border-white/10">
            <h2 className="text-lg font-bold text-white mb-3">{icon} {title}</h2>
            <p className="leading-relaxed text-white/70">{content}</p>
          </section>
        ))}

        {/* 궁합 */}
        <section className="mb-8 p-6 rounded-2xl bg-white/5 border border-white/10">
          <h2 className="text-lg font-bold text-white mb-4">💞 궁합</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-green-400 font-semibold mb-1">✅ 잘 맞는 띠</p>
              <p className="text-white/70 text-sm">{data.compatible}</p>
            </div>
            <div>
              <p className="text-sm text-red-400 font-semibold mb-1">⚠️ 주의할 띠</p>
              <p className="text-white/70 text-sm">{data.incompatible}</p>
            </div>
          </div>
        </section>

        {/* 행운 */}
        <section className="mb-10 p-6 rounded-2xl bg-purple-500/10 border border-purple-500/20">
          <h2 className="text-lg font-bold text-white mb-4">🍀 행운의 상징</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            <div>
              <p className="text-purple-300 font-semibold mb-1">행운의 색</p>
              <p className="text-white/60">{data.lucky.color}</p>
            </div>
            <div>
              <p className="text-purple-300 font-semibold mb-1">행운의 숫자</p>
              <p className="text-white/60">{data.lucky.number}</p>
            </div>
            <div>
              <p className="text-purple-300 font-semibold mb-1">행운의 방향</p>
              <p className="text-white/60">{data.lucky.direction}</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-900/40 to-blue-900/40 border border-purple-500/20">
          <p className="text-white/60 mb-4 text-sm">오늘 {data.name}의 운세가 궁금하다면?</p>
          <Link
            href="/"
            className="inline-block px-6 py-3 rounded-full font-bold text-white text-sm"
            style={{ background: data.color }}
          >
            오늘의 운세 무료로 보기 →
          </Link>
        </div>

        {/* 다른 띠 보기 */}
        <nav className="mt-10">
          <h3 className="text-sm text-white/40 mb-3 font-semibold uppercase tracking-widest">다른 띠 보기</h3>
          <div className="flex flex-wrap gap-2">
            {CHINESE_ZODIAC.filter((a) => a.slug !== animal).map((a) => (
              <Link
                key={a.slug}
                href={`/chinese-zodiac/${a.slug}`}
                className="px-3 py-1 rounded-full text-xs border border-white/10 text-white/50 hover:border-purple-400 hover:text-purple-400 transition-colors"
              >
                {a.emoji} {a.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
