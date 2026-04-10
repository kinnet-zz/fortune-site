import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '고대 이집트는 왜 별자리로 나일강 범람을 예측했나 — 천문학과 점성술이 갈라지기 전의 역사 | StarFate',
  description: '시리우스와 나일강 범람의 관계, 덴데라 조디악, 바빌로니아에서 그리스로의 전파, 케플러까지 점성술을 했던 과학자들. 천문학과 점성술 분리의 5,000년 역사.',
  alternates: { canonical: 'https://www.starfate.day/blog/ancient-egypt-astronomy' },
  openGraph: {
    title: '고대 이집트는 왜 별자리로 나일강 범람을 예측했나 — 천문학과 점성술이 갈라지기 전의 역사',
    description: '시리우스, 나일강, 덴데라 조디악, 프톨레마이오스까지 — 하늘을 읽는 두 언어가 탄생하고 분리된 5,000년의 이야기.',
    type: 'article',
  },
};

const bgStyle = {
  background: 'linear-gradient(160deg, #050520 0%, #0a0a2e 30%, #130a2e 60%, #1a0a3e 100%)',
  minHeight: '100vh',
};

export default function AncientEgyptAstronomyPage() {
  return (
    <div style={bgStyle}>
      <article className="max-w-3xl mx-auto px-6 py-16 text-white/80">
        <Link href="/blog" className="text-purple-400 hover:text-purple-300 text-sm mb-8 inline-block">
          ← 블로그 목록으로 돌아가기
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className="px-2 py-0.5 rounded-full text-xs font-medium" style={{ background: 'rgba(124,58,237,0.3)', color: 'rgba(196,181,253,1)' }}>
              별자리 역사
            </span>
            <span className="text-white/30 text-xs">2025년 8월 12일 · 12분 읽기</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4 leading-tight">
            고대 이집트는 왜 별자리로 나일강 범람을 예측했나 — 천문학과 점성술이 갈라지기 전의 역사
          </h1>
          <p className="text-white/50 text-base leading-relaxed">
            별자리를 보고 강이 언제 넘칠지 예측했다는 것이 미신처럼 들립니까? 5,000년 전 이집트인들에게 그것은 과학이었습니다. 그리고 그 관찰의 정밀함은 현대 천문학자들도 인정합니다. 천문학과 점성술이 하나였던 시대, 그 지식의 계보를 추적합니다.
          </p>
        </header>

        <img
          src="https://images.unsplash.com/photo-1608178398319-48f814d0750c?w=800&auto=format&fit=crop&q=80"
          alt="고대 이집트 천문학"
          className="rounded-2xl w-full object-cover my-8"
          style={{ maxHeight: '400px' }}
        />

        <div className="space-y-8 text-sm leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-4">시리우스와 나일강 — 별이 강을 깨우는 날</h2>
            <p className="mb-3">
              고대 이집트 문명의 근간은 나일강이었습니다. 나일강은 매년 범람하면서 상류에서 운반한 비옥한 퇴적물을 강 유역에 쌓았습니다. 이 범람이 없으면 이집트의 농업은 존재할 수 없었고, 이집트 문명 자체가 불가능했습니다. 따라서 범람 시기를 미리 아는 것은 국가의 존립과 직결된 문제였습니다.
            </p>
            <p className="mb-3">
              이집트인들은 수천 년의 관찰 끝에 놀라운 사실을 발견했습니다. 매년 특정 시기, 밤하늘에서 가장 밝게 빛나는 별 시리우스(Sirius)가 해가 뜨기 직전 동쪽 지평선에 처음으로 모습을 드러냅니다. 천문학 용어로 '헬리아칼 라이징(heliacal rising)'이라고 부르는 이 현상이 나타나고 나서 약 2주 뒤, 나일강이 범람을 시작했습니다. 지금의 달력으로 대략 7월 초입니다.
            </p>
            <p className="mb-3">
              이 상관관계의 정밀함은 현대의 관점에서도 인상적입니다. 시리우스의 헬리아칼 라이징과 나일 범람 사이의 연관성은 인과관계가 아닙니다. 두 현상은 모두 지구가 태양을 공전하는 같은 시기에 발생하는 독립적인 현상입니다. 그러나 이집트인들은 이 패턴을 수백 년의 관찰로 파악했고, 시리우스를 신뢰할 수 있는 달력의 기준으로 삼았습니다.
            </p>
            <p className="mb-3">
              이집트인들은 시리우스를 단순한 천문학적 기준점으로만 보지 않았습니다. 그들은 시리우스를 여신 소프데트(Sopdet)로 신격화했습니다. 소프데트는 나일 범람, 풍요, 새해를 가져오는 여신이었습니다. 신화적 해석과 천문학적 관찰이 하나로 융합된 것입니다. 이것이 점성술의 원형입니다 — 하늘의 현상을 정밀하게 관찰하고, 동시에 그것에 의미와 이야기를 부여하는 것.
            </p>
            <p className="mb-3">
              시리우스를 기준으로 삼은 이집트의 민간력(Civil Calendar)은 365일이었습니다. 이것은 역사상 가장 이른 태양력 중 하나로, 훗날 율리우스력과 그레고리력의 기반이 됩니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">데칸 시스템 — 서양 점성술 분야법의 뿌리</h2>
            <p className="mb-3">
              이집트 천문학이 서양 점성술에 남긴 가장 구체적인 유산 중 하나가 데칸(Decan) 시스템입니다.
            </p>
            <p className="mb-3">
              이집트인들은 하늘의 황도대(태양이 지나가는 띠)를 36개 구역으로 나눴습니다. 각 구역에는 특정 별 또는 별 무리가 대응되며, 각 구역이 동쪽 지평선에서 떠오르는 데 약 10일이 걸립니다. 36개 구역 × 10일 = 360일. 이것이 이집트의 천문 달력 기초였습니다.
            </p>
            <p className="mb-3">
              이 36개 구역이 서양 점성술의 데칸 개념의 직접적 기원입니다. 서양 점성술에서 각 별자리는 30도로 나뉘고, 이 30도는 다시 10도씩 세 개의 데칸으로 세분됩니다. 예를 들어 양자리 1데칸(1~10도), 양자리 2데칸(11~20도), 양자리 3데칸(21~30도)처럼 말이죠. 각 데칸에는 다른 행성이 지배권을 가지며, 같은 양자리라도 어느 데칸에 태어났느냐에 따라 세부적 성격 차이가 있다고 봅니다. 이 체계의 뿌리가 5,000년 전 나일강 유역의 천문 관측이었습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">덴데라 조디악 — 루브르에 있는 가장 오래된 황도대 지도</h2>
            <p className="mb-3">
              파리 루브르 박물관 1층, 이집트 고대 유물 전시실에는 특별한 돌 부조가 있습니다. 직경 약 2.5미터의 원형 천장 부조로, '덴데라 조디악(Dendera Zodiac)'이라고 불립니다. 기원전 50년경, 이집트 남부 덴데라 지방의 하토르(Hathor) 신전 천장에 새겨진 것입니다.
            </p>
            <p className="mb-3">
              이 부조에는 황도 12궁이 모두 등장합니다. 양자리, 황소자리, 쌍둥이자리부터 물고기자리까지 — 현대 서양 점성술이 사용하는 12개 별자리가 거의 그대로 묘사되어 있습니다. 덴데라 조디악은 완전한 형태의 황도 12궁이 묘사된 가장 오래된 유물 중 하나입니다.
            </p>
            <p className="mb-3">
              흥미로운 점은, 덴데라 조디악이 순수한 이집트 산물이 아니라는 것입니다. 이 부조가 제작된 기원전 50년은 이집트가 이미 헬레니즘 문화권에 깊숙이 편입된 시기입니다. 알렉산더 대왕의 정복(기원전 332년) 이후, 그리스의 황도 12궁 체계가 이집트의 천문 전통과 융합되었습니다. 덴데라 조디악은 그 융합의 결과물입니다.
            </p>
            <p className="mb-3">
              이 부조는 1820년 프랑스 탐험대가 신전 천장에서 절단하여 가져왔습니다. 이집트 정부는 반환을 요구해왔으나 현재까지 루브르에 있습니다. 고고학적 보물의 귀환 문제는 여전히 현재진행형입니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">바빌로니아 → 이집트 → 그리스 — 황도 체계의 전파 경로</h2>
            <p className="mb-3">
              현대 서양 점성술의 황도 12궁 체계는 어디서 왔을까요? 그 계보를 추적하면 메소포타미아의 바빌로니아 문명으로 거슬러 올라갑니다.
            </p>
            <p className="mb-3">
              황도 12궁의 원형은 기원전 7~5세기 바빌로니아에서 형성되었습니다. 바빌로니아 천문학자들은 수백 년의 정밀한 관측 기록을 바탕으로 태양, 달, 다섯 행성(수성·금성·화성·목성·토성)의 움직임을 예측하는 수학적 체계를 개발했습니다. 이들은 황도를 12개 30도 구역으로 나누어 각각에 이름을 붙였습니다 — 이것이 황도 12궁의 원형입니다. 이 시기의 점성술은 주로 국가와 왕의 운명을 예측하는 '정치 점성술'이었습니다. 개인의 운세가 아닌, 일식·월식·행성 합성 같은 천문 현상이 왕국에 어떤 의미를 가지는가를 해석했습니다.
            </p>
            <p className="mb-3">
              기원전 4세기, 알렉산더 대왕이 페르시아 제국을 정복하고 이집트까지 점령하면서 바빌로니아의 천문·점성술 지식이 그리스 세계로 흘러들어갔습니다. 그리스인들은 이 체계를 자신들의 철학적 전통 — 플라톤의 우주론, 아리스토텔레스의 원소 이론 — 과 결합했습니다. 국가 점성술은 개인 점성술로 발전했습니다. 사람의 출생 시각을 기록하고, 그 순간의 하늘을 분석해서 그 사람의 성격과 운명을 읽는 '출생 차트(nativity chart)' 시스템이 등장했습니다.
            </p>
            <p className="mb-3">
              기원후 2세기, 알렉산드리아의 수학자·천문학자 클라우디오스 프톨레마이오스(Claudius Ptolemy)가 이 모든 것을 집대성했습니다. 그의 저서 <em>테트라비블로스(Tetrabiblos)</em>는 그리스어로 '네 권의 책'이라는 뜻으로, 행성, 별자리, 하우스, 출생 차트 해석의 방법론을 체계적으로 정리한 점성술의 최초 완결판이었습니다. 이 책은 현대 서양 점성술의 직접적 원형입니다. 프톨레마이오스는 같은 시기에 <em>알마게스트(Almagest)</em>라는 천문학의 고전도 저술했습니다. 그는 점성술사이자 천문학자였으며, 그에게 두 분야는 구분되지 않았습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">케플러도 점성술 차트를 그렸다 — 17세기 과학혁명까지의 공존</h2>
            <p className="mb-3">
              현대인들은 "과학을 한다는 것"과 "점성술을 믿는다는 것"이 서로 모순된다고 생각합니다. 그러나 17세기 과학혁명 이전까지, 이 두 가지는 같은 학문의 두 면이었습니다.
            </p>
            <p className="mb-3">
              덴마크의 천문학자 티코 브라헤(Tycho Brahe, 1546~1601)는 망원경 이전 시대에 가장 정밀한 천체 관측 기록을 남긴 인물입니다. 그는 동시에 열렬한 점성술사였으며, 덴마크 왕실의 점성술 고문으로 활동했습니다. 그가 남긴 정밀한 행성 관측 데이터는 그의 조수 요하네스 케플러에게 전해졌습니다.
            </p>
            <p className="mb-3">
              요하네스 케플러(Johannes Kepler, 1571~1630)는 행성 운동의 세 가지 법칙을 발견한 근대 천문학의 아버지입니다. 그는 타원 궤도를 발견하고, 뉴턴에게 중력 법칙의 수학적 기반을 제공했습니다. 케플러는 또한 점성술 차트를 작성했습니다. 그는 자신의 어머니를 위한 출생 차트를 그렸고, 발렌슈타인 공작에게 점성술 예측을 제공했으며, 상당히 정확한 예측을 한 것으로 기록되어 있습니다. 케플러는 점성술을 전면 부정하지 않았습니다. 다만 그는 "모든 별이 모든 사람에게 영향을 준다는 식의 조잡한 점성술"을 비판했으며, 더 정밀하고 수학적인 점성술을 추구했습니다.
            </p>
            <p className="mb-3">
              갈릴레오 갈릴레이(Galileo Galilei, 1564~1642)도 피사 대학에서 의학과 수학을 가르치던 시절 점성술 강의를 했으며, 개인 고객을 위한 출생 차트를 작성했습니다. 당시 유럽 대학의 의학부에서는 점성술이 정규 커리큘럼의 일부였습니다. 히포크라테스 의학 전통에서 행성의 배치가 신체의 체액(humor)에 영향을 준다고 봤기 때문입니다.
            </p>
          </section>

          <img
            src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&auto=format&fit=crop&q=80"
            alt="밤하늘과 별"
            className="rounded-2xl w-full object-cover my-8"
            style={{ maxHeight: '400px' }}
          />

          <section>
            <h2 className="text-xl font-bold text-white mb-4">뉴턴의 중력과 두 학문의 이별 — 왜 분리되었나</h2>
            <p className="mb-3">
              아이작 뉴턴(Isaac Newton, 1643~1727)의 <em>프린키피아(Principia Mathematica)</em> 출판(1687년)은 천문학과 점성술의 결별을 상징하는 분기점입니다.
            </p>
            <p className="mb-3">
              뉴턴의 중력 법칙은 행성의 움직임을 완전히 수학적으로 설명했습니다. 더 이상 신비한 천상의 힘이나 신의 뜻을 가정하지 않아도 되었습니다. 달이 지구 주위를 도는 것, 사과가 떨어지는 것, 목성이 타원 궤도를 그리는 것 — 모두 하나의 수식으로 설명되었습니다.
            </p>
            <p className="mb-3">
              이 물리학적 패러다임 안에서, 행성이 인간의 성격이나 운명에 영향을 준다는 주장은 설 자리를 잃었습니다. 어떤 물리적 메커니즘으로 화성의 위치가 태어나는 아기의 성격을 결정한다는 말인가? 중력의 영향은 거리의 제곱에 반비례하므로, 출생 시 분만실 의사의 중력이 화성의 중력보다 훨씬 크다. 이런 반론이 힘을 얻었습니다.
            </p>
            <p className="mb-3">
              18~19세기를 거치면서 천문학은 완전히 물리학·수학의 영역으로 자리잡았고, 점성술은 대학 교과과정에서 퇴출되었습니다. 두 분야는 완전히 다른 경로를 걷기 시작했습니다. 천문학은 망원경, 분광기, 전파망원경을 거쳐 우주의 물리적 구조를 탐구했고, 점성술은 상징 해석과 심리적 도구의 영역으로 이동했습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">독창적 분석 — 분리는 완성인가, 상실인가</h2>
            <p className="mb-3">
              천문학과 점성술의 분리를 "과학이 미신을 몰아낸 진보"로만 보는 시각은 역사의 일부를 무시합니다.
            </p>
            <p className="mb-3">
              고대 이집트인들이 시리우스를 관찰했을 때, 그들은 두 가지를 동시에 했습니다. 첫째, 정밀한 천문 관측 — 시리우스의 헬리아칼 라이징 날짜를 기록하고 나일 범람과의 상관관계를 수백 년에 걸쳐 검증했습니다. 이것은 현대 과학의 관점에서도 유효한 경험적 관찰입니다. 둘째, 의미 부여 — 이 별에 소프데트라는 이름과 이야기를 주었습니다. 범람이 다가온다는 사실적 정보를 신화적 언어로 공동체에 전달했습니다.
            </p>
            <p className="mb-3">
              과학혁명은 첫 번째 능력을 극도로 발달시켰습니다. 현대 천문학은 시리우스까지의 거리를 8.6광년으로 측정하고, 그 표면 온도가 9,940켈빈임을 알며, 동반성 시리우스 B의 존재를 확인합니다. 그러나 두 번째 능력 — 하늘에서 인간 삶의 의미를 읽어내는 것 — 은 과학의 언어로 번역되지 않았습니다.
            </p>
            <p className="mb-3">
              점성술은 그 두 번째 기능을 이어받았습니다. 그것이 물리적 인과율에 기반하지 않더라도, 하늘의 리듬과 인간 삶의 리듬 사이에서 의미를 찾으려는 인류의 오래된 충동을 담고 있습니다. 5,000년 전 나일강 유역의 이집트 신관들이 시리우스를 바라보며 소프데트 여신의 귀환을 기다렸을 때, 그들이 경험한 것의 일부는 오늘날 별자리 앱을 열어보는 사람들의 경험 안에도 살아 있습니다.
            </p>
            <p className="mb-3">
              천문학과 점성술의 분리는 지식의 진보였지만, 동시에 하나의 통합된 하늘 읽기의 상실이기도 했습니다. 어느 것이 더 중요한가가 아니라, 두 언어가 각자의 영역에서 어떻게 공존할 수 있는지를 묻는 것이 더 풍요로운 질문일지 모릅니다.
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
            오늘의 운세 무료로 보기 →
          </Link>
        </div>

        <nav className="mt-10">
          <h3 className="text-sm text-white/40 mb-3 font-semibold uppercase tracking-widest">관련 글</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/blog/nasa-ophiuchus-13th-zodiac" className="p-4 rounded-xl text-sm hover:border-purple-400 transition-colors" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="text-white/70 font-medium">NASA도 인정한 13번째 별자리</div>
              <div className="text-white/30 text-xs mt-1">뱀주인자리가 채택되지 못하는 진짜 이유</div>
            </Link>
            <Link href="/blog/twin-study-astrology" className="p-4 rounded-xl text-sm hover:border-purple-400 transition-colors" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="text-white/70 font-medium">같은 날 태어난 2,000명을 추적했다</div>
              <div className="text-white/30 text-xs mt-1">쌍둥이 연구가 별자리에 던진 질문</div>
            </Link>
          </div>
        </nav>
      </article>
    </div>
  );
}
