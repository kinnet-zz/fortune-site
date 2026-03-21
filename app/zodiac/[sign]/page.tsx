import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const ZODIAC_SIGNS = [
  {
    slug: 'aries',
    name: '양자리',
    english: 'Aries',
    symbol: '♈',
    period: '3월 21일 ~ 4월 19일',
    element: '불 🔥',
    planet: '화성',
    color: '#ef4444',
    traits: ['용감하고 도전적', '행동력이 뛰어남', '열정적이고 에너지 넘침', '리더십이 강함'],
    personality: '양자리는 황도대의 첫 번째 별자리로, 활동적이고 진취적인 성격을 가집니다. 새로운 일을 시작하는 데 두려움이 없으며, 목표가 생기면 거침없이 달려갑니다. 때로는 성급하거나 무모해 보일 수 있지만, 그 뒤에는 진심 어린 열정이 있습니다. 어려운 상황에서도 포기하지 않는 강인한 정신력을 가지고 있습니다.',
    love: '연애에서 적극적으로 먼저 다가가는 타입입니다. 상대에 대한 강한 열정을 보이지만, 권태기가 빨리 찾아올 수 있어 새로운 자극이 필요합니다. 솔직하고 직접적인 방식으로 감정을 표현하며, 상대방에게도 같은 수준의 열정을 기대합니다.',
    money: '금전적으로는 충동적인 소비를 하는 경향이 있습니다. 큰 목표를 위해 과감하게 투자하기도 하며, 사업적 추진력이 뛰어납니다. 위험을 감수하더라도 새로운 기회에 도전하는 경향이 강합니다.',
    career: '리더십을 발휘할 수 있는 직업에서 빛을 발합니다. 기업가, 군인, 스포츠 선수, 소방관 등 도전적이고 역동적인 직업이 잘 맞습니다. 반복적이고 단조로운 업무보다는 새로운 프로젝트를 이끄는 역할을 선호합니다.',
    compatible: '사자자리, 사수자리',
    incompatible: '천칭자리, 염소자리',
    lucky: '빨간색, 화요일, 숫자 9',
    strengths: ['결단력', '용기', '열정', '자신감', '개척 정신'],
    weaknesses: ['충동적', '참을성 부족', '자기중심적', '고집스러움'],
    famous: '레이디 가가, 로버트 다우니 주니어, 엠마 왓슨',
  },
  {
    slug: 'taurus',
    name: '황소자리',
    english: 'Taurus',
    symbol: '♉',
    period: '4월 20일 ~ 5월 20일',
    element: '땅 🌍',
    planet: '금성',
    color: '#22c55e',
    traits: ['안정적이고 신중함', '인내심이 강함', '실용적이고 현실적', '감각적이고 풍요 추구'],
    personality: '황소자리는 현실적이고 안정을 중시하는 별자리입니다. 급격한 변화보다는 천천히 꾸준히 나아가는 것을 선호합니다. 물질적인 편안함과 아름다운 것에 대한 감각이 뛰어나며, 한 번 결심한 일은 끝까지 해냅니다. 음식, 예술, 자연에 대한 깊은 감각을 가지고 있습니다.',
    love: '연애에서는 신중하고 안정적인 관계를 원합니다. 처음에는 쉽게 마음을 열지 않지만, 한 번 신뢰가 쌓이면 매우 헌신적인 파트너가 됩니다. 로맨틱하고 감각적인 방식으로 애정을 표현하며, 장기적인 관계를 선호합니다.',
    money: '재정적으로 매우 보수적이고 저축을 중시합니다. 충동구매보다는 가치 있는 것에 투자하며, 장기적인 재무 계획을 세우는 데 능합니다. 부동산이나 실물 자산에 관심이 많습니다.',
    career: '은행, 금융, 부동산, 요리, 예술, 패션 분야에서 두각을 나타냅니다. 안정적이고 체계적인 환경에서 꾸준히 성과를 내는 유형입니다.',
    compatible: '처녀자리, 염소자리',
    incompatible: '전갈자리, 물병자리',
    lucky: '초록색, 금요일, 숫자 6',
    strengths: ['인내심', '신뢰성', '실용성', '결단력', '충성심'],
    weaknesses: ['고집스러움', '변화 거부', '소유욕', '게으름'],
    famous: '아델, 마크 저커버그, 데이비드 베컴',
  },
  {
    slug: 'gemini',
    name: '쌍둥이자리',
    english: 'Gemini',
    symbol: '♊',
    period: '5월 21일 ~ 6월 21일',
    element: '공기 💨',
    planet: '수성',
    color: '#eab308',
    traits: ['호기심 많고 다재다능', '말재주가 뛰어남', '사교적이고 친절함', '빠른 사고력'],
    personality: '쌍둥이자리는 두 가지 면을 동시에 가진 이중적인 별자리입니다. 지적 호기심이 왕성하고 다양한 분야에 관심이 많습니다. 뛰어난 언어 능력과 소통 능력으로 어디서든 환영받으며, 새로운 정보와 아이디어를 흡수하는 데 탁월합니다.',
    love: '연애에서 지적 자극과 대화를 매우 중시합니다. 재미있고 활기찬 관계를 원하며, 지루함을 잘 견디지 못합니다. 다양한 주제로 깊은 대화를 나눌 수 있는 파트너를 선호합니다.',
    money: '다양한 분야의 수입원을 갖는 경향이 있습니다. 아이디어를 통해 수익을 창출하는 데 능하지만, 집중력 부족으로 기회를 놓치는 경우도 있습니다.',
    career: '언론, 미디어, 교육, 마케팅, 영업 분야에서 뛰어난 능력을 발휘합니다. 커뮤니케이션 능력을 활용할 수 있는 분야가 적합합니다.',
    compatible: '천칭자리, 물병자리',
    incompatible: '사수자리, 처녀자리',
    lucky: '노란색, 수요일, 숫자 5',
    strengths: ['적응력', '지성', '소통 능력', '유머감각', '다재다능'],
    weaknesses: ['우유부단', '얕은 관계', '비일관성', '집중력 부족'],
    famous: '나탈리 포트만, 조니 뎁, 안젤리나 졸리',
  },
  {
    slug: 'cancer',
    name: '게자리',
    english: 'Cancer',
    symbol: '♋',
    period: '6월 22일 ~ 7월 22일',
    element: '물 💧',
    planet: '달',
    color: '#38bdf8',
    traits: ['감성적이고 직관적', '가족을 소중히 여김', '보호 본능이 강함', '공감 능력이 뛰어남'],
    personality: '게자리는 감성적이고 직관적인 별자리입니다. 가족과 집을 가장 소중히 여기며, 가까운 사람들을 위해 헌신합니다. 외부에는 단단한 껍데기를 보이지만, 내면은 매우 따뜻하고 섬세합니다. 과거의 추억과 전통을 중시하는 경향이 있습니다.',
    love: '깊고 안정적인 감정적 연결을 원합니다. 상대방을 온 마음으로 돌보며, 가정적이고 헌신적인 파트너입니다. 감정의 기복이 있을 수 있으므로 상대의 이해가 중요합니다.',
    money: '저축에 능하고 재정적 안정을 중시합니다. 가족을 위한 투자는 아끼지 않으며, 부동산 투자에 관심이 많습니다.',
    career: '보육, 교육, 의료, 사회복지, 요리, 심리 상담 분야에서 두각을 나타냅니다. 사람을 돌보는 직업이 잘 맞습니다.',
    compatible: '전갈자리, 물고기자리',
    incompatible: '양자리, 천칭자리',
    lucky: '흰색, 월요일, 숫자 2',
    strengths: ['공감능력', '직관력', '충성심', '보호본능', '창의성'],
    weaknesses: ['과보호', '감정 기복', '집착', '소심함'],
    famous: '아리아나 그란데, 에드 시런, 나스닥',
  },
  {
    slug: 'leo',
    name: '사자자리',
    english: 'Leo',
    symbol: '♌',
    period: '7월 23일 ~ 8월 22일',
    element: '불 🔥',
    planet: '태양',
    color: '#f97316',
    traits: ['카리스마 넘치고 자신감', '창의적이고 표현력 풍부', '관대하고 따뜻한 마음', '리더십이 탁월'],
    personality: '사자자리는 태양의 에너지를 받는 별자리로, 밝고 당당한 카리스마를 가지고 있습니다. 주목받는 것을 좋아하고 자신감이 넘치며, 주변 사람들에게 긍정적인 에너지를 전파합니다. 자신을 표현하는 것에 능하며 예술적 재능이 있는 경우가 많습니다.',
    love: '열정적이고 낭만적인 연애를 즐깁니다. 상대방을 왕처럼 대하며, 자신도 그에 걸맞은 대우를 기대합니다. 관계에서 충성스럽고 헌신적이지만, 자아가 강해 충돌이 생길 수 있습니다.',
    money: '돈을 버는 능력도 뛰어나지만, 과시적인 소비를 하는 경향도 있습니다. 고급스러운 것을 좋아하며 자신에 대한 투자를 아끼지 않습니다.',
    career: '연예인, 경영자, 정치인, 예술가, 교사 등 사람들 앞에 서는 직업에서 빛을 발합니다.',
    compatible: '양자리, 사수자리',
    incompatible: '황소자리, 전갈자리',
    lucky: '금색, 일요일, 숫자 1',
    strengths: ['리더십', '창의성', '자신감', '관대함', '카리스마'],
    weaknesses: ['오만함', '허영심', '독선', '질투심'],
    famous: '버락 오바마, 마돈나, 로저 페더러',
  },
  {
    slug: 'virgo',
    name: '처녀자리',
    english: 'Virgo',
    symbol: '♍',
    period: '8월 23일 ~ 9월 22일',
    element: '땅 🌍',
    planet: '수성',
    color: '#84cc16',
    traits: ['분석적이고 세심함', '완벽주의 성향', '근면하고 책임감 강함', '실용적이고 논리적'],
    personality: '처녀자리는 분석력과 세심함으로 유명한 별자리입니다. 모든 일에 꼼꼼하게 접근하며, 세부 사항에 주의를 기울입니다. 완벽주의적 성향이 강해 높은 기준을 세우고, 이를 달성하기 위해 최선을 다합니다.',
    love: '감정 표현보다 실질적인 행동으로 사랑을 표현합니다. 상대방의 작은 필요를 세심하게 챙기며, 안정적이고 신뢰할 수 있는 파트너입니다.',
    money: '재정 관리에 매우 뛰어납니다. 철저한 계획을 세우고 예산을 관리하며, 불필요한 지출을 최소화합니다.',
    career: '의학, 과학, 회계, 연구, 편집, 품질 관리 분야에서 뛰어납니다. 정확성과 세심함이 요구되는 직업이 잘 맞습니다.',
    compatible: '황소자리, 염소자리',
    incompatible: '사수자리, 쌍둥이자리',
    lucky: '초록색, 수요일, 숫자 6',
    strengths: ['분석력', '실용성', '꼼꼼함', '근면함', '신뢰성'],
    weaknesses: ['과도한 자기비판', '걱정이 많음', '완고함', '냉담함'],
    famous: '비욘세, 마더 테레사, 키아누 리브스',
  },
  {
    slug: 'libra',
    name: '천칭자리',
    english: 'Libra',
    symbol: '♎',
    period: '9월 23일 ~ 10월 23일',
    element: '공기 💨',
    planet: '금성',
    color: '#ec4899',
    traits: ['균형과 조화를 추구', '공정하고 외교적', '사교적이고 매력적', '심미안이 뛰어남'],
    personality: '천칭자리는 균형과 조화, 공정성을 추구하는 별자리입니다. 타고난 외교관으로, 갈등 상황에서도 양쪽의 입장을 이해하고 중립을 유지합니다. 아름다운 것과 예술을 사랑하며, 우아한 생활 방식을 즐깁니다.',
    love: '로맨틱하고 이상적인 사랑을 꿈꿉니다. 관계에서 균형과 조화를 중시하며, 상대방을 배려하는 데 탁월합니다. 갈등을 피하려는 경향이 있습니다.',
    money: '사치스러운 취향으로 인해 과소비하는 경향이 있습니다. 하지만 협상 능력이 뛰어나 비즈니스에서도 좋은 성과를 낼 수 있습니다.',
    career: '법률, 외교, 예술, 인테리어 디자인, 상담 분야가 잘 맞습니다. 팀워크가 중요한 환경에서 두각을 나타냅니다.',
    compatible: '쌍둥이자리, 물병자리',
    incompatible: '게자리, 염소자리',
    lucky: '파란색, 금요일, 숫자 7',
    strengths: ['공정성', '외교력', '협력', '심미안', '지성'],
    weaknesses: ['우유부단', '갈등 회피', '의존성', '피상적'],
    famous: '킴 카다시안, 에밀리넴, 간디',
  },
  {
    slug: 'scorpio',
    name: '전갈자리',
    english: 'Scorpio',
    symbol: '♏',
    period: '10월 24일 ~ 11월 22일',
    element: '물 💧',
    planet: '명왕성·화성',
    color: '#7c3aed',
    traits: ['강렬하고 열정적', '직관력과 통찰력이 뛰어남', '의지력이 강함', '신비롭고 카리스마 있음'],
    personality: '전갈자리는 깊이와 강도를 가진 별자리입니다. 표면 아래에 있는 진실을 꿰뚫어 보는 통찰력을 가지고 있으며, 한번 목표를 정하면 절대 포기하지 않습니다. 감정이 깊고 강렬하며, 신뢰하는 사람에게는 절대적으로 충성합니다.',
    love: '연애에서 깊고 강렬한 감정적 연결을 추구합니다. 표면적인 관계에는 관심이 없으며, 진정한 친밀감을 원합니다. 질투심이 강할 수 있으며, 한번 상처받으면 오래 기억합니다.',
    money: '재정 관리에 전략적으로 접근합니다. 투자에 있어서 깊이 분석하며, 위험을 감수하더라도 큰 수익을 추구합니다.',
    career: '수사, 심리, 연구, 의학, 금융 분야에서 두각을 나타냅니다. 비밀을 다루거나 깊이 파고드는 직업이 잘 맞습니다.',
    compatible: '게자리, 물고기자리',
    incompatible: '양자리, 사자자리',
    lucky: '검정색, 화요일, 숫자 8',
    strengths: ['결단력', '직관력', '강인함', '충성심', '통찰력'],
    weaknesses: ['집착', '복수심', '질투', '비밀주의'],
    famous: '레오나르도 디카프리오, 빌 게이츠, 케이티 페리',
  },
  {
    slug: 'sagittarius',
    name: '사수자리',
    english: 'Sagittarius',
    symbol: '♐',
    period: '11월 23일 ~ 12월 21일',
    element: '불 🔥',
    planet: '목성',
    color: '#6366f1',
    traits: ['모험적이고 자유로운 영혼', '낙관적이고 유머감각 풍부', '철학적이고 지혜로움', '직설적이고 솔직함'],
    personality: '사수자리는 자유와 모험을 사랑하는 별자리입니다. 새로운 것을 탐구하고, 세상의 진리와 의미를 찾는 데 열정적입니다. 낙관적인 세계관을 가지고 있으며, 어떤 상황에서도 긍정적인 면을 찾습니다.',
    love: '자유를 중시하기 때문에 구속을 싫어합니다. 지적으로 자극이 되는 파트너를 원하며, 함께 모험을 즐길 수 있는 관계를 원합니다.',
    money: '낙관적인 성격으로 재정 위험을 과소평가하는 경향이 있습니다. 하지만 행운이 따르는 경우도 많아 뜻밖의 기회를 잡기도 합니다.',
    career: '여행, 교육, 철학, 법률, 출판, 스포츠 분야가 잘 맞습니다. 자유롭게 일할 수 있는 환경이 중요합니다.',
    compatible: '양자리, 사자자리',
    incompatible: '처녀자리, 쌍둥이자리',
    lucky: '보라색, 목요일, 숫자 3',
    strengths: ['낙관주의', '모험심', '정직함', '지적 호기심', '유머'],
    weaknesses: ['무책임', '충동적', '무신경', '과장됨'],
    famous: '테일러 스위프트, 브래드 피트, 월트 디즈니',
  },
  {
    slug: 'capricorn',
    name: '염소자리',
    english: 'Capricorn',
    symbol: '♑',
    period: '12월 22일 ~ 1월 19일',
    element: '땅 🌍',
    planet: '토성',
    color: '#94a3b8',
    traits: ['야망이 크고 목표지향적', '책임감이 강함', '인내심과 자기 절제력', '현실적이고 실용적'],
    personality: '염소자리는 목표를 향해 꾸준히 나아가는 별자리입니다. 야망이 크고 성공에 대한 강한 의지를 가지고 있으며, 어떤 어려움이 있어도 포기하지 않습니다. 나이가 들수록 젊어지는 역행 성장의 별자리로도 알려져 있습니다.',
    love: '감정 표현에 서투르지만, 깊고 헌신적인 사랑을 합니다. 안정적이고 신뢰할 수 있는 파트너를 원하며, 장기적인 관계를 선호합니다.',
    money: '재정적 목표를 위해 체계적으로 계획하고 저축합니다. 장기 투자를 선호하며, 안정성을 최우선으로 합니다.',
    career: '경영, 금융, 법률, 건축, 정치 분야에서 뛰어납니다. 조직의 상층부로 올라가는 능력이 탁월합니다.',
    compatible: '황소자리, 처녀자리',
    incompatible: '양자리, 천칭자리',
    lucky: '갈색, 토요일, 숫자 10',
    strengths: ['야망', '인내심', '책임감', '자기통제', '실용성'],
    weaknesses: ['냉담함', '비관주의', '완고함', '물질주의'],
    famous: '미셸 오바마, 엘비스 프레슬리, 르브론 제임스',
  },
  {
    slug: 'aquarius',
    name: '물병자리',
    english: 'Aquarius',
    symbol: '♒',
    period: '1월 20일 ~ 2월 18일',
    element: '공기 💨',
    planet: '천왕성',
    color: '#38bdf8',
    traits: ['독창적이고 혁신적', '인도주의적 성향', '지적이고 분석적', '독립적이고 자유로움'],
    personality: '물병자리는 미래를 바라보는 혁신적인 별자리입니다. 남다른 시각으로 세상을 바라보며, 기존의 틀을 깨는 것을 즐깁니다. 인류 전체의 발전에 관심이 많고, 사회 변화를 이끄는 것에 의미를 찾습니다.',
    love: '자유로운 영혼이라 구속받는 것을 싫어합니다. 친구 같은 관계에서 시작하는 사랑을 선호하며, 지적으로 연결되는 것이 중요합니다.',
    money: '전통적인 방식보다는 혁신적인 방법으로 돈을 법니다. 테크, 스타트업, 미래 산업에 관심이 많습니다.',
    career: '기술, 과학, 사회운동, 미디어, 발명 분야에서 두각을 나타냅니다. 자유롭게 창의성을 발휘할 수 있는 환경이 필요합니다.',
    compatible: '쌍둥이자리, 천칭자리',
    incompatible: '황소자리, 전갈자리',
    lucky: '파란색, 토요일, 숫자 11',
    strengths: ['독창성', '인도주의', '지성', '독립심', '혁신성'],
    weaknesses: ['고집', '감정 표현 부족', '비타협적', '이상주의'],
    famous: '오프라 윈프리, 일론 머스크, 해리 스타일스',
  },
  {
    slug: 'pisces',
    name: '물고기자리',
    english: 'Pisces',
    symbol: '♓',
    period: '2월 19일 ~ 3월 20일',
    element: '물 💧',
    planet: '해왕성',
    color: '#a78bfa',
    traits: ['공감 능력이 탁월', '창의적이고 예술적', '직관력이 뛰어남', '온화하고 친절함'],
    personality: '물고기자리는 황도대의 마지막 별자리로, 모든 별자리의 특성을 조금씩 가지고 있습니다. 깊은 감수성과 공감 능력을 지니며, 예술적 재능이 풍부합니다. 현실보다는 꿈과 상상의 세계에서 더 편안함을 느끼기도 합니다.',
    love: '낭만적이고 헌신적인 사랑을 합니다. 상대방의 감정을 직관적으로 이해하며, 깊은 감정적 연결을 추구합니다. 이상적인 사랑을 꿈꾸는 경향이 있습니다.',
    money: '재정 관리에 어려움을 겪는 경우가 있습니다. 하지만 창의적인 분야에서 독특한 방식으로 수익을 창출하기도 합니다.',
    career: '음악, 미술, 영화, 의료, 심리, 종교 분야에서 두각을 나타냅니다. 창의성과 공감 능력을 활용하는 직업이 잘 맞습니다.',
    compatible: '게자리, 전갈자리',
    incompatible: '사수자리, 처녀자리',
    lucky: '보라색, 목요일, 숫자 12',
    strengths: ['공감능력', '직관력', '창의성', '온화함', '헌신'],
    weaknesses: ['현실 도피', '우유부단', '희생 과다', '비밀주의'],
    famous: '리한나, 스티브 잡스, 저스틴 비버',
  },
];

