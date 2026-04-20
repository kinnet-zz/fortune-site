import type { Metadata } from 'next';
import Link from 'next/link';
import AuthorBio from '@/components/AuthorBio';

export const metadata: Metadata = {
  title: '출생 차트(Birth Chart) 완전 초보 가이드 — 태양·달·상승 별자리 읽는 법 | StarFate',
  description: '출생 차트(네이탈 차트)의 기초부터 태양 별자리, 달 별자리, 상승 별자리 계산 방법과 해석법을 단계별로 설명합니다. 점성술을 처음 접하는 분을 위한 완전 가이드입니다.',
  alternates: { canonical: 'https://www.starfate.day/blog/birth-chart-beginner-guide' },
  openGraph: {
    title: '출생 차트(Birth Chart) 완전 초보 가이드 — 태양·달·상승 별자리 읽는 법',
    description: '출생 차트의 기초부터 단계별로 설명합니다.',
    type: 'article',
  },
};

const bgStyle = {
  background: 'linear-gradient(160deg, #050520 0%, #0a0a2e 30%, #130a2e 60%, #1a0a3e 100%)',
  minHeight: '100vh',
};

const houses = [
  { num: '1하우스', name: '어센던트 / 자아', desc: '자신을 세상에 드러내는 방식, 외모, 첫인상' },
  { num: '2하우스', name: '가치 / 소유', desc: '물질적 자원, 돈에 대한 태도, 자기 가치감' },
  { num: '3하우스', name: '소통 / 학습', desc: '의사소통 스타일, 형제자매, 단거리 여행' },
  { num: '4하우스', name: '가정 / 뿌리', desc: '가족, 고향, 내면의 안식처, 어린 시절' },
  { num: '5하우스', name: '창의성 / 즐거움', desc: '창의적 표현, 연애, 자녀, 오락' },
  { num: '6하우스', name: '건강 / 서비스', desc: '일상적 루틴, 건강, 직장 환경, 봉사' },
  { num: '7하우스', name: '파트너십', desc: '결혼, 비즈니스 파트너, 대인관계' },
  { num: '8하우스', name: '변환 / 공유', desc: '공유 자원, 성, 죽음과 재생, 심층 심리' },
  { num: '9하우스', name: '철학 / 여행', desc: '고등 교육, 장거리 여행, 종교, 철학' },
  { num: '10하우스', name: 'MC / 사회적 지위', desc: '직업, 명성, 사회적 역할, 야망' },
  { num: '11하우스', name: '공동체 / 비전', desc: '우정, 사회 활동, 미래 목표, 이상' },
  { num: '12하우스', name: '무의식 / 영성', desc: '숨겨진 자아, 영성, 고립, 카르마' },
];

