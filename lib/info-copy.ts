import type { Lang } from './i18n';

// Copy for the educational sections under the tool pages (tarot, past life,
// number game, idol test). These sat in Korean inside server components, so the
// language switch left them untouched.

export interface InfoCopy {
  common: { ctaNote: string; ctaButton: string };
  tarot: {
    title: string;
    paragraphs: string[];
    cardsTitle: string;
    tipsTitle: string;
    tips: { title: string; desc: string }[];
  };
  pastLife: {
    whatTitle: string;
    whatParagraphs: string[];
    linkTitle: string;
    linkParagraphs: string[];
    typesTitle: string;
    types: { emoji: string; title: string; desc: string }[];
  };
  numerology: {
    title: string;
    paragraphs: string[];
    numbersTitle: string;
    numbers: { n: number; meaning: string; color: string }[];
  };
  idol: {
    title: string;
    paragraphs: string[];
    foundedLabel: string;
    artistsLabel: string;
    agencies: { emoji: string; name: string; founded: string; style: string; color: string; desc: string; artists: string }[];
  };
}

const NUMBERS = [
  { n: 1, color: '#dc2626' },
  { n: 2, color: '#1d4ed8' },
  { n: 3, color: '#b45309' },
  { n: 4, color: '#0f766e' },
  { n: 5, color: '#be185d' },
  { n: 6, color: '#6d28d9' },
  { n: 7, color: '#0369a1' },
  { n: 8, color: '#c2410c' },
  { n: 9, color: '#7e3aa0' },
];

function numbers(meanings: string[]) {
  return NUMBERS.map((entry, index) => ({ ...entry, meaning: meanings[index] }));
}

const AGENCY_COLORS = ['#1d4ed8', '#0f766e', '#f0c9c9', '#6d28d9'];
const AGENCY_EMOJI = ['💎', '🌟', '🔥', '✨'];

