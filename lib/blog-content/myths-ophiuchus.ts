import type { BlogArticleContent } from './types';

export const zodiacMythsFacts: BlogArticleContent = {
  related: ['barnum-effect-astrology', 'nasa-ophiuchus-13th-zodiac'],
  ko: {
    intro:
      '“저 별자리 같은 건 안 믿어요.” 그렇게 말한 사람이 3분 뒤 상대의 생일을 묻는 장면은 드물지 않습니다. 별자리는 정답표라기보다 대화 카드에 가깝습니다. 맞히지 못해도, 꺼내는 순간 이야기가 시작되니까요.',
    cta: '오늘의 운세에서 지금 마음에 걸리는 문장을 찾아보세요.',
    sections: [
      {
        heading: '밤하늘에는 선이 없는데, 우리는 자꾸 그림을 본다',
        blocks: [
          { t: 'p', text: '오리온의 허리띠는 가죽도 아니고, 물병자리에서 물이 새지도 않습니다. 별 사이에 선을 그은 쪽은 하늘이 아니라 사람입니다. 그런데 그 선 하나 덕분에 밤하늘은 외우기 어려운 점들의 집합에서 기억할 수 있는 이야기로 바뀝니다.' },
          { t: 'p', text: '국제천문연맹(IAU)은 문화마다 자연환경과 생활 방식에 따라 서로 다른 별자리 이야기를 만들었다고 설명합니다. 계절을 짐작하고, 방향을 찾고, 경험을 다음 세대에 전하기 위한 생활의 지도였습니다. 현대 천문학은 밤하늘 전체를 88개 별자리 구역으로 나누지만, 우리가 익숙하게 보는 막대기 모양의 그림까지 공식으로 정해두지는 않습니다.' },
          { t: 'p', text: '그러니 별자리는 처음부터 ‘하늘에 숨겨진 성격검사’라기보다, 사람들이 별을 보고 만든 오래된 스토리텔링에 가깝습니다. 재미의 출발점도 바로 거기 있습니다.' },
        ],
      },
      {
        heading: '뱀주인자리가 등장해도 별자리 주민등록증은 그대로다',
        blocks: [
          { t: 'p', text: '몇 년마다 “당신의 별자리가 바뀌었다”는 소식이 돌아옵니다. 주인공은 대개 뱀주인자리입니다. 천문학에서 뱀주인자리는 실제로 존재하는 공식 별자리입니다. 다만 이것이 곧 점성술의 12궁에 새 멤버가 긴급 합류했다는 뜻은 아닙니다.' },
          { t: 'p', text: '천문학의 별자리는 경계가 제각각인 하늘의 구역이고, 서양 점성술의 12궁은 황도를 30도씩 나눈 상징 체계입니다. 둘은 같은 하늘을 보지만 쓰는 지도가 다릅니다. 지하철 노선도에 한강의 실제 폭이 표시되지 않는다고 해서 노선도가 틀린 것은 아닌 것과 비슷합니다.' },
          { t: 'box', tone: 'cool', text: '결론은 간단합니다. 천문학 기사를 읽을 때는 하늘의 실제 위치를, 별자리 운세를 볼 때는 문화적으로 만들어진 12궁의 언어를 보고 있다는 차이만 기억하면 됩니다.' },
        ],
      },
      {
        heading: '“이거 완전 나잖아”에는 꽤 인간적인 이유가 있다',
        blocks: [
          { t: 'p', text: '1949년 심리학자 버트럼 포러는 학생들에게 성격검사 결과라고 소개한 뒤, 사실상 모두에게 같은 성격 설명을 건넸습니다. 학생들은 그 문장이 자신을 꽤 정확하게 묘사한다고 평가했습니다. 이후 이런 현상은 포러 효과 또는 바넘 효과로 널리 알려졌습니다.' },
          { t: 'p', text: '“사람들과 어울리는 걸 좋아하지만 가끔은 혼자 있고 싶다” 같은 문장은 거의 인류 전체의 단체 공지에 가깝습니다. 좋은 면과 조심스러운 면을 함께 담고, 해석할 여백을 남기면 우리는 현재의 경험을 그 문장 안에 자연스럽게 채워 넣습니다.' },
          { t: 'p', text: '그렇다고 읽는 시간이 전부 헛된 것은 아닙니다. 더 재미있는 질문은 “이 설명이 정말 나인가?”보다 “나는 왜 오늘 이 문장에 유독 멈췄을까?”입니다. 운세가 미래를 비추는 거울은 아니더라도, 지금 내 관심사를 슬쩍 보여주는 거울은 될 수 있습니다.' },
        ],
      },
      {
        heading: '궁합표보다 더 정확한 건 다툰 뒤의 행동이다',
        blocks: [
          { t: 'p', text: '사자자리 둘이 만났다고 반드시 주도권 싸움이 벌어지는 것도 아니고, 물과 불 별자리가 만났다고 연애가 자동 종료되는 것도 아닙니다. 실제 관계에서는 별자리보다 답장이 늦었을 때 어떻게 해석하는지, 서운할 때 말하는지 참는지, 사과를 누가 먼저 시작하는지가 훨씬 많은 것을 설명합니다.' },
          { t: 'p', text: '별자리 궁합을 판결문처럼 읽으면 사람을 열두 칸에 밀어 넣게 됩니다. 반대로 대화의 예고편처럼 쓰면 꽤 쓸모가 있습니다. “넌 전갈자리라 원래 그래”에서 멈추지 말고, 아래처럼 한 번 더 묻는 식입니다.' },
          {
            t: 'ul',
            items: [
              '나는 불편할 때 설명이 길어지는 편일까, 조용해지는 편일까?',
              '상대의 느린 답장을 바쁨으로 읽을까, 무관심으로 읽을까?',
              '관심을 말, 시간, 행동 중 무엇으로 확인하고 싶을까?',
            ],
          },
        ],
      },
      {
        heading: '별자리 운세를 잘 읽는 사람은 전부 믿지 않는다',
        blocks: [
          { t: 'p', text: '“오늘 먼저 연락하면 흐름이 좋아진다”는 문장을 봤다면 우주의 허락을 기다리기보다 미뤄둔 안부가 있는지 떠올려보면 됩니다. “정리의 날”이라면 서랍 하나나 일정 하나를 정리해도 충분합니다. 추상적인 문장을 작은 행동으로 번역할 때 운세는 비로소 생활에 닿습니다.' },
          { t: 'p', text: '단, 돈과 건강 앞에서는 갑자기 현실주의자가 되는 편이 좋습니다. 재물운이 좋다는 날에도 별이 매수 버튼을 대신 눌러주지는 않습니다. 컨디션이 떨어진다는 운세는 휴식의 계기로 삼을 수 있지만, 실제 증상은 운세가 아니라 의료 정보와 전문가에게 물어야 합니다.' },
          { t: 'p', text: '좋은 별자리 콘텐츠는 “당신은 이런 사람”이라고 못 박지 않습니다. 오늘 무엇을 관찰해볼지, 누구에게 말을 걸어볼지, 어떤 습관을 한 번 의심해볼지 제안합니다. 판결문보다 첫 문장에 가까운 셈입니다.' },
        ],
      },
      {
        heading: '그래서 우리는 내일도 별자리를 본다',
        blocks: [
          { t: 'p', text: '별자리가 미래를 정확히 예측한다는 과학적 근거는 부족합니다. 하지만 사람이 밤하늘에서 패턴을 찾고, 그 패턴으로 서로의 이야기를 시작해온 역사는 아주 깁니다. 어쩌면 별자리가 오래 살아남은 이유는 미래를 맞혀서가 아니라, 어색한 침묵과 복잡한 마음 사이에 꽤 괜찮은 질문 하나를 놓아주기 때문인지도 모릅니다.' },
        ],
      },
      {
        heading: '사실 확인에 참고한 자료',
        blocks: [
          {
            t: 'links',
            items: [
              { label: 'IAU, The Constellations', href: 'https://www.iau.org/IAU/IAU/Astronomy-FAQs/Constellations.aspx', note: '별자리의 문화적 형성과 현대 천문학의 88개 별자리 경계' },
              { label: 'Bertram R. Forer (1949), The fallacy of personal validation', href: 'https://doi.org/10.1037/h0059240', note: '개인화된 성격 설명을 받아들이는 경향을 다룬 고전 실험' },
            ],
          },
        ],
      },
    ],
  },
  en: {
    intro:
      '"I don’t believe in that zodiac stuff." It is not rare for the same person to ask a date’s birthday three minutes later. The zodiac is less an answer key than a deck of conversation cards: even when it misses, taking one out starts a story.',
    cta: 'Find the line in today’s fortune that catches your attention.',
    sections: [
      {
        heading: 'There are no lines in the night sky, yet we keep seeing pictures',
        blocks: [
          { t: 'p', text: 'Orion’s belt is not leather, and Aquarius does not leak. The lines between the stars were drawn by people, not by the sky. And because of those lines, the night sky turns from a set of dots too hard to memorise into stories that can be remembered.' },
          { t: 'p', text: 'The International Astronomical Union (IAU) notes that every culture made different constellation stories out of its own landscape and way of life — maps for guessing the season, finding a direction, and passing experience to the next generation. Modern astronomy divides the whole sky into 88 constellation regions, but it does not officially fix the stick-figure drawings we are used to.' },
          { t: 'p', text: 'So the constellations were never a hidden personality test in the sky; they are old storytelling made by people looking up. That is exactly where the fun starts.' },
        ],
      },
      {
        heading: 'Ophiuchus can show up without changing your star-sign ID card',
        blocks: [
          { t: 'p', text: 'Every few years the news goes round that your sign has changed, and the star of the story is usually Ophiuchus. In astronomy Ophiuchus is a real, official constellation. That does not mean a new member has urgently joined the twelve signs of astrology.' },
          { t: 'p', text: 'An astronomical constellation is a region of sky with arbitrary boundaries; the twelve signs of Western astrology are a symbolic system dividing the ecliptic into 30-degree segments. Both look at the same sky with different maps — much as a subway map not showing the true width of a river does not make the map wrong.' },
          { t: 'box', tone: 'cool', text: 'The conclusion is simple: in an astronomy article you are looking at where things really are in the sky; in a horoscope you are looking at the culturally built language of the twelve signs. Keep that difference in mind and nothing else is needed.' },
        ],
      },
      {
        heading: '"That is so me" has a very human reason',
        blocks: [
          { t: 'p', text: 'In 1949 the psychologist Bertram Forer handed students what he called the results of a personality test; in fact he gave almost all of them the same description. The students rated it as a fairly accurate account of themselves. The phenomenon became known as the Forer effect, or the Barnum effect.' },
          { t: 'p', text: 'A line like "you enjoy being with people but sometimes want to be alone" is close to a general notice for all of humanity. Include a good side and a careful side, leave room for interpretation, and we fill the sentence with our own present experience.' },
          { t: 'p', text: 'That does not make the reading time wasted. The more interesting question is not "is this really me?" but "why did I stop at this sentence today?" A fortune cannot be a mirror showing the future, but it can be a mirror that quietly shows what is on your mind.' },
        ],
      },
      {
        heading: 'What happens after an argument is more accurate than any chart',
        blocks: [
          { t: 'p', text: 'Two Leos do not necessarily fight for the lead, and a water sign and a fire sign do not automatically end the romance. In a real relationship, far more is explained by how you read a slow reply, whether you speak or hold back when hurt, and who starts the apology.' },
          { t: 'p', text: 'Read as a verdict, compatibility squeezes people into twelve boxes. Used as a preview for a conversation, it is quite useful. Do not stop at "you’re a Scorpio, that’s just how you are" — ask one more question, like these:' },
          {
            t: 'ul',
            items: [
              'When I am uncomfortable, do I explain at length, or go quiet?',
              'Do I read a slow reply as being busy, or as indifference?',
              'Do I want to see affection in words, in time, or in actions?',
            ],
          },
        ],
      },
      {
        heading: 'People who read a horoscope well do not all believe it',
        blocks: [
          { t: 'p', text: 'If you read that reaching out first will improve the flow today, you need not wait for the universe’s permission — just think whether there is a message you have been putting off. If it is a "day for tidying", one drawer or one calendar item is plenty. A horoscope only touches daily life once an abstract line is translated into a small action.' },
          { t: 'p', text: 'With money and health, though, become a sudden realist. Even on a good money day, the stars do not press the buy button for you. A reading about low energy can be an occasion to rest, but actual symptoms should go to medical information and a professional, not to a fortune.' },
          { t: 'p', text: 'Good zodiac writing does not declare "you are this kind of person". It suggests what to watch today, whom to speak to, which habit to question once. It is closer to a first sentence than to a verdict.' },
        ],
      },
      {
        heading: 'So we will look at the zodiac again tomorrow',
        blocks: [
          { t: 'p', text: 'There is little scientific evidence that the zodiac predicts the future precisely. But the history of people finding patterns in the night sky and using them to start conversations with each other is very long. Perhaps the zodiac has survived not because it gets the future right, but because it places one decent question between an awkward silence and a complicated heart.' },
        ],
      },
      {
        heading: 'Sources consulted',
        blocks: [
          {
            t: 'links',
            items: [
              { label: 'IAU, The Constellations', href: 'https://www.iau.org/IAU/IAU/Astronomy-FAQs/Constellations.aspx', note: 'how constellations were formed culturally, and the IAU’s 88 constellation boundaries' },
              { label: 'Bertram R. Forer (1949), The fallacy of personal validation', href: 'https://doi.org/10.1037/h0059240', note: 'the classic experiment on accepting a personalised personality description' },
            ],
          },
        ],
      },
    ],
  },
  ja: {
    intro:
      '「星座なんて信じてない」。そう言った人が3分後に相手の誕生日を聞く場面は珍しくありません。星座は答え合わせの表というより、会話のカードに近い。当たらなくても、一枚引けば話が始まるからです。',
    cta: '今日の運勢から、いま引っかかる一文を探してみてください。',
    sections: [
      {
        heading: '夜空に線はないのに、私たちは何度も絵を見る',
        blocks: [
          { t: 'p', text: 'オリオンのベルトは革ではありませんし、水瓶座から水が漏れているわけでもありません。星と星のあいだに線を引いたのは空ではなく人です。その線のおかげで、夜空は覚えにくい点の集まりから、覚えていられる物語に変わります。' },
          { t: 'p', text: '国際天文学連合（IAU）は、文化ごとに自然環境や暮らし方に応じて異なる星座の物語がつくられたと説明しています。季節を見当づけ、方角を知り、経験を次の世代へ伝えるための暮らしの地図でした。現代の天文学は夜空全体を88の星座区域に分けますが、私たちに馴染みのある棒線の絵まで公式に定めているわけではありません。' },
          { t: 'p', text: 'つまり星座は、はじめから「空に隠された性格検査」だったのではなく、人が星を見てつくった古い物語に近い。楽しさの出発点もそこにあります。' },
        ],
      },
      {
        heading: 'へびつかい座が現れても、星座の身分証はそのまま',
        blocks: [
          { t: 'p', text: '数年ごとに「あなたの星座が変わった」という話が流れます。主役はたいていへびつかい座です。天文学でへびつかい座は実在する公式の星座です。ただしそれは、占星術の十二宮に新メンバーが緊急加入したという意味ではありません。' },
          { t: 'p', text: '天文学の星座は境界の決まった空の区域、西洋占星術の十二宮は黄道を30度ずつに分けた象徴の体系です。同じ空を見ていても使う地図が違う。地下鉄の路線図に川の実際の幅が描かれていないからといって、路線図が間違いなわけではないのと同じです。' },
          { t: 'box', tone: 'cool', text: '結論は簡単です。天文学の記事では空の実際の位置を、星座の運勢では文化的につくられた十二宮の言葉を見ている。その違いさえ覚えておけば十分です。' },
        ],
      },
      {
        heading: '「これ、完全に私だ」にはとても人間的な理由がある',
        blocks: [
          { t: 'p', text: '1949年、心理学者バートラム・フォアラーは学生たちに性格検査の結果だと伝えて、実際にはほぼ全員に同じ説明を渡しました。学生たちはその文章が自分をかなり正確に描写していると評価しました。のちにこの現象はフォアラー効果、あるいはバーナム効果として知られるようになります。' },
          { t: 'p', text: '「人と過ごすのは好きだが、ときどき一人になりたい」といった一文は、ほぼ人類全体への一斉通知に近い。良い面と慎重な面を併せ持ち、解釈の余白を残せば、私たちは今の経験をその文の中に自然に埋めていきます。' },
          { t: 'p', text: 'だからといって読む時間がすべて無駄なわけではありません。「この説明は本当に私か」より面白い問いは、「なぜ今日、この一文で立ち止まったのか」です。運勢は未来を映す鏡でなくても、いまの関心をそっと映す鏡にはなれます。' },
        ],
      },
      {
        heading: '相性表より正確なのは、言い争ったあとの行動',
        blocks: [
          { t: 'p', text: '獅子座が二人出会ったから必ず主導権争いになるわけでも、水と火の星座が出会ったから恋が自動終了するわけでもありません。実際の関係では、星座よりも、返信が遅れたときどう受け取るか、つらいとき言うか我慢するか、謝るのはどちらからか、のほうがずっと多くを説明します。' },
          { t: 'p', text: '星座の相性を判決文のように読むと、人を十二の枠に押し込みます。逆に会話の予告編のように使うと、かなり役に立ちます。「さそり座だから仕方ない」で止めず、もう一度だけ問いかけるのです。' },
          {
            t: 'ul',
            items: [
              '居心地が悪いとき、私は説明が長くなるほうか、静かになるほうか。',
              '相手の遅い返信を、忙しさと読むか、無関心と読むか。',
              '関心を言葉、時間、行動のどれで確かめたいか。',
            ],
          },
        ],
      },
      {
        heading: '星座の運勢をうまく読む人は、全員が信じているわけではない',
        blocks: [
          { t: 'p', text: '「今日は先に連絡すると流れが良くなる」と読んだなら、宇宙の許可を待つより、先延ばしにしている挨拶がないか思い出せばいい。「整理の日」なら、引き出しひとつ、予定ひとつを整えるだけで十分です。抽象的な一文を小さな行動に翻訳したとき、運勢は初めて暮らしに届きます。' },
          { t: 'p', text: 'ただし、お金と健康の前では急に現実主義者になるのがよい。金運が良い日でも、星が買い注文のボタンを押してはくれません。調子が落ちるという運勢は休息のきっかけにできますが、実際の症状は運勢ではなく医療情報と専門家に聞くべきです。' },
          { t: 'p', text: 'よい星座の読み物は「あなたはこういう人」と決めつけません。今日何を観察してみるか、誰に話しかけてみるか、どの習慣を一度疑ってみるかを提案します。判決文というより、最初の一文に近いのです。' },
        ],
      },
      {
        heading: 'だから私たちは明日も星座を見る',
        blocks: [
          { t: 'p', text: '星座が未来を正確に予測するという科学的根拠は乏しい。けれど、人が夜空にパターンを見いだし、そのパターンで互いの話を始めてきた歴史はとても長い。星座が長く生き残ってきたのは、未来を当てるからではなく、気まずい沈黙と複雑な心のあいだに、ちょうどよい問いをひとつ置いてくれるからなのかもしれません。' },
        ],
      },
      {
        heading: '事実確認に参照した資料',
        blocks: [
          {
            t: 'links',
            items: [
              { label: 'IAU, The Constellations', href: 'https://www.iau.org/IAU/IAU/Astronomy-FAQs/Constellations.aspx', note: '星座の文化的な成り立ちと、現代天文学の88星座の境界' },
              { label: 'Bertram R. Forer (1949), The fallacy of personal validation', href: 'https://doi.org/10.1037/h0059240', note: '個人化された性格説明を受け入れる傾向を扱った古典的実験' },
            ],
          },
        ],
      },
    ],
  },
};

