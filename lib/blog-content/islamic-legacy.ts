import type { BlogArticleContent } from './types';

export const islamicLegacy: BlogArticleContent = {
  related: ['ancient-egypt-astronomy', 'star-name-etymology'],
  ko: {
    intro:
      '오늘날 별자리 앱의 좌표 체계와 망원경의 각도 표기에는 중세 이슬람 세계의 계산 기술이 겹겹이 쌓여 있습니다. 8세기 바그다드의 번역 사업에서 15세기 사마르칸트의 관측소까지, 그 계보를 따라가 봅니다.',
    cta: '오늘의 별자리 흐름 보기',
    sections: [
      {
        heading: '번역이 먼저였다 — 9세기 바그다드',
        blocks: [
          { t: 'image', src: 'https://images.unsplash.com/photo-1543722530-d2c3201371e6?w=800&auto=format&fit=crop&q=80', alt: '고대 천문 관측 도구' },
          { t: 'p', text: '아바스 왕조의 칼리프 알마문은 9세기 초 바그다드에 대규모 번역 사업을 두었습니다. 흔히 ‘지혜의 집’이라 불리는 이 기관에서 그리스어, 페르시아어, 인도어 문헌이 아랍어로 옮겨졌습니다. 프톨레마이오스의 『알마게스트』도 이때 아랍어로 번역되었고, 제목은 『알마지스티』로 줄어 불렸습니다.' },
          { t: 'p', text: '번역은 옮기는 일에서 끝나지 않았습니다. 알콰리즈미는 인도와 그리스의 계산법을 정리해 산술과 대수학을 체계화했습니다. 그의 이름이 라틴어로 변형된 ‘알고리즘’과 그의 저서 제목에서 나온 ‘대수(algebra)’는 오늘날까지 쓰입니다. 천문 계산에 필요한 삼각법과 표 계산도 이 시기에 크게 정교해졌습니다.' },
          { t: 'p', text: '알바타니는 9세기 말 시리아에서 일식과 월식, 태양년 길이를 정밀하게 관측했습니다. 그의 값은 이후 유럽 천문학이 오랫동안 참조한 자료였습니다. 관측과 계산, 그리고 기록을 남기는 습관이 함께 발달한 시기였습니다.' },
        ],
      },
      {
        heading: '1259년 마라가 — 관측소라는 조직',
        blocks: [
          { t: 'p', text: '1259년, 몽골의 훌라구 칸은 지금의 이란 북서부 마라가에 대형 천문대를 세웠고 나시르 앗딘 투시가 이를 이끌었습니다. 이 관측소는 개인의 취미가 아니라 국가가 운영하는 연구 시설에 가까웠습니다. 상시 관측 인력, 기기 제작자, 계산 담당자가 함께 있었고, 관측 결과는 『일한조 천문표』로 정리되었습니다.' },
          { t: 'p', text: '투시의 이름이 오늘날까지 남은 이유는 ‘투시 부부(Tusi couple)’라는 기하 장치 때문입니다. 작은 원이 큰 원 안에서 굴러가면서 지름 위의 한 점이 직선을 그리게 만드는 구성입니다. 회전하는 원의 조합만으로 직선 운동을 만들어 낼 수 있다는 이 발상은, 등속 원운동만으로 천체 운동을 설명하려던 당시의 요구에서 나왔습니다.' },
          { t: 'p', text: '이 장치는 단순한 수학 놀이가 아니었습니다. 프톨레마이오스 체계의 불편한 부분을 고치려는 시도였고, 그 결과물은 이후 여러 세대의 천문학자에게 전해졌습니다.' },
        ],
      },
      {
        heading: '사마르칸트의 왕 — 울루그베그',
        blocks: [
          { t: 'p', text: '15세기 초 사마르칸트에서는 티무르 제국의 왕자 울루그베그가 직접 천문학을 연구했습니다. 그는 1420년대에 거대한 사분의(높이 약 40미터로 전해지는 벽면 관측기)를 갖춘 관측소를 세우고, 별의 위치를 다시 측정했습니다.' },
          { t: 'p', text: '그 결과로 만들어진 『술탄의 천문표』에는 약 1,000개 별의 위치가 담겼고, 정밀도는 당시 기준으로 매우 높았습니다. 유럽에서는 이 표가 오래도록 함께 인쇄되며 쓰였습니다. 왕이 직접 관측에 참여했다는 사실 자체가, 천문학이 통치의 정당성과 결부되어 있던 시대의 성격을 보여줍니다.' },
        ],
      },
      {
        heading: '톨레도에서 유럽으로 — 알폰시안 표',
        blocks: [
          { t: 'p', text: '12세기 스페인의 톨레도는 기독교, 유대교, 이슬람 문화가 겹치는 도시였고, 여기서 대규모 번역이 이루어졌습니다. 제라르도는 12세기 후반에 『알마게스트』를 아랍어에서 라틴어로 옮겼습니다. 별 이름의 아랍어 흔적은 대부분 이 경로를 거쳐 유럽에 남았습니다.' },
          { t: 'p', text: '카스티야의 알폰소 10세는 13세기 후반에 천문표를 새로 편찬하게 했습니다. 이른바 알폰시안 표로, 행성의 위치를 계산하는 실용적인 도구였습니다. 코페르니쿠스도 이 표를 참조했다는 기록이 남아 있습니다.' },
          { t: 'p', text: '여기서 흔히 오해가 생깁니다. 이슬람 천문학이 유럽에 넘긴 것은 ‘점성술’만이 아닙니다. 관측 기구, 삼각법, 표 계산법, 그리고 관측소라는 조직 형태가 함께 넘어갔습니다. 점성술과 천문학이 아직 분리되지 않은 시대였으므로, 두 분야는 같은 책과 같은 사람을 통해 이동했습니다.' },
        ],
      },
      {
        heading: '코페르니쿠스는 무엇을 이어받았나',
        blocks: [
          { t: 'p', text: '1543년 『천구의 회전에 관하여』에서 코페르니쿠스는 지구가 움직인다는 결론을 내놓았습니다. 이 결론은 관측 정밀도가 아니라 계산 구조의 단순함에서 나왔습니다. 행성의 역행 운동을 설명하기 위해 프톨레마이오스 체계가 동원해야 했던 복잡한 장치들을 줄일 수 있었기 때문입니다.' },
          { t: 'p', text: '흥미롭게도 코페르니쿠스가 사용한 기하 장치 가운데 일부는 마라가 학파의 구성과 닮아 있습니다. 1950년대 이후 여러 연구자가 이 유사성을 지적했고, 지금도 논쟁이 이어집니다. 직접적인 필사본 전승이 확인된 것은 아니므로, 단정하기보다 ‘같은 문제를 풀던 사람들이 비슷한 해법에 도달했다’ 정도로 읽는 것이 안전합니다.' },
          { t: 'p', text: '분명한 것은 방법의 연속성입니다. 관측하고, 표를 만들고, 표의 오차를 줄이려고 기하를 고치는 과정이 지중해를 사이에 두고 이어졌습니다.' },
        ],
      },
      {
        heading: '하늘을 가리키는 말들',
        blocks: [
          { t: 'p', text: '우리가 천문학에서 쓰는 단어에도 흔적이 남아 있습니다. 천정(zenith)은 아랍어로 ‘머리 위의 방향’을 뜻하는 말에서, 방위각(azimuth)은 ‘방향’을 뜻하는 말에서 왔습니다. 천저(nadir)는 그 반대 방향입니다. 연감(almanac)도 아랍어 어원을 가집니다.' },
          { t: 'p', text: '별자리 이름이 궁금하다면 이름의 어원을 따로 정리한 글도 있습니다. 하늘의 좌표가 궁금하다면, 지금 보는 별자리 앱에 찍힌 이름들이 어디서 왔는지 한 번쯤 확인해 보시길 권합니다. 그 이름들은 대개 바그다드와 톨레도와 사마르칸트를 거쳐 왔습니다.' },
        ],
      },
    ],
  },
  en: {
    intro:
      'The coordinate systems in today’s stargazing apps and the degree markings on a telescope carry the calculating techniques of the medieval Islamic world, layer upon layer. Follow the lineage from the translation project in eighth-century Baghdad to the observatory at Samarkand in the fifteenth.',
    cta: 'See today’s flow for your sign',
    sections: [
      {
        heading: 'Translation came first — Baghdad in the ninth century',
        blocks: [
          { t: 'image', src: 'https://images.unsplash.com/photo-1543722530-d2c3201371e6?w=800&auto=format&fit=crop&q=80', alt: 'An ancient astronomical instrument' },
          { t: 'p', text: 'In the early ninth century the Abbasid caliph al-Ma’mun set up a large translation effort in Baghdad. At the institution usually called the House of Wisdom, Greek, Persian and Indian texts were turned into Arabic — among them Ptolemy’s Almagest, whose title was shortened to al-Majisti.' },
          { t: 'p', text: 'Translation did not stop at copying. Al-Khwarizmi organised Indian and Greek methods of calculation into systematic arithmetic and algebra; his name, latinised, gave us "algorithm", and the title of his book gave us "algebra". Trigonometry and the tabulation needed for astronomical calculation also grew much more precise in this period.' },
          { t: 'p', text: 'Al-Battani, in late ninth-century Syria, observed eclipses and the length of the solar year with great care, and his values were consulted by European astronomy for a long time afterwards. Observation, calculation and the habit of keeping records developed together.' },
        ],
      },
      {
        heading: 'Maragha in 1259 — the observatory as an institution',
        blocks: [
          { t: 'p', text: 'In 1259 the Mongol ruler Hulagu Khan built a large observatory at Maragha, in what is now north-west Iran, led by Nasir al-Din al-Tusi. It was closer to a state research facility than a private pursuit: permanent observers, instrument makers and calculators worked together, and the results were gathered into the Ilkhanic Tables.' },
          { t: 'p', text: 'Tusi’s name survives because of a geometric device called the Tusi couple: a small circle rolling inside a larger one, with a point on its diameter tracing a straight line. The idea that a straight motion can be produced from rotating circles alone came from the need of the time to explain celestial motion with uniform circular motion only.' },
          { t: 'p', text: 'It was not a mathematical toy. It was an attempt to repair the awkward parts of the Ptolemaic system, and the result was passed to several generations of astronomers.' },
        ],
      },
      {
        heading: 'The prince of Samarkand — Ulugh Beg',
        blocks: [
          { t: 'p', text: 'In Samarkand in the early fifteenth century, Ulugh Beg, a prince of the Timurid empire, studied astronomy himself. In the 1420s he built an observatory with a huge sextant — a wall instrument said to be about forty metres high — and measured the positions of the stars anew.' },
          { t: 'p', text: 'The resulting Zij-i Sultani held the positions of about a thousand stars with precision very high for the time, and in Europe the tables were printed and used alongside others for a long while. That the ruler took part in observing himself shows the character of an age in which astronomy was bound up with the legitimacy of rule.' },
        ],
      },
      {
        heading: 'Toledo to Europe — the Alfonsine tables',
        blocks: [
          { t: 'p', text: 'Twelfth-century Toledo, in Spain, was a city where Christian, Jewish and Islamic cultures overlapped, and a great deal of translation happened there. Gerard of Cremona turned the Almagest from Arabic into Latin in the later twelfth century, and most of the Arabic traces in star names reached Europe by that route.' },
          { t: 'p', text: 'In the later thirteenth century Alfonso X of Castile had a new set of astronomical tables compiled — the Alfonsine tables, a practical tool for calculating planetary positions. There are records that Copernicus consulted them.' },
          { t: 'p', text: 'A common misunderstanding arises here. What Islamic astronomy handed to Europe was not only astrology: observing instruments, trigonometry, tabular calculation and the organisational form of the observatory travelled with it. In an age when astrology and astronomy were not yet separate, the two moved through the same books and the same people.' },
        ],
      },
      {
        heading: 'What Copernicus inherited',
        blocks: [
          { t: 'p', text: 'In De revolutionibus of 1543 Copernicus concluded that the Earth moves. The conclusion came not from observational precision but from the simplicity of the calculating structure: it could reduce the complicated devices the Ptolemaic system needed to explain the planets’ retrograde motion.' },
          { t: 'p', text: 'Interestingly, some of the geometric devices Copernicus used resemble constructions of the Maragha school. Several researchers have pointed to the similarity since the 1950s, and the argument continues. Since no direct manuscript transmission has been established, it is safer to read it as "people working on the same problem arrived at similar solutions" rather than as a settled claim.' },
          { t: 'p', text: 'What is clear is the continuity of method. Observing, making tables, and reworking the geometry to reduce the errors in the tables went on across the Mediterranean.' },
        ],
      },
      {
        heading: 'Words that point at the sky',
        blocks: [
          { t: 'p', text: 'The words we use in astronomy carry the trace too. Zenith comes from an Arabic phrase meaning "the direction overhead", azimuth from a word meaning "direction", and nadir is the opposite direction; almanac also has an Arabic root.' },
          { t: 'p', text: 'If you are curious about the names of the constellations, there is a separate piece on the etymology of star names. If you are curious about the coordinates of the sky, it is worth checking once where the names in your stargazing app came from. They mostly travelled through Baghdad, Toledo and Samarkand.' },
        ],
      },
    ],
  },
  ja: {
    intro:
      '今日の星座アプリの座標体系や望遠鏡の角度表記には、中世イスラーム世界の計算技術が幾重にも積み重なっています。8世紀バグダッドの翻訳事業から15世紀サマルカンドの天文台まで、その系譜をたどります。',
    cta: '今日の星座の流れを見る',
    sections: [
      {
        heading: 'まず翻訳があった — 9世紀のバグダッド',
        blocks: [
          { t: 'image', src: 'https://images.unsplash.com/photo-1543722530-d2c3201371e6?w=800&auto=format&fit=crop&q=80', alt: '古代の天文観測器具' },
          { t: 'p', text: 'アッバース朝のカリフ・アル＝マアムーンは9世紀初め、バグダッドに大規模な翻訳事業を置きました。しばしば「知恵の館」と呼ばれるこの機関で、ギリシャ語・ペルシア語・インド語の文献がアラビア語に移されます。プトレマイオスの『アルマゲスト』もこのとき翻訳され、題名は『アル＝マジスティ』と短く呼ばれました。' },
          { t: 'p', text: '翻訳は移すだけで終わりませんでした。アル＝フワーリズミーはインドとギリシャの計算法を整理し、算術と代数学を体系化します。彼の名がラテン語化した「アルゴリズム」と、著書の題名から生まれた「代数（algebra）」は今日まで使われています。天文計算に必要な三角法と表計算もこの時期に大きく精密になりました。' },
          { t: 'p', text: 'アル＝バッターニーは9世紀末のシリアで日食・月食や太陽年の長さを精密に観測しました。その値はその後長くヨーロッパの天文学が参照した資料でした。観測と計算、そして記録を残す習慣がともに発達した時代でした。' },
        ],
      },
      {
        heading: '1259年のマラーガ — 天文台という組織',
        blocks: [
          { t: 'p', text: '1259年、モンゴルのフレグ・ハンは現在のイラン北西部マラーガに大規模な天文台を建て、ナスィール・アッディーン・トゥースィーがこれを率いました。この天文台は個人の趣味ではなく、国家が運営する研究施設に近いものでした。常駐の観測者、器具製作者、計算担当者がともに働き、観測結果は『イルハン天文表』にまとめられます。' },
          { t: 'p', text: 'トゥースィーの名が今日まで残るのは「トゥースィーの対（Tusi couple）」という幾何の仕掛けのためです。小さな円が大きな円の内側を転がりながら、直径上の一点が直線を描く構成です。回転する円の組み合わせだけで直線運動をつくれるという発想は、等速円運動だけで天体の動きを説明しようとした当時の要請から生まれました。' },
          { t: 'p', text: 'この装置は単なる数学遊びではありませんでした。プトレマイオス体系の具合の悪い部分を直そうとする試みで、その成果は後の世代の天文学者に伝えられました。' },
        ],
      },
      {
        heading: 'サマルカンドの王 — ウルグ・ベク',
        blocks: [
          { t: 'p', text: '15世紀初めのサマルカンドでは、ティムール朝の王子ウルグ・ベクが自ら天文学を研究しました。彼は1420年代に巨大な四分儀（高さ約40メートルと伝わる壁面観測器）を備えた天文台を建て、星の位置を測り直します。' },
          { t: 'p', text: 'その成果である『スルタンの天文表』には約1000の星の位置が収められ、精度は当時の基準で非常に高いものでした。ヨーロッパではこの表が長く他の表とともに印刷され使われました。王みずから観測に加わったという事実自体が、天文学が統治の正当性と結びついていた時代の性格を示しています。' },
        ],
      },
      {
        heading: 'トレドからヨーロッパへ — アルフォンソ表',
        blocks: [
          { t: 'p', text: '12世紀のスペイン、トレドはキリスト教・ユダヤ教・イスラーム文化が重なる都市で、ここで大規模な翻訳が行われました。ジェラルドは12世紀後半に『アルマゲスト』をアラビア語からラテン語に移します。星名に残るアラビア語の痕跡は、ほとんどがこの経路でヨーロッパに入りました。' },
          { t: 'p', text: 'カスティーリャのアルフォンソ10世は13世紀後半に天文表を新たに編纂させました。いわゆるアルフォンソ表で、惑星の位置を計算する実用的な道具でした。コペルニクスもこの表を参照したという記録が残っています。' },
          { t: 'p', text: 'ここでよく誤解が生じます。イスラーム天文学がヨーロッパに渡したのは「占星術」だけではありません。観測器具、三角法、表計算、そして天文台という組織の形も一緒に渡りました。占星術と天文学がまだ分かれていない時代だったので、二つの分野は同じ本と同じ人を通じて移動したのです。' },
        ],
      },
      {
        heading: 'コペルニクスは何を受け継いだのか',
        blocks: [
          { t: 'p', text: '1543年の『天球の回転について』で、コペルニクスは地球が動くという結論を出しました。この結論は観測の精密さではなく、計算構造の単純さから出ています。惑星の逆行運動を説明するためにプトレマイオス体系が動員した複雑な仕掛けを減らせたからです。' },
          { t: 'p', text: '興味深いことに、コペルニクスが使った幾何の仕掛けのいくつかはマラーガ学派の構成と似ています。1950年代以降、複数の研究者がこの類似を指摘し、議論は今も続きます。直接の写本伝承が確認されているわけではないので、断定するより「同じ問題を解いていた人たちが似た解にたどり着いた」と読むのが安全です。' },
          { t: 'p', text: '確かなのは方法の連続です。観測し、表をつくり、表の誤差を減らすために幾何を直す——その営みが地中海を挟んで続いていました。' },
        ],
      },
      {
        heading: '空を指す言葉たち',
        blocks: [
          { t: 'p', text: '天文学で使う言葉にも痕跡が残っています。天頂（zenith）はアラビア語で「頭上の方向」を意味する語から、方位角（azimuth）は「方向」を意味する語から来ています。天底（nadir）はその反対方向です。年鑑（almanac）もアラビア語の語源を持ちます。' },
          { t: 'p', text: '星座の名前が気になるなら、名前の語源を別にまとめた記事もあります。空の座標が気になるなら、いま見ている星座アプリに載っている名前がどこから来たのか、一度確かめてみてください。その名前はたいていバグダッドとトレドとサマルカンドを通ってきています。' },
        ],
      },
    ],
  },
};
