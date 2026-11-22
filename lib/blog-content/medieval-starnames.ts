import type { BlogArticleContent } from './types';

export const medievalArt: BlogArticleContent = {
  related: ['ancient-egypt-astronomy', 'star-name-etymology'],
  ko: {
    intro:
      '미술관에서 중세 기도서를 넘기다 보면 달력 장면 옆에 작은 게자리나 염소자리가 그려져 있는 걸 발견하게 됩니다. 장식이 아니라 그 시대 사람들에게는 시간을 읽는 장치였습니다. 그림 속 황도대가 어떤 역할을 했는지, 몇 점의 작품을 통해 따라가 봅니다.',
    cta: '오늘 내 별자리의 흐름이 궁금하다면?',
    sections: [
      {
        heading: '달력 그림 한 장에 들어간 세 가지 정보',
        blocks: [
          { t: 'image', src: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&auto=format&fit=crop&q=80', alt: '별이 총총한 밤하늘' },
          { t: 'p', text: '15세기 초 프랑스에서 만들어진 『베리 공작의 성무일도서(Les Très Riches Heures du Duc de Berry)』는 중세 채색 필사본 가운데 가장 유명한 작품 중 하나입니다. 림부르크 형제가 1411년 무렵 시작해 1416년 세 형제가 모두 죽으면서 미완성으로 남았고, 이후 다른 화가들이 손을 봤습니다. 이 책의 달력 부분에는 열두 달을 각각 한 장면으로 그린 큰 그림이 들어 있습니다.' },
          { t: 'p', text: '각 달 그림 위쪽에는 반원형의 작은 띠가 붙어 있습니다. 여기에는 그달의 날짜와 요일, 그리고 그달에 태양이 지나는 별자리가 함께 표시됩니다. 4월 그림에는 황소자리, 8월 그림에는 사자자리가 놓입니다. 아래쪽 큰 그림은 그달의 일을 그립니다. 3월은 밭을 갈고 포도나무를 손보는 농부, 10월은 루브르 성 앞에서 밭을 씨 뿌리는 사람입니다.' },
          { t: 'p', text: '한 장 안에 천문 정보, 달력 정보, 농경의 리듬이 겹쳐 있는 셈입니다. 기도서를 보는 사람은 그림을 통해 “지금이 언제인가”를 한눈에 확인했습니다. 별자리는 신비한 예언이 아니라, 1년이라는 원 위에 눈금을 새기는 도구였습니다.' },
        ],
      },
      {
        heading: '12달의 노동 — 시간은 곧 일의 순서였다',
        blocks: [
          { t: 'p', text: '이런 달력 그림을 미술사에서는 ‘12달의 노동(Labors of the Months)’이라고 부릅니다. 12세기 이후 유럽 교회의 조각과 스테인드글라스에 자주 등장했고, 14~15세기에는 기도서의 표지급 장식이 되었습니다. 농사일, 사냥, 수확, 돼지 도축, 실내에서 불을 쬐는 겨울 장면 — 달마다 다른 풍경이 이어집니다.' },
          { t: 'p', text: '여기서 별자리의 역할은 분명합니다. 12달의 노동이 ‘사람이 하는 일’이라면, 황도대는 그 일이 놓인 ‘하늘의 시간표’입니다. 중세 사람에게 계절과 별의 움직임은 같은 질서의 두 얼굴이었습니다. 지금 우리가 달력 앱에서 날짜와 절기를 나란히 보는 것과 구조가 비슷합니다.' },
          { t: 'p', text: '흥미로운 것은 이 그림들이 대부분 부유한 후원자를 위한 사치품이었다는 점입니다. 책 한 권을 만드는 데 몇 년이 걸렸고, 값은 집 한 채에 맞먹기도 했습니다. 그런 책에 하늘의 질서를 정교하게 새긴다는 것은, 시간을 통제하는 권위를 과시하는 일이기도 했습니다.' },
        ],
      },
      {
        heading: '지오토가 그린 별 — 혜성인가, 베들레헴의 별인가',
        blocks: [
          { t: 'p', text: '파도바 스크로베니 예배당의 『동방박사의 경배』(1305년 무렵)에는 지붕 위에 꼬리를 단 밝은 별이 그려져 있습니다. 오늘날 많은 천문학자와 미술사가들은 이 별이 1301년 유럽에서 관측된 핼리 혜성의 인상을 옮긴 것이라고 봅니다. 지오토는 혜성을 성서의 별로 바꿔 그린 셈입니다.' },
          { t: 'p', text: '이 해석은 확정된 사실이 아니라 유력한 가설입니다. 다만 당시 사람들이 하늘의 이상 현상과 종교적 사건을 같은 언어로 연결했다는 점은 분명히 보여줍니다. 별이 ‘점’이 되어 개인의 성격을 말해주는 것과, 별이 ‘사건’을 알리는 표지가 되는 것은 같은 뿌리에서 나온 생각입니다.' },
        ],
      },
      {
        heading: '뒤러의 천구도 — 예술가가 하늘 지도를 새기다',
        blocks: [
          { t: 'p', text: '1515년, 알브레히트 뒤러는 인쇄술의 시대에 맞춰 두 장의 천구도를 목판으로 새겼습니다. 북반구와 남반구를 각각 그린 이 지도에는 프톨레마이오스 이래 전해진 48개 별자리가 인물과 동물의 모습으로 배치되어 있습니다. 하늘을 ‘지도’로 만든다는 발상은 이때 이미 인쇄물로 대량 복제되고 있었습니다.' },
          { t: 'p', text: '뒤러는 천문학자가 아니었지만 좌표를 계산하는 일을 맡은 협력자들과 함께 작업했습니다. 결과물은 관측 도구이자 상품이었습니다. 점성술이 대학과 궁정에서 여전히 중요한 지식이던 시대에, 하늘 지도는 실용적인 판매 품목이기도 했습니다.' },
          { t: 'p', text: '같은 시기 로마에는 파르네세 아틀라스가 있었습니다. 기원후 2세기 무렵 만들어진 대리석 조각으로, 아틀라스가 어깨에 별자리가 새겨진 천구를 이고 있습니다. 현재 남아 있는 것 중 가장 오래된 천구 조각으로 꼽힙니다. 별자리 그림은 종이와 돌, 천장과 바닥을 가리지 않고 반복해서 나타났습니다.' },
        ],
      },
      {
        heading: '그림을 읽는 순서 — 장식이 아니라 문법',
        blocks: [
          { t: 'p', text: '이런 작품을 볼 때 두 가지만 기억하면 훨씬 많은 것이 보입니다. 첫째, 별자리는 대개 ‘달력의 일부’로 등장합니다. 그러니 별자리 그림이 있다면 옆에 날짜, 절기, 계절 노동이 함께 있는지 확인해 보세요. 둘째, 별자리의 모습은 당시 유행한 도상집의 영향을 받았습니다. 같은 사자자리라도 14세기 프랑스와 16세기 이탈리아의 그림이 다른 이유입니다.' },
          { t: 'p', text: '오늘날 별자리 이미지는 스마트폰 앱의 아이콘이 되었지만, 그 뿌리는 시간을 세고 계절을 예측하려는 실용적인 필요에 있습니다. 미술관에서 황도대를 만나면 “이 그림이 몇 월의 무엇을 말하려는가”를 먼저 물어보세요. 답은 대개 그 시대 사람들의 달력 사용법 안에 있습니다.' },
        ],
      },
    ],
  },
  en: {
    intro:
      'Turn the pages of a medieval book of hours in a museum and you will find a small Cancer or Capricorn next to the calendar scene. Not decoration: for the people of the time it was a device for reading time. Here is what the zodiac did in those pictures, through a handful of works.',
    cta: 'Curious about today’s flow for your sign?',
    sections: [
      {
        heading: 'Three kinds of information in one calendar picture',
        blocks: [
          { t: 'image', src: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&auto=format&fit=crop&q=80', alt: 'A night sky full of stars' },
          { t: 'p', text: 'The Très Riches Heures du Duc de Berry, made in France in the early fifteenth century, is among the most famous illuminated manuscripts. The Limbourg brothers began it around 1411; all three died in 1416 and it was left unfinished, later touched by other painters. Its calendar has a large picture for each of the twelve months.' },
          { t: 'p', text: 'Above each month’s picture sits a small semicircular band. It carries the dates and weekdays of that month and the sign the Sun is passing through. April has Taurus, August has Leo. The scene below shows the month’s work: March has a farmer ploughing and tending vines, October a man sowing a field in front of the Louvre.' },
          { t: 'p', text: 'Three things overlap in one page: astronomy, the calendar, and the rhythm of farming. A reader could see at a glance "when is it now". The sign was not a mysterious prophecy but a tool for cutting notches into the circle of a year.' },
        ],
      },
      {
        heading: 'The labours of the months — time as the order of work',
        blocks: [
          { t: 'p', text: 'Art history calls such calendar pictures the Labors of the Months. They appeared often in European church sculpture and stained glass from the twelfth century and became frontispiece-level decoration in books of hours in the fourteenth and fifteenth. Ploughing, hunting, harvest, pig slaughter, a winter scene by the fire indoors — a different view for every month.' },
          { t: 'p', text: 'The role of the zodiac here is clear. If the labours of the months are what people do, the zodiac is the timetable of the sky in which the work sits. To a medieval person, the seasons and the movement of the stars were two faces of one order — much as we see a date and a solar term side by side in a calendar app now.' },
          { t: 'p', text: 'Interestingly, most of these pictures were luxuries for wealthy patrons. A single book could take years and cost as much as a house. Engraving the order of the sky so finely into such a book was also a display of authority over time.' },
        ],
      },
      {
        heading: 'Giotto’s star — a comet or the star of Bethlehem?',
        blocks: [
          { t: 'p', text: 'In the Scrovegni Chapel in Padua, Giotto’s Adoration of the Magi (around 1305) shows a bright star with a tail above the roof. Many astronomers and art historians today think it carries the impression of Halley’s comet, observed in Europe in 1301. Giotto turned a comet into the star of the Gospel.' },
          { t: 'p', text: 'The reading is a strong hypothesis, not settled fact. But it does show clearly that people of the time linked unusual sky events and religious events in the same language. A star speaking of a person’s character as a "fortune" and a star as a sign announcing an event grew from the same root.' },
        ],
      },
      {
        heading: 'Dürer’s sky maps — an artist engraves the heavens',
        blocks: [
          { t: 'p', text: 'In 1515 Albrecht Dürer, working in the age of print, cut two celestial maps in woodblock. One for the northern hemisphere, one for the southern, they place the 48 constellations handed down since Ptolemy as figures of people and animals. The idea of making the sky into a "map" was already being reproduced in print by then.' },
          { t: 'p', text: 'Dürer was no astronomer, but worked with collaborators who computed the coordinates. The result was an observing tool and a product: in an age when astrology was still important knowledge in universities and courts, a sky map sold well.' },
          { t: 'p', text: 'Rome had the Farnese Atlas at about the same time — a marble figure of the second century CE carrying on its shoulders a globe carved with the constellations, counted among the oldest surviving celestial globes. Zodiac imagery turned up again and again, on paper and stone, ceilings and floors.' },
        ],
      },
      {
        heading: 'How to read the picture — grammar, not decoration',
        blocks: [
          { t: 'p', text: 'Two things to remember will show you much more in such works. First, the zodiac usually appears as part of a calendar, so check whether dates, solar terms or seasonal labour sit beside it. Second, the look of a sign was shaped by the pattern books in fashion: the same Leo looks different in fourteenth-century France and sixteenth-century Italy.' },
          { t: 'p', text: 'Today a zodiac image is an icon in a phone app, but its root lies in the practical need to count time and predict the seasons. Meeting the zodiac in a museum, ask first "what month, and what does this picture want to say?" The answer usually lies inside how people of that time used a calendar.' },
        ],
      },
    ],
  },
  ja: {
    intro:
      '美術館で中世の時祷書をめくると、暦の場面のとなりに小さな蟹座や山羊座が描かれているのに気づきます。飾りではなく、当時の人にとっては時間を読む装置でした。絵の中の黄道帯がどんな役割を果たしたのか、いくつかの作品を通してたどります。',
    cta: '今日の自分の星座の流れが気になったら',
    sections: [
      {
        heading: '暦の絵一枚に入った三つの情報',
        blocks: [
          { t: 'image', src: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&auto=format&fit=crop&q=80', alt: '星が満ちる夜空' },
          { t: 'p', text: '15世紀初めのフランスで作られた『ベリー公のいとも豪華なる時祷書』は、中世の彩色写本でもっとも名高い作品の一つです。リンブルク兄弟が1411年ごろに始め、1416年に三人とも亡くなって未完成のまま残り、その後別の画家が手を加えました。この本の暦の部分には、十二か月をそれぞれ一場面で描いた大きな絵が入っています。' },
          { t: 'p', text: '各月の絵の上には半円形の小さな帯が付いています。そこにはその月の日付と曜日、そしてその月に太陽が通る星座が示されます。4月の絵には牡牛座、8月の絵には獅子座が置かれます。下の大きな絵はその月の仕事を描きます。3月は畑を耕しぶどうの木を手入れする農夫、10月はルーヴルの城の前で種をまく人です。' },
          { t: 'p', text: '一枚のなかに天文の情報、暦の情報、農耕のリズムが重なっているわけです。時祷書を開く人は絵によって「いまがいつか」を一目で確かめました。星座は神秘的な予言ではなく、一年という円に目盛りを刻む道具でした。' },
        ],
      },
      {
        heading: '十二か月の労働 — 時間は仕事の順序だった',
        blocks: [
          { t: 'p', text: 'こうした暦の絵を美術史では「十二か月の労働」と呼びます。12世紀以降ヨーロッパの教会の彫刻やステンドグラスによく現れ、14〜15世紀には時祷書の扉絵級の装飾になりました。農作業、狩り、収穫、豚の屠殺、室内で火に当たる冬の場面——月ごとに違う風景が続きます。' },
          { t: 'p', text: 'ここでの星座の役割は明らかです。十二か月の労働が「人がすること」なら、黄道帯はその仕事が置かれた「空の時間割」です。中世の人にとって季節と星の動きは同じ秩序の二つの顔でした。今私たちがカレンダーアプリで日付と節気を並べて見るのと構造が似ています。' },
          { t: 'p', text: '興味深いのは、こうした絵の多くが裕福な後援者のための贅沢品だったことです。本一冊に数年かかり、値段は家一軒に匹敵することもありました。そんな本に空の秩序を精緻に刻むことは、時間を統べる権威を見せることでもありました。' },
        ],
      },
      {
        heading: 'ジョットの描いた星 — 彗星か、ベツレヘムの星か',
        blocks: [
          { t: 'p', text: 'パドヴァのスクロヴェーニ礼拝堂の『東方三博士の礼拝』（1305年ごろ）には、屋根の上に尾を引く明るい星が描かれています。今日では多くの天文学者と美術史家が、この星は1301年にヨーロッパで観測されたハレー彗星の印象を写したものだと見ています。ジョットは彗星を聖書の星に描き替えたわけです。' },
          { t: 'p', text: 'この解釈は確定した事実ではなく有力な仮説です。ただ、当時の人が空の異変と宗教的な出来事を同じ言葉で結びつけていたことは確かに示しています。星が「占い」になって個人の性格を語ることと、星が「出来事」を知らせる印になることは、同じ根から出た考えです。' },
        ],
      },
      {
        heading: 'デューラーの天球図 — 画家が天の地図を刻む',
        blocks: [
          { t: 'p', text: '1515年、アルブレヒト・デューラーは印刷術の時代に合わせて二枚の天球図を木版で彫りました。北半球と南半球をそれぞれ描いたこの地図には、プトレマイオス以来伝わる48星座が人物や動物の姿で配置されています。空を「地図」にするという発想は、この時すでに印刷物として大量に複製されていました。' },
          { t: 'p', text: 'デューラーは天文学者ではありませんでしたが、座標計算を担う協力者とともに仕事をしました。成果物は観測の道具であり商品でもありました。占星術が大学や宮廷でなお重要な知識だった時代に、天の地図は実用的な売り物でもあったのです。' },
          { t: 'p', text: '同じころローマにはファルネーゼのアトラスがありました。紀元後2世紀ごろ作られた大理石の像で、アトラスが肩に星座の刻まれた天球を載せています。現存する最古の天球彫刻の一つとされます。星座の図は紙にも石にも、天井にも床にも繰り返し現れました。' },
        ],
      },
      {
        heading: '絵の読み方 — 装飾ではなく文法',
        blocks: [
          { t: 'p', text: 'こうした作品を見るとき、二つだけ覚えておくとよく見えてきます。第一に、星座はたいてい「暦の一部」として現れます。だから星座の絵があれば、隣に日付や節気、季節の労働があるかを確かめてください。第二に、星座の姿は当時流行した図像集の影響を受けています。同じ獅子座でも14世紀のフランスと16世紀のイタリアで絵が違う理由です。' },
          { t: 'p', text: '今日、星座のイメージはスマホアプリのアイコンになりましたが、その根は時間を数え季節を予測する実用的な必要にあります。美術館で黄道帯に出会ったら、「この絵は何月の何を語ろうとしているのか」をまず問いかけてみてください。答えはたいてい、その時代の暦の使い方のなかにあります。' },
        ],
      },
    ],
  },
};

export const starNameEtymology: BlogArticleContent = {
  related: ['zodiac-in-medieval-art', 'ancient-egypt-astronomy'],
  ko: {
    intro:
      '밝은 별들의 이름을 눈여겨보면 낯선 소리가 섞여 있습니다. 덴네브, 알타이르, 알데바란. 라틴어도 그리스어도 아닌 이 이름들은 어디서 왔고, 누가 정한 것일까요. 별 이름의 계보를 따라가면 번역과 오역, 그리고 이름을 정할 권한을 둘러싼 근대의 논쟁이 나옵니다.',
    cta: '오늘 밤, 내 별자리의 흐름은?',
    sections: [
      {
        heading: '하늘의 목록이 아랍어를 거쳐 유럽으로',
        blocks: [
          { t: 'image', src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=80', alt: '산 위의 별이 총총한 밤하늘' },
          { t: 'p', text: '2세기 알렉산드리아의 프톨레마이오스는 『알마게스트』에 별 목록을 정리했습니다. 48개 별자리에 약 1,000개 남짓한 별의 위치와 밝기를 담은 이 목록은 이후 천 년 동안 하늘을 정리하는 기준이 되었습니다.' },
          { t: 'p', text: '이 목록이 유럽에서 다시 읽히기까지는 아랍어를 거쳐야 했습니다. 9세기 바그다드에서 그리스 문헌이 대규모로 번역되었고, 12세기에는 스페인 톨레도에서 아랍어판이 라틴어로 옮겨졌습니다. 이 이중 번역 과정에서 별 이름의 상당 부분이 아랍어 형태 그대로 굳었습니다.' },
          { t: 'p', text: '알데바란은 아랍어 알다바란, ‘뒤따르는 자’에서 왔습니다. 플레이아데스 성단을 뒤따라 뜨기 때문에 붙은 이름입니다. 덴네브는 ‘꼬리’, 알타이르는 ‘나는 독수리’, 베가는 ‘내려앉는 독수리’를 뜻합니다. 모두 별자리 안에서 그 별이 놓인 위치나 모양을 가리키는 이름입니다.' },
        ],
      },
      {
        heading: '알골 — ‘구울의 머리’라는 이름이 남은 이유',
        blocks: [
          { t: 'p', text: '페르세우스자리의 알골은 아랍어 라으스 알굴, 즉 ‘구울의 머리’에서 왔습니다. 메두사의 머리를 든 페르세우스의 모습과 맞아떨어져 오늘날까지 그대로 쓰입니다.' },
          { t: 'p', text: '흥미로운 것은 이 별이 실제로 2.87일 주기로 밝기가 변하는 식변광성이라는 점입니다. 밝은 별과 어두운 별이 서로를 가리며 빛이 줄어듭니다. 고대인들이 이런 규칙적 변화를 알아차렸는지는 분명하지 않지만, 이름이 붙은 방식과 실제 성질이 우연히 겹친 사례로 자주 인용됩니다.' },
          { t: 'p', text: '베텔게우스는 조금 더 복잡합니다. 아랍어 야드 알자우자(‘오리온의 손’)가 라틴어로 옮겨지는 과정에서 ‘손’이 ‘겨드랑이’ 비슷한 말로 잘못 읽혔다는 설명이 널리 퍼져 있습니다. 번역이 원래 뜻을 흐리게 만든 대표적인 사례로, 지금도 많은 책이 이 이야기를 소개합니다.' },
        ],
      },
      {
        heading: '그리스·라틴어 이름과 민간 이름이 섞이다',
        blocks: [
          { t: 'p', text: '모든 이름이 아랍어에서 온 것은 아닙니다. 시리우스는 그리스어로 ‘타오르는’을 뜻하는 말에서 왔고, 아르크투루스는 ‘곰의 수호자’입니다. 큰곰자리를 따라 도는 위치에서 나온 이름입니다. 폴라리스, 카펠라처럼 라틴어 어원이 분명한 이름도 많습니다.' },
          { t: 'p', text: '여기에 각 지역의 민간 이름이 겹칩니다. 영국에서는 북두칠성을 ‘쟁기(Plough)’라 불렀고, 미국에서는 ‘국자(Big Dipper)’라고 합니다. 같은 별자리가 언어권마다 다른 사물로 보였던 것입니다. 별 이름은 천문학적 좌표이면서 동시에 그 사회가 하늘에서 무엇을 보았는지에 대한 기록입니다.' },
        ],
      },
      {
        heading: '2016년 — 국제천문연맹이 이름을 정리하다',
        blocks: [
          { t: 'p', text: '오랫동안 별 이름은 여러 출처에서 서로 다르게 쓰였습니다. 관측 소프트웨어마다 표기가 달랐고, 상업용 별 등록 서비스처럼 공식 절차와 무관한 이름도 유통되었습니다.' },
          { t: 'p', text: '2016년 국제천문연맹(IAU)은 별 이름 실무그룹을 만들고 공식 별 이름 목록(IAU-CSN)을 운영하기 시작했습니다. 지금은 수백 개의 밝은 별과 일부 외계행성의 항성 이름이 여기에 등재되어 있습니다. 중요한 원칙은 이것입니다. 하늘의 이름은 사유물이 아니며, 공식 이름은 검증된 절차를 거쳐 정해집니다.' },
          { t: 'p', text: '이 정리가 필요했던 이유는 실용적입니다. 연구 데이터와 교육 자료, 위성 항법, 천문 소프트웨어가 같은 대상을 같은 이름으로 부를 필요가 있었기 때문입니다. 별을 사고파는 서비스가 성행하던 시절을 지나, 이름의 공공성이 다시 확인된 셈입니다.' },
        ],
      },
      {
        heading: '한국의 하늘 — 28수와 천상열차분야지도',
        blocks: [
          { t: 'p', text: '동아시아에는 서양의 88개 별자리와 다른 체계가 있었습니다. 하늘을 28개 구역으로 나눈 28수(二十八宿)가 그것입니다. 각 구역은 청룡·현무·백호·주작의 사신(四神)에 묶여 있고, 28수는 달이 하루에 하나씩 머무는 자리로 이해되었습니다.' },
          { t: 'p', text: '조선 초에는 이 체계를 담은 전천 별자리 지도가 만들어졌습니다. 1395년(태조 4년)에 제작된 천상열차분야지도는 돌에 새겨져 지금까지 전해지며, 1,400개가 넘는 별의 위치가 새겨져 있습니다. 서양의 별자리 그림과 비교해 보면, 같은 하늘을 완전히 다른 칸으로 나눈 두 지도를 나란히 볼 수 있습니다.' },
          { t: 'p', text: '오늘날 별자리 앱은 IAU의 88개 별자리를 씁니다. 하지만 한국어로 별을 부르는 방식은 여전히 두 계통이 섞여 있습니다. ‘북두칠성’, ‘삼태성’처럼 전통 이름으로 부르는 별이 있는가 하면, ‘베텔게우스’처럼 아랍어 어원을 그대로 옮긴 이름도 있습니다.' },
        ],
      },
      {
        heading: '이름을 읽는 법',
        blocks: [
          { t: 'p', text: '별 이름을 볼 때 세 가지만 기억하면 대부분의 혼란을 줄일 수 있습니다. 첫째, 밝은 별의 이름은 대개 그 별의 위치나 별자리 속 역할을 가리키는 설명입니다. 둘째, 표기가 여러 가지라면 원출처를 확인하는 편이 좋습니다. 셋째, 별 이름을 상품으로 파는 서비스는 공식 목록과 무관합니다.' },
          { t: 'p', text: '밤하늘의 이름은 수천 년 동안 번역되고 오해되고 다시 정리되었습니다. 그 이름들을 따라가면, 인류가 같은 별을 보며 서로 다른 언어로 같은 질문을 해 왔다는 사실이 남습니다.' },
        ],
      },
    ],
  },
  en: {
    intro:
      'Look closely at the names of the brightest stars and a strange sound creeps in. Deneb, Altair, Aldebaran. Neither Latin nor Greek: where did these names come from, and who settled them? Following their lineage leads to translation, mistranslation, and a modern argument over who has the right to name the sky.',
    cta: 'Tonight, what is the flow for your sign?',
    sections: [
      {
        heading: 'The catalogue of the sky travels through Arabic',
        blocks: [
          { t: 'image', src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=80', alt: 'A starry night sky over mountains' },
          { t: 'p', text: 'In the second century Ptolemy of Alexandria compiled a star catalogue in the Almagest: the positions and brightness of roughly a thousand stars across 48 constellations. For the next thousand years it was the standard for ordering the sky.' },
          { t: 'p', text: 'That catalogue came back to Europe through Arabic. Greek texts were translated on a large scale in ninth-century Baghdad, and in twelfth-century Toledo the Arabic versions were turned into Latin. In that double translation a large share of star names hardened into their Arabic forms.' },
          { t: 'p', text: 'Aldebaran comes from the Arabic al-dabaran, "the follower", because it rises behind the Pleiades. Deneb means "tail", Altair "the flying eagle", Vega "the swooping eagle" — names pointing to where the star sits or what it looks like within its constellation.' },
        ],
      },
      {
        heading: 'Algol — why "the ghoul’s head" stayed',
        blocks: [
          { t: 'p', text: 'Algol, in Perseus, comes from the Arabic ra’s al-ghul, "the head of the ghoul". It fits the figure of Perseus holding the head of Medusa, and the name is still in use today.' },
          { t: 'p', text: 'Interestingly, the star really is an eclipsing binary, dimming every 2.87 days as a bright and a faint star pass in front of each other. Whether ancient observers noticed the regular change is unclear, but it is often cited as a case where the way a star was named accidentally matched its nature.' },
          { t: 'p', text: 'Betelgeuse is more complicated. A widely repeated account says the Arabic yad al-jauza ("the hand of Orion") was misread in Latin as a word closer to "armpit". It is a famous example of translation clouding an original meaning, and many books still tell the story.' },
        ],
      },
      {
        heading: 'Greek, Latin and folk names mixed together',
        blocks: [
          { t: 'p', text: 'Not every name is Arabic. Sirius comes from a Greek word meaning "scorching", and Arcturus means "guardian of the bear", from its position following the Great Bear. Polaris and Capella have clear Latin roots.' },
          { t: 'p', text: 'Layered on top are local folk names. In Britain the Plough, in America the Big Dipper: the same stars appeared as different objects in different languages. A star name is an astronomical coordinate and, at the same time, a record of what a society saw in the sky.' },
        ],
      },
      {
        heading: '2016 — the IAU settles the names',
        blocks: [
          { t: 'p', text: 'For a long time star names were used differently depending on the source: observing software spelled them differently, and commercial "star registry" services circulated names with no official standing.' },
          { t: 'p', text: 'In 2016 the International Astronomical Union formed a working group and began the IAU Catalog of Star Names. Several hundred bright stars, and the host stars of some exoplanets, are now listed. The important principle is this: the names of the sky are not private property, and official names are set through a verified procedure.' },
          { t: 'p', text: 'The reason was practical: research data, teaching material, satellite navigation and astronomy software needed one name for one object. After an era of services selling stars, the public character of names was reaffirmed.' },
        ],
      },
      {
        heading: 'Korea’s sky — the 28 mansions and the star chart',
        blocks: [
          { t: 'p', text: 'East Asia had a system unlike the Western 88 constellations: the 28 mansions, dividing the sky into 28 regions. Each region is tied to one of the four guardian creatures — Azure Dragon, Black Tortoise, White Tiger, Vermilion Bird — and the mansions were understood as the places the Moon stays one night at a time.' },
          { t: 'p', text: 'In the early Joseon era a whole-sky chart of that system was made. The Cheonsang Yeolcha Bunyajido, produced in 1395, was carved in stone and survives today with the positions of more than 1,400 stars. Set beside a Western constellation chart, it shows two maps that divide the same sky in completely different ways.' },
          { t: 'p', text: 'Today’s stargazing apps use the IAU’s 88 constellations, but Korean naming still mixes two lineages: traditional names such as Bukdu Chilseong and Samtaeseong, and names carried over from Arabic such as Betelgeuse.' },
        ],
      },
      {
        heading: 'How to read a star name',
        blocks: [
          { t: 'p', text: 'Three things cut most of the confusion. First, the name of a bright star is usually a description of its position or its role in the constellation. Second, where spellings vary, check the original source. Third, a service selling star names has nothing to do with the official catalogue.' },
          { t: 'p', text: 'The names of the night sky have been translated, misunderstood and tidied up again over thousands of years. Follow them and what remains is the fact that humanity has looked at the same stars and asked the same questions in different languages.' },
        ],
      },
    ],
  },
  ja: {
    intro:
      '明るい星の名前をよく見ると、聞き慣れない響きが混じっています。デネブ、アルタイル、アルデバラン。ラテン語でもギリシャ語でもないこれらの名前はどこから来て、誰が決めたのか。星の名前の系譜をたどると、翻訳と誤訳、そして名づける権限をめぐる近代の議論に行き着きます。',
    cta: '今夜、自分の星座の流れは',
    sections: [
      {
        heading: '空の目録がアラビア語を経てヨーロッパへ',
        blocks: [
          { t: 'image', src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=80', alt: '山の上の星空' },
          { t: 'p', text: '2世紀、アレクサンドリアのプトレマイオスは『アルマゲスト』に星の目録をまとめました。48星座にわたる約1000の星の位置と明るさを収めたこの目録は、以後千年にわたり空を整理する基準となりました。' },
          { t: 'p', text: 'この目録がヨーロッパで再び読まれるまでにはアラビア語を経由する必要がありました。9世紀のバグダッドでギリシャ文献が大規模に翻訳され、12世紀にはスペインのトレドでアラビア語版がラテン語に移されます。この二重翻訳の過程で、星の名前の多くがアラビア語の形のまま固まりました。' },
          { t: 'p', text: 'アルデバランはアラビア語のアッ＝ダバラン、「後を追うもの」から来ています。プレアデス星団の後を追って昇るためについた名です。デネブは「尾」、アルタイルは「飛ぶ鷲」、ベガは「舞い降りる鷲」を意味します。いずれも星座のなかでその星が置かれた位置や形を指す名前です。' },
        ],
      },
      {
        heading: 'アルゴル — 「グールの首」という名が残った理由',
        blocks: [
          { t: 'p', text: 'ペルセウス座のアルゴルはアラビア語のラアス・アル＝グール、すなわち「グールの首」から来ています。メドゥサの首を持つペルセウスの姿と重なり、今日までその名が使われています。' },
          { t: 'p', text: '興味深いのは、この星が実際に2.87日周期で明るさを変える食連星だという点です。明るい星と暗い星が互いを隠して光が減ります。古代人がこの規則的な変化に気づいていたかは定かではありませんが、名づけられ方と実際の性質が偶然重なった例としてよく引かれます。' },
          { t: 'p', text: 'ベテルギウスはもう少し複雑です。アラビア語のヤド・アル＝ジャウザー（「オリオンの手」）がラテン語に移る過程で、「手」が「脇の下」に近い語として誤読されたという説明が広く流布しています。翻訳が本来の意味を曇らせた代表例として、今も多くの本がこの話を紹介します。' },
        ],
      },
      {
        heading: 'ギリシャ・ラテン語の名と民間の名が混ざる',
        blocks: [
          { t: 'p', text: 'すべての名前がアラビア語由来ではありません。シリウスはギリシャ語で「焼き焦がす」を意味する語から、アルクトゥルスは「熊の守護者」です。大熊座を追って回る位置から出た名です。ポラリス、カペラのようにラテン語由来が明らかな名も多くあります。' },
          { t: 'p', text: 'そこに各地の民間名が重なります。イギリスでは北斗七星を「プラウ（犂）」と呼び、アメリカでは「ビッグディッパー（大きな柄杓）」と呼びます。同じ星座が言語圏ごとに別の物に見えていたのです。星の名は天文学的な座標であると同時に、その社会が空のどこに何を見たかの記録でもあります。' },
        ],
      },
      {
        heading: '2016年 — 国際天文学連合が名を整理する',
        blocks: [
          { t: 'p', text: '長いあいだ、星の名前は出典によって異なる使われ方をしていました。観測ソフトごとに表記が違い、商業的な「星の命名サービス」のように公式の手続きと無関係な名も流通していました。' },
          { t: 'p', text: '2016年、国際天文学連合（IAU）は星名作業部会をつくり、公式星名目録（IAU-CSN）を運営し始めました。現在は数百の明るい星と、一部の系外惑星の主星の名前が登録されています。大切な原則はこれです。空の名前は私有物ではなく、公式の名は検証された手続きを経て決まる。' },
          { t: 'p', text: '整理が必要だった理由は実用的でした。研究データ、教育資料、衛星測位、天文ソフトが同じ対象を同じ名で呼ぶ必要があったからです。星を売買するサービスが流行した時代を経て、名前の公共性が再確認されたわけです。' },
        ],
      },
      {
        heading: '韓国の空 — 二十八宿と天象列次分野之図',
        blocks: [
          { t: 'p', text: '東アジアには西洋の88星座とは別の体系がありました。空を28の区域に分けた二十八宿です。各区域は青龍・玄武・白虎・朱雀の四神に結びつき、二十八宿は月が一晩ずつ宿る場所として理解されました。' },
          { t: 'p', text: '朝鮮初期にはこの体系を収めた全天星図が作られました。1395年（太祖4年）に制作された天象列次分野之図は石に刻まれて今に伝わり、1400を超える星の位置が刻まれています。西洋の星座図と並べれば、同じ空をまったく違う区切りで分けた二つの地図を比べられます。' },
          { t: 'p', text: '今日の星座アプリはIAUの88星座を使います。しかし韓国語で星を呼ぶやり方には、いまも二つの系統が混ざっています。北斗七星、三台星のように伝統的な名で呼ぶ星もあれば、ベテルギウスのようにアラビア語起源をそのまま移した名もあります。' },
        ],
      },
      {
        heading: '名前の読み方',
        blocks: [
          { t: 'p', text: '星の名前を見るとき、三つ覚えておけばほとんどの混乱は減ります。第一に、明るい星の名前はたいていその星の位置や星座のなかでの役割を指す説明です。第二に、表記が複数あるなら出典を確かめるのがよい。第三に、星の名を商品として売るサービスは公式目録とは無関係です。' },
          { t: 'p', text: '夜空の名前は数千年のあいだに翻訳され、誤解され、また整理されてきました。その名をたどると、人類が同じ星を見て、違う言葉で同じ問いを立ててきたという事実が残ります。' },
        ],
      },
    ],
  },
};
