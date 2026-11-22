import type { BlogArticleContent } from './types';

export const zodiacCareerGuide: BlogArticleContent = {
  related: ['what-is-astrology', 'zodiac-compatibility-guide'],
  ko: {
    intro:
      '타고난 재능을 살리는 것이 가장 빠른 성공의 길입니다. 12개 별자리가 가진 고유한 강점과 에너지를 직업 선택에 어떻게 활용할 수 있는지 깊이 탐구합니다.',
    cta: '나의 별자리 운세가 궁금하다면?',
    sections: [
      {
        heading: '별자리와 직업 적성의 연관성',
        blocks: [
          { t: 'p', text: '"어떤 직업이 나에게 맞을까?"라는 질문은 인류가 오랫동안 해온 근본적인 고민입니다. 현대 직업 상담에서는 MBTI, 홀랜드 직업 유형(RIASEC), 강점 인터뷰 등 다양한 도구를 사용하지만, 점성술 역시 수천 년 전부터 이 질문에 답해온 오래된 지혜의 체계입니다.' },
          { t: 'p', text: '점성술의 관점에서 직업 적성은 주로 태양 별자리(삶의 목적과 자아 표현), 달 별자리(감정적으로 충족감을 느끼는 환경), 상승 별자리(타인에게 보이는 방식과 접근 스타일), 그리고 10번째 하우스(경력과 사회적 지위를 담당하는 영역)가 결합되어 나타납니다.' },
          { t: 'p', text: '이 글에서는 가장 기본적인 지표인 태양 별자리와 원소 별자리를 중심으로 직업 적성을 분석합니다. 같은 별자리라도 달 별자리와 상승 별자리에 따라 세부 방향이 달라질 수 있음을 참고하세요.' },
          { t: 'p', text: '중요한 점은 별자리가 직업을 결정하는 것이 아니라, 자신의 자연스러운 강점과 에너지 방향을 이해하는 데 도움을 준다는 것입니다. 어떤 별자리라도 노력과 의지로 다양한 분야에서 성공할 수 있습니다. 다만 자신의 본질적 에너지와 잘 맞는 환경에서 일할 때 번아웃 없이 장기적으로 빛날 수 있습니다.' },
        ],
      },
      {
        heading: '불(火) 원소 별자리의 직업 — 양자리·사자자리·사수자리',
        blocks: [
          { t: 'p', text: '불 원소 별자리는 열정, 행동력, 리더십, 창의성이 핵심 에너지입니다. 이들은 정해진 틀 안에서 반복적인 업무를 하는 것보다 새로운 도전을 개척하고 사람들 앞에서 자신의 능력을 발휘하는 환경에서 가장 빛납니다.' },
          {
            t: 'cards',
            items: [
              { title: '♈ 양자리 (3.21~4.19) — 선구자형 리더', tone: 'caution', text: '12별자리 중 가장 먼저 행동하는 양자리는 시작하는 것, 아무도 가지 않은 길을 개척하는 것에서 에너지를 얻습니다. 스타트업 창업가, 세일즈 리더, 군인·경찰, 스포츠 코치, 응급의료 분야에서 탁월한 능력을 발휘합니다. 경쟁이 있는 환경에서 오히려 동기 부여가 됩니다.\n추천 직업: 창업가, 세일즈 매니저, 스포츠 선수·코치, 군인·경찰관, 응급실 의사' },
              { title: '♌ 사자자리 (7.23~8.22) — 무대형 카리스마', tone: 'warm', text: '사람들의 주목을 받고 인정받는 것을 원동력으로 삼는 사자자리는 퍼포먼스, 리더십, 창의적 표현이 요구되는 분야에서 두각을 나타냅니다. 배우·가수·방송인, 기업 CEO, 교사·강연가, 이벤트 플래너, 광고·마케팅 디렉터로서 타고난 능력을 발휘합니다. 특히 팀을 이끌고 영감을 주는 리더 역할에서 탁월합니다.\n추천 직업: 연예인·배우, 교육자, CEO·임원, 이벤트·공연 기획자, 마케팅 디렉터' },
              { title: '♐ 사수자리 (11.22~12.21) — 철학형 탐험가', text: '지식과 자유, 여행과 철학을 사랑하는 사수자리는 세계 무대에서 활동하고 지속적으로 배울 수 있는 환경에서 번성합니다. 여행 작가·유튜버, 대학 교수, 종교·철학 연구자, 국제 무역·외교관, 변호사, 출판인으로서 자신의 넓은 세계관을 실현합니다. 반복과 규제가 많은 환경에서는 답답함을 느낍니다.\n추천 직업: 여행 작가·콘텐츠 크리에이터, 교수, 변호사, 외교관, 출판·미디어 종사자' },
            ],
          },
        ],
      },
      {
        heading: '땅(土) 원소 별자리의 직업 — 황소자리·처녀자리·염소자리',
        blocks: [
          { t: 'p', text: '땅 원소 별자리는 현실적, 실용적, 안정 지향적입니다. 구체적인 결과물을 만들고, 체계를 세우고, 물질적 세계와 깊이 연결되는 일에서 가장 큰 보람을 느낍니다. 장기적 안목과 인내심이 이들의 가장 큰 자산입니다.' },
          {
            t: 'cards',
            items: [
              { title: '♉ 황소자리 (4.20~5.20) — 장인형 실현가', tone: 'positive', text: '감각적이고 아름다운 것에 타고난 안목을 가진 황소자리는 오감을 활용하는 직업에서 천재성을 발휘합니다. 요리사·파티시에, 인테리어 디자이너, 뮤지션, 금융 투자자, 부동산 전문가, 원예사·조경사가 대표적입니다. 충성심과 지속성이 뛰어나 한 분야에서 오랫동안 깊이 파고들수록 진가를 발휘합니다.\n추천 직업: 요리사·제과제빵사, 뮤지션·음악가, 금융 애널리스트, 인테리어 디자이너, 부동산 전문가' },
              { title: '♍ 처녀자리 (8.23~9.22) — 분석형 완성자', tone: 'positive', text: '세밀한 분석 능력과 완벽주의적 성향을 가진 처녀자리는 정확성과 체계성이 요구되는 분야에서 두각을 나타냅니다. 의사·간호사, 데이터 분석가, 편집자·교열자, 영양사·트레이너, 회계사, 품질 관리 전문가로서 탁월한 성과를 냅니다. 남들이 놓친 오류를 발견하는 능력이 조직에서 없어서는 안 될 존재로 만들어줍니다.\n추천 직업: 의료·간호 종사자, 데이터 분석가, 편집자, 영양·피트니스 전문가, 회계사' },
              { title: '♑ 염소자리 (12.22~1.19) — 전략형 정복자', text: '목표를 향해 꾸준히 오르는 산양처럼, 염소자리는 장기적인 계획과 인내심으로 정상에 오르는 것을 삶의 목표로 삼습니다. 기업 임원·정치인, 건축가, 역사학자, 은행가·투자자, 의사·변호사 등 사회적으로 권위와 전문성이 인정받는 직업에서 최고의 능력을 발휘합니다. 나이가 들수록 더 강해지는 유형입니다.\n추천 직업: 기업 경영자·정치인, 건축가, 금융·투자 전문가, 법조인, 공공 행정 분야' },
            ],
          },
        ],
      },
      {
        heading: '공기(空) 원소 별자리의 직업 — 쌍둥이자리·천칭자리·물병자리',
        blocks: [
          { t: 'p', text: '공기 원소 별자리는 지성, 소통, 사교성, 아이디어가 핵심 에너지입니다. 정보를 수집하고 연결하며 다양한 사람들과 소통하는 환경에서 최고의 능력을 발휘합니다. 고독한 반복 업무보다 변화와 자극이 있는 역동적인 환경이 맞습니다.' },
          {
            t: 'cards',
            items: [
              { title: '♊ 쌍둥이자리 (5.21~6.21) — 멀티형 커뮤니케이터', tone: 'cool', text: '빠른 학습 능력과 뛰어난 언어 감각을 가진 쌍둥이자리는 정보를 다루고 전달하는 모든 분야에서 빛납니다. 기자·작가, 마케터·카피라이터, 통역사·번역가, 세일즈 전문가, 유튜버·팟캐스터, 교사·강사로서 타고난 재능을 발휘합니다. 단, 다양성이 없으면 금세 지루함을 느끼는 경향이 있습니다.\n추천 직업: 기자·작가, 마케터, 통역사, 콘텐츠 크리에이터, 교사·강연가' },
              { title: '♎ 천칭자리 (9.23~10.23) — 균형형 조화인', text: '공정함과 아름다움에 대한 타고난 감각을 가진 천칭자리는 사람들 사이의 갈등을 중재하고 조화를 만드는 일에서 진가를 발휘합니다. 변호사·판사, 외교관·조정관, 패션·예술 디자이너, 인사·채용 담당자, 상담사, 이벤트 플래너가 대표적입니다. 공정하지 않거나 미적으로 불쾌한 환경에서는 극도의 스트레스를 받습니다.\n추천 직업: 변호사·판사, 외교관, 패션·인테리어 디자이너, 인사 담당자, 상담사' },
              { title: '♒ 물병자리 (1.20~2.18) — 혁신형 비전가', tone: 'cool', text: '미래를 내다보는 통찰력과 인류에 대한 관심을 가진 물병자리는 세상을 바꾸는 일에서 가장 큰 동기를 얻습니다. 기술 기업가·엔지니어, 사회 운동가, 연구자·과학자, 비영리 단체 대표, UX 디자이너, 항공우주 분야 종사자가 두드러집니다. 독립성과 창의성이 보장되지 않는 경직한 조직에서는 숨이 막힙니다.\n추천 직업: IT 개발자·엔지니어, 사회적 기업가, 연구원·과학자, 혁신 분야 스타트업, NGO 리더' },
            ],
          },
        ],
      },
      {
        heading: '물(水) 원소 별자리의 직업 — 게자리·전갈자리·물고기자리',
        blocks: [
          { t: 'p', text: '물 원소 별자리는 감성, 직관, 공감 능력이 강점입니다. 타인의 내면을 깊이 이해하고 치유하며, 예술적 창의성으로 감동을 주는 직업에서 비할 데 없는 능력을 발휘합니다.' },
          {
            t: 'cards',
            items: [
              { title: '♋ 게자리 (6.22~7.22) — 돌봄형 양육자', tone: 'cool', text: '타인을 보살피고 안전한 공간을 만드는 것에서 깊은 보람을 느끼는 게자리는 돌봄, 교육, 식품, 역사 분야에서 두각을 나타냅니다. 보육·교육 전문가, 요리사·영양사, 간호사·사회복지사, 심리 상담사, 역사학자, 부동산 중개인(집=안식처)이 대표적입니다. 경쟁과 냉정함이 강한 환경에서는 소진되기 쉽습니다.\n추천 직업: 교사·보육사, 상담사·사회복지사, 간호사, 요리사, 심리학자' },
              { title: '♏ 전갈자리 (10.24~11.21) — 탐구형 변혁가', text: '겉으로 드러나지 않는 진실을 파고드는 집요한 탐구력을 가진 전갈자리는 심층 연구, 위기 관리, 변환과 재생을 다루는 분야에서 타의 추종을 불허합니다. 심리치료사·정신과 의사, 형사·수사관, 외과 의사, 보안 전문가, 세무사·감사인, 연구원, 신비학 분야 종사자가 대표적입니다.\n추천 직업: 심리치료사, 형사·수사관, 외과 의사, 보안·사이버 전문가, 연구원' },
              { title: '♓ 물고기자리 (2.19~3.20) — 예술형 치유자', tone: 'cool', text: '경계가 없는 공감 능력과 풍부한 상상력을 가진 물고기자리는 예술, 치유, 영적 분야에서 천부적 재능을 발휘합니다. 예술가·음악가·작가, 영화 감독·배우, 심리치료사·명상 지도사, 간호사·물리치료사, 종교 지도자, 해양 생물학자가 대표적입니다. 경직된 규칙과 차가운 경쟁 환경에서는 창의성이 억눌립니다.\n추천 직업: 예술가·음악가·작가, 치료사, 영화 감독, 명상·요가 지도사, 사진가' },
            ],
          },
        ],
      },
      {
        heading: '별자리별 업무 스타일과 최적 환경',
        blocks: [
          { t: 'p', text: '직업의 종류만큼 중요한 것이 어떤 환경과 방식으로 일하느냐입니다. 같은 마케터라도 양자리는 공격적인 신시장 개척을 즐기고, 처녀자리는 데이터 분석 기반의 정밀한 타겟팅을 선호하며, 천칭자리는 브랜드 이미지와 조화를 중시합니다.' },
          { t: 'p', text: '자신의 별자리에 맞는 업무 환경을 이해하면 취업 면접에서도 자신에게 맞는 조직 문화를 파악하는 데 도움이 됩니다. 예를 들어 자유로운 업무 환경을 원하는 사수자리나 물병자리는 리모트 워크나 자율 출퇴근이 가능한 스타트업이 맞고, 안정과 체계를 선호하는 황소자리나 염소자리는 체계적인 대기업이나 공공 기관 환경이 잘 맞을 수 있습니다.' },
        ],
      },
      {
        heading: '직업 운을 높이는 방법',
        blocks: [
          { t: 'p', text: '점성술에서 직업 운을 담당하는 주요 행성은 목성(확장과 행운), 토성(노력과 규율), 그리고 10번째 하우스의 지배 행성입니다. 목성이 자신의 태양 별자리나 10번째 하우스를 통과하는 해에는 경력 성장의 기회가 많이 찾아오는 경향이 있습니다.' },
          { t: 'p', text: '보다 실용적인 조언으로는 첫째, 자신의 별자리가 가진 핵심 강점을 의식적으로 개발하고, 이것이 가장 필요한 직업 환경을 적극적으로 찾는 것입니다. 둘째, 자신의 별자리의 약점(예: 양자리의 인내력 부족, 천칭자리의 결정 장애)을 인식하고 보완하는 노력도 중요합니다.' },
          { t: 'p', text: '마지막으로, 별자리는 타고난 경향성과 잠재력을 보여주지만, 실제 커리어 성공은 지속적인 학습, 성실한 노력, 그리고 올바른 관계 형성을 통해 만들어집니다. 별이 가리키는 방향을 참고하되, 결국 그 길을 걷는 것은 당신 자신임을 잊지 마세요.' },
        ],
      },
    ],
  },
  en: {
    intro:
      'Playing to your natural strengths is the shortest road to success. Here is how the twelve signs can inform a career choice, and where each one works best.',
    cta: 'Curious about your own sign?',
    sections: [
      {
        heading: 'Signs and vocational aptitude',
        blocks: [
          { t: 'p', text: '"What work suits me?" is an old human question. Modern career counselling uses MBTI, Holland codes and strength interviews; astrology has been answering the same question for thousands of years.' },
          { t: 'p', text: 'In astrology, vocational aptitude comes from the sun sign (purpose and self-expression), the moon sign (the setting that feels emotionally satisfying), the rising sign (how you come across and how you approach things), and the tenth house, which governs career and public standing.' },
          { t: 'p', text: 'This article works from the most basic indicators, the sun sign and its element. A moon sign and rising sign can shift the details within the same sun sign.' },
          { t: 'p', text: 'The point is not that a sign decides your job, but that it helps you see your natural strengths and the direction of your energy. Any sign can succeed anywhere through effort and will. Working in a setting that fits your underlying energy, though, lets you last and shine without burning out.' },
        ],
      },
      {
        heading: 'Fire signs at work — Aries, Leo, Sagittarius',
        blocks: [
          { t: 'p', text: 'Passion, drive, leadership and creativity are the core energy of the fire signs. They shine in settings where they can break new ground and use their ability in front of people, rather than repeating tasks inside a fixed frame.' },
          {
            t: 'cards',
            items: [
              { title: '♈ Aries (Mar 21 – Apr 19) — the pioneering leader', tone: 'caution', text: 'The first to act of all twelve signs, Aries draws energy from beginning things and cutting a path no one has taken. Start-up founder, sales lead, the military or police, a sports coach, emergency medicine — Aries does well where speed and nerve matter, and competition motivates rather than drains.\nSuggested roles: founder, sales manager, athlete or coach, police or military officer, emergency physician' },
              { title: '♌ Leo (Jul 23 – Aug 22) — charisma on stage', tone: 'warm', text: 'Leos run on being noticed and appreciated, and stand out in performance, leadership and creative expression: actor, singer, broadcaster, CEO, teacher or speaker, event planner, advertising or marketing director. Leading a team and inspiring it is their natural ground.\nSuggested roles: performer or actor, educator, executive, event or show producer, marketing director' },
              { title: '♐ Sagittarius (Nov 22 – Dec 21) — the philosophical explorer', text: 'Loving knowledge, freedom, travel and philosophy, Sagittarius thrives where it can work on a world stage and keep learning: travel writer or video creator, professor, researcher of religion or philosophy, international trade or diplomacy, law, publishing. Repetition and heavy regulation feel suffocating.\nSuggested roles: travel writer or content creator, professor, lawyer, diplomat, publishing or media' },
            ],
          },
        ],
      },
      {
        heading: 'Earth signs at work — Taurus, Virgo, Capricorn',
        blocks: [
          { t: 'p', text: 'The earth signs are realistic, practical and oriented to stability. They are most rewarded by producing something concrete, building a system, or working closely with the material world. Their long view and patience are their greatest asset.' },
          {
            t: 'cards',
            items: [
              { title: '♉ Taurus (Apr 20 – May 20) — the craftsman who delivers', tone: 'positive', text: 'With a natural eye for what is beautiful and sensuous, Taurus excels in work that uses the five senses: chef or pastry chef, interior designer, musician, investor, property specialist, gardener or landscape designer. Loyal and persistent, Taurus grows more valuable the longer it stays with one field.\nSuggested roles: chef or baker, musician, financial analyst, interior designer, property specialist' },
              { title: '♍ Virgo (Aug 23 – Sep 22) — the analyst who finishes', tone: 'positive', text: 'With fine analysis and a perfectionist streak, Virgo stands out where accuracy and system matter: physician or nurse, data analyst, editor or proofreader, dietitian or trainer, accountant, quality specialist. The ability to catch what others miss makes Virgo indispensable.\nSuggested roles: medical or nursing staff, data analyst, editor, nutrition or fitness specialist, accountant' },
              { title: '♑ Capricorn (Dec 22 – Jan 19) — the strategic climber', text: 'Like a goat climbing steadily, Capricorn sets its life on reaching the summit through long planning and patience. It is at its best in roles with recognised authority and expertise: executive or politician, architect, historian, banker or investor, physician or lawyer. This is a type that grows stronger with age.\nSuggested roles: executive or politician, architect, finance or investment, legal profession, public administration' },
            ],
          },
        ],
      },
      {
        heading: 'Air signs at work — Gemini, Libra, Aquarius',
        blocks: [
          { t: 'p', text: 'Intellect, communication, sociability and ideas are the core energy of the air signs. They are at their best gathering and connecting information and talking with a wide range of people. A dynamic setting with change and stimulation suits them better than solitary repetition.' },
          {
            t: 'cards',
            items: [
              { title: '♊ Gemini (May 21 – Jun 21) — the multi-threaded communicator', tone: 'cool', text: 'A fast learner with a fine ear for language, Gemini shines anywhere information is handled and passed on: journalist or writer, marketer or copywriter, interpreter or translator, sales specialist, video creator or podcaster, teacher or lecturer. Without variety, Gemini tires quickly.\nSuggested roles: journalist or writer, marketer, interpreter, content creator, teacher or speaker' },
              { title: '♎ Libra (Sep 23 – Oct 23) — the balancing harmoniser', text: 'With an instinct for fairness and beauty, Libra is at its best mediating conflict and creating harmony: lawyer or judge, diplomat or mediator, fashion or art designer, HR or recruiting, counsellor, event planner. An unfair or aesthetically unpleasant environment is deeply stressful.\nSuggested roles: lawyer or judge, diplomat, fashion or interior designer, HR, counsellor' },
              { title: '♒ Aquarius (Jan 20 – Feb 18) — the innovating visionary', tone: 'cool', text: 'With foresight and a concern for humanity, Aquarius is most motivated by changing the world: technology founder or engineer, activist, researcher or scientist, non-profit director, UX designer, aerospace. A rigid organisation that allows no independence or creativity feels suffocating.\nSuggested roles: software developer or engineer, social entrepreneur, researcher or scientist, innovation start-up, NGO leader' },
            ],
          },
        ],
      },
      {
        heading: 'Water signs at work — Cancer, Scorpio, Pisces',
        blocks: [
          { t: 'p', text: 'Feeling, intuition and empathy are the strengths of the water signs. They understand and heal other people’s inner lives, and bring unmatched ability to work that moves people through artistic creativity.' },
          {
            t: 'cards',
            items: [
              { title: '♋ Cancer (Jun 22 – Jul 22) — the caring nurturer', tone: 'cool', text: 'Deeply rewarded by caring for others and making a safe space, Cancer stands out in care, education, food and history: childcare or education, chef or dietitian, nurse or social worker, counsellor, historian, estate agent (a house as a place of rest). A harshly competitive environment drains Cancer quickly.\nSuggested roles: teacher or childcare worker, counsellor or social worker, nurse, chef, psychologist' },
              { title: '♏ Scorpio (Oct 24 – Nov 21) — the investigator who transforms', text: 'With a relentless pull toward what is hidden, Scorpio has no equal in deep research, crisis management, and work about transformation and renewal: psychotherapist or psychiatrist, detective or investigator, surgeon, security specialist, tax accountant or auditor, researcher, esoteric studies.\nSuggested roles: psychotherapist, detective or investigator, surgeon, security or cyber specialist, researcher' },
              { title: '♓ Pisces (Feb 19 – Mar 20) — the artist who heals', tone: 'cool', text: 'With empathy that has no borders and a rich imagination, Pisces has a gift for art, healing and spiritual work: artist, musician or writer, film director or actor, psychotherapist or meditation teacher, nurse or physiotherapist, religious leader, marine biologist. Rigid rules and cold competition suppress its creativity.\nSuggested roles: artist, musician or writer, therapist, film director, meditation or yoga teacher, photographer' },
            ],
          },
        ],
      },
      {
        heading: 'Work style and the best setting for each sign',
        blocks: [
          { t: 'p', text: 'How you work matters as much as what you do. Three marketers with different signs will play the role differently: Aries enjoys attacking a new market, Virgo prefers precise targeting built on data, and Libra cares about brand image and harmony.' },
          { t: 'p', text: 'Knowing the setting that fits your sign also helps in an interview, when you are judging whether the culture suits you. Sagittarius and Aquarius, who want freedom, fit a start-up with remote work and flexible hours; Taurus and Capricorn, who want stability and system, may suit a structured large company or public institution.' },
        ],
      },
      {
        heading: 'How to raise your work fortune',
        blocks: [
          { t: 'p', text: 'The planets that carry career fortune in astrology are Jupiter (expansion and luck), Saturn (effort and discipline) and the ruler of the tenth house. Years when Jupiter crosses your sun sign or tenth house tend to bring more chances for career growth.' },
          { t: 'p', text: 'More practically: first, deliberately develop the core strength of your sign and actively look for the setting that needs it most. Second, notice your sign’s weak point — impatience in Aries, indecision in Libra — and work to balance it.' },
          { t: 'p', text: 'Finally, a sign shows tendencies and potential, but real career success comes from continual learning, steady effort and good relationships. Take the direction the stars suggest as a reference; the walking is yours.' },
        ],
      },
    ],
  },
  ja: {
    intro:
      '生まれ持った才能を活かすことが、いちばん早い成功の道です。12星座それぞれの強みとエネルギーを、仕事選びにどう活かせるかを深く見ていきます。',
    cta: '自分の星座の運勢が気になったら',
    sections: [
      {
        heading: '星座と職業適性',
        blocks: [
          { t: 'p', text: '「どんな仕事が自分に合うのか」は、人類が長く抱えてきた根本的な問いです。現代のキャリア相談ではMBTIやホランド理論、ストレングス面接などが使われますが、占星術も数千年前からこの問いに答えてきた古い知恵の体系です。' },
          { t: 'p', text: '占星術では、職業適性は主に太陽星座（人生の目的と自己表現）、月星座（感情的に満たされる環境）、上昇星座（人から見える姿と関わり方）、そして第10ハウス（キャリアと社会的地位を担う領域）の組み合わせとして現れます。' },
          { t: 'p', text: 'この記事ではもっとも基本的な指標である太陽星座と元素から職業適性を読みます。同じ星座でも月星座や上昇星座によって細かな方向が変わることは念頭に置いてください。' },
          { t: 'p', text: '大切なのは、星座が仕事を決めるのではなく、自分の自然な強みとエネルギーの向きを知る助けになるということです。どの星座でも努力と意志でさまざまな分野で成功できます。ただ、自分の本質的なエネルギーに合う環境で働くとき、燃え尽きずに長く輝けます。' },
        ],
      },
      {
        heading: '火の星座の仕事 — 牡羊座・獅子座・射手座',
        blocks: [
          { t: 'p', text: '火の星座の核心は情熱、行動力、リーダーシップ、創造性です。決められた枠の中で繰り返す仕事よりも、新しい挑戦を切り開き、人の前で力を発揮する環境でよく輝きます。' },
          {
            t: 'cards',
            items: [
              { title: '♈ 牡羊座（3.21〜4.19）— 先駆者のリーダー', tone: 'caution', text: '12星座でもっとも早く動く牡羊座は、始めること、誰も行かない道を切り開くことからエネルギーを得ます。スタートアップの創業者、セールスリーダー、軍人・警察、スポーツコーチ、救急医療の分野で力を発揮します。競争のある環境のほうがむしろ動機づけになります。\n向いている仕事：起業家、セールスマネージャー、アスリート・コーチ、軍人・警察官、救急医' },
              { title: '♌ 獅子座（7.23〜8.22）— 舞台のカリスマ', tone: 'warm', text: '注目され認められることを原動力にする獅子座は、パフォーマンス、リーダーシップ、創造的な表現が求められる分野で頭角を現します。俳優・歌手・タレント、企業のCEO、教師・講演者、イベントプランナー、広告・マーケティングのディレクターとして才能を発揮します。とくにチームを導き鼓舞する役割に優れます。\n向いている仕事：芸能人・俳優、教育者、経営者・役員、イベント・舞台企画、マーケティング責任者' },
              { title: '♐ 射手座（11.22〜12.21）— 哲学する探検家', text: '知識と自由、旅と哲学を愛する射手座は、世界を舞台に働き学び続けられる環境で伸びます。旅ライター・動画クリエイター、大学教授、宗教・哲学の研究者、国際貿易・外交、弁護士、出版として広い世界観を実現します。繰り返しと規制の多い環境では息苦しさを感じます。\n向いている仕事：旅ライター・コンテンツクリエイター、教授、弁護士、外交官、出版・メディア' },
            ],
          },
        ],
      },
      {
        heading: '地の星座の仕事 — 牡牛座・乙女座・山羊座',
        blocks: [
          { t: 'p', text: '地の星座は現実的、実用的で、安定を志向します。具体的な成果物をつくること、仕組みを整えること、物質的な世界と深く関わる仕事に最も大きなやりがいを感じます。長期的な視点と忍耐が最大の資産です。' },
          {
            t: 'cards',
            items: [
              { title: '♉ 牡牛座（4.20〜5.20）— 職人の実現者', tone: 'positive', text: '感覚的で美しいものへの生まれつきの目を持つ牡牛座は、五感を使う仕事で天才性を発揮します。料理人・パティシエ、インテリアデザイナー、ミュージシャン、投資家、不動産の専門家、園芸・造園が代表例です。忠誠心と持続力に優れ、一つの分野を長く深く掘り下げるほど真価を発揮します。\n向いている仕事：料理人・製菓、ミュージシャン、金融アナリスト、インテリアデザイナー、不動産専門家' },
              { title: '♍ 乙女座（8.23〜9.22）— 分析する完成者', tone: 'positive', text: '細やかな分析力と完璧主義を持つ乙女座は、正確さと体系性が求められる分野で頭角を現します。医師・看護師、データアナリスト、編集者・校正者、栄養士・トレーナー、会計士、品質管理の専門家として優れた成果を出します。人が見落とす誤りを見つける力が、組織に欠かせない存在にします。\n向いている仕事：医療・看護、データアナリスト、編集者、栄養・フィットネス専門家、会計士' },
              { title: '♑ 山羊座（12.22〜1.19）— 戦略の征服者', text: '目標へ着実に登る山羊のように、山羊座は長期の計画と忍耐で頂点に立つことを人生の目標にします。企業役員・政治家、建築家、歴史家、銀行家・投資家、医師・弁護士など、社会的な権威と専門性が認められる仕事で最高の力を発揮します。年を重ねるほど強くなるタイプです。\n向いている仕事：経営者・政治家、建築家、金融・投資の専門家、法曹、公共行政' },
            ],
          },
        ],
      },
      {
        heading: '風の星座の仕事 — 双子座・天秤座・水瓶座',
        blocks: [
          { t: 'p', text: '風の星座の核心は知性、対話、社交性、アイデアです。情報を集めてつなぎ、多様な人と対話する環境で最高の力を発揮します。孤独な繰り返しより、変化と刺激のある動的な環境が合います。' },
          {
            t: 'cards',
            items: [
              { title: '♊ 双子座（5.21〜6.21）— マルチな伝え手', tone: 'cool', text: '学びが速く言葉の感覚に優れた双子座は、情報を扱い伝えるすべての分野で輝きます。記者・作家、マーケター・コピーライター、通訳・翻訳者、セールス、動画配信者・ポッドキャスター、教師・講師として才能を発揮します。ただし多様性がないとすぐに退屈しがちです。\n向いている仕事：記者・作家、マーケター、通訳、コンテンツクリエイター、教師・講演者' },
              { title: '♎ 天秤座（9.23〜10.23）— 均衡の調和役', text: '公正さと美しさへの生まれつきの感覚を持つ天秤座は、人と人の対立を仲介し調和を生む仕事で真価を発揮します。弁護士・裁判官、外交官・調停者、ファッション・アートのデザイナー、人事・採用、カウンセラー、イベントプランナーが代表例です。公平でない、あるいは美的に不快な環境では極度のストレスを感じます。\n向いている仕事：弁護士・裁判官、外交官、ファッション・インテリアデザイナー、人事、カウンセラー' },
              { title: '♒ 水瓶座（1.20〜2.18）— 革新のビジョナリー', tone: 'cool', text: '未来を見る洞察と人類への関心を持つ水瓶座は、世界を変える仕事に最も大きな動機を得ます。技術系の起業家・エンジニア、社会運動家、研究者・科学者、非営利団体の代表、UXデザイナー、宇宙航空分野が目立ちます。独立性と創造性が保証されない硬直した組織では息が詰まります。\n向いている仕事：IT開発者・エンジニア、社会的起業家、研究員・科学者、革新分野のスタートアップ、NGOリーダー' },
            ],
          },
        ],
      },
      {
        heading: '水の星座の仕事 — 蟹座・蠍座・魚座',
        blocks: [
          { t: 'p', text: '水の星座は感情、直感、共感力が強みです。人の内面を深く理解して癒やし、芸術的な創造性で人を動かす仕事で、比べるもののない力を発揮します。' },
          {
            t: 'cards',
            items: [
              { title: '♋ 蟹座（6.22〜7.22）— 世話をする育て役', tone: 'cool', text: '人を世話し安全な場所をつくることに深いやりがいを感じる蟹座は、ケア、教育、食、歴史の分野で頭角を現します。保育・教育の専門家、料理人・栄養士、看護師・社会福祉士、心理カウンセラー、歴史家、不動産仲介（家＝安らぎの場）が代表例です。競争と冷たさの強い環境では消耗しやすい。\n向いている仕事：教師・保育士、カウンセラー・ソーシャルワーカー、看護師、料理人、心理学者' },
              { title: '♏ 蠍座（10.24〜11.21）— 探究する変革者', text: '表に出ない真実を掘り下げる執念を持つ蠍座は、深層研究、危機管理、変容と再生を扱う分野で右に出る者がいません。心理療法士・精神科医、刑事・捜査官、外科医、セキュリティ専門家、税理士・監査人、研究者、神秘学の分野が代表例です。\n向いている仕事：心理療法士、刑事・捜査官、外科医、セキュリティ・サイバーの専門家、研究者' },
              { title: '♓ 魚座（2.19〜3.20）— 芸術する癒やし手', tone: 'cool', text: '境界のない共感力と豊かな想像力を持つ魚座は、芸術、癒やし、精神の分野で天賦の才を発揮します。芸術家・音楽家・作家、映画監督・俳優、心理療法士・瞑想の指導者、看護師・理学療法士、宗教の指導者、海洋生物学者が代表例です。硬い規則と冷たい競争の環境では創造性が抑え込まれます。\n向いている仕事：芸術家・音楽家・作家、セラピスト、映画監督、瞑想・ヨガの指導者、写真家' },
            ],
          },
        ],
      },
      {
        heading: '星座別の働き方と最適な環境',
        blocks: [
          { t: 'p', text: '仕事の種類と同じくらい、どんな環境でどう働くかが大切です。同じマーケターでも、牡羊座は攻めの新市場開拓を楽しみ、乙女座はデータ分析に基づく精密なターゲティングを好み、天秤座はブランドイメージと調和を重んじます。' },
          { t: 'p', text: '自分の星座に合う働く環境を理解しておくと、面接のときにも自分に合う組織文化を見極める助けになります。自由な環境を求める射手座や水瓶座にはリモートワークや裁量労働のできるスタートアップが合い、安定と仕組みを好む牡牛座や山羊座には体系立った大企業や公共機関が合うかもしれません。' },
        ],
      },
      {
        heading: '仕事運を高める方法',
        blocks: [
          { t: 'p', text: '占星術で仕事運を担う主な惑星は、木星（拡大と幸運）、土星（努力と規律）、そして第10ハウスの守護惑星です。木星が自分の太陽星座や第10ハウスを通過する年は、キャリア成長の機会が訪れやすいとされます。' },
          { t: 'p', text: 'より実用的には、第一に自分の星座の核心的な強みを意識的に伸ばし、それが最も必要とされる仕事の場を積極的に探すこと。第二に、自分の星座の弱点（牡羊座の忍耐不足、天秤座の決断の迷いなど）に気づき、補う努力も大切です。' },
          { t: 'p', text: '最後に、星座は生まれつきの傾向と可能性を示しますが、実際のキャリアの成功は学び続けること、誠実な努力、そしてよい関係づくりから生まれます。星が示す方向を参考にしつつ、その道を歩くのは自分自身だということを忘れないでください。' },
        ],
      },
    ],
  },
};

