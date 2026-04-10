import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '달 별자리(Moon Sign) 완벽 가이드 — 숨겨진 나의 내면 | StarFate',
  description: '태양 별자리와 다른 달 별자리의 비밀을 알아보세요. 감정, 무의식, 내면의 자아를 지배하는 달 별자리 12가지를 완벽하게 설명합니다.',
  alternates: { canonical: '/blog/moon-sign-guide' },
  openGraph: {
    title: '달 별자리(Moon Sign) 완벽 가이드 — 숨겨진 나의 내면',
    description: '감정, 무의식, 내면의 자아를 지배하는 달 별자리 12가지를 완벽하게 설명합니다.',
    type: 'article',
  },
};

const bgStyle = {
  background: 'linear-gradient(160deg, #050520 0%, #0a0a2e 30%, #130a2e 60%, #1a0a3e 100%)',
  minHeight: '100vh',
};

export default function MoonSignGuidePage() {
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
            <span className="text-white/30 text-xs">2025년 3월 15일 · 8분 읽기</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4 leading-tight">
            달 별자리(Moon Sign) 완벽 가이드 — 숨겨진 나의 내면
          </h1>
          <p className="text-white/50 text-base leading-relaxed">
            태양 별자리가 세상에 보여주는 나라면, 달 별자리는 혼자 있을 때의 진짜 나입니다. 감정의 언어, 무의식의 지도인 달 별자리를 통해 자신의 내면 세계를 새롭게 탐험해 보세요.
          </p>
        </header>

        <div className="space-y-8 text-sm leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-4">달 별자리란 무엇인가?</h2>
            <p className="mb-3">
              우리가 흔히 "나는 사수자리야"라고 말할 때 언급하는 것은 태양 별자리(Sun Sign)입니다. 이는 생일에 태양이 위치한 황도대의 구역을 의미합니다. 태양 별자리는 삶의 방향, 자아 정체성, 의식적인 목표를 나타냅니다.
            </p>
            <p className="mb-3">
              반면 달 별자리(Moon Sign)는 출생 당시 달이 위치한 별자리를 말합니다. 달은 약 27.3일마다 12개의 별자리를 모두 통과하므로, 각 별자리에 머무는 시간은 약 2~3일에 불과합니다. 따라서 달 별자리를 알기 위해서는 정확한 출생 날짜와 출생 지역(시간대)이 필요합니다.
            </p>
            <p className="mb-3">
              점성술에서 달은 고대부터 감정, 직관, 본능, 무의식, 그리고 어머니와의 관계를 상징했습니다. 달 별자리는 우리가 의식적으로 통제하기 어려운 감정적 반응 방식, 편안함을 느끼는 환경, 스트레스를 받을 때 나타나는 본능적인 행동 패턴을 나타냅니다.
            </p>
            <p>
              쉽게 비유하자면 태양 별자리가 공개된 소셜 미디어 프로필이라면, 달 별자리는 아무도 보지 않을 때 적는 비밀 일기와 같습니다. 두 별자리를 함께 이해할 때 비로소 한 사람을 더 완전하게 파악할 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">달의 상징 — 감정, 무의식, 어머니의 원형</h2>
            <p className="mb-3">
              달은 인류가 기억하는 가장 오래된 상징 중 하나입니다. 수메르의 달의 신 난나(Nanna), 그리스의 셀레네(Selene)와 아르테미스(Artemis), 로마의 루나(Luna), 한국의 달을 보며 절하는 고대 제천 의식까지, 인류는 언제나 달에서 신성함과 순환의 비밀을 찾아왔습니다.
            </p>
            <p className="mb-3">
              심리학자 카를 융은 달을 "아니마(Anima)", 즉 남성의 내면에 있는 여성적 원리의 상징으로 해석했습니다. 또한 달의 규칙적인 위상 변화(초승달 → 반달 → 보름달 → 그믐달)는 죽음과 재생, 성장과 쇠퇴의 원형적 패턴을 나타냅니다.
            </p>
            <p className="mb-3">
              점성술에서 달은 특히 다음의 영역을 지배합니다. 감정적 안정감과 불안감의 패턴, 어린 시절의 경험과 어머니와의 관계, 편안함과 안전함을 느끼는 환경, 직관과 본능적 반응, 기억과 과거에 대한 집착 또는 자유로움이 그것입니다.
            </p>
            <p>
              달 별자리가 같은 두 사람은 감정 언어가 통한다고 볼 수 있습니다. 태양 별자리가 달라서 가치관이나 목표가 다를 수 있어도, 달 별자리가 같다면 감정적으로 서로를 직관적으로 이해하고 위로하는 능력이 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">달 별자리가 일상에 미치는 영향</h2>
            <p className="mb-3">
              달 별자리는 특히 스트레스 상황이나 감정이 격해질 때 더욱 강하게 드러납니다. 평상시에는 태양 별자리의 특성이 전면에 나타나지만, 큰 위기나 깊은 슬픔, 극도의 행복감 앞에서는 달 별자리의 본능이 표면으로 올라옵니다.
            </p>

            <div className="rounded-2xl p-5 mb-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h3 className="text-white font-semibold mb-3">달 별자리별 감정 반응 패턴</h3>
              <ul className="space-y-2">
                <li><strong className="text-white">불(火) 원소 달 (양자리·사자자리·사수자리):</strong> 감정을 즉각적으로 표현하고 행동으로 해소합니다. 기분 변화가 빠르지만 회복도 빠릅니다. 누군가의 지지보다 행동할 공간이 필요합니다.</li>
                <li><strong className="text-white">땅(土) 원소 달 (황소자리·처녀자리·염소자리):</strong> 감정을 천천히, 실용적으로 처리합니다. 불안할 때 물리적 안정(집, 음식, 루틴)에서 위안을 찾습니다. 감정을 말로 표현하는 것이 서툴 수 있습니다.</li>
                <li><strong className="text-white">공기(Air) 원소 달 (쌍둥이자리·천칭자리·물병자리):</strong> 감정을 이성적으로 분석하고 언어화하려 합니다. 대화와 정보 교환을 통해 감정을 정리합니다. 감정에 너무 오래 머무르는 것을 불편해합니다.</li>
                <li><strong className="text-white">물(水) 원소 달 (게자리·전갈자리·물고기자리):</strong> 감정의 파도를 그대로 흡수하고 깊이 느낍니다. 타인의 감정에도 예민하게 반응하며, 안전한 감정 공간이 꼭 필요합니다.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">12개 달 별자리별 특성</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { sign: '양자리 달', emoji: '♈', desc: '즉흥적이고 열정적인 감정 표현. 독립적이며 의존보다 행동으로 감정을 해소합니다.' },
                { sign: '황소자리 달', emoji: '♉', desc: '안정과 편안함을 최우선으로 합니다. 변화를 싫어하지만 한번 신뢰하면 깊은 유대감을 형성합니다.' },
                { sign: '쌍둥이자리 달', emoji: '♊', desc: '다양한 정보와 대화를 통해 감정을 정리합니다. 단조로운 감정 환경에서 쉽게 지루함을 느낍니다.' },
                { sign: '게자리 달', emoji: '♋', desc: '달의 가장 자연스러운 자리. 깊은 공감 능력과 강한 모성적 직관을 가집니다. 감정 기억이 매우 선명합니다.' },
                { sign: '사자자리 달', emoji: '♌', desc: '인정받고 사랑받을 때 감정적으로 충만해집니다. 따뜻하고 표현력이 풍부하며 주변을 밝게 만듭니다.' },
                { sign: '처녀자리 달', emoji: '♍', desc: '감정을 분석하고 정리하려는 경향. 도움을 주는 행동으로 사랑을 표현하며, 완벽주의적 불안을 가질 수 있습니다.' },
                { sign: '천칭자리 달', emoji: '♎', desc: '조화와 균형을 원합니다. 갈등을 피하려다 진짜 감정을 숨길 때가 있습니다. 아름다운 환경에서 감정적 평화를 찾습니다.' },
                { sign: '전갈자리 달', emoji: '♏', desc: '감정의 깊이가 남다릅니다. 배신에 매우 민감하며, 한번 상처받으면 오래 기억합니다. 변화와 재탄생의 에너지를 품고 있습니다.' },
                { sign: '사수자리 달', emoji: '♐', desc: '자유와 모험에서 감정적 활력을 얻습니다. 너무 깊은 감정적 요구에 부담을 느낄 수 있으나, 낙관적인 에너지로 주변을 밝힙니다.' },
                { sign: '염소자리 달', emoji: '♑', desc: '감정을 절제하고 책임감 있게 행동합니다. 내면의 불안을 성취와 목표 달성으로 해소하려는 경향이 있습니다.' },
                { sign: '물병자리 달', emoji: '♒', desc: '감정을 이성적으로 처리하며 독립성을 중시합니다. 집단보다 자신만의 방식으로 감정을 관리하는 것을 선호합니다.' },
                { sign: '물고기자리 달', emoji: '♓', desc: '경계가 없는 공감 능력. 타인의 감정을 그대로 흡수하기 때문에 혼자만의 회복 시간이 꼭 필요합니다.' },
              ].map(({ sign, emoji, desc }) => (
                <div key={sign} className="p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <p className="text-white font-medium mb-1">{emoji} {sign}</p>
                  <p className="text-white/50 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">태양-달 별자리 조합 예시</h2>
            <p className="mb-3">
              태양 별자리와 달 별자리가 어떻게 상호작용하는지 구체적인 예시로 살펴보겠습니다. 두 별자리가 조화롭거나 긴장을 이룰 때, 독특하고 복합적인 성격이 만들어집니다.
            </p>

            <div className="space-y-3">
              <div className="p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <p className="text-white font-medium mb-1">사자자리 태양 + 물고기자리 달</p>
                <p className="text-white/60 text-xs">겉으로는 자신감 넘치고 화려하지만, 내면에는 극도로 섬세하고 감수성 풍부한 예술가적 영혼이 있습니다. 무대 위의 퍼포머이자 혼자 눈물 흘리는 시인. 공감 능력이 뛰어나며 남몰래 타인을 돕는 것을 좋아합니다.</p>
              </div>
              <div className="p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <p className="text-white font-medium mb-1">처녀자리 태양 + 사수자리 달</p>
                <p className="text-white/60 text-xs">꼼꼼한 분석가이자 자유로운 모험가의 조합. 일할 때는 완벽주의적이지만 퇴근 후에는 즉흥 여행을 떠나고 싶어하는 내적 갈등의 소유자. 이 긴장감이 창의적 에너지의 원천이 됩니다.</p>
              </div>
              <div className="p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <p className="text-white font-medium mb-1">전갈자리 태양 + 게자리 달</p>
                <p className="text-white/60 text-xs">감정의 깊이가 극에 달하는 조합. 강렬하고 직관적이며, 한번 사랑하면 온 마음을 바칩니다. 배신에 취약하지만, 사랑하는 사람을 지키는 힘도 그 누구보다 강합니다.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">달 별자리 찾는 방법</h2>
            <p className="mb-3">
              달 별자리를 정확하게 계산하려면 출생 날짜, 출생 시각, 출생 지역(시간대)이 필요합니다. 달은 약 2~3일마다 별자리를 이동하기 때문에 날짜만으로는 정확한 달 별자리를 알기 어려운 경우가 있습니다. 특히 달이 별자리를 넘어가는 당일에 태어난 사람은 반드시 시간 정보가 필요합니다.
            </p>
            <p className="mb-3">
              무료로 달 별자리를 계산하는 방법으로는 온라인 출생 차트(natal chart) 계산기를 활용하는 것이 가장 편리합니다. Astro.com, AstroSeek 등의 사이트에서 생년월일, 출생 시간, 출생 지역을 입력하면 태양 별자리, 달 별자리, 상승 별자리를 포함한 완전한 출생 차트를 무료로 확인할 수 있습니다.
            </p>
            <p>
              달 별자리를 알았다면, 단순히 그 별자리의 키워드를 외우는 것보다 자신의 감정 패턴과 비교해보는 것이 훨씬 유익합니다. "나는 왜 이런 상황에서 이런 감정을 느끼는가?"라는 질문에 달 별자리가 하나의 흥미로운 실마리를 제공해 줄 것입니다.
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
            <Link href="/blog/planets-and-zodiac-signs" className="p-4 rounded-xl text-sm hover:border-purple-400 transition-colors" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="text-white/70 font-medium">🪐 지배 행성과 별자리의 관계</div>
              <div className="text-white/30 text-xs mt-1">행성이 성격에 미치는 영향</div>
            </Link>
          </div>
        </nav>
      </article>
    </div>
  );
}
