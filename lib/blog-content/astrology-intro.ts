import type { BlogArticleContent } from './types';

export const whatIsAstrology: BlogArticleContent = {
  related: ['zodiac-compatibility-guide', 'planets-and-zodiac-signs'],
  ko: {
    intro:
      '수천 년의 역사를 가진 점성술은 단순한 미신이 아닙니다. 천체의 움직임과 인간의 삶을 연결지어온 고대의 지혜를 탐구합니다.',
    cta: '나의 별자리 운세가 궁금하다면?',
    sections: [
      {
        heading: '점성술의 정의와 본질',
        blocks: [
          { t: 'p', text: '점성술(占星術, Astrology)은 태양, 달, 행성 등 천체의 위치와 움직임이 인간의 성격, 행동, 운명에 영향을 미친다는 믿음을 바탕으로 한 체계입니다. 라틴어 "astrologia"에서 유래했으며, "astron(별)"과 "logos(학문)"의 합성어입니다.' },
          { t: 'p', text: '현대 과학과 점성술의 관계는 복잡합니다. 과학계는 천체가 직접적으로 인간 심리에 영향을 미친다는 주장에 동의하지 않지만, 수백만 명의 사람들이 점성술을 통해 자기 이해와 삶의 방향성을 찾습니다. 심리학자 카를 융은 점성술을 "무의식의 투영"이라고 해석하며, 점성술적 상징이 인간 심리의 원형(archetype)을 나타낼 수 있다고 보았습니다.' },
          { t: 'p', text: '중요한 것은 점성술을 어떻게 활용하느냐입니다. 운명을 맹목적으로 믿는 도구가 아니라, 자신의 성향과 가능성을 탐색하는 자기 성찰의 언어로 사용할 때 가장 큰 가치를 발휘합니다.' },
        ],
      },
      {
        heading: '점성술의 역사 — 5000년의 여정',
        blocks: [
          { t: 'p', text: '점성술의 역사는 기원전 3000년경 메소포타미아(오늘날의 이라크)로 거슬러 올라갑니다. 고대 바빌로니아인들은 밤하늘을 관찰하며 천체의 움직임과 지상의 사건 사이에 패턴이 있다고 믿었습니다. 이들이 개발한 황도대(Zodiac) 개념이 현대 서양 점성술의 기초가 되었습니다.' },
          { t: 'p', text: '기원전 4세기경 알렉산더 대왕의 정복으로 바빌로니아 점성술이 그리스로 전해졌습니다. 그리스 철학자들은 이를 자신들의 우주론과 결합하여 더욱 정교한 체계를 만들었습니다. 기원전 2세기에 프톨레마이오스가 쓴 “테트라비블로스(Tetrabiblos)”는 고대 점성술의 집대성으로, 수 세기 동안 표준 교과서 역할을 했습니다.' },
          { t: 'p', text: '중세 유럽에서 점성술은 의학, 항법, 농업과 깊이 연관되어 있었습니다. 왕들은 전쟁의 시기와 결혼 날짜를 점성술로 결정했고, 의사들은 환자의 별자리를 보고 치료법을 결정했습니다. 르네상스 시대에는 코페르니쿠스의 지동설이 등장하기 전까지 점성술과 천문학이 구분되지 않았습니다.' },
          { t: 'p', text: '17세기 과학 혁명 이후 천문학과 점성술이 분리되었지만, 점성술은 대중문화 속에서 꾸준히 살아남았습니다. 20세기에는 심리 점성술(Psychological Astrology)이 발전하면서 별자리를 성격과 심리 분석의 도구로 활용하는 새로운 흐름이 생겨났습니다.' },
        ],
      },
      {
        heading: '황도대(Zodiac)란 무엇인가?',
        blocks: [
          { t: 'p', text: '황도대는 지구에서 보았을 때 태양이 1년 동안 지나가는 하늘의 띠를 말합니다. 그리스어 "zodiakos kyklos(동물의 원)"에서 유래했으며, 이 띠를 12등분한 각각의 구역이 바로 12개의 별자리입니다. 태양이 각 별자리를 통과하는 기간이 약 30일씩 할당되어, 우리가 흔히 알고 있는 "태양 별자리"가 됩니다.' },
          { t: 'p', text: '엄밀히 말하면 황도대에는 13번째 별자리인 뱀주인자리(Ophiuchus)도 있지만, 전통 점성술에서는 12개 체계를 유지합니다. 12는 1년의 달 수, 하루를 두 번 나눈 12시간 등 자연의 주기와 일치하는 수라 특별한 의미를 가집니다.' },
          { t: 'p', text: '주의할 점은 세차운동(지구 자전축의 흔들림) 때문에 약 2000년 전에 설정된 별자리 구역이 실제 별자리 위치와 약 한 달 정도 차이가 난다는 것입니다. 서양 점성술은 이를 인정하면서도 계절의 시작점을 기준으로 하는 "열대 황도대(Tropical Zodiac)"를 사용하며, 인도 점성술은 실제 별자리 위치를 기준으로 하는 "항성 황도대(Sidereal Zodiac)"를 사용합니다.' },
        ],
      },
      {
        heading: '4원소와 3가지 특질 — 별자리 분류의 기본',
        blocks: [
          { t: 'p', text: '12개의 별자리는 4가지 원소(Element)와 3가지 특질(Modality)로 분류됩니다. 이 두 가지 분류 체계를 이해하면 별자리들 사이의 관계와 성격 패턴을 훨씬 깊이 파악할 수 있습니다.' },
          {
            t: 'box',
            title: '4원소(Element)',
            tone: 'neutral',
            text: '**불(Fire) — 양자리, 사자자리, 사수자리:** 열정, 행동력, 리더십, 창의성이 특징. 에너지가 넘치고 즉흥적이며 낙관적.\n**땅(Earth) — 황소자리, 처녀자리, 염소자리:** 현실적, 실용적, 안정 추구. 물질적 세계와 깊이 연결되어 있으며 신뢰할 수 있는 성향.\n**공기(Air) — 쌍둥이자리, 천칭자리, 물병자리:** 지성, 소통, 사교성, 아이디어가 풍부. 변화를 즐기고 새로운 정보에 빠르게 반응.\n**물(Water) — 게자리, 전갈자리, 물고기자리:** 감성, 직관, 공감 능력이 뛰어남. 깊은 내면 세계와 감정적 연결을 중시.',
          },
          {
            t: 'box',
            title: '3가지 특질(Modality)',
            tone: 'neutral',
            text: '**주동형(Cardinal) — 양자리, 게자리, 천칭자리, 염소자리:** 시작을 좋아하고 주도적. 각 계절의 시작과 일치.\n**고정형(Fixed) — 황소자리, 사자자리, 전갈자리, 물병자리:** 안정적이고 집중력이 강함. 한번 결정하면 잘 바꾸지 않음.\n**변통형(Mutable) — 쌍둥이자리, 처녀자리, 사수자리, 물고기자리:** 유연하고 적응력이 강함. 각 계절의 끝과 일치하며 변화를 잘 수용.',
          },
        ],
      },
      {
        heading: '지배 행성(Ruling Planet) — 별자리의 에너지 원천',
        blocks: [
          { t: 'p', text: '각 별자리는 하나 이상의 행성에 의해 "지배"됩니다. 지배 행성은 해당 별자리의 근본적인 에너지와 성질을 결정하는 원천으로, 신화적 상징과 깊이 연결됩니다.' },
          { t: 'p', text: '예를 들어, 화성(Mars)은 전쟁의 신 아레스에서 유래했으며, 화성이 지배하는 양자리는 용기, 공격성, 추진력을 가집니다. 금성(Venus)은 사랑과 미의 여신 아프로디테에서 유래했으며, 금성이 지배하는 황소자리와 천칭자리는 아름다움과 관계를 중시합니다.' },
          { t: 'p', text: '현대 점성술에서는 외행성인 천왕성, 해왕성, 명왕성이 발견된 후 물병자리(천왕성), 물고기자리(해왕성), 전갈자리(명왕성)의 공동 지배 행성으로 추가되었습니다. 이 외행성들은 개인보다 세대 전체의 변화와 영향을 나타내는 것으로 해석합니다.' },
        ],
      },
      {
        heading: '태양 별자리 외의 다른 중요 요소들',
        blocks: [
          { t: 'p', text: '우리가 일상적으로 알고 있는 별자리는 엄밀히 말하면 "태양 별자리(Sun Sign)"입니다. 생일을 기준으로 태양이 어느 별자리에 위치했는지를 나타내는 것입니다. 하지만 완전한 점성술 분석(출생 차트)에는 훨씬 더 많은 요소가 포함됩니다.' },
          { t: 'p', text: '**달 별자리(Moon Sign):** 출생 시 달이 위치한 별자리로, 감정, 직관, 무의식적 반응 방식을 나타냅니다. 외면에 드러나는 태양 별자리보다 더 깊은 내면의 자아를 보여준다고 여겨집니다.' },
          { t: 'p', text: '**상승 별자리(Rising Sign / Ascendant):** 출생 시간을 기준으로 동쪽 지평선에서 떠오르던 별자리입니다. 첫인상, 외모, 사람들에게 보이는 방식을 나타냅니다. "사회적 가면"이라고도 불립니다.' },
          { t: 'p', text: '점성술 전문가들은 세 가지 별자리(태양, 달, 상승)의 조합이 한 사람의 성격을 가장 잘 설명한다고 말합니다. 같은 태양 별자리라도 달 별자리와 상승 별자리에 따라 성격이 크게 달라질 수 있는 이유입니다.' },
        ],
      },
      {
        heading: '점성술을 건강하게 활용하는 방법',
        blocks: [
          { t: 'p', text: '점성술은 자기 이해와 성찰의 도구로 활용할 때 가장 유용합니다. 다음과 같은 방식으로 건강하게 활용해보세요.' },
          {
            t: 'ul',
            items: [
              '**자기 이해의 거울로:** 별자리 특성을 읽으면서 자신의 강점과 약점, 습관적인 패턴을 발견하는 출발점으로 삼을 수 있습니다.',
              '**타인을 이해하는 언어로:** 상대방의 별자리를 이해하면 그들의 행동과 반응 방식을 더 쉽게 공감하는 데 도움이 됩니다.',
              '**인생 주기의 지도로:** 중요한 결정을 앞두고 내면의 목소리를 듣는 계기로 활용할 수 있습니다.',
              '**운명론에 빠지지 않기:** 별자리가 모든 것을 결정한다고 믿기보다, 가능성의 범위를 보여주는 것으로 이해하는 것이 중요합니다. 실제 삶은 의지와 선택으로 이루어집니다.',
            ],
          },
        ],
      },
    ],
  },
  en: {
    intro:
      'Astrology is not simply superstition. This is a look at the old wisdom that tied the movement of the sky to human life.',
    cta: 'Curious about your own sign?',
    sections: [
      {
        heading: 'What astrology is',
        blocks: [
          { t: 'p', text: 'Astrology is a system built on the belief that the positions and movements of the Sun, Moon and planets influence human character, behaviour and fate. The word comes from Latin "astrologia", a joining of "astron" (star) and "logos" (study).' },
          { t: 'p', text: 'Its relationship with modern science is complicated. Scientists do not accept that the planets directly shape human psychology, yet millions of people find self-understanding and a sense of direction through astrology. Carl Jung read astrology as a "projection of the unconscious" and thought its symbols could express the archetypes of the human psyche.' },
          { t: 'p', text: 'What matters is how you use it. Astrology gives most when it is a language for self-reflection — a way to explore your own tendencies and possibilities — rather than a tool for believing blindly in fate.' },
        ],
      },
      {
        heading: 'Five thousand years of history',
        blocks: [
          { t: 'p', text: 'Astrology goes back to Mesopotamia — today’s Iraq — around 3000 BCE. The Babylonians watched the night sky and believed there were patterns linking the movement of the heavens to events on the ground. The idea of the zodiac they developed became the foundation of Western astrology.' },
          { t: 'p', text: 'With Alexander’s conquests in the fourth century BCE, Babylonian astrology reached Greece. Greek philosophers combined it with their own cosmology and built a far more elaborate system. Ptolemy’s "Tetrabiblos", written in the second century BCE, gathered ancient astrology into one work and served as the standard textbook for centuries.' },
          { t: 'p', text: 'In medieval Europe astrology was bound up with medicine, navigation and farming. Kings chose the timing of wars and wedding dates by it; physicians chose treatments from a patient’s sign. Through the Renaissance, astrology and astronomy were not yet separate disciplines — not until Copernicus put the Sun at the centre.' },
          { t: 'p', text: 'After the scientific revolution of the seventeenth century the two split, but astrology survived steadily in popular culture. In the twentieth century psychological astrology grew and gave the signs a new use as a tool for reading character and the mind.' },
        ],
      },
      {
        heading: 'What the zodiac is',
        blocks: [
          { t: 'p', text: 'The zodiac is the band of sky the Sun travels through over a year as seen from Earth. The name comes from the Greek "zodiakos kyklos", the circle of animals. Divide that band into twelve and each division is one sign; the roughly thirty days the Sun spends in each gives us the familiar "sun sign".' },
          { t: 'p', text: 'Strictly speaking the zodiac also touches a thirteenth constellation, Ophiuchus, but traditional astrology keeps to twelve. Twelve matches natural cycles — the months of a year, the twelve hours of a doubled day — and carries a special weight because of it.' },
          { t: 'p', text: 'One caution: because of precession, the slow wobble of Earth’s axis, the sign boundaries set about two thousand years ago sit roughly a month away from where the constellations actually are. Western astrology accepts this and works with the tropical zodiac, measured from the start of the seasons, while Indian astrology uses the sidereal zodiac, measured from the actual constellations.' },
        ],
      },
      {
        heading: 'Four elements and three modes',
        blocks: [
          { t: 'p', text: 'The twelve signs are sorted by four elements and three modes. Understanding both systems makes the relationships and patterns between signs far easier to see.' },
          {
            t: 'box',
            title: 'The four elements',
            tone: 'neutral',
            text: '**Fire — Aries, Leo, Sagittarius:** passion, drive, leadership, creativity. Full of energy, spontaneous and optimistic.\n**Earth — Taurus, Virgo, Capricorn:** practical, pragmatic, in search of stability. Deeply tied to the material world and dependable.\n**Air — Gemini, Libra, Aquarius:** intellect, communication, sociability, ideas. Enjoys change and reacts fast to new information.\n**Water — Cancer, Scorpio, Pisces:** emotion, intuition, strong empathy. Values a deep inner world and emotional connection.',
          },
          {
            t: 'box',
            title: 'The three modes',
            tone: 'neutral',
            text: '**Cardinal — Aries, Cancer, Libra, Capricorn:** likes to begin and to lead. Matches the start of each season.\n**Fixed — Taurus, Leo, Scorpio, Aquarius:** steady and strongly focused. Rarely changes a decision once made.\n**Mutable — Gemini, Virgo, Sagittarius, Pisces:** flexible and adaptable. Matches the end of each season and takes change well.',
          },
        ],
      },
      {
        heading: 'Ruling planets — where a sign’s energy comes from',
        blocks: [
          { t: 'p', text: 'Each sign is "ruled" by one planet or more. The ruling planet is the source of that sign’s underlying energy and temperament, closely tied to its mythological symbol.' },
          { t: 'p', text: 'Mars, for instance, comes from the war god Ares, and the sign it rules — Aries — carries courage, aggression and momentum. Venus comes from Aphrodite, goddess of love and beauty, and the signs she rules, Taurus and Libra, value beauty and relationship.' },
          { t: 'p', text: 'Modern astrology added the outer planets once Uranus, Neptune and Pluto were found, giving Aquarius to Uranus, Pisces to Neptune and Scorpio to Pluto as co-rulers. Those outer planets are read as marking generational change rather than individual character.' },
        ],
      },
      {
        heading: 'Beyond the sun sign',
        blocks: [
          { t: 'p', text: 'The sign we talk about day to day is strictly the "sun sign": where the Sun stood on your birthday. A complete astrological reading — a birth chart — holds far more than that.' },
          { t: 'p', text: '**Moon sign:** the sign the Moon was in at your birth. It describes emotion, intuition and instinctive reactions, and is thought to show an inner self deeper than the outward sun sign.' },
          { t: 'p', text: '**Rising sign (ascendant):** the sign rising over the eastern horizon at your birth time. It describes first impressions, appearance and how others see you — sometimes called the social mask.' },
          { t: 'p', text: 'Astrologers say the combination of the three — Sun, Moon and rising — explains a character best. Two people with the same sun sign can differ greatly depending on their Moon and rising signs.' },
        ],
      },
      {
        heading: 'Using astrology well',
        blocks: [
          { t: 'p', text: 'Astrology is most useful as a tool for self-understanding and reflection. A few healthy ways to use it:' },
          {
            t: 'ul',
            items: [
              '**As a mirror:** use the traits of your sign as a starting point for noticing your own strengths, weaknesses and habitual patterns.',
              '**As a language for others:** understanding someone’s sign helps you empathise with how they act and react.',
              '**As a map of life stages:** use it as an occasion to listen to your own judgement before a big decision.',
              '**Without fatalism:** read a sign as showing a range of possibilities rather than deciding everything. A real life is made of will and choice.',
            ],
          },
        ],
      },
    ],
  },
  ja: {
    intro:
      '数千年の歴史を持つ占星術は、単なる迷信ではありません。天体の動きと人の暮らしを結びつけてきた古い知恵をたどります。',
    cta: '自分の星座の運勢が気になったら',
    sections: [
      {
        heading: '占星術とは何か',
        blocks: [
          { t: 'p', text: '占星術は、太陽・月・惑星などの位置と動きが人の性格や行動、運命に影響するという考えに基づく体系です。ラテン語の「astrologia」に由来し、「astron（星）」と「logos（学問）」を合わせた言葉です。' },
          { t: 'p', text: '現代科学との関係は複雑です。科学の世界は、天体が直接人の心理に影響するという主張には同意しません。それでも多くの人が占星術を通じて自分を理解し、進む方向を見つけています。心理学者カール・ユングは占星術を「無意識の投影」と読み、その象徴が人間の心理の元型を表しうると考えました。' },
          { t: 'p', text: '大切なのは、どう使うかです。運命を盲信する道具ではなく、自分の傾向や可能性を探る自己省察の言葉として使うとき、占星術はいちばん大きな価値を発揮します。' },
        ],
      },
      {
        heading: '五千年の歴史',
        blocks: [
          { t: 'p', text: '占星術の歴史は紀元前3000年ごろのメソポタミア（現在のイラク）にさかのぼります。古代バビロニアの人々は夜空を観察し、天体の動きと地上の出来事のあいだに規則性があると信じていました。彼らが生み出した黄道十二宮の考えが、現代の西洋占星術の土台になりました。' },
          { t: 'p', text: '紀元前4世紀ごろ、アレクサンドロス大王の遠征によってバビロニアの占星術はギリシャへ伝わります。ギリシャの哲学者たちはそれを自らの宇宙観と結びつけ、より精巧な体系をつくりました。紀元前2世紀にプトレマイオスが書いた『テトラビブロス』は古代占星術の集大成で、何世紀にもわたって標準的な教科書となりました。' },
          { t: 'p', text: '中世ヨーロッパでは、占星術は医学・航海・農業と深く結びついていました。王は戦の時期や結婚の日を占星術で決め、医師は患者の星座を見て治療を選びました。ルネサンスの時代まで、コペルニクスの地動説が現れるまでは、占星術と天文学は分かれていませんでした。' },
          { t: 'p', text: '17世紀の科学革命のあと両者は分かれましたが、占星術は大衆文化の中で生き続けました。20世紀には心理占星術が発展し、星座を性格や心理の分析に使う流れが生まれます。' },
        ],
      },
      {
        heading: '黄道十二宮とは',
        blocks: [
          { t: 'p', text: '黄道とは、地球から見て太陽が一年で通っていく空の帯です。ギリシャ語の「zodiakos kyklos（動物の輪）」が語源で、この帯を12に分けた一つひとつが星座です。太陽がそれぞれの星座を通る期間が約30日ずつ割り当てられ、よく知られる「太陽星座」になります。' },
          { t: 'p', text: '厳密には黄道は13番目の星座へびつかい座にもかかりますが、伝統的な占星術は12の体系を保ちます。12は一年の月の数や、一日を二度に分けた12時間など、自然の周期と一致する数として特別な意味を持ちます。' },
          { t: 'p', text: '注意したいのは、歳差運動（地球の自転軸の揺れ）のため、約2000年前に定められた星座の区切りが実際の星座の位置とおよそ一か月ずれていることです。西洋占星術はこれを認めたうえで季節の始まりを基準にする「トロピカル方式」を使い、インド占星術は実際の星座の位置を基準にする「サイデリアル方式」を使います。' },
        ],
      },
      {
        heading: '四大元素と三区分',
        blocks: [
          { t: 'p', text: '12星座は4つの元素と3つの区分で分類されます。この二つの体系を理解すると、星座どうしの関係や性格のパターンがずっと見えやすくなります。' },
          {
            t: 'box',
            title: '四大元素',
            tone: 'neutral',
            text: '**火 — 牡羊座・獅子座・射手座:** 情熱、行動力、リーダーシップ、創造性。エネルギーにあふれ、即興的で楽観的。\n**地 — 牡牛座・乙女座・山羊座:** 現実的、実用的、安定を求める。物質的な世界と深く結びつき、信頼できる。\n**風 — 双子座・天秤座・水瓶座:** 知性、対話、社交性、アイデア。変化を楽しみ、新しい情報に素早く反応する。\n**水 — 蟹座・蠍座・魚座:** 感情、直感、共感力に優れる。深い内面と感情的なつながりを重んじる。',
          },
          {
            t: 'box',
            title: '三区分',
            tone: 'neutral',
            text: '**活動宮 — 牡羊座・蟹座・天秤座・山羊座:** 始めることが好きで主導的。各季節の始まりにあたる。\n**固定宮 — 牡牛座・獅子座・蠍座・水瓶座:** 安定していて集中力が強い。一度決めたら変えにくい。\n**柔軟宮 — 双子座・乙女座・射手座・魚座:** 柔軟で適応力が高い。各季節の終わりにあたり、変化をよく受け入れる。',
          },
        ],
      },
      {
        heading: '守護惑星 — 星座のエネルギーの源',
        blocks: [
          { t: 'p', text: 'それぞれの星座は一つ以上の惑星に「支配」されています。守護惑星はその星座の根本的なエネルギーと気質を決める源で、神話の象徴と深く結びついています。' },
          { t: 'p', text: 'たとえば火星は戦の神アレスに由来し、火星が支配する牡羊座は勇気、攻撃性、推進力を持ちます。金星は愛と美の女神アフロディテに由来し、金星が支配する牡牛座と天秤座は美しさと関係を重んじます。' },
          { t: 'p', text: '現代占星術では、天王星・海王星・冥王星が発見されたあと、水瓶座に天王星、魚座に海王星、蠍座に冥王星が共同の守護惑星として加えられました。これらの外惑星は、個人よりも世代全体の変化を示すものとして読まれます。' },
        ],
      },
      {
        heading: '太陽星座のほかの要素',
        blocks: [
          { t: 'p', text: '普段私たちが「星座」と呼ぶものは、厳密には「太陽星座」です。誕生日に太陽がどの星座にあったかを示すものです。しかし完全なホロスコープには、はるかに多くの要素が含まれます。' },
          { t: 'p', text: '**月星座:** 生まれたときに月がいた星座で、感情、直感、無意識の反応を表します。外に現れる太陽星座より深い内面を示すと考えられています。' },
          { t: 'p', text: '**上昇星座（アセンダント）:** 生まれた時刻に東の地平線から昇っていた星座です。第一印象、外見、人から見える姿を表し、「社会的な仮面」とも呼ばれます。' },
          { t: 'p', text: '占星術では、太陽・月・上昇の三つの組み合わせがその人の性格を最もよく説明するとされます。同じ太陽星座でも、月星座と上昇星座によって性格が大きく変わりうる理由です。' },
        ],
      },
      {
        heading: '占星術を健全に使うために',
        blocks: [
          { t: 'p', text: '占星術は、自分を理解し省察する道具として使うときにもっとも役立ちます。次のような使い方をしてみてください。' },
          {
            t: 'ul',
            items: [
              '**自分を知る鏡として:** 星座の特徴を読みながら、自分の強みや弱み、いつもの癖に気づく入り口にします。',
              '**人を理解する言葉として:** 相手の星座を知ると、その人の行動や反応に共感しやすくなります。',
              '**人生の節目の地図として:** 大事な決断の前に、自分の内側の声を聞くきっかけにします。',
              '**宿命論に陥らないこと:** 星座がすべてを決めるのではなく、可能性の幅を示すものと受け取ります。実際の人生は意志と選択でできています。',
            ],
          },
        ],
      },
    ],
  },
};

