import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '상승 별자리(어센던트) 완벽 가이드 — 타인이 보는 나 | StarFate',
  description: '출생 시간으로 결정되는 상승 별자리(라이징 사인)의 의미와 역할. 첫인상, 외모, 사회적 이미지를 좌우하는 숨겨진 별자리를 알아보세요.',
  alternates: { canonical: '/blog/rising-sign-guide' },
  openGraph: {
    title: '상승 별자리(어센던트) 완벽 가이드 — 타인이 보는 나',
    description: '첫인상, 외모, 사회적 이미지를 좌우하는 숨겨진 별자리를 알아보세요.',
    type: 'article',
  },
};

const bgStyle = {
  background: 'linear-gradient(160deg, #050520 0%, #0a0a2e 30%, #130a2e 60%, #1a0a3e 100%)',
  minHeight: '100vh',
};

export default function RisingSignGuidePage() {
  return (
    <div style={bgStyle}>
      <article className="max-w-3xl mx-auto px-6 py-16 text-white/80">
        <Link href="/blog" className="text-purple-400 hover:text-purple-300 text-sm mb-8 inline-block">
          ← 블로그 목록으로
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className="px-2 py-0.5 rounded-full text-xs font-medium" style={{ background: 'rgba(124,58,237,0.3)', color: 'rgba(196,181,253,1)' }}>
              점성술 심화
            </span>
            <span className="text-white/30 text-xs">2025년 3월 20일 · 8분 읽기</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4 leading-tight">
            상승 별자리(어센던트) 완벽 가이드 — 타인이 보는 나
          </h1>
          <p className="text-white/50 text-base leading-relaxed">
            "왜 나는 내 별자리답지 않다는 말을 자주 들을까?" 그 답은 상승 별자리에 있을 수 있습니다. 출생 시간이 만드는 나의 사회적 가면, 상승 별자리의 모든 것을 탐구합니다.
          </p>
        </header>

        <div className="space-y-8 text-sm leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-4">상승 별자리란? — 출생 시간의 동쪽 지평선</h2>
            <p className="mb-3">
              상승 별자리(Rising Sign), 또는 어센던트(Ascendant)는 출생 당시 동쪽 지평선에서 떠오르고 있던 황도대의 별자리입니다. 지구는 24시간에 한 바퀴 자전하므로, 지평선 위로 떠오르는 별자리는 매 2시간마다 바뀝니다. 따라서 12개의 별자리가 하루 동안 모두 동쪽 지평선에서 떠오르게 됩니다.
            </p>
            <p className="mb-3">
              이 때문에 상승 별자리를 알기 위해서는 반드시 정확한 출생 시간이 필요합니다. 태양 별자리는 생일만 알면 알 수 있지만, 상승 별자리는 출생 시간과 출생 지역(위도·경도)이 모두 필요합니다. 출생 시간이 30분~1시간만 달라져도 상승 별자리가 바뀔 수 있습니다.
            </p>
            <p className="mb-3">
              점성술적으로 상승 별자리는 출생 차트(네이탈 차트)의 출발점인 1번 하우스의 시작 경계선에 위치합니다. 1번 하우스는 자아, 신체, 첫인상, 삶에 대한 접근 방식을 담당하는 가장 개인적인 영역입니다. 상승 별자리는 이 1번 하우스의 에너지를 가장 직접적으로 표현합니다.
            </p>
            <p>
              고대 점성술사들은 상승 별자리를 "영혼이 세상에 들어오는 문"이라고 불렀습니다. 현대 점성술에서는 이를 "사회적 가면(persona)"이라고도 표현하는데, 카를 융의 심리학적 개념인 페르소나(persona, 타인과 교류할 때 사용하는 외적 인격)와 정확히 일치합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">상승 별자리가 결정하는 것들</h2>
            <p className="mb-3">
              상승 별자리는 크게 세 가지 영역에서 우리의 삶에 영향을 미칩니다.
            </p>

            <div className="space-y-4">
              <div className="rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 className="text-white font-semibold mb-2">1. 외모와 신체적 특징</h3>
                <p className="mb-2">전통 점성술에서는 상승 별자리가 신체적 외모와 건강 경향성에 영향을 준다고 보았습니다. 예를 들어 사자자리 상승은 풍성한 머리카락과 당당한 자세, 처녀자리 상승은 날씬하고 섬세한 체형, 황소자리 상승은 안정적이고 감각적인 외모 등으로 묘사됩니다.</p>
                <p className="text-white/50 text-xs">현대 심리 점성술에서는 이보다 외모보다 신체 언어, 제스처, 걸음걸이와 같은 비언어적 소통 방식에 더 초점을 둡니다.</p>
              </div>

              <div className="rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 className="text-white font-semibold mb-2">2. 첫인상과 사회적 이미지</h3>
                <p className="mb-2">처음 만나는 사람이 느끼는 당신의 인상, 즉 "이 사람은 어떤 사람일까?"라는 첫 번째 감각이 바로 상승 별자리의 영역입니다. 양자리 상승은 에너지 넘치고 직접적인 첫인상을 주고, 천칭자리 상승은 우아하고 친근한 분위기, 전갈자리 상승은 강렬하고 신비로운 존재감을 드러냅니다.</p>
                <p className="text-white/50 text-xs">때로 사람들이 "나는 사수자리인데 왜 진지하다는 말을 자주 들을까?"라고 의아해하는 경우가 있습니다. 상승 별자리가 염소자리라면 처음 만나는 사람에게는 진지하고 신뢰감 있는 첫인상을 주기 때문입니다.</p>
              </div>

              <div className="rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 className="text-white font-semibold mb-2">3. 삶에 대한 본능적 접근 방식</h3>
                <p className="mb-2">상승 별자리는 새로운 상황에 처음 반응하는 방식, 즉 삶의 기본 모드를 나타냅니다. 게자리 상승은 새로운 환경에서 본능적으로 조심스럽고 관찰적인 태도를 취하지만, 쌍둥이자리 상승은 호기심 있게 말을 걸고 정보를 수집하려 합니다. 이 반응은 깊이 생각하기 전의 첫 번째 본능에서 나옵니다.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">12개 상승 별자리별 특징</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { sign: '양자리 상승', emoji: '♈', desc: '에너지 넘치고 직접적인 첫인상. 행동이 빠르고 자신감 있어 보이며 자연스러운 리더십이 느껴집니다.' },
                { sign: '황소자리 상승', emoji: '♉', desc: '차분하고 신뢰감 있는 분위기. 안정적이고 감각적이며 느리지만 확실하게 움직이는 사람으로 보입니다.' },
                { sign: '쌍둥이자리 상승', emoji: '♊', desc: '생기 넘치고 말이 많은 첫인상. 다양한 주제에 지식이 많아 보이며 유머 감각이 돋보입니다.' },
                { sign: '게자리 상승', emoji: '♋', desc: '따뜻하고 배려 깊은 분위기. 처음엔 조심스러워 보이지만, 친해지면 깊은 정(情)을 나누는 사람이라는 것을 알게 됩니다.' },
                { sign: '사자자리 상승', emoji: '♌', desc: '당당하고 카리스마 넘치는 존재감. 방에 들어서면 자연스럽게 시선이 집중되며 왕족 같은 위엄이 있습니다.' },
                { sign: '처녀자리 상승', emoji: '♍', desc: '깔끔하고 분석적인 첫인상. 꼼꼼하고 도움이 되려는 태도가 강하게 느껴지며 신뢰감을 주는 분위기.' },
                { sign: '천칭자리 상승', emoji: '♎', desc: '우아하고 사교적인 매력. 사람들을 편안하게 만드는 능력이 있으며 심미적으로 세련된 인상을 줍니다.' },
                { sign: '전갈자리 상승', emoji: '♏', desc: '강렬하고 신비로운 눈빛. 말수가 적어도 깊은 존재감이 느껴지며, 모든 것을 꿰뚫어 보는 듯한 분위기.' },
                { sign: '사수자리 상승', emoji: '♐', desc: '활달하고 낙관적인 에너지. 자유롭고 솔직한 분위기로 처음부터 편안함을 줍니다. 모험심이 느껴집니다.' },
                { sign: '염소자리 상승', emoji: '♑', desc: '진지하고 성숙한 첫인상. 나이보다 어른스러워 보이며 신뢰와 권위감이 자연스럽게 풍깁니다.' },
                { sign: '물병자리 상승', emoji: '♒', desc: '독특하고 개성 있는 분위기. 예측할 수 없는 매력이 있으며 남들과 다른 독자적인 스타일이 인상적입니다.' },
                { sign: '물고기자리 상승', emoji: '♓', desc: '몽환적이고 부드러운 분위기. 예술적 감수성이 느껴지며 공감 능력이 높아 대화하면 이해받는 느낌이 듭니다.' },
              ].map(({ sign, emoji, desc }) => (
                <div key={sign} className="p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <p className="text-white font-medium mb-1">{emoji} {sign}</p>
                  <p className="text-white/50 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">태양 별자리 vs 달 별자리 vs 상승 별자리의 차이</h2>
            <p className="mb-3">
              세 가지 핵심 별자리는 서로 다른 측면의 자아를 표현합니다. 쉬운 비유로 설명하자면 이렇습니다.
            </p>

            <div className="rounded-2xl p-5 mb-4" style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.25)' }}>
              <div className="space-y-3">
                <div>
                  <span className="text-yellow-300 font-semibold">☀️ 태양 별자리 — 나의 영혼, 진짜 목적</span>
                  <p className="text-white/60 mt-1 text-xs">에너지가 충전된 상태에서 자연스럽게 드러나는 핵심 자아. 삶의 방향, 의식적인 목표, 자아정체성의 근간. "나는 궁극적으로 어떤 사람인가?"</p>
                </div>
                <div>
                  <span className="text-blue-300 font-semibold">🌙 달 별자리 — 나의 내면, 감정의 언어</span>
                  <p className="text-white/60 mt-1 text-xs">혼자 있을 때, 감정이 솔직할 때 드러나는 내면의 자아. 안전함과 위로를 찾는 방식. "혼자일 때 나는 어떤 사람인가?"</p>
                </div>
                <div>
                  <span className="text-purple-300 font-semibold">⬆️ 상승 별자리 — 나의 가면, 사회적 표현</span>
                  <p className="text-white/60 mt-1 text-xs">새로운 사람과 상황에서 본능적으로 드러나는 외적 자아. 첫인상, 외모, 접근 방식. "처음 만나는 사람에게 나는 어떻게 보이는가?"</p>
                </div>
              </div>
            </div>

            <p className="mb-3">
              흥미로운 것은 세 가지 별자리가 서로 조화를 이룰 수도, 긴장을 만들 수도 있다는 점입니다. 태양 별자리가 사수자리(자유롭고 활달)인데 상승 별자리가 염소자리(진지하고 신중)라면, 내면에서는 모험을 원하면서도 사람들에게는 책임감 있고 진중한 모습을 보이게 됩니다. 이러한 내적 긴장이 때로는 풍부한 내면과 복합적인 매력의 원천이 됩니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">&ldquo;빅 3&rdquo;의 조합 예시 분석</h2>
            <p className="mb-3">
              점성술에서 태양·달·상승 별자리를 합쳐 "빅 3(Big Three)"라고 부릅니다. 이 세 가지의 조합이 한 사람의 성격을 가장 핵심적으로 표현한다고 봅니다. 몇 가지 흥미로운 조합을 살펴보겠습니다.
            </p>

            <div className="space-y-4">
              <div className="rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <p className="text-white font-semibold mb-2">☀️ 물병자리 + 🌙 사자자리 + ⬆️ 전갈자리</p>
                <p className="text-white/60 text-xs leading-relaxed">이 조합의 사람은 내면에서는 인류를 위한 혁신을 꿈꾸는 이상주의자(물병)이면서, 감정적으로는 인정과 사랑을 깊이 원하는 사람(달 사자)입니다. 하지만 처음 만나는 사람에게는 강렬하고 신비로운 첫인상(전갈 상승)을 주어 접근하기 어려워 보일 수 있습니다. 실제로는 따뜻하지만 겉으로는 차갑게 보이는 갭이 매력이 될 수 있습니다.</p>
              </div>

              <div className="rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <p className="text-white font-semibold mb-2">☀️ 게자리 + 🌙 처녀자리 + ⬆️ 사수자리</p>
                <p className="text-white/60 text-xs leading-relaxed">내면에서는 가족과 안전함을 가장 중시(게자리)하고, 감정적으로는 섬세하고 분석적(달 처녀)인 사람이지만, 겉으로는 밝고 낙관적이며 자유로운 사람처럼 보입니다(사수 상승). 처음 만나면 외향적이고 활달해 보이지만, 실제로는 깊은 내면에 집착하는 면이 있는 복합적인 성격의 소유자입니다.</p>
              </div>

              <div className="rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <p className="text-white font-semibold mb-2">☀️ 양자리 + 🌙 황소자리 + ⬆️ 천칭자리</p>
                <p className="text-white/60 text-xs leading-relaxed">내면에서는 뜨거운 추진력과 도전 정신(양자리)이 넘치지만, 감정적으로는 안정과 편안함을 원하고(달 황소), 겉으로는 우아하고 조화로운 인상(천칭 상승)을 줍니다. 외부에서는 부드럽고 외교적인 사람처럼 보이지만, 막상 결정을 내리면 매우 빠르고 단호합니다.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">상승 별자리 찾는 방법</h2>
            <p className="mb-3">
              상승 별자리를 정확하게 계산하려면 세 가지 정보가 필요합니다. 첫째는 출생 날짜(연·월·일), 둘째는 출생 시각(시·분), 셋째는 출생 지역(도시명)입니다. 이 중 출생 시각이 가장 중요합니다. 상승 별자리는 약 2시간마다 바뀌기 때문에 시간이 잘못되면 전혀 다른 별자리가 나올 수 있습니다.
            </p>
            <p className="mb-3">
              출생 시간을 모르는 경우, 가장 먼저 출생 신고서나 모성 수첩(엄마의 기록)을 확인하는 것이 좋습니다. 이도 저도 모르겠다면 점성술사에게 "교정 독법(Rectification)"을 받을 수 있습니다. 과거 주요 사건들(결혼, 이직, 사고 등)을 토대로 출생 시간을 역추산하는 고급 점성술 기법입니다.
            </p>
            <p className="mb-3">
              온라인에서 무료로 계산하는 방법은 Astro.com이나 AstroSeek 같은 출생 차트 계산기를 이용하는 것입니다. 출생 정보를 입력하면 태양, 달, 상승 별자리는 물론 12개 하우스의 위치와 행성 배치까지 한눈에 볼 수 있습니다.
            </p>
            <p>
              상승 별자리를 알았다면, 거울을 보듯 자신이 처음 만나는 사람들에게 주는 인상과 비교해보세요. "아, 그래서 사람들이 나를 그렇게 볼 수도 있겠구나"라는 흥미로운 통찰이 생길 것입니다. 상승 별자리는 내가 의도한 모습이 아니라 타인이 자연스럽게 느끼는 나의 첫 번째 레이어입니다. 이를 이해하면 자신의 이미지를 더 의식적으로 활용하거나, 오해를 줄이는 커뮤니케이션 방식을 찾는 데 도움이 됩니다.
            </p>
          </section>

        </div>

        <div className="mt-12 p-6 rounded-2xl text-center" style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.3)' }}>
          <p className="text-white/60 mb-4 text-sm">나의 별자리 운세가 궁금하다면?</p>
          <Link
            href="/"
            className="inline-block px-6 py-3 rounded-full font-bold text-white text-sm"
            style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #9333ea 100%)' }}
          >
            🔮 오늘의 운세 무료로 보기 →
          </Link>
        </div>

        <nav className="mt-10">
          <h3 className="text-sm text-white/40 mb-3 font-semibold uppercase tracking-widest">관련 글</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/blog/what-is-astrology" className="p-4 rounded-xl text-sm hover:border-purple-400 transition-colors" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="text-white/70 font-medium">✨ 점성술이란 무엇인가?</div>
              <div className="text-white/30 text-xs mt-1">서양 별자리의 역사와 기초 완벽 가이드</div>
            </Link>
            <Link href="/blog/moon-sign-guide" className="p-4 rounded-xl text-sm hover:border-purple-400 transition-colors" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="text-white/70 font-medium">🌙 달 별자리 완벽 가이드</div>
              <div className="text-white/30 text-xs mt-1">숨겨진 나의 내면을 찾아서</div>
            </Link>
          </div>
        </nav>
      </article>
    </div>
  );
}