export async function generateStaticParams() {
  return ZODIAC_SIGNS.map((s) => ({ sign: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sign: string }>;
}): Promise<Metadata> {
  const { sign } = await params;
  const data = ZODIAC_SIGNS.find((s) => s.slug === sign);
  if (!data) return {};
  return {
    title: `${data.name}(${data.english}) 별자리 특징 완벽 가이드 | StarFate`,
    description: `${data.name} 별자리 성격, 연애, 금전운, 직업운 완벽 분석. ${data.period} 태생. 지배 행성 ${data.planet}, 원소 ${data.element}. 궁합 잘 맞는 별자리와 주의해야 할 별자리 총정리.`,
    alternates: { canonical: `/zodiac/${sign}` },
    openGraph: {
      title: `${data.name} 별자리 완벽 가이드 | StarFate`,
      description: `${data.name} 성격, 연애운, 금전운, 직업 분석 — StarFate`,
      type: 'article',
    },
  };
}

const bgStyle = {
  background: 'linear-gradient(160deg, #050520 0%, #0a0a2e 30%, #130a2e 60%, #1a0a3e 100%)',
  minHeight: '100vh',
};

export default async function ZodiacSignPage({
  params,
}: {
  params: Promise<{ sign: string }>;
}) {
  const { sign } = await params;
  const data = ZODIAC_SIGNS.find((s) => s.slug === sign);
  if (!data) notFound();

  return (
    <div style={bgStyle}>
      <div className="max-w-3xl mx-auto px-6 py-16 text-white/80">
        <Link href="/zodiac" className="text-purple-400 hover:text-purple-300 text-sm mb-8 inline-block">
          ← 별자리 목록으로
        </Link>

        {/* 헤더 */}
        <header className="mb-10 text-center">
          <div className="text-7xl mb-4">{data.symbol}</div>
          <h1 className="text-4xl font-bold text-white mb-2">
            {data.name} <span className="text-white/40 text-2xl">{data.english}</span>
          </h1>
          <p className="text-white/50 text-base">{data.period}</p>
          <div className="flex justify-center gap-4 mt-4 flex-wrap">
            <span className="px-3 py-1 rounded-full text-sm" style={{ background: `${data.color}33`, border: `1px solid ${data.color}66`, color: data.color }}>
              {data.element}
            </span>
            <span className="px-3 py-1 rounded-full text-sm bg-white/5 border border-white/10">
              🪐 {data.planet}
            </span>
          </div>
        </header>

        {/* 핵심 특성 */}
        <section className="mb-8 p-6 rounded-2xl bg-white/5 border border-white/10">
          <h2 className="text-lg font-bold text-white mb-4">✨ 핵심 특성</h2>
          <div className="flex flex-wrap gap-2">
            {data.traits.map((t) => (
              <span key={t} className="px-3 py-1 rounded-full text-sm bg-purple-500/20 border border-purple-500/30 text-purple-300">
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* 성격 */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-white mb-3">🌟 성격 & 특징</h2>
          <p className="leading-relaxed text-white/70">{data.personality}</p>
        </section>

        {/* 그리드: 강점 & 약점 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <section className="p-5 rounded-2xl bg-green-500/10 border border-green-500/20">
            <h3 className="text-base font-bold text-green-400 mb-3">💪 강점</h3>
            <ul className="space-y-1">
              {data.strengths.map((s) => (
                <li key={s} className="text-sm text-white/70 flex items-center gap-2">
                  <span className="text-green-400">·</span> {s}
                </li>
              ))}
            </ul>
          </section>
          <section className="p-5 rounded-2xl bg-red-500/10 border border-red-500/20">
            <h3 className="text-base font-bold text-red-400 mb-3">⚠️ 약점</h3>
            <ul className="space-y-1">
              {data.weaknesses.map((w) => (
                <li key={w} className="text-sm text-white/70 flex items-center gap-2">
                  <span className="text-red-400">·</span> {w}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* 연애 / 금전 / 직업 */}
        {[
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
              <p className="text-sm text-green-400 font-semibold mb-1">✅ 잘 맞는 별자리</p>
              <p className="text-white/70">{data.compatible}</p>
            </div>
            <div>
              <p className="text-sm text-red-400 font-semibold mb-1">⚠️ 주의할 별자리</p>
              <p className="text-white/70">{data.incompatible}</p>
            </div>
          </div>
        </section>

        {/* 행운 & 유명인 */}
        <section className="mb-10 p-6 rounded-2xl bg-purple-500/10 border border-purple-500/20">
          <h2 className="text-lg font-bold text-white mb-4">🍀 행운의 상징</h2>
          <p className="text-white/70 mb-4">{data.lucky}</p>
          <h3 className="text-sm font-bold text-purple-300 mb-2">🌟 유명한 {data.name}</h3>
          <p className="text-white/60 text-sm">{data.famous}</p>
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

        {/* 다른 별자리 링크 */}
        <nav className="mt-10">
          <h3 className="text-sm text-white/40 mb-3 font-semibold uppercase tracking-widest">다른 별자리 보기</h3>
          <div className="flex flex-wrap gap-2">
            {ZODIAC_SIGNS.filter((s) => s.slug !== sign).map((s) => (
              <Link
                key={s.slug}
                href={`/zodiac/${s.slug}`}
                className="px-3 py-1 rounded-full text-xs border border-white/10 text-white/50 hover:border-purple-400 hover:text-purple-400 transition-colors"
              >
                {s.symbol} {s.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