export const INFO_COPY: Record<Lang, InfoCopy> = {
  ko: {
    common: { ctaNote: '생년월일로 나의 행운의 숫자 확인하기', ctaButton: '🔮 오늘의 운세 무료로 보기' },
    tarot: {
      title: '🃏 타로 카드란?',
      paragraphs: [
        '타로(Tarot)는 78장의 카드로 이루어진 상징 체계로, 14~15세기 유럽에서 카드 게임용으로 시작되어 18세기 이후 점술과 자기 성찰의 도구로 발전했습니다. 현재 가장 널리 사용되는 라이더-웨이트 타로(Rider-Waite Tarot, 1909)는 아서 에드워드 웨이트와 파멜라 콜먼 스미스가 제작한 것으로, 상징적 이미지로 가득한 삽화가 특징입니다.',
        '타로 78장은 크게 두 부분으로 나뉩니다. 메이저 아르카나(Major Arcana) 22장은 “큰 비밀”을 의미하며 인생의 중요한 전환점과 보편적 원형을 상징합니다. 마이너 아르카나(Minor Arcana) 56장은 일상적인 사건과 감정을 나타냅니다.',
        '심리학자 카를 융(Carl Jung)은 타로의 상징이 인간의 집단 무의식에 존재하는 원형(Archetype)을 반영한다고 보았습니다. 현대에는 미래 예언보다 자기 이해와 내면 탐색의 도구로 활용되는 경향이 강합니다. StarFate의 카드 뽑기는 오락 목적으로 제공되며, 카드의 메시지를 하루의 의도를 설정하는 계기로 활용해보세요.',
      ],
      cardsTitle: '✨ 메이저 아르카나 22장 완전 가이드',
      tipsTitle: '💡 타로 카드 활용 팁',
      tips: [
        { title: '마음을 비우고 뽑기', desc: '카드를 선택하기 전 잠시 눈을 감고 오늘 가장 신경 쓰이는 것이나 질문을 떠올리세요. 무의식이 끌리는 카드를 선택합니다.' },
        { title: '메시지를 일상에 적용하기', desc: '카드의 메시지를 문자 그대로 해석하기보다, 오늘 하루 자신의 상황에 빗대어 어떤 의미인지 생각해보세요.' },
        { title: '일기처럼 기록하기', desc: '오늘 뽑은 카드와 그 날 있었던 일을 짧게 기록해두면, 시간이 지나 패턴을 발견하는 흥미로운 경험이 됩니다.' },
        { title: '정방향·역방향의 의미', desc: '전통 타로에서 카드가 뒤집혀 나오면(역방향) 해당 에너지가 막혀 있거나 내면을 향한다는 뜻입니다. StarFate는 정방향 기준으로 제공합니다.' },
      ],
    },
    pastLife: {
      whatTitle: '🌀 전생이란 무엇인가?',
      whatParagraphs: [
        '전생(前生, Past Life)은 현재 삶 이전에 다른 형태로 존재했던 생을 의미합니다. 윤회(輪廻, Reincarnation) 개념은 수천 년의 역사를 가지며, 힌두교·불교·자이나교 등 동양 종교는 물론 고대 그리스 철학과 켈트 문화에도 깊이 뿌리내리고 있습니다.',
        '불교에서는 삶과 죽음이 반복되는 윤회의 수레바퀴를 ‘삼사라(Samsara)’라고 부르며, 업(業, Karma)에 따라 다음 생의 형태가 결정된다고 봅니다. 힌두교에서는 불멸의 영혼 ‘아트만(Atman)’이 육체를 옮겨 다닌다고 설명합니다.',
        '서양에서는 고대 그리스 철학자 피타고라스와 플라톤이 영혼의 윤회를 언급했습니다. 현대 심리학에서도 최면 치료를 통한 전생 퇴행(Past Life Regression) 연구가 이루어지고 있으며, 일부 심리치료사들은 이를 트라우마 치유의 도구로 활용하기도 합니다.',
      ],
      linkTitle: '⭐ 전생과 별자리의 연결',
      linkParagraphs: [
        '점성술에서 출생 차트(Birth Chart)는 현생뿐 아니라 전생의 카르마를 반영한다고 해석하기도 합니다. 특히 남쪽 노드(South Node)는 전생에서 이어온 패턴과 재능을, 북쪽 노드(North Node)는 이번 생에서 발전시켜야 할 방향을 나타낸다고 봅니다.',
        '생년월일과 이름에 담긴 수비학적 에너지 역시 전생의 흔적을 담고 있다는 관점이 있습니다. 본 테스트는 이러한 점성술·수비학·동서양 신화의 상징을 결합하여 흥미로운 전생 이야기를 들려드립니다. 오락 목적의 콘텐츠로, 진지하게 받아들이기보다 자기 이해의 계기로 즐겨주세요.',
      ],
      typesTitle: '📚 전생 테스트 결과 유형 안내',
      types: [
        { emoji: '🎨', title: '예술가 계열', desc: '화원, 음유시인, 조각가 등 감수성과 창의력이 뛰어났던 전생' },
        { emoji: '🏛️', title: '성직자·학자 계열', desc: '신관, 철학자, 점성가 등 지식과 영성을 추구했던 전생' },
        { emoji: '⚔️', title: '전사·영웅 계열', desc: '기사, 장군, 닌자 등 용기와 결단력으로 살았던 전생' },
        { emoji: '🌿', title: '치유자·현자 계열', desc: '무당, 약초사, 명상가 등 치유와 지혜를 나눴던 전생' },
      ],
    },
    numerology: {
      title: '🔢 수비학(Numerology)이란?',
      paragraphs: [
        '수비학(數秘學, Numerology)은 숫자와 인간의 삶, 성격, 운명 사이의 신비로운 관계를 탐구하는 고대 학문입니다. 고대 그리스의 수학자 피타고라스(Pythagoras)가 체계화한 것으로 알려져 있으며, 고대 이집트·바빌로니아·히브리 카발라 전통에도 깊이 뿌리내리고 있습니다.',
        '수비학에서 1부터 9까지의 숫자는 각각 고유한 에너지와 의미를 가집니다. 1은 새로운 시작과 리더십, 2는 균형과 협력, 3은 창의성과 표현, 4는 안정과 질서, 5는 자유와 변화, 6은 사랑과 책임, 7은 영성과 지혜, 8은 물질적 성공, 9는 완성과 인도주의를 상징합니다.',
        '생년월일의 모든 숫자를 더해 한 자리로 줄인 “인생 수(Life Path Number)”는 당신의 삶의 방향과 핵심 성격을 나타낸다고 합니다. StarFate의 운세 결과에 포함된 행운의 숫자도 이러한 수비학적 원리를 바탕으로 합니다.',
      ],
      numbersTitle: '⭐ 1~9 행운의 숫자 의미',
      numbers: numbers(['리더십·시작', '균형·협력', '창의성·표현', '안정·질서', '자유·변화', '사랑·책임', '영성·지혜', '성공·풍요', '완성·봉사']),
    },
    idol: {
      title: '🎤 K-Pop 4대 소속사란?',
      paragraphs: [
        'K-Pop(Korean Pop)은 대한민국에서 시작된 음악 장르이자 문화 현상으로, 1990년대 H.O.T.·S.E.S. 등 1세대 아이돌 그룹의 등장과 함께 체계적인 아이돌 시스템이 형성되었습니다. 연습생 제도, 퍼포먼스 중심의 음악, 세계관 기반 스토리텔링을 특징으로 하며 2010년대 이후 BTS·BLACKPINK 등을 통해 글로벌 문화로 자리 잡았습니다.',
        'SM·JYP·YG·HYBE는 각자 독특한 색깔과 육성 방식을 가지고 있으며, 소속 아이돌의 외모 스타일·음악성·무대 에너지도 각 소속사의 철학을 반영합니다. 본 테스트는 각 소속사 아이돌의 공통적인 비주얼 특성을 AI가 분석하여 재미로 매칭하는 오락 서비스입니다.',
      ],
      foundedLabel: '설립',
      artistsLabel: '대표 아티스트:',
      agencies: [
        {
          emoji: AGENCY_EMOJI[0], name: 'SM엔터테인먼트', founded: '1995', color: AGENCY_COLORS[0],
          style: '도시적·클래식 미인형',
          desc: 'H.O.T.로 K-pop 1세대를 열었으며, 보아·동방신기·소녀시대·EXO·NCT·aespa 등 수많은 글로벌 스타를 배출했습니다. SM의 아이돌은 완벽한 비율과 도시적 세련미를 특징으로 하며, 독자적인 세계관(Universe)을 활용한 스토리텔링으로 팬덤을 형성합니다.',
          artists: 'H.O.T., 보아, 동방신기, 소녀시대, 샤이니, EXO, Red Velvet, NCT, aespa',
        },
        {
          emoji: AGENCY_EMOJI[1], name: 'JYP엔터테인먼트', founded: '1997', color: AGENCY_COLORS[1],
          style: '건강하고 발랄한 청춘 스타일',
          desc: '박진영이 설립한 JYP는 원더걸스·미스에이·2PM부터 TWICE·ITZY·Stray Kids·NMIXX까지 활발한 퍼포먼스와 밝은 에너지가 특징입니다. 건강하고 자연스러운 외모, 탄탄한 보컬과 댄스 실력을 고루 갖춘 아이돌을 지향합니다.',
          artists: '원더걸스, 2PM, 미스에이, GOT7, TWICE, Stray Kids, ITZY, NMIXX',
        },
        {
          emoji: AGENCY_EMOJI[2], name: 'YG엔터테인먼트', founded: '1996', color: AGENCY_COLORS[2],
          style: '강렬하고 개성있는 카리스마',
          desc: '힙합과 R&B 기반의 음악성으로 독보적인 위치를 가진 YG는 BIGBANG·2NE1·BLACKPINK·WINNER·iKON 등을 통해 “YG 스웩”이라는 독특한 브랜드 이미지를 만들었습니다. 무대 위의 폭발적인 카리스마와 개성 강한 스타일이 트레이드마크입니다.',
          artists: 'BIGBANG, 2NE1, WINNER, iKON, BLACKPINK, TREASURE, BABYMONSTER',
        },
        {
          emoji: AGENCY_EMOJI[3], name: 'HYBE (구 빅히트)', founded: '2005', color: AGENCY_COLORS[3],
          style: '세련되고 글로벌한 청량함',
          desc: 'BTS의 글로벌 성공을 기반으로 성장한 HYBE는 빅히트·쏘스뮤직·플레디스·KOZ·어도어 등 다양한 레이블을 보유합니다. BTS·TXT·세븐틴·뉴진스·르세라핌을 통해 K-pop의 세계적 위상을 높였으며, 음악·예술·세계관이 결합된 콘텐츠 전략을 구사합니다.',
          artists: 'BTS, TXT, 세븐틴, 뉴진스, LE SSERAFIM, &TEAM, ILLIT',
        },
      ],
    },
  },

  en: {
    common: { ctaNote: 'Find your lucky number from your birth date', ctaButton: "🔮 See today's fortune free" },
    tarot: {
      title: '🃏 What is tarot?',
      paragraphs: [
        'Tarot is a symbolic system of 78 cards. It began as a card game in Europe in the 14th and 15th centuries and developed into a tool for divination and self-reflection after the 18th century. The most widely used deck today, the Rider-Waite Tarot (1909), was made by Arthur Edward Waite and Pamela Colman Smith, and is known for illustrations full of symbolic imagery.',
        'The 78 cards fall into two parts. The 22 cards of the Major Arcana mean the "great secrets" and symbolize life\'s turning points and universal archetypes. The 56 cards of the Minor Arcana represent everyday events and feelings.',
        'The psychologist Carl Jung saw tarot symbols as reflecting the archetypes of the human collective unconscious. Today the cards are used more for self-understanding and inner exploration than for predicting the future. StarFate offers card draws for entertainment; use the card\'s message as a prompt for setting the intention of your day.',
      ],
      cardsTitle: '✨ A complete guide to the 22 Major Arcana',
      tipsTitle: '💡 Tips for using a tarot card',
      tips: [
        { title: 'Empty your mind first', desc: 'Before choosing, close your eyes for a moment and bring up what weighs on you today. You pick the card your unconscious is drawn to.' },
        { title: 'Apply the message to your day', desc: 'Rather than reading the message literally, think about what it means for your own situation today.' },
        { title: 'Keep it like a journal', desc: 'Jotting down the card you drew and what happened that day becomes an interesting record of patterns over time.' },
        { title: 'Upright and reversed', desc: 'In traditional tarot, a card that comes out upside down (reversed) means its energy is blocked or turned inward. StarFate reads cards upright.' },
      ],
    },
    pastLife: {
      whatTitle: '🌀 What is a past life?',
      whatParagraphs: [
        'A past life is a life believed to have existed in another form before this one. The idea of reincarnation is thousands of years old and is rooted not only in Eastern religions such as Hinduism, Buddhism and Jainism but also in ancient Greek philosophy and Celtic culture.',
        'Buddhism calls the repeating wheel of life and death "samsara" and holds that karma determines the form of the next life. Hinduism describes an immortal soul, the atman, moving from body to body.',
        'In the West, the Greek philosophers Pythagoras and Plato wrote about the transmigration of souls. Modern psychology has studied past-life regression under hypnosis, and some therapists use it as a tool for healing trauma.',
      ],
      linkTitle: '⭐ Past lives and the zodiac',
      linkParagraphs: [
        'In astrology, a birth chart is sometimes read as reflecting not only this life but karma carried from past ones. The South Node is said to show patterns and talents carried over, while the North Node points to the direction to develop in this life.',
        'Numerological energy in a birth date and name is also said to hold traces of a past life. This test combines astrology, numerology and East-West myth to tell an entertaining past-life story. It is entertainment — enjoy it as a prompt for self-understanding rather than as fact.',
      ],
      typesTitle: '📚 Types of past-life results',
      types: [
        { emoji: '🎨', title: 'The artist', desc: 'A court painter, bard or sculptor — a past life rich in sensitivity and creativity' },
        { emoji: '🏛️', title: 'The priest or scholar', desc: 'A temple priest, philosopher or astrologer — a past life seeking knowledge and spirit' },
        { emoji: '⚔️', title: 'The warrior or hero', desc: 'A knight, general or ninja — a past life lived with courage and resolve' },
        { emoji: '🌿', title: 'The healer or sage', desc: 'A shaman, herbalist or meditator — a past life sharing healing and wisdom' },
      ],
    },
    numerology: {
      title: '🔢 What is numerology?',
      paragraphs: [
        'Numerology is an ancient study of the mysterious relationship between numbers and human life, character and fate. It is commonly credited to the Greek mathematician Pythagoras and is also rooted in ancient Egyptian, Babylonian and Hebrew Kabbalistic traditions.',
        'In numerology each number from 1 to 9 carries its own energy: 1 is new beginnings and leadership, 2 balance and cooperation, 3 creativity and expression, 4 stability and order, 5 freedom and change, 6 love and responsibility, 7 spirituality and wisdom, 8 material success, and 9 completion and humanitarianism.',
        'Adding every digit of your birth date down to a single number gives your Life Path Number, said to show the direction of your life and core character. The lucky number in a StarFate reading is based on the same numerological idea.',
      ],
      numbersTitle: '⭐ The lucky numbers 1 to 9',
      numbers: numbers(['Leadership · Beginnings', 'Balance · Cooperation', 'Creativity · Expression', 'Stability · Order', 'Freedom · Change', 'Love · Responsibility', 'Spirituality · Wisdom', 'Success · Abundance', 'Completion · Service']),
    },
    idol: {
      title: '🎤 What are the big four K-pop agencies?',
      paragraphs: [
        'K-pop is a music genre and cultural phenomenon that began in Korea, where a systematic idol system took shape with the first-generation groups such as H.O.T. and S.E.S. in the 1990s. It is known for trainee systems, performance-driven music and universe-based storytelling, and since the 2010s it has become a global culture through BTS, BLACKPINK and others.',
        'SM, JYP, YG and HYBE each have their own colour and training style, and the looks, music and stage energy of their idols reflect that philosophy. This test uses AI to compare your face with the visual traits common to each agency\'s idols — an entertainment service.',
      ],
      foundedLabel: 'Founded',
      artistsLabel: 'Key artists:',
      agencies: [
        {
          emoji: AGENCY_EMOJI[0], name: 'SM Entertainment', founded: '1995', color: AGENCY_COLORS[0],
          style: 'Urban, classic beauty',
          desc: 'SM opened the first generation of K-pop with H.O.T. and has produced global stars from BoA and TVXQ to Girls\' Generation, EXO, NCT and aespa. Its idols are known for ideal proportions and urban polish, and the agency builds fandoms through storytelling around its own universe.',
          artists: 'H.O.T., BoA, TVXQ, Girls\' Generation, SHINee, EXO, Red Velvet, NCT, aespa',
        },
        {
          emoji: AGENCY_EMOJI[1], name: 'JYP Entertainment', founded: '1997', color: AGENCY_COLORS[1],
          style: 'Healthy, bright youth',
          desc: 'Founded by Park Jin-young, JYP is known for lively performance and bright energy, from Wonder Girls, miss A and 2PM to TWICE, ITZY, Stray Kids and NMIXX. It aims for idols with healthy, natural looks and solid vocals and dance.',
          artists: 'Wonder Girls, 2PM, miss A, GOT7, TWICE, Stray Kids, ITZY, NMIXX',
        },
        {
          emoji: AGENCY_EMOJI[2], name: 'YG Entertainment', founded: '1996', color: AGENCY_COLORS[2],
          style: 'Intense, individual charisma',
          desc: 'With hip-hop and R&B-based music, YG holds a distinctive position and built the "YG swag" brand through BIGBANG, 2NE1, BLACKPINK, WINNER and iKON. Explosive stage charisma and strongly individual style are its trademark.',
          artists: 'BIGBANG, 2NE1, WINNER, iKON, BLACKPINK, TREASURE, BABYMONSTER',
        },
        {
          emoji: AGENCY_EMOJI[3], name: 'HYBE (formerly Big Hit)', founded: '2005', color: AGENCY_COLORS[3],
          style: 'Refined, global freshness',
          desc: 'Growing from BTS\'s global success, HYBE holds labels including Big Hit, Source Music, Pledis, KOZ and ADOR. Through BTS, TXT, SEVENTEEN, NewJeans and LE SSERAFIM it raised K-pop\'s global standing, with a content strategy that joins music, art and world-building.',
          artists: 'BTS, TXT, SEVENTEEN, NewJeans, LE SSERAFIM, &TEAM, ILLIT',
        },
      ],
    },
  },

  zh: {
    common: { ctaNote: '用生日查看我的幸运数字', ctaButton: '🔮 免费查看今日运势' },
    tarot: {
      title: '🃏 什么是塔罗牌？',
      paragraphs: [
        '塔罗是由78张牌构成的象征体系，14至15世纪在欧洲作为纸牌游戏出现，18世纪以后发展为占卜与自省的工具。目前最广泛使用的莱德-韦特塔罗（Rider-Waite Tarot，1909）由亚瑟·爱德华·韦特与帕梅拉·科尔曼·史密斯制作，以充满象征意象的插图著称。',
        '78张牌大致分为两部分。大阿尔卡那22张代表“大秘密”，象征人生的重要转折与普遍原型；小阿尔卡那56张表现日常的事件与情感。',
        '心理学家卡尔·荣格认为塔罗的象征反映了人类集体无意识中的原型。如今它更多被用作自我理解与内心探索的工具，而非预测未来。StarFate 的抽牌仅供娱乐，请把牌面的讯息当作设定一天意图的契机。',
      ],
      cardsTitle: '✨ 大阿尔卡那22张完全指南',
      tipsTitle: '💡 塔罗牌使用小贴士',
      tips: [
        { title: '先让心静下来', desc: '选牌前闭上眼睛片刻，想想今天最在意的事或你的问题。你会选中潜意识所吸引的那张牌。' },
        { title: '把讯息用在今天', desc: '不要照字面解读牌面讯息，而是想想它对今天的自己意味着什么。' },
        { title: '像日记一样记录', desc: '把今天抽到的牌和当天发生的事简短记下，时间久了会发现有趣的规律。' },
        { title: '正位与逆位', desc: '传统塔罗中，倒着出现的牌（逆位）表示该能量受阻或转向内在。StarFate 以正位解读。' },
      ],
    },
    pastLife: {
      whatTitle: '🌀 什么是前世？',
      whatParagraphs: [
        '前世指在此生之前以另一种形态存在的生命。轮回的观念有数千年历史，不仅深植于印度教、佛教、耆那教等东方宗教，也见于古希腊哲学与凯尔特文化。',
        '佛教把生死反复的轮回之轮称为“娑婆世界（Samsara）”，认为业力决定下一生的形态。印度教则说不灭的灵魂“阿特曼（Atman）”在不同肉身之间迁移。',
        '在西方，古希腊哲学家毕达哥拉斯与柏拉图都提到灵魂的轮回。现代心理学也研究通过催眠进行的前世回溯，一些心理治疗师将其用于创伤疗愈。',
      ],
      linkTitle: '⭐ 前世与星座的联系',
      linkParagraphs: [
        '在占星中，出生图有时被解读为不仅反映此生，也反映前世带来的业力。南交点被认为显示前世延续下来的模式与才能，北交点则指向此生应当发展的方向。',
        '也有观点认为生日与姓名中的数字命理能量承载着前世的痕迹。本测试结合占星、数字命理与东西方神话的象征，讲述有趣的前世故事。内容仅供娱乐，请当作理解自己的契机。',
      ],
      typesTitle: '📚 前世测试结果类型说明',
      types: [
        { emoji: '🎨', title: '艺术家型', desc: '画师、吟游诗人、雕塑家等感受力与创造力出众的前世' },
        { emoji: '🏛️', title: '神职·学者型', desc: '祭司、哲学家、占星师等追求知识与灵性的前世' },
        { emoji: '⚔️', title: '战士·英雄型', desc: '骑士、将军、忍者等以勇气与决断生活的前世' },
        { emoji: '🌿', title: '治疗者·智者型', desc: '巫者、草药师、冥想者等分享疗愈与智慧的前世' },
      ],
    },
    numerology: {
      title: '🔢 什么是数字命理？',
      paragraphs: [
        '数字命理是探讨数字与人的生命、性格、命运之间神秘关系的古老学问，一般认为是古希腊数学家毕达哥拉斯将其系统化，也深植于古埃及、巴比伦与希伯来卡巴拉传统。',
        '在数字命理中，1到9各有独特的能量：1是新的开始与领导力，2是平衡与合作，3是创造与表达，4是稳定与秩序，5是自由与变化，6是爱与责任，7是灵性与智慧，8是物质成功，9是完成与人道。',
        '把生日中的每个数字相加并化简为一位数，得到“生命灵数”，据说能显示你人生的方向与核心性格。StarFate 运势结果中的幸运数字也基于这一数字命理原理。',
      ],
      numbersTitle: '⭐ 1~9 幸运数字的含义',
      numbers: numbers(['领导力·开始', '平衡·合作', '创造·表达', '稳定·秩序', '自由·变化', '爱·责任', '灵性·智慧', '成功·丰盛', '完成·服务']),
    },
    idol: {
      title: '🎤 什么是K-Pop四大经纪公司？',
      paragraphs: [
        'K-Pop 是始于韩国的音乐类型与文化现象。1990年代 H.O.T.、S.E.S. 等第一代偶像团体出现后，形成了体系化的偶像产业，以练习生制度、以表演为中心的音乐与世界观叙事为特征，2010年代以后通过 BTS、BLACKPINK 等成为全球文化。',
        'SM、JYP、YG、HYBE 各有独特的风格与培养方式，旗下偶像的外貌风格、音乐性与舞台能量也反映各自理念。本测试用 AI 分析各公司偶像的共同视觉特征，为你做趣味匹配，属于娱乐服务。',
      ],
      foundedLabel: '成立',
      artistsLabel: '代表艺人：',
      agencies: [
        {
          emoji: AGENCY_EMOJI[0], name: 'SM娱乐', founded: '1995', color: AGENCY_COLORS[0],
          style: '都市·经典美人型',
          desc: 'SM 以 H.O.T. 开启 K-pop 第一代，培养了 BoA、东方神起、少女时代、EXO、NCT、aespa 等众多全球明星。其偶像以完美的比例与都市感著称，并通过自有世界观叙事构建粉丝群体。',
          artists: 'H.O.T.、BoA、东方神起、少女时代、SHINee、EXO、Red Velvet、NCT、aespa',
        },
        {
          emoji: AGENCY_EMOJI[1], name: 'JYP娱乐', founded: '1997', color: AGENCY_COLORS[1],
          style: '健康活泼的青春风',
          desc: '由朴振英创立的 JYP 以活跃的表演与明朗能量著称，从 Wonder Girls、miss A、2PM 到 TWICE、ITZY、Stray Kids、NMIXX。追求健康自然的外貌与扎实的歌唱、舞蹈实力。',
          artists: 'Wonder Girls、2PM、miss A、GOT7、TWICE、Stray Kids、ITZY、NMIXX',
        },
        {
          emoji: AGENCY_EMOJI[2], name: 'YG娱乐', founded: '1996', color: AGENCY_COLORS[2],
          style: '强烈而独特的魅力',
          desc: '以嘻哈与R&B音乐性占据独特位置的 YG，通过 BIGBANG、2NE1、BLACKPINK、WINNER、iKON 打造了“YG swag”的品牌形象。舞台上的爆发力与强烈个性是其标志。',
          artists: 'BIGBANG、2NE1、WINNER、iKON、BLACKPINK、TREASURE、BABYMONSTER',
        },
        {
          emoji: AGENCY_EMOJI[3], name: 'HYBE（原Big Hit）', founded: '2005', color: AGENCY_COLORS[3],
          style: '精致而全球化的清爽感',
          desc: '借助 BTS 的全球成功成长的 HYBE 拥有 Big Hit、Source Music、Pledis、KOZ、ADOR 等多个厂牌。通过 BTS、TXT、SEVENTEEN、NewJeans、LE SSERAFIM 提升 K-pop 的世界地位，并采用音乐、艺术与世界观结合的内容战略。',
          artists: 'BTS、TXT、SEVENTEEN、NewJeans、LE SSERAFIM、&TEAM、ILLIT',
        },
      ],
    },
  },

  ja: {
    common: { ctaNote: '生年月日から自分のラッキーナンバーを確認', ctaButton: '🔮 今日の運勢を無料で見る' },
    tarot: {
      title: '🃏 タロットカードとは？',
      paragraphs: [
        'タロットは78枚のカードからなる象徴体系です。14〜15世紀のヨーロッパでカードゲームとして始まり、18世紀以降に占いと自己省察の道具へと発展しました。現在もっとも広く使われるライダー・ウェイト版タロット（1909年）はアーサー・エドワード・ウェイトとパメラ・コールマン・スミスが制作したもので、象徴的な図像に満ちた挿絵が特徴です。',
        '78枚は大きく二つに分かれます。大アルカナ22枚は「大きな秘密」を意味し、人生の重要な転機と普遍的な元型を象徴します。小アルカナ56枚は日常の出来事や感情を表します。',
        '心理学者カール・ユングは、タロットの象徴が人間の集合的無意識にある元型を映すと考えました。現代では未来を予言するよりも、自己理解や内面の探索の道具として使われる傾向が強くなっています。StarFateのカード引きは娯楽として提供しており、カードのメッセージを一日の意図を定めるきっかけにしてみてください。',
      ],
      cardsTitle: '✨ 大アルカナ22枚の完全ガイド',
      tipsTitle: '💡 タロットカードの使い方のヒント',
      tips: [
        { title: '心を空にして引く', desc: 'カードを選ぶ前に少し目を閉じ、今日いちばん気になっていることや問いを思い浮かべてください。無意識が惹かれるカードを選びます。' },
        { title: 'メッセージを日常に当てはめる', desc: 'カードのメッセージを文字どおりに読むのではなく、今日の自分の状況に置き換えて意味を考えてみましょう。' },
        { title: '日記のように残す', desc: '今日引いたカードとその日にあったことを短く記録すると、時間が経ってパターンに気づく面白い体験になります。' },
        { title: '正位置と逆位置', desc: '伝統的なタロットでは、カードが逆さまに出ると（逆位置）そのエネルギーが滞っている、または内側に向いているとされます。StarFateは正位置で読みます。' },
      ],
    },
    pastLife: {
      whatTitle: '🌀 前世とは何か',
      whatParagraphs: [
        '前世とは、今の人生の前に別の形で存在したとされる生のことです。輪廻の考え方は数千年の歴史を持ち、ヒンドゥー教・仏教・ジャイナ教などの東洋の宗教だけでなく、古代ギリシャ哲学やケルト文化にも深く根ざしています。',
        '仏教では生と死が繰り返す輪廻の車輪を「サンサーラ（Samsara）」と呼び、業（カルマ）によって次の生の形が決まると考えます。ヒンドゥー教では不滅の魂「アートマン」が肉体を移ると説明します。',
        '西洋では古代ギリシャの哲学者ピタゴラスとプラトンが魂の輪廻に触れました。現代の心理学でも催眠による前世退行の研究が行われ、一部の心理療法士はトラウマの癒しの道具として用いています。',
      ],
      linkTitle: '⭐ 前世と星座のつながり',
      linkParagraphs: [
        '占星術では、出生図が今世だけでなく前世からのカルマを映すと解釈することがあります。サウスノードは前世から引き継いだパターンや才能を、ノースノードは今世で伸ばすべき方向を示すとされます。',
        '生年月日と名前に含まれる数秘術的なエネルギーにも前世の痕跡があるという見方があります。本テストはこうした占星術・数秘術・東西の神話の象徴を組み合わせて、楽しい前世の物語をお届けします。娯楽として、自分を知るきっかけにしてください。',
      ],
      typesTitle: '📚 前世テストの結果タイプ',
      types: [
        { emoji: '🎨', title: '芸術家タイプ', desc: '画員、吟遊詩人、彫刻家など感受性と創造力に恵まれた前世' },
        { emoji: '🏛️', title: '聖職者・学者タイプ', desc: '神官、哲学者、占星術師など知識と霊性を求めた前世' },
        { emoji: '⚔️', title: '戦士・英雄タイプ', desc: '騎士、将軍、忍者など勇気と決断で生きた前世' },
        { emoji: '🌿', title: '癒し手・賢者タイプ', desc: '巫女、薬草師、瞑想者など癒しと知恵を分かち合った前世' },
      ],
    },
    numerology: {
      title: '🔢 数秘術（Numerology）とは？',
      paragraphs: [
        '数秘術は、数字と人の人生・性格・運命の神秘的な関係を探る古代の学問です。古代ギリシャの数学者ピタゴラスが体系化したとされ、古代エジプト・バビロニア・ヘブライのカバラの伝統にも深く根ざしています。',
        '数秘術では1から9までの数字がそれぞれ固有のエネルギーを持ちます。1は新しい始まりとリーダーシップ、2は均衡と協力、3は創造性と表現、4は安定と秩序、5は自由と変化、6は愛と責任、7は霊性と知恵、8は物質的な成功、9は完成と人道主義を象徴します。',
        '生年月日の数字をすべて足して一桁にした「ライフパスナンバー」は、人生の方向と核となる性格を示すとされます。StarFateの運勢結果に含まれるラッキーナンバーも、この数秘術の考え方に基づいています。',
      ],
      numbersTitle: '⭐ 1〜9 ラッキーナンバーの意味',
      numbers: numbers(['リーダーシップ・始まり', '均衡・協力', '創造性・表現', '安定・秩序', '自由・変化', '愛・責任', '霊性・知恵', '成功・豊かさ', '完成・奉仕']),
    },
    idol: {
      title: '🎤 K-POP四大事務所とは？',
      paragraphs: [
        'K-POPは韓国で生まれた音楽ジャンルであり文化現象です。1990年代にH.O.T.やS.E.S.などの第1世代アイドルが登場して体系的なアイドルシステムが形づくられ、練習生制度、パフォーマンス中心の音楽、世界観に基づくストーリーテリングを特徴とし、2010年代以降はBTSやBLACKPINKなどを通じて世界的な文化になりました。',
        'SM・JYP・YG・HYBEはそれぞれ独自の色と育成方法を持ち、所属アイドルの外見・音楽性・ステージのエネルギーにも各社の哲学が表れます。本テストは各事務所のアイドルに共通するビジュアル特徴をAIが分析し、楽しみとしてマッチングする娯楽サービスです。',
      ],
      foundedLabel: '設立',
      artistsLabel: '代表アーティスト：',
      agencies: [
        {
          emoji: AGENCY_EMOJI[0], name: 'SMエンターテインメント', founded: '1995', color: AGENCY_COLORS[0],
          style: '都市的・クラシックな美人型',
          desc: 'H.O.T.でK-POP第1世代を切り開き、BoA、東方神起、少女時代、EXO、NCT、aespaなど多くのグローバルスターを輩出しました。完璧なプロポーションと都市的な洗練が特徴で、独自の世界観（Universe）を使ったストーリーテリングでファンダムを築いています。',
          artists: 'H.O.T.、BoA、東方神起、少女時代、SHINee、EXO、Red Velvet、NCT、aespa',
        },
        {
          emoji: AGENCY_EMOJI[1], name: 'JYPエンターテインメント', founded: '1997', color: AGENCY_COLORS[1],
          style: '健康で明るい青春スタイル',
          desc: 'パク・ジニョンが設立したJYPは、Wonder Girls、miss A、2PMからTWICE、ITZY、Stray Kids、NMIXXまで、活発なパフォーマンスと明るいエネルギーが特徴です。健康的で自然な外見と、確かな歌唱・ダンス力を備えたアイドルを目指しています。',
          artists: 'Wonder Girls、2PM、miss A、GOT7、TWICE、Stray Kids、ITZY、NMIXX',
        },
        {
          emoji: AGENCY_EMOJI[2], name: 'YGエンターテインメント', founded: '1996', color: AGENCY_COLORS[2],
          style: '強烈で個性的なカリスマ',
          desc: 'ヒップホップとR&Bを基盤とする音楽性で独自の位置を占めるYGは、BIGBANG、2NE1、BLACKPINK、WINNER、iKONなどを通じて「YGスウェッグ」というブランドイメージを作りました。ステージでの爆発的なカリスマと個性の強いスタイルがトレードマークです。',
          artists: 'BIGBANG、2NE1、WINNER、iKON、BLACKPINK、TREASURE、BABYMONSTER',
        },
        {
          emoji: AGENCY_EMOJI[3], name: 'HYBE（旧Big Hit）', founded: '2005', color: AGENCY_COLORS[3],
          style: '洗練されたグローバルな清涼感',
          desc: 'BTSの世界的成功を基に成長したHYBEは、Big Hit、Source Music、Pledis、KOZ、ADORなどのレーベルを持ちます。BTS、TXT、SEVENTEEN、NewJeans、LE SSERAFIMを通じてK-POPの世界的地位を高め、音楽・芸術・世界観を結びつけたコンテンツ戦略を展開しています。',
          artists: 'BTS、TXT、SEVENTEEN、NewJeans、LE SSERAFIM、&TEAM、ILLIT',
        },
      ],
    },
  },
};

export function infoCopy(lang: Lang): InfoCopy {
  return INFO_COPY[lang];
}
