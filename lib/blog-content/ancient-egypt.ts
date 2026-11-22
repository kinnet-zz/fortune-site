import type { BlogArticleContent } from './types';

export const ancientEgypt: BlogArticleContent = {
  related: ['nasa-ophiuchus-13th-zodiac', 'twin-study-astrology'],
  ko: {
    intro:
      '별자리를 보고 강이 언제 넘칠지 예측했다는 것이 미신처럼 들립니까? 5,000년 전 이집트인들에게 그것은 과학이었습니다. 그리고 그 관찰의 정밀함은 현대 천문학자들도 인정합니다. 천문학과 점성술이 하나였던 시대, 그 지식의 계보를 추적합니다.',
    cta: '나의 별자리 운세가 궁금하다면?',
    sections: [
      {
        heading: '시리우스와 나일강 — 별이 강을 깨우는 날',
        blocks: [
          { t: 'image', src: 'https://images.unsplash.com/photo-1608178398319-48f814d0750c?w=800&auto=format&fit=crop&q=80', alt: '고대 이집트 천문학' },
          { t: 'p', text: '고대 이집트 문명의 근간은 나일강이었습니다. 나일강은 매년 범람하면서 상류에서 운반한 비옥한 퇴적물을 강 유역에 쌓았습니다. 이 범람이 없으면 이집트의 농업은 존재할 수 없었고, 이집트 문명 자체가 불가능했습니다. 따라서 범람 시기를 미리 아는 것은 국가의 존립과 직결된 문제였습니다.' },
          { t: 'p', text: '이집트인들은 수천 년의 관찰 끝에 놀라운 사실을 발견했습니다. 매년 특정 시기, 밤하늘에서 가장 밝게 빛나는 별 시리우스(Sirius)가 해가 뜨기 직전 동쪽 지평선에 처음으로 모습을 드러냅니다. 천문학 용어로 \'헬리아칼 라이징(heliacal rising)\'이라고 부르는 이 현상이 나타나고 나서 약 2주 뒤, 나일강이 범람을 시작했습니다. 지금의 달력으로 대략 7월 초입니다.' },
          { t: 'p', text: '이 상관관계의 정밀함은 현대의 관점에서도 인상적입니다. 시리우스의 헬리아칼 라이징과 나일 범람 사이의 연관성은 인과관계가 아닙니다. 두 현상은 모두 지구가 태양을 공전하는 같은 시기에 발생하는 독립적인 현상입니다. 그러나 이집트인들은 이 패턴을 수백 년의 관찰로 파악했고, 시리우스를 신뢰할 수 있는 달력의 기준으로 삼았습니다.' },
          { t: 'p', text: '이집트인들은 시리우스를 단순한 천문학적 기준점으로만 보지 않았습니다. 그들은 시리우스를 여신 소프데트(Sopdet)로 신격화했습니다. 소프데트는 나일 범람, 풍요, 새해를 가져오는 여신이었습니다. 신화적 해석과 천문학적 관찰이 하나로 융합된 것입니다. 이것이 점성술의 원형입니다 — 하늘의 현상을 정밀하게 관찰하고, 동시에 그것에 의미와 이야기를 부여하는 것.' },
          { t: 'p', text: '시리우스를 기준으로 삼은 이집트의 민간력(Civil Calendar)은 365일이었습니다. 이것은 역사상 가장 이른 태양력 중 하나로, 훗날 율리우스력과 그레고리력의 기반이 됩니다.' },
        ],
      },
      {
        heading: '데칸 시스템 — 서양 점성술 분야법의 뿌리',
        blocks: [
          { t: 'p', text: '이집트 천문학이 서양 점성술에 남긴 가장 구체적인 유산 중 하나가 데칸(Decan) 시스템입니다.' },
          { t: 'p', text: '이집트인들은 하늘의 황도대(태양이 지나가는 띠)를 36개 구역으로 나눴습니다. 각 구역에는 특정 별 또는 별 무리가 대응되며, 각 구역이 동쪽 지평선에서 떠오르는 데 약 10일이 걸립니다. 36개 구역 × 10일 = 360일. 이것이 이집트의 천문 달력 기초였습니다.' },
          { t: 'p', text: '이 36개 구역이 서양 점성술의 데칸 개념의 직접적 기원입니다. 서양 점성술에서 각 별자리는 30도로 나뉘고, 이 30도는 다시 10도씩 세 개의 데칸으로 세분됩니다. 예를 들어 양자리 1데칸(1~10도), 양자리 2데칸(11~20도), 양자리 3데칸(21~30도)처럼 말이죠. 각 데칸에는 다른 행성이 지배권을 가지며, 같은 양자리라도 어느 데칸에 태어났느냐에 따라 세부적 성격 차이가 있다고 봅니다. 이 체계의 뿌리가 5,000년 전 나일강 유역의 천문 관측이었습니다.' },
        ],
      },
      {
        heading: '덴데라 조디악 — 루브르에 있는 가장 오래된 황도대 지도',
        blocks: [
          { t: 'p', text: '파리 루브르 박물관 1층, 이집트 고대 유물 전시실에는 특별한 돌 부조가 있습니다. 직경 약 2.5미터의 원형 천장 부조로, \'덴데라 조디악(Dendera Zodiac)\'이라고 불립니다. 기원전 50년경, 이집트 남부 덴데라 지방의 하토르(Hathor) 신전 천장에 새겨진 것입니다.' },
          { t: 'p', text: '이 부조에는 황도 12궁이 모두 등장합니다. 양자리, 황소자리, 쌍둥이자리부터 물고기자리까지 — 현대 서양 점성술이 사용하는 12개 별자리가 거의 그대로 묘사되어 있습니다. 덴데라 조디악은 완전한 형태의 황도 12궁이 묘사된 가장 오래된 유물 중 하나입니다.' },
          { t: 'p', text: '흥미로운 점은, 덴데라 조디악이 순수한 이집트 산물이 아니라는 것입니다. 이 부조가 제작된 기원전 50년은 이집트가 이미 헬레니즘 문화권에 깊숙이 편입된 시기입니다. 알렉산더 대왕의 정복(기원전 332년) 이후, 그리스의 황도 12궁 체계가 이집트의 천문 전통과 융합되었습니다. 덴데라 조디악은 그 융합의 결과물입니다.' },
          { t: 'p', text: '이 부조는 1820년 프랑스 탐험대가 신전 천장에서 절단하여 가져왔습니다. 이집트 정부는 반환을 요구해왔으나 현재까지 루브르에 있습니다. 고고학적 보물의 귀환 문제는 여전히 현재진행형입니다.' },
        ],
      },
      {
        heading: '바빌로니아 → 이집트 → 그리스 — 황도 체계의 전파 경로',
        blocks: [
          { t: 'p', text: '현대 서양 점성술의 황도 12궁 체계는 어디서 왔을까요? 그 계보를 추적하면 메소포타미아의 바빌로니아 문명으로 거슬러 올라갑니다.' },
          { t: 'p', text: '황도 12궁의 원형은 기원전 7~5세기 바빌로니아에서 형성되었습니다. 바빌로니아 천문학자들은 수백 년의 정밀한 관측 기록을 바탕으로 태양, 달, 다섯 행성(수성·금성·화성·목성·토성)의 움직임을 예측하는 수학적 체계를 개발했습니다. 이들은 황도를 12개 30도 구역으로 나누어 각각에 이름을 붙였습니다 — 이것이 황도 12궁의 원형입니다. 이 시기의 점성술은 주로 국가와 왕의 운명을 예측하는 \'정치 점성술\'이었습니다. 개인의 운세가 아닌, 일식·월식·행성 합성 같은 천문 현상이 왕국에 어떤 의미를 가지는가를 해석했습니다.' },
          { t: 'p', text: '기원전 4세기, 알렉산더 대왕이 페르시아 제국을 정복하고 이집트까지 점령하면서 바빌로니아의 천문·점성술 지식이 그리스 세계로 흘러들어갔습니다. 그리스인들은 이 체계를 자신들의 철학적 전통 — 플라톤의 우주론, 아리스토텔레스의 원소 이론 — 과 결합했습니다. 국가 점성술은 개인 점성술로 발전했습니다. 사람의 출생 시각을 기록하고, 그 순간의 하늘을 분석해서 그 사람의 성격과 운명을 읽는 \'출생 차트(nativity chart)\' 시스템이 등장했습니다.' },
          { t: 'p', text: '기원후 2세기, 알렉산드리아의 수학자·천문학자 클라우디오스 프톨레마이오스가 이 모든 것을 집대성했습니다. 그의 저서 『테트라비블로스(Tetrabiblos)』는 그리스어로 \'네 권의 책\'이라는 뜻으로, 행성, 별자리, 하우스, 출생 차트 해석의 방법론을 체계적으로 정리한 점성술의 최초 완결판이었습니다. 이 책은 현대 서양 점성술의 직접적 원형입니다. 프톨레마이오스는 같은 시기에 『알마게스트(Almagest)』라는 천문학의 고전도 저술했습니다. 그는 점성술사이자 천문학자였으며, 그에게 두 분야는 구분되지 않았습니다.' },
        ],
      },
      {
        heading: '케플러도 점성술 차트를 그렸다 — 17세기 과학혁명까지의 공존',
        blocks: [
          { t: 'p', text: '현대인들은 "과학을 한다는 것"과 "점성술을 믿는다는 것"이 서로 모순된다고 생각합니다. 그러나 17세기 과학혁명 이전까지, 이 두 가지는 같은 학문의 두 면이었습니다.' },
          { t: 'p', text: '덴마크의 천문학자 티코 브라헤(1546~1601)는 망원경 이전 시대에 가장 정밀한 천체 관측 기록을 남긴 인물입니다. 그는 동시에 열렬한 점성술사였으며, 덴마크 왕실의 점성술 고문으로 활동했습니다. 그가 남긴 정밀한 행성 관측 데이터는 그의 조수 요하네스 케플러에게 전해졌습니다.' },
          { t: 'p', text: '요하네스 케플러(1571~1630)는 행성 운동의 세 가지 법칙을 발견한 근대 천문학의 아버지입니다. 그는 타원 궤도를 발견하고, 뉴턴에게 중력 법칙의 수학적 기반을 제공했습니다. 케플러는 또한 점성술 차트를 작성했습니다. 그는 자신의 어머니를 위한 출생 차트를 그렸고, 발렌슈타인 공작에게 점성술 예측을 제공했으며, 상당히 정확한 예측을 한 것으로 기록되어 있습니다. 케플러는 점성술을 전면 부정하지 않았습니다. 다만 그는 "모든 별이 모든 사람에게 영향을 준다는 식의 조잡한 점성술"을 비판했으며, 더 정밀하고 수학적인 점성술을 추구했습니다.' },
          { t: 'p', text: '갈릴레오 갈릴레이(1564~1642)도 피사 대학에서 의학과 수학을 가르치던 시절 점성술 강의를 했으며, 개인 고객을 위한 출생 차트를 작성했습니다. 당시 유럽 대학의 의학부에서는 점성술이 정규 커리큘럼의 일부였습니다. 히포크라테스 의학 전통에서 행성의 배치가 신체의 체액에 영향을 준다고 봤기 때문입니다.' },
          { t: 'image', src: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&auto=format&fit=crop&q=80', alt: '밤하늘과 별' },
        ],
      },
      {
        heading: '뉴턴의 중력과 두 학문의 이별 — 왜 분리되었나',
        blocks: [
          { t: 'p', text: '아이작 뉴턴(1643~1727)의 『프린키피아(Principia Mathematica)』 출판(1687년)은 천문학과 점성술의 결별을 상징하는 분기점입니다.' },
          { t: 'p', text: '뉴턴의 중력 법칙은 행성의 움직임을 완전히 수학적으로 설명했습니다. 더 이상 신비한 천상의 힘이나 신의 뜻을 가정하지 않아도 되었습니다. 달이 지구 주위를 도는 것, 사과가 떨어지는 것, 목성이 타원 궤도를 그리는 것 — 모두 하나의 수식으로 설명되었습니다.' },
          { t: 'p', text: '이 물리학적 패러다임 안에서, 행성이 인간의 성격이나 운명에 영향을 준다는 주장은 설 자리를 잃었습니다. 어떤 물리적 메커니즘으로 화성의 위치가 태어나는 아기의 성격을 결정한다는 말인가? 중력의 영향은 거리의 제곱에 반비례하므로, 출생 시 분만실 의사의 중력이 화성의 중력보다 훨씬 크다. 이런 반론이 힘을 얻었습니다.' },
          { t: 'p', text: '18~19세기를 거치면서 천문학은 완전히 물리학·수학의 영역으로 자리잡았고, 점성술은 대학 교과과정에서 퇴출되었습니다. 두 분야는 완전히 다른 경로를 걷기 시작했습니다. 천문학은 망원경, 분광기, 전파망원경을 거쳐 우주의 물리적 구조를 탐구했고, 점성술은 상징 해석과 심리적 도구의 영역으로 이동했습니다.' },
        ],
      },
      {
        heading: '독창적 분석 — 분리는 완성인가, 상실인가',
        blocks: [
          { t: 'p', text: '천문학과 점성술의 분리를 "과학이 미신을 몰아낸 진보"로만 보는 시각은 역사의 일부를 무시합니다.' },
          { t: 'p', text: '고대 이집트인들이 시리우스를 관찰했을 때, 그들은 두 가지를 동시에 했습니다. 첫째, 정밀한 천문 관측 — 시리우스의 헬리아칼 라이징 날짜를 기록하고 나일 범람과의 상관관계를 수백 년에 걸쳐 검증했습니다. 이것은 현대 과학의 관점에서도 유효한 경험적 관찰입니다. 둘째, 의미 부여 — 이 별에 소프데트라는 이름과 이야기를 주었습니다. 범람이 다가온다는 사실적 정보를 신화적 언어로 공동체에 전달했습니다.' },
          { t: 'p', text: '과학혁명은 첫 번째 능력을 극도로 발달시켰습니다. 현대 천문학은 시리우스까지의 거리를 8.6광년으로 측정하고, 그 표면 온도가 9,940켈빈임을 알며, 동반성 시리우스 B의 존재를 확인합니다. 그러나 두 번째 능력 — 하늘에서 인간 삶의 의미를 읽어내는 것 — 은 과학의 언어로 번역되지 않았습니다.' },
          { t: 'p', text: '점성술은 그 두 번째 기능을 이어받았습니다. 그것이 물리적 인과율에 기반하지 않더라도, 하늘의 리듬과 인간 삶의 리듬 사이에서 의미를 찾으려는 인류의 오래된 충동을 담고 있습니다. 5,000년 전 나일강 유역의 이집트 신관들이 시리우스를 바라보며 소프데트 여신의 귀환을 기다렸을 때, 그들이 경험한 것의 일부는 오늘날 별자리 앱을 열어보는 사람들의 경험 안에도 살아 있습니다.' },
          { t: 'p', text: '천문학과 점성술의 분리는 지식의 진보였지만, 동시에 하나의 통합된 하늘 읽기의 상실이기도 했습니다. 어느 것이 더 중요한가가 아니라, 두 언어가 각자의 영역에서 어떻게 공존할 수 있는지를 묻는 것이 더 풍요로운 질문일지 모릅니다.' },
        ],
      },
    ],
  },
  en: {
    intro:
      'Reading the stars to know when the river would rise sounds like superstition — but 5,000 years ago in Egypt it was science, and modern astronomers still respect the precision of those observations. This is the lineage of knowledge from the age when astronomy and astrology were one.',
    cta: 'Curious about your own sign?',
    sections: [
      {
        heading: 'Sirius and the Nile — the day a star wakes the river',
        blocks: [
          { t: 'image', src: 'https://images.unsplash.com/photo-1608178398319-48f814d0750c?w=800&auto=format&fit=crop&q=80', alt: 'Ancient Egyptian astronomy' },
          { t: 'p', text: 'Ancient Egyptian civilisation rested on the Nile. Each year the river flooded, laying down the fertile silt it carried from upstream. Without that flood there was no farming in Egypt, and no Egyptian civilisation: knowing in advance when it would come was a matter of the state’s survival.' },
          { t: 'p', text: 'After thousands of years of watching, the Egyptians found something remarkable. At a certain time each year, Sirius, the brightest star in the night sky, appears for the first time on the eastern horizon just before sunrise. About two weeks after that — the heliacal rising, in astronomical terms — the Nile began to rise. In today’s calendar, roughly early July.' },
          { t: 'p', text: 'The precision of that correlation is impressive even now. The link is not causal: both phenomena happen at the same point in Earth’s orbit and are independent. But the Egyptians identified the pattern through centuries of observation and used Sirius as a reliable calendar marker.' },
          { t: 'p', text: 'They did not see Sirius only as an astronomical marker. They made it a goddess, Sopdet, who brought the flood, abundance and the new year. Mythical interpretation and astronomical observation fused into one. That is the prototype of astrology: watching a phenomenon in the sky precisely while giving it meaning and story.' },
          { t: 'p', text: 'The Egyptian civil calendar, anchored on Sirius, had 365 days. It is one of the earliest solar calendars in history and the ancestor of the Julian and Gregorian calendars.' },
        ],
      },
      {
        heading: 'The decans — the root of the Western sign divisions',
        blocks: [
          { t: 'p', text: 'One of the most concrete legacies Egyptian astronomy left to Western astrology is the decan system.' },
          { t: 'p', text: 'The Egyptians divided the zodiac — the band the Sun travels — into 36 sections, each tied to a star or group of stars. Each section took about ten days to rise over the eastern horizon: 36 × 10 = 360 days, the base of the Egyptian astronomical calendar.' },
          { t: 'p', text: 'Those 36 sections are the direct origin of the decan in Western astrology, where each 30-degree sign is further divided into three ten-degree decans: the first decan of Aries (1–10°), the second (11–20°), the third (21–30°). A different planet rules each decan, and even within Aries a person’s character is read differently according to the decan of birth. The root of that system is astronomical observation on the Nile 5,000 years ago.' },
        ],
      },
      {
        heading: 'The Dendera zodiac — the oldest zodiac map in the Louvre',
        blocks: [
          { t: 'p', text: 'On the ground floor of the Louvre in Paris, in the Egyptian antiquities rooms, there is a remarkable stone relief: a circular ceiling carving about 2.5 metres across known as the Dendera zodiac. It was cut around 50 BCE into the ceiling of the temple of Hathor at Dendera in southern Egypt.' },
          { t: 'p', text: 'All twelve signs appear on it — Aries, Taurus, Gemini through to Pisces — almost exactly the twelve that modern Western astrology uses. It is among the oldest surviving objects showing the complete zodiac.' },
          { t: 'p', text: 'Interestingly, the Dendera zodiac is not purely Egyptian. By 50 BCE Egypt was deeply part of the Hellenistic world; after Alexander’s conquest in 332 BCE the Greek zodiac merged with Egyptian astronomical tradition, and this relief is the product of that fusion.' },
          { t: 'p', text: 'A French expedition cut it from the temple ceiling and took it in 1820. The Egyptian government has asked for its return; it remains in the Louvre, and the question of returning archaeological treasures is still live.' },
        ],
      },
      {
        heading: 'Babylon → Egypt → Greece — how the zodiac travelled',
        blocks: [
          { t: 'p', text: 'Where did the twelve signs of Western astrology come from? Trace the lineage and it leads back to Babylonian Mesopotamia.' },
          { t: 'p', text: 'The prototype of the zodiac formed in Babylon between the seventh and fifth centuries BCE. Babylonian astronomers built, on centuries of careful records, a mathematical system predicting the movements of the Sun, Moon and five planets. They divided the ecliptic into twelve 30-degree sections and named each: the origin of the twelve signs. Astrology then was largely political — not personal fortune but what eclipses and planetary conjunctions meant for the kingdom.' },
          { t: 'p', text: 'In the fourth century BCE Alexander conquered the Persian empire and Egypt, and Babylonian astronomy and astrology flowed into the Greek world. The Greeks joined it to their own philosophy — Plato’s cosmology, Aristotle’s theory of elements — and state astrology became personal astrology: the birth chart, recording the moment of birth and reading character and fate from the sky at that instant.' },
          { t: 'p', text: 'In the second century CE the Alexandrian mathematician and astronomer Claudius Ptolemy gathered all of it together. His Tetrabiblos — "four books" in Greek — set out the method for reading planets, signs, houses and birth charts: the first complete manual of astrology and the direct ancestor of the modern Western tradition. In the same period he wrote the Almagest, a classic of astronomy. He was an astrologer and an astronomer, and for him the two were not separate.' },
        ],
      },
      {
        heading: 'Even Kepler drew charts — coexistence until the scientific revolution',
        blocks: [
          { t: 'p', text: 'Modern readers assume that "doing science" and "believing astrology" contradict each other. Until the scientific revolution of the seventeenth century, they were two faces of one discipline.' },
          { t: 'p', text: 'The Danish astronomer Tycho Brahe (1546–1601) left the most precise observations of the pre-telescope age. He was also a keen astrologer and served as astrological adviser to the Danish court, and his precise planetary data passed to his assistant Johannes Kepler.' },
          { t: 'p', text: 'Johannes Kepler (1571–1630), who found the three laws of planetary motion and gave Newton the mathematical ground for gravity, also drew astrological charts. He cast one for his own mother, gave predictions to Duke Wallenstein and is recorded as having made some notably accurate ones. Kepler did not reject astrology outright; he criticised the crude kind that claims every star affects everyone, and sought a more precise, mathematical astrology.' },
          { t: 'p', text: 'Galileo Galilei (1564–1642) lectured on astrology while teaching medicine and mathematics at Pisa and cast charts for private clients. In European medical faculties of the time astrology was part of the curriculum, since the Hippocratic tradition held that planetary placements affected the body’s humours.' },
          { t: 'image', src: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&auto=format&fit=crop&q=80', alt: 'The night sky and stars' },
        ],
      },
      {
        heading: 'Newton’s gravity and the parting of the two',
        blocks: [
          { t: 'p', text: 'The publication of Isaac Newton’s Principia Mathematica in 1687 marks the parting of astronomy and astrology.' },
          { t: 'p', text: 'Newton’s law of gravity explained planetary motion completely in mathematics. No mysterious celestial force or divine intention had to be assumed: the Moon going round Earth, an apple falling, Jupiter tracing an ellipse — all of it in one formula.' },
          { t: 'p', text: 'Within that physics there was no room for the claim that planets shape human character or fate. By what physical mechanism could the position of Mars decide the character of a newborn? Gravitational influence falls with the square of distance, so the doctor in the delivery room exerts far more gravity than Mars. Such objections gained force.' },
          { t: 'p', text: 'Through the eighteenth and nineteenth centuries astronomy settled fully into physics and mathematics, astrology left the university curriculum, and the two took entirely different roads: astronomy through telescopes, spectroscopes and radio telescopes into the physical structure of the universe; astrology into symbolic interpretation and psychological tools.' },
        ],
      },
      {
        heading: 'Was the separation a completion or a loss?',
        blocks: [
          { t: 'p', text: 'Seeing the split only as "science driving out superstition" ignores part of the history.' },
          { t: 'p', text: 'When the Egyptians watched Sirius they did two things at once. First, precise observation: recording the date of the heliacal rising and testing its correlation with the flood over centuries — empirical work that holds up by modern standards. Second, giving meaning: naming the star Sopdet and telling its story, carrying the factual news that the flood was coming to the community in mythical language.' },
          { t: 'p', text: 'The scientific revolution developed the first capacity to an extreme. Modern astronomy measures Sirius at 8.6 light years, knows its surface at about 9,940 kelvin, and confirms its companion Sirius B. But the second capacity — reading the meaning of human life in the sky — was not translated into the language of science.' },
          { t: 'p', text: 'Astrology inherited that second function. Even without a physical causal basis, it carries a very old human urge to find meaning between the rhythm of the sky and the rhythm of a life. When Egyptian priests looked at Sirius 5,000 years ago and awaited the return of Sopdet, part of what they experienced lives on in someone opening a horoscope app today.' },
          { t: 'p', text: 'The separation was an advance in knowledge and, at the same time, the loss of a single integrated reading of the sky. Perhaps the richer question is not which mattered more, but how the two languages can coexist in their own domains.' },
        ],
      },
    ],
  },
  ja: {
    intro:
      '星を見て川がいつ氾濫するかを予測した——迷信のように聞こえますか。5000年前のエジプト人にとってそれは科学でした。そしてその観察の精密さは現代の天文学者も認めています。天文学と占星術がひとつだった時代、その知識の系譜をたどります。',
    cta: '自分の星座の運勢が気になったら',
    sections: [
      {
        heading: 'シリウスとナイル川 — 星が川を起こす日',
        blocks: [
          { t: 'image', src: 'https://images.unsplash.com/photo-1608178398319-48f814d0750c?w=800&auto=format&fit=crop&q=80', alt: '古代エジプトの天文学' },
          { t: 'p', text: '古代エジプト文明の基盤はナイル川でした。ナイルは毎年氾濫し、上流から運んだ肥沃な土砂を流域に積もらせます。この氾濫がなければエジプトの農業は成り立たず、文明そのものが不可能でした。だからこそ氾濫の時期を前もって知ることは、国家の存続に直結する問題でした。' },
          { t: 'p', text: 'エジプト人は数千年の観察のすえ、驚くべき事実を見つけます。毎年一定の時期、夜空でもっとも明るいシリウスが、日の出直前に東の地平線に初めて姿を見せる。天文学で「ヘリアカル・ライジング」と呼ばれるこの現象のあと約2週間で、ナイルが氾濫を始めました。今の暦でおよそ7月初めです。' },
          { t: 'p', text: 'この相関の精密さは現代の目にも印象的です。シリウスのヘリアカル・ライジングとナイルの氾濫に因果関係はありません。どちらも地球が太陽を公転する同じ時期に起きる独立した現象です。しかしエジプト人はこのパターンを数百年の観察でつかみ、シリウスを信頼できる暦の基準にしました。' },
          { t: 'p', text: 'エジプト人はシリウスを単なる天文学的な目印とは見ていませんでした。シリウスを女神ソプデトとして神格化したのです。ソプデトは氾濫、豊穣、新年をもたらす女神でした。神話的な解釈と天文学的観察がひとつに溶け合っています。これが占星術の原型です——空の現象を精密に観察し、同時にそこに意味と物語を与えること。' },
          { t: 'p', text: 'シリウスを基準にしたエジプトの民用暦は365日でした。歴史上もっとも早い太陽暦のひとつで、のちのユリウス暦とグレゴリオ暦の土台になります。' },
        ],
      },
      {
        heading: 'デカン体系 — 西洋占星術の区分法の根',
        blocks: [
          { t: 'p', text: 'エジプト天文学が西洋占星術に残したもっとも具体的な遺産のひとつがデカン（十分区）の体系です。' },
          { t: 'p', text: 'エジプト人は黄道——太陽が通る帯——を36の区域に分けました。各区域には特定の星や星の集まりが対応し、それぞれが東の地平線から昇るのに約10日かかります。36 × 10 = 360日。これがエジプトの天文暦の基礎でした。' },
          { t: 'p', text: 'この36区域が西洋占星術のデカンの直接の起源です。西洋占星術では各星座が30度に分けられ、その30度がさらに10度ずつ三つのデカンに細分されます。たとえば牡羊座の第1デカン（1〜10度）、第2デカン（11〜20度）、第3デカン（21〜30度）のように。各デカンには別の惑星が支配権を持ち、同じ牡羊座でもどのデカンに生まれたかで細かな性格の差があるとされます。この体系の根が5000年前のナイル流域の天体観測でした。' },
        ],
      },
      {
        heading: 'デンデラの黄道帯 — ルーヴルにある最古の黄道図',
        blocks: [
          { t: 'p', text: 'パリのルーヴル美術館1階、エジプト古代遺物の展示室に特別な石の浮彫があります。直径約2.5メートルの円形の天井浮彫で、「デンデラの黄道帯」と呼ばれます。紀元前50年ごろ、エジプト南部デンデラのハトホル神殿の天井に刻まれたものです。' },
          { t: 'p', text: 'この浮彫には黄道十二宮がすべて登場します。牡羊座、牡牛座、双子座から魚座まで——現代の西洋占星術が使う12星座がほぼそのまま描かれています。デンデラの黄道帯は、完全な形の黄道十二宮が描かれた最古の遺物のひとつです。' },
          { t: 'p', text: '興味深いのは、デンデラの黄道帯が純粋なエジプトの産物ではないことです。制作された紀元前50年、エジプトはすでにヘレニズム文化圏に深く組み込まれていました。アレクサンドロス大王の征服（紀元前332年）以降、ギリシャの黄道十二宮がエジプトの天文伝統と融合した。デンデラの黄道帯はその融合の産物です。' },
          { t: 'p', text: 'この浮彫は1820年にフランスの探検隊が神殿の天井から切り取って持ち去りました。エジプト政府は返還を求めてきましたが、今もルーヴルにあります。考古学的な宝物の返還は今も進行中の問題です。' },
        ],
      },
      {
        heading: 'バビロニア → エジプト → ギリシャ — 黄道の伝播',
        blocks: [
          { t: 'p', text: '現代の西洋占星術の黄道十二宮はどこから来たのか。系譜をたどるとメソポタミアのバビロニア文明に行き着きます。' },
          { t: 'p', text: '黄道十二宮の原型は紀元前7〜5世紀のバビロニアで形づくられました。バビロニアの天文家たちは数百年の精密な観測記録をもとに、太陽・月・五惑星の動きを予測する数学的体系をつくります。黄道を12の30度区域に分け、それぞれに名前を与えた——これが十二宮の原型です。当時の占星術は主に国家と王の運命を占う「政治占星術」でした。個人の運勢ではなく、日食・月食や惑星の合といった天文現象が王国にとって何を意味するかを読み解きました。' },
          { t: 'p', text: '紀元前4世紀、アレクサンドロス大王がペルシア帝国を征服しエジプトまで占領すると、バビロニアの天文・占星術の知識がギリシャ世界へ流れ込みます。ギリシャ人はこの体系を自らの哲学的伝統——プラトンの宇宙論、アリストテレスの元素論——と結びつけました。国家占星術は個人占星術へと発展し、生まれた時刻を記録し、その瞬間の空を分析して性格と運命を読む「出生図（ネイタルチャート）」の体系が生まれます。' },
          { t: 'p', text: '紀元後2世紀、アレクサンドリアの数学者・天文学者クラウディオス・プトレマイオスがこれを集大成しました。著書『テトラビブロス』はギリシャ語で「四つの書」を意味し、惑星、星座、ハウス、出生図の読み方を体系的にまとめた占星術最初の完成版でした。現代の西洋占星術の直接の原型です。プトレマイオスは同じ時期に天文学の古典『アルマゲスト』も書いています。彼は占星術師であり天文学者であり、その二つは分かれていませんでした。' },
        ],
      },
      {
        heading: 'ケプラーも占星術の図を描いた — 17世紀の科学革命までの共存',
        blocks: [
          { t: 'p', text: '現代人は「科学をすること」と「占星術を信じること」が矛盾すると考えます。しかし17世紀の科学革命までは、この二つは同じ学問の二つの面でした。' },
          { t: 'p', text: 'デンマークの天文学者ティコ・ブラーエ（1546〜1601）は望遠鏡以前の時代にもっとも精密な天体観測記録を残した人物です。同時に熱心な占星術師で、デンマーク王室の占星術顧問を務めました。彼の精密な惑星観測データは助手ヨハネス・ケプラーに引き継がれます。' },
          { t: 'p', text: 'ヨハネス・ケプラー（1571〜1630）は惑星運動の三法則を見つけた近代天文学の父です。楕円軌道を発見し、ニュートンに重力法則の数学的基盤を与えました。ケプラーは占星術の図も描いています。自分の母のために出生図を描き、ヴァレンシュタイン公に占星術の予測を提供し、かなり正確な予測をしたと記録されています。ケプラーは占星術を全面否定していません。ただ「すべての星がすべての人に影響するという粗雑な占星術」を批判し、より精密で数学的な占星術を求めました。' },
          { t: 'p', text: 'ガリレオ・ガリレイ（1564〜1642）もピサ大学で医学と数学を教えていたころ占星術の講義を行い、個人客のために出生図を描いていました。当時のヨーロッパの大学の医学部では占星術が正規のカリキュラムの一部でした。ヒポクラテス医学の伝統で、惑星の配置が体の体液に影響すると考えられていたからです。' },
          { t: 'image', src: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&auto=format&fit=crop&q=80', alt: '夜空と星' },
        ],
      },
      {
        heading: 'ニュートンの重力と二つの学問の別れ',
        blocks: [
          { t: 'p', text: 'アイザック・ニュートン（1643〜1727）の『プリンキピア』刊行（1687年）は、天文学と占星術の別れを象徴する分岐点です。' },
          { t: 'p', text: 'ニュートンの重力法則は惑星の動きを完全に数学で説明しました。神秘的な天上の力や神の意志を仮定する必要はもうありません。月が地球の周りを回ること、りんごが落ちること、木星が楕円を描くこと——すべて一つの式で説明されました。' },
          { t: 'p', text: 'この物理の枠組みのなかで、惑星が人の性格や運命に影響するという主張は居場所を失います。どんな物理的仕組みで火星の位置が生まれた子の性格を決めるのか。重力の影響は距離の二乗に反比例するので、出産時に分娩室の医師が及ぼす重力のほうが火星の重力よりずっと大きい。こうした反論が力を得ました。' },
          { t: 'p', text: '18〜19世紀を通じて天文学は完全に物理学・数学の領域に落ち着き、占星術は大学の課程から外れます。二つの分野はまったく別の道を歩き始めました。天文学は望遠鏡、分光器、電波望遠鏡を通じて宇宙の物理的構造を探り、占星術は象徴の解釈と心理的な道具の領域へ移りました。' },
        ],
      },
      {
        heading: '分離は完成か、喪失か',
        blocks: [
          { t: 'p', text: '天文学と占星術の分離を「科学が迷信を追い払った進歩」とだけ見る視点は、歴史の一部を無視します。' },
          { t: 'p', text: '古代エジプト人がシリウスを観察したとき、彼らは同時に二つのことをしていました。第一に精密な天体観測——シリウスのヘリアカル・ライジングの日付を記録し、ナイルの氾濫との相関を数百年かけて確かめました。これは現代科学の観点でも有効な経験的観察です。第二に意味づけ——この星にソプデトという名と物語を与え、氾濫が近いという事実の情報を神話の言葉で共同体に伝えました。' },
          { t: 'p', text: '科学革命は第一の能力を極限まで発達させました。現代天文学はシリウスまでの距離を8.6光年と測り、表面温度が約9940ケルビンであることを知り、伴星シリウスBの存在を確認します。しかし第二の能力——空から人の生の意味を読むこと——は科学の言葉に翻訳されませんでした。' },
          { t: 'p', text: '占星術はその第二の機能を受け継ぎました。物理的な因果に基づかなくても、空のリズムと人の生のリズムのあいだに意味を探す人類の古い衝動を宿しています。5000年前のナイル流域の神官たちがシリウスを見上げソプデトの帰りを待ったとき、彼らが経験したものの一部は、今日星座アプリを開く人の経験のなかにも生きています。' },
          { t: 'p', text: '二つの分離は知識の進歩であり、同時にひとつの統合された空の読みの喪失でもありました。どちらが大切かではなく、二つの言葉がそれぞれの領域でどう共存できるかを問うほうが、豊かな問いなのかもしれません。' },
        ],
      },
    ],
  },
};
