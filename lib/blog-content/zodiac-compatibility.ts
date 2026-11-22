import type { BlogArticleContent } from './types';

export const zodiacCompatibilityGuide: BlogArticleContent = {
  related: ['what-is-astrology', 'chinese-vs-western-zodiac'],
  ko: {
    intro:
      '원소와 행성 에너지를 기반으로 12개 별자리 간의 궁합을 분석합니다. 왜 특정 별자리끼리 잘 맞고 어떤 별자리는 충돌하는지 그 원리를 알아보세요.',
    cta: '오늘 나의 별자리 운세 확인하기',
    sections: [
      {
        heading: '별자리 궁합의 원리',
        blocks: [
          { t: 'p', text: '별자리 궁합은 단순히 "잘 맞는다, 안 맞는다"로 나눌 수 있는 문제가 아닙니다. 두 사람의 별자리가 가진 원소, 특질, 지배 행성의 상호작용을 통해 관계의 역동성을 파악하는 것입니다. 궁합이 좋다는 것이 반드시 완벽한 관계를 보장하지 않으며, 궁합이 어렵다는 것도 그 관계가 불가능하다는 의미가 아닙니다.' },
          { t: 'p', text: '점성술에서 두 별자리 간의 각도(Aspect)가 궁합의 핵심입니다. 같은 원소(120도, Trine)는 자연스러운 조화를, 반대 원소(180도, Opposition)는 끌림과 긴장감을, 90도(Square)는 도전과 성장의 에너지를 나타냅니다.' },
          { t: 'p', text: '가장 중요한 원칙: 별자리 태양궁합은 전체 궁합의 일부입니다. 달 별자리, 상승 별자리, 금성 별자리 등도 함께 고려할 때 더 정확한 분석이 가능합니다.' },
        ],
      },
      {
        heading: '원소별 궁합 패턴 — 가장 강력한 기본 원칙',
        blocks: [
          { t: 'p', text: '같은 원소끼리는 기본적으로 잘 맞으며, 서로 보완하는 원소 사이에서도 좋은 시너지가 납니다.' },
          {
            t: 'box',
            title: '🔥 불(Fire) — 양자리, 사자자리, 사수자리',
            tone: 'caution',
            text: '**불 + 불 (최상):** 열정과 에너지가 서로를 증폭시킵니다. 함께 있으면 서로를 고무시키고 모험을 즐깁니다. 다만 두 사람 모두 주도권을 원하기 때문에 자존심 충돌이 생길 수 있습니다.\n**불 + 공기 (좋음):** 공기가 불을 키우듯, 공기 별자리는 불 별자리의 열정과 아이디어에 지적 자극과 소통을 더합니다. 서로 에너지를 주고받는 활기찬 조합입니다.\n**불 + 땅 (어려움):** 불의 충동성과 땅의 신중함이 충돌하기 쉽습니다. 서로 다른 리듬 때문에 답답함을 느낄 수 있지만, 균형을 이루면 서로의 약점을 보완합니다.\n**불 + 물 (긴장):** 가장 도전적인 조합. 불의 직진성과 물의 감수성이 오해를 만들 수 있습니다. 하지만 깊은 끌림이 생기는 조합이기도 합니다.',
          },
          {
            t: 'box',
            title: '🌍 땅(Earth) — 황소자리, 처녀자리, 염소자리',
            tone: 'positive',
            text: '**땅 + 땅 (최상):** 안정, 신뢰, 실용성을 공유합니다. 장기적인 관계를 쌓기에 최적의 조합. 가끔은 너무 안전하고 루틴에 빠져 지루함을 느낄 수 있습니다.\n**땅 + 물 (좋음):** 물이 땅을 풍요롭게 하듯, 물 별자리의 감수성이 땅 별자리의 현실적 성향에 깊이를 더합니다. 안정과 감성의 균형을 이루는 좋은 조합입니다.\n**땅 + 공기 (도전):** 현실 지향적인 땅과 이상적인 공기가 충돌합니다. 서로 다른 속도와 우선순위 때문에 갈등이 생기지만, 서로에게서 배울 것이 많습니다.',
          },
          {
            t: 'box',
            title: '💨 공기(Air) — 쌍둥이자리, 천칭자리, 물병자리',
            tone: 'warm',
            text: '**공기 + 공기 (최상):** 지적 자극이 넘치는 조합. 대화가 끊이지 않고 서로의 아이디어에 자극을 받습니다. 두 사람 모두 감정 표현에 서툴 수 있어 깊이 있는 감정적 연결이 과제입니다.\n**공기 + 물 (복잡):** 이성과 감성의 충돌. 공기의 논리적 접근이 물의 감성을 상처 입히기도 하지만, 서로 다른 세계를 탐험하는 흥미로운 조합이기도 합니다.',
          },
          {
            t: 'box',
            title: '💧 물(Water) — 게자리, 전갈자리, 물고기자리',
            tone: 'cool',
            text: '**물 + 물 (최상이자 과제):** 감정적 깊이와 공감이 최고에 달합니다. 서로를 완벽하게 이해하는 듯한 느낌을 받지만, 두 사람의 감정이 증폭되어 감정 소용돌이에 빠질 수도 있습니다. 건강한 경계 설정이 중요합니다.',
          },
        ],
      },
      {
        heading: '별자리별 최고 궁합 정리',
        blocks: [
          {
            t: 'table',
            head: ['별자리', '최고 궁합', '좋은 궁합', '도전적 궁합'],
            rows: [
              ['양자리 ♈', '사자자리, 사수자리', '쌍둥이자리, 물병자리', '천칭자리, 염소자리'],
              ['황소자리 ♉', '처녀자리, 염소자리', '게자리, 물고기자리', '전갈자리, 물병자리'],
              ['쌍둥이자리 ♊', '천칭자리, 물병자리', '양자리, 사자자리', '사수자리, 처녀자리'],
              ['게자리 ♋', '전갈자리, 물고기자리', '황소자리, 처녀자리', '양자리, 천칭자리'],
              ['사자자리 ♌', '양자리, 사수자리', '쌍둥이자리, 천칭자리', '황소자리, 전갈자리'],
              ['처녀자리 ♍', '황소자리, 염소자리', '게자리, 전갈자리', '사수자리, 쌍둥이자리'],
              ['천칭자리 ♎', '쌍둥이자리, 물병자리', '사자자리, 사수자리', '게자리, 염소자리'],
              ['전갈자리 ♏', '게자리, 물고기자리', '처녀자리, 염소자리', '양자리, 사자자리'],
              ['사수자리 ♐', '양자리, 사자자리', '천칭자리, 물병자리', '처녀자리, 쌍둥이자리'],
              ['염소자리 ♑', '황소자리, 처녀자리', '전갈자리, 물고기자리', '양자리, 천칭자리'],
              ['물병자리 ♒', '쌍둥이자리, 천칭자리', '양자리, 사수자리', '황소자리, 전갈자리'],
              ['물고기자리 ♓', '게자리, 전갈자리', '황소자리, 염소자리', '사수자리, 처녀자리'],
            ],
          },
        ],
      },
      {
        heading: '반대 별자리 — 끌림과 도전의 이중성',
        blocks: [
          { t: 'p', text: '황도대에서 정반대에 위치한 별자리들(180도 각도)은 "대립 쌍(Opposite Signs)"이라고 불립니다. 이 조합은 처음에 강력한 끌림을 만들어내지만, 동시에 가장 큰 긴장감을 유발합니다.' },
          {
            t: 'cards',
            items: [
              { title: '양자리 ↔ 천칭자리', meta: '자기 vs 타인', text: '양자리의 개인주의와 천칭자리의 관계 중심이 충돌하고 보완합니다.' },
              { title: '황소자리 ↔ 전갈자리', meta: '안정 vs 변혁', text: '황소자리의 안정 추구와 전갈자리의 변화 욕구가 긴장을 만듭니다.' },
              { title: '쌍둥이자리 ↔ 사수자리', meta: '지식 vs 지혜', text: '쌍둥이의 정보 수집과 사수자리의 철학적 탐구가 만납니다.' },
              { title: '게자리 ↔ 염소자리', meta: '가정 vs 사회', text: '내면의 세계와 외부 성공 사이의 균형을 찾는 조합입니다.' },
              { title: '사자자리 ↔ 물병자리', meta: '개인 vs 집단', text: '개인의 빛남과 집단의 진보 사이에서 균형을 찾습니다.' },
              { title: '처녀자리 ↔ 물고기자리', meta: '현실 vs 이상', text: '현실적 완벽주의와 이상적 감수성이 만나는 조합입니다.' },
            ],
          },
        ],
      },
      {
        heading: '궁합을 넘어서 — 진정한 관계의 열쇠',
        blocks: [
          { t: 'p', text: '가장 좋은 궁합을 가진 커플도 노력 없이는 좋은 관계를 유지할 수 없습니다. 반대로, 어려운 궁합으로 알려진 별자리 사이에서도 깊이 있고 지속적인 관계를 맺은 사례는 무수히 많습니다.' },
          { t: 'p', text: '별자리 궁합은 두 사람의 잠재적인 역동성을 보여주는 지도일 뿐입니다. 실제 관계에서는 상호 존중, 소통, 노력, 공유된 가치관이 별자리보다 훨씬 더 중요합니다.' },
          { t: 'p', text: '점성술에서 궁합을 볼 때 가장 중요한 것은 "이 조합에서 각자 어떻게 성장할 수 있는가?"입니다. 도전적인 궁합이라 해도 서로에게서 배울 것이 많은 가장 풍요로운 관계가 될 수 있습니다.' },
        ],
      },
    ],
  },
  en: {
    intro:
      'A reading of compatibility between the twelve signs, based on their elements and ruling planets: why some signs fit easily and others clash, and where the pattern comes from.',
    cta: 'Check my sign’s fortune for today',
    sections: [
      {
        heading: 'How sign compatibility works',
        blocks: [
          { t: 'p', text: 'Compatibility is not a yes-or-no verdict. It describes the dynamic between two charts through their elements, modes and ruling planets. A good match does not guarantee a perfect relationship, and a difficult one does not make a relationship impossible.' },
          { t: 'p', text: 'What matters in astrology is the angle between two signs. The same element (120°, a trine) brings natural harmony; opposite elements (180°, an opposition) bring attraction and tension; 90° (a square) brings challenge and growth.' },
          { t: 'p', text: 'The most important rule: sun-sign compatibility is only part of the picture. Moon signs, rising signs and Venus signs together give a far more accurate reading.' },
        ],
      },
      {
        heading: 'Element patterns — the strongest basic rule',
        blocks: [
          { t: 'p', text: 'Signs of the same element generally get on well, and complementary elements create strong synergy too.' },
          {
            t: 'box',
            title: '🔥 Fire — Aries, Leo, Sagittarius',
            tone: 'caution',
            text: '**Fire + fire (excellent):** passion and energy amplify each other. Together they spur each other on and enjoy adventure, though both want the lead, so pride can collide.\n**Fire + air (good):** as air feeds a flame, air signs add intellectual spark and conversation to fire’s passion and ideas. A lively pair that energises each other.\n**Fire + earth (difficult):** fire’s impulse and earth’s caution clash easily. The different rhythms can feel frustrating, but balanced they cover each other’s weak spots.\n**Fire + water (tense):** the hardest pairing. Fire’s directness and water’s sensitivity can create misunderstanding — and also deep attraction.',
          },
          {
            t: 'box',
            title: '🌍 Earth — Taurus, Virgo, Capricorn',
            tone: 'positive',
            text: '**Earth + earth (excellent):** shares stability, trust and practicality. Ideal for building something long-term, though it can become so safe and routine that it feels dull.\n**Earth + water (good):** water enriches earth. Water’s sensitivity gives depth to earth’s realism — a fine balance of steadiness and feeling.\n**Earth + air (challenging):** practical earth and idealistic air collide. Different pace and priorities create friction, but there is much to learn from each other.',
          },
          {
            t: 'box',
            title: '💨 Air — Gemini, Libra, Aquarius',
            tone: 'warm',
            text: '**Air + air (excellent):** endlessly stimulating. Conversation never runs dry and ideas feed each other. Both can be clumsy with feeling, so a deep emotional connection is the work.\n**Air + water (complex):** reason meets feeling. Air’s logical approach can wound water’s sensitivity, yet exploring each other’s different world is fascinating.',
          },
          {
            t: 'box',
            title: '💧 Water — Cancer, Scorpio, Pisces',
            tone: 'cool',
            text: '**Water + water (excellent and demanding):** emotional depth and empathy at their peak. It can feel like perfect understanding, but the two feelings amplify each other and can pull both into a whirlpool. Healthy boundaries matter.',
          },
        ],
      },
      {
        heading: 'Best matches by sign',
        blocks: [
          {
            t: 'table',
            head: ['Sign', 'Best', 'Good', 'Challenging'],
            rows: [
              ['Aries ♈', 'Leo, Sagittarius', 'Gemini, Aquarius', 'Libra, Capricorn'],
              ['Taurus ♉', 'Virgo, Capricorn', 'Cancer, Pisces', 'Scorpio, Aquarius'],
              ['Gemini ♊', 'Libra, Aquarius', 'Aries, Leo', 'Sagittarius, Virgo'],
              ['Cancer ♋', 'Scorpio, Pisces', 'Taurus, Virgo', 'Aries, Libra'],
              ['Leo ♌', 'Aries, Sagittarius', 'Gemini, Libra', 'Taurus, Scorpio'],
              ['Virgo ♍', 'Taurus, Capricorn', 'Cancer, Scorpio', 'Sagittarius, Gemini'],
              ['Libra ♎', 'Gemini, Aquarius', 'Leo, Sagittarius', 'Cancer, Capricorn'],
              ['Scorpio ♏', 'Cancer, Pisces', 'Virgo, Capricorn', 'Aries, Leo'],
              ['Sagittarius ♐', 'Aries, Leo', 'Libra, Aquarius', 'Virgo, Gemini'],
              ['Capricorn ♑', 'Taurus, Virgo', 'Scorpio, Pisces', 'Aries, Libra'],
              ['Aquarius ♒', 'Gemini, Libra', 'Aries, Sagittarius', 'Taurus, Scorpio'],
              ['Pisces ♓', 'Cancer, Scorpio', 'Taurus, Capricorn', 'Sagittarius, Virgo'],
            ],
          },
        ],
      },
      {
        heading: 'Opposite signs — attraction and challenge at once',
        blocks: [
          { t: 'p', text: 'Signs sitting directly opposite each other in the zodiac (180°) are called opposite signs. The pairing creates powerful attraction at first and the greatest tension at the same time.' },
          {
            t: 'cards',
            items: [
              { title: 'Aries ↔ Libra', meta: 'Self vs others', text: 'Aries’ individualism and Libra’s relationship focus clash and complete each other.' },
              { title: 'Taurus ↔ Scorpio', meta: 'Stability vs transformation', text: 'Taurus’ wish for steadiness and Scorpio’s hunger for change create tension.' },
              { title: 'Gemini ↔ Sagittarius', meta: 'Knowledge vs wisdom', text: 'Gemini gathers information; Sagittarius seeks philosophy. The two meet here.' },
              { title: 'Cancer ↔ Capricorn', meta: 'Home vs society', text: 'A pairing that looks for balance between the inner world and outward success.' },
              { title: 'Leo ↔ Aquarius', meta: 'The individual vs the group', text: 'A balance to find between one person’s shine and the progress of the collective.' },
              { title: 'Virgo ↔ Pisces', meta: 'Reality vs the ideal', text: 'Practical perfectionism meets idealistic sensitivity.' },
            ],
          },
        ],
      },
      {
        heading: 'Beyond compatibility — what really holds a relationship',
        blocks: [
          { t: 'p', text: 'Even a couple with the best possible match cannot keep a good relationship without effort. Equally, there are countless pairs of supposedly difficult signs in deep, lasting relationships.' },
          { t: 'p', text: 'Sign compatibility is only a map of the dynamic two people might have. In a real relationship, mutual respect, communication, effort and shared values matter far more than the signs.' },
          { t: 'p', text: 'The most useful question astrology asks about a pairing is: how can each of you grow in it? Even a challenging match can be the richest relationship, if there is much to learn from each other.' },
        ],
      },
    ],
  },
  ja: {
    intro:
      '元素と守護惑星をもとに、12星座どうしの相性を読み解きます。なぜある星座は惹かれ合い、ある星座はぶつかるのか、その仕組みを見ていきます。',
    cta: '今日の自分の星座の運勢を見る',
    sections: [
      {
        heading: '星座の相性の仕組み',
        blocks: [
          { t: 'p', text: '相性は「合う・合わない」の二択ではありません。二人の星座が持つ元素、区分、守護惑星の相互作用から、関係の力学を読むものです。相性が良いからといって完璧な関係が約束されるわけではなく、相性が難しいからといって関係が成り立たないわけでもありません。' },
          { t: 'p', text: '占星術では、二つの星座のあいだの角度が相性の核心です。同じ元素（120度、トライン）は自然な調和を、反対の元素（180度、オポジション）は惹かれ合いと緊張を、90度（スクエア）は挑戦と成長のエネルギーを表します。' },
          { t: 'p', text: 'もっとも大切な原則：太陽星座の相性は全体の一部です。月星座、上昇星座、金星の星座などもあわせて見ると、より正確に読めます。' },
        ],
      },
      {
        heading: '元素ごとの相性パターン',
        blocks: [
          { t: 'p', text: '同じ元素どうしは基本的に相性が良く、補い合う元素のあいだにも良い相乗効果が生まれます。' },
          {
            t: 'box',
            title: '🔥 火 — 牡羊座・獅子座・射手座',
            tone: 'caution',
            text: '**火＋火（最高）:** 情熱とエネルギーが互いを増幅します。一緒にいると励まし合い、冒険を楽しみます。ただし二人とも主導権を求めるため、プライドの衝突が起きやすい。\n**火＋風（良い）:** 風が火を育てるように、風の星座は火の情熱とアイデアに知的な刺激と対話を加えます。エネルギーを交換し合う活気ある組み合わせ。\n**火＋地（難しい）:** 火の衝動性と地の慎重さがぶつかりやすい。リズムの違いに窮屈さを感じますが、均衡が取れれば互いの弱点を補います。\n**火＋水（緊張）:** もっとも挑戦的な組み合わせ。火の直進性と水の感受性が誤解を生みます。一方で深い惹かれ合いが生まれる組み合わせでもあります。',
          },
          {
            t: 'box',
            title: '🌍 地 — 牡牛座・乙女座・山羊座',
            tone: 'positive',
            text: '**地＋地（最高）:** 安定、信頼、実用性を共有します。長く関係を築くのに最適な組み合わせ。ときには安全すぎて習慣に埋もれ、退屈に感じることも。\n**地＋水（良い）:** 水が地を潤すように、水の星座の感受性が地の現実的な気質に深みを加えます。安定と情感のバランスが取れた良い組み合わせ。\n**地＋風（挑戦）:** 現実志向の地と理想志向の風がぶつかります。速度と優先順位の違いから摩擦が生まれますが、互いから学べることが多くあります。',
          },
          {
            t: 'box',
            title: '💨 風 — 双子座・天秤座・水瓶座',
            tone: 'warm',
            text: '**風＋風（最高）:** 知的な刺激にあふれる組み合わせ。会話が尽きず、互いのアイデアに刺激を受けます。二人とも感情表現が苦手なことがあり、深い情緒的なつながりが課題になります。\n**風＋水（複雑）:** 理性と感性の衝突。風の論理的な関わりが水の感受性を傷つけることもありますが、異なる世界を探検する面白さもあります。',
          },
          {
            t: 'box',
            title: '💧 水 — 蟹座・蠍座・魚座',
            tone: 'cool',
            text: '**水＋水（最高であり課題）:** 情緒的な深さと共感が最高潮に達します。完璧に理解し合えるように感じますが、二人の感情が増幅されて渦に巻き込まれることも。健全な境界線づくりが大切です。',
          },
        ],
      },
      {
        heading: '星座別・相性のまとめ',
        blocks: [
          {
            t: 'table',
            head: ['星座', '最高の相性', '良い相性', '挑戦的な相性'],
            rows: [
              ['牡羊座 ♈', '獅子座、射手座', '双子座、水瓶座', '天秤座、山羊座'],
              ['牡牛座 ♉', '乙女座、山羊座', '蟹座、魚座', '蠍座、水瓶座'],
              ['双子座 ♊', '天秤座、水瓶座', '牡羊座、獅子座', '射手座、乙女座'],
              ['蟹座 ♋', '蠍座、魚座', '牡牛座、乙女座', '牡羊座、天秤座'],
              ['獅子座 ♌', '牡羊座、射手座', '双子座、天秤座', '牡牛座、蠍座'],
              ['乙女座 ♍', '牡牛座、山羊座', '蟹座、蠍座', '射手座、双子座'],
              ['天秤座 ♎', '双子座、水瓶座', '獅子座、射手座', '蟹座、山羊座'],
              ['蠍座 ♏', '蟹座、魚座', '乙女座、山羊座', '牡羊座、獅子座'],
              ['射手座 ♐', '牡羊座、獅子座', '天秤座、水瓶座', '乙女座、双子座'],
              ['山羊座 ♑', '牡牛座、乙女座', '蠍座、魚座', '牡羊座、天秤座'],
              ['水瓶座 ♒', '双子座、天秤座', '牡羊座、射手座', '牡牛座、蠍座'],
              ['魚座 ♓', '蟹座、蠍座', '牡牛座、山羊座', '射手座、乙女座'],
            ],
          },
        ],
      },
      {
        heading: '反対の星座 — 惹かれ合いと挑戦の二面性',
        blocks: [
          { t: 'p', text: '黄道で正反対に位置する星座（180度）は「オポジットサイン」と呼ばれます。この組み合わせは最初に強い惹かれ合いを生み、同時に最大の緊張も生みます。' },
          {
            t: 'cards',
            items: [
              { title: '牡羊座 ↔ 天秤座', meta: '自分 vs 相手', text: '牡羊座の個人主義と天秤座の関係中心の姿勢がぶつかり、補い合います。' },
              { title: '牡牛座 ↔ 蠍座', meta: '安定 vs 変革', text: '牡牛座の安定志向と蠍座の変化への欲求が緊張を生みます。' },
              { title: '双子座 ↔ 射手座', meta: '知識 vs 知恵', text: '双子座の情報収集と射手座の哲学的探究が出会います。' },
              { title: '蟹座 ↔ 山羊座', meta: '家庭 vs 社会', text: '内面の世界と外での成功のあいだで均衡を探す組み合わせです。' },
              { title: '獅子座 ↔ 水瓶座', meta: '個人 vs 集団', text: '個人の輝きと集団の前進のあいだで均衡を探します。' },
              { title: '乙女座 ↔ 魚座', meta: '現実 vs 理想', text: '現実的な完璧主義と理想的な感受性が出会う組み合わせです。' },
            ],
          },
        ],
      },
      {
        heading: '相性の先にあるもの — 関係を支える鍵',
        blocks: [
          { t: 'p', text: '最良の相性を持つ二人でも、努力なしに良い関係を保つことはできません。逆に、難しいとされる星座どうしでも、深く長く続く関係を築いた例は数えきれないほどあります。' },
          { t: 'p', text: '星座の相性は、二人に起こりうる力学を示す地図にすぎません。実際の関係では、相互の尊重、対話、努力、共有する価値観が星座よりもはるかに重要です。' },
          { t: 'p', text: '占星術で相性を見るときにいちばん大切な問いは「この組み合わせで、それぞれがどう成長できるか」です。挑戦的な相性でも、互いから学ぶことの多いもっとも豊かな関係になりえます。' },
        ],
      },
    ],
  },
};
