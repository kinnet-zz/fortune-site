import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '별자리 운세 정보 | 오늘의 운세 - 12궁도 황도대 완벽 가이드',
  description: '12가지 서양 별자리의 특성, 날짜, 원소, 지배 행성을 모두 알아보세요. 양자리부터 물고기자리까지 각 별자리의 성격과 연애운, 금전운 경향을 상세히 설명합니다.',
  alternates: { canonical: '/zodiac' },
};

const ZODIAC_DATA = [
  {
    sign: '양자리',
    english: 'Aries',
    symbol: '♈',
    period: '3월 21일 ~ 4월 19일',
    element: '불 🔥',
    planet: '화성 ♂',
    color: '#ef4444',
    traits: ['용감하고 도전적', '행동력이 뛰어남', '열정적이고 에너지 넘침', '리더십이 강함'],
    personality: '양자리는 황도대의 첫 번째 별자리로, 활동적이고 진취적인 성격을 가집니다. 새로운 일을 시작하는 데 두려움이 없으며, 목표가 생기면 거침없이 달려갑니다. 때로는 성급하거나 무모해 보일 수 있지만, 그 뒤에는 진심 어린 열정이 있습니다.',
    love: '연애에서 적극적으로 먼저 다가가는 타입입니다. 상대에 대한 강한 열정을 보이지만, 권태기가 빨리 찾아올 수 있어 새로운 자극이 필요합니다.',
    money: '금전적으로는 충동적인 소비를 하는 경향이 있습니다. 큰 목표를 위해 과감하게 투자하기도 하며, 사업적 추진력이 뛰어납니다.',
    compatible: '사자자리, 사수자리',
    lucky: '빨간색, 화요일, 숫자 9',
  },
  {
    sign: '황소자리',
    english: 'Taurus',
    symbol: '♉',
    period: '4월 20일 ~ 5월 20일',
    element: '땅 🌍',
    planet: '금성 ♀',
    color: '#22c55e',
    traits: ['안정적이고 신중함', '인내심이 강함', '실용적이고 현실적', '감각적이고 풍요 추구'],
    personality: '황소자리는 현실적이고 안정을 중시하는 별자리입니다. 급격한 변화보다는 천천히 꾸준히 나아가는 것을 선호합니다. 물질적인 편안함과 아름다운 것에 대한 감각이 뛰어나며, 한 번 결심한 일은 끝까지 해냅니다.',
    love: '연애에서는 신중하고 안정적인 관계를 원합니다. 처음에는 쉽게 마음을 열지 않지만, 한 번 신뢰가 쌓이면 매우 헌신적인 파트너가 됩니다.',
    money: '재정적으로 매우 보수적이고 저축을 중시합니다. 충동구매보다는 가치 있는 것에 투자하며, 장기적인 재무 계획을 세우는 데 능합니다.',
    compatible: '처녀자리, 염소자리',
    lucky: '초록색, 금요일, 숫자 6',
  },
  {
    sign: '쌍둥이자리',
    english: 'Gemini',
    symbol: '♊',
    period: '5월 21일 ~ 6월 21일',
    element: '공기 💨',
    planet: '수성 ☿',
    color: '#eab308',
    traits: ['호기심 많고 다재다능', '말재주가 뛰어남', '사교적이고 친절함', '빠른 사고력'],
    personality: '쌍둥이자리는 두 가지 면을 동시에 가진 이중적인 별자리입니다. 지적 호기심이 왕성하고 다양한 분야에 관심이 많습니다. 뛰어난 언어 능력과 소통 능력으로 어디서든 환영받으며, 새로운 정보와 아이디어를 흡수하는 데 탁월합니다.',
    love: '연애에서 지적 자극과 대화를 매우 중시합니다. 재미있고 활기찬 관계를 원하며, 지루함을 잘 견디지 못합니다. 다양한 주제로 깊은 대화를 나눌 수 있는 파트너를 선호합니다.',
    money: '다양한 분야의 수입원을 갖는 경향이 있습니다. 아이디어를 통해 수익을 창출하는 데 능하지만, 집중력 부족으로 기회를 놓치는 경우도 있습니다.',
    compatible: '천칭자리, 물병자리',
    lucky: '노란색, 수요일, 숫자 5',
  },
  {
    sign: '게자리',
    english: 'Cancer',
    symbol: '♋',
    period: '6월 22일 ~ 7월 22일',
    element: '물 💧',
    planet: '달 🌙',
    color: '#38bdf8',
    traits: ['감성적이고 공감 능력 탁월', '가정과 가족을 소중히 여김', '직관력이 뛰어남', '보호 본능이 강함'],
    personality: '게자리는 감성적이고 직관이 뛰어난 별자리입니다. 달의 지배를 받아 감정의 기복이 있을 수 있지만, 그만큼 타인의 감정을 잘 이해하고 공감합니다. 가족과 집에 대한 애착이 강하며, 소중한 사람들을 위해 헌신합니다.',
    love: '연애에서 깊고 진실한 감정적 유대를 원합니다. 상대방을 세심하게 배려하고 돌보는 타입이지만, 감정적인 상처를 받으면 회복에 시간이 걸립니다.',
    money: '경제적 안정에 대한 강한 욕구가 있습니다. 저축과 부동산 투자에 관심이 많으며, 가족을 위한 재정적 기반을 마련하는 데 집중합니다.',
    compatible: '전갈자리, 물고기자리',
    lucky: '은색, 월요일, 숫자 2',
  },
  {
    sign: '사자자리',
    english: 'Leo',
    symbol: '♌',
    period: '7월 23일 ~ 8월 22일',
    element: '불 🔥',
    planet: '태양 ☀️',
    color: '#f97316',
    traits: ['카리스마 넘치는 리더', '창의적이고 표현력이 강함', '관대하고 따뜻한 마음', '자존감이 높음'],
    personality: '사자자리는 태양의 에너지를 받아 당당하고 빛나는 존재감을 가집니다. 타고난 리더십으로 집단에서 자연스럽게 중심이 되며, 관대하고 따뜻한 마음으로 주변 사람들에게 사랑받습니다. 인정받고 주목받는 것을 즐깁니다.',
    love: '연애에서 열정적이고 로맨틱한 면을 보입니다. 상대방이 자신을 특별하게 여겨주기를 원하며, 화려하고 드라마틱한 사랑을 추구합니다.',
    money: '큰 그림을 보는 안목이 있어 사업적 성공 가능성이 높습니다. 명성과 사회적 지위를 위해 투자하는 경향이 있으며, 과한 소비에 주의가 필요합니다.',
    compatible: '양자리, 사수자리',
    lucky: '금색, 일요일, 숫자 1',
  },
  {
    sign: '처녀자리',
    english: 'Virgo',
    symbol: '♍',
    period: '8월 23일 ~ 9월 22일',
    element: '땅 🌍',
    planet: '수성 ☿',
    color: '#84cc16',
    traits: ['분석적이고 꼼꼼함', '실용적이고 서비스 정신 강함', '완벽주의 성향', '건강과 일상 루틴 중시'],
    personality: '처녀자리는 세밀하고 분석적인 사고를 가진 별자리입니다. 완벽을 추구하는 성향으로 맡은 일은 철저하게 해냅니다. 실용적이고 논리적인 접근을 선호하며, 다른 사람을 돕는 것에서 보람을 느낍니다.',
    love: '연애에서 처음에는 신중하고 조심스럽습니다. 완벽한 파트너를 찾는 경향이 있어 쉽게 만족하지 않지만, 한 번 사랑에 빠지면 헌신적이고 세심한 파트너가 됩니다.',
    money: '재정 관리에 뛰어난 별자리입니다. 꼼꼼하게 가계부를 작성하고, 불필요한 지출을 최소화합니다. 안정적인 저축과 투자를 선호합니다.',
    compatible: '황소자리, 염소자리',
    lucky: '베이지색, 수요일, 숫자 6',
  },
  {
    sign: '천칭자리',
    english: 'Libra',
    symbol: '♎',
    period: '9월 23일 ~ 10월 23일',
    element: '공기 💨',
    planet: '금성 ♀',
    color: '#ec4899',
    traits: ['균형과 공정함 추구', '사교적이고 외교적', '아름다움에 대한 감각', '협력적이고 조화 중시'],
    personality: '천칭자리는 균형과 조화를 추구하는 별자리입니다. 타고난 외교관으로 갈등을 중재하고 공정한 해결책을 찾는 데 탁월합니다. 아름다운 것에 끌리며, 예술과 문화에 조예가 깊습니다.',
    love: '연애에서 가장 낭만적인 별자리 중 하나입니다. 아름다운 관계를 원하며, 파트너와의 균형 잡힌 관계를 중시합니다. 결정을 내리는 것이 어려워 우유부단해 보일 수 있습니다.',
    money: '재정적 결정에서 균형을 찾으려 합니다. 충동적이지 않으나 미적 만족을 위한 지출은 아끼지 않습니다. 파트너와 함께하는 재무 계획을 선호합니다.',
    compatible: '쌍둥이자리, 물병자리',
    lucky: '분홍색, 금요일, 숫자 7',
  },
  {
    sign: '전갈자리',
    english: 'Scorpio',
    symbol: '♏',
    period: '10월 24일 ~ 11월 22일',
    element: '물 💧',
    planet: '명왕성 ♇',
    color: '#7c3aed',
    traits: ['강렬하고 신비로운 매력', '직관력과 통찰력이 뛰어남', '집중력과 의지력이 강함', '변화와 재생의 에너지'],
    personality: '전갈자리는 황도대에서 가장 강렬하고 신비로운 별자리입니다. 깊은 내면의 세계를 가지고 있으며, 진실을 꿰뚫어 보는 직관력이 있습니다. 한 번 목표를 정하면 어떠한 역경도 이겨내는 불굴의 의지를 가집니다.',
    love: '연애에서 깊고 강렬한 감정적 연결을 추구합니다. 표면적인 관계보다 영혼까지 닿는 깊은 유대를 원하며, 질투심과 소유욕이 강한 편입니다.',
    money: '재정적으로 전략적이고 통찰력이 있습니다. 투자에서 남들이 보지 못하는 기회를 포착하는 능력이 있으며, 위기 상황에서도 냉정하게 대처합니다.',
    compatible: '게자리, 물고기자리',
    lucky: '검은색, 화요일, 숫자 8',
  },
  {
    sign: '사수자리',
    english: 'Sagittarius',
    symbol: '♐',
    period: '11월 23일 ~ 12월 21일',
    element: '불 🔥',
    planet: '목성 ♃',
    color: '#6366f1',
    traits: ['낙관적이고 모험을 즐김', '자유와 독립을 소중히 여김', '철학적 사고와 지적 탐구', '유머 감각이 풍부함'],
    personality: '사수자리는 자유롭고 낙관적인 영혼의 별자리입니다. 세상을 탐험하고 다양한 문화와 철학을 배우는 것을 즐깁니다. 경계와 제약을 싫어하며, 항상 새로운 지평을 향해 나아가는 진취적인 성격입니다.',
    love: '연애에서 자유롭고 부담 없는 관계를 원합니다. 상대방의 독립성을 존중하고, 함께 모험을 즐길 수 있는 파트너를 선호합니다. 장기적 헌신이 어려울 수 있습니다.',
    money: '재정적으로 낙관적인 편이라 과도하게 낙관적인 투자를 할 수 있습니다. 그러나 운이 따르는 경우가 많으며, 예상치 못한 기회를 통해 수익을 얻기도 합니다.',
    compatible: '양자리, 사자자리',
    lucky: '보라색, 목요일, 숫자 3',
  },
  {
    sign: '염소자리',
    english: 'Capricorn',
    symbol: '♑',
    period: '12월 22일 ~ 1월 19일',
    element: '땅 🌍',
    planet: '토성 ♄',
    color: '#94a3b8',
    traits: ['성실하고 목표 지향적', '인내심과 책임감이 강함', '현실적이고 실용적', '장기적 계획과 전략 수립'],
    personality: '염소자리는 황도대에서 가장 성실하고 야망 있는 별자리입니다. 높은 목표를 향해 천천히 하지만 확실하게 나아가며, 어떠한 어려움도 포기하지 않습니다. 사회적 지위와 성공에 대한 강한 욕구가 있습니다.',
    love: '연애에서 신중하고 진지한 접근을 합니다. 가벼운 만남보다는 진지하고 안정적인 관계를 원하며, 파트너에게 신뢰와 안정을 제공하는 믿음직한 동반자가 됩니다.',
    money: '재정 관리에서 최강자입니다. 장기적인 재무 목표를 세우고 체계적으로 저축하며, 안정적인 투자를 선호합니다. 경제적 성공 가능성이 높습니다.',
    compatible: '황소자리, 처녀자리',
    lucky: '검은색, 토요일, 숫자 10',
  },
  {
    sign: '물병자리',
    english: 'Aquarius',
    symbol: '♒',
    period: '1월 20일 ~ 2월 18일',
    element: '공기 💨',
    planet: '천왕성 ♅',
    color: '#38bdf8',
    traits: ['독창적이고 혁신적', '인도주의적 가치 추구', '독립적이고 자유로운 사고', '미래 지향적 비전'],
    personality: '물병자리는 황도대에서 가장 독창적이고 미래 지향적인 별자리입니다. 기존의 틀을 깨고 새로운 아이디어와 혁신을 추구합니다. 인류 전체의 진보와 발전에 관심이 많으며, 개인보다 사회 전체의 이익을 위해 생각합니다.',
    love: '연애에서 친구 같은 편안한 관계를 원합니다. 상대방의 개성과 독립성을 존중하며, 지적으로 자극이 되는 파트너를 선호합니다. 감정 표현이 서투를 수 있습니다.',
    money: '재정적으로 독특한 접근을 합니다. 혁신적인 투자 기회에 관심이 많으며, 기술과 미래 산업 분야에서 기회를 찾습니다. 때로는 비현실적인 재정 계획을 세울 수 있습니다.',
    compatible: '쌍둥이자리, 천칭자리',
    lucky: '하늘색, 토요일, 숫자 4',
  },
  {
    sign: '물고기자리',
    english: 'Pisces',
    symbol: '♓',
    period: '2월 19일 ~ 3월 20일',
    element: '물 💧',
    planet: '해왕성 ♆',
    color: '#a78bfa',
    traits: ['감성적이고 공감 능력 풍부', '상상력과 창의성이 넘침', '영적이고 직관적', '동정심이 강하고 희생적'],
    personality: '물고기자리는 황도대의 마지막이자 모든 별자리의 에너지를 품은 별자리입니다. 깊은 감수성과 풍부한 상상력을 가지며, 예술적 재능이 뛰어납니다. 타인의 감정을 자신의 것처럼 느끼는 강한 공감 능력을 가지고 있습니다.',
    love: '연애에서 이상적이고 로맨틱한 사랑을 꿈꿉니다. 영적인 연결과 깊은 감정적 유대를 원하며, 상대방을 위해 헌신적으로 희생합니다. 현실과 이상의 차이로 실망하지 않도록 주의가 필요합니다.',
    money: '재정적으로 꼼꼼하게 관리하는 것이 어려울 수 있습니다. 직관적인 결정으로 예상치 못한 행운을 얻기도 하지만, 체계적인 재무 계획이 필요합니다.',
    compatible: '게자리, 전갈자리',
    lucky: '보라색, 목요일, 숫자 7',
  },
];

