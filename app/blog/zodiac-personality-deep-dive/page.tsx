import type { Metadata } from 'next';
import Link from 'next/link';
import AuthorBio from '@/components/AuthorBio';

export const metadata: Metadata = {
  title: '12별자리 성격 완전 분석 — 강점·약점·연애·직업까지 | StarFate',
  description: '양자리부터 물고기자리까지 12별자리의 핵심 성격 특성을 깊이 있게 분석합니다. 각 별자리의 강점, 약점, 연애 스타일, 직업 적성, 성장 포인트를 체계적으로 정리했습니다.',
  alternates: { canonical: 'https://www.starfate.day/blog/zodiac-personality-deep-dive' },
  openGraph: {
    title: '12별자리 성격 완전 분석 — 강점·약점·연애·직업까지',
    description: '12별자리의 핵심 성격 특성을 깊이 있게 분석합니다.',
    type: 'article',
  },
};

const bgStyle = {
  background: 'linear-gradient(160deg, #050520 0%, #0a0a2e 30%, #130a2e 60%, #1a0a3e 100%)',
  minHeight: '100vh',
};

const signs = [
  {
    name: '양자리 (Aries)', dates: '3/21~4/19', emoji: '♈', element: '불(Fire)', planet: '화성(Mars)',
    core: '양자리는 황도대의 첫 번째 별자리로, 봄의 시작과 함께 태어났습니다. 화성의 지배를 받는 양자리는 전쟁의 신 아레스의 에너지를 품고 있습니다. 선구자 정신, 용기, 추진력이 핵심 키워드입니다.',
    strength: ['강한 추진력과 리더십', '도전을 두려워하지 않는 용기', '즉각적인 결단력', '낙관적이고 활력 넘치는 에너지'],
    weakness: ['충동적이고 인내심 부족', '자기 중심적 경향', '끈기가 부족해 시작만 많음', '화를 쉽게 내지만 금방 잊음'],
    love: '연애에서 양자리는 적극적이고 열정적인 구애자입니다. 첫눈에 반하는 경험을 자주 하며, 상대를 쟁취하는 과정에서 짜릿함을 느낍니다. 단조로운 관계보다 역동적인 긴장감을 선호하며, 상대가 자신을 독립적인 개인으로 존중해줄 때 깊은 유대를 형성합니다.',
    career: '기업가, 군인, 소방관, 스포츠 선수, 외과의, 영업직처럼 빠른 결단과 행동이 필요한 분야에서 탁월합니다.',
  },
  {
    name: '황소자리 (Taurus)', dates: '4/20~5/20', emoji: '♉', element: '땅(Earth)', planet: '금성(Venus)',
    core: '황소자리는 금성의 지배를 받아 아름다움, 쾌락, 감각적 즐거움을 추구합니다. 12별자리 중 가장 인내심이 강하고 안정을 추구하는 별자리로, 한번 결심하면 끝까지 밀고 나가는 의지가 특징입니다.',
    strength: ['놀라운 인내력과 지구력', '신뢰할 수 있는 안정감', '아름다움과 예술에 대한 뛰어난 감각', '현실적이고 실용적인 판단력'],
    weakness: ['변화에 대한 저항감', '고집스럽고 타협이 어려움', '물질주의적 경향', '질투심과 소유욕'],
    love: '황소자리는 천천히 확신이 생길 때까지 기다립니다. 한번 사랑에 빠지면 깊고 헌신적인 파트너가 됩니다. 안정된 일상과 신체적 친밀함을 중요시하며, 상대에게 물질적 풍요와 감각적 즐거움을 선물하는 것을 좋아합니다.',
    career: '금융가, 요리사, 원예사, 음악가, 건축가, 부동산 전문가처럼 인내와 실용적 감각이 필요한 분야.',
  },
  {
    name: '쌍둥이자리 (Gemini)', dates: '5/21~6/20', emoji: '♊', element: '공기(Air)', planet: '수성(Mercury)',
    core: '쌍둥이자리는 수성의 지배를 받아 소통, 지식, 다양성을 추구합니다. "이중성"이 상징이지만, 이는 단순한 변덕이 아니라 세상을 다양한 관점에서 바라보는 능력을 의미합니다.',
    strength: ['뛰어난 소통 능력과 언변', '빠른 학습력과 다재다능함', '유머 감각과 재치', '새로운 아이디어에 대한 개방성'],
    weakness: ['일관성 부족과 변덕스러움', '깊이보다 넓이 추구', '결정 장애', '표면적인 관계에 머무는 경향'],
    love: '쌍둥이자리는 지적 자극을 주는 파트너를 원합니다. 대화가 통하는 관계에서 진정한 친밀감을 느끼며, 함께 새로운 것을 탐험하고 배우는 커플 활동을 즐깁니다. 단조로운 루틴보다 다양성과 자유로움이 있는 관계를 선호합니다.',
    career: '저널리스트, 작가, 교사, 홍보 전문가, 세일즈맨, 방송인처럼 소통과 아이디어가 핵심인 직업.',
  },
  {
    name: '게자리 (Cancer)', dates: '6/21~7/22', emoji: '♋', element: '물(Water)', planet: '달(Moon)',
    core: '게자리는 달의 지배를 받아 12별자리 중 가장 감성적이고 직관적입니다. 가족과 집에 대한 깊은 애착, 강한 모성·부성 본능이 특징입니다. 겉은 단단하지만 내면은 섬세합니다.',
    strength: ['깊은 공감 능력과 배려심', '강한 직관력', '가족과 사랑하는 사람에 대한 헌신', '창의적인 상상력'],
    weakness: ['과도한 감정 기복', '과거에 집착하는 경향', '지나친 방어적 태도', '자기 연민에 빠지기 쉬움'],
    love: '게자리는 깊은 감정적 연결을 추구합니다. 파트너를 가족처럼 돌보며, 안전하고 따뜻한 둥지를 만드는 것을 행복으로 여깁니다. 상처를 받으면 껍질 속으로 들어가는 경향이 있으므로, 파트너의 부드러운 접근이 중요합니다.',
    career: '간호사, 사회복지사, 요리사, 심리 상담사, 교사, 부동산 중개인처럼 돌봄과 가정적 환경이 있는 직업.',
  },
  {
    name: '사자자리 (Leo)', dates: '7/23~8/22', emoji: '♌', element: '불(Fire)', planet: '태양(Sun)',
    core: '태양이 지배하는 사자자리는 자신감, 카리스마, 리더십의 상징입니다. 무대 중앙에 서는 것을 즐기며, 주변 사람들에게 따뜻함과 영감을 전합니다. 왕과 같은 품위와 관대함을 갖추고 있습니다.',
    strength: ['강한 자신감과 카리스마', '관대하고 따뜻한 마음', '창의적인 표현력', '충성스럽고 보호적인 성향'],
    weakness: ['과도한 자아와 자존심', '칭찬에 대한 갈망', '고집스러움', '드라마틱한 반응'],
    love: '사자자리는 웅장한 로맨스를 원합니다. 상대를 왕족처럼 대하고, 그만큼의 존경과 애정을 기대합니다. 공개적인 애정 표현과 특별한 이벤트를 즐기며, 파트너의 충성심과 진심 어린 칭찬이 관계를 깊게 합니다.',
    career: '배우, CEO, 정치인, 예술 감독, 교사, 코치처럼 무대와 리더십이 있는 직업.',
  },
  {
    name: '처녀자리 (Virgo)', dates: '8/23~9/22', emoji: '♍', element: '땅(Earth)', planet: '수성(Mercury)',
    core: '수성의 지배를 받는 처녀자리는 분석력, 실용성, 완벽 추구가 핵심입니다. 세부 사항에 주의를 기울이는 능력과 문제 해결 능력이 뛰어납니다. 서비스 정신이 강하며 다른 사람을 돕는 것에서 보람을 찾습니다.',
    strength: ['뛰어난 분석력과 세심함', '근면함과 높은 업무 능력', '실용적이고 믿을 수 있는 성격', '건강과 위생에 대한 관심'],
    weakness: ['지나친 완벽주의', '자기 비판적 경향', '과도한 걱정과 불안', '유연성 부족'],
    love: '처녀자리는 행동으로 사랑을 표현합니다. 파트너를 위해 실질적으로 도움이 되는 일을 하며 사랑을 전합니다. 말보다 실천을 중시하며, 장기적이고 안정적인 관계를 선호합니다.',
    career: '의사, 영양사, 편집자, 회계사, 연구원, 프로그래머처럼 정확성과 분석이 필요한 직업.',
  },
  {
    name: '천칭자리 (Libra)', dates: '9/23~10/22', emoji: '♎', element: '공기(Air)', planet: '금성(Venus)',
    core: '금성의 지배를 받는 천칭자리는 균형, 조화, 아름다움, 공정함을 추구합니다. 인간관계에서 평화를 유지하는 능력이 탁월하며, 아름다운 것에 대한 높은 감수성을 가지고 있습니다.',
    strength: ['뛰어난 외교 능력과 협력', '공정함과 균형 감각', '예술적 감각과 우아함', '상대방의 관점을 이해하는 능력'],
    weakness: ['우유부단함과 결정 장애', '갈등 회피 경향', '타인의 의견에 과도하게 영향 받음', '표면적 조화를 위한 자신의 감정 억압'],
    love: '천칭자리는 파트너십 그 자체를 사랑합니다. 두 사람이 함께 만들어가는 균형과 조화를 중시하며, 로맨틱하고 우아한 방식으로 사랑을 표현합니다. 갈등보다 대화와 타협으로 관계를 풀어나갑니다.',
    career: '변호사, 판사, 외교관, 인테리어 디자이너, 중재자, 예술가처럼 균형과 미적 감각이 필요한 직업.',
  },
  {
    name: '전갈자리 (Scorpio)', dates: '10/23~11/21', emoji: '♏', element: '물(Water)', planet: '명왕성·화성',
    core: '명왕성과 화성의 이중 지배를 받는 전갈자리는 변환, 깊이, 강렬함의 상징입니다. 표면 아래의 진실을 꿰뚫어 보는 통찰력과, 한번 결심하면 절대 포기하지 않는 의지력이 특징입니다.',
    strength: ['강렬한 집중력과 의지력', '깊은 통찰력과 직관', '변화와 재생의 힘', '충성심과 보호 본능'],
    weakness: ['질투심과 소유욕', '복수심과 원한을 품는 경향', '지나친 비밀주의', '극단적인 성향'],
    love: '전갈자리의 사랑은 전부 아니면 전무입니다. 완전한 신뢰와 영혼의 합일을 원하며, 피상적인 관계에는 관심이 없습니다. 파트너에 대한 충성심은 절대적이지만, 배신은 결코 용서하지 않습니다.',
    career: '심리 상담사, 형사, 연구원, 의사, 금융 분석가, 작가처럼 깊이와 탐구가 필요한 직업.',
  },
  {
    name: '사수자리 (Sagittarius)', dates: '11/22~12/21', emoji: '♐', element: '불(Fire)', planet: '목성(Jupiter)',
    core: '목성의 지배를 받는 사수자리는 자유, 탐험, 지혜, 낙관주의의 상징입니다. 끊임없이 새로운 지평을 탐색하며 철학적 질문을 즐깁니다. 유머 감각이 넘치고 솔직합니다.',
    strength: ['무한한 낙관주의와 유머', '지적 호기심과 철학적 사고', '자유롭고 모험적인 정신', '솔직하고 직접적인 소통'],
    weakness: ['무책임하고 자유분방함', '지나치게 솔직해 상처를 줌', '한 곳에 정착하지 못함', '과장하는 경향'],
    love: '사수자리는 파트너에게도 자유를 원하고, 자신도 자유를 필요로 합니다. 함께 세상을 탐험하고 새로운 경험을 공유하는 관계를 이상적으로 여기며, 정신적·철학적으로 통하는 파트너에게 깊이 끌립니다.',
    career: '여행 작가, 철학자, 교수, 판사, 선교사, 코미디언처럼 자유와 지식 탐구가 있는 직업.',
  },
  {
    name: '염소자리 (Capricorn)', dates: '12/22~1/19', emoji: '♑', element: '땅(Earth)', planet: '토성(Saturn)',
    core: '토성의 지배를 받는 염소자리는 야망, 규율, 인내, 책임감의 상징입니다. 목표를 향해 묵묵히 오르는 산염소처럼, 장기적인 관점으로 성공을 향해 나아갑니다. 사회적 지위와 명예를 중요시합니다.',
    strength: ['강한 야망과 목표 지향성', '탁월한 자기 규율과 인내', '실용적이고 책임감 강함', '장기적 계획 수립 능력'],
    weakness: ['지나치게 일에 집착', '감정 표현이 어색함', '비관적이고 두려움이 많음', '남을 판단하는 경향'],
    love: '염소자리는 관계도 장기 투자처럼 접근합니다. 신중하게 파트너를 선택하며, 한번 결정하면 흔들리지 않습니다. 물질적 안정을 제공하고 파트너를 보호하는 역할을 하지만, 감정 표현이 서툴러 오해를 사기도 합니다.',
    career: 'CEO, 건축가, 은행가, 정치인, 의사, 엔지니어처럼 전문성과 장기적 성취가 필요한 직업.',
  },
  {
    name: '물병자리 (Aquarius)', dates: '1/20~2/18', emoji: '♒', element: '공기(Air)', planet: '천왕성·토성',
    core: '천왕성의 지배를 받는 물병자리는 혁신, 인도주의, 독립성의 상징입니다. 시대를 앞서가는 독창적인 사고와 인류 전체를 위한 비전을 가지고 있습니다. 집단보다 개인의 독립성을 소중히 여깁니다.',
    strength: ['독창적이고 혁신적인 사고', '강한 인도주의적 가치관', '지적 독립성', '미래 지향적 비전'],
    weakness: ['감정적 거리를 두는 경향', '고집스럽고 반항적', '현실과 동떨어진 이상주의', '친밀감을 어려워함'],
    love: '물병자리는 먼저 깊은 우정을 원합니다. 지적으로 통하는 파트너, 자신의 독립성을 존중해주는 파트너를 원합니다. 관계에서도 개인의 자유를 지키려 하며, 전통적인 로맨스 방식보다 독특하고 새로운 방식을 선호합니다.',
    career: '과학자, 사회운동가, 발명가, IT 전문가, NGO 활동가, 천문학자처럼 혁신과 인류애가 있는 직업.',
  },
  {
    name: '물고기자리 (Pisces)', dates: '2/19~3/20', emoji: '♓', element: '물(Water)', planet: '해왕성·목성',
    core: '해왕성의 지배를 받는 물고기자리는 황도대의 마지막 별자리로, 모든 별자리의 특성이 녹아있다고 합니다. 강한 공감 능력, 예술적 감수성, 영적 지향성이 핵심입니다.',
    strength: ['무한한 공감 능력과 자비심', '뛰어난 예술적·창의적 감각', '영적 직관력', '적응력과 유연성'],
    weakness: ['현실 도피 경향', '경계 설정의 어려움', '지나친 감상적 태도', '결단력 부족'],
    love: '물고기자리의 사랑은 이상적이고 낭만적입니다. 영혼의 연인을 꿈꾸며, 파트너를 무조건적으로 돌보고 싶어합니다. 현실보다 이상화하는 경향이 있어 실망할 수 있지만, 사랑에 있어 가장 헌신적이고 시적인 별자리입니다.',
    career: '예술가, 음악가, 간호사, 신부/목사, 영화 감독, 치유사처럼 창의성과 봉사가 있는 직업.',
  },
];