export const planetsAndSigns: BlogArticleContent = {
  related: ['what-is-astrology', 'zodiac-compatibility-guide'],
  ko: {
    intro:
      '별자리의 에너지는 지배 행성에서 비롯됩니다. 신화에서 탄생한 행성들의 상징이 어떻게 우리의 성격과 삶에 반영되는지 탐구합니다.',
    cta: '오늘 행성 에너지를 반영한 나의 운세 확인하기',
    sections: [
      {
        heading: '왜 지배 행성이 중요한가?',
        blocks: [
          { t: 'p', text: '점성술에서 각 별자리는 하나 혹은 두 개의 행성에 의해 "지배(Rulership)"됩니다. 지배 행성은 해당 별자리의 근본적인 에너지와 특성을 결정하는 가장 중요한 요소 중 하나입니다. 쉽게 말하면, 지배 행성은 별자리의 "영혼"과 같습니다.' },
          { t: 'p', text: '예를 들어 왜 양자리는 용감하고 행동적인가? 화성(전쟁과 행동의 신)이 지배하기 때문입니다. 왜 황소자리는 아름다움과 물질적 풍요를 중시하는가? 금성(사랑과 미의 여신)이 지배하기 때문입니다. 지배 행성의 신화적 성질과 에너지가 그대로 별자리의 성격으로 나타납니다.' },
          { t: 'p', text: '고전 점성술(Classical Astrology)에서는 7개의 행성(태양, 달, 수성, 금성, 화성, 목성, 토성)만을 사용했습니다. 현대 점성술은 1781년 이후 발견된 천왕성, 해왕성, 명왕성을 추가하여 더욱 세밀한 분석이 가능해졌습니다.' },
        ],
      },
      {
        heading: '10개 행성의 의미와 지배 별자리',
        blocks: [
          {
            t: 'cards',
            items: [
              { title: '☀️ 태양 (Sun)', meta: '지배: 사자자리', text: '**신화:** 그리스 신화의 태양신 아폴로에 해당. 빛, 진리, 예언, 음악, 치유의 신. **상징:** 자아, 정체성, 의식적인 자아 표현, 생명력, 창의성, 아버지 원형. 태양이 강한 사람은 자기표현이 강하고 인정받고자 하는 욕구가 있습니다. 리더십이 자연스럽게 발휘되며, 자신만의 개성을 당당하게 표현합니다.' },
              { title: '🌙 달 (Moon)', meta: '지배: 게자리', text: '**신화:** 그리스 신화의 달의 여신 셀레네 또는 아르테미스. 달의 변화처럼 감정의 순환을 나타냄. **상징:** 감정, 직관, 무의식, 어머니 원형, 가정, 과거와 추억. 달이 강한 사람은 감수성이 풍부하고 직관력이 뛰어납니다. 가족과 안전한 환경을 중시하며, 타인의 감정에 깊이 공감합니다.' },
              { title: '☿ 수성 (Mercury)', meta: '지배: 쌍둥이자리, 처녀자리', text: '**신화:** 그리스의 전령신 헤르메스. 신과 인간 사이의 메신저이자 상인, 여행자, 도둑의 수호신. **상징:** 지성, 소통, 언어, 논리적 사고, 여행, 교육, 거래. 수성이 강한 사람은 언어 능력이 뛰어나고 빠르게 생각합니다. 정보를 빠르게 처리하고 소통하는 능력이 탁월하며, 다양한 관심사를 가집니다.' },
              { title: '♀ 금성 (Venus)', meta: '지배: 황소자리, 천칭자리', text: '**신화:** 그리스의 사랑과 미의 여신 아프로디테. 아름다움, 욕망, 쾌락의 상징. **상징:** 사랑, 아름다움, 예술, 쾌락, 관계, 가치관, 물질적 풍요. 금성이 강한 사람은 미적 감각이 뛰어나고 관계를 소중히 여깁니다. 조화와 아름다움을 추구하며, 감각적인 즐거움을 중시합니다.' },
              { title: '♂ 화성 (Mars)', meta: '지배: 양자리, (전갈자리 공동)', text: '**신화:** 그리스의 전쟁신 아레스. 용기, 공격성, 경쟁의 신. 로마에서는 군신 마르스. **상징:** 행동, 에너지, 용기, 경쟁, 성욕, 분노, 투지, 신체 활동. 화성이 강한 사람은 행동력과 추진력이 넘칩니다. 경쟁을 즐기고 목표를 향해 돌진하는 성향이 있으며, 열정적이고 직접적입니다.' },
              { title: '♃ 목성 (Jupiter)', meta: '지배: 사수자리, (물고기자리 공동)', text: '**신화:** 그리스의 최고신 제우스. 신들의 왕이자 천둥의 신. 법, 질서, 풍요의 상징. **상징:** 행운, 팽창, 지혜, 철학, 고등 교육, 여행, 낙관주의, 관대함. 목성이 강한 사람은 낙관적이고 관대합니다. 지식과 경험을 넓히려는 욕구가 강하며, 큰 그림을 보는 시각이 탁월합니다.' },
              { title: '♄ 토성 (Saturn)', meta: '지배: 염소자리, (물병자리 공동)', text: '**신화:** 그리스의 크로노스(시간의 신). 로마의 농업신 사투르누스. 제약과 시간, 카르마의 상징. **상징:** 규율, 책임, 한계, 인내, 시간, 구조, 카르마, 노력의 결실. 토성이 강한 사람은 책임감이 강하고 성실합니다. 어려운 상황에서도 포기하지 않으며, 시간이 걸리더라도 착실하게 목표를 달성합니다.' },
              { title: '♅ 천왕성 (Uranus)', meta: '지배: 물병자리', text: '**신화:** 그리스의 하늘신 우라노스. 1781년 발견된 현대 행성으로, 혁명의 시대와 함께 등장. **상징:** 혁신, 반항, 독립, 갑작스러운 변화, 기술, 자유, 창의적 파괴. 천왕성이 강한 사람은 독창적이고 혁신적입니다. 기존의 틀을 깨고 새로운 방식을 시도하며, 미래 지향적인 비전을 가집니다.' },
              { title: '♆ 해왕성 (Neptune)', meta: '지배: 물고기자리', text: '**신화:** 그리스의 바다신 포세이돈. 1846년 발견. 신비로운 꿈과 환상의 세계를 상징. **상징:** 꿈, 환상, 직관, 영성, 예술, 이상주의, 혼란, 희생. 해왕성이 강한 사람은 상상력이 풍부하고 영적인 감수성이 높습니다. 예술적 재능이 있으며 이상적인 세계를 꿈꿉니다.' },
              { title: '♇ 명왕성 (Pluto)', meta: '지배: 전갈자리', text: '**신화:** 그리스의 지하 세계 왕 하데스. 1930년 발견. 변혁, 죽음과 재생의 상징. **상징:** 변혁, 권력, 죽음과 재생, 심층 심리, 비밀, 극단적 변화. 명왕성이 강한 사람은 강렬하고 변혁적인 에너지를 가집니다. 깊은 내면을 탐구하고, 어떤 상황에서도 다시 일어서는 불굴의 힘을 가집니다.' },
            ],
          },
        ],
      },
      {
        heading: '행성의 품위 — 강하거나 약한 위치',
        blocks: [
          { t: 'p', text: '점성술에서는 각 행성이 특정 별자리에서 더 강하거나 약한 에너지를 발휘한다고 봅니다. 이를 "행성의 품위(Dignities)"라고 합니다.' },
          { t: 'box', title: '행성이 강한 위치', tone: 'positive', text: '**지배(Domicile):** 행성이 자신의 별자리에 위치. 에너지가 가장 자연스럽게 발휘됨.\n**고양(Exaltation):** 특정 별자리에서 행성 에너지가 특별히 강화됨.' },
          { t: 'box', title: '행성이 약한 위치', tone: 'caution', text: '**감쇠(Detriment):** 지배 별자리의 반대 별자리. 에너지 발휘가 어색함.\n**추락(Fall):** 고양의 반대 별자리. 에너지가 가장 약하게 발현됨.' },
          { t: 'note', text: '예: 화성은 양자리(지배)에서 가장 강하고, 염소자리(고양)에서도 강합니다. 반대로 천칭자리(감쇠)와 게자리(추락)에서는 에너지 발휘에 어려움이 있습니다.' },
        ],
      },
      {
        heading: '행성 에너지를 일상에서 활용하기',
        blocks: [
          { t: 'p', text: '요일(曜日)은 실제로 행성의 이름에서 유래했습니다. 월요일(Moon), 화요일(Mars), 수요일(Mercury), 목요일(Jupiter), 금요일(Venus), 토요일(Saturn), 일요일(Sun) — 7개 행성이 각 요일을 지배합니다.' },
          {
            t: 'table',
            head: ['요일', '행성', '그날 하기 좋은 활동'],
            rows: [
              ['월요일 🌙', '달', '내면 성찰, 가족과 시간, 감정 돌보기'],
              ['화요일 🔴', '화성', '운동, 경쟁, 도전적 목표 시작'],
              ['수요일 ☿', '수성', '중요한 회의, 계약, 학습, 글쓰기'],
              ['목요일 ♃', '목성', '확장, 여행, 고등 교육, 투자'],
              ['금요일 ♀', '금성', '사교, 데이트, 예술 활동, 쇼핑'],
              ['토요일 ♄', '토성', '계획, 정리정돈, 장기 프로젝트 진행'],
              ['일요일 ☀️', '태양', '창의적 활동, 자기표현, 휴식과 재충전'],
            ],
          },
        ],
      },
    ],
  },
  en: {
    intro:
      'A sign’s energy comes from its ruling planet. This is how the symbols born in myth show up in character and in daily life.',
    cta: 'See today’s fortune, read through the planets',
    sections: [
      {
        heading: 'Why ruling planets matter',
        blocks: [
          { t: 'p', text: 'In astrology each sign is "ruled" by one planet or two. The ruling planet is one of the strongest factors behind a sign’s underlying energy and character — in plain terms, it is the sign’s soul.' },
          { t: 'p', text: 'Why is Aries brave and active? Because Mars, god of war and action, rules it. Why does Taurus care about beauty and material comfort? Because Venus, goddess of love and beauty, rules it. The mythical nature of the ruling planet shows up directly as the character of the sign.' },
          { t: 'p', text: 'Classical astrology used only seven planets: Sun, Moon, Mercury, Venus, Mars, Jupiter and Saturn. Modern astrology added Uranus, Neptune and Pluto, found after 1781, which allowed a finer reading.' },
        ],
      },
      {
        heading: 'Ten planets and the signs they rule',
        blocks: [
          {
            t: 'cards',
            items: [
              { title: '☀️ Sun', meta: 'Rules: Leo', text: '**Myth:** the Greek sun god Apollo — light, truth, prophecy, music and healing. **Symbol:** the self, identity, conscious expression, vitality, creativity, the father archetype. Someone with a strong Sun expresses themselves openly and wants to be recognised. Leadership comes naturally, and they show their own colour without apology.' },
              { title: '🌙 Moon', meta: 'Rules: Cancer', text: '**Myth:** Selene or Artemis, the Greek moon goddess; the cycle of feeling, like the phases of the Moon. **Symbol:** emotion, intuition, the unconscious, the mother archetype, home, the past and memory. A strong Moon brings sensitivity and sharp intuition. Family and a safe environment matter, and other people’s feelings are felt deeply.' },
              { title: '☿ Mercury', meta: 'Rules: Gemini, Virgo', text: '**Myth:** Hermes, the Greek messenger — go-between of gods and people, patron of traders, travellers and thieves. **Symbol:** intellect, communication, language, logical thought, travel, learning, exchange. A strong Mercury thinks fast and uses words well, handling information and conversation with ease across many interests.' },
              { title: '♀ Venus', meta: 'Rules: Taurus, Libra', text: '**Myth:** Aphrodite, Greek goddess of love and beauty; beauty, desire and pleasure. **Symbol:** love, beauty, art, pleasure, relationship, values, material comfort. A strong Venus has a fine aesthetic sense and values relationships, seeking harmony and beauty and taking pleasure in the senses.' },
              { title: '♂ Mars', meta: 'Rules: Aries (co-ruler of Scorpio)', text: '**Myth:** Ares, Greek god of war — courage, aggression, competition; Mars in Rome. **Symbol:** action, energy, courage, competition, desire, anger, fighting spirit, physical activity. A strong Mars is full of drive, enjoys a contest and charges at a goal, passionate and direct.' },
              { title: '♃ Jupiter', meta: 'Rules: Sagittarius (co-ruler of Pisces)', text: '**Myth:** Zeus, the highest Greek god, king of the gods and god of thunder; law, order and plenty. **Symbol:** luck, expansion, wisdom, philosophy, higher education, travel, optimism, generosity. A strong Jupiter is optimistic and generous, hungry for knowledge and experience, with an eye for the larger picture.' },
              { title: '♄ Saturn', meta: 'Rules: Capricorn (co-ruler of Aquarius)', text: '**Myth:** Cronos, the Greek god of time; Saturnus, Roman god of agriculture; limit, time and karma. **Symbol:** discipline, responsibility, limits, patience, time, structure, karma, the fruit of effort. A strong Saturn is responsible and steady, does not give up in difficulty, and reaches a goal by steady work even when it takes years.' },
              { title: '♅ Uranus', meta: 'Rules: Aquarius', text: '**Myth:** Uranus, the Greek sky god; a modern planet found in 1781, arriving with an age of revolution. **Symbol:** innovation, rebellion, independence, sudden change, technology, freedom, creative destruction. A strong Uranus is original and inventive, breaking the existing frame and holding a forward-looking vision.' },
              { title: '♆ Neptune', meta: 'Rules: Pisces', text: '**Myth:** Poseidon, the Greek sea god; found in 1846; the world of dream and illusion. **Symbol:** dream, imagination, intuition, spirituality, art, idealism, confusion, sacrifice. A strong Neptune has a rich imagination and high spiritual sensitivity, with artistic gifts and a dream of an ideal world.' },
              { title: '♇ Pluto', meta: 'Rules: Scorpio', text: '**Myth:** Hades, king of the Greek underworld; found in 1930; transformation, death and rebirth. **Symbol:** transformation, power, death and rebirth, depth psychology, secrets, extreme change. A strong Pluto carries intense, transforming energy, explores the inner depths and rises again from any situation.' },
            ],
          },
        ],
      },
      {
        heading: 'Dignities — when a planet is strong or weak',
        blocks: [
          { t: 'p', text: 'Astrology holds that each planet works with more or less strength in particular signs. These positions are called the planet’s dignities.' },
          { t: 'box', title: 'Strong positions', tone: 'positive', text: '**Domicile:** the planet is in its own sign, where its energy flows most naturally.\n**Exaltation:** the planet’s energy is especially reinforced in a particular sign.' },
          { t: 'box', title: 'Weak positions', tone: 'caution', text: '**Detriment:** the sign opposite the one the planet rules; its energy is awkward to express.\n**Fall:** the sign opposite its exaltation; its energy is at its weakest.' },
          { t: 'note', text: 'For example, Mars is strongest in Aries (domicile) and strong in Capricorn (exaltation). In Libra (detriment) and Cancer (fall) it finds it harder to express itself.' },
        ],
      },
      {
        heading: 'Using planetary energy day to day',
        blocks: [
          { t: 'p', text: 'The days of the week really do come from the planets: Monday (Moon), Tuesday (Mars), Wednesday (Mercury), Thursday (Jupiter), Friday (Venus), Saturday (Saturn), Sunday (Sun) — seven planets, one for each day.' },
          {
            t: 'table',
            head: ['Day', 'Planet', 'Good activity for the day'],
            rows: [
              ['Monday 🌙', 'Moon', 'Reflection, time with family, tending feelings'],
              ['Tuesday 🔴', 'Mars', 'Exercise, competition, starting a demanding goal'],
              ['Wednesday ☿', 'Mercury', 'An important meeting, a contract, study, writing'],
              ['Thursday ♃', 'Jupiter', 'Expansion, travel, higher education, investing'],
              ['Friday ♀', 'Venus', 'Socialising, a date, art, shopping'],
              ['Saturday ♄', 'Saturn', 'Planning, tidying, pushing a long project on'],
              ['Sunday ☀️', 'Sun', 'Creative work, self-expression, rest and recharge'],
            ],
          },
        ],
      },
    ],
  },
  ja: {
    intro:
      '星座のエネルギーは守護惑星から生まれます。神話から生まれた惑星の象徴が、性格と暮らしにどう現れるかをたどります。',
    cta: '惑星の力を踏まえた今日の運勢を見る',
    sections: [
      {
        heading: '守護惑星が重要な理由',
        blocks: [
          { t: 'p', text: '占星術では、それぞれの星座は一つ、あるいは二つの惑星に「支配」されています。守護惑星はその星座の根本的なエネルギーと気質を決めるもっとも重要な要素のひとつで、平たく言えば星座の「魂」です。' },
          { t: 'p', text: 'なぜ牡羊座は勇敢で行動的なのか。火星（戦と行動の神）が支配しているからです。なぜ牡牛座は美と物質的な豊かさを重んじるのか。金星（愛と美の女神）が支配しているからです。守護惑星の神話的な性質とエネルギーが、そのまま星座の性格として現れます。' },
          { t: 'p', text: '古典占星術では7つの惑星（太陽・月・水星・金星・火星・木星・土星）だけを使いました。現代占星術は1781年以降に発見された天王星・海王星・冥王星を加え、より細かな読み解きができるようになりました。' },
        ],
      },
      {
        heading: '10の惑星と支配する星座',
        blocks: [
          {
            t: 'cards',
            items: [
              { title: '☀️ 太陽', meta: '支配：獅子座', text: '**神話：** ギリシャ神話の太陽神アポロン。光、真理、予言、音楽、癒しの神。 **象徴：** 自我、アイデンティティ、意識的な自己表現、生命力、創造性、父の元型。太陽が強い人は自己表現が豊かで、認められたい気持ちがあります。リーダーシップが自然に発揮され、自分の個性を堂々と表します。' },
              { title: '🌙 月', meta: '支配：蟹座', text: '**神話：** ギリシャ神話の月の女神セレネ、またはアルテミス。月の満ち欠けのような感情の循環を表す。 **象徴：** 感情、直感、無意識、母の元型、家庭、過去と思い出。月が強い人は感受性豊かで直感に優れます。家族と安全な環境を大切にし、人の感情に深く共感します。' },
              { title: '☿ 水星', meta: '支配：双子座・乙女座', text: '**神話：** ギリシャの伝令神ヘルメス。神と人をつなぐ使者で、商人・旅人・盗人の守護神。 **象徴：** 知性、対話、言語、論理的な思考、旅、教育、取引。水星が強い人は言葉の力に優れ、考えるのが速い。情報を素早く処理して伝える力にたけ、関心の幅も広い。' },
              { title: '♀ 金星', meta: '支配：牡牛座・天秤座', text: '**神話：** ギリシャの愛と美の女神アフロディテ。美、欲望、快楽の象徴。 **象徴：** 愛、美、芸術、快楽、関係、価値観、物質的な豊かさ。金星が強い人は美的感覚に優れ、関係を大切にします。調和と美を求め、感覚的な喜びを重んじます。' },
              { title: '♂ 火星', meta: '支配：牡羊座（蠍座の共同守護）', text: '**神話：** ギリシャの戦神アレス。勇気、攻撃性、競争の神。ローマでは軍神マルス。 **象徴：** 行動、エネルギー、勇気、競争、性欲、怒り、闘志、身体活動。火星が強い人は行動力と推進力にあふれます。競争を楽しみ、目標へ突き進む気質で、情熱的で直接的です。' },
              { title: '♃ 木星', meta: '支配：射手座（魚座の共同守護）', text: '**神話：** ギリシャの最高神ゼウス。神々の王であり雷の神。法、秩序、豊かさの象徴。 **象徴：** 幸運、拡大、知恵、哲学、高等教育、旅、楽観、寛容。木星が強い人は楽観的で寛容です。知識と経験を広げたい気持ちが強く、大きな絵を見る視点に優れます。' },
              { title: '♄ 土星', meta: '支配：山羊座（水瓶座の共同守護）', text: '**神話：** ギリシャのクロノス（時の神）。ローマの農耕神サトゥルヌス。制約と時間、カルマの象徴。 **象徴：** 規律、責任、限界、忍耐、時間、構造、カルマ、努力の実り。土星が強い人は責任感が強く誠実です。難しい状況でも諦めず、時間がかかっても着実に目標を達成します。' },
              { title: '♅ 天王星', meta: '支配：水瓶座', text: '**神話：** ギリシャの天空神ウラノス。1781年に発見された近代惑星で、革命の時代とともに現れた。 **象徴：** 革新、反抗、独立、突然の変化、技術、自由、創造的破壊。天王星が強い人は独創的で革新的です。既存の枠を壊して新しい方法を試し、未来を見るビジョンを持ちます。' },
              { title: '♆ 海王星', meta: '支配：魚座', text: '**神話：** ギリシャの海神ポセイドン。1846年発見。神秘的な夢と幻想の世界を象徴。 **象徴：** 夢、幻想、直感、霊性、芸術、理想主義、混迷、犠牲。海王星が強い人は想像力豊かで霊的な感受性が高い。芸術的な才能があり、理想の世界を夢見ます。' },
              { title: '♇ 冥王星', meta: '支配：蠍座', text: '**神話：** ギリシャの冥界の王ハデス。1930年発見。変革、死と再生の象徴。 **象徴：** 変革、力、死と再生、深層心理、秘密、極端な変化。冥王星が強い人は強烈で変革的なエネルギーを持ちます。深い内面を探り、どんな状況でも立ち上がる不屈の力があります。' },
            ],
          },
        ],
      },
      {
        heading: '惑星の品位 — 強い位置と弱い位置',
        blocks: [
          { t: 'p', text: '占星術では、それぞれの惑星が特定の星座でより強く、あるいは弱く力を発揮すると考えます。これを「惑星の品位」と呼びます。' },
          { t: 'box', title: '惑星が強い位置', tone: 'positive', text: '**ドミサイル（支配）:** 惑星が自分の星座にある状態。エネルギーがもっとも自然に発揮される。\n**エグザルテーション（高揚）:** 特定の星座で惑星のエネルギーがとくに強まる。' },
          { t: 'box', title: '惑星が弱い位置', tone: 'caution', text: '**デトリメント（減衰）:** 支配する星座の反対の星座。エネルギーの発揮がぎこちない。\n**フォール（陥落）:** 高揚の反対の星座。エネルギーがもっとも弱く現れる。' },
          { t: 'note', text: '例：火星は牡羊座（支配）でもっとも強く、山羊座（高揚）でも強い。逆に天秤座（減衰）と蟹座（陥落）では力を出しにくくなります。' },
        ],
      },
      {
        heading: '惑星のエネルギーを日常に活かす',
        blocks: [
          { t: 'p', text: '曜日はもともと惑星の名前に由来しています。月曜（Moon）、火曜（Mars）、水曜（Mercury）、木曜（Jupiter）、金曜（Venus）、土曜（Saturn）、日曜（Sun）——7つの惑星がそれぞれの曜日を支配しています。' },
          {
            t: 'table',
            head: ['曜日', '惑星', 'その日に良い活動'],
            rows: [
              ['月曜日 🌙', '月', '内省、家族との時間、感情の手入れ'],
              ['火曜日 🔴', '火星', '運動、競争、挑戦的な目標の開始'],
              ['水曜日 ☿', '水星', '重要な会議、契約、学び、文章を書く'],
              ['木曜日 ♃', '木星', '拡大、旅、高等教育、投資'],
              ['金曜日 ♀', '金星', '社交、デート、芸術活動、買い物'],
              ['土曜日 ♄', '土星', '計画、片付け、長期プロジェクトの進行'],
              ['日曜日 ☀️', '太陽', '創造的な活動、自己表現、休息と充電'],
            ],
          },
        ],
      },
    ],
  },
};
