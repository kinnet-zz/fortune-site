import type { BlogArticleContent } from './types';

export const chineseVsWestern: BlogArticleContent = {
  related: ['what-is-astrology', 'how-to-read-daily-fortune'],
  ko: {
    intro:
      '수천 년 동안 독립적으로 발전해온 동양의 12지지와 서양의 황도대 별자리. 두 체계가 인간과 우주의 관계를 어떻게 다르게, 또 비슷하게 바라보는지 탐구합니다.',
    cta: '나의 별자리와 띠를 함께 분석한 오늘의 운세',
    sections: [
      {
        heading: '두 체계의 기본 구조 비교',
        blocks: [
          {
            t: 'table',
            head: ['항목', '서양 별자리', '동양 12지'],
            rows: [
              ['기원', '메소포타미아 → 그리스 → 로마', '중국 고대 (은나라 추정)'],
              ['기준', '태양의 연간 이동 경로 (황도)', '달의 주기 + 목성의 12년 공전'],
              ['주기', '약 1개월 (태양 별자리)', '12년 (12지지 한 주기)'],
              ['개수', '12개 별자리', '12가지 동물'],
              ['에너지 체계', '4원소 (불·땅·공기·물)', '음양오행 (목·화·토·금·수)'],
              ['적용', '생일(월)로 결정', '태어난 해로 결정'],
              ['해석 초점', '개성, 행동 방식, 심리', '기질, 운명, 대인 관계'],
            ],
          },
        ],
      },
      {
        heading: '서양 별자리 — 태양의 언어',
        blocks: [
          { t: 'p', text: '서양 점성술의 핵심은 태양입니다. 지구에서 보았을 때 태양이 1년 동안 지나가는 하늘의 경로(황도)를 12개 구역으로 나눈 것이 황도대 별자리입니다. 생일을 기준으로 태양이 어느 별자리에 있었는지가 "나의 별자리"가 됩니다.' },
          { t: 'p', text: '서양 점성술은 개인의 심리와 성격 분석에 특히 강점이 있습니다. 20세기에 발전한 심리 점성술(Psychological Astrology)은 칼 융의 분석심리학과 결합되어 자기 탐구의 도구로 널리 활용됩니다. 12개 별자리는 각각 인간 심리의 12가지 원형적 패턴을 나타낸다고 볼 수 있습니다.' },
          { t: 'p', text: '서양 별자리에서 중요한 또 다른 요소는 행성의 위치입니다. 생일과 출생 시간, 장소를 기반으로 작성하는 출생 차트(Natal Chart)에는 태양, 달, 수성, 금성, 화성, 목성, 토성, 천왕성, 해왕성, 명왕성의 위치가 모두 포함되어 훨씬 세밀한 분석이 가능합니다.' },
        ],
      },
      {
        heading: '동양 12지 — 달과 목성의 리듬',
        blocks: [
          { t: 'p', text: '동양의 12지지(十二支)는 음력을 기반으로 발전했습니다. 12가지 동물(쥐·소·범·토끼·용·뱀·말·양·원숭이·닭·개·돼지)이 각각 1년을 대표하며, 12년을 한 주기로 순환합니다.' },
          { t: 'p', text: '12라는 숫자는 목성의 공전 주기(약 11.86년)에서 비롯된 것으로 추정됩니다. 고대 중국의 천문학자들은 목성이 하늘을 한 바퀴 도는 시간을 12년으로 보고, 매 해를 목성의 위치에 따라 12동물로 구분했습니다.' },
          { t: 'p', text: '동양 12지는 서양 별자리보다 더 광범위한 시간 척도로 사람의 기질을 나눕니다. 같은 해에 태어난 사람들이 공통된 특성을 가진다는 개념은 개인보다 세대와 집단의 패턴을 보는 데 유용합니다.' },
          { t: 'p', text: '또한 동양 점성술에서는 태어난 해뿐 아니라 달(월지), 날(일지), 시간(시지)도 함께 고려하는 "사주팔자(四柱八字)" 체계가 발전했습니다. 이 체계에서는 태어난 년·월·일·시의 4개 기둥과 8개 글자가 운명의 전체 그림을 그린다고 봅니다.' },
        ],
      },
      {
        heading: '음양오행 vs 4원소 — 에너지를 바라보는 두 가지 방식',
        blocks: [
          { t: 'p', text: '두 체계에서 가장 흥미로운 비교 지점은 에너지를 분류하는 방식입니다.' },
          {
            t: 'box',
            title: '서양: 4원소',
            tone: 'accent',
            text: '🔥 **불(Fire):** 열정, 창의성, 행동\n🌍 **땅(Earth):** 안정, 실용, 물질\n💨 **공기(Air):** 지성, 소통, 변화\n💧 **물(Water):** 감성, 직관, 무의식\n\n그리스 철학에서 유래한 4원소는 물질의 근본 상태를 나타내며 각 별자리의 기질을 결정합니다.',
          },
          {
            t: 'box',
            title: '동양: 음양오행',
            tone: 'warm',
            text: '🌿 **木(목):** 성장, 창의, 봄의 에너지\n🔥 **火(화):** 열정, 표현, 여름의 에너지\n🌏 **土(토):** 균형, 안정, 중앙\n⚙️ **金(금):** 결단, 수확, 가을의 에너지\n💧 **水(수):** 지혜, 유연, 겨울의 에너지\n\n오행은 서로를 생성(상생)하고 억제(상극)하는 역동적인 관계로 연결되어 있습니다.',
          },
          { t: 'p', text: '흥미롭게도 두 체계 모두 에너지를 불·물·흙(땅)의 세 요소로 공유하며, 동양의 木(목)은 서양의 공기(Air)와, 金(금)은 금성·토성의 에너지와 유사한 개념을 가집니다. 수천 년 동안 독립적으로 발전했지만, 두 체계 모두 자연의 근본 에너지를 비슷하게 분류했다는 것이 놀랍습니다.' },
        ],
      },
      {
        heading: '동양 12지와 서양 별자리의 대응 관계',
        blocks: [
          { t: 'p', text: '두 체계 사이에 공식적인 일대일 대응은 없지만, 에너지와 성격의 유사성으로 비교하는 경우가 있습니다.' },
          {
            t: 'table',
            head: ['동양 12지', '유사한 서양 별자리', '공통 특성'],
            rows: [
              ['🐭 쥐', '쌍둥이자리·전갈자리', '영리함, 기민함, 적응력'],
              ['🐮 소', '황소자리·염소자리', '인내심, 근면함, 안정 추구'],
              ['🐯 범', '사자자리·양자리', '용기, 리더십, 강한 의지'],
              ['🐰 토끼', '물고기자리·천칭자리', '온화함, 평화 추구, 섬세함'],
              ['🐉 용', '양자리·사자자리', '카리스마, 열정, 창의성'],
              ['🐍 뱀', '전갈자리·처녀자리', '직관력, 신중함, 심오함'],
              ['🐎 말', '사수자리·쌍둥이자리', '자유, 활동성, 독립심'],
              ['🐑 양', '물고기자리·황소자리', '감수성, 예술적 감각, 온순함'],
              ['🐒 원숭이', '쌍둥이자리·물병자리', '호기심, 재치, 다재다능'],
              ['🐓 닭', '처녀자리·염소자리', '완벽주의, 분석력, 자신감'],
              ['🐕 개', '사수자리·게자리', '충성심, 정직함, 보호본능'],
              ['🐷 돼지', '물고기자리·황소자리', '관대함, 솔직함, 삶의 즐거움'],
            ],
          },
        ],
      },
      {
        heading: '두 체계를 함께 활용하는 방법',
        blocks: [
          { t: 'p', text: '서양 별자리와 동양 12지를 함께 분석하면 훨씬 더 풍부한 자기 이해가 가능합니다. 예를 들어, 서양 별자리로 "나의 월간 성향"을 이해하고, 동양 12지로 "나의 연간 기질과 운의 흐름"을 파악하는 방식입니다.' },
          { t: 'p', text: '실제로 많은 점성술 애호가들이 두 체계를 병행하여 사용합니다. 서양 별자리가 개인의 내면 심리와 성격의 미묘한 차이를 보여준다면, 동양 12지는 그 사람이 속한 세대와 시대적 흐름 속에서의 운명의 큰 그림을 보여준다고 볼 수 있습니다.' },
          { t: 'p', text: '결국 두 체계는 인간을 이해하는 언어입니다. 어느 체계가 옳고 그름이 아니라, 각자가 자신에게 의미 있는 언어를 선택하여 자기 이해와 성찰의 도구로 활용하면 됩니다.' },
        ],
      },
    ],
  },
  en: {
    intro:
      'The Eastern twelve animals and the Western zodiac grew up independently over millennia. This is how the two systems see the relationship between people and the sky — differently, and yet alike.',
    cta: 'A daily reading that puts your sign and your animal together',
    sections: [
      {
        heading: 'The two systems side by side',
        blocks: [
          {
            t: 'table',
            head: ['Aspect', 'Western zodiac', 'Eastern twelve animals'],
            rows: [
              ['Origin', 'Mesopotamia → Greece → Rome', 'Ancient China (possibly the Shang era)'],
              ['Basis', 'The Sun’s yearly path (the ecliptic)', 'Lunar cycle + Jupiter’s 12-year orbit'],
              ['Cycle', 'Roughly one month per sign', '12 years per animal cycle'],
              ['Number', '12 signs', '12 animals'],
              ['Energy system', 'Four elements (fire, earth, air, water)', 'Yin-yang and five phases (wood, fire, earth, metal, water)'],
              ['Assigned by', 'Birthday (month)', 'Birth year'],
              ['Focus', 'Individual character, behaviour, psychology', 'Temperament, fate, relationships'],
            ],
          },
        ],
      },
      {
        heading: 'The Western zodiac — the language of the Sun',
        blocks: [
          { t: 'p', text: 'The Sun is at the centre of Western astrology. The band of sky the Sun crosses in a year — the ecliptic — is divided into twelve, and those are the zodiac signs. Where the Sun stood on your birthday becomes "your sign".' },
          { t: 'p', text: 'Western astrology is especially strong on individual psychology and character. Psychological astrology, developed in the twentieth century, joined with Jungian analytic psychology and is widely used as a tool of self-enquiry. Each of the twelve signs can be read as one archetypal pattern of the human psyche.' },
          { t: 'p', text: 'Planetary positions are the other key. A natal chart, drawn from birth date, time and place, includes the positions of the Sun, Moon, Mercury, Venus, Mars, Jupiter, Saturn, Uranus, Neptune and Pluto, allowing a far finer reading.' },
        ],
      },
      {
        heading: 'The Eastern animals — the rhythm of the Moon and Jupiter',
        blocks: [
          { t: 'p', text: 'The Eastern twelve branches grew out of the lunar calendar. Twelve animals — rat, ox, tiger, rabbit, dragon, snake, horse, goat, monkey, rooster, dog, pig — each stand for one year, cycling over twelve.' },
          { t: 'p', text: 'The number twelve is thought to come from Jupiter’s orbit of about 11.86 years. Ancient Chinese astronomers took Jupiter’s circuit of the sky as twelve years and divided each year among the animals by Jupiter’s position.' },
          { t: 'p', text: 'The animals divide temperament on a far broader timescale than the Western signs. The idea that everyone born in the same year shares certain traits is useful for reading generational and group patterns rather than individuals alone.' },
          { t: 'p', text: 'Eastern astrology also developed the four pillars — year, month, day and hour of birth — known as saju in Korean. There the four pillars and eight characters are read as the whole picture of a life, not the birth year alone.' },
        ],
      },
      {
        heading: 'Yin-yang and five phases vs four elements',
        blocks: [
          { t: 'p', text: 'The most interesting comparison between the systems is how each sorts energy.' },
          {
            t: 'box',
            title: 'West: four elements',
            tone: 'accent',
            text: '🔥 **Fire:** passion, creativity, action\n🌍 **Earth:** stability, practicality, matter\n💨 **Air:** intellect, communication, change\n💧 **Water:** feeling, intuition, the unconscious\n\nComing from Greek philosophy, the four elements describe the basic states of matter and set each sign’s temperament.',
          },
          {
            t: 'box',
            title: 'East: yin-yang and five phases',
            tone: 'warm',
            text: '🌿 **Wood:** growth, creativity, the energy of spring\n🔥 **Fire:** passion, expression, the energy of summer\n🌏 **Earth:** balance, stability, the centre\n⚙️ **Metal:** decision, harvest, the energy of autumn\n💧 **Water:** wisdom, flexibility, the energy of winter\n\nThe five phases are linked by a dynamic relation in which each generates and each restrains another.',
          },
          { t: 'p', text: 'Interestingly, both systems share fire, water and earth, and Eastern wood resembles Western air while metal resembles the energy of Venus and Saturn. That two systems developed independently over thousands of years and still sorted the basic energies of nature so similarly is remarkable.' },
        ],
      },
      {
        heading: 'Where the two overlap',
        blocks: [
          { t: 'p', text: 'There is no official one-to-one correspondence, but the two are often compared for similarities of energy and character.' },
          {
            t: 'table',
            head: ['Animal', 'Similar Western sign', 'Shared traits'],
            rows: [
              ['🐭 Rat', 'Gemini, Scorpio', 'Cleverness, quickness, adaptability'],
              ['🐮 Ox', 'Taurus, Capricorn', 'Patience, diligence, a wish for stability'],
              ['🐯 Tiger', 'Leo, Aries', 'Courage, leadership, strong will'],
              ['🐰 Rabbit', 'Pisces, Libra', 'Gentleness, a wish for peace, delicacy'],
              ['🐉 Dragon', 'Aries, Leo', 'Charisma, passion, creativity'],
              ['🐍 Snake', 'Scorpio, Virgo', 'Intuition, caution, depth'],
              ['🐎 Horse', 'Sagittarius, Gemini', 'Freedom, activity, independence'],
              ['🐑 Goat', 'Pisces, Taurus', 'Sensitivity, an artistic eye, mildness'],
              ['🐒 Monkey', 'Gemini, Aquarius', 'Curiosity, wit, many talents'],
              ['🐓 Rooster', 'Virgo, Capricorn', 'Perfectionism, analysis, confidence'],
              ['🐕 Dog', 'Sagittarius, Cancer', 'Loyalty, honesty, protectiveness'],
              ['🐷 Pig', 'Pisces, Taurus', 'Generosity, frankness, enjoyment of life'],
            ],
          },
        ],
      },
      {
        heading: 'Using both systems together',
        blocks: [
          { t: 'p', text: 'Reading the Western sign and the Eastern animal together gives a much richer picture. The Western sign can describe your month-to-month temperament; the animal can describe your yearly disposition and the shape of your luck.' },
          { t: 'p', text: 'Many astrology enthusiasts do use both side by side. Where the Western sign shows the subtle differences of inner psychology and character, the animal shows the larger picture of a life inside its generation and its era.' },
          { t: 'p', text: 'In the end both are languages for understanding people. The question is not which one is right, but which language means something to you as a tool for self-understanding and reflection.' },
        ],
      },
    ],
  },
  ja: {
    intro:
      '数千年をかけて独立に発展してきた東洋の十二支と西洋の黄道十二宮。人と宇宙の関係を、二つの体系がどう違う形で、そしてどう似た形で見ているかをたどります。',
    cta: '星座と干支をあわせて読む今日の運勢',
    sections: [
      {
        heading: '二つの体系の基本構造',
        blocks: [
          {
            t: 'table',
            head: ['項目', '西洋の星座', '東洋の十二支'],
            rows: [
              ['起源', 'メソポタミア → ギリシャ → ローマ', '古代中国（殷の時代と推定）'],
              ['基準', '太陽の一年の通り道（黄道）', '月の周期＋木星の12年公転'],
              ['周期', '約一か月（太陽星座）', '12年（十二支の一巡）'],
              ['数', '12星座', '12の動物'],
              ['エネルギーの体系', '四大元素（火・地・風・水）', '陰陽五行（木・火・土・金・水）'],
              ['決め方', '誕生日（月）で決まる', '生まれた年で決まる'],
              ['読み解きの焦点', '個性、行動の仕方、心理', '気質、運命、対人関係'],
            ],
          },
        ],
      },
      {
        heading: '西洋の星座 — 太陽の言葉',
        blocks: [
          { t: 'p', text: '西洋占星術の中心は太陽です。地球から見て太陽が一年で通る空の道（黄道）を12に分けたものが黄道十二宮です。誕生日に太陽がどの星座にあったかが「自分の星座」になります。' },
          { t: 'p', text: '西洋占星術は個人の心理と性格の分析にとくに強い。20世紀に発展した心理占星術はユングの分析心理学と結びつき、自己探究の道具として広く使われています。12星座はそれぞれ、人間の心理の12の元型的なパターンを表すと読めます。' },
          { t: 'p', text: 'もうひとつの重要な要素は惑星の位置です。誕生日と出生時刻、場所から作るホロスコープには太陽・月・水星・金星・火星・木星・土星・天王星・海王星・冥王星の位置がすべて含まれ、はるかに細かな読み解きが可能になります。' },
        ],
      },
      {
        heading: '東洋の十二支 — 月と木星のリズム',
        blocks: [
          { t: 'p', text: '東洋の十二支は太陰暦をもとに発展しました。12の動物（ねずみ・うし・とら・うさぎ・たつ・へび・うま・ひつじ・さる・とり・いぬ・いのしし）がそれぞれ一年を表し、12年で一巡します。' },
          { t: 'p', text: '12という数は木星の公転周期（約11.86年）に由来すると考えられています。古代中国の天文家は木星が天を一巡する時間を12年ととらえ、その位置によって毎年を12の動物に分けました。' },
          { t: 'p', text: '十二支は西洋の星座よりはるかに広い時間の尺度で人の気質を分けます。同じ年に生まれた人が共通の性質を持つという考えは、個人よりも世代や集団のパターンを見るのに役立ちます。' },
          { t: 'p', text: '東洋占星術ではさらに、生まれた年だけでなく月・日・時刻もあわせて読む四柱推命の体系が発達しました。生まれた年月日時の四つの柱と八つの文字が、人生の全体像を描くとされます。' },
        ],
      },
      {
        heading: '陰陽五行と四大元素 — エネルギーの分け方',
        blocks: [
          { t: 'p', text: '二つの体系でもっとも興味深い比較点は、エネルギーをどう分類するかです。' },
          {
            t: 'box',
            title: '西洋：四大元素',
            tone: 'accent',
            text: '🔥 **火:** 情熱、創造性、行動\n🌍 **地:** 安定、実用、物質\n💨 **風:** 知性、対話、変化\n💧 **水:** 感情、直感、無意識\n\nギリシャ哲学に由来する四大元素は物質の基本状態を表し、各星座の気質を決めます。',
          },
          {
            t: 'box',
            title: '東洋：陰陽五行',
            tone: 'warm',
            text: '🌿 **木:** 成長、創造、春のエネルギー\n🔥 **火:** 情熱、表現、夏のエネルギー\n🌏 **土:** 均衡、安定、中央\n⚙️ **金:** 決断、収穫、秋のエネルギー\n💧 **水:** 知恵、柔軟、冬のエネルギー\n\n五行は互いを生み（相生）、互いを抑える（相克）力関係でつながっています。',
          },
          { t: 'p', text: '興味深いことに、両方の体系は火・水・地（土）を共有し、東洋の木は西洋の風に、金は金星や土星のエネルギーに近い概念を持ちます。数千年をかけて独立に発展しながら、自然の根本的なエネルギーをよく似た形で分類したのは驚きです。' },
        ],
      },
      {
        heading: '十二支と西洋星座の対応',
        blocks: [
          { t: 'p', text: '公式な一対一の対応はありませんが、エネルギーの似たものとして比較されることがあります。' },
          {
            t: 'table',
            head: ['干支', '似ている西洋の星座', '共通する性質'],
            rows: [
              ['🐭 ねずみ', '双子座・蠍座', '利口さ、機敏さ、適応力'],
              ['🐮 うし', '牡牛座・山羊座', '忍耐、勤勉、安定志向'],
              ['🐯 とら', '獅子座・牡羊座', '勇気、リーダーシップ、強い意志'],
              ['🐰 うさぎ', '魚座・天秤座', '穏やかさ、平和を願う心、繊細さ'],
              ['🐉 たつ', '牡羊座・獅子座', 'カリスマ、情熱、創造性'],
              ['🐍 へび', '蠍座・乙女座', '直感、慎重さ、深さ'],
              ['🐎 うま', '射手座・双子座', '自由、活動性、独立心'],
              ['🐑 ひつじ', '魚座・牡牛座', '感受性、芸術的な感覚、温和さ'],
              ['🐒 さる', '双子座・水瓶座', '好奇心、機知、多才さ'],
              ['🐓 とり', '乙女座・山羊座', '完璧主義、分析力、自信'],
              ['🐕 いぬ', '射手座・蟹座', '忠誠心、正直さ、守る本能'],
              ['🐷 いのしし', '魚座・牡牛座', '寛容さ、率直さ、人生の楽しみ'],
            ],
          },
        ],
      },
      {
        heading: '二つの体系を一緒に使う',
        blocks: [
          { t: 'p', text: '西洋の星座と東洋の干支をあわせて読むと、はるかに豊かな自己理解が得られます。西洋の星座で「毎月の自分の傾向」をとらえ、干支で「一年の気質と運の流れ」を見る、という使い方です。' },
          { t: 'p', text: '実際に多くの占星術ファンが二つを併用しています。西洋の星座が内面の心理や性格の微妙な違いを示すのに対し、干支はその人が属する世代と時代の流れの中での運命の大きな絵を示す、と見ることができます。' },
          { t: 'p', text: '結局のところ、二つは人を理解するための言葉です。どちらが正しいかではなく、自分にとって意味のある言葉を選び、自己理解と省察の道具として使えばよいのです。' },
        ],
      },
    ],
  },
};
