import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '2026년 말의 해 — 12띠별 연간 운세 완벽 가이드 | StarFate',
  description: '2026년 병오년(丙午年) 말의 해를 맞이하는 12띠별 운세를 완벽하게 분석합니다. 각 띠별 2026년 사랑운, 직업운, 금전운 총정리.',
  alternates: { canonical: '/blog/chinese-zodiac-2026' },
  openGraph: {
    title: '2026년 말의 해 — 12띠별 연간 운세 완벽 가이드',
    description: '2026년 병오년 12띠별 사랑운·직업운·금전운을 완벽 분석합니다',
    type: 'article',
  },
};

const bgStyle = {
  background: 'linear-gradient(160deg, #050520 0%, #0a0a2e 30%, #130a2e 60%, #1a0a3e 100%)',
  minHeight: '100vh',
};

export default function ChineseZodiac2026Page() {
  return (
    <div style={bgStyle}>
      <article className="max-w-3xl mx-auto px-6 py-16 text-white/80">
        <Link href="/blog" className="text-purple-400 hover:text-purple-300 text-sm mb-8 inline-block">
          ← 블로그 목록으로
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className="px-2 py-0.5 rounded-full text-xs font-medium" style={{ background: 'rgba(124,58,237,0.3)', color: 'rgba(196,181,253,1)' }}>
              연간 운세
            </span>
            <span className="text-white/30 text-xs">2025년 12월 31일 · 12분 읽기</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4 leading-tight">
            2026년 말의 해 — 12띠별 연간 운세 완벽 가이드
          </h1>
          <p className="text-white/50 text-base leading-relaxed">
            2026년 병오년(丙午年), 불의 에너지를 지닌 말의 해가 밝아옵니다. 강인한 생명력과 자유를 상징하는 말의 해는 행동, 열정, 새로운 시작의 에너지로 가득합니다. 당신의 띠에게 2026년은 어떤 해가 될까요?
          </p>
        </header>

        <div className="space-y-8 text-sm leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2026년 병오년(丙午年) — 말의 해란?</h2>
            <p className="mb-3">
              2026년은 천간(天干)의 병(丙)과 지지(地支)의 오(午)가 결합한 <strong className="text-white">병오년(丙午年)</strong>입니다. 병(丙)은 오행 중 불(火)을 나타내며, 오(午)는 12지지 중 7번째인 말(馬)에 해당합니다. 따라서 2026년은 '불의 말(Fire Horse)'의 해로, 60년 주기 중 가장 강렬하고 역동적인 에너지를 지닌 해로 꼽힙니다.
            </p>
            <p className="mb-3">
              말은 동양 문화에서 속도, 자유, 용기, 역동성을 상징합니다. 말은 넓은 초원을 거침없이 달리는 존재로, 구속을 싫어하고 자유를 사랑하며 강한 의지와 추진력을 가집니다. 사회적으로는 교류와 소통, 활발한 인간관계, 여행과 이동의 에너지를 의미합니다. 국제적 교류나 사업 확장, 새로운 분야로의 도전에 우호적인 한 해가 됩니다.
            </p>
            <p className="mb-3">
              병오년의 불(火) 에너지는 열정, 창의성, 화려함을 증폭시킵니다. 예술, 엔터테인먼트, 스타트업, 기술 혁신 분야에서 특히 활발한 움직임이 예상됩니다. 그러나 불의 에너지는 지나치면 조급함, 충동성, 갈등으로 이어질 수 있으니 냉정한 판단과 인내심을 유지하는 것이 중요합니다.
            </p>
            <p>
              음력 기준으로 2026년 말의 해는 2026년 2월 17일(설날)부터 2027년 2월 5일까지입니다. 이 기간 동안 각 띠의 운세 흐름이 크게 영향을 받습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">말과 삼합(三合)인 띠 — 호랑이 · 말 · 개</h2>
            <p className="mb-3">
              동양 점성술에서 삼합(三合)은 세 띠가 서로 조화롭게 에너지를 공유하는 관계입니다. 말(午)과 삼합을 이루는 띠는 호랑이(寅), 말(午), 개(戌)입니다. 이 세 띠는 2026년에 가장 강력한 운세의 에너지를 받습니다.
            </p>

            <div className="space-y-3">
              <div className="rounded-2xl p-5" style={{ background: 'rgba(255,150,50,0.08)', border: '1px solid rgba(255,150,50,0.2)' }}>
                <h3 className="text-orange-300 font-bold mb-2">🐯 호랑이띠 (1926·1938·1950·1962·1974·1986·1998·2010·2022년생)</h3>
                <p className="text-white/70 text-xs leading-relaxed">
                  2026년은 호랑이띠에게 삼합의 기운이 작동하는 강한 행운의 해입니다. 새로운 프로젝트, 이직, 창업 등 새로운 시작에 최적의 타이밍입니다. <strong className="text-white">연애운:</strong> 특별한 인연과의 만남 가능성이 높음. 기존 관계는 더욱 깊어짐. <strong className="text-white">직업운:</strong> 과감한 도전이 빛을 발하는 해. 리더십을 발휘할 기회. <strong className="text-white">금전운:</strong> 투자 및 새로운 수입원 창출 가능성. 단, 과도한 위험 감수는 금물.
                </p>
              </div>

              <div className="rounded-2xl p-5" style={{ background: 'rgba(255,150,50,0.08)', border: '1px solid rgba(255,150,50,0.2)' }}>
                <h3 className="text-yellow-300 font-bold mb-2">🐴 말띠 (1930·1942·1954·1966·1978·1990·2002·2014·2026년생)</h3>
                <p className="text-white/70 text-xs leading-relaxed">
                  자신의 해(本命年)인 말띠는 전통적으로 조심해야 하는 해로 알려져 있습니다. 태세(太歲)의 직접적인 영향을 받아 변화가 많고 예측 불가한 상황이 생길 수 있습니다. <strong className="text-white">조언:</strong> 붉은색 속옷이나 액세서리를 착용하고, 큰 결정은 신중히 검토할 것. 도전보다는 수성(守成)에 집중. <strong className="text-white">연애운:</strong> 기존 관계 점검의 해. 솔로라면 서두르지 말 것. <strong className="text-white">직업운:</strong> 안정을 추구하되, 찾아오는 기회는 놓치지 말 것.
                </p>
              </div>

              <div className="rounded-2xl p-5" style={{ background: 'rgba(255,150,50,0.08)', border: '1px solid rgba(255,150,50,0.2)' }}>
                <h3 className="text-amber-300 font-bold mb-2">🐶 개띠 (1934·1946·1958·1970·1982·1994·2006·2018년생)</h3>
                <p className="text-white/70 text-xs leading-relaxed">
                  삼합의 기운을 받는 개띠는 2026년 인간관계에서 큰 도움을 받습니다. 귀인(貴人)의 도움으로 직업운과 사업운이 도약합니다. <strong className="text-white">직업운:</strong> 중요한 인물과의 만남이 커리어를 바꿀 수 있음. 인맥 관리에 적극 투자할 것. <strong className="text-white">연애운:</strong> 소개나 모임을 통한 자연스러운 인연의 가능성. <strong className="text-white">금전운:</strong> 안정적 성장 흐름. 부동산이나 중장기 투자에 유리.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">말과 상충(相沖)하는 띠 — 쥐띠 주의</h2>

            <div className="rounded-2xl p-5" style={{ background: 'rgba(100,100,255,0.08)', border: '1px solid rgba(100,100,255,0.2)' }}>
              <h3 className="text-blue-300 font-bold mb-2">🐭 쥐띠 (1936·1948·1960·1972·1984·1996·2008·2020년생)</h3>
              <p className="text-white/70 text-xs leading-relaxed mb-2">
                쥐(子)와 말(午)은 지지의 정충(正沖) 관계로, 쥐띠는 2026년 특히 조심이 필요합니다. 상충은 충돌, 변화, 갈등의 에너지를 의미하지만, 이를 잘 활용하면 오히려 큰 변화와 성장의 계기가 될 수 있습니다.
              </p>
              <p className="text-white/60 text-xs leading-relaxed">
                <strong className="text-white">주의 사항:</strong> 건강 관리에 특별히 신경 쓸 것. 무리한 계획 변경이나 이직, 이사는 신중히 검토. 대인관계에서 갈등이 생기기 쉬우니 언행에 주의. <strong className="text-white">조언:</strong> 붉은 색상과 양(羊), 용(龍)띠의 지인에게 조언을 구하면 도움. 중요한 결정은 음력 3월, 6월 등 길한 달에 집중. 건강 검진과 안전에 각별히 유의.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">12띠별 2026년 운세 요약</h2>

            <div className="grid gap-3">
              {[
                { emoji: '🐭', name: '쥐띠', years: '1960·1972·1984·1996', summary: '변화의 해. 건강과 안전에 주의하며 신중한 판단이 필요. 큰 결정은 상반기에 마무리하거나 2027년으로 미룰 것.' },
                { emoji: '🐮', name: '소띠', years: '1961·1973·1985·1997', summary: '묵묵히 쌓아온 노력이 결실을 맺기 시작하는 해. 직업운 상승세, 금전운 안정. 인내가 열쇠.' },
                { emoji: '🐯', name: '호랑이띠', years: '1962·1974·1986·1998', summary: '삼합 최고의 해. 도전과 새로운 시작에 최적. 연애·직업 모두 적극적으로 나설 것. 행운이 따르는 한 해.' },
                { emoji: '🐰', name: '토끼띠', years: '1963·1975·1987·1999', summary: '인간관계에서 도움을 받는 해. 부드러운 접근이 강한 돌진보다 효과적. 예술·창작 분야에서 빛남.' },
                { emoji: '🐲', name: '용띠', years: '1964·1976·1988·2000', summary: '사업 확장과 신규 투자에 유리. 말의 역동적 에너지와 용의 카리스마가 시너지. 해외 기회 포착 권장.' },
                { emoji: '🐍', name: '뱀띠', years: '1965·1977·1989·2001', summary: '내면 성찰과 전략적 준비의 해. 서두르기보다 2027년을 위한 포석을 다지는 것이 현명. 학습과 연구에 집중.' },
                { emoji: '🐴', name: '말띠', years: '1966·1978·1990·2002', summary: '본명년으로 변화가 많음. 건강과 안전을 최우선으로. 도전보다 수성에 집중하되 다가오는 기회는 놓치지 말 것.' },
                { emoji: '🐑', name: '양띠', years: '1967·1979·1991·2003', summary: '귀인의 도움으로 어려움을 극복하는 해. 독립적 결정보다 협력이 효과적. 예술·감성 분야 기회 풍부.' },
                { emoji: '🐒', name: '원숭이띠', years: '1968·1980·1992·2004', summary: '아이디어와 창의성이 넘치는 해. 새로운 기술 습득이나 사업 아이디어 실행에 좋은 시기. 유연한 대응이 핵심.' },
                { emoji: '🐓', name: '닭띠', years: '1969·1981·1993·2005', summary: '직업운이 전반적으로 상승. 노력에 비례한 보상이 따르는 해. 건강 관리와 인간관계 조화가 중요.' },
                { emoji: '🐶', name: '개띠', years: '1970·1982·1994·2006', summary: '삼합의 귀인 운. 좋은 인맥이 커리어와 금전운을 끌어올림. 사교 활동과 네트워킹에 적극 참여할 것.' },
                { emoji: '🐷', name: '돼지띠', years: '1971·1983·1995·2007', summary: '가정과 내면 충실의 해. 가족과의 유대가 강해지며 정서적 안정감 상승. 투자보다 저축과 안정에 집중.' },
              ].map(({ emoji, name, years, summary }) => (
                <div key={name} className="rounded-2xl p-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl">{emoji}</span>
                    <strong className="text-white text-sm">{name}</strong>
                    <span className="text-white/30 text-xs">({years}년생)</span>
                  </div>
                  <p className="text-white/60 text-xs leading-relaxed">{summary}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2026년 행운을 부르는 방법</h2>
            <p className="mb-3">
              병오년의 불(火) 에너지를 최대한 활용하려면, 이 에너지와 조화를 이루는 색상, 방향, 숫자를 생활에 적극 활용하세요.
            </p>
            <div className="rounded-2xl p-5 mb-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <ul className="space-y-2 text-white/70 text-xs">
                <li><strong className="text-red-300">행운의 색상:</strong> 빨간색, 주황색, 보라색 — 불의 에너지를 증폭시키는 색상. 지갑, 의류, 소품 등에 활용.</li>
                <li><strong className="text-yellow-300">행운의 숫자:</strong> 2, 3, 7 — 말의 해에 특별히 좋은 숫자. 중요한 날짜 선택이나 번호 선정 시 참고.</li>
                <li><strong className="text-green-300">행운의 방향:</strong> 남쪽 — 오(午)는 방위로 정남(正南)에 해당. 중요한 미팅이나 면접 시 남쪽을 등지거나 마주보는 자리 선택.</li>
                <li><strong className="text-blue-300">행운의 꽃:</strong> 작약, 장미 — 말의 해에 번영과 사랑을 부르는 꽃. 집에 화분으로 두거나 자주 생화를 구입하면 좋음.</li>
                <li><strong className="text-purple-300">행운 아이템:</strong> 말 모양의 인테리어 소품이나 액세서리. 에쿠우스, 달리는 말 그림 등을 집 서쪽에 두면 재물운을 높인다고 전해짐.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2026년 피해야 할 것들</h2>
            <p className="mb-3">
              말의 해의 강렬하고 충동적인 에너지는 양날의 검입니다. 이 에너지가 과도해지면 오히려 불운을 불러올 수 있습니다.
            </p>
            <ul className="space-y-2 pl-4 list-disc text-white/70">
              <li><strong className="text-white">충동적인 큰 결정:</strong> 말의 해는 행동력과 속도의 에너지가 강합니다. 이로 인해 충분한 검토 없이 중요한 결정을 내리는 실수를 할 수 있습니다. 특히 이직, 이사, 대규모 투자는 최소 3번 이상 재고하세요.</li>
              <li><strong className="text-white">건강 방치:</strong> 불의 에너지가 강한 해에는 심혈관 및 혈압 관련 건강 문제가 증가합니다. 과도한 업무와 스트레스를 피하고, 규칙적인 운동과 충분한 수면을 유지하세요.</li>
              <li><strong className="text-white">쥐띠에 대한 과도한 도움:</strong> 상충 관계인 쥐띠와의 중요한 사업 계약이나 동업은 2026년에는 신중히 검토하세요. 불필요한 갈등이 생길 수 있습니다.</li>
              <li><strong className="text-white">검은색 과다 사용:</strong> 불(火)의 기운과 상극인 수(水)를 상징하는 검은색과 파란색의 과도한 사용은 말의 해 에너지를 약화시킬 수 있습니다.</li>
              <li><strong className="text-white">음력 5월(午月) 주요 변동:</strong> 말띠 해의 말월(음력 5월)은 에너지가 극대화되는 시기로, 변동성이 커집니다. 이 시기 전후로 중요한 결정을 미루거나 앞당기는 것이 유리합니다.</li>
            </ul>
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
            <Link href="/blog/chinese-zodiac-compatibility" className="p-4 rounded-xl text-sm hover:border-purple-400 transition-colors" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="text-white/70 font-medium">🐉 동양 12띠 궁합 완벽 분석</div>
              <div className="text-white/30 text-xs mt-1">나와 가장 잘 맞는 띠는?</div>
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