export const ophiuchus13th: BlogArticleContent = {
  related: ['zodiac-myths-facts', 'twin-study-astrology'],
  ko: {
    intro:
      '2016년 NASA의 아동 교육 콘텐츠 한 줄이 전 세계를 뒤흔들었습니다. "당신의 별자리가 바뀌었습니다"라는 오보가 SNS를 달구었지만, 그 이면에는 황도 시스템의 근본적인 두 가지 세계관이 충돌하는 2,500년의 역사가 숨어 있습니다.',
    cta: '나의 별자리 운세가 궁금하다면?',
    sections: [
      {
        heading: 'NASA가 실제로 말한 것',
        blocks: [
          { t: 'p', text: '2016년 NASA의 아동용 우주 교육 사이트 \'Space Place\'에 이런 문장이 등장했습니다. "바빌로니아인들은 황도 위에 13개의 별자리가 있다는 것을 알았다. 하지만 달력을 12개월로 맞추기 위해 그들은 뱀주인자리(Ophiuchus)를 제외하기로 했다."' },
          { t: 'p', text: '이 문장은 어린이에게 별자리와 달력의 기원을 설명하는 교육 목적의 콘텐츠였습니다. 그런데 여러 매체가 이를 "NASA가 별자리를 새로 발표했다", "13번째 별자리가 생겼다"는 식으로 보도하면서 대혼란이 시작되었습니다. NASA 측은 곧 공식 입장을 냈습니다. "우리는 점성술을 연구하지 않습니다. 우리는 천문학을 연구합니다. 우리는 어떤 별자리도 변경하거나 추가하지 않았습니다."' },
          { t: 'p', text: '이 해프닝의 핵심은 하나의 중요한 구분을 이해하지 못한 데 있습니다. 천문학(Astronomy)과 점성술(Astrology)은 같은 하늘을 바라보지만, 완전히 다른 질문을 던지는 학문입니다.' },
        ],
      },
      {
        heading: '뱀주인자리의 실제 위치와 규모',
        blocks: [
          { t: 'p', text: '천문학적으로 뱀주인자리(Ophiuchus, 오피우쿠스)는 엄연히 실재하는 별자리입니다. 국제천문연맹(IAU)이 1930년 공식 지정한 88개 별자리 중 하나이며, 황도 — 즉 지구에서 볼 때 태양이 한 해 동안 움직이는 경로 — 위에 걸쳐 있습니다.' },
          { t: 'p', text: '위치는 전갈자리와 사수자리 사이입니다. 태양은 매년 11월 30일경부터 12월 17일경까지 약 18일간 뱀주인자리 영역을 통과합니다. 비교하자면, 태양이 전갈자리를 통과하는 기간은 고작 7일에 불과합니다. 뱀주인자리가 황도 위에서 전갈자리보다 훨씬 많은 면적을 차지하고 있음에도 불구하고 공식 황도 12궁에 포함되지 않은 것입니다.' },
          { t: 'p', text: '이 사실은 고대 바빌로니아인들도 알고 있었습니다. 그들은 이 별자리를 의도적으로 제외했습니다. 왜냐하면 그들에게 별자리 체계는 천문학적 정밀성이 아니라 달력의 실용성과 수의 상징성을 위한 것이었기 때문입니다. 12라는 수는 1년 12개월, 하루 24시간(12의 배수), 60진법과 완벽하게 맞아떨어지는 완결된 체계였습니다.' },
        ],
      },
      {
        heading: '황도대의 두 가지 세계관 — 열대 황도대 vs. 항성 황도대',
        blocks: [
          { t: 'p', text: '뱀주인자리 논란을 제대로 이해하려면 황도 시스템에 근본적으로 다른 두 가지 접근법이 존재한다는 것을 알아야 합니다.' },
          { t: 'p', text: '**열대 황도대(Tropical Zodiac)**는 서양 점성술이 사용하는 체계입니다. 이 시스템은 춘분점(태양이 북쪽으로 이동하면서 천구 적도를 교차하는 지점)을 양자리의 시작점(0도)으로 고정합니다. 매년 3월 21일경, 태양이 이 지점을 통과하면 점성술적으로 양자리 시즌이 시작됩니다. 중요한 것은 이 시스템이 실제 하늘의 별자리 위치와 무관하다는 점입니다. 계절의 에너지 순환, 즉 봄의 시작 · 여름의 절정 · 가을의 수확 · 겨울의 침잠이라는 자연의 리듬에 기반합니다.' },
          { t: 'p', text: '**항성 황도대(Sidereal Zodiac)**는 인도의 베다 점성술(Jyotish)이 사용하는 체계입니다. 이 시스템은 별의 실제 위치를 기준으로 삼습니다. 그래서 현재 항성 황도대로 계산하면 서양 점성술보다 약 23~24일 뒤로 이동한 날짜 범위가 나옵니다. 서양 점성술에서 3월 21일에 양자리가 시작된다면, 베다 점성술에서는 4월 14일경에야 양자리가 시작되는 식입니다.' },
          { t: 'p', text: '이 두 체계는 어느 것이 옳고 그른 것이 아닙니다. 서로 다른 철학적 전제 위에 세워진 독립적인 전통입니다. 열대 황도대는 "하늘은 지구의 계절 에너지를 반영한다"는 관점이고, 항성 황도대는 "하늘의 실제 별 위치가 의미를 가진다"는 관점입니다.' },
        ],
      },
      {
        heading: '세차운동 — 2,000년의 오차가 만들어낸 역설',
        blocks: [
          { t: 'p', text: '여기서 현대인을 가장 혼란스럽게 만드는 천문학적 사실이 등장합니다. 세차운동(Precession of the Equinoxes)입니다.' },
          { t: 'p', text: '지구는 자전하면서 동시에 자전축 자체가 팽이처럼 천천히 흔들립니다. 이 흔들림의 주기가 약 25,772년입니다. 그 결과, 춘분점의 위치가 하늘에서 조금씩 서쪽으로 이동합니다. 기원전 약 2,000년, 황도 12궁 체계가 형성되던 시기에 춘분점은 양자리 별자리 안에 있었습니다. 그래서 "양자리의 시작 = 춘분점"이라는 공식이 성립했습니다.' },
          { t: 'p', text: '지금은 어떨까요? 2,000년이 지난 현재, 세차운동으로 인해 춘분점은 양자리를 벗어나 물고기자리 영역으로 이동했습니다. 다시 말해, 서양 점성술에서 "3월 21일은 양자리의 시작"이라고 말할 때, 그날 태양이 실제로 위치하는 하늘의 별자리는 양자리가 아니라 물고기자리입니다.' },
          { t: 'p', text: '이 사실이 서양 점성술을 반증한다고 생각하는 사람이 많습니다. 그러나 열대 황도대 관점에서는 이것이 전혀 문제가 되지 않습니다. 애초에 서양 점성술의 "양자리"는 하늘의 양자리 별자리를 가리키는 것이 아니라, 춘분 이후의 계절적 에너지 구간을 가리키기 때문입니다. 명칭은 역사적 유산이고, 체계는 계절의 리듬에 근거합니다.' },
        ],
      },
      {
        heading: '점성술 커뮤니티가 뱀주인자리를 거부하는 진짜 이유',
        blocks: [
          { t: 'p', text: '"천문학적으로 태양이 뱀주인자리를 통과하는 것이 사실이라면, 왜 점성술은 이를 받아들이지 않는가?" 이 질문이 논란의 핵심입니다.' },
          { t: 'p', text: '서양 점성술의 답은 간단합니다. 서양 점성술은 처음부터 별의 실제 위치를 기반으로 한 시스템이 아닙니다. 뱀주인자리를 황도 12궁에 추가하는 것은 단순히 한 칸을 더 끼워 넣는 문제가 아닙니다. 12라는 수를 기반으로 구축된 전체 상징 체계 — 원소(불·흙·공기·물), 양상(활동·고정·변통), 행성 지배, 하우스 시스템, 상호 측면(aspect) 기하학 — 가 근본부터 흔들립니다.' },
          { t: 'p', text: '수천 년에 걸쳐 축적된 관찰과 해석, 수백만 명의 사례를 통해 검증된 체계를 해체하고 재구성하는 것은 그냥 "숫자 하나 더 추가"하는 일이 아닙니다. 기존 체계가 틀렸다는 확실한 증거 없이, 단순히 천문학적 사실과 일치하지 않는다는 이유만으로 그 체계를 버리는 것은 점성술의 내적 논리에서 정당화되지 않습니다.' },
          { t: 'p', text: '더 근본적으로, 서양 점성술은 "하늘의 물리적 별이 인간에게 영향을 미친다"는 인과론적 주장을 하지 않습니다. 오히려 "지상과 천상은 같은 패턴을 공유한다"는 상징적 대응의 원리(Correspondence)에 기반합니다. 그 상징 체계에서 12는 완결된 순환의 수이고, 13은 그 완결성을 깨는 수입니다.' },
        ],
      },
      {
        heading: 'IAU의 공식 입장 — 과학과 점성술의 명확한 경계',
        blocks: [
          { t: 'p', text: '국제천문연맹(IAU, International Astronomical Union)은 1930년 하늘을 88개의 별자리로 공식 구획했습니다. 이 구획은 점성술과 완전히 무관한 순수 천문학적 행정 구분입니다. 별 목록과 은하 분류, 관측 좌표를 위한 표준화 작업이었습니다.' },
          { t: 'p', text: 'IAU의 88개 별자리 경계선에 따르면, 황도 위에는 13개의 별자리가 걸쳐 있습니다. 12개의 전통적 황도 별자리에 뱀주인자리가 추가됩니다. 그러나 IAU는 이 사실이 점성술 체계에 어떤 의미를 가져야 한다고 주장하지 않습니다. IAU는 점성술을 과학으로 인정하지 않으며, 점성술 체계에 대해 어떤 권고도 하지 않습니다.' },
          { t: 'p', text: '천문학과 점성술의 분리는 17세기 과학혁명 이후 완성되었습니다. 그 이전까지 티코 브라헤, 요하네스 케플러, 갈릴레오 갈릴레이 같은 천문학자들도 점성술 차트를 작성했습니다. 케플러는 "점성술은 천문학의 어리석은 딸이지만, 이 딸의 수입 없이는 현명한 어머니가 살아남을 수 없다"는 말을 남기기도 했습니다. 두 분야는 오랫동안 한 뿌리에서 자랐지만, 근대 과학의 등장과 함께 완전히 다른 길을 걷게 되었습니다.' },
        ],
      },
      {
        heading: '독창적 분석 — 이 논란이 드러내는 더 깊은 질문',
        blocks: [
          { t: 'p', text: '뱀주인자리 논란은 표면적으로는 "별자리가 12개냐 13개냐"의 문제처럼 보이지만, 실제로는 훨씬 심층적인 질문을 던집니다. 우리는 왜 하늘에서 의미를 찾으려 하는가?' },
          { t: 'p', text: '인간은 패턴을 찾는 동물입니다. 무작위적으로 흩어진 별들에서 이야기를 만들어내고, 계절의 순환에서 삶의 리듬을 읽어내는 것은 수만 년간 이어온 인류의 본능입니다. 천문학은 이 하늘을 수식과 데이터로 기술하고, 점성술은 이 하늘을 상징과 서사로 기술합니다. 두 언어는 같은 대상을 묘사하지만 완전히 다른 목적을 가집니다.' },
          { t: 'p', text: '흥미로운 역설은, 뱀주인자리를 점성술에 추가하자고 주장하는 사람들 대부분이 "실제 별자리 위치가 중요하다"는 천문학적 근거를 사용한다는 점입니다. 그런데 그 논리를 일관되게 적용하면 서양 점성술 전체가 성립하지 않습니다. 서양 점성술의 모든 별자리가 현재 실제 별자리 위치와 23~24일 어긋나 있기 때문입니다. "13번째 별자리를 추가하라"는 주장은 열대 황도대와 항성 황도대를 혼동하는 범주 오류에서 비롯됩니다.' },
          { t: 'p', text: '결론적으로, 뱀주인자리는 천문학적으로 황도 위에 실재합니다. IAU도 이를 인정합니다. 그러나 서양 점성술의 황도 12궁에 채택되지 않는 이유는 단순한 무지나 완고함이 아닙니다. 서양 점성술은 처음부터 별의 물리적 위치가 아닌, 계절의 상징적 에너지 체계 위에 세워진 학문이기 때문입니다. 이 두 프레임을 구분하지 않으면, NASA 한 줄짜리 교육 콘텐츠가 수백만 명의 별자리를 바꾼다는 황당한 오보가 반복될 수밖에 없습니다.' },
        ],
      },
      {
        heading: '참고 자료',
        blocks: [
          {
            t: 'links',
            items: [
              { label: 'NASA Space Place, “What Are Constellations?”', href: 'https://spaceplace.nasa.gov/starfinder2/en/', note: '공식 별자리 88개와 천문학·점성술의 차이를 설명하는 NASA 교육 자료입니다.' },
            ],
          },
        ],
      },
    ],
  },
  en: {
    intro:
      'In 2016 a single line in NASA’s children’s education material set off a worldwide stir. "Your sign has changed" swept social media — and behind it sits 2,500 years of two fundamentally different views of the zodiac.',
    cta: 'Curious about your own sign?',
    sections: [
      {
        heading: 'What NASA actually said',
        blocks: [
          { t: 'p', text: 'In 2016 NASA’s children’s space-education site, Space Place, carried this line: "The Babylonians knew there were 13 constellations on the ecliptic. But to fit the calendar into twelve months, they chose to leave out Ophiuchus."' },
          { t: 'p', text: 'It was educational content explaining to children where the constellations and the calendar come from. Several outlets reported it as "NASA announces new signs" or "a thirteenth sign has appeared", and the confusion began. NASA soon issued a statement: "We study astronomy, not astrology. We did not change or add any zodiac signs."' },
          { t: 'p', text: 'The heart of the episode is one distinction that got lost: astronomy and astrology look at the same sky and ask completely different questions.' },
        ],
      },
      {
        heading: 'Where Ophiuchus really is, and how big it is',
        blocks: [
          { t: 'p', text: 'Astronomically Ophiuchus is a real constellation — one of the 88 the IAU officially defined in 1930, and it lies across the ecliptic, the path the Sun travels in a year as seen from Earth.' },
          { t: 'p', text: 'It sits between Scorpio and Sagittarius. The Sun crosses it from about 30 November to 17 December, some 18 days, while it spends only about seven days in Scorpio. Ophiuchus covers far more of the ecliptic than Scorpio, and yet is not among the twelve official signs.' },
          { t: 'p', text: 'The Babylonians knew this and left it out deliberately. For them the system of signs was not about astronomical precision but about the practical calendar and the symbolism of number. Twelve fitted perfectly: the twelve months of a year, the twenty-four hours of a day, the sexagesimal system.' },
        ],
      },
      {
        heading: 'Two views of the zodiac — tropical and sidereal',
        blocks: [
          { t: 'p', text: 'To understand the Ophiuchus argument you need to know that the zodiac has two fundamentally different approaches.' },
          { t: 'p', text: 'The **tropical zodiac** is the system Western astrology uses. It fixes the spring equinox — where the Sun crosses the celestial equator heading north — as the start of Aries at zero degrees. Around 21 March each year the Sun passes that point and, astrologically, Aries season begins. Crucially, this system has nothing to do with where the constellations actually are. It rests on the cycle of the seasons: spring’s beginning, summer’s height, autumn’s harvest, winter’s withdrawal.' },
          { t: 'p', text: 'The **sidereal zodiac** is the system of Indian Vedic astrology, Jyotish. It takes the actual positions of the stars as its measure, so a sidereal calculation today gives date ranges roughly 23 to 24 days later than Western astrology. Where Western astrology begins Aries on 21 March, Vedic astrology begins it around 14 April.' },
          { t: 'p', text: 'Neither is right or wrong. They are independent traditions built on different philosophical premises: the tropical view holds that the sky reflects the seasonal energy of Earth, the sidereal view that the actual positions of the stars carry meaning.' },
        ],
      },
      {
        heading: 'Precession — the paradox of a two-thousand-year gap',
        blocks: [
          { t: 'p', text: 'Here comes the astronomical fact that confuses modern readers most: the precession of the equinoxes.' },
          { t: 'p', text: 'As Earth spins, its axis itself sways slowly, like a top, over a cycle of about 25,772 years. The spring equinox therefore drifts gradually westward across the sky. Around 2000 BCE, when the twelve-sign system was forming, the equinox lay inside the constellation Aries, which is why "the start of Aries = the equinox" held true.' },
          { t: 'p', text: 'And now? Two thousand years on, precession has moved the equinox out of Aries into Pisces. In other words, when Western astrology says 21 March begins Aries, the constellation the Sun is actually in that day is not Aries but Pisces.' },
          { t: 'p', text: 'Many people take this as a refutation of Western astrology. From the tropical point of view it is no problem at all: Western "Aries" never meant the constellation Aries in the sky but the seasonal energy following the equinox. The name is a historical inheritance; the system rests on the rhythm of the seasons.' },
        ],
      },
      {
        heading: 'Why astrology does not take Ophiuchus on',
        blocks: [
          { t: 'p', text: '"If the Sun really crosses Ophiuchus, why does astrology not accept it?" That question is the heart of the argument.' },
          { t: 'p', text: 'The Western answer is simple: Western astrology was never a system based on the actual positions of the stars. Adding Ophiuchus to the twelve signs is not a matter of squeezing in one box. The whole symbolic structure built on the number twelve — the elements, the modes, planetary rulership, the house system, the geometry of aspects — would shift at its foundations.' },
          { t: 'p', text: 'Dismantling and rebuilding a system accumulated over thousands of years and checked against millions of cases is not "adding one more number". Without firm evidence that the existing system is wrong, discarding it merely because it does not match an astronomical fact is not justified within astrology’s own logic.' },
          { t: 'p', text: 'More fundamentally, Western astrology does not claim that the physical stars cause effects in people. It rests on the principle of correspondence: that earthly and heavenly things share a pattern. In that symbolic system twelve is the number of a completed cycle and thirteen is the number that breaks it.' },
        ],
      },
      {
        heading: 'The IAU’s position — a clear line between science and astrology',
        blocks: [
          { t: 'p', text: 'The International Astronomical Union divided the sky into 88 constellations in 1930 — a purely astronomical administrative division with no connection to astrology: standardisation for star catalogues, galaxy classification and observing coordinates.' },
          { t: 'p', text: 'By those 88 boundaries, thirteen constellations lie across the ecliptic: the twelve traditional ones plus Ophiuchus. The IAU does not claim this must mean anything for astrology. It does not recognise astrology as a science, and makes no recommendation about astrological systems.' },
          { t: 'p', text: 'The separation of astronomy and astrology was completed after the scientific revolution of the seventeenth century. Before that, astronomers such as Tycho Brahe, Johannes Kepler and Galileo also drew astrological charts. Kepler left the line that astrology is the foolish daughter of astronomy, but that without the daughter’s income the wise mother could not survive. The two grew from one root for a long time, then took entirely different roads with modern science.' },
        ],
      },
      {
        heading: 'The deeper question the argument exposes',
        blocks: [
          { t: 'p', text: 'On the surface the Ophiuchus argument is about twelve signs or thirteen. In fact it asks something deeper: why do we look for meaning in the sky?' },
          { t: 'p', text: 'Humans are pattern-finding animals. Making stories out of randomly scattered stars and reading the rhythm of a life in the turning of the seasons is an instinct tens of thousands of years old. Astronomy describes the sky in equations and data; astrology describes it in symbol and narrative. Two languages for one object, with entirely different purposes.' },
          { t: 'p', text: 'The interesting paradox is that most people who argue for adding Ophiuchus use the astronomical ground that the real positions matter. Applied consistently, that logic dissolves Western astrology entirely, since all of its signs sit 23 to 24 days out of step with the actual constellations. "Add a thirteenth sign" comes from confusing the tropical and sidereal zodiacs — a category error.' },
          { t: 'p', text: 'In short: Ophiuchus really does lie on the ecliptic, and the IAU says so. Western astrology does not adopt it not from ignorance or stubbornness, but because Western astrology was built on a symbolic system of seasonal energy, not on the physical positions of stars. Without keeping the two frames apart, a one-line piece of NASA children’s content will keep being reported as changing the signs of millions of people.' },
        ],
      },
      {
        heading: 'Sources',
        blocks: [
          {
            t: 'links',
            items: [
              { label: 'NASA Space Place, “What Are Constellations?”', href: 'https://spaceplace.nasa.gov/starfinder2/en/', note: 'NASA educational material on the 88 official constellations and the difference between astronomy and astrology.' },
            ],
          },
        ],
      },
    ],
  },
  ja: {
    intro:
      '2016年、NASAの子ども向け教育コンテンツの一行が世界を揺らしました。「あなたの星座が変わった」という誤報がSNSを賑わせましたが、その背後には黄道をめぐる二つの根本的に異なる世界観の、2500年の歴史が隠れています。',
    cta: '自分の星座の運勢が気になったら',
    sections: [
      {
        heading: 'NASAが実際に言ったこと',
        blocks: [
          { t: 'p', text: '2016年、NASAの子ども向け宇宙教育サイト「Space Place」にこんな一文がありました。「バビロニア人は黄道に13の星座があることを知っていた。しかし暦を12か月に合わせるため、へびつかい座を除外することにした」。' },
          { t: 'p', text: 'これは子どもに星座と暦の起源を説明する教育目的の内容でした。ところが複数のメディアが「NASAが新しい星座を発表した」「13番目の星座ができた」と報じ、大混乱が始まります。NASAはすぐに公式見解を出しました。「私たちは占星術を研究していません。天文学を研究しています。星座を変更したり追加したりはしていません」。' },
          { t: 'p', text: 'この顛末の核心は、一つの大切な区別が理解されなかったことにあります。天文学と占星術は同じ空を見ていながら、まったく違う問いを立てる学問です。' },
        ],
      },
      {
        heading: 'へびつかい座の実際の位置と規模',
        blocks: [
          { t: 'p', text: '天文学的にへびつかい座は厳然と実在する星座です。1930年に国際天文学連合（IAU）が正式に定めた88星座の一つで、黄道——地球から見て太陽が一年で動く道——にかかっています。' },
          { t: 'p', text: '位置はさそり座といて座のあいだ。太陽は毎年11月30日ごろから12月17日ごろまで、約18日間へびつかい座の領域を通ります。比べれば、太陽がさそり座を通るのはわずか7日ほど。へびつかい座が黄道上でさそり座よりはるかに広い面積を占めているのに、公式の十二宮には入っていないのです。' },
          { t: 'p', text: 'この事実を古代バビロニア人も知っていました。彼らはこの星座を意図的に除外しました。当時の星座体系は天文学的な精密さではなく、暦の実用性と数の象徴性のためだったからです。12は一年の12か月、一日24時間（12の倍数）、六十進法と完璧に合う完結した体系でした。' },
        ],
      },
      {
        heading: '黄道の二つの世界観 — トロピカル方式とサイデリアル方式',
        blocks: [
          { t: 'p', text: 'へびつかい座の論争を正しく理解するには、黄道の体系に根本的に異なる二つの立場があることを知る必要があります。' },
          { t: 'p', text: '**トロピカル方式**は西洋占星術が使う体系です。春分点（太陽が北へ向かって天の赤道を横切る点）を牡羊座の始まり（0度）に固定します。毎年3月21日ごろ、太陽がこの点を通過すると占星術的に牡羊座の季節が始まります。重要なのは、この体系が実際の星座の位置とは無関係だという点です。季節のエネルギーの循環、つまり春の始まり・夏の頂点・秋の収穫・冬の沈潜という自然のリズムに基づいています。' },
          { t: 'p', text: '**サイデリアル方式**はインドのヴェーダ占星術（ジョーティシュ）が使う体系です。星の実際の位置を基準にします。そのため現在のサイデリアル方式で計算すると、西洋占星術より約23〜24日後ろにずれた日付範囲になります。西洋占星術で3月21日に牡羊座が始まるなら、ヴェーダ占星術では4月14日ごろにようやく牡羊座が始まる、という具合です。' },
          { t: 'p', text: 'どちらが正しいというものではありません。異なる哲学的前提の上に築かれた独立した伝統です。トロピカルは「空は地球の季節のエネルギーを映す」という立場、サイデリアルは「空の実際の星の位置が意味を持つ」という立場です。' },
        ],
      },
      {
        heading: '歳差運動 — 2000年のずれが生んだ逆説',
        blocks: [
          { t: 'p', text: 'ここで、現代人を最も混乱させる天文学的事実が登場します。歳差運動です。' },
          { t: 'p', text: '地球は自転しながら、自転軸そのものが独楽のようにゆっくり揺れます。その周期は約25,772年。結果として春分点の位置は空の中で少しずつ西へ移動します。紀元前約2000年、十二宮の体系が形成されたころ、春分点は牡羊座の星座の中にありました。だから「牡羊座の始まり＝春分点」という式が成り立ったのです。' },
          { t: 'p', text: '今はどうか。2000年が過ぎ、歳差運動によって春分点は牡羊座を離れ、魚座の領域へ移りました。つまり西洋占星術で「3月21日は牡羊座の始まり」と言うとき、その日に太陽が実際にいる星座は牡羊座ではなく魚座です。' },
          { t: 'p', text: 'この事実を西洋占星術の反証と考える人は多くいます。しかしトロピカル方式の立場ではまったく問題になりません。そもそも西洋占星術の「牡羊座」は空の牡羊座を指すのではなく、春分以降の季節的なエネルギーの区間を指すからです。名称は歴史的な遺産で、体系は季節のリズムに根ざしています。' },
        ],
      },
      {
        heading: '占星術がへびつかい座を受け入れない本当の理由',
        blocks: [
          { t: 'p', text: '「天文学的に太陽がへびつかい座を通るのが事実なら、なぜ占星術は受け入れないのか」。この問いが論争の核心です。' },
          { t: 'p', text: '西洋占星術の答えは簡単です。西洋占星術ははじめから星の実際の位置に基づく体系ではありません。へびつかい座を十二宮に加えるのは、一枠を足すだけの問題ではない。12という数をもとに築かれた象徴の全体——元素（火・地・風・水）、区分（活動・固定・柔軟）、惑星の支配、ハウス体系、アスペクトの幾何学——が根底から揺らぎます。' },
          { t: 'p', text: '数千年かけて蓄積された観察と解釈、何百万人もの事例で検証されてきた体系を解体し再構成するのは、「数字を一つ足す」ことではありません。既存の体系が誤りだという確かな証拠もなく、天文学的事実と一致しないという理由だけで捨てることは、占星術の内的な論理では正当化されません。' },
          { t: 'p', text: 'さらに根本的に、西洋占星術は「空の物理的な星が人に影響する」という因果論を主張していません。むしろ「地上と天上は同じパターンを共有する」という象徴的対応の原理に基づきます。その象徴体系で12は完結した循環の数、13はその完結を崩す数です。' },
        ],
      },
      {
        heading: 'IAUの立場 — 科学と占星術の明確な境界',
        blocks: [
          { t: 'p', text: '国際天文学連合（IAU）は1930年に空を88の星座に公式に区分しました。これは占星術とまったく無関係な、純粋に天文学的な行政区分です。星表や銀河の分類、観測座標のための標準化作業でした。' },
          { t: 'p', text: 'IAUの88星座の境界によれば、黄道には13の星座がかかっています。12の伝統的な星座にへびつかい座が加わります。しかしIAUは、この事実が占星術の体系に何かを意味すべきだとは主張しません。IAUは占星術を科学として認めておらず、占星術の体系について何の勧告もしません。' },
          { t: 'p', text: '天文学と占星術の分離は17世紀の科学革命以降に完成しました。それ以前はティコ・ブラーエ、ヨハネス・ケプラー、ガリレオ・ガリレイのような天文学者も占星術の図を作っていました。ケプラーは「占星術は天文学の愚かな娘だが、この娘の収入なしには賢い母も生き残れない」という言葉を残しています。二つの分野は長く同じ根から育ち、近代科学の登場とともにまったく別の道を歩むことになりました。' },
        ],
      },
      {
        heading: 'この論争が映す、より深い問い',
        blocks: [
          { t: 'p', text: 'へびつかい座の論争は表面では「12か13か」の問題に見えますが、実際にはもっと深い問いを投げかけます。なぜ私たちは空に意味を探すのか。' },
          { t: 'p', text: '人はパターンを見つける動物です。無作為に散らばる星から物語をつくり、季節の巡りから人生のリズムを読むのは数万年続く人類の本能です。天文学はこの空を数式とデータで記述し、占星術は象徴と物語で記述します。二つの言葉は同じ対象を描きながら、まったく異なる目的を持っています。' },
          { t: 'p', text: '興味深い逆説は、へびつかい座を加えるべきだと主張する人の多くが「実際の星座の位置が大事だ」という天文学的根拠を使うことです。しかしその論理を一貫して適用すると西洋占星術全体が成り立ちません。すべての星座が実際の位置と23〜24日ずれているからです。「13番目の星座を加えよ」という主張は、トロピカル方式とサイデリアル方式を混同したカテゴリー錯誤から来ています。' },
          { t: 'p', text: '結論として、へびつかい座は天文学的に黄道上に実在し、IAUもそれを認めています。しかし西洋占星術の十二宮に採用されないのは、無知や頑固さからではありません。西洋占星術ははじめから星の物理的な位置ではなく、季節の象徴的なエネルギー体系の上に築かれた学問だからです。この二つの枠を区別しない限り、NASAの一行の教育コンテンツが何百万人の星座を変えたという的外れな誤報は繰り返されるでしょう。' },
        ],
      },
      {
        heading: '参照資料',
        blocks: [
          {
            t: 'links',
            items: [
              { label: 'NASA Space Place, “What Are Constellations?”', href: 'https://spaceplace.nasa.gov/starfinder2/en/', note: '公式の88星座と、天文学・占星術の違いを説明するNASAの教育資料です。' },
            ],
          },
        ],
      },
    ],
  },
};
