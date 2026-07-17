export type Lang = 'ko' | 'en' | 'ja' | 'zh';

export interface GuideSection {
  h2: string;
  body: string;
  items?: { title: string; desc: string }[];
}

export interface GuideLang {
  title: string;
  subtitle: string;
  sections: GuideSection[];
  cta: string;
}

export interface Guide {
  slug: string;
  icon: string;
  ctaHref: string;
  ko: GuideLang;
  en: GuideLang;
  ja: GuideLang;
  zh: GuideLang;
}

export const GUIDES: Guide[] = [
  {
    slug: 'zodiac-compatibility',
    icon: '💑',
    ctaHref: '/',
    ko: {
      title: '별자리 궁합 완벽 가이드',
      subtitle: '원소와 에너지로 알아보는 12별자리 궁합. 당신의 별자리와 가장 잘 맞는 파트너를 찾아보세요.',
      cta: '내 별자리 운세 보기',
      sections: [
        {
          h2: '4원소로 보는 궁합 기초',
          body: '서양 점성술에서 12별자리는 불(♈♌♐)·땅(♉♍♑)·공기(♊♎♒)·물(♋♏♓) 4원소로 나뉩니다. 같은 원소끼리는 자연스럽게 공감대가 높고, 보완적인 원소끼리는 서로의 단점을 채워주는 관계가 됩니다.',
          items: [
            { title: '🔥 불 원소 (양자리·사자자리·사수자리)', desc: '열정적이고 역동적. 공기 원소와 최고의 궁합. 서로의 에너지를 극대화합니다.' },
            { title: '🌍 땅 원소 (황소자리·처녀자리·염소자리)', desc: '안정적이고 신뢰감 높음. 물 원소와 아름다운 조화. 장기적인 파트너십에 최적.' },
            { title: '💨 공기 원소 (쌍둥이자리·천칭자리·물병자리)', desc: '지적이고 소통 활발. 불 원소를 더욱 빛나게 만드는 촉진제 역할.' },
            { title: '💧 물 원소 (게자리·전갈자리·물고기자리)', desc: '감성적이고 직관적. 땅 원소와 조화롭고, 물 원소끼리 깊은 감정적 유대.' },
          ],
        },
        {
          h2: '최고의 궁합 조합 TOP 5',
          body: '점성술사들이 특히 높게 평가하는 조합입니다. 단, 어떤 조합이든 서로의 노력이 가장 중요합니다.',
          items: [
            { title: '양자리 ♈ × 사자자리 ♌ (궁합도 97%)', desc: '불과 불의 만남. 서로의 열정을 증폭시키며 인생의 모험을 함께합니다.' },
            { title: '황소자리 ♉ × 처녀자리 ♍ (궁합도 95%)', desc: '땅 원소 황금 커플. 안정적이고 헌신적인 파트너십으로 현실적인 목표를 함께 달성합니다.' },
            { title: '게자리 ♋ × 전갈자리 ♏ (궁합도 96%)', desc: '물 원소의 깊은 유대. 서로의 내면을 직관적으로 이해하고 강한 신뢰를 쌓습니다.' },
            { title: '쌍둥이자리 ♊ × 천칭자리 ♎ (궁합도 94%)', desc: '공기 원소 최강 커플. 끝없는 대화와 지적 자극으로 서로에게 영감을 줍니다.' },
            { title: '사자자리 ♌ × 사수자리 ♐ (궁합도 93%)', desc: '자유로운 불의 영혼들. 함께라면 어디든 모험이 되는 역동적이고 즐거운 커플.' },
          ],
        },
        {
          h2: '궁합을 볼 때 알아야 할 것',
          body: '태양 별자리(생일로 결정되는 별자리)는 궁합의 시작점일 뿐입니다. 완전한 점성술 궁합은 달 별자리, 상승 별자리, 금성·화성의 위치까지 종합적으로 분석합니다. 정반대 별자리(양자리-천칭자리, 황소자리-전갈자리)는 처음엔 충돌처럼 보이지만 서로가 없는 자질을 보완해주는 강력한 인력이 작용합니다.',
          items: [
            { title: '궁합은 가이드일 뿐', desc: '어떤 별자리 조합이든 이해와 노력이 있다면 아름다운 관계를 만들 수 있습니다.' },
            { title: '달 별자리도 중요합니다', desc: '달 별자리는 감정 반응 방식을 나타내며, 연애 궁합에서 태양 별자리만큼이나 중요합니다.' },
          ],
        },
      ],
    },
    en: {
      title: 'Zodiac Compatibility Guide',
      subtitle: 'Discover how the 12 zodiac signs match through elements and energy. Find your ideal partner.',
      cta: 'Check My Fortune',
      sections: [
        {
          h2: 'The Four Elements Explained',
          body: 'In Western astrology, the 12 signs are grouped into four elements: Fire (♈♌♐), Earth (♉♍♑), Air (♊♎♒), and Water (♋♏♓). Same-element signs resonate naturally, while complementary elements balance each other.',
          items: [
            { title: '🔥 Fire Signs (Aries · Leo · Sagittarius)', desc: 'Passionate and dynamic. Best matched with Air signs, which feed their flame and enthusiasm.' },
            { title: '🌍 Earth Signs (Taurus · Virgo · Capricorn)', desc: 'Stable and reliable. Beautiful harmony with Water signs. Ideal for long-term partnerships.' },
            { title: '💨 Air Signs (Gemini · Libra · Aquarius)', desc: 'Intellectual and communicative. A catalyst that makes Fire signs shine even brighter.' },
            { title: '💧 Water Signs (Cancer · Scorpio · Pisces)', desc: 'Emotional and intuitive. Harmonious with Earth; deep bonds with other Water signs.' },
          ],
        },
        {
          h2: 'Top 5 Best Match Combinations',
          body: 'These pairings are especially highly regarded by astrologers. Remember: mutual effort matters most in any relationship.',
          items: [
            { title: 'Aries ♈ × Leo ♌ (97% match)', desc: 'Fire meets fire. Together they amplify each other\'s passion and embrace life\'s adventures.' },
            { title: 'Taurus ♉ × Virgo ♍ (95% match)', desc: 'Earth\'s golden couple. Stable, devoted partnership with shared practical goals.' },
            { title: 'Cancer ♋ × Scorpio ♏ (96% match)', desc: 'Deep water-sign bond. Intuitive understanding and unshakeable trust.' },
            { title: 'Gemini ♊ × Libra ♎ (94% match)', desc: 'Air\'s power couple. Endless conversation and mutual intellectual inspiration.' },
            { title: 'Leo ♌ × Sagittarius ♐ (93% match)', desc: 'Free-spirited fire. Together anywhere becomes an adventure.' },
          ],
        },
        {
          h2: 'What to Keep in Mind',
          body: 'Your Sun sign is just the starting point. Full astrological compatibility also considers the Moon sign, Rising sign, and Venus and Mars positions. Opposite signs (Aries-Libra, Taurus-Scorpio) may seem to clash but powerfully attract each other through complementary qualities.',
          items: [
            { title: 'Compatibility is a guide, not a verdict', desc: 'Any combination can build a beautiful relationship with understanding and effort.' },
            { title: 'Moon sign matters too', desc: 'Your Moon sign reflects emotional responses and is just as important as the Sun sign for romantic compatibility.' },
          ],
        },
      ],
    },
    ja: {
      title: '星座相性完全ガイド',
      subtitle: '元素とエネルギーで見る12星座の相性。あなたの星座に最も合うパートナーを見つけましょう。',
      cta: '自分の星座の運勢を見る',
      sections: [
        {
          h2: '4つの元素で見る相性の基礎',
          body: '西洋占星術では12星座を火(♈♌♐)・地(♉♍♑)・風(♊♎♒)・水(♋♏♓)の4元素に分けます。同じ元素同士は共鳴しやすく、補完的な元素同士は弱点を補い合います。',
          items: [
            { title: '🔥 火のサイン（牡羊座・獅子座・射手座）', desc: '情熱的でダイナミック。風のサインと最高の相性。互いのエネルギーを高め合います。' },
            { title: '🌍 地のサイン（牡牛座・乙女座・山羊座）', desc: '安定していて信頼感が高い。水のサインと美しい調和。長期的な関係に最適。' },
            { title: '💨 風のサイン（双子座・天秤座・水瓶座）', desc: '知的でコミュニケーション豊か。火のサインをさらに輝かせる触媒的役割。' },
            { title: '💧 水のサイン（蟹座・蠍座・魚座）', desc: '感情的で直感的。地のサインと調和的で、水同士は深い感情的絆を形成。' },
          ],
        },
        {
          h2: 'ベストマッチ TOP 5',
          body: '占星術師が特に高く評価する組み合わせです。ただし、どの組み合わせでも互いの努力が最も重要です。',
          items: [
            { title: '牡羊座 ♈ × 獅子座 ♌（相性97%）', desc: '火と火の出会い。互いの情熱を高め合い、人生の冒険を共にします。' },
            { title: '牡牛座 ♉ × 乙女座 ♍（相性95%）', desc: '地のゴールデンカップル。安定した献身的なパートナーシップ。' },
            { title: '蟹座 ♋ × 蠍座 ♏（相性96%）', desc: '水のサインの深い絆。直感的な理解と揺るぎない信頼。' },
            { title: '双子座 ♊ × 天秤座 ♎（相性94%）', desc: '風のパワーカップル。尽きない会話と知的インスピレーション。' },
            { title: '獅子座 ♌ × 射手座 ♐（相性93%）', desc: '自由な炎の魂。一緒にいればどこでも冒険になります。' },
          ],
        },
        {
          h2: '相性を見る際に知っておくこと',
          body: '太陽星座（誕生日で決まる星座）は相性のスタート地点に過ぎません。完全な相性分析には月星座、アセンダント、金星・火星の位置も重要です。正反対の星座（牡羊座-天秤座など）は衝突するように見えて、実は強力な引力を持ちます。',
          items: [
            { title: '相性はガイドです', desc: 'どの組み合わせも、理解と努力があれば素晴らしい関係を築けます。' },
            { title: '月星座も大切', desc: '月星座は感情の反応パターンを示し、恋愛相性で太陽星座と同じくらい重要です。' },
          ],
        },
      ],
    },
    zh: {
      title: '星座配对完全指南',
      subtitle: '通过元素和能量了解12星座的配对关系，找到你最合适的伴侣。',
      cta: '查看我的今日运势',
      sections: [
        {
          h2: '四元素配对基础',
          body: '西方占星术将12星座分为火(♈♌♐)、土(♉♍♑)、风(♊♎♒)、水(♋♏♓)四种元素。同元素星座自然产生共鸣，互补元素则相互弥补不足。',
          items: [
            { title: '🔥 火象星座（白羊座·狮子座·射手座）', desc: '热情有活力，与风象星座最为相配，互相激励，共同燃烧热情。' },
            { title: '🌍 土象星座（金牛座·处女座·摩羯座）', desc: '稳定可靠，与水象星座和谐美好，适合长期伴侣关系。' },
            { title: '💨 风象星座（双子座·天秤座·水瓶座）', desc: '智识丰富，沟通活跃，是让火象星座更加闪耀的催化剂。' },
            { title: '💧 水象星座（巨蟹座·天蝎座·双鱼座）', desc: '情感丰富，直觉敏锐。与土象和谐，水象之间有深厚情感纽带。' },
          ],
        },
        {
          h2: '最佳配对 TOP 5',
          body: '占星师特别认可的配对组合。任何关系中，相互努力永远是最重要的。',
          items: [
            { title: '白羊座 ♈ × 狮子座 ♌（配对97%）', desc: '火与火的相遇，互相激励热情，共同迎接人生的冒险。' },
            { title: '金牛座 ♉ × 处女座 ♍（配对95%）', desc: '土象黄金组合，稳定忠诚，共同实现现实目标。' },
            { title: '巨蟹座 ♋ × 天蝎座 ♏（配对96%）', desc: '水象深厚纽带，直觉性相互理解，信任牢固。' },
            { title: '双子座 ♊ × 天秤座 ♎（配对94%）', desc: '风象强力组合，无尽对话和智识灵感。' },
            { title: '狮子座 ♌ × 射手座 ♐（配对93%）', desc: '自由火焰的灵魂，在一起无处不是冒险。' },
          ],
        },
        {
          h2: '看配对时需知道的事',
          body: '太阳星座（生日决定的星座）只是配对的起点。完整的占星配对还需综合考虑月亮星座、上升星座和金星、火星的位置。相对星座（白羊-天秤等）看似冲突，实则因互补而产生强大吸引力。',
          items: [
            { title: '配对只是参考', desc: '任何组合，只要相互理解和努力，都能建立美好关系。' },
            { title: '月亮星座也很重要', desc: '月亮星座反映情感反应方式，在爱情配对中与太阳星座同样重要。' },
          ],
        },
      ],
    },
  },
  {
    slug: 'horoscope-history',
    icon: '📜',
    ctaHref: '/',
    ko: {
      title: '운세와 점성술의 역사',
      subtitle: '수천 년 인류와 함께한 별자리와 운세. 바빌론에서 현대 AI 운세까지의 긴 여정.',
      cta: '오늘의 운세 보기',
      sections: [
        {
          h2: '서양 점성술의 기원: 고대 바빌론',
          body: '점성술의 역사는 약 4,000년 전 고대 메소포타미아(현재 이라크)의 바빌론으로 거슬러 올라갑니다. 바빌론 사제들은 밤하늘의 별과 행성 움직임을 관찰하며 농사, 전쟁, 왕국의 운명을 예측했습니다. 기원전 7세기경에는 황도 12궁(12별자리)이 정립되었고, 이것이 오늘날 우리가 사용하는 별자리 체계의 원형이 되었습니다.',
          items: [
            { title: '기원전 2000년경', desc: '바빌론에서 천체 관측 기록 시작. 왕의 운명을 별에서 읽음.' },
            { title: '기원전 7세기', desc: '황도 12궁 확립. 고대 그리스로 점성술 지식 전파.' },
            { title: '기원전 4~2세기', desc: '그리스 시대에 개인 운세(호로스코프) 개념 발전. 철학과 결합.' },
          ],
        },
        {
          h2: '동양 운세의 역사: 사주팔자와 음양오행',
          body: '동양에서는 중국을 중심으로 독자적인 운세 체계가 발전했습니다. 사주팔자(四柱八字)는 태어난 년·월·일·시의 천간(天干)과 지지(地支)로 구성된 여덟 글자로 운명을 분석하는 시스템입니다. 음양오행(木·火·土·金·水)은 자연의 다섯 가지 에너지로 세상을 해석하는 틀로, 한국의 무속 문화와 결합해 독특한 운세 문화를 만들었습니다.',
          items: [
            { title: '12간지의 탄생', desc: '쥐·소·호랑이 등 12가지 동물로 해를 구분하는 체계. 동아시아 전역에서 사용.' },
            { title: '사주팔자의 정립', desc: '당나라~송나라 시대에 체계화된 운명 분석법. 현재도 한국, 중국, 일본에서 활발히 활용.' },
            { title: '타로 카드의 등장', desc: '15세기 유럽에서 놀이용 카드에서 시작된 타로가 18세기부터 점술 도구로 발전.' },
          ],
        },
        {
          h2: '현대 운세: 심리학과 AI의 결합',
          body: '20세기에 들어 칼 융(Carl Jung)은 점성술을 심리학적 관점에서 재해석하여 "별자리는 우리의 심리적 경향을 보여주는 거울"이라고 했습니다. 오늘날의 운세는 과학적 예측 도구가 아닌 자기 이해와 성찰의 도구로 활용됩니다. AI 기술의 발전으로 이제는 개인화된 AI 운세가 매일 수백만 명에게 제공되고 있습니다.',
          items: [
            { title: '왜 운세는 사랑받는가', desc: '불확실한 미래 앞에서 방향을 찾고 싶은 인간의 본능적 욕구. 자기 이해를 돕는 도구로서의 가치.' },
            { title: '운세와 확증 편향', desc: '사람들은 자신에게 해당한다고 생각하는 운세 내용에 더 주목합니다. 이를 "바넘 효과"라 합니다.' },
          ],
        },
      ],
    },
    en: {
      title: 'History of Astrology & Fortune Telling',
      subtitle: 'Thousands of years of human fascination with the stars—from ancient Babylon to modern AI readings.',
      cta: 'Check Today\'s Fortune',
      sections: [
        {
          h2: 'Origins: Ancient Babylon',
          body: 'Astrology traces its roots back roughly 4,000 years to ancient Mesopotamia (modern Iraq). Babylonian priests observed the movements of stars and planets to predict harvests, wars, and the fates of kingdoms. By the 7th century BCE, the 12 zodiac signs were established, forming the basis of the system we use today.',
          items: [
            { title: 'c. 2000 BCE', desc: 'Babylonians begin recording celestial observations to read the king\'s fate.' },
            { title: '7th century BCE', desc: 'The 12-sign zodiac is established and spreads to ancient Greece.' },
            { title: '4th–2nd century BCE', desc: 'Greek era: personal horoscopes develop; astrology merges with philosophy.' },
          ],
        },
        {
          h2: 'Eastern Traditions: Four Pillars & Five Elements',
          body: 'East Asia developed its own fortune-telling systems. The Four Pillars of Destiny (四柱八字) analyzes fate through eight characters representing the year, month, day, and hour of birth. The Five Elements (Wood, Fire, Earth, Metal, Water) provide a framework for understanding nature\'s energies, forming a rich tradition practiced across Korea, China, and Japan.',
          items: [
            { title: 'The 12 Animal Zodiac', desc: 'Rat, Ox, Tiger… 12 animals cycle in 12-year patterns across East Asia.' },
            { title: 'Four Pillars system', desc: 'Systematized during the Tang–Song dynasties; still widely consulted today.' },
            { title: 'Tarot cards', desc: 'Born as playing cards in 15th-century Europe, tarot evolved into divination tools by the 18th century.' },
          ],
        },
        {
          h2: 'Modern Era: Psychology & AI',
          body: 'In the 20th century, Carl Jung reinterpreted astrology psychologically, suggesting that zodiac signs reflect our psychological tendencies. Today, fortune readings serve as tools for self-reflection rather than literal prediction. With AI, personalized daily readings are now available to millions worldwide.',
          items: [
            { title: 'Why people love fortune telling', desc: 'An instinctive human desire to find direction amid uncertainty—and a tool for self-understanding.' },
            { title: 'The Barnum effect', desc: 'People tend to accept vague statements that seem personally relevant. This cognitive bias explains much of horoscope appeal.' },
          ],
        },
      ],
    },
    ja: {
      title: '占星術と運勢の歴史',
      subtitle: '数千年間人類と共にあった星座と運勢。古代バビロンから現代AI占いまでの長い旅。',
      cta: '今日の運勢を見る',
      sections: [
        {
          h2: '起源：古代バビロン',
          body: '占星術の歴史は約4,000年前の古代メソポタミア（現在のイラク）に遡ります。バビロンの祭司たちは星と惑星の動きを観察し、農業・戦争・王国の運命を予測しました。紀元前7世紀頃には黄道12宮が確立され、現在の星座体系の原型となりました。',
          items: [
            { title: '紀元前2000年頃', desc: 'バビロンで天体観測記録が始まる。星から王の運命を読む。' },
            { title: '紀元前7世紀', desc: '黄道12宮が確立され、古代ギリシャへ伝播。' },
            { title: '紀元前4〜2世紀', desc: 'ギリシャ時代に個人ホロスコープの概念が発展。哲学と融合。' },
          ],
        },
        {
          h2: '東洋の運勢：四柱推命と五行',
          body: '東アジアでは中国を中心に独自の運勢体系が発展しました。四柱推命は生まれた年・月・日・時の八文字で運命を分析します。木・火・土・金・水の五行は自然の5つのエネルギーで世界を解釈する枠組みです。',
          items: [
            { title: '12支の誕生', desc: 'ねずみ・うし・とら…12種の動物で年を表す体系。東アジア全域で使用。' },
            { title: '四柱推命の確立', desc: '唐〜宋の時代に体系化された運命分析法。現在も韓国・中国・日本で活用。' },
            { title: 'タロットカードの登場', desc: '15世紀ヨーロッパで遊び用カードとして始まり、18世紀から占いの道具として発展。' },
          ],
        },
        {
          h2: '現代の運勢：心理学とAIの融合',
          body: '20世紀にカール・ユングは占星術を心理学的に再解釈しました。現代の運勢は科学的予測ツールではなく、自己理解と内省のツールとして活用されています。AI技術の進歩により、パーソナライズされたAI占いが毎日数百万人に提供されています。',
          items: [
            { title: '運勢が愛される理由', desc: '不確実な未来に方向性を求める人間の本能的欲求。自己理解を助けるツールとしての価値。' },
            { title: 'バーナム効果', desc: '自分に当てはまると思う内容に注目する認知バイアス。星占いの普遍的な魅力を説明します。' },
          ],
        },
      ],
    },
    zh: {
      title: '占星与运势的历史',
      subtitle: '数千年来伴随人类的星座与运势，从古代巴比伦到现代AI运势的漫长旅程。',
      cta: '查看今日运势',
      sections: [
        {
          h2: '起源：古代巴比伦',
          body: '占星术的历史可追溯到约4000年前的古代美索不达米亚（今伊拉克）。巴比伦祭司通过观察星星和行星的运动来预测农业、战争和王国的命运。公元前7世纪确立了黄道12宫，成为今天所用星座体系的原型。',
          items: [
            { title: '公元前2000年左右', desc: '巴比伦开始记录天象观测，从星星中读取国王的命运。' },
            { title: '公元前7世纪', desc: '黄道12宫确立并传播至古希腊。' },
            { title: '公元前4-2世纪', desc: '希腊时代个人星盘概念发展，占星与哲学相结合。' },
          ],
        },
        {
          h2: '东方传统：四柱八字与五行',
          body: '东亚以中国为中心发展了独特的运势体系。四柱八字通过出生年月日时的八个字分析命运。木、火、土、金、水五行是解读自然能量的框架，在韩国、中国、日本广泛流传。',
          items: [
            { title: '十二生肖的诞生', desc: '鼠牛虎兔...十二种动物以12年为周期循环，东亚各地通用。' },
            { title: '四柱八字的确立', desc: '唐宋时代系统化的命运分析法，至今仍在韩、中、日广泛使用。' },
            { title: '塔罗牌的出现', desc: '15世纪欧洲从扑克牌发展而来，18世纪开始演变为占卜工具。' },
          ],
        },
        {
          h2: '现代运势：心理学与AI的融合',
          body: '20世纪荣格从心理学角度重新诠释占星术。现代运势不再是科学预测工具，而是自我理解和反思的工具。AI技术的进步使个性化AI运势每天为数百万人提供服务。',
          items: [
            { title: '为什么运势受人喜爱', desc: '在不确定的未来中寻找方向的人类本能需求，以及作为自我理解工具的价值。' },
            { title: '巴纳姆效应', desc: '人们倾向于接受看似与自己相关的模糊描述，这种认知偏差解释了星座运势的广泛吸引力。' },
          ],
        },
      ],
    },
  },
  {
    slug: 'tarot-guide',
    icon: '🃏',
    ctaHref: '/card-draw',
    ko: {
      title: '타로 카드 완벽 가이드',
      subtitle: '신비로운 타로의 세계로. 78장 카드의 역사와 의미, 올바른 타로 해석법을 알아보세요.',
      cta: '타로 카드 뽑기',
      sections: [
        {
          h2: '타로 카드의 역사와 기원',
          body: '타로 카드는 15세기 중반 이탈리아 북부에서 트리온피(Trionfi)라는 카드 게임으로 시작되었습니다. 처음에는 귀족들의 오락용 놀이 카드였지만, 18세기 프랑스에서 신비주의자들이 점술 도구로 활용하기 시작했습니다. 이후 19~20세기에 황금여명단(Golden Dawn)과 같은 서양 신비주의 단체들이 타로에 카발라, 점성술, 수비학 등 다양한 신비주의 전통을 결합하여 현대적인 타로 체계가 완성되었습니다.',
          items: [],
        },
        {
          h2: '타로의 구성: 메이저와 마이너 아르카나',
          body: '타로 덱은 78장으로 구성됩니다. 메이저 아르카나 22장은 삶의 큰 주제와 영적 여정을 나타내며, 마이너 아르카나 56장은 일상의 세부적인 상황을 묘사합니다.',
          items: [
            { title: '메이저 아르카나 주요 카드', desc: '바보(0): 새로운 시작, 모험 / 마법사(I): 의지와 창조력 / 여황제(III): 풍요와 창의 / 전차(VII): 승리와 의지 / 운명의 바퀴(X): 변화와 순환 / 태양(XIX): 성공과 기쁨' },
            { title: '마이너 아르카나 4수트', desc: '완드(불·열정·창의) / 컵(물·감정·관계) / 소드(공기·지성·갈등) / 펜타클(땅·물질·현실)' },
            { title: '역방향 카드의 의미', desc: '카드를 거꾸로 뽑으면 역방향으로 해석합니다. 정방향 의미가 내면으로 향하거나, 차단되거나, 지연됨을 나타냅니다.' },
          ],
        },
        {
          h2: '올바른 타로 활용법',
          body: '타로는 미래를 고정적으로 예언하는 도구가 아닙니다. 현재 상황을 다양한 관점에서 바라보고, 내면의 지혜를 꺼내오는 성찰 도구입니다. 타로 리딩에서 가장 중요한 것은 카드의 이미지와 자신의 직관을 연결하는 것입니다.',
          items: [
            { title: '원 카드 리딩', desc: '하루의 에너지나 간단한 질문에 카드 한 장. 가장 기초적인 스프레드로 초보자에게 추천.' },
            { title: '과거-현재-미래 스프레드', desc: '세 장의 카드로 시간의 흐름과 상황 전개를 파악합니다. 문제 해결에 유용.' },
            { title: '켈틱 크로스 스프레드', desc: '10장의 카드로 상황을 종합적으로 분석하는 고급 스프레드. 심층적인 리딩에 활용.' },
          ],
        },
      ],
    },
    en: {
      title: 'Complete Tarot Guide',
      subtitle: 'Enter the mystical world of tarot. Discover the history, meaning, and proper interpretation of all 78 cards.',
      cta: 'Draw a Tarot Card',
      sections: [
        {
          h2: 'History & Origins of Tarot',
          body: 'Tarot began in mid-15th century northern Italy as a card game called Trionfi, enjoyed by nobility. By the 18th century, French mystics had adopted it as a divination tool. In the 19th–20th centuries, Western esoteric societies like the Golden Dawn wove Kabbalah, astrology, and numerology into tarot, creating the modern system we know today.',
          items: [],
        },
        {
          h2: 'The 78-Card Structure',
          body: 'A tarot deck contains 78 cards: 22 Major Arcana representing life\'s grand themes and spiritual journey, and 56 Minor Arcana depicting day-to-day situations.',
          items: [
            { title: 'Key Major Arcana', desc: 'The Fool (0): New beginnings / The Magician (I): Will & creation / The Wheel of Fortune (X): Change & cycles / The Sun (XIX): Success & joy' },
            { title: 'Four Minor Arcana Suits', desc: 'Wands (fire · passion · creativity) / Cups (water · emotion · relationships) / Swords (air · intellect · conflict) / Pentacles (earth · matter · reality)' },
            { title: 'Reversed cards', desc: 'Cards drawn upside down suggest the energy is blocked, internalized, or delayed.' },
          ],
        },
        {
          h2: 'How to Use Tarot Wisely',
          body: 'Tarot doesn\'t predict a fixed future. It\'s a reflection tool that invites you to view your situation from new angles and tap into your own inner wisdom. The most important skill is connecting card imagery to your own intuition.',
          items: [
            { title: 'One-Card Reading', desc: 'Draw one card for daily energy or a simple question. Perfect for beginners.' },
            { title: 'Past-Present-Future Spread', desc: 'Three cards reveal the flow of time and situation development. Great for problem-solving.' },
            { title: 'Celtic Cross Spread', desc: 'Ten cards for comprehensive analysis. An advanced spread for deep, nuanced readings.' },
          ],
        },
      ],
    },
    ja: {
      title: 'タロットカード完全ガイド',
      subtitle: '神秘的なタロットの世界へ。78枚のカードの歴史・意味・正しい解釈法を学びましょう。',
      cta: 'タロットカードを引く',
      sections: [
        {
          h2: 'タロットの歴史と起源',
          body: 'タロットカードは15世紀半ばのイタリア北部で「トリオンフィ」というカードゲームとして始まりました。最初は貴族の娯楽でしたが、18世紀のフランスで神秘主義者が占いツールとして使い始め、19〜20世紀に黄金の夜明け団などが現代のタロット体系を完成させました。',
          items: [],
        },
        {
          h2: '78枚の構成：メジャーとマイナー・アルカナ',
          body: 'タロットは78枚で構成されます。メジャー・アルカナ22枚は人生の大きなテーマを、マイナー・アルカナ56枚は日常の細かな状況を描きます。',
          items: [
            { title: '主要なメジャー・アルカナ', desc: '愚者(0): 新しい始まり / 魔術師(I): 意志と創造 / 運命の輪(X): 変化と循環 / 太陽(XIX): 成功と喜び' },
            { title: '4つのスート', desc: 'ワンド(火・情熱) / カップ(水・感情) / ソード(風・知性) / ペンタクル(地・現実)' },
            { title: '逆位置のカード', desc: '逆さまに引いたカードはエネルギーが内向き、ブロック、または遅延を示します。' },
          ],
        },
        {
          h2: 'タロットの正しい活用法',
          body: 'タロットは固定した未来を予言するツールではなく、現在の状況を多角的に見て内なる知恵を引き出す内省ツールです。カードのイメージと直感を結びつけることが最も重要です。',
          items: [
            { title: 'ワンカード・リーディング', desc: '一日のエネルギーや簡単な質問に1枚。初心者に最適。' },
            { title: '過去-現在-未来スプレッド', desc: '3枚のカードで時の流れと状況展開を把握。問題解決に有効。' },
            { title: 'ケルティック・クロス', desc: '10枚のカードで総合的に分析する上級スプレッド。' },
          ],
        },
      ],
    },
    zh: {
      title: '塔罗牌完全指南',
      subtitle: '进入神秘的塔罗世界。了解78张牌的历史、含义和正确解读方法。',
      cta: '抽一张塔罗牌',
      sections: [
        {
          h2: '塔罗牌的历史与起源',
          body: '塔罗牌起源于15世纪中期意大利北部，最初是贵族娱乐用的"凯旋牌"游戏。18世纪法国神秘主义者将其用于占卜。19-20世纪黄金黎明协会等将卡巴拉、占星术、数字命理学融入塔罗，形成现代塔罗体系。',
          items: [],
        },
        {
          h2: '78张牌的结构：大阿卡纳与小阿卡纳',
          body: '塔罗牌共78张：大阿卡纳22张代表人生重大主题，小阿卡纳56张描述日常具体情境。',
          items: [
            { title: '主要大阿卡纳牌', desc: '愚者(0): 新开始 / 魔术师(I): 意志与创造 / 命运之轮(X): 变化与循环 / 太阳(XIX): 成功与喜悦' },
            { title: '四个小阿卡纳花色', desc: '权杖(火·热情) / 圣杯(水·情感) / 宝剑(风·智识) / 星币(土·现实)' },
            { title: '逆位牌', desc: '倒置抽到的牌意味着能量被阻塞、内化或延迟。' },
          ],
        },
        {
          h2: '如何正确使用塔罗',
          body: '塔罗不是预测固定未来的工具，而是从多角度审视现状、引出内在智慧的反思工具。将牌面图像与自身直觉相连接是最重要的技能。',
          items: [
            { title: '单牌阅读', desc: '一张牌了解当日能量或简单问题，适合初学者。' },
            { title: '过去-现在-未来牌阵', desc: '三张牌了解时间流向和情况发展，适合解决问题。' },
            { title: '凯尔特十字牌阵', desc: '十张牌全面分析，适合深度阅读的高级牌阵。' },
          ],
        },
      ],
    },
  },
  {
    slug: 'numerology',
    icon: '🔢',
    ctaHref: '/number-game',
    ko: {
      title: '수비학: 숫자의 신비',
      subtitle: '당신의 이름과 생년월일 속에 숨겨진 수비학의 비밀. 생명수부터 운명수까지 완벽 해설.',
      cta: '숫자 게임 해보기',
      sections: [
        {
          h2: '수비학이란?',
          body: '수비학(Numerology)은 숫자에 신비로운 의미와 에너지가 있다는 믿음에 기반한 점술 체계입니다. 고대 그리스 철학자 피타고라스는 "만물은 수(數)"라고 말하며 숫자와 우주의 관계를 탐구했습니다. 히브리 신비주의 카발라의 게마트리아(Gematria)는 문자와 숫자를 연결하는 시스템으로 수비학과 깊은 관련이 있습니다. 오늘날 수비학은 이름, 생년월일로 개인의 성격, 운명, 잠재력을 분석하는 도구로 사용됩니다.',
          items: [],
        },
        {
          h2: '생명수(Life Path Number) 계산법',
          body: '가장 중요한 수비학 숫자인 생명수는 생년월일의 모든 숫자를 합산하여 한 자리가 될 때까지 더하는 방식으로 계산합니다. (예: 1990년 3월 25일 → 1+9+9+0+0+3+2+5 = 29 → 2+9 = 11 → 1+1 = 2 → 생명수 2) 단, 11, 22, 33은 "마스터 넘버"로 더 이상 더하지 않습니다.',
          items: [
            { title: '생명수 1 — 리더', desc: '독립적이고 야망이 넘치는 선구자. 강한 의지와 창조적 에너지의 소유자.' },
            { title: '생명수 2 — 협력자', desc: '조화와 균형을 추구하는 평화주의자. 뛰어난 감수성과 외교적 능력.' },
            { title: '생명수 3 — 창조자', desc: '표현력과 창의성이 풍부한 예술가적 기질. 사람들에게 기쁨을 주는 존재.' },
            { title: '생명수 4 — 건축가', desc: '성실하고 체계적인 현실주의자. 안정적인 기반을 만드는 데 탁월한 능력.' },
            { title: '생명수 5 — 모험가', desc: '자유롭고 변화를 즐기는 탐험가. 다양한 경험을 통해 성장합니다.' },
            { title: '생명수 6 — 양육자', desc: '책임감과 사랑으로 주변을 돌보는 존재. 가족과 커뮤니티의 중심.' },
            { title: '생명수 7 — 탐구자', desc: '깊은 사색과 영적 탐구를 즐기는 철학자. 진실을 찾는 분석가.' },
            { title: '생명수 8 — 성취자', desc: '물질적 성공과 권력을 추구하는 야심가. 뛰어난 비즈니스 감각.' },
            { title: '생명수 9 — 인도주의자', desc: '넓은 포용력으로 인류를 사랑하는 존재. 봉사와 나눔이 삶의 핵심.' },
            { title: '마스터 넘버 11', desc: '직관과 영감이 강력한 영적 메신저. 높은 이상과 예민한 감수성.' },
          ],
        },
        {
          h2: '반복적으로 보이는 숫자(엔젤 넘버)의 의미',
          body: '같은 숫자가 반복적으로 나타날 때 이를 "엔젤 넘버"라고 합니다. 시계에서 11:11을 자주 보거나, 차 번호판에 특정 숫자가 반복된다면 우주로부터의 메시지라고 해석합니다.',
          items: [
            { title: '111 — 새로운 시작', desc: '생각이 현실로 이어질 때. 긍정적인 생각을 유지하세요.' },
            { title: '222 — 균형과 협력', desc: '인내심을 갖고 현재 과정을 신뢰하라는 신호.' },
            { title: '333 — 창의와 성장', desc: '당신의 재능을 세상과 나눌 때가 되었습니다.' },
            { title: '444 — 보호와 안정', desc: '당신은 지금 옳은 길 위에 있습니다. 계속 나아가세요.' },
          ],
        },
      ],
    },
    en: {
      title: 'Numerology: The Mystery of Numbers',
      subtitle: 'Hidden secrets in your name and birthday. From Life Path numbers to Destiny numbers—fully explained.',
      cta: 'Play the Number Game',
      sections: [
        {
          h2: 'What Is Numerology?',
          body: 'Numerology is a belief system that assigns mystical meaning and energy to numbers. Pythagoras declared "all things are numbers," exploring the relationship between mathematics and the cosmos. The Hebrew Kabbalistic system of Gematria links letters to numbers, deeply connected to numerology. Today it\'s used to analyze personality, fate, and potential through names and birth dates.',
          items: [],
        },
        {
          h2: 'Calculating Your Life Path Number',
          body: 'Your Life Path Number—the most important numerology number—is found by adding all digits in your birth date until you reach a single digit. Example: March 25, 1990 → 3+2+5+1+9+9+0 = 29 → 2+9 = 11 → 1+1 = 2 → Life Path 2. Note: 11, 22, and 33 are "Master Numbers" and are not reduced further.',
          items: [
            { title: 'Life Path 1 — The Leader', desc: 'Independent, ambitious pioneer with strong will and creative energy.' },
            { title: 'Life Path 2 — The Collaborator', desc: 'A peacemaker seeking harmony. Exceptional sensitivity and diplomacy.' },
            { title: 'Life Path 3 — The Creator', desc: 'Expressive and creative. Brings joy and inspiration to others.' },
            { title: 'Life Path 4 — The Builder', desc: 'Diligent and systematic. Excellent at creating stable foundations.' },
            { title: 'Life Path 5 — The Adventurer', desc: 'Freedom-loving and change-seeking. Grows through diverse experiences.' },
            { title: 'Life Path 6 — The Nurturer', desc: 'Caring and responsible. The heart of family and community.' },
            { title: 'Life Path 7 — The Seeker', desc: 'Deep thinker and spiritual explorer. A truth-seeking analyst.' },
            { title: 'Life Path 8 — The Achiever', desc: 'Ambitious and business-minded. Pursues material success and authority.' },
            { title: 'Life Path 9 — The Humanitarian', desc: 'Inclusive and compassionate. Service and sharing are central to life.' },
            { title: 'Master Number 11', desc: 'Spiritually gifted messenger with powerful intuition and high ideals.' },
          ],
        },
        {
          h2: 'Angel Numbers: Repeating Sequences',
          body: 'When the same numbers appear repeatedly—on clocks, license plates, receipts—they\'re called "Angel Numbers," interpreted as messages from the universe.',
          items: [
            { title: '111 — New beginnings', desc: 'Your thoughts are manifesting into reality. Stay positive.' },
            { title: '222 — Balance & trust', desc: 'Be patient and trust the current process.' },
            { title: '333 — Creativity & growth', desc: 'Time to share your talents with the world.' },
            { title: '444 — Protection & stability', desc: 'You are on the right path. Keep moving forward.' },
          ],
        },
      ],
    },
    ja: {
      title: '数秘術：数字の神秘',
      subtitle: '名前と生年月日に隠された数秘術の秘密。ライフパスナンバーから運命数まで完全解説。',
      cta: '数字ゲームをやってみる',
      sections: [
        {
          h2: '数秘術とは？',
          body: '数秘術（ニューメロロジー）は数字に神秘的な意味とエネルギーがあるという信仰体系です。古代ギリシャの哲学者ピタゴラスは「万物は数である」と述べ、数と宇宙の関係を探求しました。今日では名前や生年月日から性格、運命、潜在能力を分析するツールとして使われています。',
          items: [],
        },
        {
          h2: 'ライフパスナンバーの計算法',
          body: '最も重要な数秘術の数字であるライフパスナンバーは、生年月日のすべての数字を一桁になるまで足し合わせて計算します。例：1990年3月25日→3+2+5+1+9+9+0=29→2+9=11→1+1=2→ライフパス2。なお11、22、33は「マスターナンバー」としてそれ以上減らしません。',
          items: [
            { title: 'ライフパス1 — リーダー', desc: '独立心旺盛で野心的な先駆者。強い意志と創造的エネルギー。' },
            { title: 'ライフパス2 — 協力者', desc: '調和と均衡を求める平和主義者。優れた感受性と外交的能力。' },
            { title: 'ライフパス3 — 創造者', desc: '表現力と創造性に富む芸術家気質。人々に喜びをもたらす存在。' },
            { title: 'ライフパス5 — 冒険者', desc: '自由を愛し変化を楽しむ探検家。多様な経験を通じて成長。' },
            { title: 'ライフパス7 — 探究者', desc: '深い思索と精神的探求を楽しむ哲学者。真実を求める分析家。' },
            { title: 'マスターナンバー11', desc: '強力な直感と霊的なメッセンジャー。高い理想と鋭い感受性。' },
          ],
        },
        {
          h2: 'エンジェルナンバー：繰り返し見る数字',
          body: '時計や車のナンバープレートで同じ数字が繰り返し現れるとき、これを「エンジェルナンバー」と呼び、宇宙からのメッセージと解釈します。',
          items: [
            { title: '111 — 新しい始まり', desc: '思考が現実につながるとき。ポジティブな思考を維持して。' },
            { title: '222 — バランスと信頼', desc: '忍耐を持ち、現在のプロセスを信頼するサイン。' },
            { title: '333 — 創造と成長', desc: 'あなたの才能を世界と分かち合う時が来ました。' },
            { title: '444 — 保護と安定', desc: 'あなたは今、正しい道の上にいます。進み続けましょう。' },
          ],
        },
      ],
    },
    zh: {
      title: '数字命理学：数字的神秘',
      subtitle: '隐藏在你的姓名和生日中的数字命理学秘密。从生命数字到命运数字的完整解说。',
      cta: '玩数字游戏',
      sections: [
        {
          h2: '什么是数字命理学？',
          body: '数字命理学（Numerology）是一种认为数字具有神秘意义和能量的信仰体系。古希腊哲学家毕达哥拉斯说"万物皆数"，探索数学与宇宙的关系。今天，它被用来通过姓名和生日分析个人性格、命运和潜力。',
          items: [],
        },
        {
          h2: '生命数字计算方法',
          body: '最重要的数字命理学数字——生命数字——通过将生日的所有数字相加直到得到个位数来计算。例：1990年3月25日→3+2+5+1+9+9+0=29→2+9=11→1+1=2→生命数字2。注意：11、22、33为"主数字"不再继续相加。',
          items: [
            { title: '生命数字1 — 领袖', desc: '独立有抱负的先驱者，拥有强大的意志力和创造能量。' },
            { title: '生命数字2 — 合作者', desc: '追求和谐与平衡的和平主义者，拥有出色的感受力和外交能力。' },
            { title: '生命数字3 — 创造者', desc: '表达力和创造力丰富的艺术家气质，给人带来喜悦和灵感。' },
            { title: '生命数字5 — 冒险者', desc: '热爱自由、享受变化的探索者，通过多样经历成长。' },
            { title: '生命数字7 — 探索者', desc: '享受深度思考和精神探索的哲学家，寻求真理的分析家。' },
            { title: '主数字11', desc: '具有强大直觉的精神信使，有崇高的理想和敏锐的感受力。' },
          ],
        },
        {
          h2: '天使数字：反复出现的数字序列',
          body: '当相同的数字在时钟、车牌等地方反复出现时，称之为"天使数字"，被解读为来自宇宙的信息。',
          items: [
            { title: '111 — 新的开始', desc: '你的想法正在成为现实，保持积极思考。' },
            { title: '222 — 平衡与信任', desc: '要有耐心，信任当前的过程。' },
            { title: '333 — 创意与成长', desc: '是时候与世界分享你的才能了。' },
            { title: '444 — 保护与稳定', desc: '你现在走在正确的道路上，继续前行。' },
          ],
        },
      ],
    },
  },
  {
    slug: 'past-life-culture',
    icon: '🌀',
    ctaHref: '/past-life',
    ko: {
      title: '전생과 윤회: 동서양의 관점',
      subtitle: '인류는 왜 전생을 믿는가? 불교·힌두교·심리학으로 살펴보는 윤회론의 세계.',
      cta: '나의 전생 알아보기',
      sections: [
        {
          h2: '윤회론이란?',
          body: '윤회(輪廻, Reincarnation)는 사람이 죽은 후 영혼이 다른 몸으로 다시 태어난다는 믿음입니다. 전 세계 종교와 문화권에서 독자적으로 발전한 개념으로, 특히 동양 종교들과 고대 그리스 철학에서 중요하게 다뤄집니다. 세계 인구의 약 51%가 어떤 형태의 윤회를 믿는다는 연구도 있습니다.',
          items: [],
        },
        {
          h2: '종교별 전생관',
          body: '다양한 종교와 문화권은 저마다의 방식으로 전생과 윤회를 해석합니다.',
          items: [
            { title: '불교의 윤회', desc: '불교에서 윤회는 고통의 순환(삼사라)입니다. 업(카르마)에 따라 다음 생이 결정되며, 깨달음(열반)을 통해 이 순환에서 벗어날 수 있습니다.' },
            { title: '힌두교의 아트만', desc: '힌두교에서는 불멸의 영혼(아트만)이 여러 생을 거치며 성장합니다. 궁극적 목표는 브라흐만(우주적 의식)과의 합일입니다.' },
            { title: '고대 그리스 철학', desc: '플라톤은 영혼 불멸론을 주장했습니다. 영혼은 죽음 후 레테(망각)의 강을 건너 새로운 몸을 선택한다고 믿었습니다.' },
            { title: '유대교 카발라', desc: '길굴(Gilgul)이라는 영혼 윤회 개념이 있으며, 영혼이 완성되지 않은 사명을 마치기 위해 다시 태어난다고 봅니다.' },
          ],
        },
        {
          h2: '심리학으로 보는 전생 경험',
          body: '심리학자들은 전생 기억을 문자 그대로 받아들이지 않지만, 사람들이 전생을 경험하는 현상 자체에는 주목합니다. 버지니아 대학의 이안 스티븐슨 박사는 40년간 3,000건 이상의 전생 기억 사례를 수집했습니다. 이 중 일부는 당시 어린 아이들이 실제로 존재했던 과거의 인물과 장소를 정확히 묘사한 사례들이었습니다.',
          items: [
            { title: '전생 회귀 요법(PLR)', desc: '최면 상태에서 전생 기억을 탐색하는 심리 치료법. 현재의 공포증, 트라우마, 관계 패턴을 이해하는 데 도움을 줄 수 있습니다.' },
            { title: '집단 무의식', desc: '칼 융은 인류 공통의 무의식인 집단 무의식을 제안했습니다. 전생 기억으로 경험되는 것 중 일부는 이 집단 무의식의 원형적 이미지일 수 있습니다.' },
          ],
        },
      ],
    },
    en: {
      title: 'Past Lives & Reincarnation',
      subtitle: 'Why do humans believe in past lives? Exploring reincarnation through Buddhism, Hinduism, and psychology.',
      cta: 'Discover My Past Life',
      sections: [
        {
          h2: 'What Is Reincarnation?',
          body: 'Reincarnation is the belief that after death, the soul is reborn into a new body. The concept emerged independently across world religions and cultures—especially in Eastern traditions and ancient Greek philosophy. Studies suggest that roughly 51% of the world\'s population holds some form of belief in reincarnation.',
          items: [],
        },
        {
          h2: 'Views Across Religions & Cultures',
          body: 'Different traditions interpret past lives and rebirth in their own ways.',
          items: [
            { title: 'Buddhism: The Cycle of Samsara', desc: 'Rebirth is a cycle of suffering. Karma determines the next life; enlightenment (Nirvana) offers liberation from the cycle.' },
            { title: 'Hinduism: Atman', desc: 'The eternal soul (Atman) evolves across many lives. The ultimate goal is union with Brahman, universal consciousness.' },
            { title: 'Ancient Greek Philosophy', desc: 'Plato argued for the immortality of the soul, which crosses the River Lethe (forgetting) and chooses a new body.' },
            { title: 'Kabbalistic Judaism', desc: 'The concept of Gilgul describes souls returning to complete unfinished spiritual missions.' },
          ],
        },
        {
          h2: 'Psychology and Past Life Experiences',
          body: 'Psychologists don\'t take past-life memories at face value, but they study the phenomenon seriously. Dr. Ian Stevenson at the University of Virginia spent 40 years collecting over 3,000 past-life memory cases, some involving young children who accurately described real historical people and places.',
          items: [
            { title: 'Past Life Regression (PLR)', desc: 'A hypnotherapy technique exploring past-life memories. May help understand current phobias, traumas, and relationship patterns.' },
            { title: 'The Collective Unconscious', desc: 'Jung proposed a shared unconscious containing universal archetypes. Some past-life experiences may reflect these archetypal images.' },
          ],
        },
      ],
    },
    ja: {
      title: '前世と輪廻：東西の視点',
      subtitle: '人類はなぜ前世を信じるのか。仏教・ヒンドゥー教・心理学で探る輪廻の世界。',
      cta: '私の前世を調べる',
      sections: [
        {
          h2: '輪廻とは？',
          body: '輪廻（りんね、Reincarnation）とは、人が死んだ後、魂が別の体に生まれ変わるという信仰です。世界中の宗教と文化圏で独自に発展した概念で、特に東洋の宗教と古代ギリシャ哲学で重要視されています。',
          items: [],
        },
        {
          h2: '宗教別の前世観',
          body: '様々な宗教や文化圏がそれぞれの方法で前世と輪廻を解釈しています。',
          items: [
            { title: '仏教の輪廻', desc: '輪廻は苦しみの循環（サンサーラ）です。業（カルマ）によって次の生が決まり、悟り（涅槃）を通じてこの循環から抜け出せます。' },
            { title: 'ヒンドゥー教のアートマン', desc: '不滅の魂（アートマン）が多くの生を経て成長します。究極の目標はブラフマン（宇宙的意識）との合一です。' },
            { title: '古代ギリシャ哲学', desc: 'プラトンは魂の不滅を主張。魂は死後レテ（忘却）の川を渡り、新しい体を選ぶと考えました。' },
            { title: 'カバラのギルグル', desc: '魂が完成されていない使命を果たすために生まれ変わるという概念。' },
          ],
        },
        {
          h2: '心理学から見た前世体験',
          body: 'バージニア大学のイアン・スティーブンソン博士は40年間に3,000件以上の前世記憶事例を収集しました。一部では幼い子供が実際に存在した過去の人物や場所を正確に描写した事例もありました。',
          items: [
            { title: '前世退行療法（PLR）', desc: '催眠状態で前世の記憶を探る心理療法。現在の恐怖症やトラウマ、関係パターンを理解するのに役立ちます。' },
            { title: '集合的無意識', desc: 'ユングは人類共通の集合的無意識を提唱。前世記憶として体験されるものの一部はこの原型的イメージかもしれません。' },
          ],
        },
      ],
    },
    zh: {
      title: '前世与轮回：东西方的视角',
      subtitle: '人类为何相信前世？从佛教、印度教和心理学角度探索轮回的世界。',
      cta: '探索我的前世',
      sections: [
        {
          h2: '什么是轮回？',
          body: '轮回（Reincarnation）是指人死后灵魂转世投胎到新躯体的信仰。这个概念在世界各地宗教和文化中独立发展，尤其在东方宗教和古希腊哲学中占有重要地位。研究显示全球约51%的人持有某种形式的轮回信仰。',
          items: [],
        },
        {
          h2: '各宗教的前世观',
          body: '不同宗教和文化以各自的方式解释前世与轮回。',
          items: [
            { title: '佛教的轮回', desc: '轮回是苦难的循环（轮回界）。业力决定来世，通过开悟（涅槃）可以从这个循环中解脱。' },
            { title: '印度教的阿特曼', desc: '不朽的灵魂（阿特曼）经历多次转世而成长，最终目标是与梵（宇宙意识）合一。' },
            { title: '古希腊哲学', desc: '柏拉图主张灵魂不灭，灵魂死后渡过遗忘之河，选择新的躯体。' },
            { title: '卡巴拉的吉尔古尔', desc: '灵魂为完成未完成的使命而再次转世的概念。' },
          ],
        },
        {
          h2: '心理学视角下的前世体验',
          body: '弗吉尼亚大学的伊恩·史蒂文森博士用40年收集了3000多个前世记忆案例，其中一些案例中的幼童准确描述了真实存在过的历史人物和地点。',
          items: [
            { title: '前世回归疗法（PLR）', desc: '在催眠状态下探索前世记忆的心理治疗法，有助于理解现在的恐惧症、创伤和关系模式。' },
            { title: '集体无意识', desc: '荣格提出人类共有的集体无意识，某些前世记忆体验可能反映了这种原型性意象。' },
          ],
        },
      ],
    },
  },
  {
    slug: 'fortune-tips',
    icon: '✨',
    ctaHref: '/',
    ko: {
      title: '운세 더 잘 활용하는 방법',
      subtitle: '운세를 통해 자기 자신을 더 깊이 이해하고, 매일을 더 의미 있게 만드는 실용적인 가이드.',
      cta: '오늘의 운세 보기',
      sections: [
        {
          h2: '운세를 대하는 올바른 마음가짐',
          body: '운세는 미래를 100% 예측하는 도구가 아닙니다. 오히려 오늘 어떤 에너지에 집중하면 좋을지, 어떤 부분에 주의를 기울일지를 알려주는 나침반에 가깝습니다. 매일 운세를 보는 것이 하루를 더 의식적으로 살아가는 데 도움을 줄 수 있습니다. 단, 운세에 지나치게 의존하거나 부정적인 예언에 집착하는 것은 피하는 게 좋습니다.',
          items: [
            { title: '운세는 가이드라인이다', desc: '좋은 운세가 나왔다고 노력을 멈추거나, 나쁜 운세가 나왔다고 포기할 필요는 없습니다. 운세는 성향과 경향을 보여줄 뿐입니다.' },
            { title: '매일 아침 활용하기', desc: '하루를 시작하기 전 오늘의 운세를 체크하고, 그날의 핵심 키워드를 마음에 새겨두세요.' },
            { title: '부정적 운세 대처법', desc: '나쁜 운세가 나왔을 때는 "오늘은 특히 주의하면 되는 날"로 해석하세요. 적극적 예방이 나쁜 운을 바꿀 수 있습니다.' },
          ],
        },
        {
          h2: '별자리별 강점을 일상에 활용하기',
          body: '각 별자리는 고유한 강점을 가지고 있습니다. 이를 의식적으로 일상에 활용하면 더 충실한 하루를 만들 수 있습니다.',
          items: [
            { title: '불 별자리 (양자리·사자자리·사수자리)', desc: '열정과 행동력이 강점. 새로운 프로젝트를 시작하거나 리더십을 발휘해야 할 때 특히 강함.' },
            { title: '땅 별자리 (황소자리·처녀자리·염소자리)', desc: '꼼꼼함과 지속력이 강점. 장기 계획, 재정 관리, 세부적인 작업에서 탁월한 능력을 발휘.' },
            { title: '공기 별자리 (쌍둥이자리·천칭자리·물병자리)', desc: '소통과 아이디어가 강점. 협상, 팀 작업, 창의적 브레인스토밍 상황에서 빛을 발함.' },
            { title: '물 별자리 (게자리·전갈자리·물고기자리)', desc: '공감과 직관이 강점. 대인 관계, 상담, 예술적 표현에서 독보적인 능력을 발휘.' },
          ],
        },
        {
          h2: '운세와 자기계발: 의미 있게 연결하기',
          body: '운세를 단순한 재미를 넘어 자기계발 도구로 활용하는 방법들입니다. 운세의 메시지를 저널링(일기 쓰기)에 연결하거나, 한 달의 목표 설정에 활용하면 더 깊은 자기 이해로 이어집니다.',
          items: [
            { title: '운세 저널링', desc: '오늘의 운세를 읽고, 그 키워드가 내 삶의 어떤 부분과 연결되는지 짧게 적어보세요. 시간이 지나면 패턴이 보입니다.' },
            { title: '월별 운세 활용', desc: '월간 운세를 월초에 확인하고, 그 달의 강점과 주의할 점을 계획에 반영해보세요.' },
            { title: '궁합 활용하기', desc: '가까운 사람들의 별자리와 궁합을 이해하면 서로의 차이를 더 잘 수용하고 관계를 개선하는 데 도움이 됩니다.' },
          ],
        },
      ],
    },
    en: {
      title: 'How to Use Fortune Readings Wisely',
      subtitle: 'A practical guide to understanding yourself more deeply through fortune readings and making each day more meaningful.',
      cta: 'Check Today\'s Fortune',
      sections: [
        {
          h2: 'The Right Mindset for Fortune Reading',
          body: 'Fortune readings don\'t predict the future with 100% accuracy. Think of them more as a compass—pointing to what energy to focus on today and what to watch out for. Checking your fortune daily can help you live more consciously. That said, avoid over-relying on readings or obsessing over negative predictions.',
          items: [
            { title: 'Treat it as a guideline', desc: 'A good reading doesn\'t mean you can stop trying; a bad one doesn\'t mean you should give up. Fortune shows tendencies, not fixed fates.' },
            { title: 'Use it every morning', desc: 'Before starting your day, check today\'s fortune and keep its key theme in mind as you go.' },
            { title: 'How to handle negative readings', desc: 'Read a challenging fortune as "a day to be extra mindful." Proactive care can shift unfavorable energy.' },
          ],
        },
        {
          h2: 'Applying Your Sign\'s Strengths Daily',
          body: 'Each zodiac sign has unique strengths. Using them consciously in daily life can make each day more fulfilling.',
          items: [
            { title: 'Fire Signs (Aries · Leo · Sagittarius)', desc: 'Your superpower: passion and action. Shine when launching projects or stepping into leadership.' },
            { title: 'Earth Signs (Taurus · Virgo · Capricorn)', desc: 'Your superpower: detail and persistence. Excel at long-term planning, finance, and meticulous tasks.' },
            { title: 'Air Signs (Gemini · Libra · Aquarius)', desc: 'Your superpower: communication and ideas. Light up in negotiations, teamwork, and brainstorming.' },
            { title: 'Water Signs (Cancer · Scorpio · Pisces)', desc: 'Your superpower: empathy and intuition. Unmatched in relationships, counseling, and artistic expression.' },
          ],
        },
        {
          h2: 'Fortune & Self-Development: Making It Meaningful',
          body: 'Ways to use fortune readings beyond entertainment—as a genuine self-development tool. Connecting fortune messages to journaling or monthly goal-setting leads to deeper self-understanding.',
          items: [
            { title: 'Fortune journaling', desc: 'After reading today\'s fortune, jot down how its keywords connect to your life. Patterns emerge over time.' },
            { title: 'Monthly fortune planning', desc: 'Check your monthly fortune at the start of each month and reflect its strengths and cautions in your plans.' },
            { title: 'Using compatibility insights', desc: 'Understanding the signs of people close to you helps you accept differences and improve relationships.' },
          ],
        },
      ],
    },
    ja: {
      title: '運勢をより上手に活用する方法',
      subtitle: '運勢を通じて自分自身をより深く理解し、毎日をより意味のあるものにする実践的なガイド。',
      cta: '今日の運勢を見る',
      sections: [
        {
          h2: '運勢に向き合う正しい心構え',
          body: '運勢は未来を100%予測するツールではありません。むしろ、今日どんなエネルギーに集中すると良いか、どんな点に注意すべきかを教えてくれるコンパスに近いです。毎日運勢を確認することが、より意識的な生き方をする助けになります。',
          items: [
            { title: '運勢はガイドラインです', desc: '良い運勢が出ても努力を止める必要はなく、悪い運勢が出ても諦める必要はありません。' },
            { title: '毎朝の習慣にする', desc: '一日を始める前に今日の運勢を確認し、その日の核心キーワードを心に留めておきましょう。' },
            { title: 'ネガティブな運勢への対処', desc: '悪い運勢が出たときは「今日は特に注意する日」と解釈しましょう。積極的な予防が悪い運を変えられます。' },
          ],
        },
        {
          h2: '星座別の強みを日常に活かす',
          body: '各星座は固有の強みを持っています。これを意識的に日常に活かすことで、より充実した一日を送ることができます。',
          items: [
            { title: '火のサイン（牡羊座・獅子座・射手座）', desc: '情熱と行動力が強み。新しいプロジェクトを始めたりリーダーシップを発揮する場面で特に強い。' },
            { title: '地のサイン（牡牛座・乙女座・山羊座）', desc: '几帳面さと持続力が強み。長期計画、財務管理、細部にわたる作業で卓越した能力を発揮。' },
            { title: '風のサイン（双子座・天秤座・水瓶座）', desc: 'コミュニケーションとアイデアが強み。交渉、チームワーク、創造的なブレインストーミングで輝く。' },
            { title: '水のサイン（蟹座・蠍座・魚座）', desc: '共感と直感が強み。対人関係、カウンセリング、芸術的表現で独自の能力を発揮。' },
          ],
        },
        {
          h2: '運勢と自己啓発：意味のあるつながりを',
          body: '運勢を単なる娯楽を超えた自己啓発ツールとして活用する方法です。運勢のメッセージをジャーナリングに結びつけたり、月の目標設定に活用すると、より深い自己理解につながります。',
          items: [
            { title: '運勢ジャーナリング', desc: '今日の運勢を読んで、そのキーワードが自分の生活のどの部分と結びつくか短く書いてみましょう。' },
            { title: '月別運勢の活用', desc: '月初めに月間運勢を確認し、その月の強みと注意点を計画に反映させましょう。' },
            { title: '相性を活かす', desc: '身近な人の星座と相性を理解することで、違いをより受け入れ関係を改善するのに役立ちます。' },
          ],
        },
      ],
    },
    zh: {
      title: '如何更好地利用运势',
      subtitle: '通过运势更深入地了解自己，让每一天更有意义的实用指南。',
      cta: '查看今日运势',
      sections: [
        {
          h2: '正确对待运势的心态',
          body: '运势不是100%预测未来的工具，更像是指南针——指引你今天应该专注哪种能量、需要注意哪些方面。每天查看运势有助于更有意识地生活。但要避免过度依赖或执着于负面预言。',
          items: [
            { title: '运势只是指南', desc: '好运势不意味着可以停止努力，坏运势也不意味着要放弃。运势显示倾向，而非固定命运。' },
            { title: '每天早晨使用', desc: '每天开始前查看运势，将当天的关键词铭记于心。' },
            { title: '面对负面运势', desc: '运势不好时，把它解读为"今天特别需要注意的日子"。积极预防可以改变不好的运气。' },
          ],
        },
        {
          h2: '将星座优势运用到日常生活',
          body: '每个星座都有独特的优势，有意识地在日常生活中运用这些优势可以让每天更充实。',
          items: [
            { title: '火象星座（白羊·狮子·射手）', desc: '热情和行动力是你的强项，在启动新项目或发挥领导力时尤为出色。' },
            { title: '土象星座（金牛·处女·摩羯）', desc: '细心和持久力是你的强项，在长期规划、财务管理和细致工作中大放异彩。' },
            { title: '风象星座（双子·天秤·水瓶）', desc: '沟通和创意是你的强项，在谈判、团队合作和创意头脑风暴中熠熠生辉。' },
            { title: '水象星座（巨蟹·天蝎·双鱼）', desc: '共情和直觉是你的强项，在人际关系、咨询和艺术表达中独树一帜。' },
          ],
        },
        {
          h2: '运势与自我提升：有意义地连接',
          body: '将运势超越娱乐作为自我提升工具使用的方法。将运势信息与日记写作结合，或用于月度目标设定，可以带来更深的自我理解。',
          items: [
            { title: '运势日记', desc: '阅读今日运势后，简短记录其关键词与你生活哪些方面相关联，时间久了会看出规律。' },
            { title: '月度运势应用', desc: '月初查看月度运势，将当月优势和注意事项反映到计划中。' },
            { title: '利用配对洞察', desc: '了解亲近之人的星座和配对关系，有助于更好地接受差异、改善关系。' },
          ],
        },
      ],
    },
  },
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}
