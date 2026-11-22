import type { BlogArticleContent } from './types';

export const morningFortuneRitual: BlogArticleContent = {
  related: ['barnum-effect-astrology', 'daily-horoscope-habit'],
  ko: {
    intro:
      '운세는 예언이 아니다. 심리학이 밝혀낸 ‘실행 의도’와 ‘점화 효과’ 원리로 보면, 아침의 운세 확인은 하루의 방향을 의도적으로 설계하는 강력한 도구가 될 수 있다.',
    cta: '오늘의 키워드를 찾아보세요',
    sections: [
      {
        heading: '아침은 왜 특별한가: 인지 부하와 하루의 프레임',
        blocks: [
          { t: 'image', src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=80', alt: '아침 루틴' },
          { t: 'p', text: '심리학자 로이 바우마이스터의 ‘자아 고갈(Ego Depletion)’ 이론에 따르면 인간의 의사결정 능력은 하루 동안 사용할수록 소진된다. 오전에는 인지 자원이 가득 찬 상태다. 이때 설정한 의도와 프레임은 하루 전체에 걸쳐 영향을 미친다.' },
          { t: 'p', text: '오후에 지친 상태로 “오늘 어떻게 지낼까”를 고민하는 것과, 오전에 맑은 정신으로 “오늘의 핵심 키워드는 소통이다”라고 설정하는 것은 같은 생각이 아니다. 인지 부하가 낮은 아침에 하루의 테마를 설정하면, 이후의 선택들이 그 방향을 따라 자연스럽게 정렬된다.' },
          { t: 'p', text: '여기서 운세 확인이 힘을 갖는다. 운세는 하루의 프레임을 제공하는 짧고 강렬한 단서다. 중요한 것은 그것이 “예언”인지가 아니라, 그것이 오늘 내가 어떤 방향을 향해 살아갈지를 의도적으로 설정하는 계기가 되느냐이다.' },
        ],
      },
      {
        heading: '실행 의도: “X 상황에서 Y를 할 것이다”',
        blocks: [
          { t: 'p', text: '심리학자 피터 골위처는 1999년 목표 달성 연구에서 흥미로운 패턴을 발견했다. 단순히 “운동을 더 하겠다”고 결심한 사람보다, “월요일 아침 7시에 집 앞 공원에서 30분 달리겠다”처럼 구체적인 상황과 행동을 연결한 사람의 목표 달성률이 **2~3배 높았다**. 그는 이것을 ‘실행 의도(Implementation Intention)’라고 불렀다.' },
          { t: 'p', text: '아침 운세 확인은 이 메커니즘과 구조적으로 유사하다. “오늘은 인간관계에서 신중함이 필요한 날”이라는 운세를 읽은 사람은 무의식적으로 “누군가와 충돌할 것 같은 상황에서 나는 한 번 더 생각하겠다”는 실행 의도를 형성한다. 별자리가 그 계기를 만든다.' },
          { t: 'p', text: '이 원리를 의도적으로 활용하면 훨씬 강력해진다. 운세를 읽은 뒤 “오늘 이 키워드를 나는 어떤 방식으로 실천할 것인가”를 한 줄로 적는 습관이 그것이다. 막연한 운세가 구체적인 실행 의도로 변환되는 순간이다.' },
        ],
      },
      {
        heading: '점화 효과: 아침에 읽은 한 단어가 하루를 바꾼다',
        blocks: [
          { t: 'p', text: '인지심리학의 ‘점화 효과(Priming Effect)’는 특정 단어나 개념에 노출되면 그와 관련된 생각과 행동이 증가하는 현상을 말한다. 실험에서 “따뜻함”과 관련된 단어를 읽은 피험자들은 이후 낯선 사람을 더 친절하게 대했고, “경쟁”과 관련된 단어에 노출된 피험자들은 이후 게임에서 더 공격적으로 행동했다.' },
          { t: 'p', text: '아침에 “오늘은 소통이 중요한 날입니다”라는 운세를 읽으면, ‘소통’이라는 개념이 뇌에 점화된다. 이후 대화에서 더 주의 깊게 듣고, 이메일을 더 신중하게 쓰고, 오해가 생길 것 같은 상황에서 먼저 확인하게 된다. 점화된 개념이 행동을 유도하는 것이다.' },
          { t: 'p', text: '이 원리는 운세의 “진실 여부”와 무관하게 작동한다. 아침에 읽은 키워드가 무엇이든, 그것이 하루 동안 뇌의 배경에서 작동하며 관련 정보에 더 민감하게 반응하도록 만든다. 그래서 어떤 키워드를 선택하느냐가 중요하다.' },
        ],
      },
      {
        heading: 'StarFate와 함께하는 5단계 아침 운세 루틴',
        blocks: [
          { t: 'p', text: '위의 심리학적 원리를 바탕으로, 운세를 단순 소비가 아닌 의도 설정 도구로 활용하는 구체적인 루틴을 제안한다. 총 5분이면 충분하다.' },
          {
            t: 'cards',
            items: [
              { title: '① 전날 밤', text: '기기를 침실 밖에 두어라. 기상 직후 스마트폰을 확인하면 알림과 뉴스의 “소음”에 즉시 노출된다. 아침의 인지 자원이 수동적 정보 소비로 먼저 소진된다. 침실을 디지털 자극 없는 공간으로 만드는 것이 아침 루틴의 전제 조건이다.' },
              { title: '② 기상 후', text: '물 한 잔을 마셔라. 수면 중 탈수된 신체를 깨우는 가장 간단한 방법이다. 물을 마시는 이 30초가 “나는 지금 하루를 의도적으로 시작하고 있다”는 신호를 뇌에 보낸다. 작은 의식이 의도를 강화한다.' },
              { title: '③ 3분', text: 'StarFate에서 오늘의 운세를 확인하라. 빠르게 스크롤하지 마라. 천천히 읽으며 “이 중 오늘 나에게 가장 울림이 있는 한 문장은 무엇인가”를 찾아라. 전체 내용을 수동적으로 흡수하는 것이 아니라 능동적으로 선택하는 과정이다.' },
              { title: '④ 키워드', text: '오늘의 키워드 하나를 노트에 적어라. 단어 하나면 충분하다. “인내”, “소통”, “용기”, “집중”. 적는 행위가 점화를 강화한다. 디지털 메모도 좋지만, 손으로 쓰는 것이 기억에 더 깊이 남는다는 연구 결과가 있다. 이 한 단어가 오늘의 실행 의도의 씨앗이 된다.' },
              { title: '⑤ 시작', text: '하루를 시작하라. 별도의 명상이나 긴 준비 시간이 필요 없다. 이미 오늘의 프레임이 설정되었다. 이 키워드를 스마트폰 잠금화면에 적어두거나, 손목에 가볍게 써두는 것도 점화 효과를 하루 내내 유지하는 방법이다.' },
            ],
          },
        ],
      },
      {
        heading: '저녁의 반추: 하루를 거울로 보는 법',
        blocks: [
          { t: 'p', text: '아침 루틴의 완성은 저녁에 있다. 하루를 마치며 아침에 적은 키워드와 실제 하루를 비교하는 5분이다. 이것은 점성술의 정확성을 검증하는 시간이 아니다. 자기 인식(self-awareness)을 높이는 시간이다.' },
          { t: 'p', text: '“오늘 키워드 ‘소통’이 실제로 내 하루에서 어떻게 나타났는가?” “그 키워드를 의식했을 때와 그렇지 않았을 때 내 행동이 달랐는가?” 이런 질문은 외부의 예언을 확인하는 것이 아니라, 자신의 반응 패턴을 관찰하는 것이다.' },
          { t: 'p', text: '심리학에서 자기 인식은 성장의 핵심 조건이다. 무의식적으로 하루를 보내는 것과, 의도를 설정하고 그 의도와 현실 사이의 간격을 관찰하는 것 사이에는 큰 차이가 있다. 운세는 이 관찰의 시작점을 만들어준다.' },
          { t: 'p', text: '일주일 후 돌아보면 패턴이 보이기 시작한다. 어떤 키워드에 더 민감하게 반응하는지, 어떤 유형의 날에 더 의도적으로 행동하는지. 이것이 축적되면 별자리 이야기가 나에 대한 이야기로 서서히 변해간다.' },
        ],
      },
      {
        heading: '운세를 ‘예언’이 아닌 ‘의도 설정’으로 읽는다는 것',
        blocks: [
          { t: 'p', text: '“오늘 재정적으로 좋은 일이 생긴다”는 운세를 수동적으로 기다리는 것과, “오늘은 재정 감각을 키우기 좋은 날”로 읽고 지출을 한 번 더 검토하거나 재테크 관련 기사 하나를 읽는 것은 같은 운세의 완전히 다른 활용이다.' },
          { t: 'p', text: '전자는 운명론이다. 결과를 외부에 맡기는 태도다. 후자는 의도 설정이다. 운세가 주목하라고 가리키는 방향으로 자신의 행동을 조정하는 능동적 태도다. 같은 언어를 읽어도, 어떤 자세로 읽느냐에 따라 전혀 다른 하루가 만들어진다.' },
          { t: 'p', text: 'StarFate가 제안하는 것은 이 두 번째 방식이다. 오늘의 별자리 운세를 “이미 결정된 하루의 대본”이 아니라, “오늘 내가 주목할 방향의 초대장”으로 읽는 것. 그 초대를 받아들일지, 어떻게 응답할지는 언제나 당신의 손에 있다.' },
        ],
      },
      {
        heading: '참고 자료',
        blocks: [
          {
            t: 'links',
            items: [
              { label: 'Peter M. Gollwitzer, “Implementation Intentions: Strong Effects of Simple Plans” (1999)', href: 'https://doi.org/10.1037/0003-066X.54.7.493', note: '목표 행동을 구체적인 상황과 연결하는 실행 의도 연구입니다.' },
            ],
          },
        ],
      },
    ],
  },
  en: {
    intro:
      'A fortune is not a prophecy. Seen through the psychology of implementation intentions and priming, checking one in the morning can be a strong tool for designing the direction of a day on purpose.',
    cta: 'Find today’s keyword',
    sections: [
      {
        heading: 'Why morning is special: cognitive load and the frame of a day',
        blocks: [
          { t: 'image', src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=80', alt: 'A morning routine' },
          { t: 'p', text: 'Roy Baumeister’s theory of ego depletion holds that the capacity for decision-making drains as the day goes on. In the morning the cognitive tank is full, and the intentions and frames set then shape the whole day.' },
          { t: 'p', text: 'Wondering how to get through the day when tired in the afternoon is not the same thought as setting "today’s keyword is communication" with a clear head in the morning. Set the theme while cognitive load is low and later choices line up with it naturally.' },
          { t: 'p', text: 'This is where checking a fortune gains force: a fortune is a short, vivid cue that gives the day a frame. What matters is not whether it is a prophecy, but whether it becomes the occasion for deliberately setting the direction you will live in today.' },
        ],
      },
      {
        heading: 'Implementation intentions: "in situation X, I will do Y"',
        blocks: [
          { t: 'p', text: 'In 1999 the psychologist Peter Gollwitzer found an interesting pattern in goal research. People who merely resolved to "exercise more" reached their goal far less often than those who tied a concrete situation to a concrete action — "at 7 a.m. on Monday I will run for 30 minutes in the park by my house". Their success rate was **two to three times higher**. He called it the implementation intention.' },
          { t: 'p', text: 'Checking a morning fortune works in a structurally similar way. Someone who reads that today calls for care in relationships unconsciously forms the intention "when a conflict looks likely, I will think once more". The zodiac provides the occasion.' },
          { t: 'p', text: 'Used deliberately, it gets much stronger. The habit is to read the fortune and then write one line: "how will I practise this keyword today?" That is the moment a vague fortune turns into a concrete implementation intention.' },
        ],
      },
      {
        heading: 'Priming: one word read in the morning can change the day',
        blocks: [
          { t: 'p', text: 'The priming effect in cognitive psychology is the finding that exposure to a word or concept increases related thoughts and behaviour. In experiments, people who read words connected with warmth behaved more kindly to a stranger afterwards, and people exposed to words about competition played a game more aggressively.' },
          { t: 'p', text: 'Read in the morning that communication matters today and the concept is primed. You then listen more closely in conversation, write email more carefully, and check first when a misunderstanding looks likely. The primed concept guides the behaviour.' },
          { t: 'p', text: 'This works regardless of whether the fortune is true. Whatever keyword you read in the morning works in the background of the mind all day, making you more sensitive to related information. Which is why the keyword you choose matters.' },
        ],
      },
      {
        heading: 'A five-step morning routine with StarFate',
        blocks: [
          { t: 'p', text: 'From those psychological principles, here is a routine that turns a fortune from consumption into a tool for setting intention. Five minutes is enough.' },
          {
            t: 'cards',
            items: [
              { title: '① The night before', text: 'Leave your devices outside the bedroom. Checking a phone the moment you wake exposes you immediately to the noise of notifications and news, and the morning’s cognitive resources are spent on passive intake. A bedroom free of digital stimulation is the precondition for any morning routine.' },
              { title: '② On waking', text: 'Drink a glass of water. It is the simplest way to wake a body dehydrated by sleep, and those thirty seconds send the brain the signal "I am starting this day on purpose". A small ritual strengthens the intention.' },
              { title: '③ Three minutes', text: 'Check today’s fortune on StarFate. Do not scroll fast. Read slowly and look for the one sentence that resonates most today. This is not passive absorption but an active choice.' },
              { title: '④ The keyword', text: 'Write one keyword in a notebook — a single word is enough: patience, communication, courage, focus. Writing reinforces the priming. A digital note works, but research suggests handwriting is remembered more deeply. That one word becomes the seed of today’s implementation intention.' },
              { title: '⑤ Begin', text: 'Start the day. No separate meditation or long preparation is needed; the frame is already set. Writing the keyword on your phone’s lock screen, or lightly on your wrist, keeps the priming alive through the day.' },
            ],
          },
        ],
      },
      {
        heading: 'Evening review: holding the day up as a mirror',
        blocks: [
          { t: 'p', text: 'The morning routine is completed in the evening, with five minutes comparing the keyword you wrote with how the day actually went. This is not a check on astrology’s accuracy; it is time that raises self-awareness.' },
          { t: 'p', text: 'How did the keyword "communication" actually show up in my day? Did my behaviour differ when I was conscious of it? Such questions do not verify an outside prophecy; they observe your own patterns of reaction.' },
          { t: 'p', text: 'In psychology, self-awareness is a core condition of growth. There is a large difference between letting a day pass unconsciously and setting an intention and observing the gap between it and reality. A fortune provides a starting point for that observation.' },
          { t: 'p', text: 'Look back after a week and patterns begin to appear: which keywords you respond to more, on what kind of day you act more deliberately. Accumulated, the zodiac story slowly becomes a story about you.' },
        ],
      },
      {
        heading: 'Reading a fortune as intent, not prophecy',
        blocks: [
          { t: 'p', text: 'Waiting passively for a fortune that says something good will happen financially is one thing. Reading it as "a good day to sharpen my sense of money", reviewing your spending once more or reading one article about saving, is a completely different use of the same fortune.' },
          { t: 'p', text: 'The first is fatalism — handing the outcome to something outside. The second is setting intention — actively adjusting your behaviour toward the direction the fortune points at. Reading the same words in a different posture makes an entirely different day.' },
          { t: 'p', text: 'What StarFate suggests is the second way: read today’s sign not as a script already written but as an invitation to the direction you will pay attention to today. Whether to accept it, and how to answer, is always in your hands.' },
        ],
      },
      {
        heading: 'Sources',
        blocks: [
          {
            t: 'links',
            items: [
              { label: 'Peter M. Gollwitzer, “Implementation Intentions: Strong Effects of Simple Plans” (1999)', href: 'https://doi.org/10.1037/0003-066X.54.7.493', note: 'research on linking a goal action to a concrete situation.' },
            ],
          },
        ],
      },
    ],
  },
  ja: {
    intro:
      '運勢は予言ではありません。心理学が明らかにした「実行意図」と「プライミング効果」の原理から見れば、朝の運勢チェックは一日の方向を意図的に設計する強力な道具になります。',
    cta: '今日のキーワードを探してみてください',
    sections: [
      {
        heading: '朝が特別な理由 — 認知負荷と一日の枠組み',
        blocks: [
          { t: 'image', src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=80', alt: '朝のルーティン' },
          { t: 'p', text: '心理学者ロイ・バウマイスターの「自我消耗（エゴ・ディプレッション）」理論によれば、人の意思決定の力は一日のうちに使うほど消耗します。午前は認知資源が満ちている状態で、そのとき定めた意図と枠組みが一日全体に影響します。' },
          { t: 'p', text: '午後に疲れた状態で「今日をどう過ごそう」と考えるのと、午前に澄んだ頭で「今日の核心キーワードは対話だ」と定めるのは同じ思考ではありません。認知負荷の低い朝にテーマを決めれば、その後の選択がその方向に沿って自然に並びます。' },
          { t: 'p', text: 'ここで運勢チェックが力を持ちます。運勢は一日の枠組みを与える短く強い手がかりです。大切なのはそれが「予言」かどうかではなく、今日をどの方向へ生きるかを意図的に定めるきっかけになるかどうかです。' },
        ],
      },
      {
        heading: '実行意図 — 「Xの状況でYをする」',
        blocks: [
          { t: 'p', text: '心理学者ピーター・ゴルヴィッツァーは1999年の目標研究で興味深いパターンを見つけました。ただ「もっと運動しよう」と決めた人より、「月曜の朝7時に家の前の公園で30分走る」のように具体的な状況と行動を結びつけた人の達成率が**2〜3倍高かった**のです。彼はこれを「実行意図」と呼びました。' },
          { t: 'p', text: '朝の運勢チェックはこの仕組みと構造的に似ています。「今日は人間関係で慎重さが必要な日」と読んだ人は、無意識に「ぶつかりそうな場面ではもう一度考える」という実行意図をつくります。星座がそのきっかけになるのです。' },
          { t: 'p', text: 'この原理を意図的に使うとより強くなります。運勢を読んだあと「今日このキーワードをどう実践するか」を一行書く習慣です。曖昧な運勢が具体的な実行意図に変わる瞬間です。' },
        ],
      },
      {
        heading: 'プライミング効果 — 朝読んだ一語が一日を変える',
        blocks: [
          { t: 'p', text: '認知心理学の「プライミング効果」は、特定の言葉や概念に触れると、関連する思考と行動が増える現象です。実験では「温かさ」に関する言葉を読んだ人はその後見知らぬ人により親切に接し、「競争」に関する言葉に触れた人はその後ゲームでより攻撃的に行動しました。' },
          { t: 'p', text: '朝「今日は対話が大切な日です」と読めば、「対話」という概念が脳にプライミングされます。その後の会話でより注意深く聞き、メールをより慎重に書き、誤解が生じそうな場面で先に確かめる。プライミングされた概念が行動を導くのです。' },
          { t: 'p', text: 'この原理は運勢の「真偽」とは無関係に働きます。朝読んだキーワードが何であれ、それが一日中、脳の背景で働き、関連する情報に敏感にさせます。だからどのキーワードを選ぶかが重要なのです。' },
        ],
      },
      {
        heading: 'StarFateと行う5ステップの朝のルーティン',
        blocks: [
          { t: 'p', text: '以上の心理学的原理をもとに、運勢を単なる消費ではなく意図設定の道具にする具体的なルーティンを提案します。合計5分で十分です。' },
          {
            t: 'cards',
            items: [
              { title: '① 前の晩', text: '端末を寝室の外に置く。起きてすぐスマホを見ると、通知とニュースの「雑音」にすぐさらされます。朝の認知資源が受動的な情報消費で先に使われてしまう。寝室をデジタル刺激のない場所にすることが朝のルーティンの前提条件です。' },
              { title: '② 起床後', text: '水を一杯飲む。睡眠中に脱水した体を起こすもっとも簡単な方法です。この30秒が「私はいま一日を意図的に始めている」という合図を脳に送ります。小さな儀式が意図を強めます。' },
              { title: '③ 3分', text: 'StarFateで今日の運勢を見る。速くスクロールしないこと。ゆっくり読みながら「このなかで今日いちばん響く一文はどれか」を探す。全体を受動的に吸収するのではなく、能動的に選ぶ過程です。' },
              { title: '④ キーワード', text: '今日のキーワードをひとつノートに書く。一語で十分。「忍耐」「対話」「勇気」「集中」。書く行為がプライミングを強めます。デジタルメモでもよいけれど、手で書くほうが記憶に残るという研究もあります。この一語が今日の実行意図の種になります。' },
              { title: '⑤ 開始', text: '一日を始める。別の瞑想や長い準備はいりません。すでに今日の枠組みはできています。このキーワードをスマホのロック画面に書いておく、手首に軽く書いておくのも、プライミングを一日中保つ方法です。' },
            ],
          },
        ],
      },
      {
        heading: '夜の振り返り — 一日を鏡として見る',
        blocks: [
          { t: 'p', text: '朝のルーティンの完成は夜にあります。一日を終えて、朝書いたキーワードと実際の一日を比べる5分。これは占星術の正確さを検証する時間ではなく、自己認識を高める時間です。' },
          { t: 'p', text: '「今日のキーワード『対話』は実際の一日でどう現れたか」「そのキーワードを意識したときとそうでないときで行動は違ったか」。こうした問いは外部の予言を確かめるのではなく、自分の反応のパターンを観察するものです。' },
          { t: 'p', text: '心理学で自己認識は成長の核心条件です。無意識に一日を過ごすことと、意図を定めてその意図と現実のあいだの隔たりを観察することのあいだには大きな差があります。運勢はその観察の出発点をつくります。' },
          { t: 'p', text: '一週間後に振り返るとパターンが見え始めます。どのキーワードにより敏感に反応するか、どんな種類の日に意図的に行動するか。これが積み重なると、星座の話は少しずつ自分についての話に変わっていきます。' },
        ],
      },
      {
        heading: '運勢を「予言」ではなく「意図設定」として読むこと',
        blocks: [
          { t: 'p', text: '「今日は金銭的に良いことが起きる」という運勢を受動的に待つことと、「今日はお金の感覚を育てるのに良い日」と読んで支出をもう一度見直したり、貯蓄の記事を一本読んだりするのは、同じ運勢のまったく違う使い方です。' },
          { t: 'p', text: '前者は運命論で、結果を外に委ねる姿勢です。後者は意図設定で、運勢が指し示す方向へ自分の行動を調整する能動的な姿勢です。同じ言葉を読んでも、どんな姿勢で読むかでまったく違う一日が生まれます。' },
          { t: 'p', text: 'StarFateが提案するのは二つ目の読み方です。今日の星座の運勢を「すでに決められた一日の台本」ではなく、「今日私が目を向ける方向への招待状」として読むこと。その招待を受け入れるか、どう応えるかは、いつもあなたの手のなかにあります。' },
        ],
      },
      {
        heading: '参照資料',
        blocks: [
          {
            t: 'links',
            items: [
              { label: 'Peter M. Gollwitzer, “Implementation Intentions: Strong Effects of Simple Plans” (1999)', href: 'https://doi.org/10.1037/0003-066X.54.7.493', note: '目標の行動を具体的な状況と結びつける実行意図の研究です。' },
            ],
          },
        ],
      },
    ],
  },
};
