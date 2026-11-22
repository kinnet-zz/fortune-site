import type { BlogArticleContent } from './types';

export const twinStudy: BlogArticleContent = {
  related: ['nasa-ophiuchus-13th-zodiac', 'ancient-egypt-astronomy'],
  ko: {
    intro:
      '만약 별자리가 성격과 운명을 결정한다면, 같은 날 같은 시각에 태어난 사람들은 비슷한 삶을 살아야 합니다. 한 연구자가 수십 년간 2,000명 이상을 실제로 추적했습니다. 그 결과는 점성술에 대한 가장 불편한 질문을 남겼습니다.',
    cta: '나의 별자리 운세가 궁금하다면?',
    sections: [
      {
        heading: '제프리 딘의 타임트윈 연구 — 2,101명, 수십 년의 추적',
        blocks: [
          { t: 'image', src: 'https://images.unsplash.com/photo-1543722530-d2c3201371e6?w=800&auto=format&fit=crop&q=80', alt: '데이터 분석' },
          { t: 'p', text: '심리학자이자 점성술 연구자인 제프리 딘은 2003년 영국의 장기 추적 자료를 이용해 출생 시각이 매우 가까운 2,101명의 \'타임트윈(time twins)\'을 분석한 결과를 발표했습니다.' },
          { t: 'p', text: '출생 시각이 거의 동일하다는 것은 점성술적으로 거의 동일한 출생 차트를 가진다는 의미입니다. 태양 별자리는 물론이고, 달 별자리, 상승궁, 행성들의 위치, 하우스 배치 — 모든 것이 사실상 같습니다. 만약 점성술이 성격이나 운명에 실질적인 영향을 준다면, 이 타임트윈들은 통계적으로 유사한 특성을 보여야 합니다.' },
          { t: 'p', text: '연구진은 장기간 축적된 지능, 불안 수준, 직업, 결혼 여부, 사고 경험, 성격 검사 등의 항목을 비교했습니다. 분석에서는 출생 차트가 비슷한 사람들 사이에 점성술이 예측하는 일관된 유사성이 확인되지 않았습니다.' },
          { t: 'p', text: '딘은 이 연구를 통해 "출생 차트가 성격이나 삶의 사건을 결정한다는 주장은 지지되지 않는다"고 결론지었습니다. 그는 원래 점성술의 가능성을 믿었던 연구자였기에, 이 결론은 그 자신에게도 불편한 것이었다고 회고했습니다.' },
        ],
      },
      {
        heading: '숀 칼슨의 이중맹검 실험 — Nature가 게재한 점성술 검증',
        blocks: [
          { t: 'p', text: '1985년, 물리학자 숀 칼슨은 세계 최고의 과학 저널 중 하나인 Nature에 점성술을 검증한 실험 결과를 발표했습니다. 이 실험은 설계의 엄밀함으로 지금도 자주 인용됩니다.' },
          { t: 'p', text: '실험 방식은 이중맹검(double-blind) 구조였습니다. 미국에서 활동하는 점성술사 28명이 참여했습니다. 이들에게는 자원자들의 출생 정보(날짜, 시각, 장소)로 작성한 출생 차트가 주어졌습니다. 그리고 각 차트에 대해, 실제 그 사람의 성격 프로파일(캘리포니아 심리 검사, CPI)과 무작위로 선택된 두 가지 가짜 프로파일이 제공되었습니다. 점성술사들은 어느 것이 진짜인지 골라야 했습니다.' },
          { t: 'p', text: '만약 점성술에 예측력이 있다면, 점성술사들은 33%보다 높은 정답률을 보여야 합니다. 결과는 34%였습니다. 통계적으로 무작위 선택(33%)과 차이가 없었습니다. 점성술사들의 출생 차트 해석 능력이 검증되지 않은 것입니다.' },
          { t: 'p', text: '칼슨의 실험이 중요한 이유는 사전에 점성술사 그룹과 설계를 함께 논의했다는 점입니다. 참여 점성술사들은 실험 방식이 공정하다고 사전에 동의했습니다. 따라서 "실험 조건이 불공정했다"는 반론이 제기되기 어렵습니다.' },
        ],
      },
      {
        heading: '화성 효과 — 점성술이 가장 희망을 걸었던 연구',
        blocks: [
          { t: 'p', text: '프랑스의 심리학자 미셸 고클랭은 1955년 흥미로운 통계를 발표했습니다. 저명한 운동선수들이 화성이 막 떠오르거나 중천에 걸리는 시각에 태어나는 비율이 우연보다 높다는 것이었습니다. 이른바 \'화성 효과(Mars Effect)\'입니다.' },
          { t: 'p', text: '이 연구는 점성술 지지자들에게 큰 희망을 주었습니다. 처음으로 통계적으로 유의미한 천체-인간 연관성의 가능성이 제기된 것처럼 보였기 때문입니다. 회의론자들도 이 결과를 진지하게 검토했습니다.' },
          { t: 'p', text: '그러나 이후 수십 년간 진행된 대규모 독립적 재현 실험들은 화성 효과를 확인하는 데 실패했습니다. 1976년 미국 회의론자 위원회(CSICOP)의 검증, 1990년대 벨기에·프랑스·독일의 대규모 재현 시도 — 어느 것도 원래 연구의 통계적 유의성을 재현하지 못했습니다. 연구자들은 고클랭의 원래 데이터에 선택 편향 가능성을 지적했습니다.' },
          { t: 'p', text: '오늘날 화성 효과는 재현 실패로 인해 과학 커뮤니티에서 통계적 인공물로 간주되는 것이 일반적입니다. 점성술 지지자들의 가장 유력한 과학적 근거가 사라진 셈입니다.' },
        ],
      },
      {
        heading: '점성술이 과학적 반증에도 살아남는 이유 — 반증 불가능성의 구조',
        blocks: [
          { t: 'p', text: '과학철학자 칼 포퍼는 어떤 이론이 과학적이려면 \'반증 가능(falsifiable)\'해야 한다고 주장했습니다. 즉, 틀렸음을 증명할 수 있는 실험이 원칙적으로 존재해야 한다는 것입니다.' },
          { t: 'p', text: '점성술의 독특한 구조를 살펴보면, 이것이 반증하기 매우 어려운 이유가 드러납니다. 실험 결과가 점성술 예측과 맞지 않을 때, 점성술 옹호자들이 사용하는 표준적인 반론은 다음과 같습니다. "태양 별자리만 봐서는 안 된다. 달 별자리, 상승궁, 모든 행성의 배치, 하우스, 상호 관계를 전부 고려해야 한다." 혹은 "차트가 같아도 사람마다 그 에너지를 다르게 표현한다."' },
          { t: 'p', text: '이 반론들은 어느 정도 내부적으로 일관성이 있습니다. 문제는 이 구조가 어떤 결과가 나와도 항상 탈출구를 제공한다는 점입니다. 예측이 맞으면 점성술이 맞은 것이고, 예측이 틀리면 "완전한 차트를 보지 않았기 때문"입니다. 이런 구조의 이론은 원칙적으로 과학적 방법론으로 반증하기 어렵습니다.' },
          { t: 'p', text: '이것이 점성술을 "나쁜" 것으로 만드는 것은 아닙니다. 다만 점성술은 과학이 아닌, 다른 카테고리의 지식 체계라는 것을 인정해야 한다는 의미입니다. 심리학, 윤리학, 예술 비평처럼 과학적 방법론으로 완전히 환원되지 않지만 인간의 삶에 실질적인 가치를 주는 분야들이 있습니다.' },
        ],
      },
      {
        heading: '과학적 예측력 없음 ≠ 심리적·문화적 가치 없음',
        blocks: [
          { t: 'p', text: '위의 연구들이 말하는 것과 말하지 않는 것을 정확하게 구분하는 것이 중요합니다.' },
          { t: 'p', text: '이 연구들이 말하는 것: 출생 차트의 행성 배치가 성격, IQ, 직업, 결혼 여부 등 측정 가능한 삶의 변수들을 통계적으로 유의미하게 예측하지 못한다는 것입니다.' },
          { t: 'p', text: '이 연구들이 말하지 않는 것: 점성술적 자기 서술이 심리적으로 도움이 되는지, 점성술 상담이 내담자에게 의미 있는 성찰 기회를 주는지, 별자리 언어가 자기 이해와 타인 이해에 유용한 틀이 될 수 있는지에 대해서입니다.' },
          { t: 'p', text: '심리학자 칼 융은 점성술의 상징을 인류 공통의 심층 심리적 원형(Archetype)으로 봤습니다. 그는 별자리가 행성의 물리적 힘이 아니라, 인간 무의식의 집단적 패턴을 반영하는 상징 언어로서 가치가 있다고 주장했습니다. 현대 심리 점성술은 이 관점 위에서 발전하고 있습니다.' },
          { t: 'p', text: '실제로 많은 사람들이 별자리 해석을 읽으며 "이게 나를 정확히 표현하는 것 같다"는 감각을 경험합니다. 이것이 단순한 바넘 효과(모호한 서술을 자신에게 맞는 것으로 믿는 심리)인지, 아니면 상징 언어가 실제로 자기 성찰을 촉진하는 것인지는 별개의 연구가 필요한 질문입니다.' },
        ],
      },
      {
        heading: '독창적 분석 — 쌍둥이 연구가 드러내는 두 가지 오류',
        blocks: [
          { t: 'p', text: '쌍둥이 연구와 점성술 검증 실험들이 누적되면서, 이 논쟁에서 양쪽 모두 저지르는 오류가 보입니다.' },
          { t: 'p', text: '**점성술 과신자의 오류:** "내 차트를 보면 내 성격이 정확히 나온다"는 개인적 경험을 "점성술은 과학적으로 유효하다"는 주장으로 비약하는 것입니다. 개인적 공명(personal resonance)과 통계적 예측력(statistical predictive power)은 전혀 다른 것입니다. 어떤 것이 나에게 의미 있게 느껴진다는 것이 그것이 객관적 사실이라는 증거가 아닙니다.' },
          { t: 'p', text: '**점성술 부정자의 오류:** "과학적 예측력이 없으므로 점성술은 완전히 쓸모없다"는 결론입니다. 이는 인간 지식의 가치를 과학적 측정 가능성으로만 환원하는 과학주의적 오류입니다. 시, 철학, 종교, 신화는 과학적 예측력이 없지만 인간의 삶에 깊은 의미와 방향성을 제공합니다. 점성술도 이 범주에 있을 수 있습니다.' },
          { t: 'p', text: '가장 지적으로 정직한 입장은 이렇습니다. 현재까지의 과학적 증거는 점성술의 예측적 타당성을 지지하지 않습니다. 동시에, 점성술이 제공하는 상징적 언어와 자기 성찰의 틀은 그 과학적 타당성과 무관하게 많은 사람들에게 실질적인 심리적·문화적 가치를 줍니다. 이 두 사실은 동시에 참일 수 있습니다.' },
          { t: 'p', text: '2,101명의 타임트윈을 수십 년간 추적한 딘의 연구가 점성술에 던진 질문은 이것입니다. "당신이 점성술에서 얻는 것은 정확히 무엇인가?" 만약 그 답이 "예측의 정확성"이라면, 데이터는 불편한 진실을 가리킵니다. 그러나 그 답이 "자기 이해의 언어, 성찰의 계기, 불확실한 세계에서의 방향감"이라면, 이 연구는 그것을 부정하지 않습니다.' },
        ],
      },
      {
        heading: '참고 자료',
        blocks: [
          {
            t: 'links',
            items: [
              { label: 'Shawn Carlson, “A double-blind test of astrology” (Nature, 1985)', href: 'https://doi.org/10.1038/318419a0', note: '전문 점성술사가 참여한 이중맹검 실험의 원문입니다.' },
              { label: 'Geoffrey Dean & Ivan W. Kelly, “Is Astrology Relevant to Consciousness and Psi?” (2003)', href: 'https://www.ingentaconnect.com/content/imp/jcs/2003/00000010/F0020006/art00010', note: '타임트윈 자료와 점성술 검증 연구를 검토한 논문입니다.' },
            ],
          },
        ],
      },
    ],
  },
  en: {
    intro:
      'If the zodiac decided character and fate, people born on the same day at the same time should lead similar lives. One researcher actually followed more than 2,000 of them for decades — and the result left astrology its most uncomfortable question.',
    cta: 'Curious about your own sign?',
    sections: [
      {
        heading: 'Geoffrey Dean’s time twins — 2,101 people over decades',
        blocks: [
          { t: 'image', src: 'https://images.unsplash.com/photo-1543722530-d2c3201371e6?w=800&auto=format&fit=crop&q=80', alt: 'Data analysis' },
          { t: 'p', text: 'In 2003 the psychologist and astrology researcher Geoffrey Dean published an analysis using British longitudinal data on 2,101 "time twins" — people born within minutes of one another.' },
          { t: 'p', text: 'Nearly the same birth time means nearly the same birth chart. Sun sign, moon sign, rising sign, planetary positions, house placements — all effectively identical. If astrology genuinely shapes character or fate, those time twins should show statistically similar traits.' },
          { t: 'p', text: 'The researchers compared long-term measures: intelligence, anxiety levels, occupation, marital status, accidents experienced, personality tests. The analysis found no consistent similarity of the kind astrology predicts among people with similar charts.' },
          { t: 'p', text: 'Dean concluded that the claim that a birth chart determines personality or life events is not supported. He had originally believed astrology might be real, and recalled that the conclusion was uncomfortable for him too.' },
        ],
      },
      {
        heading: 'Shawn Carlson’s double-blind test in Nature',
        blocks: [
          { t: 'p', text: 'In 1985 the physicist Shawn Carlson published, in Nature, one of science’s leading journals, the results of an experiment testing astrology. It is still often cited for the rigour of its design.' },
          { t: 'p', text: 'The design was double-blind, with 28 practising American astrologers. Each was given the birth data of volunteers (date, time, place) and a birth chart. For each chart they were offered the volunteer’s actual personality profile, from the California Psychological Inventory, alongside two decoys chosen at random. The astrologers had to pick the real one.' },
          { t: 'p', text: 'If astrology had predictive power, they should have scored above 33%. They scored 34% — statistically indistinguishable from random. The astrologers’ ability to read a chart was not demonstrated.' },
          { t: 'p', text: 'Carlson’s test matters because the design was agreed with a group of astrologers beforehand. The participating astrologers accepted in advance that the method was fair, which makes "the conditions were unfair" hard to argue.' },
        ],
      },
      {
        heading: 'The Mars effect — where astrology placed its hope',
        blocks: [
          { t: 'p', text: 'In 1955 the French psychologist Michel Gauquelin published an intriguing statistic: eminent athletes seemed to be born more often than chance would allow at times when Mars was just rising or at its highest point. This became the "Mars effect".' },
          { t: 'p', text: 'It gave astrology’s supporters great hope, appearing for the first time to raise a statistically significant link between the sky and human lives. Sceptics examined it seriously too.' },
          { t: 'p', text: 'But large independent replications over the following decades failed to confirm it: the 1976 test by the American sceptics’ committee CSICOP, and large attempts in Belgium, France and Germany in the 1990s, none reproduced the original significance. Researchers pointed to possible selection bias in Gauquelin’s original data.' },
          { t: 'p', text: 'Today the Mars effect is generally regarded in the scientific community as a statistical artefact, since it could not be replicated. Astrology’s strongest scientific evidence had gone.' },
        ],
      },
      {
        heading: 'Why astrology survives disproof — the structure of unfalsifiability',
        blocks: [
          { t: 'p', text: 'The philosopher of science Karl Popper argued that a theory is scientific only if it is falsifiable: there must in principle be an experiment that could show it false.' },
          { t: 'p', text: 'Look at astrology’s structure and you can see why it is very hard to falsify. When results do not match its predictions, the standard reply is: "You cannot look only at the sun sign — you must include the moon sign, the rising sign, all planetary positions, the houses and their aspects." Or: "Even with the same chart, each person expresses the energy differently."' },
          { t: 'p', text: 'Those replies are internally coherent to a degree. The problem is that this structure always provides an escape, whatever the result: if the prediction holds, astrology was right; if it fails, the chart was incomplete. A theory built that way cannot in principle be refuted by scientific method.' },
          { t: 'p', text: 'That does not make astrology "bad". It means astrology must be acknowledged as a different category of knowledge, not a science — like psychology, ethics or art criticism, which are not fully reducible to scientific method yet give real value to human life.' },
        ],
      },
      {
        heading: 'No predictive power is not the same as no value',
        blocks: [
          { t: 'p', text: 'It matters to separate precisely what these studies say from what they do not.' },
          { t: 'p', text: 'What they say: planetary placements in a birth chart do not statistically predict measurable life variables such as personality, IQ, occupation or marital status.' },
          { t: 'p', text: 'What they do not say: whether astrological self-description helps psychologically; whether an astrology consultation gives a client a meaningful occasion for reflection; whether the language of the signs can be a useful frame for understanding oneself and others.' },
          { t: 'p', text: 'Carl Jung saw astrological symbols as archetypes of a shared human deep psychology. He argued that the value of the signs lies not in a physical force from the planets but in a symbolic language reflecting the collective patterns of the unconscious. Modern psychological astrology developed on that view.' },
          { t: 'p', text: 'Many people reading a sign description feel "this describes me exactly". Whether that is simply the Barnum effect — believing a vague description fits you — or whether symbolic language really prompts self-reflection is a separate question that needs its own research.' },
        ],
      },
      {
        heading: 'What the twin research exposes — two errors',
        blocks: [
          { t: 'p', text: 'As the twin research and the astrology tests accumulate, an error on each side of the argument becomes visible.' },
          { t: 'p', text: '**The over-believer’s error:** leaping from the personal experience "my chart describes me exactly" to the claim "astrology is scientifically valid". Personal resonance and statistical predictive power are entirely different things; something feeling meaningful to me is not evidence that it is objectively true.' },
          { t: 'p', text: '**The denier’s error:** concluding that because there is no predictive power astrology is worthless. That reduces the value of human knowledge to what science can measure — a scientistic error. Poetry, philosophy, religion and myth have no predictive power, yet give human life deep meaning and direction. Astrology may belong in that category.' },
          { t: 'p', text: 'The most intellectually honest position is this: the scientific evidence so far does not support astrology’s predictive validity, and at the same time the symbolic language and frame for self-reflection it offers give many people real psychological and cultural value regardless of that. Both can be true at once.' },
          { t: 'p', text: 'The question Dean’s decades of following 2,101 time twins leaves for astrology is this: what exactly do you get from it? If the answer is "accuracy of prediction", the data points at an uncomfortable truth. But if the answer is "a language for understanding myself, an occasion for reflection, a sense of direction in an uncertain world", the research does not deny it.' },
        ],
      },
      {
        heading: 'Sources',
        blocks: [
          {
            t: 'links',
            items: [
              { label: 'Shawn Carlson, “A double-blind test of astrology” (Nature, 1985)', href: 'https://doi.org/10.1038/318419a0', note: 'the original paper of the double-blind test with practising astrologers.' },
              { label: 'Geoffrey Dean & Ivan W. Kelly, “Is Astrology Relevant to Consciousness and Psi?” (2003)', href: 'https://www.ingentaconnect.com/content/imp/jcs/2003/00000010/F0020006/art00010', note: 'a review of the time-twin data and the astrology validation studies.' },
            ],
          },
        ],
      },
    ],
  },
  ja: {
    intro:
      '星座が性格と運命を決めるなら、同じ日の同じ時刻に生まれた人たちは似た人生を送るはずです。ある研究者が数十年かけて2000人以上を実際に追跡しました。その結果は、占星術にもっとも居心地の悪い問いを残しました。',
    cta: '自分の星座の運勢が気になったら',
    sections: [
      {
        heading: 'ジェフリー・ディーンのタイムツイン研究 — 2101人、数十年の追跡',
        blocks: [
          { t: 'image', src: 'https://images.unsplash.com/photo-1543722530-d2c3201371e6?w=800&auto=format&fit=crop&q=80', alt: 'データ分析' },
          { t: 'p', text: '心理学者で占星術研究者でもあるジェフリー・ディーンは2003年、イギリスの長期追跡資料を使い、出生時刻がきわめて近い2101人の「タイムツイン」を分析した結果を発表しました。' },
          { t: 'p', text: '出生時刻がほぼ同じということは、占星術的にはほぼ同じホロスコープを持つということです。太陽星座はもちろん、月星座、上昇宮、惑星の位置、ハウスの配置まで事実上同じ。もし占星術が性格や運命に実質的な影響を与えるなら、このタイムツインたちは統計的に似た特徴を示すはずです。' },
          { t: 'p', text: '研究チームは長期に蓄積された知能、不安水準、職業、結婚の有無、事故の経験、性格検査などの項目を比較しました。分析では、似たホロスコープを持つ人のあいだに占星術が予測する一貫した類似性は確認されませんでした。' },
          { t: 'p', text: 'ディーンはこの研究から「ホロスコープが性格や人生の出来事を決めるという主張は支持されない」と結論しました。もともと占星術の可能性を信じていた研究者だったため、この結論は本人にとっても居心地の悪いものだったと振り返っています。' },
        ],
      },
      {
        heading: 'ショーン・カーソンの二重盲検実験 — Natureに載った占星術の検証',
        blocks: [
          { t: 'p', text: '1985年、物理学者ショーン・カーソンは世界有数の科学誌『Nature』に、占星術を検証した実験結果を発表しました。設計の厳密さで今もよく引用されます。' },
          { t: 'p', text: '方式は二重盲検でした。アメリカで活動する占星術師28人が参加。ボランティアの出生情報（日付、時刻、場所）から作ったホロスコープが渡され、各ホロスコープについて、本人の実際の性格プロフィール（カリフォルニア心理検査、CPI）と無作為に選んだ二つの偽プロフィールが提示されました。占星術師はどれが本物かを選びます。' },
          { t: 'p', text: '占星術に予測力があるなら33%を上回る正答率になるはずです。結果は34%。統計的に無作為の選択（33%）と差がありませんでした。ホロスコープを読む力は実証されなかったのです。' },
          { t: 'p', text: 'カーソンの実験が重要なのは、事前に占星術師のグループと設計を話し合った点です。参加した占星術師は方式が公平だと事前に同意していました。したがって「実験条件が不公平だった」という反論はしにくくなっています。' },
        ],
      },
      {
        heading: '火星効果 — 占星術がもっとも期待した研究',
        blocks: [
          { t: 'p', text: 'フランスの心理学者ミシェル・ゴークランは1955年、興味深い統計を発表しました。著名なスポーツ選手が、火星がちょうど昇るか天頂に来る時刻に生まれる割合が偶然より高いというものです。いわゆる「火星効果」です。' },
          { t: 'p', text: 'これは占星術の支持者に大きな希望を与えました。初めて統計的に有意な天体と人間の関連の可能性が示されたように見えたからです。懐疑論者もこの結果を真剣に検討しました。' },
          { t: 'p', text: 'しかしその後数十年の大規模な独立再現実験は火星効果を確認できませんでした。1976年のアメリカ懐疑論者委員会（CSICOP）の検証、1990年代のベルギー・フランス・ドイツでの大規模な再現——いずれも元の統計的有意性を再現できませんでした。研究者はゴークランの元データに選択バイアスの可能性を指摘しました。' },
          { t: 'p', text: '今日、火星効果は再現失敗のため科学界で統計的な人工物とみなされるのが一般的です。占星術の支持者が持っていた最も有力な科学的根拠が消えたことになります。' },
        ],
      },
      {
        heading: '反証されても生き残る理由 — 反証不可能性の構造',
        blocks: [
          { t: 'p', text: '科学哲学者カール・ポパーは、ある理論が科学的であるためには「反証可能」でなければならないと主張しました。つまり、誤りを証明できる実験が原理的に存在する必要がある、ということです。' },
          { t: 'p', text: '占星術の独特な構造を見ると、反証がきわめて難しい理由が見えてきます。実験結果が予測と合わないとき、支持者が使う定番の反論はこうです。「太陽星座だけを見てはいけない。月星座、上昇宮、すべての惑星の配置、ハウス、相互の関係を全部考慮する必要がある」。あるいは「同じチャートでも人によってエネルギーの表し方が違う」。' },
          { t: 'p', text: 'これらの反論はある程度は内的に一貫しています。問題は、この構造がどんな結果でも常に逃げ道を用意してしまう点です。予測が当たれば占星術が正しく、外れれば「完全なチャートを見ていないから」。こうした構造の理論は原理的に科学的方法で反証しにくくなります。' },
          { t: 'p', text: 'これは占星術を「悪いもの」にするわけではありません。占星術は科学ではなく、別のカテゴリーの知識体系だと認める必要がある、という意味です。心理学、倫理学、芸術批評のように、科学的方法に完全には還元されないが人間の暮らしに実質的な価値を持つ分野はあります。' },
        ],
      },
      {
        heading: '予測力がないことと、価値がないことは違う',
        blocks: [
          { t: 'p', text: 'これらの研究が言っていることと言っていないことを正確に区別することが大切です。' },
          { t: 'p', text: '言っていること：ホロスコープの惑星配置は、性格、IQ、職業、結婚の有無など測定可能な人生の変数を統計的に有意に予測しない。' },
          { t: 'p', text: '言っていないこと：占星術的な自己記述が心理的に役立つか、占星術の相談が意味ある省察の機会になるか、星座の言葉が自己理解や他者理解の枠組みとして有用かどうか。' },
          { t: 'p', text: '心理学者カール・ユングは占星術の象徴を人類共通の深層心理的な元型と見ました。星座の価値は惑星の物理的な力ではなく、人間の無意識の集合的なパターンを映す象徴の言葉にあると主張しました。現代の心理占星術はこの視点の上で発展しています。' },
          { t: 'p', text: '実際に多くの人が星座の解釈を読み「これが私を正確に表している」と感じます。それが単なるバーナム効果（曖昧な記述を自分に当てはまると信じる心理）なのか、象徴の言葉が実際に自己省察を促すのかは、別の研究が必要な問いです。' },
        ],
      },
      {
        heading: '双子研究が露わにする二つの誤り',
        blocks: [
          { t: 'p', text: '双子研究と占星術の検証実験が積み重なるにつれ、この論争で双方が犯す誤りが見えてきます。' },
          { t: 'p', text: '**占星術を過信する人の誤り:** 「自分のチャートを見ると性格が正確に出る」という個人的な経験から「占星術は科学的に有効だ」という主張に飛躍することです。個人的な共鳴と統計的な予測力はまったく別のものです。あるものが自分にとって意味深く感じられることは、それが客観的事実だという証拠ではありません。' },
          { t: 'p', text: '**占星術を否定する人の誤り:** 「科学的な予測力がないから占星術はまったく役に立たない」という結論です。これは人間の知識の価値を科学的に測定できるものだけに還元する科学主義の誤りです。詩、哲学、宗教、神話は予測力を持ちませんが、人の暮らしに深い意味と方向を与えます。占星術もこの範疇にありうるのです。' },
          { t: 'p', text: 'もっとも知的に誠実な立場はこうです。これまでの科学的証拠は占星術の予測的妥当性を支持しません。同時に、占星術が提供する象徴の言葉と自己省察の枠組みは、その科学的妥当性とは無関係に多くの人に実質的な心理的・文化的価値を与えます。この二つは同時に真でありえます。' },
          { t: 'p', text: '2101人のタイムツインを数十年追跡したディーンの研究が占星術に投げかけた問いはこれです。「あなたが占星術から得ているものは正確には何か」。その答えが「予測の正確さ」なら、データは居心地の悪い真実を指します。しかし「自己理解の言葉、省察のきっかけ、不確かな世界での方向感覚」なら、この研究はそれを否定しません。' },
        ],
      },
      {
        heading: '参照資料',
        blocks: [
          {
            t: 'links',
            items: [
              { label: 'Shawn Carlson, “A double-blind test of astrology” (Nature, 1985)', href: 'https://doi.org/10.1038/318419a0', note: '現役の占星術師が参加した二重盲検実験の原論文です。' },
              { label: 'Geoffrey Dean & Ivan W. Kelly, “Is Astrology Relevant to Consciousness and Psi?” (2003)', href: 'https://www.ingentaconnect.com/content/imp/jcs/2003/00000010/F0020006/art00010', note: 'タイムツイン資料と占星術検証研究を検討した論文です。' },
            ],
          },
        ],
      },
    ],
  },
};
