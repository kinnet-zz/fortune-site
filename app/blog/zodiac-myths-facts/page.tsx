import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '별자리에 대한 10가지 오해와 진실 | StarFate',
  description: '별자리에 관한 흔한 오해들을 팩트로 검증합니다. 13번째 별자리, 별자리 변경, 쌍둥이의 별자리 등 궁금증을 명쾌하게 해결합니다.',
  alternates: { canonical: '/blog/zodiac-myths-facts' },
  openGraph: {
    title: '별자리에 대한 10가지 오해와 진실',
    description: '13번째 별자리, 별자리 변경, 쌍둥이의 별자리 등 흔한 오해를 팩트로 검증합니다',
    type: 'article',
  },
};

const bgStyle = {
  background: 'linear-gradient(160deg, #050520 0%, #0a0a2e 30%, #130a2e 60%, #1a0a3e 100%)',
  minHeight: '100vh',
};

export default function ZodiacMythsFactsPage() {
  return (
    <div style={bgStyle}>
      <article className="max-w-3xl mx-auto px-6 py-16 text-white/80">
        <Link href="/blog" className="text-purple-400 hover:text-purple-300 text-sm mb-8 inline-block">
          ← 블로그 목록으로
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className="px-2 py-0.5 rounded-full text-xs font-medium" style={{ background: 'rgba(124,58,237,0.3)', color: 'rgba(196,181,253,1)' }}>
              점성술 기초
            </span>
            <span className="text-white/30 text-xs">2025년 3월 25일 · 7분 읽기</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4 leading-tight">
            별자리에 대한 10가지 오해와 진실
          </h1>
          <p className="text-white/50 text-base leading-relaxed">
            "내 별자리가 바뀌었다고?", "13번째 별자리가 생겼다고?" 인터넷에 떠도는 별자리 관련 오해들은 수도 없이 많습니다. 혼란을 끝내고, 진실만을 이야기합니다.
          </p>
        </header>

        <div className="space-y-8 text-sm leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-4">오해 1 — &ldquo;내 별자리가 바뀌었다?&rdquo;</h2>
            <p className="mb-3">
              몇 년에 한 번씩 소셜 미디어에서 화제가 되는 이야기입니다. "NASA가 별자리를 재계산했더니 날짜가 바뀌어서 당신의 별자리는 더 이상 양자리가 아닙니다" 같은 류의 게시물들이 공유되며 혼란을 일으킵니다.
            </p>
            <p className="mb-3">
              <strong className="text-white">진실:</strong> 별자리는 바뀌지 않았습니다. 이 오해의 근원은 '세차운동(Precession of the Equinoxes)'이라는 천문학 현상입니다. 지구의 자전축이 약 2만 6천 년을 주기로 팽이처럼 흔들리면서, 약 2000년 전 별자리를 설정할 때의 하늘 좌표와 현재의 실제 별자리 위치가 약 한 달 정도 어긋나게 되었습니다.
            </p>
            <p className="mb-3">
              그러나 서양 점성술은 애초부터 실제 별자리의 위치가 아닌, 태양이 춘분점을 통과하는 시점을 양자리의 시작(3월 21일경)으로 고정하는 '열대 황도대(Tropical Zodiac)' 체계를 사용합니다. 따라서 별자리의 날짜 범위는 세차운동과 무관하게 계절의 주기에 따라 결정됩니다. 당신의 별자리는 그대로입니다.
            </p>
            <p>
              인도 점성술(베딕 점성술)은 실제 별의 위치를 기준으로 하는 '항성 황도대(Sidereal Zodiac)'를 사용하므로, 서양 점성술과 날짜가 약 23일 정도 차이납니다. 어느 체계가 옳다고 할 수 없으며, 서로 다른 철학과 목적을 가진 독립된 전통입니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">오해 2 — &ldquo;13번째 별자리 뱀주인자리가 생겼다?&rdquo;</h2>
            <p className="mb-3">
              2016년 NASA가 발표한 내용이 오해를 낳았습니다. 실제로 황도대(태양이 지나가는 하늘의 띠)에는 12개가 아닌 13개의 별자리 영역이 존재하며, 그 중 하나가 뱀주인자리(Ophiuchus, 11월 29일~12월 17일경)입니다.
            </p>
            <p className="mb-3">
              <strong className="text-white">진실:</strong> 뱀주인자리는 새로 발견된 것이 아닙니다. 고대 바빌로니아인들도 이미 알고 있었지만, 12라는 수의 완결성(1년 12개월, 12시간 체계)과 체계의 간결함을 위해 의도적으로 제외했습니다. NASA는 천문학적 사실을 설명했을 뿐이지, 점성술 체계를 변경한다고 발표한 것이 아닙니다. NASA 자체도 "우리는 점성술이 아니라 천문학을 연구합니다"라고 명확히 선을 그었습니다.
            </p>
            <p>
              점성술은 열대 황도대 기반의 12별자리 체계를 사용하며, 이 체계는 수천 년의 관찰과 해석이 축적된 완결된 시스템입니다. 13번째 별자리를 추가하면 기존의 모든 점성술 해석 체계와 조화 이론을 전면 재구성해야 합니다. 현재 주류 점성술계는 뱀주인자리를 황도대 별자리로 인정하지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">오해 3 — &ldquo;쌍둥이는 같은 별자리니까 성격이 같다?&rdquo;</h2>
            <p className="mb-3">
              일란성 쌍둥이는 같은 날, 같은 시각(혹은 아주 짧은 차이)에 태어납니다. 그렇다면 점성술적으로 완전히 동일한 사람이어야 할 텐데, 실제로는 서로 다른 성격과 운명을 가집니다. 이것이 점성술을 반박하는 논리로 자주 사용됩니다.
            </p>
            <p className="mb-3">
              <strong className="text-white">진실:</strong> 점성술은 단순히 태양 별자리(생일 기반) 하나만을 보지 않습니다. 완전한 출생 차트(호로스코프)에는 태양, 달, 수성, 금성, 화성, 목성, 토성, 천왕성, 해왕성, 명왕성 등 10개 이상의 천체와 12개의 하우스가 포함됩니다.
            </p>
            <p className="mb-3">
              쌍둥이가 몇 분의 차이로 태어나도 상승 별자리(Ascendant)가 달라질 수 있으며, 이는 성격과 인생 방향에 큰 차이를 만듭니다. 또한, 같은 차트를 가지더라도 성장 환경, 자유의지, 선택에 따라 같은 에너지를 전혀 다르게 표현할 수 있습니다. 점성술은 결정론이 아니라, 가능성의 지도입니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">오해 4 — &ldquo;별자리는 과학이 아니니까 가치 없다?&rdquo;</h2>
            <p className="mb-3">
              과학적 방법론으로 점성술의 예언적 정확성을 검증하는 연구들은 대부분 유의미한 결과를 얻지 못했습니다. 이를 근거로 "점성술은 완전한 거짓"이라고 단정짓는 시각이 있습니다.
            </p>
            <p className="mb-3">
              <strong className="text-white">진실:</strong> 점성술의 가치는 예언 정확성에만 있지 않습니다. 심리학자 카를 융은 별자리 상징을 인류 공통의 심리적 원형(Archetype)으로 보았으며, 점성술적 언어가 무의식을 탐색하는 강력한 도구가 될 수 있다고 주장했습니다. 현대 심리 점성술(Psychological Astrology)은 이 관점을 발전시켜, 성격 탐구와 자기 이해의 틀로 점성술을 활용합니다.
            </p>
            <p>
              많은 사람들이 별자리 해석을 읽으며 자신의 성향과 패턴을 발견하고, 타인과의 관계를 새로운 시각으로 이해합니다. 이 심리적, 성찰적 가치는 과학적 검증과 별개로 실질적인 의미를 가집니다. 또한 점성술이 수천 년간 인류의 문화와 예술, 철학에 깊이 영향을 미쳐왔다는 문화적 가치도 무시할 수 없습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">오해 5 — &ldquo;같은 별자리끼리는 궁합이 최악이다?&rdquo;</h2>
            <p className="mb-3">
              "같은 별자리끼리는 너무 비슷해서 충돌한다", "사자자리 둘이 만나면 자존심 싸움만 한다"는 식의 이야기를 많이 들어보셨을 겁니다.
            </p>
            <p className="mb-3">
              <strong className="text-white">진실:</strong> 단편적인 오해입니다. 궁합은 두 사람의 태양 별자리만으로 결정되지 않습니다. 달 별자리의 조화, 금성과 화성의 위치, 상대방의 하우스에 내 행성이 어디 들어가는지 등 수십 가지 요소가 복합적으로 작용합니다. 같은 별자리라도 서로의 달 별자리가 잘 맞으면 훌륭한 파트너가 될 수 있습니다.
            </p>
            <p>
              오히려 같은 원소의 별자리(예: 불 원소끼리 — 양자리, 사자자리, 사수자리)는 서로 에너지를 잘 이해하고 공명한다는 전통적 해석이 있습니다. 현실에서도 같은 별자리 커플이 오래 행복하게 지내는 경우는 얼마든지 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">오해 6~10 — 그 외 흔한 오해들</h2>

            <div className="space-y-4">
              <div className="rounded-2xl p-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <strong className="text-white">오해 6: &ldquo;별자리 운세는 모두 가짜, 바넘 효과일 뿐이다&rdquo;</strong>
                <p className="mt-2 text-white/60 text-xs leading-relaxed">바넘 효과(Barnum Effect)는 누구에게나 해당되는 모호한 서술을 자신에게 맞는 것으로 믿는 심리 현상입니다. 대중지 별자리 운세의 일부는 이에 해당할 수 있습니다. 그러나 개인 출생 차트 분석은 생년월일시와 출생지까지 포함한 매우 구체적인 데이터를 기반으로 하며, 개인화된 해석을 제공합니다. 모든 별자리 콘텐츠를 동일선상에 놓는 것은 지나친 단순화입니다.</p>
              </div>

              <div className="rounded-2xl p-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <strong className="text-white">오해 7: &ldquo;수성 역행(Mercury Retrograde)이 되면 모든 일이 망한다&rdquo;</strong>
                <p className="mt-2 text-white/60 text-xs leading-relaxed">수성 역행 기간에 통신, 여행, 계약 문제가 생긴다는 이야기가 있지만, 이를 재앙처럼 받아들이는 것은 과장입니다. 수성 역행은 1년에 3~4회, 각 약 3주간 발생합니다. 점성술적으로는 소통을 점검하고 재고(Re-)의 기회를 주는 시기로 해석하는 것이 적절합니다. 계획보다 검토, 새 시작보다 마무리에 집중하는 기간으로 활용하면 됩니다.</p>
              </div>

              <div className="rounded-2xl p-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <strong className="text-white">오해 8: &ldquo;동양 띠운세와 서양 별자리 중 하나만 맞다&rdquo;</strong>
                <p className="mt-2 text-white/60 text-xs leading-relaxed">서양 별자리와 동양 띠운세(십이지)는 완전히 다른 전통에서 비롯된 독립적인 체계입니다. 어느 것이 더 정확하다고 비교할 수 없으며, 두 체계를 함께 활용하면 오히려 더 풍부한 자기 이해의 틀을 얻을 수 있습니다. 많은 점성술 전문가들이 동서양의 관점을 통합하여 종합적인 분석을 제공합니다.</p>
              </div>

              <div className="rounded-2xl p-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <strong className="text-white">오해 9: &ldquo;전갈자리는 무조건 위험하고 독하다&rdquo;</strong>
                <p className="mt-2 text-white/60 text-xs leading-relaxed">전갈자리는 강렬한 감정과 깊은 통찰력, 변화와 재생의 에너지를 가진 별자리입니다. 이 강한 에너지가 오해를 낳아 '무서운 별자리'라는 스테레오타입이 생겼습니다. 실제로 전갈자리는 깊이 있는 충성심과 뛰어난 공감 능력을 지닌 신뢰할 수 있는 동반자입니다. 모든 별자리에는 긍정적, 부정적 측면이 공존하며, 특정 별자리를 악마화하는 것은 점성술의 본래 의도와 다릅니다.</p>
              </div>

              <div className="rounded-2xl p-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <strong className="text-white">오해 10: &ldquo;별자리를 믿으면 운명론자가 된다&rdquo;</strong>
                <p className="mt-2 text-white/60 text-xs leading-relaxed">점성술을 "모든 것이 정해져 있다"는 결정론으로 오해하는 경우가 많습니다. 현대 점성술의 관점은 다릅니다. 출생 차트는 잠재적 에너지와 경향성을 보여줄 뿐, 구체적인 운명을 확정하지 않습니다. 같은 차트를 가진 사람도 의지와 선택에 따라 전혀 다른 삶을 살 수 있습니다. 점성술은 자유의지를 부정하는 것이 아니라, 자신의 에너지를 이해하고 더 현명하게 활용하도록 돕는 도구입니다.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">결론 — 올바른 점성술 활용법</h2>
            <p className="mb-3">
              점성술에 대한 오해는 대부분 지나친 단순화 혹은 잘못된 정보에서 비롯됩니다. 점성술은 수천 년의 역사를 가진 복잡하고 정교한 상징 체계로, 단순히 "맞다/틀리다"의 이분법으로 판단하기 어렵습니다.
            </p>
            <p className="mb-3">
              점성술을 가장 건강하게 활용하는 방법은, 그것을 자기 성찰과 이해의 언어로 사용하는 것입니다. 별자리 해석을 읽으며 자신의 강점과 약점, 습관적인 패턴을 발견하고, 타인의 행동을 더 깊이 이해하는 출발점으로 삼을 수 있습니다.
            </p>
            <p>
              맹목적으로 믿거나 무조건 부정하기보다, 개방적인 마음으로 탐구하는 자세가 중요합니다. 점성술이 당신의 삶에 새로운 시각과 깊이를 더해줄 수 있다면, 그것으로 충분한 가치를 지닌 것입니다.
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
            <Link href="/blog/chinese-vs-western-zodiac" className="p-4 rounded-xl text-sm hover:border-purple-400 transition-colors" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="text-white/70 font-medium">🌏 동양 vs 서양 별자리 비교</div>
              <div className="text-white/30 text-xs mt-1">두 체계의 차이와 공통점</div>
            </Link>
          </div>
        </nav>
      </article>
    </div>
  );
}
