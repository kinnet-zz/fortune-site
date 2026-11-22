import type { BlogArticleContent } from './types';

export const howToReadDailyFortune: BlogArticleContent = {
  related: ['what-is-astrology', 'planets-and-zodiac-signs'],
  ko: {
    intro:
      '운세는 맹목적으로 믿거나 완전히 무시하는 것이 아니라 현명하게 활용하는 것이 핵심입니다. 하루를 더 의미 있게 만드는 운세 활용법을 알아보세요.',
    cta: '오늘 나의 운세 확인하기',
    sections: [
      {
        heading: '운세란 무엇인가 — 예언인가, 가이드인가?',
        blocks: [
          { t: 'p', text: '운세(運勢)는 문자 그대로 "운(運)의 흐름과 기세(勢)"를 의미합니다. 동서양을 막론하고 수천 년 동안 사람들은 천체의 움직임, 자연의 변화, 수의 패턴 등을 통해 시간의 흐름 속에서 유리하거나 불리한 국면을 파악하려 했습니다.' },
          { t: 'p', text: '중요한 것은 운세를 어떤 시각으로 바라보느냐입니다. "운세가 좋다"고 해서 노력 없이 좋은 일이 생기고, "운세가 나쁘다"고 해서 반드시 안 좋은 일이 일어나는 것은 아닙니다. 오히려 운세는 오늘 어떤 흐름이 강하고 약한지를 보여주는 나침반에 가깝습니다.' },
          { t: 'p', text: '운이 좋은 날에는 더 과감하게 도전하고, 운이 어려운 날에는 더 신중하게 준비하는 — 이런 방식으로 운세를 활용할 때 가장 실질적인 가치를 얻을 수 있습니다.' },
        ],
      },
      {
        heading: '오늘의 운세는 어떻게 구성되나?',
        blocks: [
          { t: 'p', text: '오늘의 운세는 생년월일을 기반으로 별자리와 띠를 계산하고, 오늘 날짜의 천문학적 데이터(천체의 위치, 달의 위상 등)와 전통 점성술 해석 체계를 결합하여 구성됩니다.' },
          { t: 'p', text: 'StarFate에서 운세를 생성할 때는 다음 요소들이 고려됩니다:' },
          {
            t: 'ul',
            items: [
              '**태양 별자리:** 생일을 기반으로 계산된 서양 12별자리. 성격과 기본 에너지를 나타냅니다.',
              '**동양 띠:** 태어난 해를 기반으로 계산된 12지지. 기질과 운명의 큰 틀을 나타냅니다.',
              '**오늘 날짜:** 현재의 시간적 에너지와 계절의 흐름을 반영합니다.',
              '**성별:** 음양의 원리에 따라 에너지의 방향성이 미묘하게 달라집니다.',
            ],
          },
          { t: 'p', text: 'StarFate는 이 데이터를 수천 년간 축적된 점성술 해석 체계와 함께 분석하여 개인별 운세 문장을 구성합니다. 같은 별자리라도 날짜와 입력 정보에 따라 다른 내용이 제공됩니다.' },
        ],
      },
      {
        heading: '운세 점수 이해하기 — 숫자가 의미하는 것',
        blocks: [
          { t: 'p', text: 'StarFate의 운세에는 1~100점 사이의 점수가 포함됩니다. 이 점수는 현재의 에너지 흐름이 얼마나 순조로운지를 나타내는 지표입니다.' },
          {
            t: 'cards',
            items: [
              { title: '70~100 · 좋은 날 — 흐름을 타세요', tone: 'positive', text: '행성 에너지가 순행하고 전반적인 흐름이 좋은 날입니다. 중요한 결정, 새로운 시작, 사람들과의 만남에 유리합니다. 다만 지나친 자신감으로 판단력이 흐려지지 않도록 주의하세요.' },
              { title: '40~69 · 보통 날 — 꾸준히 나아가세요', tone: 'warm', text: '큰 기복 없이 평범한 에너지가 흐르는 날입니다. 특별한 행운도 없지만 큰 장애도 없습니다. 일상적인 업무를 착실히 진행하기에 적합한 날입니다.' },
              { title: '1~39 · 어려운 날 — 신중하게 대처하세요', tone: 'caution', text: '에너지가 역행하거나 긴장된 기운이 흐르는 날입니다. 중요한 결정이나 새로운 시작은 미루는 것이 좋습니다. 운세에 포함된 구체적인 대처법을 참고하여 어려움을 최소화하세요.' },
            ],
          },
        ],
      },
      {
        heading: '운세의 4가지 항목 깊이 읽기',
        blocks: [
          { t: 'p', text: 'StarFate의 운세는 종합운, 연애운, 금전운, 직업운 4가지로 구성됩니다. 각 항목을 어떻게 읽어야 할지 알아보겠습니다.' },
          {
            t: 'cards',
            items: [
              { title: '🌟 종합운 — 오늘의 전체적인 에너지 흐름', text: '오늘 하루 전반적인 에너지의 방향을 나타냅니다. 어떤 태도로 하루를 시작해야 할지, 어디에 집중해야 할지의 방향성을 제시합니다. 구체적인 사건이 아닌 에너지의 질(質)을 파악하세요.' },
              { title: '💕 연애운 — 관계와 감정의 흐름', text: '연인이 있는 분은 파트너와의 관계에서 오늘 어떤 에너지가 흐르는지를 나타냅니다. 싱글인 분은 새로운 만남이나 감정적 흐름을 참고하세요. 연애운이 좋지 않은 날에는 중요한 감정 표현이나 갈등 해결보다 서로에게 공간을 주는 것이 도움이 됩니다.' },
              { title: '💰 금전운 — 재정과 물질적 에너지', text: '재정적 결정, 투자, 소비 패턴에 관한 에너지를 나타냅니다. 금전운이 좋은 날에도 충동적인 투자는 피하고, 나쁜 날에는 특히 큰 재정 결정을 신중하게 검토하세요.' },
              { title: '💼 직업운 — 일과 성취의 에너지', text: '업무 효율, 동료 관계, 커리어 기회에 관한 에너지를 나타냅니다. 직업운이 좋은 날에는 중요한 프레젠테이션이나 협상을 하기 좋으며, 어려운 날에는 뒷받침 작업이나 준비에 집중하세요.' },
            ],
          },
        ],
      },
      {
        heading: '운세를 건강하게 활용하는 7가지 방법',
        blocks: [
          {
            t: 'ol',
            items: [
              '**아침에 읽고, 저녁에 돌아보기:** 아침에 운세를 읽어 하루의 방향성을 설정하고, 저녁에 실제 하루와 비교해보세요. 시간이 지나면 패턴이 보이기 시작합니다.',
              '**구체적 행동 지침으로 변환하기:** "금전운이 나쁘다"는 메시지를 받으면 "오늘은 충동구매를 자제하고 예산을 확인해야겠다"는 구체적 행동으로 변환하세요.',
              '**흐름에 맞춰 계획 조정하기:** 운세가 좋은 날에 중요한 미팅, 발표, 대화를 배치하고, 어려운 날에는 준비와 정비에 집중하는 방식으로 활용해보세요.',
              '**맹목적 믿음 경계하기:** 운세가 좋은 날에 무조건 성공하고 나쁜 날에 반드시 실패한다고 믿지 마세요. 운세는 확률과 에너지의 흐름을 나타낼 뿐, 결과를 결정하지 않습니다.',
              '**불안 증폭 도구로 사용하지 않기:** 운세를 보고 지나치게 불안해하거나 걱정이 늘어난다면 잠시 운세 보기를 쉬어가는 것도 좋습니다. 운세는 불안의 원인이 되어서는 안 됩니다.',
              '**중요한 결정은 운세만으로 하지 않기:** 취업, 이사, 결혼 등 중요한 결정은 충분한 정보와 논리적 판단을 기반으로 해야 합니다. 운세는 참고 자료일 뿐입니다.',
              '**자기 이해의 거울로 활용하기:** 운세의 내용이 자신의 현재 상황과 어떻게 공명하는지 생각해보세요. 점성술은 자기 성찰의 언어로 사용할 때 가장 깊은 가치를 발휘합니다.',
            ],
          },
        ],
      },
      {
        heading: '운세 점수가 낮을 때 — 어떻게 대처할까?',
        blocks: [
          { t: 'p', text: '운세 점수가 낮은 날이라도 잘 대처하면 실제 영향을 최소화할 수 있습니다. StarFate의 오늘의 운세는 점수가 50 미만일 때 각 항목별 구체적인 대처법을 포함합니다. 이 내용을 꼼꼼히 읽고 적용해보세요.' },
          {
            t: 'box',
            title: '낮은 운세 점수 날의 실전 대처법',
            tone: 'accent',
            text: '• 중요한 결정과 계약은 다음 날로 미루기\n• 평소보다 더 신중하게 언어를 선택하여 불필요한 갈등 예방\n• 충분한 수면과 영양 섭취로 신체적 방어력 높이기\n• 감사 일기 쓰기 등 긍정적 마음 상태 유지하기\n• 새로운 시작보다 기존 일의 마무리와 정리에 집중하기\n• 에너지를 절약하고 불필요한 소모를 줄이기',
          },
        ],
      },
    ],
  },
  en: {
    intro:
      'A fortune is neither something to believe blindly nor to dismiss outright; what counts is using it well. Here is how to make a fortune part of a more deliberate day.',
    cta: 'Check my fortune for today',
    sections: [
      {
        heading: 'What a fortune is — prophecy or guide?',
        blocks: [
          { t: 'p', text: 'The word for fortune in Korean, "unse", means literally the flow and force of fortune. East and west, for thousands of years people have tried to read favourable and unfavourable phases of time through the movement of the sky, the change of seasons and the patterns of numbers.' },
          { t: 'p', text: 'What matters is the angle you take. A good fortune does not mean good things arrive without effort, and a bad one does not mean bad things must happen. A fortune is closer to a compass that shows which current is strong today and which is weak.' },
          { t: 'p', text: 'On a strong day, risk a little more; on a difficult day, prepare more carefully. Used that way, a fortune gives its most practical value.' },
        ],
      },
      {
        heading: 'How a daily fortune is put together',
        blocks: [
          { t: 'p', text: 'A daily fortune starts from your birth date to calculate a zodiac sign and a Chinese zodiac animal, then combines that with the astronomical data for today — planetary positions, the phase of the Moon — and with traditional astrological reading.' },
          { t: 'p', text: 'StarFate weighs the following:' },
          {
            t: 'ul',
            items: [
              '**Sun sign:** the Western sign calculated from your birthday, showing character and basic energy.',
              '**Chinese animal:** the branch calculated from your birth year, showing temperament and the broad shape of fate.',
              '**Today’s date:** the current energy of time and the movement of the season.',
              '**Gender:** yin and yang principles nudge the direction of the energy slightly.',
            ],
          },
          { t: 'p', text: 'StarFate reads all of this through a system of interpretation built up over thousands of years and writes the result as a personal reading. The same sign gets different content depending on the date and what was entered.' },
        ],
      },
      {
        heading: 'Understanding the score',
        blocks: [
          { t: 'p', text: 'A StarFate reading includes a score between 1 and 100. It indicates how smoothly the energy is flowing right now.' },
          {
            t: 'cards',
            items: [
              { title: '70–100 · A good day — go with the flow', tone: 'positive', text: 'Planetary energy runs forward and the overall current is good. Favourable for important decisions, new starts and meeting people. Just be careful that confidence does not cloud your judgement.' },
              { title: '40–69 · An ordinary day — keep going steadily', tone: 'warm', text: 'Ordinary energy without big swings. No special luck, but no great obstacle either. A good day for working through routine tasks.' },
              { title: '1–39 · A difficult day — act with care', tone: 'caution', text: 'Energy runs backward or tense. Better to postpone big decisions and new starts. Use the concrete countermeasures in the reading to keep trouble small.' },
            ],
          },
        ],
      },
      {
        heading: 'Reading the four sections in depth',
        blocks: [
          { t: 'p', text: 'A StarFate reading has four parts: overall, love, money and work. Here is how to read each.' },
          {
            t: 'cards',
            items: [
              { title: '🌟 Overall — the shape of the day', text: 'Shows the direction of the day’s energy: what attitude to start with and where to put your attention. Read the quality of the energy rather than looking for specific events.' },
              { title: '💕 Love — relationships and feeling', text: 'With a partner, it shows what energy moves between you today. If you are single, use it as a hint about new meetings and emotional flow. On a weaker day, giving each other room helps more than a heavy emotional conversation or resolving a conflict.' },
              { title: '💰 Money — finances and material energy', text: 'Shows the energy around financial decisions, investing and spending. Avoid impulse investing even on a good day; on a weak day, look especially carefully at any large financial decision.' },
              { title: '💼 Work — effort and achievement', text: 'Shows energy around efficiency, colleagues and career chances. A good day suits an important presentation or negotiation; on a difficult day, focus on supporting work and preparation.' },
            ],
          },
        ],
      },
      {
        heading: 'Seven healthy ways to use a fortune',
        blocks: [
          {
            t: 'ol',
            items: [
              '**Read it in the morning, review it at night:** set the day’s direction in the morning, then compare it with what actually happened in the evening. Patterns start to appear over time.',
              '**Turn it into a concrete action:** if the message is that money energy is poor, turn it into "I will skip impulse purchases and check my budget today".',
              '**Adjust the plan to the flow:** put an important meeting, presentation or conversation on a strong day; use a difficult day for preparation and tidying.',
              '**Watch blind belief:** do not assume a good day guarantees success or a bad day guarantees failure. A fortune shows probabilities and the flow of energy; it does not decide the outcome.',
              '**Do not use it to feed anxiety:** if reading a fortune leaves you more worried than before, it is fine to skip it for a while. A fortune should not be a source of anxiety.',
              '**Never decide something important on a fortune alone:** a job, a move, a marriage — those need enough information and reasoned judgement. A fortune is reference material.',
              '**Use it as a mirror:** think about how the reading resonates with where you actually are. Astrology gives most when it is a language for self-reflection.',
            ],
          },
        ],
      },
      {
        heading: 'What to do on a low-scoring day',
        blocks: [
          { t: 'p', text: 'Even on a low-scoring day, handling it well can keep the real impact small. When the score is under 50, a StarFate reading includes concrete countermeasures for each section. Read them carefully and put them to use.' },
          {
            t: 'box',
            title: 'Practical measures for a low-scoring day',
            tone: 'accent',
            text: '• Move important decisions and contracts to the next day\n• Choose your words more carefully than usual to avoid needless friction\n• Raise your physical defences with enough sleep and food\n• Keep a positive state of mind, for example with a gratitude note\n• Focus on finishing and tidying existing work rather than starting something new\n• Save energy and cut unnecessary expenditure of it',
          },
        ],
      },
    ],
  },
  ja: {
    intro:
      '運勢は盲信するものでも、完全に無視するものでもありません。賢く使うことが大切です。一日をより意味のあるものにする運勢の使い方を紹介します。',
    cta: '今日の自分の運勢を見る',
    sections: [
      {
        heading: '運勢とは何か — 予言か、道しるべか',
        blocks: [
          { t: 'p', text: '「運勢」は文字どおり、運の流れと勢いを意味します。洋の東西を問わず、人々は数千年にわたって天体の動き、自然の変化、数のパターンなどから、時の流れの中で有利な局面と不利な局面を読み取ろうとしてきました。' },
          { t: 'p', text: '大切なのは、どんな視点で運勢を見るかです。「運勢が良い」から努力なしに良いことが起きるわけでも、「運勢が悪い」から必ず悪いことが起きるわけでもありません。運勢はむしろ、今日どの流れが強く、どこが弱いかを示す羅針盤に近いものです。' },
          { t: 'p', text: '運が良い日はより大胆に挑み、難しい日はより慎重に備える。そう使うとき、運勢はいちばん実用的な価値を持ちます。' },
        ],
      },
      {
        heading: '今日の運勢はどう組み立てられるか',
        blocks: [
          { t: 'p', text: '今日の運勢は、生年月日から星座と干支を計算し、今日の日付の天文データ（天体の位置や月の満ち欠けなど）と伝統的な占星術の解釈体系を組み合わせて作られます。' },
          { t: 'p', text: 'StarFateが運勢を生成するときに考慮する要素は次のとおりです。' },
          {
            t: 'ul',
            items: [
              '**太陽星座:** 誕生日から計算する西洋の12星座。性格と基本的なエネルギーを表します。',
              '**東洋の干支:** 生まれた年から計算する十二支。気質と運命の大きな枠組みを表します。',
              '**今日の日付:** いまの時間のエネルギーと季節の流れを反映します。',
              '**性別:** 陰陽の原理により、エネルギーの向きが微妙に変わります。',
            ],
          },
          { t: 'p', text: 'StarFateはこれらのデータを、数千年かけて積み上げられた占星術の解釈体系とあわせて読み、個人ごとの運勢の文章にします。同じ星座でも、日付と入力内容によって内容が変わります。' },
        ],
      },
      {
        heading: 'スコアの意味を知る',
        blocks: [
          { t: 'p', text: 'StarFateの運勢には1〜100のスコアが含まれます。これは、いまのエネルギーの流れがどれだけ順調かを示す指標です。' },
          {
            t: 'cards',
            items: [
              { title: '70〜100・良い日 — 流れに乗る', tone: 'positive', text: '惑星のエネルギーが順行し、全体の流れが良い日です。重要な決断、新しい始まり、人との出会いに有利です。ただし自信過剰で判断が曇らないよう注意してください。' },
              { title: '40〜69・ふつうの日 — 着実に進む', tone: 'warm', text: '大きな起伏のない、平凡なエネルギーが流れる日です。特別な幸運も大きな障害もありません。日々の仕事を着実に進めるのに向いています。' },
              { title: '1〜39・難しい日 — 慎重に対処する', tone: 'caution', text: 'エネルギーが逆行したり、張り詰めた気配が流れる日です。重要な決断や新しい始まりは先に延ばすのが良いでしょう。運勢に含まれる具体的な対処法を参考に、困難を小さくしてください。' },
            ],
          },
        ],
      },
      {
        heading: '4つの項目を深く読む',
        blocks: [
          { t: 'p', text: 'StarFateの運勢は総合運・恋愛運・金運・仕事運の4つで構成されます。それぞれの読み方を見ていきましょう。' },
          {
            t: 'cards',
            items: [
              { title: '🌟 総合運 — 今日全体のエネルギーの流れ', text: '一日のエネルギーの向きを表します。どんな姿勢で一日を始め、どこに集中すべきかの方向性を示します。具体的な出来事ではなく、エネルギーの質をつかんでください。' },
              { title: '💕 恋愛運 — 関係と感情の流れ', text: 'パートナーがいる人は、今日ふたりの間にどんなエネルギーが流れるかを示します。ひとりの人は新しい出会いや感情の流れの参考に。恋愛運が良くない日は、重い感情表現や対立の解決よりも、互いに余白を残すほうが助けになります。' },
              { title: '💰 金運 — 家計と物質のエネルギー', text: 'お金の判断、投資、消費の傾向についてのエネルギーを表します。金運が良い日でも衝動的な投資は避け、悪い日はとくに大きなお金の判断を慎重に検討してください。' },
              { title: '💼 仕事運 — 仕事と達成のエネルギー', text: '業務の効率、同僚との関係、キャリアの機会についてのエネルギーを表します。仕事運が良い日は重要なプレゼンや交渉に、難しい日は下支えの作業や準備に集中しましょう。' },
            ],
          },
        ],
      },
      {
        heading: '運勢を健全に使う7つの方法',
        blocks: [
          {
            t: 'ol',
            items: [
              '**朝に読み、夜に振り返る:** 朝に運勢を読んで一日の方向を定め、夜に実際の一日と比べてみましょう。時間が経つとパターンが見えてきます。',
              '**具体的な行動に変える:** 「金運が悪い」というメッセージは、「今日は衝動買いを控えて予算を確認しよう」という具体的な行動に置き換えます。',
              '**流れに合わせて予定を調整する:** 運勢が良い日に大切な打ち合わせや発表、会話を置き、難しい日は準備と整備に集中する。そんな使い方をしてみてください。',
              '**盲信を避ける:** 運勢が良い日は必ず成功し、悪い日は必ず失敗する、と考えないこと。運勢は確率とエネルギーの流れを示すだけで、結果を決めるものではありません。',
              '**不安を増やす道具にしない:** 運勢を見て強く不安になったり心配が増えたりするなら、しばらく運勢を見るのを休んでもかまいません。運勢が不安の原因になってはいけません。',
              '**大事な決断を運勢だけで決めない:** 就職、引っ越し、結婚などの重要な決断は、十分な情報と論理的な判断をもとにするものです。運勢は参考資料にすぎません。',
              '**自分を知る鏡として使う:** 運勢の内容が自分の今の状況とどう響き合うかを考えてみてください。占星術は自己省察の言葉として使うとき、もっとも深い価値を発揮します。',
            ],
          },
        ],
      },
      {
        heading: 'スコアが低い日はどうするか',
        blocks: [
          { t: 'p', text: 'スコアが低い日でも、うまく対処すれば実際の影響は小さくできます。StarFateの今日の運勢は、スコアが50未満のとき、各項目ごとの具体的な対処法を含みます。よく読んで実践してみてください。' },
          {
            t: 'box',
            title: 'スコアが低い日の実践的な対処法',
            tone: 'accent',
            text: '• 大事な決断や契約は翌日に延ばす\n• いつもより慎重に言葉を選び、不要な行き違いを避ける\n• 十分な睡眠と栄養で体の防御力を高める\n• 感謝を書き留めるなど、前向きな心の状態を保つ\n• 新しく始めるより、進行中の仕事の仕上げと整理に集中する\n• エネルギーを節約し、無駄な消耗を減らす',
          },
        ],
      },
    ],
  },
};