export const moonSignGuide: BlogArticleContent = {
  related: ['what-is-astrology', 'planets-and-zodiac-signs'],
  ko: {
    intro:
      '태양 별자리가 세상에 보여주는 나라면, 달 별자리는 혼자 있을 때의 진짜 나입니다. 감정의 언어, 무의식의 지도인 달 별자리를 통해 자신의 내면 세계를 새롭게 탐험해 보세요.',
    cta: '나의 별자리 운세가 궁금하다면?',
    sections: [
      {
        heading: '달 별자리란 무엇인가?',
        blocks: [
          { t: 'p', text: '우리가 흔히 "나는 사수자리야"라고 말할 때 언급하는 것은 태양 별자리(Sun Sign)입니다. 이는 생일에 태양이 위치한 황도대의 구역을 의미합니다. 태양 별자리는 삶의 방향, 자아 정체성, 의식적인 목표를 나타냅니다.' },
          { t: 'p', text: '반면 달 별자리(Moon Sign)는 출생 당시 달이 위치한 별자리를 말합니다. 달은 약 27.3일마다 12개의 별자리를 모두 통과하므로, 각 별자리에 머무는 시간은 약 2~3일에 불과합니다. 따라서 달 별자리를 알기 위해서는 정확한 출생 날짜와 출생 지역(시간대)이 필요합니다.' },
          { t: 'p', text: '점성술에서 달은 고대부터 감정, 직관, 본능, 무의식, 그리고 어머니와의 관계를 상징했습니다. 달 별자리는 우리가 의식적으로 통제하기 어려운 감정적 반응 방식, 편안함을 느끼는 환경, 스트레스를 받을 때 나타나는 본능적인 행동 패턴을 나타냅니다.' },
          { t: 'p', text: '쉽게 비유하자면 태양 별자리가 공개된 소셜 미디어 프로필이라면, 달 별자리는 아무도 보지 않을 때 적는 비밀 일기와 같습니다. 두 별자리를 함께 이해할 때 비로소 한 사람을 더 완전하게 파악할 수 있습니다.' },
        ],
      },
      {
        heading: '달의 상징 — 감정, 무의식, 어머니의 원형',
        blocks: [
          { t: 'p', text: '달은 인류가 기억하는 가장 오래된 상징 중 하나입니다. 수메르의 달의 신 난나(Nanna), 그리스의 셀레네(Selene)와 아르테미스(Artemis), 로마의 루나(Luna), 한국의 달을 보며 절하는 고대 제천 의식까지, 인류는 언제나 달에서 신성함과 순환의 비밀을 찾아왔습니다.' },
          { t: 'p', text: '심리학자 카를 융은 달을 "아니마(Anima)", 즉 남성의 내면에 있는 여성적 원리의 상징으로 해석했습니다. 또한 달의 규칙적인 위상 변화(초승달 → 반달 → 보름달 → 그믐달)는 죽음과 재생, 성장과 쇠퇴의 원형적 패턴을 나타냅니다.' },
          { t: 'p', text: '점성술에서 달은 특히 다음의 영역을 지배합니다. 감정적 안정감과 불안감의 패턴, 어린 시절의 경험과 어머니와의 관계, 편안함과 안전함을 느끼는 환경, 직관과 본능적 반응, 기억과 과거에 대한 집착 또는 자유로움이 그것입니다.' },
          { t: 'p', text: '달 별자리가 같은 두 사람은 감정 언어가 통한다고 볼 수 있습니다. 태양 별자리가 달라서 가치관이나 목표가 다를 수 있어도, 달 별자리가 같다면 감정적으로 서로를 직관적으로 이해하고 위로하는 능력이 있습니다.' },
        ],
      },
      {
        heading: '달 별자리가 일상에 미치는 영향',
        blocks: [
          { t: 'p', text: '달 별자리는 특히 스트레스 상황이나 감정이 격해질 때 더욱 강하게 드러납니다. 평상시에는 태양 별자리의 특성이 전면에 나타나지만, 큰 위기나 깊은 슬픔, 극도의 행복감 앞에서는 달 별자리의 본능이 표면으로 올라옵니다.' },
          {
            t: 'box',
            title: '달 별자리별 감정 반응 패턴',
            tone: 'neutral',
            text: '**불(火) 원소 달 (양자리·사자자리·사수자리):** 감정을 즉각적으로 표현하고 행동으로 해소합니다. 기분 변화가 빠르지만 회복도 빠릅니다. 누군가의 지지보다 행동할 공간이 필요합니다.\n**땅(土) 원소 달 (황소자리·처녀자리·염소자리):** 감정을 천천히, 실용적으로 처리합니다. 불안할 때 물리적 안정(집, 음식, 루틴)에서 위안을 찾습니다. 감정을 말로 표현하는 것이 서툴 수 있습니다.\n**공기(Air) 원소 달 (쌍둥이자리·천칭자리·물병자리):** 감정을 이성적으로 분석하고 언어화하려 합니다. 대화와 정보 교환을 통해 감정을 정리합니다. 감정에 너무 오래 머무르는 것을 불편해합니다.\n**물(水) 원소 달 (게자리·전갈자리·물고기자리):** 감정의 파도를 그대로 흡수하고 깊이 느낍니다. 타인의 감정에도 예민하게 반응하며, 안전한 감정 공간이 꼭 필요합니다.',
          },
        ],
      },
      {
        heading: '12개 달 별자리별 특성',
        blocks: [
          {
            t: 'cards',
            items: [
              { title: '♈ 양자리 달', text: '즉흥적이고 열정적인 감정 표현. 독립적이며 의존보다 행동으로 감정을 해소합니다.' },
              { title: '♉ 황소자리 달', text: '안정과 편안함을 최우선으로 합니다. 변화를 싫어하지만 한번 신뢰하면 깊은 유대감을 형성합니다.' },
              { title: '♊ 쌍둥이자리 달', text: '다양한 정보와 대화를 통해 감정을 정리합니다. 단조로운 감정 환경에서 쉽게 지루함을 느낍니다.' },
              { title: '♋ 게자리 달', text: '달의 가장 자연스러운 자리. 깊은 공감 능력과 강한 모성적 직관을 가집니다. 감정 기억이 매우 선명합니다.' },
              { title: '♌ 사자자리 달', text: '인정받고 사랑받을 때 감정적으로 충만해집니다. 따뜻하고 표현력이 풍부하며 주변을 밝게 만듭니다.' },
              { title: '♍ 처녀자리 달', text: '감정을 분석하고 정리하려는 경향. 도움을 주는 행동으로 사랑을 표현하며, 완벽주의적 불안을 가질 수 있습니다.' },
              { title: '♎ 천칭자리 달', text: '조화와 균형을 원합니다. 갈등을 피하려다 진짜 감정을 숨길 때가 있습니다. 아름다운 환경에서 감정적 평화를 찾습니다.' },
              { title: '♏ 전갈자리 달', text: '감정의 깊이가 남다릅니다. 배신에 매우 민감하며, 한번 상처받으면 오래 기억합니다. 변화와 재탄생의 에너지를 품고 있습니다.' },
              { title: '♐ 사수자리 달', text: '자유와 모험에서 감정적 활력을 얻습니다. 너무 깊은 감정적 요구에 부담을 느낄 수 있으나, 낙관적인 에너지로 주변을 밝힙니다.' },
              { title: '♑ 염소자리 달', text: '감정을 절제하고 책임감 있게 행동합니다. 내면의 불안을 성취와 목표 달성으로 해소하려는 경향이 있습니다.' },
              { title: '♒ 물병자리 달', text: '감정을 이성적으로 처리하며 독립성을 중시합니다. 집단보다 자신만의 방식으로 감정을 관리하는 것을 선호합니다.' },
              { title: '♓ 물고기자리 달', text: '경계가 없는 공감 능력. 타인의 감정을 그대로 흡수하기 때문에 혼자만의 회복 시간이 꼭 필요합니다.' },
            ],
          },
        ],
      },
      {
        heading: '태양-달 별자리 조합 예시',
        blocks: [
          { t: 'p', text: '태양 별자리와 달 별자리가 어떻게 상호작용하는지 구체적인 예시로 살펴보겠습니다. 두 별자리가 조화롭거나 긴장을 이룰 때, 독특하고 복합적인 성격이 만들어집니다.' },
          {
            t: 'cards',
            items: [
              { title: '사자자리 태양 + 물고기자리 달', text: '겉으로는 자신감 넘치고 화려하지만, 내면에는 극도로 섬세하고 감수성 풍부한 예술가적 영혼이 있습니다. 무대 위의 퍼포머이자 혼자 눈물 흘리는 시인. 공감 능력이 뛰어나며 남몰래 타인을 돕는 것을 좋아합니다.' },
              { title: '처녀자리 태양 + 사수자리 달', text: '꼼꼼한 분석가이자 자유로운 모험가의 조합. 일할 때는 완벽주의적이지만 퇴근 후에는 즉흥 여행을 떠나고 싶어하는 내적 갈등의 소유자. 이 긴장감이 창의적 에너지의 원천이 됩니다.' },
              { title: '전갈자리 태양 + 게자리 달', text: '감정의 깊이가 극에 달하는 조합. 강렬하고 직관적이며, 한번 사랑하면 온 마음을 바칩니다. 배신에 취약하지만, 사랑하는 사람을 지키는 힘도 그 누구보다 강합니다.' },
            ],
          },
        ],
      },
      {
        heading: '달 별자리 찾는 방법',
        blocks: [
          { t: 'p', text: '달 별자리를 정확하게 계산하려면 출생 날짜, 출생 시각, 출생 지역(시간대)이 필요합니다. 달은 약 2~3일마다 별자리를 이동하기 때문에 날짜만으로는 정확한 달 별자리를 알기 어려운 경우가 있습니다. 특히 달이 별자리를 넘어가는 당일에 태어난 사람은 반드시 시간 정보가 필요합니다.' },
          { t: 'p', text: '무료로 달 별자리를 계산하는 방법으로는 온라인 출생 차트(natal chart) 계산기를 활용하는 것이 가장 편리합니다. Astro.com, AstroSeek 등의 사이트에서 생년월일, 출생 시간, 출생 지역을 입력하면 태양 별자리, 달 별자리, 상승 별자리를 포함한 완전한 출생 차트를 무료로 확인할 수 있습니다.' },
          { t: 'p', text: '달 별자리를 알았다면, 단순히 그 별자리의 키워드를 외우는 것보다 자신의 감정 패턴과 비교해보는 것이 훨씬 유익합니다. "나는 왜 이런 상황에서 이런 감정을 느끼는가?"라는 질문에 달 별자리가 하나의 흥미로운 실마리를 제공해 줄 것입니다.' },
        ],
      },
    ],
  },
  en: {
    intro:
      'If the sun sign is the self the world sees, the moon sign is who you are alone. Here is the language of feeling and the map of the unconscious that a moon sign describes.',
    cta: 'Curious about your own sign?',
    sections: [
      {
        heading: 'What a moon sign is',
        blocks: [
          { t: 'p', text: 'When we say "I’m a Sagittarius", we mean the sun sign: the part of the zodiac the Sun occupied on our birthday. The sun sign describes the direction of a life, the sense of self, and conscious goals.' },
          { t: 'p', text: 'The moon sign is the sign the Moon was in at birth. The Moon crosses all twelve signs in about 27.3 days, so it stays in each for only two or three days. Knowing your moon sign needs an exact birth date and a birth region, for the time zone.' },
          { t: 'p', text: 'Since antiquity the Moon has stood for emotion, intuition, instinct, the unconscious and the relationship with the mother. The moon sign describes emotional reactions you cannot easily control, the setting that feels comfortable, and the instinctive patterns that appear under stress.' },
          { t: 'p', text: 'Put simply: if the sun sign is a public social profile, the moon sign is the private diary you write when no one is watching. Only with both do you see a whole person.' },
        ],
      },
      {
        heading: 'What the Moon stands for — feeling, the unconscious, the mother',
        blocks: [
          { t: 'p', text: 'The Moon is one of the oldest symbols people remember: Nanna in Sumer, Selene and Artemis in Greece, Luna in Rome, and the ancient Korean rite of bowing to the Moon. Humanity has always looked to it for the sacred and for the secret of cycles.' },
          { t: 'p', text: 'Carl Jung read the Moon as the anima, the feminine principle inside a man. Its regular phases — new, half, full, waning — also stand for the archetypal pattern of death and rebirth, growth and decline.' },
          { t: 'p', text: 'In astrology the Moon governs, in particular: patterns of emotional security and anxiety; childhood experience and the relationship with the mother; the setting that feels comfortable and safe; intuition and instinctive reaction; memory, and either a hold on the past or freedom from it.' },
          { t: 'p', text: 'Two people with the same moon sign share an emotional language. Their sun signs may give them different values or goals, but with the same moon sign they can read and comfort each other intuitively.' },
        ],
      },
      {
        heading: 'How the moon sign shows up day to day',
        blocks: [
          { t: 'p', text: 'The moon sign comes through most strongly under stress or when feeling runs high. In ordinary life the sun sign leads, but in a crisis, a deep sadness or overwhelming happiness, the instincts of the moon sign rise to the surface.' },
          {
            t: 'box',
            title: 'Emotional patterns by moon element',
            tone: 'neutral',
            text: '**Fire moon (Aries, Leo, Sagittarius):** expresses feeling immediately and discharges it through action. Moods change fast and recover fast. Needs room to act more than someone to lean on.\n**Earth moon (Taurus, Virgo, Capricorn):** processes feeling slowly and practically. Finds comfort in physical steadiness — home, food, routine. May be poor at putting feelings into words.\n**Air moon (Gemini, Libra, Aquarius):** analyses feeling and wants to put it into language. Sorts emotion through conversation and information. Uncomfortable staying inside a feeling too long.\n**Water moon (Cancer, Scorpio, Pisces):** absorbs the wave of feeling and feels it deeply. Reacts sharply to other people’s emotions and needs a safe emotional space.',
          },
        ],
      },
      {
        heading: 'The twelve moon signs',
        blocks: [
          {
            t: 'cards',
            items: [
              { title: '♈ Aries moon', text: 'Spontaneous, passionate expression. Independent, and discharges feeling through action rather than relying on others.' },
              { title: '♉ Taurus moon', text: 'Puts stability and comfort first. Dislikes change, but once trust is given forms a deep bond.' },
              { title: '♊ Gemini moon', text: 'Sorts feeling through information and conversation. Bores quickly in a monotonous emotional setting.' },
              { title: '♋ Cancer moon', text: 'The Moon’s most natural place. Deep empathy and strong maternal intuition, with very vivid emotional memory.' },
              { title: '♌ Leo moon', text: 'Feels emotionally full when recognised and loved. Warm and expressive, brightening the room.' },
              { title: '♍ Virgo moon', text: 'Tends to analyse and tidy feeling. Shows love through practical help, and can carry perfectionist anxiety.' },
              { title: '♎ Libra moon', text: 'Wants harmony and balance. May hide true feeling to avoid conflict. Finds emotional peace in a beautiful setting.' },
              { title: '♏ Scorpio moon', text: 'Unusually deep feeling. Very sensitive to betrayal and remembers a wound for a long time, while carrying the energy of change and rebirth.' },
              { title: '♐ Sagittarius moon', text: 'Draws emotional energy from freedom and adventure. Can feel burdened by heavy emotional demands, but brightens those around it with optimism.' },
              { title: '♑ Capricorn moon', text: 'Holds feeling in check and acts responsibly. Tends to resolve inner anxiety through achievement and reaching goals.' },
              { title: '♒ Aquarius moon', text: 'Handles feeling rationally and values independence. Prefers managing emotion in its own way rather than with the group.' },
              { title: '♓ Pisces moon', text: 'Empathy without boundaries. Absorbs other people’s feelings directly, so time alone to recover is essential.' },
            ],
          },
        ],
      },
      {
        heading: 'Sun and moon combinations',
        blocks: [
          { t: 'p', text: 'A few examples of how sun and moon signs interact. Where the two are in harmony or in tension, a distinctive, layered character appears.' },
          {
            t: 'cards',
            items: [
              { title: 'Leo sun + Pisces moon', text: 'Confident and bright on the outside, with an extremely delicate, artistic soul inside. A performer on stage and a poet crying alone. Highly empathetic, and likes helping others quietly.' },
              { title: 'Virgo sun + Sagittarius moon', text: 'A meticulous analyst and a free adventurer in one. Perfectionist at work, yet wanting to leave on a spontaneous trip after hours. That tension is the source of the creative energy.' },
              { title: 'Scorpio sun + Cancer moon', text: 'Feeling at its deepest. Intense, intuitive, and devoted entirely once in love. Vulnerable to betrayal, but with more strength than anyone to protect the person it loves.' },
            ],
          },
        ],
      },
      {
        heading: 'How to find your moon sign',
        blocks: [
          { t: 'p', text: 'An accurate moon sign needs birth date, birth time and birth region, for the time zone. Since the Moon changes sign every two or three days, the date alone is sometimes not enough — and anyone born on a day the Moon changes sign certainly needs the time.' },
          { t: 'p', text: 'The easiest free route is an online natal chart calculator. Enter your birth date, time and place at a site such as Astro.com or AstroSeek and you can see a full chart with sun, moon and rising signs at no cost.' },
          { t: 'p', text: 'Once you know your moon sign, comparing it with your own emotional patterns is far more useful than memorising keywords. Why do I feel this way in this situation? The moon sign offers one interesting clue.' },
        ],
      },
    ],
  },
  ja: {
    intro:
      '太陽星座が世界に見せる自分なら、月星座はひとりでいるときの本当の自分です。感情の言葉、無意識の地図である月星座から、内面の世界をたどってみましょう。',
    cta: '自分の星座の運勢が気になったら',
    sections: [
      {
        heading: '月星座とは何か',
        blocks: [
          { t: 'p', text: '「私は射手座です」と言うとき、指しているのは太陽星座です。誕生日に太陽がいた黄道十二宮の区画を意味し、人生の方向、自我のアイデンティティ、意識的な目標を表します。' },
          { t: 'p', text: '一方、月星座は生まれたときに月がいた星座です。月は約27.3日で12星座すべてを通るため、一つの星座にいるのは2〜3日ほど。正確な生年月日と出生地（タイムゾーン）が必要になります。' },
          { t: 'p', text: '占星術で月は古くから、感情、直感、本能、無意識、そして母との関係を象徴してきました。月星座は、意識的に制御しにくい感情の反応の仕方、心地よいと感じる環境、ストレスを受けたときに出る本能的な行動のパターンを表します。' },
          { t: 'p', text: 'たとえるなら、太陽星座が公開されたSNSのプロフィール、月星座は誰も見ていないときに書く秘密の日記です。二つをあわせて初めて、一人の人をより完全にとらえられます。' },
        ],
      },
      {
        heading: '月の象徴 — 感情、無意識、母の元型',
        blocks: [
          { t: 'p', text: '月は人類が記憶するもっとも古い象徴の一つです。シュメールの月神ナンナ、ギリシャのセレネとアルテミス、ローマのルナ、そして月に拝む古代の祭天儀礼まで、人はいつも月に神聖さと循環の秘密を求めてきました。' },
          { t: 'p', text: '心理学者カール・ユングは月を「アニマ」、つまり男性の内面にある女性的な原理の象徴と読みました。また月の規則的な満ち欠け（新月→半月→満月→有明月）は、死と再生、成長と衰退の元型的なパターンを表します。' },
          { t: 'p', text: '占星術で月がとくに司るのは次の領域です。情緒的な安定と不安のパターン、子ども時代の経験と母との関係、心地よさと安全を感じる環境、直感と本能的な反応、記憶と過去への執着あるいは自由。' },
          { t: 'p', text: '同じ月星座の二人は、感情の言語が通じると言えます。太陽星座が違えば価値観や目標は違っても、月星座が同じなら、互いを直感的に理解し慰め合う力があります。' },
        ],
      },
      {
        heading: '月星座が日常に与える影響',
        blocks: [
          { t: 'p', text: '月星座はとくに、ストレスの場面や感情が高ぶったときに強く現れます。普段は太陽星座の特徴が前面に出ますが、大きな危機、深い悲しみ、極度の幸福感の前では、月星座の本能が表面に上がってきます。' },
          {
            t: 'box',
            title: '月の元素別・感情の反応パターン',
            tone: 'neutral',
            text: '**火の月（牡羊座・獅子座・射手座）:** 感情をすぐに表し、行動で発散します。気分の変化は速いが回復も速い。誰かの支えよりも、動ける余白が必要です。\n**地の月（牡牛座・乙女座・山羊座）:** 感情をゆっくり実用的に処理します。不安なときは物理的な安定（家、食べ物、習慣）に慰めを求めます。言葉で気持ちを表すのは苦手かもしれません。\n**風の月（双子座・天秤座・水瓶座）:** 感情を理性的に分析し、言葉にしようとします。会話と情報の交換で気持ちを整理します。感情に長くとどまることを居心地悪く感じます。\n**水の月（蟹座・蠍座・魚座）:** 感情の波をそのまま吸収し、深く感じます。人の感情にも敏感に反応し、安全な感情の場所が欠かせません。',
          },
        ],
      },
      {
        heading: '12の月星座の特徴',
        blocks: [
          {
            t: 'cards',
            items: [
              { title: '♈ 牡羊座の月', text: '即興的で情熱的な感情表現。独立的で、頼るよりも行動で気持ちを解消します。' },
              { title: '♉ 牡牛座の月', text: '安定と心地よさを最優先にします。変化は苦手ですが、一度信頼すると深い絆を結びます。' },
              { title: '♊ 双子座の月', text: 'さまざまな情報と会話で気持ちを整理します。単調な感情の環境ではすぐに退屈します。' },
              { title: '♋ 蟹座の月', text: '月がもっとも自然に収まる場所。深い共感力と強い母性的な直感を持ちます。感情の記憶がとても鮮明です。' },
              { title: '♌ 獅子座の月', text: '認められ愛されるときに情緒的に満たされます。温かく表現豊かで、周りを明るくします。' },
              { title: '♍ 乙女座の月', text: '感情を分析し整理しようとします。助ける行動で愛を表し、完璧主義的な不安を抱えることがあります。' },
              { title: '♎ 天秤座の月', text: '調和と均衡を求めます。対立を避けようとして本当の気持ちを隠すことも。美しい環境で心の平和を見つけます。' },
              { title: '♏ 蠍座の月', text: '感情の深さが並外れています。裏切りに非常に敏感で、傷つくと長く覚えています。変化と再生のエネルギーを宿しています。' },
              { title: '♐ 射手座の月', text: '自由と冒険から情緒的な活力を得ます。深すぎる感情の要求には負担を感じますが、楽観的なエネルギーで周りを明るくします。' },
              { title: '♑ 山羊座の月', text: '感情を抑え、責任ある行動をとります。内面の不安を達成と目標で解消しようとする傾向があります。' },
              { title: '♒ 水瓶座の月', text: '感情を理性的に扱い、独立性を重んじます。集団よりも自分なりの方法で気持ちを管理するのを好みます。' },
              { title: '♓ 魚座の月', text: '境界のない共感力。人の感情をそのまま吸収するため、ひとりで回復する時間が欠かせません。' },
            ],
          },
        ],
      },
      {
        heading: '太陽と月の組み合わせの例',
        blocks: [
          { t: 'p', text: '太陽星座と月星座がどう関わるかを、具体的な例で見てみましょう。二つが調和するときも緊張するときも、独自で複層的な性格が生まれます。' },
          {
            t: 'cards',
            items: [
              { title: '獅子座の太陽＋魚座の月', text: '外には自信に満ち華やかですが、内面にはきわめて繊細で感受性豊かな芸術家の魂があります。舞台の上のパフォーマーであり、ひとり涙を流す詩人。共感力に優れ、人知れず人を助けるのが好きです。' },
              { title: '乙女座の太陽＋射手座の月', text: '細やかな分析家と自由な冒険者の組み合わせ。仕事では完璧主義ですが、退勤後は思いつきで旅に出たくなる内的な葛藤を抱えます。この緊張が創造的なエネルギーの源になります。' },
              { title: '蠍座の太陽＋蟹座の月', text: '感情の深さが極まる組み合わせ。強烈で直感的、一度愛すれば全身全霊を捧げます。裏切りには脆い一方、愛する人を守る力は誰よりも強い。' },
            ],
          },
        ],
      },
      {
        heading: '月星座の調べ方',
        blocks: [
          { t: 'p', text: '月星座を正確に計算するには、生年月日、出生時刻、出生地（タイムゾーン）が必要です。月は2〜3日ごとに星座を移るため、日付だけでは正確に分からないことがあります。とくに月が星座を移る日に生まれた人は、時刻の情報が必ず必要です。' },
          { t: 'p', text: '無料で調べるには、オンラインのホロスコープ計算機がもっとも手軽です。Astro.com や AstroSeek などのサイトで生年月日・出生時刻・出生地を入力すると、太陽星座・月星座・上昇星座を含む完全なホロスコープを無料で確認できます。' },
          { t: 'p', text: '月星座が分かったら、そのキーワードを覚えるよりも、自分の感情のパターンと照らし合わせるほうがずっと有益です。「なぜこの場面でこんな気持ちになるのか」という問いに、月星座がひとつの面白い手がかりを与えてくれます。' },
        ],
      },
    ],
  },
};
