import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '12띠 궁합 완벽 가이드 — 나와 잘 맞는 띠는? | StarFate',
  description: '동양 전통의 12띠 궁합을 완벽하게 분석합니다. 삼합(三合), 육합(六合), 상충(相沖) 관계를 기반으로 한 정통 띠 궁합 가이드.',
  alternates: { canonical: '/blog/chinese-zodiac-compatibility' },
  openGraph: {
    title: '12띠 궁합 완벽 가이드 — 나와 잘 맞는 띠는?',
    description: '삼합, 육합, 상충 관계를 기반으로 한 정통 띠 궁합 가이드.',
    type: 'article',
  },
};

const bgStyle = {
  background: 'linear-gradient(160deg, #050520 0%, #0a0a2e 30%, #130a2e 60%, #1a0a3e 100%)',
  minHeight: '100vh',
};

export default function ChineseZodiacCompatibilityPage() {
  return (
    <div style={bgStyle}>
      <article className="max-w-3xl mx-auto px-6 py-16 text-white/80">
        <Link href="/blog" className="text-purple-400 hover:text-purple-300 text-sm mb-8 inline-block">
          ← 블로그 목록으로
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className="px-2 py-0.5 rounded-full text-xs font-medium" style={{ background: 'rgba(124,58,237,0.3)', color: 'rgba(196,181,253,1)' }}>
              동양 점성술
            </span>
            <span className="text-white/30 text-xs">2025년 3월 12일 · 10분 읽기</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4 leading-tight">
            12띠 궁합 완벽 가이드 — 나와 잘 맞는 띠는?
          </h1>
          <p className="text-white/50 text-base leading-relaxed">
            수천 년 동양 철학의 정수인 12띠 궁합. 삼합·육합·상충의 원리를 이해하면 연애, 결혼, 우정, 비즈니스 파트너 관계를 보다 깊이 이해할 수 있습니다.
          </p>
        </header>

        <div className="space-y-8 text-sm leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-4">12띠 궁합의 원리 — 음양오행의 세계</h2>
            <p className="mb-3">
              동양의 12띠(十二支) 체계는 단순한 동물 상징이 아닙니다. 그 배후에는 음양(陰陽)과 오행(五行, 목·화·토·금·수)이라는 방대한 우주론적 철학이 자리하고 있습니다. 기원전 중국 주나라 시대부터 체계화되기 시작한 이 12지지 체계는 시간, 방위, 계절, 그리고 인간의 기질을 하나의 통합된 언어로 설명하려는 시도였습니다.
            </p>
            <p className="mb-3">
              12개의 띠 동물은 각각 특정한 오행 에너지와 음양의 성질을 가집니다. 예를 들어 쥐(子)는 물(水)의 기운을 가진 음(陰)의 동물이고, 말(午)은 불(火)의 기운을 가진 양(陽)의 동물입니다. 두 동물이 정반대의 성질을 가지기 때문에 쥐와 말은 전통적으로 상충(相沖) 관계로 분류됩니다.
            </p>
            <p className="mb-3">
              궁합을 볼 때는 단순히 두 사람의 띠만 보는 것이 아니라, 태어난 연도의 천간(天干, 갑을병정무기경신임계)도 함께 고려합니다. 같은 쥐띠라도 경자년(庚子年, 경금·쥐) 쥐띠와 임자년(壬子年, 임수·쥐) 쥐띠는 성격과 운세의 결이 다릅니다. 완전한 사주 궁합은 이보다 훨씬 복잡한 체계이지만, 여기서는 대중적으로 통용되는 12지지 궁합의 핵심을 다룹니다.
            </p>
            <p>
              12띠는 크게 세 가지 관계 범주로 나뉩니다. 최상의 궁합인 삼합(三合), 좋은 궁합인 육합(六合), 그리고 주의가 필요한 상충(相沖)이 그것입니다. 각 관계를 상세히 살펴보겠습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">삼합(三合) — 최상의 궁합 조합</h2>
            <p className="mb-3">
              삼합은 세 개의 띠가 서로를 완성시키는 황금 삼각형 관계입니다. 같은 오행 에너지를 공유하며 서로의 부족한 면을 채워주는 이상적인 조화를 이룹니다. 연애와 결혼은 물론 사업 파트너, 친구 관계에서도 자연스럽고 편안한 시너지를 만들어냅니다.
            </p>

            <div className="rounded-2xl p-5 mb-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h3 className="text-white font-semibold mb-3">4가지 삼합 그룹</h3>
              <div className="space-y-3">
                <div>
                  <span className="text-blue-300 font-medium">수(水)의 삼합 — 🐭쥐 + 🐉용 + 🐒원숭이</span>
                  <p className="text-white/60 mt-1">지혜롭고 창의적인 에너지를 공유합니다. 쥐의 영리함, 용의 카리스마, 원숭이의 재치가 어우러져 어떤 도전도 극복하는 강력한 팀을 이룹니다. 특히 지적 교류와 사업에서 빛을 발하는 조합.</p>
                </div>
                <div>
                  <span className="text-yellow-300 font-medium">금(金)의 삼합 — 🐂소 + 🐍뱀 + 🐓닭</span>
                  <p className="text-white/60 mt-1">신중하고 인내심 강한 에너지로 뭉칩니다. 소의 성실함, 뱀의 지혜, 닭의 꼼꼼함이 결합되어 장기적인 목표를 향해 묵묵히 나아가는 힘을 발휘합니다. 결혼 상대로서 안정감이 최고.</p>
                </div>
                <div>
                  <span className="text-red-300 font-medium">화(火)의 삼합 — 🐯호랑이 + 🐎말 + 🐕개</span>
                  <p className="text-white/60 mt-1">열정과 자유를 사랑하는 동지들. 호랑이의 용맹함, 말의 활달함, 개의 충직함이 만나 의리 있고 역동적인 관계를 만듭니다. 모험과 도전을 함께 즐기는 최고의 파트너.</p>
                </div>
                <div>
                  <span className="text-green-300 font-medium">목(木)의 삼합 — 🐰토끼 + 🐏양 + 🐷돼지</span>
                  <p className="text-white/60 mt-1">따뜻하고 예술적인 감성을 나누는 조합. 토끼의 우아함, 양의 온화함, 돼지의 넉넉함이 조화를 이루어 서로를 편안하게 해주는 특별한 유대감을 형성합니다.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">육합(六合) — 좋은 궁합 조합</h2>
            <p className="mb-3">
              육합은 서로 다른 두 띠가 상호 보완적으로 맞물리는 관계입니다. 삼합만큼 강렬하지는 않지만, 오히려 차이가 있기에 서로에게 배우고 성장하는 관계를 만듭니다. 연애에서는 끌림과 설렘이 오래 지속되는 편입니다.
            </p>

            <div className="rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h3 className="text-white font-semibold mb-3">6가지 육합 쌍</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <p className="text-white font-medium">🐭쥐 + 🐂소</p>
                  <p className="text-white/50 text-xs mt-1">영리함과 성실함의 조합. 쥐가 아이디어를 내면 소가 실현합니다.</p>
                </div>
                <div className="p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <p className="text-white font-medium">🐯호랑이 + 🐷돼지</p>
                  <p className="text-white/50 text-xs mt-1">열정과 포용의 만남. 호랑이의 강함을 돼지가 부드럽게 감쌉니다.</p>
                </div>
                <div className="p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <p className="text-white font-medium">🐰토끼 + 🐕개</p>
                  <p className="text-white/50 text-xs mt-1">감성과 충직함의 조화. 서로를 아끼고 배려하는 안정적인 관계.</p>
                </div>
                <div className="p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <p className="text-white font-medium">🐉용 + 🐓닭</p>
                  <p className="text-white/50 text-xs mt-1">스케일과 완벽함의 결합. 용의 큰 꿈을 닭이 세밀하게 완성합니다.</p>
                </div>
                <div className="p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <p className="text-white font-medium">🐍뱀 + 🐒원숭이</p>
                  <p className="text-white/50 text-xs mt-1">지혜와 재치의 최강 조합. 두 사람 모두 총명하여 대화가 끊이지 않습니다.</p>
                </div>
                <div className="p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <p className="text-white font-medium">🐎말 + 🐏양</p>
                  <p className="text-white/50 text-xs mt-1">자유와 여유의 동행. 서로의 독립성을 존중하며 편안하게 함께합니다.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">상충(相沖) — 주의가 필요한 궁합</h2>
            <p className="mb-3">
              상충은 12지지에서 정반대 위치에 있는 두 띠가 만나는 관계입니다. 에너지의 방향이 정면으로 충돌하기 때문에 긴장감과 갈등이 생기기 쉽습니다. 그러나 "상충"이 반드시 나쁜 관계만을 의미하지는 않습니다. 강한 자극과 도전을 통해 서로를 성장시키는 면도 있습니다.
            </p>

            <div className="rounded-2xl p-5 mb-4" style={{ background: 'rgba(255,100,100,0.06)', border: '1px solid rgba(255,100,100,0.2)' }}>
              <h3 className="text-red-300 font-semibold mb-3">6가지 상충 쌍</h3>
              <ul className="space-y-2">
                <li><strong className="text-white">🐭쥐 ↔ 🐎말:</strong> 물(水)과 불(火)의 충돌. 사고방식과 생활 패턴이 달라 갈등이 잦을 수 있습니다.</li>
                <li><strong className="text-white">🐂소 ↔ 🐏양:</strong> 고집과 온화함의 충돌. 소의 고집스러움이 양의 감성을 상처 입힐 수 있습니다.</li>
                <li><strong className="text-white">🐯호랑이 ↔ 🐒원숭이:</strong> 직진과 우회의 충돌. 호랑이의 직선적 방식이 원숭이의 유연한 전략과 부딪힙니다.</li>
                <li><strong className="text-white">🐰토끼 ↔ 🐓닭:</strong> 감성과 논리의 충돌. 섬세한 토끼가 비판적인 닭에게 상처받기 쉬운 관계.</li>
                <li><strong className="text-white">🐉용 ↔ 🐕개:</strong> 카리스마와 의리의 충돌. 용의 자유분방함이 개의 충직한 기대와 어긋나곤 합니다.</li>
                <li><strong className="text-white">🐍뱀 ↔ 🐷돼지:</strong> 신중함과 솔직함의 충돌. 뱀의 복잡한 내면을 돼지가 이해하기 어려울 수 있습니다.</li>
              </ul>
            </div>

            <p className="text-white/50 text-xs p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
              ※ 상충 관계라도 실제 사주 전체(년·월·일·시)를 보면 다른 합(合)의 기운이 충돌을 완화하는 경우가 많습니다. 띠만으로 관계의 전부를 판단하지 않는 것이 좋습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">연애 궁합 vs 직업 궁합의 차이</h2>
            <p className="mb-3">
              같은 띠 조합이라도 어떤 관계에서 보느냐에 따라 궁합의 해석이 달라집니다. 연애와 결혼 궁합에서는 감정적 조화와 생활 방식의 호환성이 핵심이지만, 직업이나 사업 궁합에서는 목표 달성을 위한 역할 분담과 에너지 시너지가 더 중요합니다.
            </p>
            <p className="mb-3">
              예를 들어 뱀과 원숭이 조합(육합)은 연애에서는 서로의 지적 능력에 끌리지만, 때로 자존심 싸움이 벌어지기도 합니다. 그러나 사업 파트너로서는 뱀의 깊은 전략적 사고와 원숭이의 빠른 실행력이 최강의 팀을 만듭니다.
            </p>
            <p>
              호랑이와 원숭이 조합(상충)은 연애에서 잦은 갈등이 예상되지만, 호랑이가 리더 역할을 맡고 원숭이가 참모 역할을 하는 상하 관계에서는 놀라운 성과를 내기도 합니다. 역사적으로도 상충 관계의 두 사람이 위대한 협력을 이뤄낸 사례가 많습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">나쁜 궁합도 극복하는 방법</h2>
            <p className="mb-3">
              상충 관계의 띠를 가진 파트너와 함께하고 있다고 해서 관계가 반드시 실패하는 것은 아닙니다. 동양 철학에서는 "충(沖)을 합(合)으로 화(化)한다"는 개념이 있습니다. 충돌하는 에너지도 올바른 방식으로 다루면 강한 결합으로 전환될 수 있다는 뜻입니다.
            </p>
            <p className="mb-3">
              실용적인 극복 방법으로는 먼저 서로의 차이를 인정하고 받아들이는 것에서 시작합니다. 상충 관계의 두 사람은 삶의 방식이나 가치관이 다를 수 있지만, 그 차이가 오히려 서로의 시야를 넓혀주는 자원이 될 수 있습니다. 쥐가 말의 자유분방한 에너지에서 영감을 얻고, 말이 쥐의 치밀한 계획에서 안정을 배우는 식입니다.
            </p>
            <p className="mb-3">
              또한 띠 궁합 외에도 태어난 월(月支), 일(日支), 시(時支)의 관계를 살피는 것이 좋습니다. 연지(年支, 띠)가 충이라도 일지(日支, 실제 생활의 모습)가 합이라면 일상에서는 오히려 잘 맞을 수 있습니다.
            </p>
            <p>
              마지막으로, 어떤 궁합 체계든 그것은 경향성을 보여주는 참고 자료일 뿐입니다. 인간 관계의 핵심은 상대를 이해하고 존중하며 함께 성장하려는 의지에 있습니다. 좋은 궁합의 띠를 만났다고 해서 노력 없이 좋은 관계가 유지되지는 않으며, 나쁜 궁합의 띠라도 깊은 이해와 노력으로 훌륭한 관계를 만들어나갈 수 있습니다.
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
            <Link href="/blog/chinese-vs-western-zodiac" className="p-4 rounded-xl text-sm hover:border-purple-400 transition-colors" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="text-white/70 font-medium">🌏 동양 vs 서양 점성술 비교</div>
              <div className="text-white/30 text-xs mt-1">12띠와 12별자리, 무엇이 다를까?</div>
            </Link>
            <Link href="/blog/zodiac-compatibility-guide" className="p-4 rounded-xl text-sm hover:border-purple-400 transition-colors" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="text-white/70 font-medium">💞 12 별자리 궁합 완벽 분석</div>
              <div className="text-white/30 text-xs mt-1">나와 가장 잘 맞는 별자리는?</div>
            </Link>
          </div>
        </nav>
      </article>
    </div>
  );
}
