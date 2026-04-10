import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '별자리별 적성과 직업 가이드 — 내 운명의 커리어는? | StarFate',
  description: '12개 별자리의 타고난 재능과 강점으로 알아보는 최적의 직업과 커리어 방향. 별자리별 직업 운과 성공하는 업무 스타일을 분석합니다.',
  alternates: { canonical: '/blog/zodiac-career-guide' },
  openGraph: {
    title: '별자리별 적성과 직업 가이드 — 내 운명의 커리어는?',
    description: '12개 별자리의 타고난 재능과 강점으로 알아보는 최적의 직업과 커리어 방향.',
    type: 'article',
  },
};

const bgStyle = {
  background: 'linear-gradient(160deg, #050520 0%, #0a0a2e 30%, #130a2e 60%, #1a0a3e 100%)',
  minHeight: '100vh',
};

export default function ZodiacCareerGuidePage() {
  return (
    <div style={bgStyle}>
      <article className="max-w-3xl mx-auto px-6 py-16 text-white/80">
        <Link href="/blog" className="text-purple-400 hover:text-purple-300 text-sm mb-8 inline-block">
          ← 블로그 목록으로
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className="px-2 py-0.5 rounded-full text-xs font-medium" style={{ background: 'rgba(124,58,237,0.3)', color: 'rgba(196,181,253,1)' }}>
              직업·커리어
            </span>
            <span className="text-white/30 text-xs">2025년 3월 18일 · 10분 읽기</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4 leading-tight">
            별자리별 적성과 직업 가이드 — 내 운명의 커리어는?
          </h1>
          <p className="text-white/50 text-base leading-relaxed">
            타고난 재능을 살리는 것이 가장 빠른 성공의 길입니다. 12개 별자리가 가진 고유한 강점과 에너지를 직업 선택에 어떻게 활용할 수 있는지 깊이 탐구합니다.
          </p>
        </header>

        <div className="space-y-8 text-sm leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-4">별자리와 직업 적성의 연관성</h2>
            <p className="mb-3">
              "어떤 직업이 나에게 맞을까?"라는 질문은 인류가 오랫동안 해온 근본적인 고민입니다. 현대 직업 상담에서는 MBTI, 홀랜드 직업 유형(RIASEC), 강점 인터뷰 등 다양한 도구를 사용하지만, 점성술 역시 수천 년 전부터 이 질문에 답해온 오래된 지혜의 체계입니다.
            </p>
            <p className="mb-3">
              점성술의 관점에서 직업 적성은 주로 태양 별자리(삶의 목적과 자아 표현), 달 별자리(감정적으로 충족감을 느끼는 환경), 상승 별자리(타인에게 보이는 방식과 접근 스타일), 그리고 10번째 하우스(경력과 사회적 지위를 담당하는 영역)가 결합되어 나타납니다.
            </p>
            <p className="mb-3">
              이 글에서는 가장 기본적인 지표인 태양 별자리와 원소 별자리를 중심으로 직업 적성을 분석합니다. 같은 별자리라도 달 별자리와 상승 별자리에 따라 세부 방향이 달라질 수 있음을 참고하세요.
            </p>
            <p>
              중요한 점은 별자리가 직업을 결정하는 것이 아니라, 자신의 자연스러운 강점과 에너지 방향을 이해하는 데 도움을 준다는 것입니다. 어떤 별자리라도 노력과 의지로 다양한 분야에서 성공할 수 있습니다. 다만 자신의 본질적 에너지와 잘 맞는 환경에서 일할 때 번아웃 없이 장기적으로 빛날 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">불(火) 원소 별자리의 직업 — 양자리·사자자리·사수자리</h2>
            <p className="mb-3">
              불 원소 별자리는 열정, 행동력, 리더십, 창의성이 핵심 에너지입니다. 이들은 정해진 틀 안에서 반복적인 업무를 하는 것보다 새로운 도전을 개척하고 사람들 앞에서 자신의 능력을 발휘하는 환경에서 가장 빛납니다.
            </p>

            <div className="space-y-4">
              <div className="rounded-2xl p-5" style={{ background: 'rgba(255,100,50,0.08)', border: '1px solid rgba(255,100,50,0.2)' }}>
                <h3 className="text-red-300 font-semibold mb-2">♈ 양자리 (3.21~4.19) — 선구자형 리더</h3>
                <p className="mb-2">12별자리 중 가장 먼저 행동하는 양자리는 시작하는 것, 아무도 가지 않은 길을 개척하는 것에서 에너지를 얻습니다. 스타트업 창업가, 세일즈 리더, 군인·경찰, 스포츠 코치, 응급의료 분야에서 탁월한 능력을 발휘합니다. 경쟁이 있는 환경에서 오히려 동기 부여가 됩니다.</p>
                <p className="text-white/40 text-xs">추천 직업: 창업가, 세일즈 매니저, 스포츠 선수·코치, 군인·경찰관, 응급실 의사</p>
              </div>

              <div className="rounded-2xl p-5" style={{ background: 'rgba(255,150,50,0.08)', border: '1px solid rgba(255,150,50,0.2)' }}>
                <h3 className="text-yellow-300 font-semibold mb-2">♌ 사자자리 (7.23~8.22) — 무대형 카리스마</h3>
                <p className="mb-2">사람들의 주목을 받고 인정받는 것을 원동력으로 삼는 사자자리는 퍼포먼스, 리더십, 창의적 표현이 요구되는 분야에서 두각을 나타냅니다. 배우·가수·방송인, 기업 CEO, 교사·강연가, 이벤트 플래너, 광고·마케팅 디렉터로서 타고난 능력을 발휘합니다. 특히 팀을 이끌고 영감을 주는 리더 역할에서 탁월합니다.</p>
                <p className="text-white/40 text-xs">추천 직업: 연예인·배우, 교육자, CEO·임원, 이벤트·공연 기획자, 마케팅 디렉터</p>
              </div>

              <div className="rounded-2xl p-5" style={{ background: 'rgba(200,100,50,0.08)', border: '1px solid rgba(200,100,50,0.2)' }}>
                <h3 className="text-orange-300 font-semibold mb-2">♐ 사수자리 (11.22~12.21) — 철학형 탐험가</h3>
                <p className="mb-2">지식과 자유, 여행과 철학을 사랑하는 사수자리는 세계 무대에서 활동하고 지속적으로 배울 수 있는 환경에서 번성합니다. 여행 작가·유튜버, 대학 교수, 종교·철학 연구자, 국제 무역·외교관, 변호사, 출판인으로서 자신의 넓은 세계관을 실현합니다. 반복과 규제가 많은 환경에서는 답답함을 느낍니다.</p>
                <p className="text-white/40 text-xs">추천 직업: 여행 작가·콘텐츠 크리에이터, 교수, 변호사, 외교관, 출판·미디어 종사자</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">땅(土) 원소 별자리의 직업 — 황소자리·처녀자리·염소자리</h2>
            <p className="mb-3">
              땅 원소 별자리는 현실적, 실용적, 안정 지향적입니다. 구체적인 결과물을 만들고, 체계를 세우고, 물질적 세계와 깊이 연결되는 일에서 가장 큰 보람을 느낍니다. 장기적 안목과 인내심이 이들의 가장 큰 자산입니다.
            </p>

            <div className="space-y-4">
              <div className="rounded-2xl p-5" style={{ background: 'rgba(50,200,100,0.08)', border: '1px solid rgba(50,200,100,0.2)' }}>
                <h3 className="text-green-300 font-semibold mb-2">♉ 황소자리 (4.20~5.20) — 장인형 실현가</h3>
                <p className="mb-2">감각적이고 아름다운 것에 타고난 안목을 가진 황소자리는 오감을 활용하는 직업에서 천재성을 발휘합니다. 요리사·파티시에, 인테리어 디자이너, 뮤지션, 금융 투자자, 부동산 전문가, 원예사·조경사가 대표적입니다. 충성심과 지속성이 뛰어나 한 분야에서 오랫동안 깊이 파고들수록 진가를 발휘합니다.</p>
                <p className="text-white/40 text-xs">추천 직업: 요리사·제과제빵사, 뮤지션·음악가, 금융 애널리스트, 인테리어 디자이너, 부동산 전문가</p>
              </div>

              <div className="rounded-2xl p-5" style={{ background: 'rgba(100,200,100,0.08)', border: '1px solid rgba(100,200,100,0.2)' }}>
                <h3 className="text-emerald-300 font-semibold mb-2">♍ 처녀자리 (8.23~9.22) — 분석형 완성자</h3>
                <p className="mb-2">세밀한 분석 능력과 완벽주의적 성향을 가진 처녀자리는 정확성과 체계성이 요구되는 분야에서 두각을 나타냅니다. 의사·간호사, 데이터 분석가, 편집자·교열자, 영양사·트레이너, 회계사, 품질 관리 전문가로서 탁월한 성과를 냅니다. 남들이 놓친 오류를 발견하는 능력이 조직에서 없어서는 안 될 존재로 만들어줍니다.</p>
                <p className="text-white/40 text-xs">추천 직업: 의료·간호 종사자, 데이터 분석가, 편집자, 영양·피트니스 전문가, 회계사</p>
              </div>

              <div className="rounded-2xl p-5" style={{ background: 'rgba(150,200,50,0.08)', border: '1px solid rgba(150,200,50,0.2)' }}>
                <h3 className="text-lime-300 font-semibold mb-2">♑ 염소자리 (12.22~1.19) — 전략형 정복자</h3>
                <p className="mb-2">목표를 향해 꾸준히 오르는 산양처럼, 염소자리는 장기적인 계획과 인내심으로 정상에 오르는 것을 삶의 목표로 삼습니다. 기업 임원·정치인, 건축가, 역사학자, 은행가·투자자, 의사·변호사 등 사회적으로 권위와 전문성이 인정받는 직업에서 최고의 능력을 발휘합니다. 나이가 들수록 더 강해지는 유형입니다.</p>
                <p className="text-white/40 text-xs">추천 직업: 기업 경영자·정치인, 건축가, 금융·투자 전문가, 법조인, 공공 행정 분야</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">공기(空) 원소 별자리의 직업 — 쌍둥이자리·천칭자리·물병자리</h2>
            <p className="mb-3">
              공기 원소 별자리는 지성, 소통, 사교성, 아이디어가 핵심 에너지입니다. 정보를 수집하고 연결하며 다양한 사람들과 소통하는 환경에서 최고의 능력을 발휘합니다. 고독한 반복 업무보다 변화와 자극이 있는 역동적인 환경이 맞습니다.
            </p>

            <div className="space-y-4">
              <div className="rounded-2xl p-5" style={{ background: 'rgba(100,150,255,0.08)', border: '1px solid rgba(100,150,255,0.2)' }}>
                <h3 className="text-blue-300 font-semibold mb-2">♊ 쌍둥이자리 (5.21~6.21) — 멀티형 커뮤니케이터</h3>
                <p className="mb-2">빠른 학습 능력과 뛰어난 언어 감각을 가진 쌍둥이자리는 정보를 다루고 전달하는 모든 분야에서 빛납니다. 기자·작가, 마케터·카피라이터, 통역사·번역가, 세일즈 전문가, 유튜버·팟캐스터, 교사·강사로서 타고난 재능을 발휘합니다. 단, 다양성이 없으면 금세 지루함을 느끼는 경향이 있습니다.</p>
                <p className="text-white/40 text-xs">추천 직업: 기자·작가, 마케터, 통역사, 콘텐츠 크리에이터, 교사·강연가</p>
              </div>

              <div className="rounded-2xl p-5" style={{ background: 'rgba(200,150,255,0.08)', border: '1px solid rgba(200,150,255,0.2)' }}>
                <h3 className="text-purple-300 font-semibold mb-2">♎ 천칭자리 (9.23~10.23) — 균형형 조화인</h3>
                <p className="mb-2">공정함과 아름다움에 대한 타고난 감각을 가진 천칭자리는 사람들 사이의 갈등을 중재하고 조화를 만드는 일에서 진가를 발휘합니다. 변호사·판사, 외교관·조정관, 패션·예술 디자이너, 인사·채용 담당자, 상담사, 이벤트 플래너가 대표적입니다. 공정하지 않거나 미적으로 불쾌한 환경에서는 극도의 스트레스를 받습니다.</p>
                <p className="text-white/40 text-xs">추천 직업: 변호사·판사, 외교관, 패션·인테리어 디자이너, 인사 담당자, 상담사</p>
              </div>

              <div className="rounded-2xl p-5" style={{ background: 'rgba(100,200,255,0.08)', border: '1px solid rgba(100,200,255,0.2)' }}>
                <h3 className="text-cyan-300 font-semibold mb-2">♒ 물병자리 (1.20~2.18) — 혁신형 비전가</h3>
                <p className="mb-2">미래를 내다보는 통찰력과 인류에 대한 관심을 가진 물병자리는 세상을 바꾸는 일에서 가장 큰 동기를 얻습니다. 기술 기업가·엔지니어, 사회 운동가, 연구자·과학자, 비영리 단체 대표, UX 디자이너, 항공우주 분야 종사자가 두드러집니다. 독립성과 창의성이 보장되지 않는 硬직한 조직에서는 숨이 막힙니다.</p>
                <p className="text-white/40 text-xs">추천 직업: IT 개발자·엔지니어, 사회적 기업가, 연구원·과학자, 혁신 분야 스타트업, NGO 리더</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">물(水) 원소 별자리의 직업 — 게자리·전갈자리·물고기자리</h2>
            <p className="mb-3">
              물 원소 별자리는 감성, 직관, 공감 능력이 강점입니다. 타인의 내면을 깊이 이해하고 치유하며, 예술적 창의성으로 감동을 주는 직업에서 비할 데 없는 능력을 발휘합니다.
            </p>

            <div className="space-y-4">
              <div className="rounded-2xl p-5" style={{ background: 'rgba(50,100,200,0.08)', border: '1px solid rgba(50,100,200,0.2)' }}>
                <h3 className="text-blue-400 font-semibold mb-2">♋ 게자리 (6.22~7.22) — 돌봄형 양육자</h3>
                <p className="mb-2">타인을 보살피고 안전한 공간을 만드는 것에서 깊은 보람을 느끼는 게자리는 돌봄, 교육, 식품, 역사 분야에서 두각을 나타냅니다. 보육·교육 전문가, 요리사·영양사, 간호사·사회복지사, 심리 상담사, 역사학자, 부동산 중개인(집=안식처)이 대표적입니다. 경쟁과 냉정함이 강한 환경에서는 소진되기 쉽습니다.</p>
                <p className="text-white/40 text-xs">추천 직업: 교사·보육사, 상담사·사회복지사, 간호사, 요리사, 심리학자</p>
              </div>

              <div className="rounded-2xl p-5" style={{ background: 'rgba(100,50,150,0.08)', border: '1px solid rgba(100,50,150,0.2)' }}>
                <h3 className="text-violet-300 font-semibold mb-2">♏ 전갈자리 (10.24~11.21) — 탐구형 변혁가</h3>
                <p className="mb-2">겉으로 드러나지 않는 진실을 파고드는 집요한 탐구력을 가진 전갈자리는 심층 연구, 위기 관리, 변환과 재생을 다루는 분야에서 타의 추종을 불허합니다. 심리치료사·정신과 의사, 형사·수사관, 외과 의사, 보안 전문가, 세무사·감사인, 연구원, 신비학 분야 종사자가 대표적입니다.</p>
                <p className="text-white/40 text-xs">추천 직업: 심리치료사, 형사·수사관, 외과 의사, 보안·사이버 전문가, 연구원</p>
              </div>

              <div className="rounded-2xl p-5" style={{ background: 'rgba(100,150,200,0.08)', border: '1px solid rgba(100,150,200,0.2)' }}>
                <h3 className="text-sky-300 font-semibold mb-2">♓ 물고기자리 (2.19~3.20) — 예술형 치유자</h3>
                <p className="mb-2">경계가 없는 공감 능력과 풍부한 상상력을 가진 물고기자리는 예술, 치유, 영적 분야에서 천부적 재능을 발휘합니다. 예술가·음악가·작가, 영화 감독·배우, 심리치료사·명상 지도사, 간호사·물리치료사, 종교 지도자, 해양 생물학자가 대표적입니다. 경직된 규칙과 차가운 경쟁 환경에서는 창의성이 억눌립니다.</p>
                <p className="text-white/40 text-xs">추천 직업: 예술가·음악가·작가, 치료사, 영화 감독, 명상·요가 지도사, 사진가</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">별자리별 업무 스타일과 최적 환경</h2>
            <p className="mb-3">
              직업의 종류만큼 중요한 것이 어떤 환경과 방식으로 일하느냐입니다. 같은 마케터라도 양자리는 공격적인 신시장 개척을 즐기고, 처녀자리는 데이터 분석 기반의 정밀한 타겟팅을 선호하며, 천칭자리는 브랜드 이미지와 조화를 중시합니다.
            </p>
            <p className="mb-3">
              자신의 별자리에 맞는 업무 환경을 이해하면 취업 면접에서도 자신에게 맞는 조직 문화를 파악하는 데 도움이 됩니다. 예를 들어 자유로운 업무 환경을 원하는 사수자리나 물병자리는 리모트 워크나 자율 출퇴근이 가능한 스타트업이 맞고, 안정과 체계를 선호하는 황소자리나 염소자리는 체계적인 대기업이나 공공 기관 환경이 잘 맞을 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">직업 운을 높이는 방법</h2>
            <p className="mb-3">
              점성술에서 직업 운을 담당하는 주요 행성은 목성(확장과 행운), 토성(노력과 규율), 그리고 10번째 하우스의 지배 행성입니다. 목성이 자신의 태양 별자리나 10번째 하우스를 통과하는 해에는 경력 성장의 기회가 많이 찾아오는 경향이 있습니다.
            </p>
            <p className="mb-3">
              보다 실용적인 조언으로는 첫째, 자신의 별자리가 가진 핵심 강점을 의식적으로 개발하고, 이것이 가장 필요한 직업 환경을 적극적으로 찾는 것입니다. 둘째, 자신의 별자리의 약점(예: 양자리의 인내력 부족, 천칭자리의 결정 장애)을 인식하고 보완하는 노력도 중요합니다.
            </p>
            <p>
              마지막으로, 별자리는 타고난 경향성과 잠재력을 보여주지만, 실제 커리어 성공은 지속적인 학습, 성실한 노력, 그리고 올바른 관계 형성을 통해 만들어집니다. 별이 가리키는 방향을 참고하되, 결국 그 길을 걷는 것은 당신 자신임을 잊지 마세요.
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
