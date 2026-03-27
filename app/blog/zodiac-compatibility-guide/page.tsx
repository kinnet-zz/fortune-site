import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '12 별자리 궁합 완벽 분석 — 나와 가장 잘 맞는 별자리는? | StarFate',
  description: '별자리 궁합의 원리부터 원소별 궁합 패턴, 연애 궁합, 친구 궁합까지. 12개 별자리 간의 궁합을 원소와 행성 에너지를 기반으로 분석합니다.',
  alternates: { canonical: '/blog/zodiac-compatibility-guide' },
  openGraph: {
    title: '12 별자리 궁합 완벽 분석 — 나와 가장 잘 맞는 별자리는?',
    description: '별자리 궁합의 원리부터 원소별 궁합 패턴까지 완벽 분석',
    type: 'article',
  },
};

const bgStyle = {
  background: 'linear-gradient(160deg, #050520 0%, #0a0a2e 30%, #130a2e 60%, #1a0a3e 100%)',
  minHeight: '100vh',
};

export default function ZodiacCompatibilityPage() {
  return (
    <div style={bgStyle}>
      <article className="max-w-3xl mx-auto px-6 py-16 text-white/80">
        <Link href="/blog" className="text-purple-400 hover:text-purple-300 text-sm mb-8 inline-block">
          ← 블로그 목록으로
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className="px-2 py-0.5 rounded-full text-xs font-medium" style={{ background: 'rgba(124,58,237,0.3)', color: 'rgba(196,181,253,1)' }}>
              별자리 궁합
            </span>
            <span className="text-white/30 text-xs">2025년 3월 5일 · 10분 읽기</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4 leading-tight">
            12 별자리 궁합 완벽 분석 — 나와 가장 잘 맞는 별자리는?
          </h1>
          <p className="text-white/50 text-base leading-relaxed">
            원소와 행성 에너지를 기반으로 12개 별자리 간의 궁합을 분석합니다. 왜 특정 별자리끼리 잘 맞고 어떤 별자리는 충돌하는지 그 원리를 알아보세요.
          </p>
        </header>

        <div className="space-y-8 text-sm leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-4">별자리 궁합의 원리</h2>
            <p className="mb-3">
              별자리 궁합은 단순히 "잘 맞는다, 안 맞는다"로 나눌 수 있는 문제가 아닙니다. 두 사람의 별자리가 가진 원소, 특질, 지배 행성의 상호작용을 통해 관계의 역동성을 파악하는 것입니다. 궁합이 좋다는 것이 반드시 완벽한 관계를 보장하지 않으며, 궁합이 어렵다는 것도 그 관계가 불가능하다는 의미가 아닙니다.
            </p>
            <p className="mb-3">
              점성술에서 두 별자리 간의 각도(Aspect)가 궁합의 핵심입니다. 같은 원소(120도, Trine)는 자연스러운 조화를, 반대 원소(180도, Opposition)는 끌림과 긴장감을, 90도(Square)는 도전과 성장의 에너지를 나타냅니다.
            </p>
            <p>
              가장 중요한 원칙: 별자리 태양궁합은 전체 궁합의 일부입니다. 달 별자리, 상승 별자리, 금성 별자리 등도 함께 고려할 때 더 정확한 분석이 가능합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">원소별 궁합 패턴 — 가장 강력한 기본 원칙</h2>
            <p className="mb-3">같은 원소끼리는 기본적으로 잘 맞으며, 서로 보완하는 원소 사이에서도 좋은 시너지가 납니다.</p>

            <div className="space-y-4">
              <div className="rounded-2xl p-5" style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}>
                <h3 className="text-red-300 font-bold mb-3">🔥 불(Fire) — 양자리, 사자자리, 사수자리</h3>
                <p className="mb-2"><strong className="text-white">불 + 불 (최상):</strong> 열정과 에너지가 서로를 증폭시킵니다. 함께 있으면 서로를 고무시키고 모험을 즐깁니다. 다만 두 사람 모두 주도권을 원하기 때문에 자존심 충돌이 생길 수 있습니다.</p>
                <p className="mb-2"><strong className="text-white">불 + 공기 (좋음):</strong> 공기가 불을 키우듯, 공기 별자리는 불 별자리의 열정과 아이디어에 지적 자극과 소통을 더합니다. 서로 에너지를 주고받는 활기찬 조합입니다.</p>
                <p className="mb-2"><strong className="text-white">불 + 땅 (어려움):</strong> 불의 충동성과 땅의 신중함이 충돌하기 쉽습니다. 서로 다른 리듬 때문에 답답함을 느낄 수 있지만, 균형을 이루면 서로의 약점을 보완합니다.</p>
                <p><strong className="text-white">불 + 물 (긴장):</strong> 가장 도전적인 조합. 불의 직진성과 물의 감수성이 오해를 만들 수 있습니다. 하지만 깊은 끌림이 생기는 조합이기도 합니다.</p>
              </div>

              <div className="rounded-2xl p-5" style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)' }}>
                <h3 className="text-green-300 font-bold mb-3">🌍 땅(Earth) — 황소자리, 처녀자리, 염소자리</h3>
                <p className="mb-2"><strong className="text-white">땅 + 땅 (최상):</strong> 안정, 신뢰, 실용성을 공유합니다. 장기적인 관계를 쌓기에 최적의 조합. 가끔은 너무 안전하고 루틴에 빠져 지루함을 느낄 수 있습니다.</p>
                <p className="mb-2"><strong className="text-white">땅 + 물 (좋음):</strong> 물이 땅을 풍요롭게 하듯, 물 별자리의 감수성이 땅 별자리의 현실적 성향에 깊이를 더합니다. 안정과 감성의 균형을 이루는 좋은 조합입니다.</p>
                <p><strong className="text-white">땅 + 공기 (도전):</strong> 현실 지향적인 땅과 이상적인 공기가 충돌합니다. 서로 다른 속도와 우선순위 때문에 갈등이 생기지만, 서로에게서 배울 것이 많습니다.</p>
              </div>

              <div className="rounded-2xl p-5" style={{ background: 'rgba(234,179,8,0.08)', border: '1px solid rgba(234,179,8,0.2)' }}>
                <h3 className="text-yellow-300 font-bold mb-3">💨 공기(Air) — 쌍둥이자리, 천칭자리, 물병자리</h3>
                <p className="mb-2"><strong className="text-white">공기 + 공기 (최상):</strong> 지적 자극이 넘치는 조합. 대화가 끊이지 않고 서로의 아이디어에 자극을 받습니다. 두 사람 모두 감정 표현에 서툴 수 있어 깊이 있는 감정적 연결이 과제입니다.</p>
                <p><strong className="text-white">공기 + 물 (복잡):</strong> 이성과 감성의 충돌. 공기의 논리적 접근이 물의 감성을 상처 입히기도 하지만, 서로 다른 세계를 탐험하는 흥미로운 조합이기도 합니다.</p>
              </div>

              <div className="rounded-2xl p-5" style={{ background: 'rgba(56,189,248,0.08)', border: '1px solid rgba(56,189,248,0.2)' }}>
                <h3 className="text-blue-300 font-bold mb-3">💧 물(Water) — 게자리, 전갈자리, 물고기자리</h3>
                <p><strong className="text-white">물 + 물 (최상이자 과제):</strong> 감정적 깊이와 공감이 최고에 달합니다. 서로를 완벽하게 이해하는 듯한 느낌을 받지만, 두 사람의 감정이 증폭되어 감정 소용돌이에 빠질 수도 있습니다. 건강한 경계 설정이 중요합니다.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">별자리별 최고 궁합 정리</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border border-white/10 rounded-xl overflow-hidden">
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.06)' }}>
                    <th className="px-3 py-2 text-left text-white">별자리</th>
                    <th className="px-3 py-2 text-left text-green-300">최고 궁합</th>
                    <th className="px-3 py-2 text-left text-yellow-300">좋은 궁합</th>
                    <th className="px-3 py-2 text-left text-red-300">도전적 궁합</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['양자리 ♈', '사자자리, 사수자리', '쌍둥이자리, 물병자리', '천칭자리, 염소자리'],
                    ['황소자리 ♉', '처녀자리, 염소자리', '게자리, 물고기자리', '전갈자리, 물병자리'],
                    ['쌍둥이자리 ♊', '천칭자리, 물병자리', '양자리, 사자자리', '사수자리, 처녀자리'],
                    ['게자리 ♋', '전갈자리, 물고기자리', '황소자리, 처녀자리', '양자리, 천칭자리'],
                    ['사자자리 ♌', '양자리, 사수자리', '쌍둥이자리, 천칭자리', '황소자리, 전갈자리'],
                    ['처녀자리 ♍', '황소자리, 염소자리', '게자리, 전갈자리', '사수자리, 쌍둥이자리'],
                    ['천칭자리 ♎', '쌍둥이자리, 물병자리', '사자자리, 사수자리', '게자리, 염소자리'],
                    ['전갈자리 ♏', '게자리, 물고기자리', '처녀자리, 염소자리', '양자리, 사자자리'],
                    ['사수자리 ♐', '양자리, 사자자리', '천칭자리, 물병자리', '처녀자리, 쌍둥이자리'],
                    ['염소자리 ♑', '황소자리, 처녀자리', '전갈자리, 물고기자리', '양자리, 천칭자리'],
                    ['물병자리 ♒', '쌍둥이자리, 천칭자리', '양자리, 사수자리', '황소자리, 전갈자리'],
                    ['물고기자리 ♓', '게자리, 전갈자리', '황소자리, 염소자리', '사수자리, 처녀자리'],
                  ].map(([sign, best, good, challenging]) => (
                    <tr key={sign} className="border-t border-white/10">
                      <td className="px-3 py-2 text-white font-medium">{sign}</td>
                      <td className="px-3 py-2 text-green-300/80">{best}</td>
                      <td className="px-3 py-2 text-yellow-300/80">{good}</td>
                      <td className="px-3 py-2 text-red-300/80">{challenging}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">반대 별자리 — 끌림과 도전의 이중성</h2>
            <p className="mb-3">
              황도대에서 정반대에 위치한 별자리들(180도 각도)은 "대립 쌍(Opposite Signs)"이라고 불립니다. 이 조합은 처음에 강력한 끌림을 만들어내지만, 동시에 가장 큰 긴장감을 유발합니다.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                ['양자리 ↔ 천칭자리', '자기 vs 타인', '양자리의 개인주의와 천칭자리의 관계 중심이 충돌하고 보완합니다.'],
                ['황소자리 ↔ 전갈자리', '안정 vs 변혁', '황소자리의 안정 추구와 전갈자리의 변화 욕구가 긴장을 만듭니다.'],
                ['쌍둥이자리 ↔ 사수자리', '지식 vs 지혜', '쌍둥이의 정보 수집과 사수자리의 철학적 탐구가 만납니다.'],
                ['게자리 ↔ 염소자리', '가정 vs 사회', '내면의 세계와 외부 성공 사이의 균형을 찾는 조합입니다.'],
                ['사자자리 ↔ 물병자리', '개인 vs 집단', '개인의 빛남과 집단의 진보 사이에서 균형을 찾습니다.'],
                ['처녀자리 ↔ 물고기자리', '현실 vs 이상', '현실적 완벽주의와 이상적 감수성이 만나는 조합입니다.'],
              ].map(([pair, theme, desc]) => (
                <div key={pair} className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="text-white font-semibold text-xs mb-1">{pair}</div>
                  <div className="text-purple-300 text-xs mb-2">{theme}</div>
                  <div className="text-white/50 text-xs">{desc}</div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">궁합을 넘어서 — 진정한 관계의 열쇠</h2>
            <p className="mb-3">
              가장 좋은 궁합을 가진 커플도 노력 없이는 좋은 관계를 유지할 수 없습니다. 반대로, 어려운 궁합으로 알려진 별자리 사이에서도 깊이 있고 지속적인 관계를 맺은 사례는 무수히 많습니다.
            </p>
            <p className="mb-3">
              별자리 궁합은 두 사람의 잠재적인 역동성을 보여주는 지도일 뿐입니다. 실제 관계에서는 상호 존중, 소통, 노력, 공유된 가치관이 별자리보다 훨씬 더 중요합니다.
            </p>
            <p>
              점성술에서 궁합을 볼 때 가장 중요한 것은 "이 조합에서 각자 어떻게 성장할 수 있는가?"입니다. 도전적인 궁합이라 해도 서로에게서 배울 것이 많은 가장 풍요로운 관계가 될 수 있습니다.
            </p>
          </section>

        </div>

        <div className="mt-12 p-6 rounded-2xl text-center" style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.3)' }}>
          <p className="text-white/60 mb-4 text-sm">오늘 나의 별자리 운세 확인하기</p>
          <Link href="/" className="inline-block px-6 py-3 rounded-full font-bold text-white text-sm" style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #9333ea 100%)' }}>
            🔮 무료 운세 보기 →
          </Link>
        </div>

        <nav className="mt-10">
          <h3 className="text-sm text-white/40 mb-3 font-semibold uppercase tracking-widest">관련 글</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/blog/what-is-astrology" className="p-4 rounded-xl text-sm transition-colors" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="text-white/70 font-medium">🔮 점성술이란 무엇인가?</div>
              <div className="text-white/30 text-xs mt-1">서양 별자리의 역사와 기초</div>
            </Link>
            <Link href="/blog/chinese-vs-western-zodiac" className="p-4 rounded-xl text-sm transition-colors" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="text-white/70 font-medium">☯️ 동양 12지 vs 서양 별자리</div>
              <div className="text-white/30 text-xs mt-1">두 전통의 지혜 비교</div>
            </Link>
          </div>
        </nav>
      </article>
    </div>
  );
}
