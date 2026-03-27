import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '동양 12지와 서양 별자리의 차이점 — 두 전통의 지혜 비교 | StarFate',
  description: '음양오행에 기반한 동양 12지와 황도대 기반 서양 별자리. 두 체계의 역사, 원리, 성격 해석의 공통점과 차이점을 깊이 있게 비교합니다.',
  alternates: { canonical: '/blog/chinese-vs-western-zodiac' },
  openGraph: {
    title: '동양 12지와 서양 별자리의 차이점',
    description: '두 고대 전통의 지혜를 비교 분석',
    type: 'article',
  },
};

const bgStyle = {
  background: 'linear-gradient(160deg, #050520 0%, #0a0a2e 30%, #130a2e 60%, #1a0a3e 100%)',
  minHeight: '100vh',
};

export default function ChineseVsWesternPage() {
  return (
    <div style={bgStyle}>
      <article className="max-w-3xl mx-auto px-6 py-16 text-white/80">
        <Link href="/blog" className="text-purple-400 hover:text-purple-300 text-sm mb-8 inline-block">
          ← 블로그 목록으로
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className="px-2 py-0.5 rounded-full text-xs font-medium" style={{ background: 'rgba(124,58,237,0.3)', color: 'rgba(196,181,253,1)' }}>
              동서양 비교
            </span>
            <span className="text-white/30 text-xs">2025년 3월 10일 · 9분 읽기</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4 leading-tight">
            동양 12지와 서양 별자리의 차이점 — 두 전통의 지혜를 비교하다
          </h1>
          <p className="text-white/50 text-base leading-relaxed">
            수천 년 동안 독립적으로 발전해온 동양의 12지지와 서양의 황도대 별자리. 두 체계가 인간과 우주의 관계를 어떻게 다르게, 또 비슷하게 바라보는지 탐구합니다.
          </p>
        </header>

        <div className="space-y-8 text-sm leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-4">두 체계의 기본 구조 비교</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border border-white/10 rounded-xl overflow-hidden mb-4">
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.06)' }}>
                    <th className="px-3 py-2 text-left text-white">항목</th>
                    <th className="px-3 py-2 text-left text-purple-300">서양 별자리</th>
                    <th className="px-3 py-2 text-left text-orange-300">동양 12지</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['기원', '메소포타미아 → 그리스 → 로마', '중국 고대 (은나라 추정)'],
                    ['기준', '태양의 연간 이동 경로 (황도)', '달의 주기 + 목성의 12년 공전'],
                    ['주기', '약 1개월 (태양 별자리)', '12년 (12지지 한 주기)'],
                    ['개수', '12개 별자리', '12가지 동물'],
                    ['에너지 체계', '4원소 (불·땅·공기·물)', '음양오행 (목·화·토·금·수)'],
                    ['적용', '생일(월)로 결정', '태어난 해로 결정'],
                    ['해석 초점', '개성, 행동 방식, 심리', '기질, 운명, 대인 관계'],
                  ].map(([item, western, eastern]) => (
                    <tr key={item} className="border-t border-white/10">
                      <td className="px-3 py-2 text-white/60">{item}</td>
                      <td className="px-3 py-2 text-purple-200/80">{western}</td>
                      <td className="px-3 py-2 text-orange-200/80">{eastern}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">서양 별자리 — 태양의 언어</h2>
            <p className="mb-3">
              서양 점성술의 핵심은 태양입니다. 지구에서 보았을 때 태양이 1년 동안 지나가는 하늘의 경로(황도)를 12개 구역으로 나눈 것이 황도대 별자리입니다. 생일을 기준으로 태양이 어느 별자리에 있었는지가 "나의 별자리"가 됩니다.
            </p>
            <p className="mb-3">
              서양 점성술은 개인의 심리와 성격 분석에 특히 강점이 있습니다. 20세기에 발전한 심리 점성술(Psychological Astrology)은 칼 융의 분석심리학과 결합되어 자기 탐구의 도구로 널리 활용됩니다. 12개 별자리는 각각 인간 심리의 12가지 원형적 패턴을 나타낸다고 볼 수 있습니다.
            </p>
            <p>
              서양 별자리에서 중요한 또 다른 요소는 행성의 위치입니다. 생일과 출생 시간, 장소를 기반으로 작성하는 출생 차트(Natal Chart)에는 태양, 달, 수성, 금성, 화성, 목성, 토성, 천왕성, 해왕성, 명왕성의 위치가 모두 포함되어 훨씬 세밀한 분석이 가능합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">동양 12지 — 달과 목성의 리듬</h2>
            <p className="mb-3">
              동양의 12지지(十二支)는 음력을 기반으로 발전했습니다. 12가지 동물(쥐·소·범·토끼·용·뱀·말·양·원숭이·닭·개·돼지)이 각각 1년을 대표하며, 12년을 한 주기로 순환합니다.
            </p>
            <p className="mb-3">
              12라는 숫자는 목성의 공전 주기(약 11.86년)에서 비롯된 것으로 추정됩니다. 고대 중국의 천문학자들은 목성이 하늘을 한 바퀴 도는 시간을 12년으로 보고, 매 해를 목성의 위치에 따라 12동물로 구분했습니다.
            </p>
            <p className="mb-3">
              동양 12지는 서양 별자리보다 더 광범위한 시간 척도로 사람의 기질을 나눕니다. 같은 해에 태어난 사람들이 공통된 특성을 가진다는 개념은 개인보다 세대와 집단의 패턴을 보는 데 유용합니다.
            </p>
            <p>
              또한 동양 점성술에서는 태어난 해뿐 아니라 달(월지), 날(일지), 시간(시지)도 함께 고려하는 "사주팔자(四柱八字)" 체계가 발전했습니다. 이 체계에서는 태어난 년·월·일·시의 4개 기둥과 8개 글자가 운명의 전체 그림을 그린다고 봅니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">음양오행 vs 4원소 — 에너지를 바라보는 두 가지 방식</h2>
            <p className="mb-3">
              두 체계에서 가장 흥미로운 비교 지점은 에너지를 분류하는 방식입니다.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="rounded-xl p-4" style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)' }}>
                <h3 className="text-purple-300 font-semibold mb-3">서양: 4원소</h3>
                <ul className="space-y-1 text-xs">
                  <li>🔥 <strong className="text-white">불(Fire):</strong> 열정, 창의성, 행동</li>
                  <li>🌍 <strong className="text-white">땅(Earth):</strong> 안정, 실용, 물질</li>
                  <li>💨 <strong className="text-white">공기(Air):</strong> 지성, 소통, 변화</li>
                  <li>💧 <strong className="text-white">물(Water):</strong> 감성, 직관, 무의식</li>
                </ul>
                <p className="text-white/40 text-xs mt-3">그리스 철학에서 유래한 4원소는 물질의 근본 상태를 나타내며 각 별자리의 기질을 결정합니다.</p>
              </div>
              <div className="rounded-xl p-4" style={{ background: 'rgba(234,179,8,0.08)', border: '1px solid rgba(234,179,8,0.2)' }}>
                <h3 className="text-yellow-300 font-semibold mb-3">동양: 음양오행</h3>
                <ul className="space-y-1 text-xs">
                  <li>🌿 <strong className="text-white">木(목):</strong> 성장, 창의, 봄의 에너지</li>
                  <li>🔥 <strong className="text-white">火(화):</strong> 열정, 표현, 여름의 에너지</li>
                  <li>🌏 <strong className="text-white">土(토):</strong> 균형, 안정, 중앙</li>
                  <li>⚙️ <strong className="text-white">金(금):</strong> 결단, 수확, 가을의 에너지</li>
                  <li>💧 <strong className="text-white">水(수):</strong> 지혜, 유연, 겨울의 에너지</li>
                </ul>
                <p className="text-white/40 text-xs mt-3">오행은 서로를 생성(상생)하고 억제(상극)하는 역동적인 관계로 연결되어 있습니다.</p>
              </div>
            </div>
            <p>
              흥미롭게도 두 체계 모두 에너지를 불·물·흙(땅)의 세 요소로 공유하며, 동양의 木(목)은 서양의 공기(Air)와, 金(금)은 금성·토성의 에너지와 유사한 개념을 가집니다. 수천 년 동안 독립적으로 발전했지만, 두 체계 모두 자연의 근본 에너지를 비슷하게 분류했다는 것이 놀랍습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">동양 12지와 서양 별자리의 대응 관계</h2>
            <p className="mb-3">
              두 체계 사이에 공식적인 일대일 대응은 없지만, 에너지와 성격의 유사성으로 비교하는 경우가 있습니다.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border border-white/10 rounded-xl overflow-hidden">
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.06)' }}>
                    <th className="px-3 py-2 text-left text-orange-300">동양 12지</th>
                    <th className="px-3 py-2 text-left text-purple-300">유사한 서양 별자리</th>
                    <th className="px-3 py-2 text-left text-white/50">공통 특성</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['🐭 쥐(Rat)', '쌍둥이자리·전갈자리', '영리함, 기민함, 적응력'],
                    ['🐮 소(Ox)', '황소자리·염소자리', '인내심, 근면함, 안정 추구'],
                    ['🐯 범(Tiger)', '사자자리·양자리', '용기, 리더십, 강한 의지'],
                    ['🐰 토끼(Rabbit)', '물고기자리·천칭자리', '온화함, 평화 추구, 섬세함'],
                    ['🐉 용(Dragon)', '양자리·사자자리', '카리스마, 열정, 창의성'],
                    ['🐍 뱀(Snake)', '전갈자리·처녀자리', '직관력, 신중함, 심오함'],
                    ['🐎 말(Horse)', '사수자리·쌍둥이자리', '자유, 활동성, 독립심'],
                    ['🐑 양(Goat)', '물고기자리·황소자리', '감수성, 예술적 감각, 온순함'],
                    ['🐒 원숭이(Monkey)', '쌍둥이자리·물병자리', '호기심, 재치, 다재다능'],
                    ['🐓 닭(Rooster)', '처녀자리·염소자리', '완벽주의, 분석력, 자신감'],
                    ['🐕 개(Dog)', '사수자리·게자리', '충성심, 정직함, 보호본능'],
                    ['🐷 돼지(Pig)', '물고기자리·황소자리', '관대함, 솔직함, 삶의 즐거움'],
                  ].map(([eastern, western, traits]) => (
                    <tr key={eastern} className="border-t border-white/10">
                      <td className="px-3 py-2 text-orange-200/80">{eastern}</td>
                      <td className="px-3 py-2 text-purple-200/80">{western}</td>
                      <td className="px-3 py-2 text-white/50">{traits}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">두 체계를 함께 활용하는 방법</h2>
            <p className="mb-3">
              서양 별자리와 동양 12지를 함께 분석하면 훨씬 더 풍부한 자기 이해가 가능합니다. 예를 들어, 서양 별자리로 "나의 월간 성향"을 이해하고, 동양 12지로 "나의 연간 기질과 운의 흐름"을 파악하는 방식입니다.
            </p>
            <p className="mb-3">
              실제로 많은 점성술 애호가들이 두 체계를 병행하여 사용합니다. 서양 별자리가 개인의 내면 심리와 성격의 미묘한 차이를 보여준다면, 동양 12지는 그 사람이 속한 세대와 시대적 흐름 속에서의 운명의 큰 그림을 보여준다고 볼 수 있습니다.
            </p>
            <p>
              결국 두 체계는 인간을 이해하는 언어입니다. 어느 체계가 옳고 그름이 아니라, 각자가 자신에게 의미 있는 언어를 선택하여 자기 이해와 성찰의 도구로 활용하면 됩니다.
            </p>
          </section>

        </div>

        <div className="mt-12 p-6 rounded-2xl text-center" style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.3)' }}>
          <p className="text-white/60 mb-4 text-sm">나의 별자리와 띠를 함께 분석한 오늘의 운세</p>
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
            <Link href="/blog/how-to-read-daily-fortune" className="p-4 rounded-xl text-sm transition-colors" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="text-white/70 font-medium">📅 오늘의 운세를 제대로 읽는 방법</div>
              <div className="text-white/30 text-xs mt-1">AI 점성술의 활용법</div>
            </Link>
          </div>
        </nav>
      </article>
    </div>
  );
}
