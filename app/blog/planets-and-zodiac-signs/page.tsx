import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '지배 행성과 별자리의 관계 — 화성, 금성, 목성이 성격에 미치는 영향 | StarFate',
  description: '각 별자리를 지배하는 행성의 신화적 의미부터 실제 성격에 미치는 영향까지. 태양계 10개 천체와 12개 별자리의 관계를 체계적으로 분석합니다.',
  alternates: { canonical: '/blog/planets-and-zodiac-signs' },
  openGraph: {
    title: '지배 행성과 별자리의 관계 — 행성이 성격에 미치는 영향',
    description: '화성, 금성, 목성 등 지배 행성과 별자리의 깊은 연관성 분석',
    type: 'article',
  },
};

const bgStyle = {
  background: 'linear-gradient(160deg, #050520 0%, #0a0a2e 30%, #130a2e 60%, #1a0a3e 100%)',
  minHeight: '100vh',
};

const PLANETS = [
  {
    name: '태양 (Sun)',
    symbol: '☀️',
    rules: '사자자리',
    color: '#f97316',
    mythology: '그리스 신화의 태양신 아폴로에 해당. 빛, 진리, 예언, 음악, 치유의 신.',
    meaning: '자아, 정체성, 의식적인 자아 표현, 생명력, 창의성, 아버지 원형',
    personality: '태양이 강한 사람은 자기표현이 강하고, 인정받고자 하는 욕구가 있습니다. 리더십이 자연스럽게 발휘되며, 자신만의 개성을 당당하게 표현합니다.',
  },
  {
    name: '달 (Moon)',
    symbol: '🌙',
    rules: '게자리',
    color: '#94a3b8',
    mythology: '그리스 신화의 달의 여신 셀레네 또는 아르테미스. 달의 변화처럼 감정의 순환을 나타냄.',
    meaning: '감정, 직관, 무의식, 어머니 원형, 가정, 과거와 추억',
    personality: '달이 강한 사람은 감수성이 풍부하고 직관력이 뛰어납니다. 가족과 안전한 환경을 중시하며, 타인의 감정에 깊이 공감합니다.',
  },
  {
    name: '수성 (Mercury)',
    symbol: '☿',
    rules: '쌍둥이자리, 처녀자리',
    color: '#eab308',
    mythology: '그리스의 전령신 헤르메스. 신과 인간 사이의 메신저이자 상인, 여행자, 도둑의 수호신.',
    meaning: '지성, 소통, 언어, 논리적 사고, 여행, 교육, 거래',
    personality: '수성이 강한 사람은 언어 능력이 뛰어나고 빠르게 생각합니다. 정보를 빠르게 처리하고 소통하는 능력이 탁월하며, 다양한 관심사를 가집니다.',
  },
  {
    name: '금성 (Venus)',
    symbol: '♀',
    rules: '황소자리, 천칭자리',
    color: '#ec4899',
    mythology: '그리스의 사랑과 미의 여신 아프로디테. 아름다움, 욕망, 쾌락의 상징.',
    meaning: '사랑, 아름다움, 예술, 쾌락, 관계, 가치관, 물질적 풍요',
    personality: '금성이 강한 사람은 미적 감각이 뛰어나고 관계를 소중히 여깁니다. 조화와 아름다움을 추구하며, 감각적인 즐거움을 중시합니다.',
  },
  {
    name: '화성 (Mars)',
    symbol: '♂',
    rules: '양자리, (전갈자리 공동)',
    color: '#ef4444',
    mythology: '그리스의 전쟁신 아레스. 용기, 공격성, 경쟁의 신. 로마에서는 군신 마르스.',
    meaning: '행동, 에너지, 용기, 경쟁, 성욕, 분노, 투지, 신체 활동',
    personality: '화성이 강한 사람은 행동력과 추진력이 넘칩니다. 경쟁을 즐기고 목표를 향해 돌진하는 성향이 있으며, 열정적이고 직접적입니다.',
  },
  {
    name: '목성 (Jupiter)',
    symbol: '♃',
    rules: '사수자리, (물고기자리 공동)',
    color: '#a78bfa',
    mythology: '그리스의 최고신 제우스. 신들의 왕이자 천둥의 신. 법, 질서, 풍요의 상징.',
    meaning: '행운, 팽창, 지혜, 철학, 고등 교육, 여행, 낙관주의, 관대함',
    personality: '목성이 강한 사람은 낙관적이고 관대합니다. 지식과 경험을 넓히려는 욕구가 강하며, 큰 그림을 보는 시각이 탁월합니다.',
  },
  {
    name: '토성 (Saturn)',
    symbol: '♄',
    rules: '염소자리, (물병자리 공동)',
    color: '#94a3b8',
    mythology: '그리스의 크로노스(시간의 신). 로마의 농업신 사투르누스. 제약과 시간, 카르마의 상징.',
    meaning: '규율, 책임, 한계, 인내, 시간, 구조, 카르마, 노력의 결실',
    personality: '토성이 강한 사람은 책임감이 강하고 성실합니다. 어려운 상황에서도 포기하지 않으며, 시간이 걸리더라도 착실하게 목표를 달성합니다.',
  },
  {
    name: '천왕성 (Uranus)',
    symbol: '♅',
    rules: '물병자리',
    color: '#38bdf8',
    mythology: '그리스의 하늘신 우라노스. 1781년 발견된 현대 행성으로, 혁명의 시대와 함께 등장.',
    meaning: '혁신, 반항, 독립, 갑작스러운 변화, 기술, 자유, 창의적 파괴',
    personality: '천왕성이 강한 사람은 독창적이고 혁신적입니다. 기존의 틀을 깨고 새로운 방식을 시도하며, 미래 지향적인 비전을 가집니다.',
  },
  {
    name: '해왕성 (Neptune)',
    symbol: '♆',
    rules: '물고기자리',
    color: '#6366f1',
    mythology: '그리스의 바다신 포세이돈. 1846년 발견. 신비로운 꿈과 환상의 세계를 상징.',
    meaning: '꿈, 환상, 직관, 영성, 예술, 이상주의, 혼란, 희생',
    personality: '해왕성이 강한 사람은 상상력이 풍부하고 영적인 감수성이 높습니다. 예술적 재능이 있으며 이상적인 세계를 꿈꿉니다.',
  },
  {
    name: '명왕성 (Pluto)',
    symbol: '♇',
    rules: '전갈자리',
    color: '#7c3aed',
    mythology: '그리스의 지하 세계 왕 하데스. 1930년 발견. 변혁, 죽음과 재생의 상징.',
    meaning: '변혁, 권력, 죽음과 재생, 심층 심리, 비밀, 극단적 변화',
    personality: '명왕성이 강한 사람은 강렬하고 변혁적인 에너지를 가집니다. 깊은 내면을 탐구하고, 어떤 상황에서도 다시 일어서는 불굴의 힘을 가집니다.',
  },
];

