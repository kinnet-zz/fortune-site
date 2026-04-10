import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '점성술이란 무엇인가? 서양 별자리의 역사와 기초 완벽 가이드 | StarFate',
  description: '수천 년의 역사를 가진 점성술의 기원부터 현대 별자리 해석법까지. 황도대 12별자리, 지배 행성, 원소의 관계를 체계적으로 설명합니다.',
  alternates: { canonical: '/blog/what-is-astrology' },
  openGraph: {
    title: '점성술이란 무엇인가? 서양 별자리의 역사와 기초 가이드',
    description: '수천 년의 역사를 가진 점성술의 기원부터 현대 별자리 해석법까지',
    type: 'article',
  },
};

const bgStyle = {
  background: 'linear-gradient(160deg, #050520 0%, #0a0a2e 30%, #130a2e 60%, #1a0a3e 100%)',
  minHeight: '100vh',
};

export default function WhatIsAstrologyPage() {
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
            <span className="text-white/30 text-xs">2025년 3월 1일 · 8분 읽기</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4 leading-tight">
            점성술이란 무엇인가? 서양 별자리의 역사와 기초 완벽 가이드
          </h1>
          <p className="text-white/50 text-base leading-relaxed">
            수천 년의 역사를 가진 점성술은 단순한 미신이 아닙니다. 천체의 움직임과 인간의 삶을 연결지어온 고대의 지혜를 탐구합니다.
          </p>
        </header>

        <div className="space-y-8 text-sm leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-4">점성술의 정의와 본질</h2>
            <p className="mb-3">
              점성술(占星術, Astrology)은 태양, 달, 행성 등 천체의 위치와 움직임이 인간의 성격, 행동, 운명에 영향을 미친다는 믿음을 바탕으로 한 체계입니다. 라틴어 "astrologia"에서 유래했으며, "astron(별)"과 "logos(학문)"의 합성어입니다.
            </p>
            <p className="mb-3">
              현대 과학과 점성술의 관계는 복잡합니다. 과학계는 천체가 직접적으로 인간 심리에 영향을 미친다는 주장에 동의하지 않지만, 수백만 명의 사람들이 점성술을 통해 자기 이해와 삶의 방향성을 찾습니다. 심리학자 카를 융은 점성술을 "무의식의 투영"이라고 해석하며, 점성술적 상징이 인간 심리의 원형(archetype)을 나타낼 수 있다고 보았습니다.
            </p>
            <p>
              중요한 것은 점성술을 어떻게 활용하느냐입니다. 운명을 맹목적으로 믿는 도구가 아니라, 자신의 성향과 가능성을 탐색하는 자기 성찰의 언어로 사용할 때 가장 큰 가치를 발휘합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">점성술의 역사 — 5000년의 여정</h2>
            <p className="mb-3">
              점성술의 역사는 기원전 3000년경 메소포타미아(오늘날의 이라크)로 거슬러 올라갑니다. 고대 바빌로니아인들은 밤하늘을 관찰하며 천체의 움직임과 지상의 사건 사이에 패턴이 있다고 믿었습니다. 이들이 개발한 황도대(Zodiac) 개념이 현대 서양 점성술의 기초가 되었습니다.
            </p>
            <p className="mb-3">
              기원전 4세기경 알렉산더 대왕의 정복으로 바빌로니아 점성술이 그리스로 전해졌습니다. 그리스 철학자들은 이를 자신들의 우주론과 결합하여 더욱 정교한 체계를 만들었습니다. 기원전 2세기에 프톨레마이오스가 쓴 &ldquo;테트라비블로스(Tetrabiblos)&rdquo;는 고대 점성술의 집대성으로, 수 세기 동안 표준 교과서 역할을 했습니다.
            </p>
            <p className="mb-3">
              중세 유럽에서 점성술은 의학, 항법, 농업과 깊이 연관되어 있었습니다. 왕들은 전쟁의 시기와 결혼 날짜를 점성술로 결정했고, 의사들은 환자의 별자리를 보고 치료법을 결정했습니다. 르네상스 시대에는 코페르니쿠스의 지동설이 등장하기 전까지 점성술과 천문학이 구분되지 않았습니다.
            </p>
            <p>
              17세기 과학 혁명 이후 천문학과 점성술이 분리되었지만, 점성술은 대중문화 속에서 꾸준히 살아남았습니다. 20세기에는 심리 점성술(Psychological Astrology)이 발전하면서 별자리를 성격과 심리 분석의 도구로 활용하는 새로운 흐름이 생겨났습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">황도대(Zodiac)란 무엇인가?</h2>
            <p className="mb-3">
              황도대는 지구에서 보았을 때 태양이 1년 동안 지나가는 하늘의 띠를 말합니다. 그리스어 "zodiakos kyklos(동물의 원)"에서 유래했으며, 이 띠를 12등분한 각각의 구역이 바로 12개의 별자리입니다. 태양이 각 별자리를 통과하는 기간이 약 30일씩 할당되어, 우리가 흔히 알고 있는 "태양 별자리"가 됩니다.
            </p>
            <p className="mb-3">
              엄밀히 말하면 황도대에는 13번째 별자리인 뱀주인자리(Ophiuchus)도 있지만, 전통 점성술에서는 12개 체계를 유지합니다. 12는 1년의 달 수, 하루를 두 번 나눈 12시간 등 자연의 주기와 일치하는 수라 특별한 의미를 가집니다.
            </p>
            <p>
              주의할 점은 세차운동(지구 자전축의 흔들림) 때문에 약 2000년 전에 설정된 별자리 구역이 실제 별자리 위치와 약 한 달 정도 차이가 난다는 것입니다. 서양 점성술은 이를 인정하면서도 계절의 시작점을 기준으로 하는 "열대 황도대(Tropical Zodiac)"를 사용하며, 인도 점성술은 실제 별자리 위치를 기준으로 하는 "항성 황도대(Sidereal Zodiac)"를 사용합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4원소와 3가지 특질 — 별자리 분류의 기본</h2>
            <p className="mb-3">
              12개의 별자리는 4가지 원소(Element)와 3가지 특질(Modality)로 분류됩니다. 이 두 가지 분류 체계를 이해하면 별자리들 사이의 관계와 성격 패턴을 훨씬 깊이 파악할 수 있습니다.
            </p>

            <div className="rounded-2xl p-5 mb-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h3 className="text-white font-semibold mb-3">4원소(Element)</h3>
              <ul className="space-y-2">
                <li><strong className="text-red-300">불(Fire) — 양자리, 사자자리, 사수자리:</strong> 열정, 행동력, 리더십, 창의성이 특징. 에너지가 넘치고 즉흥적이며 낙관적.</li>
                <li><strong className="text-green-300">땅(Earth) — 황소자리, 처녀자리, 염소자리:</strong> 현실적, 실용적, 안정 추구. 물질적 세계와 깊이 연결되어 있으며 신뢰할 수 있는 성향.</li>
                <li><strong className="text-yellow-300">공기(Air) — 쌍둥이자리, 천칭자리, 물병자리:</strong> 지성, 소통, 사교성, 아이디어가 풍부. 변화를 즐기고 새로운 정보에 빠르게 반응.</li>
                <li><strong className="text-blue-300">물(Water) — 게자리, 전갈자리, 물고기자리:</strong> 감성, 직관, 공감 능력이 뛰어남. 깊은 내면 세계와 감정적 연결을 중시.</li>
              </ul>
            </div>

            <div className="rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h3 className="text-white font-semibold mb-3">3가지 특질(Modality)</h3>
              <ul className="space-y-2">
                <li><strong className="text-purple-300">주동형(Cardinal) — 양자리, 게자리, 천칭자리, 염소자리:</strong> 시작을 좋아하고 주도적. 각 계절의 시작과 일치.</li>
                <li><strong className="text-purple-300">고정형(Fixed) — 황소자리, 사자자리, 전갈자리, 물병자리:</strong> 안정적이고 집중력이 강함. 한번 결정하면 잘 바꾸지 않음.</li>
                <li><strong className="text-purple-300">변통형(Mutable) — 쌍둥이자리, 처녀자리, 사수자리, 물고기자리:</strong> 유연하고 적응력이 강함. 각 계절의 끝과 일치하며 변화를 잘 수용.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">지배 행성(Ruling Planet) — 별자리의 에너지 원천</h2>
            <p className="mb-3">
              각 별자리는 하나 이상의 행성에 의해 "지배"됩니다. 지배 행성은 해당 별자리의 근본적인 에너지와 성질을 결정하는 원천으로, 신화적 상징과 깊이 연결됩니다.
            </p>
            <p className="mb-3">
              예를 들어, 화성(Mars)은 전쟁의 신 아레스에서 유래했으며, 화성이 지배하는 양자리는 용기, 공격성, 추진력을 가집니다. 금성(Venus)은 사랑과 미의 여신 아프로디테에서 유래했으며, 금성이 지배하는 황소자리와 천칭자리는 아름다움과 관계를 중시합니다.
            </p>
            <p>
              현대 점성술에서는 외행성인 천왕성, 해왕성, 명왕성이 발견된 후 물병자리(천왕성), 물고기자리(해왕성), 전갈자리(명왕성)의 공동 지배 행성으로 추가되었습니다. 이 외행성들은 개인보다 세대 전체의 변화와 영향을 나타내는 것으로 해석합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">태양 별자리 외의 다른 중요 요소들</h2>
            <p className="mb-3">
              우리가 일상적으로 알고 있는 별자리는 엄밀히 말하면 "태양 별자리(Sun Sign)"입니다. 생일을 기준으로 태양이 어느 별자리에 위치했는지를 나타내는 것입니다. 하지만 완전한 점성술 분석(출생 차트)에는 훨씬 더 많은 요소가 포함됩니다.
            </p>
            <p className="mb-3">
              <strong className="text-white">달 별자리(Moon Sign):</strong> 출생 시 달이 위치한 별자리로, 감정, 직관, 무의식적 반응 방식을 나타냅니다. 외면에 드러나는 태양 별자리보다 더 깊은 내면의 자아를 보여준다고 여겨집니다.
            </p>
            <p className="mb-3">
              <strong className="text-white">상승 별자리(Rising Sign / Ascendant):</strong> 출생 시간을 기준으로 동쪽 지평선에서 떠오르던 별자리입니다. 첫인상, 외모, 사람들에게 보이는 방식을 나타냅니다. "사회적 가면"이라고도 불립니다.
            </p>
            <p>
              점성술 전문가들은 세 가지 별자리(태양, 달, 상승)의 조합이 한 사람의 성격을 가장 잘 설명한다고 말합니다. 같은 태양 별자리라도 달 별자리와 상승 별자리에 따라 성격이 크게 달라질 수 있는 이유입니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">점성술을 건강하게 활용하는 방법</h2>
            <p className="mb-3">
              점성술은 자기 이해와 성찰의 도구로 활용할 때 가장 유용합니다. 다음과 같은 방식으로 건강하게 활용해보세요.
            </p>
            <ul className="space-y-2 pl-4 list-disc">
              <li><strong className="text-white">자기 이해의 거울로:</strong> 별자리 특성을 읽으면서 자신의 강점과 약점, 습관적인 패턴을 발견하는 출발점으로 삼을 수 있습니다.</li>
              <li><strong className="text-white">타인을 이해하는 언어로:</strong> 상대방의 별자리를 이해하면 그들의 행동과 반응 방식을 더 쉽게 공감하는 데 도움이 됩니다.</li>
              <li><strong className="text-white">인생 주기의 지도로:</strong> 중요한 결정을 앞두고 내면의 목소리를 듣는 계기로 활용할 수 있습니다.</li>
              <li><strong className="text-white">운명론에 빠지지 않기:</strong> 별자리가 모든 것을 결정한다고 믿기보다, 가능성의 범위를 보여주는 것으로 이해하는 것이 중요합니다. 실제 삶은 의지와 선택으로 이루어집니다.</li>
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
            <Link href="/blog/zodiac-compatibility-guide" className="p-4 rounded-xl text-sm hover:border-purple-400 transition-colors" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="text-white/70 font-medium">💞 12 별자리 궁합 완벽 분석</div>
              <div className="text-white/30 text-xs mt-1">나와 가장 잘 맞는 별자리는?</div>
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