export default function BirthChartBeginnerGuidePage() {
  return (
    <div style={bgStyle}>
      <article className="max-w-3xl mx-auto px-6 py-16 text-white/80">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: '출생 차트(Birth Chart) 완전 초보 가이드 — 태양·달·상승 별자리 읽는 법',
              description: '출생 차트의 기초부터 태양·달·상승 별자리 해석법을 단계별로 설명합니다.',
              datePublished: '2026-04-10',
              dateModified: '2026-04-10',
              author: { '@type': 'Organization', name: 'StarFate 편집팀', url: 'https://www.starfate.day/about' },
              publisher: { '@type': 'Organization', name: 'StarFate', url: 'https://www.starfate.day' },
              mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.starfate.day/blog/birth-chart-beginner-guide' },
            }),
          }}
        />

        <Link href="/blog" className="text-purple-400 hover:text-purple-300 text-sm mb-8 inline-block">
          ← 블로그 목록으로
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className="px-2 py-0.5 rounded-full text-xs font-medium" style={{ background: 'rgba(124,58,237,0.3)', color: 'rgba(196,181,253,1)' }}>
              점성술 입문
            </span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4 leading-tight">
            출생 차트(Birth Chart) 완전 초보 가이드 — 태양·달·상승 별자리 읽는 법
          </h1>
          <p className="text-white/50 text-base leading-relaxed">
            "나는 처녀자리인데 왜 전형적인 처녀자리 같지 않지?" — 그 답이 출생 차트에 있습니다. 점성술의 진짜 깊이를 이해하는 첫걸음을 안내합니다.
          </p>
        </header>

        <AuthorBio date="2026년 4월 10일" readTime="11분" category="점성술 입문" />

        <div className="space-y-8 text-sm leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-4">출생 차트란 무엇인가?</h2>
            <p className="mb-3">
              출생 차트(Birth Chart) 또는 네이탈 차트(Natal Chart)는 당신이 태어난 정확한 날짜, 시간, 장소를 기준으로 그 순간의 하늘을 지도처럼 그린 것입니다. 태양, 달, 수성, 금성, 화성, 목성, 토성, 천왕성, 해왕성, 명왕성 등 10개의 천체가 12별자리 중 어디에 위치했는지, 그리고 12개의 하우스(집) 어디에 들어갔는지를 보여줍니다.
            </p>
            <p className="mb-3">
              우리가 일상에서 말하는 "나는 ○○자리"는 태양이 위치한 별자리만을 말합니다. 하지만 실제 출생 차트에는 10개의 천체가 각각 다른 별자리에 위치하며, 이들이 만들어내는 복잡한 관계(각도)가 개인의 전체적인 성격과 잠재력을 구성합니다.
            </p>
            <p>
              그래서 같은 태양 별자리를 가진 사람이라도 달 별자리, 상승 별자리, 각 행성의 위치가 모두 다르기 때문에 성격이 크게 차이날 수 있는 것입니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">출생 차트를 구성하는 3가지 핵심 요소</h2>

            <div className="space-y-5">
              <div className="rounded-2xl p-5" style={{ background: 'rgba(255,193,7,0.06)', border: '1px solid rgba(255,193,7,0.15)' }}>
                <h3 className="text-yellow-300 font-bold mb-3">☀️ 1. 태양 별자리(Sun Sign) — 의식적 자아</h3>
                <p className="text-white/65 mb-2">
                  태양은 출생 시 태양이 위치한 별자리입니다. 생년월일만 알면 쉽게 알 수 있습니다. 의식적 자아, 에고, 핵심 정체성, 삶의 목적을 나타냅니다. "나는 누구인가?"에 대한 외향적 표현입니다.
                </p>
                <p className="text-white/50 text-xs">예: 1995년 9월 10일 생 → 처녀자리 (8/23~9/22)</p>
              </div>

              <div className="rounded-2xl p-5" style={{ background: 'rgba(99,102,241,0.06)', border: '1px solid rgba(99,102,241,0.15)' }}>
                <h3 className="text-indigo-300 font-bold mb-3">🌙 2. 달 별자리(Moon Sign) — 감정적 자아</h3>
                <p className="text-white/65 mb-2">
                  달은 약 2.5일마다 별자리를 이동합니다. 출생 날짜와 연도를 알면 계산할 수 있습니다. 감정 패턴, 직관, 무의식적 반응, 어릴 때의 필요와 습관을 나타냅니다. 내면 깊은 곳의 자아, 혼자 있을 때의 모습입니다.
                </p>
                <p className="text-white/50 text-xs">달 별자리는 태양 별자리만큼, 또는 그보다 더 중요하다고 보는 점성술사도 많습니다.</p>
              </div>

              <div className="rounded-2xl p-5" style={{ background: 'rgba(236,72,153,0.06)', border: '1px solid rgba(236,72,153,0.15)' }}>
                <h3 className="text-pink-300 font-bold mb-3">⬆️ 3. 상승 별자리(Rising Sign/Ascendant) — 사회적 가면</h3>
                <p className="text-white/65 mb-2">
                  출생 시간과 장소가 필요합니다. 약 2시간마다 별자리가 바뀌므로 정확한 시간이 중요합니다. 첫인상, 외모, 사람들이 처음 만났을 때 느끼는 인상, 사회적 행동 방식을 나타냅니다.
                </p>
                <p className="text-white/50 text-xs">같은 처녀자리 태양이라도 상승이 사자자리면 훨씬 외향적이고 당당한 인상을 줍니다.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">12 하우스(House) — 삶의 12가지 영역</h2>
            <p className="mb-3">
              출생 차트는 원형 차트를 12개의 파이 조각으로 나눕니다. 각 조각을 "하우스"라고 하며, 삶의 특정 영역을 나타냅니다. 어떤 별자리와 행성이 각 하우스에 위치하는지에 따라 그 삶의 영역이 어떻게 경험되는지가 달라집니다.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border border-white/10 rounded-lg overflow-hidden">
                <thead>
                  <tr style={{ background: 'rgba(124,58,237,0.2)' }}>
                    <th className="px-3 py-2 text-left text-white w-24">하우스</th>
                    <th className="px-3 py-2 text-left text-white w-32">테마</th>
                    <th className="px-3 py-2 text-left text-white">의미</th>
                  </tr>
                </thead>
                <tbody>
                  {houses.map((h, i) => (
                    <tr key={i} className="border-t border-white/10" style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                      <td className="px-3 py-2 text-purple-300 font-medium">{h.num}</td>
                      <td className="px-3 py-2 text-white/70">{h.name}</td>
                      <td className="px-3 py-2 text-white/50">{h.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">행성 간의 각도(Aspect) — 천체들의 대화</h2>
            <p className="mb-3">
              출생 차트 분석의 핵심 중 하나가 "어스펙트(Aspect)"입니다. 두 천체 사이의 각도에 따라 에너지가 조화롭게 흐르거나(트라인·섹스타일), 긴장 관계(스퀘어·오포지션)를 만들거나, 강렬하게 융합(컨정션)됩니다.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { name: '컨정션 (0°)', desc: '에너지 융합, 강화', color: 'rgba(255,255,255,0.1)' },
                { name: '섹스타일 (60°)', desc: '부드러운 협조', color: 'rgba(34,197,94,0.08)' },
                { name: '스퀘어 (90°)', desc: '긴장과 도전', color: 'rgba(239,68,68,0.08)' },
                { name: '트라인 (120°)', desc: '자연스러운 흐름', color: 'rgba(34,197,94,0.08)' },
                { name: '퀸컹스 (150°)', desc: '조정이 필요', color: 'rgba(255,165,0,0.08)' },
                { name: '오포지션 (180°)', desc: '균형과 대립', color: 'rgba(239,68,68,0.08)' },
              ].map((a, i) => (
                <div key={i} className="rounded-xl p-3" style={{ background: a.color, border: '1px solid rgba(255,255,255,0.08)' }}>
                  <p className="text-white font-medium text-xs">{a.name}</p>
                  <p className="text-white/50 text-xs mt-1">{a.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">출생 차트 분석 예시 — 처녀자리 태양, 물고기자리 달, 사자자리 상승</h2>
            <p className="mb-3">
              이 세 가지 조합을 가진 사람을 예시로 설명해봅니다. 겉으로는 무척 자신감 있고 화려해 보입니다(사자자리 상승). 하지만 실제로는 매우 세심하고 완벽주의적이며 분석적입니다(처녀자리 태양). 내면 깊은 곳에서는 감수성이 풍부하고 공감 능력이 높으며, 때로 현실을 이상화하는 경향이 있습니다(물고기자리 달).
            </p>
            <p className="mb-3">
              사자자리 상승은 자신감 있어 보이게 하지만, 처녀자리 태양은 끊임없이 자기 비판을 하고, 물고기자리 달은 타인의 감정에 쉽게 영향 받습니다. 이 세 에너지가 어떻게 협력하거나 갈등하는지가 그 사람의 심리적 역동을 만듭니다.
            </p>
            <p>
              이처럼 단순히 태양 별자리 하나로는 설명할 수 없는 복잡한 인간의 내면을 출생 차트는 훨씬 풍부하게 그려냅니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">출생 차트 보는 방법 — 단계별 가이드</h2>
            <ol className="space-y-4 pl-4 list-decimal">
              <li>
                <strong className="text-white">기본 정보 준비:</strong> 정확한 생년월일, 출생 시간(가능한 한 정확하게), 출생 지역(도시 이름)을 준비하세요. 출생 시간이 정확할수록 상승 별자리와 하우스 배치가 정확해집니다.
              </li>
              <li>
                <strong className="text-white">차트 생성:</strong> Astro.com, Astrolabe 등의 무료 사이트에서 정보를 입력하면 차트를 생성할 수 있습니다.
              </li>
              <li>
                <strong className="text-white">3대장 먼저 확인:</strong> 태양(☉), 달(☽), 상승(AC) 별자리를 먼저 파악하세요. 이 세 가지가 기본 성격의 핵심을 구성합니다.
              </li>
              <li>
                <strong className="text-white">개인 행성 확인:</strong> 수성(☿), 금성(♀), 화성(♂)의 위치를 확인합니다. 각각 사고방식, 사랑 스타일, 에너지 표현 방식을 나타냅니다.
              </li>
              <li>
                <strong className="text-white">하우스 배치 확인:</strong> 어느 하우스에 행성이 많이 몰려 있는지 보면 그 사람이 가장 많은 에너지를 쏟는 삶의 영역을 알 수 있습니다.
              </li>
            </ol>
          </section>

        </div>

        <div className="mt-10 p-4 rounded-xl text-xs" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
          <p className="text-white/40">
            ※ 출생 차트 분석은 수천 년의 점성술 전통에 기반한 교육적·오락적 콘텐츠입니다. 심리적 자기 이해 도구로 활용하되, 중요한 결정의 기준으로 삼지 않을 것을 권고합니다.
          </p>
        </div>

        <div className="mt-8 p-6 rounded-2xl text-center" style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.3)' }}>
          <p className="text-white/60 mb-4 text-sm">나의 별자리 운세가 궁금하다면?</p>
          <Link href="/" className="inline-block px-6 py-3 rounded-full font-bold text-white text-sm" style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #9333ea 100%)' }}>
            🔮 오늘의 운세 무료로 보기 →
          </Link>
        </div>

        <nav className="mt-10">
          <h3 className="text-sm text-white/40 mb-3 font-semibold uppercase tracking-widest">관련 글</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/blog/moon-sign-guide" className="p-4 rounded-xl text-sm hover:border-purple-400 transition-colors" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="text-white/70 font-medium">🌙 달 별자리 완벽 가이드</div>
              <div className="text-white/30 text-xs mt-1">감정과 내면을 지배하는 달의 힘</div>
            </Link>
            <Link href="/blog/rising-sign-guide" className="p-4 rounded-xl text-sm hover:border-purple-400 transition-colors" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="text-white/70 font-medium">⬆️ 상승 별자리 가이드</div>
              <div className="text-white/30 text-xs mt-1">첫인상을 결정하는 어센던트</div>
            </Link>
          </div>
        </nav>
      </article>
    </div>
  );
}