export default function PlanetsAndZodiacPage() {
  return (
    <div style={bgStyle}>
      <article className="max-w-3xl mx-auto px-6 py-16 text-white/80">
        <Link href="/blog" className="text-purple-400 hover:text-purple-300 text-sm mb-8 inline-block">
          ← 블로그 목록으로
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className="px-2 py-0.5 rounded-full text-xs font-medium" style={{ background: 'rgba(124,58,237,0.3)', color: 'rgba(196,181,253,1)' }}>
              행성과 별자리
            </span>
            <span className="text-white/30 text-xs">2025년 3월 20일 · 11분 읽기</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4 leading-tight">
            지배 행성과 별자리의 관계 — 화성, 금성, 목성이 성격에 미치는 영향
          </h1>
          <p className="text-white/50 text-base leading-relaxed">
            별자리의 에너지는 지배 행성에서 비롯됩니다. 신화에서 탄생한 행성들의 상징이 어떻게 우리의 성격과 삶에 반영되는지 탐구합니다.
          </p>
        </header>

        <div className="space-y-8 text-sm leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-4">왜 지배 행성이 중요한가?</h2>
            <p className="mb-3">
              점성술에서 각 별자리는 하나 혹은 두 개의 행성에 의해 "지배(Rulership)"됩니다. 지배 행성은 해당 별자리의 근본적인 에너지와 특성을 결정하는 가장 중요한 요소 중 하나입니다. 쉽게 말하면, 지배 행성은 별자리의 "영혼"과 같습니다.
            </p>
            <p className="mb-3">
              예를 들어 왜 양자리는 용감하고 행동적인가? 화성(전쟁과 행동의 신)이 지배하기 때문입니다. 왜 황소자리는 아름다움과 물질적 풍요를 중시하는가? 금성(사랑과 미의 여신)이 지배하기 때문입니다. 지배 행성의 신화적 성질과 에너지가 그대로 별자리의 성격으로 나타납니다.
            </p>
            <p>
              고전 점성술(Classical Astrology)에서는 7개의 행성(태양, 달, 수성, 금성, 화성, 목성, 토성)만을 사용했습니다. 현대 점성술은 1781년 이후 발견된 천왕성, 해왕성, 명왕성을 추가하여 더욱 세밀한 분석이 가능해졌습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">10개 행성의 의미와 지배 별자리</h2>
            <div className="space-y-4">
              {PLANETS.map((planet) => (
                <div
                  key={planet.name}
                  className="rounded-2xl overflow-hidden"
                  style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <div
                    className="px-5 py-4 flex items-center gap-3"
                    style={{ background: 'rgba(255,255,255,0.04)' }}
                  >
                    <span className="text-2xl">{planet.symbol}</span>
                    <div className="flex-1">
                      <h3 className="text-white font-bold">{planet.name}</h3>
                      <p className="text-xs mt-0.5" style={{ color: planet.color }}>지배: {planet.rules}</p>
                    </div>
                  </div>
                  <div className="px-5 py-4 space-y-2" style={{ background: 'rgba(255,255,255,0.02)' }}>
                    <p className="text-white/50 text-xs"><strong className="text-white/70">신화:</strong> {planet.mythology}</p>
                    <p className="text-white/50 text-xs"><strong className="text-white/70">상징:</strong> {planet.meaning}</p>
                    <p className="text-white/60 text-xs">{planet.personality}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">행성의 품위 — 강하거나 약한 위치</h2>
            <p className="mb-3">
              점성술에서는 각 행성이 특정 별자리에서 더 강하거나 약한 에너지를 발휘한다고 봅니다. 이를 "행성의 품위(Dignities)"라고 합니다.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl p-4" style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)' }}>
                <h3 className="text-green-300 font-semibold mb-3 text-sm">행성이 강한 위치</h3>
                <ul className="space-y-1 text-xs text-white/70">
                  <li><strong className="text-white">지배(Domicile):</strong> 행성이 자신의 별자리에 위치. 에너지가 가장 자연스럽게 발휘됨.</li>
                  <li><strong className="text-white">고양(Exaltation):</strong> 특정 별자리에서 행성 에너지가 특별히 강화됨.</li>
                </ul>
              </div>
              <div className="rounded-xl p-4" style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.15)' }}>
                <h3 className="text-red-300 font-semibold mb-3 text-sm">행성이 약한 위치</h3>
                <ul className="space-y-1 text-xs text-white/70">
                  <li><strong className="text-white">감쇠(Detriment):</strong> 지배 별자리의 반대 별자리. 에너지 발휘가 어색함.</li>
                  <li><strong className="text-white">추락(Fall):</strong> 고양의 반대 별자리. 에너지가 가장 약하게 발현됨.</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-white/50 text-xs">
              예: 화성은 양자리(지배)에서 가장 강하고, 염소자리(고양)에서도 강합니다. 반대로 천칭자리(감쇠)와 게자리(추락)에서는 에너지 발휘에 어려움이 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">행성 에너지를 일상에서 활용하기</h2>
            <p className="mb-3">
              요일(曜日)은 실제로 행성의 이름에서 유래했습니다. 월요일(Moon), 화요일(Mars), 수요일(Mercury), 목요일(Jupiter), 금요일(Venus), 토요일(Saturn), 일요일(Sun) — 7개 행성이 각 요일을 지배합니다.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border border-white/10 rounded-xl overflow-hidden">
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.06)' }}>
                    <th className="px-3 py-2 text-left text-white">요일</th>
                    <th className="px-3 py-2 text-left text-white/60">행성</th>
                    <th className="px-3 py-2 text-left text-white/60">그날 하기 좋은 활동</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['월요일 🌙', '달', '내면 성찰, 가족과 시간, 감정 돌보기'],
                    ['화요일 🔴', '화성', '운동, 경쟁, 도전적 목표 시작'],
                    ['수요일 ☿', '수성', '중요한 회의, 계약, 학습, 글쓰기'],
                    ['목요일 ♃', '목성', '확장, 여행, 고등 교육, 투자'],
                    ['금요일 ♀', '금성', '사교, 데이트, 예술 활동, 쇼핑'],
                    ['토요일 ♄', '토성', '계획, 정리정돈, 장기 프로젝트 진행'],
                    ['일요일 ☀️', '태양', '창의적 활동, 자기표현, 휴식과 재충전'],
                  ].map(([day, planet, activity]) => (
                    <tr key={day} className="border-t border-white/10">
                      <td className="px-3 py-2 text-white">{day}</td>
                      <td className="px-3 py-2 text-white/60">{planet}</td>
                      <td className="px-3 py-2 text-white/50">{activity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

        </div>

        <div className="mt-12 p-6 rounded-2xl text-center" style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.3)' }}>
          <p className="text-white/60 mb-4 text-sm">오늘 행성 에너지를 반영한 나의 운세 확인하기</p>
          <Link href="/" className="inline-block px-6 py-3 rounded-full font-bold text-white text-sm" style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #9333ea 100%)' }}>
            🔮 AI 무료 운세 보기 →
          </Link>
        </div>

        <nav className="mt-10">
          <h3 className="text-sm text-white/40 mb-3 font-semibold uppercase tracking-widest">관련 글</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/blog/what-is-astrology" className="p-4 rounded-xl text-sm transition-colors" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="text-white/70 font-medium">🔮 점성술이란 무엇인가?</div>
              <div className="text-white/30 text-xs mt-1">서양 별자리의 역사와 기초</div>
            </Link>
            <Link href="/blog/zodiac-compatibility-guide" className="p-4 rounded-xl text-sm transition-colors" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="text-white/70 font-medium">💞 12 별자리 궁합 완벽 분석</div>
              <div className="text-white/30 text-xs mt-1">나와 가장 잘 맞는 별자리는?</div>
            </Link>
          </div>
        </nav>
      </article>
    </div>
  );
}