export const dailyHoroscopeHabit: BlogArticleContent = {
  ko: {
    intro:
      '맞아서 계속한 게 아니었다. 틀릴 때 오히려 더 많은 것을 배웠다. 4년간 하루도 빠짐없이 운세를 확인한 사람의 솔직한 기록.',
    cta: '오늘의 운세를 직접 확인해보고 싶다면',
    sections: [
      {
        heading: '시작은 우연이었다',
        blocks: [
          { t: 'p', text: '2021년 초였다. 당시 나는 이직을 준비하면서 마음이 굉장히 불안정했다. 재직 중인 회사에서의 평가는 나쁘지 않았지만, 3년 넘게 같은 일을 반복하는 것에 지쳐 있었고, 새로운 곳으로 옮겼다가 잘 적응하지 못하면 어떡하나 하는 걱정이 늘 따라다녔다.' },
          { t: 'p', text: '그 시기에 친구가 운세 앱을 추천해줬다. "야, 너 물병자리잖아. 올해 물병자리 운이 엄청 좋대." 나는 그런 말을 딱히 믿지 않는 편이었다. 통계학을 전공한 사람이 별자리 운세를 진지하게 받아들인다는 게 스스로 우습게 느껴지기도 했다. 그냥 심심풀이로 딱 한 번만 보자고 앱을 깔았다.' },
          { t: 'p', text: '그게 4년이 됐다. 지금도 매일 아침 커피를 내리면서 그날의 운세를 확인한다.' },
          { t: 'image', src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop&q=80', alt: '아침 커피와 노트', caption: '매일 아침의 루틴 — 커피 한 잔과 함께 시작하는 하루' },
        ],
      },
      {
        heading: '처음 6개월 — 확증 편향의 함정',
        blocks: [
          { t: 'p', text: '초반에는 솔직히 \'맞는 것만 기억하는\' 패턴에 빠졌다. 운세에서 "오늘 예상치 못한 좋은 소식이 있을 것"이라고 했는데, 점심에 팀장님이 커피를 사줬다. 나는 그걸 맞았다고 기록했다. 반대로 "재물운이 좋지 않으니 지출을 줄이라"고 했는데 지하철에서 지갑을 잃어버렸을 때는 소름이 돋는다고 생각했다.' },
          { t: 'p', text: '하지만 운세가 "대인관계에서 오해가 생길 수 있다"고 했는데 아무 일도 없이 하루가 끝나면 그냥 넘겼다. 틀린 것은 기억에서 지워버리고 맞은 것만 축적하는 인지 왜곡이 일어났다. 나중에 대학원 수업에서 이게 \'확증 편향(confirmation bias)\'이라는 걸 배우면서 내가 얼마나 운세를 선택적으로 소비했는지 깨달았다.' },
          { t: 'p', text: '그래서 6개월쯤 됐을 때부터 작은 노트에 운세 내용과 실제 그날 일어난 일을 모두 기록하기 시작했다. 맞았는지 틀렸는지를 객관적으로 추적하기 위해서. 지금도 그 노트가 있는데, 보면 꽤 재미있다.' },
        ],
      },
      {
        heading: '1년 치 데이터를 분석해보니',
        blocks: [
          { t: 'p', text: '1년간 운세를 기록하고 나서 분석해봤다. 결론부터 말하면, 운세가 "맞은" 확률은 내가 기대했던 것보다 낮았고, 그게 오히려 좋았다.' },
          { t: 'p', text: '명확하게 맞아떨어진 경우는 전체의 약 20% 정도였다. 그리고 절반 정도는 너무 모호해서 맞는지 틀린지 판단 자체가 어려웠다. "에너지가 높은 날", "내면의 변화가 있을 것" 같은 표현들은 사실상 어떤 날에도 해당되는 이야기였다. 나머지 30%는 명확하게 틀렸다고 볼 수 있었다.' },
          { t: 'p', text: '그런데 흥미로운 게 하나 있었다. 운세를 본 날과 안 본 날을 비교했을 때, 운세를 본 날 아침이 훨씬 더 \'의도적인 하루\'를 보냈다는 것이다. 운세에서 "오늘은 발언보다 경청이 중요하다"고 했으면, 나는 그날 회의에서 의식적으로 더 많이 들으려 했다. 결과적으로 그날의 팀 미팅이 더 생산적이었다.' },
          { t: 'p', text: '운세가 맞아서가 아니라, 운세가 하루의 \'프레임\'을 잡아줬기 때문이었다.' },
        ],
      },
      {
        heading: '틀렸을 때가 더 유용했다',
        blocks: [
          { t: 'p', text: '가장 기억에 남는 건 2022년 9월이었다. 당시 중요한 프레젠테이션이 있었는데, 운세는 "오늘 커뮤니케이션 운이 좋지 않으니 중요한 발표나 계약은 미루는 것이 좋다"고 했다. 나는 잠깐 흔들렸다. 미뤄야 하나? 근데 이미 일정이 잡혀 있었고, 상대는 해외에서 온 사람들이었다.' },
          { t: 'p', text: '발표는 잘 됐다. 오히려 그날 운세가 나쁘다는 걸 알았기 때문에 전날 밤 준비를 더 꼼꼼하게 했다. 운세가 좋다고 했으면 방심했을 수도 있었다. 아이러니하게도 나쁜 운세가 더 좋은 결과를 만들었다.' },
          { t: 'p', text: '그 이후로 나는 나쁜 운세를 두려워하지 않게 됐다. "오늘 조심하라"는 말을 \'오늘 더 철저히 준비하라\'는 신호로 받아들이기 시작했다. 운세를 예언이 아닌 리마인더로 쓰는 방식으로 바뀐 것이다.' },
          { t: 'image', src: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&auto=format&fit=crop&q=80', alt: '손으로 쓴 일기와 노트', caption: '운세와 실제 하루를 비교 기록한 노트 — 4년이 쌓이면 패턴이 보인다' },
        ],
      },
      {
        heading: '4년이 지난 지금 내가 생각하는 것',
        blocks: [
          { t: 'p', text: '4년간 매일 운세를 봤지만, 나는 여전히 운세가 과학적으로 검증된 예측 도구라고 생각하지 않는다. 별자리와 천체의 위치가 내 금전운을 직접적으로 결정한다는 인과관계는 없다고 본다. 적어도 내가 아는 물리학의 범위 안에서는.' },
          { t: 'p', text: '그럼에도 4년째 하고 있는 이유는, 운세가 하루를 시작하는 \'마음의 준비\' 역할을 하기 때문이다. 마치 출근 전 날씨를 확인하는 것과 비슷하다. 비가 온다고 해서 하루가 망하는 건 아니지만, 우산을 챙기게 된다. 운세도 그런 것이다.' },
          { t: 'p', text: '가끔 주변 사람들이 "그걸 진짜 믿어?"라고 물을 때, 나는 이렇게 대답한다. "믿는다기보다는, 활용한다." 그 차이가 중요하다. 운세를 믿는 사람은 좋은 운세에 안주하고 나쁜 운세에 두려워한다. 운세를 활용하는 사람은 그것을 하루의 방향성을 잡는 도구로 쓴다.' },
          { t: 'p', text: '어쩌면 가장 좋은 운세는, 스스로 오늘을 어떻게 살고 싶은지를 생각하게 만드는 운세일지도 모른다.' },
        ],
      },
      {
        heading: '실용적인 운세 활용 팁 — 4년의 경험에서',
        blocks: [
          {
            t: 'cards',
            items: [
              { title: '01. 아침에 확인하라', text: '저녁에 확인하면 하루가 이미 끝난 뒤라 의미가 없다. 운세는 그날의 태도를 잡아주는 것이기 때문에 반드시 아침에 봐야 한다.' },
              { title: '02. 나쁜 운세를 두려워하지 마라', text: '나쁜 운세는 \'조심하라\'는 신호가 아니라 \'더 준비하라\'는 신호다. 운이 좋은 날은 도전하고, 운이 나쁜 날은 철저히 준비하라.' },
              { title: '03. 운세를 이유로 삼지 마라', text: '"오늘 운이 나빠서 못했다"는 말은 금지다. 운세는 핑계가 되어선 안 된다. 책임은 항상 자신에게 있다.' },
              { title: '04. 기록하면 패턴이 보인다', text: '3개월 이상 운세와 실제 일을 함께 기록하면, 어떤 운세 표현이 자신의 삶과 더 잘 맞는지 감이 생긴다. 그게 진짜 개인화된 운세다.' },
            ],
          },
        ],
      },
    ],
  },
  en: {
    intro:
      'I did not keep going because it was right. I learned more when it was wrong. An honest record from someone who checked a daily fortune every single day for four years.',
    cta: 'Want to check today’s fortune for yourself?',
    sections: [
      {
        heading: 'It started by accident',
        blocks: [
          { t: 'p', text: 'It was early 2021. I was preparing to change jobs and my mind was not steady. My reviews at the company were fine, but three years of the same work had worn me down, and I kept worrying that a new place might not fit me either.' },
          { t: 'p', text: 'Around then a friend recommended a fortune app. "You’re an Aquarius, right? Apparently Aquarius has a great year." I was not the type to believe that. A statistics graduate taking star signs seriously felt a little ridiculous even to me. I installed the app to look once, for fun.' },
          { t: 'p', text: 'That was four years ago. I still check the day’s fortune while the coffee brews every morning.' },
          { t: 'image', src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop&q=80', alt: 'Morning coffee and a notebook', caption: 'The morning routine — a day that begins with one cup of coffee' },
        ],
      },
      {
        heading: 'The first six months — the confirmation trap',
        blocks: [
          { t: 'p', text: 'Early on I fell, honestly, into remembering only what fit. The reading said unexpected good news might come, and at lunch my manager bought coffee. I wrote that down as a hit. When it warned me to cut spending because money energy was poor and I lost my wallet on the subway, I felt a chill and counted that as a hit too.' },
          { t: 'p', text: 'But when it said a misunderstanding could arise and nothing happened, I let the day pass. Wrong predictions were deleted from memory and only hits accumulated — a cognitive distortion. Later, in a graduate seminar, I learned the name for it: confirmation bias. I realised how selectively I had been consuming fortunes.' },
          { t: 'p', text: 'So after about six months I started writing both the reading and what actually happened into a small notebook, to track hits and misses objectively. I still have that notebook, and it is good fun to read.' },
        ],
      },
      {
        heading: 'What a year of records showed',
        blocks: [
          { t: 'p', text: 'After a year I analysed the notes. The conclusion, up front: the share that clearly "came true" was lower than I expected — and that turned out to be the good news.' },
          { t: 'p', text: 'Roughly 20% matched clearly. About half was so vague that judging it right or wrong was impossible: "a high-energy day", "a change inside you" could apply to any day at all. The remaining 30% was clearly wrong.' },
          { t: 'p', text: 'One thing did interest me. Comparing days I read a fortune with days I did not, the mornings I read one led to a far more deliberate day. If the reading said listening would matter more than speaking, I consciously listened more in that day’s meeting, and the team meeting really was more productive.' },
          { t: 'p', text: 'Not because the fortune was right, but because it set a frame for the day.' },
        ],
      },
      {
        heading: 'Being wrong was more useful',
        blocks: [
          { t: 'p', text: 'The one I remember best is September 2022. I had an important presentation, and the reading said communication energy was poor and a major presentation or contract would be better postponed. I wavered for a moment. Postpone it? The date was already set, and the audience was visiting from abroad.' },
          { t: 'p', text: 'The presentation went well. If anything, knowing the day looked bad made me prepare more carefully the night before. Had the reading promised a good day, I might have been complacent. Ironically, the bad reading produced the better result.' },
          { t: 'p', text: 'Since then I have stopped being afraid of a bad reading. I began to take "be careful today" as a signal to prepare more thoroughly today. A fortune became a reminder rather than a prophecy.' },
          { t: 'image', src: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&auto=format&fit=crop&q=80', alt: 'A handwritten diary and notes', caption: 'The notebook comparing readings with real days — after four years, patterns appear' },
        ],
      },
      {
        heading: 'What I think now, four years on',
        blocks: [
          { t: 'p', text: 'Four years of daily reading have not convinced me that a fortune is a scientifically verified prediction. I do not see a causal link by which the signs and the positions of the planets decide my finances — not within the physics I know, at least.' },
          { t: 'p', text: 'I keep doing it because a fortune works as mental preparation for starting a day, much like checking the weather before leaving. Rain does not ruin the day, but it makes you take an umbrella. A fortune is like that.' },
          { t: 'p', text: 'When people ask whether I really believe it, I answer: "I don’t so much believe it as use it." The difference matters. Someone who believes a fortune settles into a good one and fears a bad one. Someone who uses one makes it a tool for setting the day’s direction.' },
          { t: 'p', text: 'Perhaps the best fortune is the one that makes you think about how you want to live today.' },
        ],
      },
      {
        heading: 'Practical tips from four years',
        blocks: [
          {
            t: 'cards',
            items: [
              { title: '01. Check it in the morning', text: 'In the evening the day is already over and it means nothing. A fortune sets the day’s attitude, so it has to be read in the morning.' },
              { title: '02. Do not fear a bad reading', text: 'A bad reading is not a warning to be careful but a signal to prepare more. Challenge on a good day; prepare thoroughly on a bad one.' },
              { title: '03. Never use it as an excuse', text: '"I couldn’t do it because my luck was bad" is out. A fortune must not become an excuse. Responsibility is always yours.' },
              { title: '04. Keep notes and patterns appear', text: 'Write the reading and the real day together for three months or more, and you get a feel for which phrasing fits your life. That is genuinely personal fortune.' },
            ],
          },
        ],
      },
    ],
  },
  ja: {
    intro:
      '当たったから続けたのではありません。外れたときのほうが多くを学びました。四年間、毎日欠かさず運勢を見た人の正直な記録です。',
    cta: '今日の運勢を自分でも見てみたいなら',
    sections: [
      {
        heading: '始まりは偶然だった',
        blocks: [
          { t: 'p', text: '2021年の初めでした。当時、転職を準備していて気持ちがとても落ち着きませんでした。在籍していた会社での評価は悪くなかったものの、三年以上同じ仕事を繰り返すことに疲れていて、新しい場所に移ってうまくなじめなかったらどうしようという心配がいつもついて回っていました。' },
          { t: 'p', text: 'その時期に友人が運勢アプリを勧めてきました。「お前、水瓶座だろ。今年の水瓶座はすごく運がいいらしいぞ」。私はそういう話をとくに信じるほうではありませんでした。統計学を専攻した人間が星座占いを真に受けるのは、自分でも少しおかしく思えるほどでした。ただ暇つぶしに一度だけ見てみようと、アプリを入れたのです。' },
          { t: 'p', text: 'それが四年になりました。今でも毎朝コーヒーを淹れながら、その日の運勢を確認しています。' },
          { t: 'image', src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop&q=80', alt: '朝のコーヒーとノート', caption: '毎朝の習慣 — コーヒー一杯とともに始まる一日' },
        ],
      },
      {
        heading: '最初の半年 — 確証バイアスの罠',
        blocks: [
          { t: 'p', text: '最初のうちは、正直に言えば「当たったことだけを覚える」パターンにはまっていました。運勢が「今日は思いがけない良い知らせがあるでしょう」と言い、昼に上司がコーヒーをごちそうしてくれた。私はそれを当たりとして記録しました。逆に「金運が良くないので支出を控えて」と言われた日に地下鉄で財布を落としたときは、鳥肌が立つと思ったものです。' },
          { t: 'p', text: 'けれど「人間関係で誤解が生じるかもしれません」と言われて何も起きずに一日が終わると、そのまま流していました。外れたことは記憶から消し、当たったものだけを積み上げる認知の歪みが起きていたのです。のちに大学院の授業でこれが「確証バイアス」だと学び、自分がどれだけ選択的に運勢を消費していたかに気づきました。' },
          { t: 'p', text: 'そこで半年ほどたったころから、小さなノートに運勢の内容とその日に実際に起きたことを両方書き始めました。当たりか外れかを客観的に追うためです。そのノートは今も残っていて、見返すとけっこう面白い。' },
        ],
      },
      {
        heading: '一年分のデータを分析すると',
        blocks: [
          { t: 'p', text: '一年間記録してから分析しました。結論から言えば、運勢が「当たった」割合は期待したより低く、それがむしろ良かったのです。' },
          { t: 'p', text: 'はっきり当たったのは全体のおよそ20%でした。そして半分ほどは漠然としすぎて、当たりか外れかを判断すること自体が難しいものでした。「エネルギーが高い日」「内面の変化があるでしょう」といった表現は、実際にはどの日にも当てはまる話でした。残りの30%ははっきり外れと言えました。' },
          { t: 'p', text: 'ところが興味深いことが一つありました。運勢を見た日と見なかった日を比べると、見た日の朝のほうがずっと「意図のある一日」を過ごしていたのです。運勢が「今日は発言より傾聴が大切」と言えば、その日の会議で意識して多く聞こうとしました。結果としてその日のチームミーティングはより生産的でした。' },
          { t: 'p', text: '運勢が当たったからではなく、運勢が一日の「枠組み」を与えてくれたからでした。' },
        ],
      },
      {
        heading: '外れたときのほうが役に立った',
        blocks: [
          { t: 'p', text: 'いちばん記憶に残っているのは2022年9月です。大事なプレゼンがあり、運勢は「今日はコミュニケーション運が良くないので、重要な発表や契約は延ばすのが良い」と言いました。一瞬ためらいました。延ばすべきか。でも日程はすでに決まっていて、相手は海外から来た人たちでした。' },
          { t: 'p', text: '発表はうまくいきました。むしろその日の運勢が悪いと知っていたからこそ、前の晩にいっそう念入りに準備しました。運勢が良いと言われていたら油断していたかもしれません。皮肉なことに、悪い運勢のほうが良い結果を生みました。' },
          { t: 'p', text: 'それ以来、悪い運勢を恐れなくなりました。「今日は気をつけて」という言葉を「今日はもっと徹底して備えよ」という合図として受け取るようになったのです。運勢を予言ではなくリマインダーとして使う形に変わりました。' },
          { t: 'image', src: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&auto=format&fit=crop&q=80', alt: '手書きの日記とノート', caption: '運勢と実際の一日を比べて記録したノート — 四年積み重なるとパターンが見える' },
        ],
      },
      {
        heading: '四年たった今、思うこと',
        blocks: [
          { t: 'p', text: '四年間毎日見てきましたが、運勢が科学的に検証された予測の道具だとは今も思いません。星座や天体の位置が自分の金運を直接決めるという因果関係はないと考えています。少なくとも私が知る物理学の範囲では。' },
          { t: 'p', text: 'それでも続けているのは、運勢が一日を始める「心の準備」の役割を果たすからです。出勤前に天気を確かめるのと似ています。雨が降るからといって一日が台無しになるわけではありませんが、傘を持って出ます。運勢もそんなものです。' },
          { t: 'p', text: '周りから「それ、本当に信じてるの？」と聞かれたら、こう答えます。「信じるというより、使っている」。その差は大きい。運勢を信じる人は良い運勢に安住し、悪い運勢を恐れます。運勢を使う人は、それを一日の方向を定める道具にします。' },
          { t: 'p', text: 'もしかすると、いちばん良い運勢とは、今日をどう生きたいかを自分で考えるきっかけになる運勢なのかもしれません。' },
        ],
      },
      {
        heading: '四年の経験から — 実用的な使い方',
        blocks: [
          {
            t: 'cards',
            items: [
              { title: '01. 朝に確認する', text: '夜に見ると一日はもう終わっていて意味がありません。運勢はその日の姿勢を決めるものなので、必ず朝に見ます。' },
              { title: '02. 悪い運勢を恐れない', text: '悪い運勢は「気をつけて」ではなく「もっと備えて」という合図です。運が良い日は挑み、悪い日は徹底して準備する。' },
              { title: '03. 運勢を理由にしない', text: '「今日は運が悪いからできなかった」は禁止です。運勢が言い訳になってはいけません。責任はいつも自分にあります。' },
              { title: '04. 記録すればパターンが見える', text: '三か月以上、運勢と実際の出来事をあわせて記録すると、どんな表現が自分の暮らしに合うかがつかめてきます。それが本当の意味で個人化された運勢です。' },
            ],
          },
        ],
      },
    ],
  },
};
