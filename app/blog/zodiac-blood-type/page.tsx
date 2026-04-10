import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '별자리와 혈액형의 관계 — 성격 유형 완벽 분석 | StarFate',
  description: '한국과 일본에서 오랫동안 이야기해온 별자리와 혈액형의 관계를 심층 분석합니다. 4가지 혈액형과 12별자리 조합이 만드는 48가지 성격 유형을 알아보세요.',
  alternates: { canonical: '/blog/zodiac-blood-type' },
  openGraph: {
    title: '별자리와 혈액형의 관계 — 성격 유형 완벽 분석',
    description: '4가지 혈액형과 12별자리 조합이 만드는 48가지 성격 유형을 알아보세요.',
    type: 'article',
  },
};

const bgStyle = {
  background: 'linear-gradient(160deg, #050520 0%, #0a0a2e 30%, #130a2e 60%, #1a0a3e 100%)',
  minHeight: '100vh',
};

export default function ZodiacBloodTypePage() {
  return (
    <div style={bgStyle}>
      <article className="max-w-3xl mx-auto px-6 py-16 text-white/80">
        <Link href="/blog" className="text-purple-400 hover:text-purple-300 text-sm mb-8 inline-block">
          ← 블로그 목록으로
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className="px-2 py-0.5 rounded-full text-xs font-medium" style={{ background: 'rgba(124,58,237,0.3)', color: 'rgba(196,181,253,1)' }}>
              성격 분석
            </span>
            <span className="text-white/30 text-xs">2025년 3월 10일 · 9분 읽기</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4 leading-tight">
            별자리와 혈액형의 관계 — 성격 유형 완벽 분석
          </h1>
          <p className="text-white/50 text-base leading-relaxed">
            동아시아에서 수십 년간 사랑받아온 혈액형 성격론과 서양 점성술의 별자리. 두 체계를 결합하면 어떤 새로운 자기 이해가 가능할까요? 48가지 조합의 세계로 떠나봅니다.
          </p>
        </header>

        <div className="space-y-8 text-sm leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-4">혈액형 성격론의 역사와 기원</h2>
            <p className="mb-3">
              혈액형으로 성격을 파악하려는 시도는 1927년 일본의 심리학자 후루카와 다케지(古川竹二)가 「혈액형에 의한 기질 연구」를 발표하면서 본격적으로 시작되었습니다. 후루카와는 A형과 B형 사람들의 기질 차이를 연구하며, 혈액형이 성격 분류의 새로운 기준이 될 수 있다고 주장했습니다.
            </p>
            <p className="mb-3">
              이 이론은 1970년대 노미 마사히코(能見正比古)가 쓴 베스트셀러 《혈액형으로 알 수 있는 궁합》으로 대중화되었고, 이후 한국에도 급속도로 퍼졌습니다. 한국에서는 1980~90년대를 거치며 혈액형 성격론이 일상 대화의 필수 코드가 되었습니다. 소개팅에서 혈액형을 묻는 문화, 드라마 속 혈액형 캐릭터 설정 등이 모두 이 흐름에서 비롯된 것입니다.
            </p>
            <p className="mb-3">
              흥미로운 점은 서양에서는 혈액형 성격론이 거의 통용되지 않는다는 사실입니다. 서양인들은 태어난 날짜를 기준으로 한 별자리를 선호하는 반면, 동아시아에서는 혈액형이 비슷한 역할을 해왔습니다. 두 문화권에서 각각 발전한 이 두 가지 성격 분류법이 오늘날에는 하나로 합쳐져 더 풍부한 자기 이해의 언어를 만들어내고 있습니다.
            </p>
            <p>
              물론 혈액형 성격론은 과학적으로 검증된 이론이 아닙니다. 하지만 자기 탐색의 도구로서, 그리고 인간 관계를 이해하는 하나의 언어로서 여전히 많은 사람들에게 의미 있는 참고 기준이 되고 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4가지 혈액형별 핵심 특성</h2>
            <p className="mb-3">
              혈액형 성격론에서 제시하는 네 가지 혈액형의 핵심 특성을 정리하면 다음과 같습니다. 이 특성들은 수십 년간 대중적으로 공유되어온 내용을 바탕으로 한 것입니다.
            </p>

            <div className="space-y-4">
              <div className="rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 className="text-white font-semibold mb-2">🅰 A형 — 꼼꼼한 완벽주의자</h3>
                <p className="mb-2">A형은 질서, 규칙, 성실함을 중시하는 성향으로 알려져 있습니다. 계획적이고 책임감이 강하며, 타인의 감정에 민감하게 반응합니다. 완벽주의적 경향이 있어 작은 실수에도 자책하는 경우가 있습니다.</p>
                <p className="text-white/50 text-xs">키워드: 성실, 계획적, 꼼꼼, 완벽주의, 배려, 소심</p>
              </div>

              <div className="rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 className="text-white font-semibold mb-2">🅱 B형 — 자유로운 개인주의자</h3>
                <p className="mb-2">B형은 자신만의 스타일과 페이스를 고집하는 개인주의적 성향이 강합니다. 호기심이 왕성하고 다양한 것에 흥미를 느끼지만, 금세 새로운 것으로 관심이 옮겨가기도 합니다. 솔직하고 직설적인 표현을 선호합니다.</p>
                <p className="text-white/50 text-xs">키워드: 자유, 개성, 솔직, 호기심, 즉흥, 자기중심</p>
              </div>

              <div className="rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 className="text-white font-semibold mb-2">🅾 O형 — 타고난 리더</h3>
                <p className="mb-2">O형은 열정적이고 추진력 있는 리더형 성격으로 알려져 있습니다. 목표 지향적이고 경쟁심이 강하며, 집단에서 자연스럽게 주도권을 쥐는 경향이 있습니다. 큰 그림을 보는 능력이 있지만, 세부 사항을 놓치는 경우도 있습니다.</p>
                <p className="text-white/50 text-xs">키워드: 리더십, 열정, 추진력, 목표지향, 사교적, 대범</p>
              </div>

              <div className="rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 className="text-white font-semibold mb-2">🆎 AB형 — 복잡한 이중성</h3>
                <p className="mb-2">AB형은 A형의 세밀함과 B형의 자유로움이 공존하는 복잡한 성격의 소유자로 묘사됩니다. 합리적이고 냉철하게 보이면서도 내면에는 풍부한 감성을 지니고 있습니다. 상황에 따라 카멜레온처럼 다른 면을 보여주기도 합니다.</p>
                <p className="text-white/50 text-xs">키워드: 이중성, 합리, 창의, 독립, 신비, 적응력</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">별자리 원소 + 혈액형 조합 분석</h2>
            <p className="mb-3">
              별자리의 4원소(불·땅·공기·물)와 4가지 혈액형을 결합하면 16가지 기본 조합이 만들어집니다. 각 조합이 어떤 독특한 성격을 나타내는지 살펴보겠습니다.
            </p>

            <div className="space-y-4">
              <div className="rounded-2xl p-5" style={{ background: 'rgba(255,100,50,0.08)', border: '1px solid rgba(255,100,50,0.2)' }}>
                <h3 className="text-red-300 font-semibold mb-3">🔥 불(火) 원소 (양자리·사자자리·사수자리) + 혈액형</h3>
                <ul className="space-y-2 text-sm">
                  <li><strong className="text-white">불 + A형:</strong> 외부적으로는 열정적이고 행동파이지만, 내면에는 치밀한 계획가의 면모가 숨어있습니다. 충동과 신중함 사이에서 균형을 잡는 능력이 뛰어납니다.</li>
                  <li><strong className="text-white">불 + B형:</strong> 화끈하고 즉흥적인 에너지가 폭발합니다. 아이디어가 넘치고 실행력도 강하지만, 지속성이 다소 부족할 수 있습니다. 주변을 활기차게 만드는 천부적인 재능.</li>
                  <li><strong className="text-white">불 + O형:</strong> 타고난 리더십에 불의 열정이 더해진 조합. 강렬한 추진력으로 목표를 향해 돌진합니다. 때로는 주변 사람들이 따라가기 벅찰 정도.</li>
                  <li><strong className="text-white">불 + AB형:</strong> 예측 불가능한 매력의 소유자. 카리스마 넘치는 리더처럼 보이다가도 갑자기 혼자만의 세계에 빠지는 신비로운 성향.</li>
                </ul>
              </div>

              <div className="rounded-2xl p-5" style={{ background: 'rgba(50,200,100,0.08)', border: '1px solid rgba(50,200,100,0.2)' }}>
                <h3 className="text-green-300 font-semibold mb-3">🌍 땅(土) 원소 (황소자리·처녀자리·염소자리) + 혈액형</h3>
                <ul className="space-y-2 text-sm">
                  <li><strong className="text-white">땅 + A형:</strong> 완벽주의의 극치. 매우 꼼꼼하고 신뢰할 수 있지만, 완벽함을 추구하다 스트레스를 받는 경향이 있습니다. 장기 프로젝트에서 빛을 발합니다.</li>
                  <li><strong className="text-white">땅 + B형:</strong> 겉으로는 자유로워 보이지만, 실제로는 매우 실용적이고 현실적입니다. 남들이 보지 못하는 방식으로 자신만의 확고한 기반을 쌓습니다.</li>
                  <li><strong className="text-white">땅 + O형:</strong> 안정적이면서도 강력한 리더. 무모한 도전보다는 철저한 준비 후 행동합니다. 비즈니스 분야에서 탁월한 성과를 내는 유형.</li>
                  <li><strong className="text-white">땅 + AB형:</strong> 냉철한 분석력과 현실 감각의 결합. 감정에 휘둘리지 않고 합리적인 판단을 내리지만, 때로 차갑게 보일 수 있습니다.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">과학적 관점에서 본 혈액형 성격론</h2>
            <p className="mb-3">
              사실을 말하자면, 혈액형 성격론은 현재까지 과학적으로 유의미하게 검증된 바가 없습니다. 2004년 일본에서 만 명이 넘는 대규모 연구를 포함해 여러 차례의 학술적 조사가 진행되었지만, 혈액형과 성격 사이에 통계적으로 의미 있는 상관관계는 발견되지 않았습니다.
            </p>
            <p className="mb-3">
              오히려 심리학에서는 "바넘 효과(Barnum Effect)"라는 개념으로 혈액형 성격론의 인기를 설명합니다. 바넘 효과란 모호하고 일반적인 서술을 자신에게만 해당하는 특별한 설명이라고 믿는 경향을 말합니다. 예를 들어 "가끔 자신에 대해 의심이 들 때도 있다"는 설명은 사실상 모든 사람에게 해당되지만, 많은 사람이 "나를 정확히 설명한다"고 느낍니다.
            </p>
            <p className="mb-3">
              또한 "혈액형 고정관념에 따른 자기 충족적 예언" 현상도 주목할 필요가 있습니다. 어릴 때부터 "B형은 자기 중심적이다"라는 말을 들은 사람이 실제로 그런 행동을 하거나, 반대로 그 기대를 벗어나기 위해 지나치게 노력하는 경우도 생깁니다.
            </p>
            <p>
              그럼에도 불구하고 혈액형 성격론이 수십 년간 살아남은 이유는 분명합니다. 인간은 복잡한 자신과 타인을 간결하게 분류하고 이해하고 싶어 하는 본능을 가지고 있기 때문입니다. 과학적 사실 여부보다 중요한 것은 이를 어떻게 활용하느냐입니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">별자리와 혈액형을 결합한 자기 이해법</h2>
            <p className="mb-3">
              별자리와 혈액형을 함께 사용할 때 가장 효과적인 방법은 두 체계를 상호 보완적으로 활용하는 것입니다. 어느 하나가 맞지 않는다고 느껴질 때, 다른 체계의 시각으로 새로운 해석을 얻을 수 있습니다.
            </p>
            <p className="mb-3">
              예를 들어, 전형적인 사수자리의 자유로운 성향이 자신과 맞지 않는다고 느끼는 사람이라면, 혈액형 A형의 꼼꼼함이 사수자리의 방랑 기질을 조율하고 있다는 새로운 시각을 얻을 수 있습니다. 이는 "왜 나는 사수자리인데 계획을 세우는 걸 좋아하지?"라는 의문에 대한 나름의 설명이 될 수 있습니다.
            </p>
            <p className="mb-3">
              실용적인 활용법으로는 다음을 권장합니다. 먼저 자신의 별자리 특성을 읽으면서 공감되는 부분과 그렇지 않은 부분을 체크합니다. 그다음 혈액형 특성에서도 같은 작업을 합니다. 두 체계에서 공통적으로 나타나는 특성은 자신의 핵심 성향일 가능성이 높고, 두 체계에서 서로 상반된 특성이 나타날 때는 그 긴장감 자체가 자신의 내면 갈등을 반영할 수 있습니다.
            </p>
            <p>
              중요한 점은 이 분석을 고정된 정체성으로 받아들이지 않는 것입니다. 사람은 어떤 별자리나 혈액형보다 훨씬 복잡하고 변화 가능한 존재입니다. 이 도구들은 자신을 이해하는 출발점일 뿐, 목적지가 되어서는 안 됩니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">도구로서의 가치 — 결론</h2>
            <p className="mb-3">
              별자리와 혈액형 성격론은 서로 다른 문화권에서 발전한 두 가지 성격 분류 체계입니다. 과학적 엄밀성 면에서는 한계가 있지만, 자기 이해와 인간 관계를 탐색하는 실용적인 언어로서는 충분한 가치가 있습니다.
            </p>
            <p className="mb-3">
              두 체계를 결합해 48가지 조합을 탐구하는 것은 마치 색의 혼합처럼 더 풍부하고 세밀한 자아의 팔레트를 만드는 과정입니다. 어떤 조합이든 그것은 당신을 제한하는 틀이 아니라, 자신을 더 깊이 들여다보게 해주는 거울입니다.
            </p>
            <p>
              결국 가장 중요한 것은 어떤 혈액형이고 어떤 별자리냐가 아니라, 이 도구들을 통해 얼마나 자신을 솔직하게 바라보고 성장해 나갈 의지가 있느냐입니다. 별과 혈액형은 방향을 가리킬 뿐, 걷는 것은 언제나 당신 자신입니다.
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