export default function ZodiacPersonalityDeepDivePage() {
  return (
    <div style={bgStyle}>
      <article className="max-w-3xl mx-auto px-6 py-16 text-white/80">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: '12별자리 성격 완전 분석 — 강점·약점·연애·직업까지',
              description: '양자리부터 물고기자리까지 12별자리의 핵심 성격 특성을 깊이 있게 분석합니다.',
              datePublished: '2026-04-01',
              dateModified: '2026-04-01',
              author: {
                '@type': 'Organization',
                name: 'StarFate 편집팀',
                url: 'https://www.starfate.day/about',
              },
              publisher: {
                '@type': 'Organization',
                name: 'StarFate',
                url: 'https://www.starfate.day',
              },
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': 'https://www.starfate.day/blog/zodiac-personality-deep-dive',
              },
            }),
          }}
        />

        <Link href="/blog" className="text-purple-400 hover:text-purple-300 text-sm mb-8 inline-block">
          ← 블로그 목록으로
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className="px-2 py-0.5 rounded-full text-xs font-medium" style={{ background: 'rgba(124,58,237,0.3)', color: 'rgba(196,181,253,1)' }}>
              별자리 심층 분석
            </span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4 leading-tight">
            12별자리 성격 완전 분석 — 강점·약점·연애·직업까지
          </h1>
          <p className="text-white/50 text-base leading-relaxed">
            단순한 운세 요약을 넘어, 각 별자리의 심층 심리와 행동 패턴을 분석합니다. 나 자신과 주변 사람을 더 깊이 이해하는 열쇠가 될 것입니다.
          </p>
        </header>

        <AuthorBio date="2026년 4월 1일" readTime="20분" category="별자리 심층 분석" />

        <div className="mb-8 p-5 rounded-2xl text-sm" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <p className="text-white/60 mb-2 font-semibold">📌 이 글의 활용 방법</p>
          <p className="text-white/50">
            각 별자리 분석은 심리 점성술(Psychological Astrology) 전통에 기반합니다. 강점은 의식적으로 개발하고, 약점은 성장 기회로 바라보세요. 타인의 별자리를 읽을 때는 단정 짓기보다 이해의 출발점으로 활용하세요.
          </p>
        </div>

        <div className="space-y-10 text-sm leading-relaxed">
          {signs.map((sign) => (
            <section key={sign.name} className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{sign.emoji}</span>
                <div>
                  <h2 className="text-xl font-bold text-white">{sign.name}</h2>
                  <div className="flex gap-3 text-xs text-white/40 mt-1">
                    <span>📅 {sign.dates}</span>
                    <span>🌊 {sign.element}</span>
                    <span>🪐 {sign.planet}</span>
                  </div>
                </div>
              </div>

              <p className="text-white/65 mb-5">{sign.core}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                <div className="rounded-xl p-4" style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.15)' }}>
                  <h3 className="text-green-400 font-semibold mb-2 text-xs uppercase tracking-wider">✅ 강점</h3>
                  <ul className="space-y-1 text-white/60 text-xs">
                    {sign.strength.map((s, i) => <li key={i}>· {s}</li>)}
                  </ul>
                </div>
                <div className="rounded-xl p-4" style={{ background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.15)' }}>
                  <h3 className="text-red-400 font-semibold mb-2 text-xs uppercase tracking-wider">⚠️ 성장 포인트</h3>
                  <ul className="space-y-1 text-white/60 text-xs">
                    {sign.weakness.map((w, i) => <li key={i}>· {w}</li>)}
                  </ul>
                </div>
              </div>

              <div className="space-y-3">
                <div className="rounded-xl p-4" style={{ background: 'rgba(236,72,153,0.06)', border: '1px solid rgba(236,72,153,0.15)' }}>
                  <h3 className="text-pink-400 font-semibold mb-2 text-xs uppercase tracking-wider">💕 연애 스타일</h3>
                  <p className="text-white/60 text-xs">{sign.love}</p>
                </div>
                <div className="rounded-xl p-4" style={{ background: 'rgba(124,58,237,0.06)', border: '1px solid rgba(124,58,237,0.15)' }}>
                  <h3 className="text-purple-400 font-semibold mb-2 text-xs uppercase tracking-wider">💼 적합 직업</h3>
                  <p className="text-white/60 text-xs">{sign.career}</p>
                </div>
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 p-5 rounded-2xl text-sm" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <h3 className="text-white font-semibold mb-3">🔍 별자리 분석을 더 깊이 이해하려면</h3>
          <p className="text-white/50 mb-3">
            태양 별자리는 성격의 일부일 뿐입니다. 달 별자리(감정 패턴)와 상승 별자리(외면적 이미지)를 함께 분석하면 훨씬 입체적인 자기 이해가 가능합니다. 같은 태양 별자리라도 달 별자리와 상승 별자리에 따라 성격이 크게 달라집니다.
          </p>
          <p className="text-white/40 text-xs">
            ※ 본 분석은 수천 년의 점성술 전통과 심리 점성술 연구를 바탕으로 작성된 교육적·오락적 콘텐츠입니다. 개인마다 다를 수 있으며 실제 미래를 예측하지 않습니다.
          </p>
        </div>

        <div className="mt-8 p-6 rounded-2xl text-center" style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.3)' }}>
          <p className="text-white/60 mb-4 text-sm">나의 오늘 운세가 궁금하다면?</p>
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
              <div className="text-white/70 font-medium">💞 12별자리 궁합 완벽 분석</div>
              <div className="text-white/30 text-xs mt-1">나와 가장 잘 맞는 별자리는?</div>
            </Link>
            <Link href="/blog/zodiac-career-guide" className="p-4 rounded-xl text-sm hover:border-purple-400 transition-colors" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="text-white/70 font-medium">💼 별자리별 최적 직업 가이드</div>
              <div className="text-white/30 text-xs mt-1">나에게 맞는 커리어는?</div>
            </Link>
          </div>
        </nav>
      </article>
    </div>
  );
}