const bgStyle = {
  background: 'linear-gradient(160deg, #050520 0%, #0a0a2e 30%, #130a2e 60%, #1a0a3e 100%)',
  minHeight: '100vh',
};

export default function ZodiacPage() {
  return (
    <div style={bgStyle}>
      <div className="max-w-4xl mx-auto px-6 py-16 text-white/80">
        <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm mb-8 inline-block">
          ← 홈으로
        </Link>

        <header className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-white mb-3">별자리 운세 정보</h1>
          <p className="text-white/50 text-base max-w-xl mx-auto leading-relaxed">
            서양 점성술의 12별자리(황도대)를 완벽하게 알아보세요.
            각 별자리의 성격, 연애 경향, 금전운, 궁합을 상세하게 안내합니다.
          </p>
        </header>

        {/* 원소 설명 */}
        <section className="mb-12" aria-labelledby="elements-heading">
          <h2 id="elements-heading" className="text-xl font-bold text-white mb-4">4대 원소와 별자리</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {[
              { element: '불 🔥', signs: '양자리, 사자자리, 사수자리', desc: '열정적, 창의적, 행동적', color: 'rgba(239,68,68,0.15)', border: 'rgba(239,68,68,0.3)' },
              { element: '땅 🌍', signs: '황소자리, 처녀자리, 염소자리', desc: '현실적, 안정적, 인내심', color: 'rgba(34,197,94,0.15)', border: 'rgba(34,197,94,0.3)' },
              { element: '공기 💨', signs: '쌍둥이자리, 천칭자리, 물병자리', desc: '지적, 소통적, 유연함', color: 'rgba(234,179,8,0.15)', border: 'rgba(234,179,8,0.3)' },
              { element: '물 💧', signs: '게자리, 전갈자리, 물고기자리', desc: '감성적, 직관적, 공감', color: 'rgba(56,189,248,0.15)', border: 'rgba(56,189,248,0.3)' },
            ].map(({ element, signs, desc, color, border }) => (
              <div
                key={element}
                className="rounded-xl p-4 text-center text-sm"
                style={{ background: color, border: `1px solid ${border}` }}
              >
                <div className="text-lg mb-1">{element}</div>
                <div className="text-white/50 text-xs mb-1">{signs}</div>
                <div className="text-white/35 text-xs">{desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 각 별자리 상세 */}
        <section aria-labelledby="signs-heading">
          <h2 id="signs-heading" className="text-xl font-bold text-white mb-6">12별자리 상세 안내</h2>
          <div className="space-y-6">
            {ZODIAC_DATA.map(({ sign, english, symbol, period, element, planet, traits, personality, love, money, compatible, lucky }) => (
              <article
                key={sign}
                className="rounded-2xl overflow-hidden"
                style={{ border: '1px solid rgba(255,255,255,0.08)' }}
              >
                {/* 헤더 */}
                <div
                  className="px-6 py-5 flex flex-wrap items-center gap-4"
                  style={{ background: 'rgba(255,255,255,0.04)' }}
                >
                  <span className="text-4xl">{symbol}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-bold text-lg">{sign} <span className="text-white/40 font-normal text-base">({english})</span></h3>
                    <p className="text-purple-300/70 text-sm mt-0.5">{period}</p>
                  </div>
                  <div className="flex gap-3 text-xs">
                    <span
                      className="px-3 py-1 rounded-full"
                      style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.5)' }}
                    >
                      {element}
                    </span>
                    <span
                      className="px-3 py-1 rounded-full"
                      style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.5)' }}
                    >
                      {planet}
                    </span>
                  </div>
                </div>

                {/* 바디 */}
                <div className="px-6 py-5 space-y-5" style={{ background: 'rgba(255,255,255,0.02)' }}>
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

                  {/* 연애운 & 금전운 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div
                      className="rounded-xl p-4"
                      style={{ background: 'rgba(236,72,153,0.08)', border: '1px solid rgba(236,72,153,0.15)' }}
                    >
                      <h4 className="text-pink-300/70 text-xs font-semibold mb-2">💕 연애 경향</h4>
                      <p className="text-white/50 text-xs leading-relaxed">{love}</p>
                    </div>
                    <div
                      className="rounded-xl p-4"
                      style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)' }}
                    >
                      <h4 className="text-green-300/70 text-xs font-semibold mb-2">💰 금전 경향</h4>
                      <p className="text-white/50 text-xs leading-relaxed">{money}</p>
                    </div>
                  </div>

                  {/* 궁합 & 행운 */}
                  <div className="flex flex-wrap gap-4 text-xs text-white/40">
                    <span>🤝 잘 맞는 별자리: <strong className="text-white/60">{compatible}</strong></span>
                    <span>🍀 행운: <strong className="text-white/60">{lucky}</strong></span>
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
            🔮 내 별자리 오늘 운세 보기
          </Link>
        </div>
      </div>
    </div>
  );
}
