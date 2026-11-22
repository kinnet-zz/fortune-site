import type { Lang } from './i18n';

// Editorial index used by /blog and the home "guide" cards. Titles and
// summaries are provided in all four languages so the language switch also
// applies to the article index (the article bodies themselves are Korean).

export interface BlogArticle {
  slug: string;
  date: string; // ISO date, formatted per language at render time
  minutes: number;
  emoji: string;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  category: Record<Lang, string>;
}

const CATEGORY = {
  basics: { ko: '점성술 기초', en: 'Astrology basics', zh: '占星基础', ja: '占星術の基礎' },
  chemistry: { ko: '별자리 궁합', en: 'Zodiac compatibility', zh: '星座配对', ja: '星座相性' },
  compare: { ko: '동서양 비교', en: 'East & West', zh: '东西方比较', ja: '東西比較' },
  use: { ko: '운세 활용', en: 'Using fortunes', zh: '运势活用', ja: '運勢の活かし方' },
  planets: { ko: '행성과 별자리', en: 'Planets & signs', zh: '行星与星座', ja: '惑星と星座' },
  career: { ko: '별자리 커리어', en: 'Zodiac careers', zh: '星座与职业', ja: '星座とキャリア' },
  moon: { ko: '달 별자리', en: 'Moon sign', zh: '月亮星座', ja: 'ムーンサイン' },
  rising: { ko: '상승 별자리', en: 'Rising sign', zh: '上升星座', ja: 'ライジングサイン' },
  chinese: { ko: '동양 궁합', en: 'Chinese compatibility', zh: '生肖配对', ja: '干支の相性' },
  numerology: { ko: '수비학', en: 'Numerology', zh: '数字命理', ja: '数秘術' },
  personality: { ko: '성격 분석', en: 'Personality', zh: '性格分析', ja: '性格分析' },
  culture: { ko: '별자리 문화', en: 'Zodiac culture', zh: '星座文化', ja: '星座文化' },
  yearly: { ko: '연간 운세', en: 'Yearly fortune', zh: '年度运势', ja: '年間運勢' },
  psychology: { ko: '심리 분석', en: 'Psychology', zh: '心理分析', ja: '心理分析' },
  ritual: { ko: '리추얼 라이프', en: 'Ritual life', zh: '仪式生活', ja: 'リチュアル' },
  astronomy: { ko: '천문학 팩트', en: 'Astronomy facts', zh: '天文事实', ja: '天文学の事実' },
  data: { ko: '데이터 분석', en: 'Data analysis', zh: '数据分析', ja: 'データ分析' },
  history: { ko: '별자리 역사', en: 'Zodiac history', zh: '星座历史', ja: '星座の歴史' },
  calendar: { ko: '달력과 시간', en: 'Calendars & time', zh: '历法与时间', ja: '暦と時間' },
} satisfies Record<string, Record<Lang, string>>;

type CategoryKey = keyof typeof CATEGORY;

function article(
  slug: string,
  date: string,
  minutes: number,
  emoji: string,
  category: CategoryKey,
  title: Record<Lang, string>,
  description: Record<Lang, string>,
): BlogArticle {
  return { slug, date, minutes, emoji, category: CATEGORY[category], title, description };
}

export const BLOG_ARTICLES: BlogArticle[] = [
  article(
    'what-is-astrology',
    '2025-03-01',
    8,
    '🔮',
    'basics',
    {
      ko: '점성술이란 무엇인가? 서양 별자리의 역사와 기초 완벽 가이드',
      en: 'What is astrology? A complete guide to the history and basics of the Western zodiac',
      zh: '占星术是什么？西方星座历史与基础完全指南',
      ja: '占星術とは何か？西洋星座の歴史と基礎の完全ガイド',
    },
    {
      ko: '수천 년의 역사를 가진 점성술의 기원부터 현대 별자리 해석법까지. 황도대 12별자리의 의미와 지배 행성, 원소의 관계를 체계적으로 정리했습니다.',
      en: 'From the origins of a practice thousands of years old to how signs are read today — the meaning of the twelve signs, their ruling planets and elements, set out in order.',
      zh: '从数千年历史的占星起源到现代星座解读法，系统梳理黄道十二星座的含义、守护行星与元素之间的关系。',
      ja: '数千年の歴史を持つ占星術の起源から現代の星座の読み解き方まで。黄道十二星座の意味、守護惑星、元素の関係を体系的に整理しました。',
    },
  ),
  article(
    'zodiac-compatibility-guide',
    '2025-03-05',
    10,
    '💞',
    'chemistry',
    {
      ko: '12 별자리 궁합 완벽 분석 — 나와 가장 잘 맞는 별자리는?',
      en: 'Zodiac compatibility, analysed — which sign fits you best?',
      zh: '十二星座配对完全分析——与你最合拍的星座是？',
      ja: '12星座の相性を徹底分析——あなたに最も合う星座は？',
    },
    {
      ko: '별자리 간 궁합의 원리부터 실전 연애 궁합까지. 원소별 궁합 패턴과 행성 상징을 점성술의 문화적 해석으로 소개합니다.',
      en: 'From the principles behind sign compatibility to love in practice: element patterns and planetary symbolism read through astrological tradition.',
      zh: '从星座配对的原理到实战恋爱配对，以占星的文化解读介绍元素配对模式与行星象征。',
      ja: '星座同士の相性の原理から実際の恋愛相性まで。元素ごとのパターンと惑星の象徴を占星術の文化的な解釈で紹介します。',
    },
  ),
  article(
    'chinese-vs-western-zodiac',
    '2025-03-10',
    9,
    '☯️',
    'compare',
    {
      ko: '동양 12지와 서양 별자리의 차이점 — 두 전통의 지혜를 비교하다',
      en: 'Eastern animals and Western signs — comparing two traditions',
      zh: '东方十二生肖与西方星座的差异——比较两种传统的智慧',
      ja: '東洋の十二支と西洋の星座の違い——二つの伝統の知恵を比べる',
    },
    {
      ko: '음양오행에 기반한 동양 12지와 행성 에너지에 기반한 서양 별자리. 두 전통이 인간의 성격과 운명을 바라보는 방식의 공통점과 차이점을 분석합니다.',
      en: 'The twelve animals built on yin-yang and the five elements, and the Western signs built on planetary energy: where the two traditions agree and differ in how they see character and fate.',
      zh: '基于阴阳五行的东方十二生肖与基于行星能量的西方星座，分析两种传统看待性格与命运方式的异同。',
      ja: '陰陽五行に基づく東洋の十二支と、惑星のエネルギーに基づく西洋の星座。性格と運命をどう見るかの共通点と相違点を分析します。',
    },
  ),
  article(
    'how-to-read-daily-fortune',
    '2025-03-15',
    7,
    '📅',
    'use',
    {
      ko: '오늘의 운세를 제대로 읽는 방법 — 운세 해석의 현명한 활용법',
      en: 'How to read a daily fortune properly — using a reading wisely',
      zh: '如何正确解读今日运势——明智运用运势解读的方法',
      ja: '今日の運勢をきちんと読む方法——運勢の賢い活かし方',
    },
    {
      ko: '매일 접하는 운세를 어떻게 해석하고 실생활에 적용할 수 있을까요? 운세의 한계와 건강한 활용법을 알려드립니다.',
      en: 'How should you read the fortune you meet every day, and how do you apply it to real life? The limits of a reading, and a healthy way to use one.',
      zh: '每天看到的运势该如何解读、又如何用在生活中？说明运势的界限与健康的运用方式。',
      ja: '毎日目にする運勢をどう読み、どう日常に生かすか。運勢の限界と健全な活かし方をお伝えします。',
    },
  ),
  article(
    'planets-and-zodiac-signs',
    '2025-03-20',
    11,
    '🪐',
    'planets',
    {
      ko: '지배 행성과 별자리의 관계 — 화성, 금성, 목성이 성격에 미치는 영향',
      en: 'Ruling planets and the signs — how Mars, Venus and Jupiter shape character',
      zh: '守护行星与星座的关系——火星、金星、木星如何影响性格',
      ja: '守護惑星と星座の関係——火星・金星・木星が性格に与える影響',
    },
    {
      ko: '각 별자리를 지배하는 행성이 어떻게 성격과 운명을 형성하는지 탐구합니다. 행성의 신화적 의미부터 현대 점성술에서의 해석까지 깊이 있게 다룹니다.',
      en: 'How the planet ruling each sign forms character and fate, from the myths behind the planets to how modern astrology reads them.',
      zh: '探讨守护各星座的行星如何塑造性格与命运，从行星的神话含义到现代占星中的解读，深入剖析。',
      ja: '各星座を支配する惑星が性格と運命をどう形づくるかを探ります。惑星の神話的な意味から現代占星術の解釈まで深く扱います。',
    },
  ),
  article(
    'zodiac-career-guide',
    '2025-03-25',
    12,
    '💼',
    'career',
    {
      ko: '별자리별 최적 직업 가이드 — 나에게 맞는 커리어는?',
      en: 'The best career for each sign — what work suits you?',
      zh: '各星座的最佳职业指南——适合你的事业是？',
      ja: '星座別・最適な仕事ガイド——あなたに合うキャリアは？',
    },
    {
      ko: '각 별자리의 타고난 강점과 성향에 맞는 직업과 커리어 방향을 분석합니다. 양자리부터 물고기자리까지 12별자리별 직업 적성을 상세히 살펴봅니다.',
      en: "The jobs and career directions that match each sign's natural strengths and temperament, from Aries to Pisces in detail.",
      zh: '分析符合各星座天赋与性格的职业与事业方向，从白羊座到双鱼座逐一细看十二星座的职业适配。',
      ja: '各星座の生まれ持った強みと気質に合う仕事・キャリアの方向を分析。牡羊座から魚座まで12星座の適性を詳しく見ます。',
    },
  ),
  article(
    'moon-sign-guide',
    '2025-04-01',
    9,
    '🌙',
    'moon',
    {
      ko: '달 별자리(Moon Sign) 완벽 가이드 — 감정과 내면을 지배하는 달의 힘',
      en: 'The Moon sign guide — the pull of the Moon over emotion and your inner life',
      zh: '月亮星座完全指南——支配情感与内心的月亮之力',
      ja: 'ムーンサイン（月の星座）完全ガイド——感情と内面を司る月の力',
    },
    {
      ko: '태양 별자리보다 더 깊은 내면을 보여주는 달 별자리. 출생 시 달이 위치한 별자리가 감정, 직관, 관계 방식에 미치는 영향을 체계적으로 분석합니다.',
      en: 'The Moon sign shows an inner life deeper than the Sun sign. How the sign the Moon stood in at your birth shapes emotion, intuition and the way you relate.',
      zh: '比太阳星座更能展现内在的月亮星座，系统分析出生时月亮所在星座对情感、直觉与关系方式的影响。',
      ja: '太陽星座より深い内面を映す月の星座。出生時に月がいた星座が感情・直感・関係のあり方に与える影響を体系的に分析します。',
    },
  ),
  article(
    'rising-sign-guide',
    '2025-04-05',
    8,
    '⬆️',
    'rising',
    {
      ko: '상승 별자리(Rising Sign) 가이드 — 첫인상과 외면을 결정하는 어센던트',
      en: 'The rising sign guide — the ascendant that decides first impressions',
      zh: '上升星座指南——决定第一印象与外表的上升点',
      ja: 'ライジングサイン（上昇星座）ガイド——第一印象と外見を決めるアセンダント',
    },
    {
      ko: '출생 시간을 기반으로 계산되는 상승 별자리가 외모, 첫인상, 사회적 페르소나에 미치는 영향. 태양·달·상승 세 별자리를 종합한 깊이 있는 분석입니다.',
      en: 'How the rising sign, calculated from your birth time, shapes appearance, first impression and social persona — a reading that brings Sun, Moon and rising together.',
      zh: '由出生时间计算的上升星座如何影响外貌、第一印象与社会形象，并综合太阳、月亮与上升三个星座深入分析。',
      ja: '出生時刻から計算される上昇星座が、外見・第一印象・社会的なペルソナに与える影響。太陽・月・上昇の三つを合わせた深い分析です。',
    },
  ),
  article(
    'chinese-zodiac-compatibility',
    '2025-04-10',
    10,
    '🐉',
    'chinese',
    {
      ko: '동양 12지 궁합 완벽 가이드 — 쥐·소·호랑이 최고의 파트너는?',
      en: 'Chinese zodiac compatibility — the best partner for the Rat, Ox and Tiger',
      zh: '东方十二生肖配对完全指南——鼠、牛、虎的最佳伴侣是？',
      ja: '東洋の十二支・相性完全ガイド——ねずみ・うし・とらの最高のパートナーは？',
    },
    {
      ko: '음양오행의 원리에 기반한 12지 동물별 궁합 분석. 최고의 궁합부터 주의가 필요한 조합까지, 동양 전통 궁합 이론을 현대적으로 해설합니다.',
      en: 'Compatibility for the twelve animals based on yin-yang and the five elements, from the best matches to pairings that need care, explained for today.',
      zh: '基于阴阳五行原理的十二生肖配对分析，从最佳配对到需要留意的组合，现代解读东方传统配对理论。',
      ja: '陰陽五行の原理に基づく十二支の相性分析。最高の組み合わせから注意が必要な組み合わせまで、東洋の伝統的な相性理論を現代風に解説します。',
    },
  ),
  article(
    'numerology-lucky-numbers',
    '2025-04-15',
    8,
    '🔢',
    'numerology',
    {
      ko: '수비학과 행운의 숫자 — 생년월일로 알아보는 나의 숫자 에너지',
      en: 'Numerology and lucky numbers — your number energy from your birth date',
      zh: '数字命理与幸运数字——用生日读出你的数字能量',
      ja: '数秘術とラッキーナンバー——生年月日から読むあなたの数字のエネルギー',
    },
    {
      ko: '고대부터 전해 내려온 수비학(Numerology)의 원리와 생년월일로 계산하는 인생 수(Life Path Number). 숫자가 담고 있는 에너지와 의미를 탐구합니다.',
      en: 'The principles of numerology handed down from antiquity and the Life Path Number calculated from your birth date: the energy and meaning numbers carry.',
      zh: '从古代流传的数字命理原理，到用生日计算的生命灵数，探索数字所承载的能量与意义。',
      ja: '古くから伝わる数秘術の原理と、生年月日から計算するライフパスナンバー。数字が持つエネルギーと意味を探ります。',
    },
  ),
  article(
    'zodiac-blood-type',
    '2025-04-20',
    7,
    '🩸',
    'personality',
    {
      ko: '별자리와 혈액형 — 두 가지 성격 분석 시스템의 비교',
      en: 'Zodiac signs and blood types — comparing two personality systems',
      zh: '星座与血型——两种性格分析系统的比较',
      ja: '星座と血液型——二つの性格分析システムを比べる',
    },
    {
      ko: '서양의 별자리와 동아시아의 혈액형 성격론을 비교 분석합니다. 두 체계의 유사점과 차이점, 그리고 각각이 성격 이해에 기여하는 방식을 살펴봅니다.',
      en: 'The Western zodiac set beside East Asian blood-type personality theory: their similarities, differences, and what each contributes to understanding character.',
      zh: '比较分析西方星座与东亚血型性格论，看两个体系的相似与差异，以及各自如何帮助理解性格。',
      ja: '西洋の星座と東アジアの血液型性格論を比較分析。二つの体系の類似点と相違点、それぞれが性格の理解にどう寄与するかを見ます。',
    },
  ),
  article(
    'zodiac-myths-facts',
    '2026-08-01',
    5,
    '🌌',
    'culture',
    {
      ko: '별자리, 안 믿는다면서 왜 자꾸 보게 될까?',
      en: "Why you keep looking at the zodiac even if you don't believe it",
      zh: '说不信星座，为什么还是总看？',
      ja: '信じていないのに、なぜ星座を見てしまうのか',
    },
    {
      ko: '별자리 이야기가 오래 살아남은 이유를 밤하늘의 역사, 바넘 효과, 연애와 관계의 실제 장면을 통해 읽어봅니다.',
      en: 'Why zodiac stories have survived so long, read through the history of the night sky, the Barnum effect, and real scenes from love and relationships.',
      zh: '从夜空的历史、巴纳姆效应到恋爱与关系中的真实场景，解读星座故事何以长久流传。',
      ja: '星座の話が長く生き残ってきた理由を、夜空の歴史、バーナム効果、恋愛や関係の実際の場面から読み解きます。',
    },
  ),
  article(
    'chinese-zodiac-2026',
    '2025-05-10',
    15,
    '🐉',
    'yearly',
    {
      ko: '2026년 띠별 운세 완벽 가이드 — 내 띠의 올해 운세는?',
      en: '2026 fortune for every animal sign — your year ahead',
      zh: '2026年生肖运势完全指南——我的生肖今年运势如何？',
      ja: '2026年の干支別運勢 完全ガイド——あなたの干支の今年の運勢は？',
    },
    {
      ko: '12가지 띠별로 2026년 한 해의 전반적인 운세, 연애운, 재물운, 건강운을 상세히 분석합니다. 각 띠가 올해 집중해야 할 것과 조심해야 할 것을 알아보세요.',
      en: 'The overall, love, money and health fortune for each of the twelve animals in 2026: what to focus on and what to watch.',
      zh: '详细分析十二生肖在2026年的整体运势、爱情运、财运与健康运，看看每个生肖今年该专注什么、该留意什么。',
      ja: '十二支それぞれの2026年の総合運・恋愛運・金運・健康運を詳しく分析。今年力を入れること、気をつけることを見ていきます。',
    },
  ),
  article(
    '2026-yearly-horoscope',
    '2025-05-15',
    14,
    '⭐',
    'yearly',
    {
      ko: '2026년 별자리별 연간 운세 — 12별자리의 한 해 전망',
      en: '2026 yearly horoscope by sign — the year ahead for all twelve',
      zh: '2026年十二星座年度运势——十二星座的全年展望',
      ja: '2026年・星座別の年間運勢——12星座の一年の見通し',
    },
    {
      ko: '2026년 주요 행성 배치와 천체 이벤트가 12개 별자리에 미치는 영향을 분석합니다. 목성, 토성의 이동과 함께 당신의 별자리에 찾아올 기회와 도전을 미리 살펴보세요.',
      en: "How 2026's major planetary placements and sky events affect the twelve signs, with the opportunities and challenges arriving as Jupiter and Saturn move.",
      zh: '分析2026年主要行星位置与天文事件对十二星座的影响，随木星与土星的移动预先看清机会与挑战。',
      ja: '2026年の主要な惑星配置と天体イベントが12星座に与える影響を分析。木星と土星の移動とともに訪れる機会と試練を先に見ます。',
    },
  ),
  article(
    'barnum-effect-astrology',
    '2025-07-08',
    11,
    '🧠',
    'psychology',
    {
      ko: "MBTI보다 정교한 '운명의 알고리즘': 왜 우리는 여전히 별자리에 열광하는가?",
      en: "A 'destiny algorithm' more intricate than MBTI: why we still flock to the zodiac",
      zh: '比MBTI更精妙的“命运算法”：我们为何仍为星座着迷？',
      ja: 'MBTIより精緻な「運命のアルゴリズム」：なぜ私たちは今も星座に熱くなるのか',
    },
    {
      ko: '1948년 포러 실험에서 시작된 바넘 효과. 왜 별자리 설명은 항상 "나한테 딱 맞는 것 같은가"? 심리학 연구로 분석한 별자리 신뢰의 메커니즘.',
      en: 'The Barnum effect, which began with Forer\'s 1948 experiment. Why does a zodiac description always feel written for you? The psychology behind trusting a sign.',
      zh: '始于1948年福勒实验的巴纳姆效应。为什么星座描述总觉得“说的就是我”？用心理学研究分析信任星座的机制。',
      ja: '1948年のフォアラー実験に始まるバーナム効果。なぜ星座の説明はいつも「自分のことのよう」に感じるのか。星座を信じる仕組みを心理学研究から分析します。',
    },
  ),
  article(
    'morning-fortune-ritual',
    '2025-07-15',
    8,
    '🌅',
    'ritual',
    {
      ko: '운명을 바꾸는 아침 5분: StarFate가 제안하는 나만의 운세 활용법',
      en: 'Five morning minutes that change your day: a fortune ritual of your own',
      zh: '改变命运的早晨五分钟：StarFate 提议的专属运势用法',
      ja: '運命を変える朝の5分：StarFateが提案する自分だけの運勢の使い方',
    },
    {
      ko: '골위처의 실행 의도 연구, 점화 효과, 자아 고갈 이론으로 설계한 아침 운세 루틴. 운세를 예언이 아닌 의도 설정 도구로 활용하는 5단계 방법.',
      en: "A morning routine built on Gollwitzer's implementation-intention research, priming effects and ego-depletion theory — five steps that use a fortune to set intentions, not to predict.",
      zh: '依据戈尔维策的执行意图研究、启动效应与自我耗竭理论设计的晨间运势仪式，把运势当作设定意图的工具而非预言的五步方法。',
      ja: 'ゴルヴィッツァーの実行意図研究、プライミング効果、自我消耗理論から設計した朝の運勢ルーティン。運勢を予言ではなく意図設定の道具として使う5ステップ。',
    },
  ),
  article(
    'nasa-ophiuchus-13th-zodiac',
    '2025-07-22',
    9,
    '🐍',
    'astronomy',
    {
      ko: '뱀주인자리는 왜 황도 12궁에 포함되지 않을까? — 천문학과 점성술의 차이',
      en: 'Why Ophiuchus is not one of the twelve signs — astronomy and astrology apart',
      zh: '蛇夫座为什么不在黄道十二宫之内？——天文学与占星术的差异',
      ja: 'へびつかい座はなぜ黄道十二宮に入らないのか——天文学と占星術の違い',
    },
    {
      ko: '“별자리가 바뀌었다” 논쟁의 배경과 열대 황도대, 실제 별자리, 세차운동의 차이를 구분해 설명합니다.',
      en: "The background of the 'your sign has changed' debate, and the difference between the tropical zodiac, the actual constellations and precession.",
      zh: '说明“星座变了”这一争论的背景，以及回归黄道、实际星座与岁差之间的区别。',
      ja: '「星座が変わった」論争の背景と、トロピカル方式の黄道、実際の星座、歳差運動の違いを区別して説明します。',
    },
  ),
  article(
    'twin-study-astrology',
    '2025-08-05',
    10,
    '👯',
    'data',
    {
      ko: '같은 날 태어난 2,000명을 추적했다 — 쌍둥이 연구가 별자리에 던진 가장 불편한 질문',
      en: "Following 2,000 people born on the same day — the twins study's hardest question for astrology",
      zh: '追踪2000名同一天出生的人——双胞胎研究对星座提出的最尖锐问题',
      ja: '同じ日に生まれた2,000人を追跡——双子研究が星座に投げかけた最も厳しい問い',
    },
    {
      ko: '제프리 딘의 타임트윈 연구, 숀 칼슨의 Nature 이중맹검 실험, 화성 효과 재현 실패까지. 데이터가 말하는 별자리의 예측력과 그럼에도 우리가 별자리를 보는 이유.',
      en: "Geoffrey Dean's time-twin study, Shawn Carlson's double-blind Nature experiment, and failed replications of the Mars effect: what the data says about prediction, and why we look anyway.",
      zh: '杰弗里·迪恩的时间双胞胎研究、肖恩·卡尔森发表于《自然》的双盲实验、火星效应的复现失败。数据说明星座的预测力，以及我们仍然看星座的原因。',
      ja: 'ジェフリー・ディーンのタイムツイン研究、ショーン・カーソンの『Nature』二重盲検実験、火星効果の再現失敗まで。データが語る星座の予測力と、それでも星座を見る理由。',
    },
  ),
  article(
    'ancient-egypt-astronomy',
    '2025-08-12',
    12,
    '🏛️',
    'history',
    {
      ko: '고대 이집트는 왜 별자리로 나일강 범람을 예측했나 — 천문학과 점성술이 갈라지기 전의 역사',
      en: 'Why ancient Egypt read the Nile flood in the stars — before astronomy and astrology split',
      zh: '古埃及为何用星座预测尼罗河泛滥——天文学与占星术分道之前的历史',
      ja: '古代エジプトはなぜ星座でナイル川の氾濫を予測したのか——天文学と占星術が分かれる前の歴史',
    },
    {
      ko: '시리우스 헬리아칼 라이징, 덴데라 조디악, 프톨레마이오스의 테트라비블로스까지. 케플러와 갈릴레오도 점성술 차트를 그렸던 시절의 이야기.',
      en: "The heliacal rising of Sirius, the Dendera zodiac, Ptolemy's Tetrabiblos — a time when Kepler and Galileo also drew astrological charts.",
      zh: '从天狼星的偕日升、丹德拉黄道带到托勒密的《四书》，讲述开普勒与伽利略也绘制占星图的那个时代。',
      ja: 'シリウスの偕日昇、デンデラの黄道帯、プトレマイオスの『テトラビブロス』まで。ケプラーやガリレオも占星術の図を描いていた時代の話。',
    },
  ),
  article(
    'zodiac-in-medieval-art',
    '2026-11-02',
    10,
    '🖼️',
    'history',
    {
      ko: '중세 기도서 달력에는 왜 별자리가 함께 그려졌나 — 성무일도서와 황도대 미술',
      en: 'Why zodiac signs appear in medieval book-of-hours calendars — liturgy and zodiac art',
      zh: '中世纪祈祷书日历里为什么画着星座——时祷书与黄道艺术',
      ja: '中世の時祷書の暦に、なぜ星座が描かれたのか——聖務日課書と黄道の美術',
    },
    {
      ko: '베리 공작의 성무일도서 달력 그림, 12달의 노동, 지오토가 그린 별, 뒤러의 천구도까지. 중세와 르네상스 미술에서 별자리가 시간을 표시하는 장치로 쓰인 이유를 살펴봅니다.',
      en: "The calendar pages of the Très Riches Heures, the labours of the months, Giotto's stars, Dürer's sky maps: why the zodiac served as a way to mark time in medieval and Renaissance art.",
      zh: '从贝里公爵的《时祷书》月历图、十二个月的劳作、乔托画的星到丢勒的天球图，看中世纪与文艺复兴艺术中星座为何成为标示时间的装置。',
      ja: 'ベリー公の『時祷書』の暦絵、十二か月の労働、ジョットの描いた星、デューラーの天球図まで。中世・ルネサンス美術で星座が時間を示す仕掛けとして使われた理由を見ます。',
    },
  ),
  article(
    'lunar-calendar-rule',
    '2026-11-07',
    11,
    '🌘',
    'calendar',
    {
      ko: '윤달은 왜 생길까 — 음력의 19년 주기와 2033년 문제',
      en: 'Why leap months exist — the 19-year lunar cycle and the 2033 problem',
      zh: '闰月为什么会存在——农历19年周期与2033年问题',
      ja: '閏月はなぜできるのか——太陰暦の19年周期と2033年問題',
    },
    {
      ko: '삭망월 29.53일과 태양년 365.24일의 차이, 19년에 7번 윤달을 넣는 메톤 주기, 중기가 없는 달을 윤달로 삼는 규칙, 그리고 2033년에 달력 계산이 갈리는 이유.',
      en: "The gap between a 29.53-day lunation and a 365.24-day solar year, the Metonic cycle that adds seven leap months in 19 years, the rule that makes a month without a mid-term the leap month, and why calendar calculations diverge in 2033.",
      zh: '朔望月29.53天与回归年365.24天的差异、19年加7个闰月的默冬周期、无中气之月为闰月的规则，以及2033年历法计算出现分歧的原因。',
      ja: '朔望月29.53日と太陽年365.24日の差、19年に7回閏月を入れるメトン周期、中気のない月を閏月とする規則、そして2033年に暦の計算が分かれる理由。',
    },
  ),
  article(
    'saturn-return-psychology',
    '2026-11-11',
    9,
    '🪐',
    'psychology',
    {
      ko: '토성 회귀는 서른의 위기를 설명할까 — 점성술과 발달심리학 사이',
      en: 'Does the Saturn return explain a crisis at thirty — astrology and developmental psychology',
      zh: '土星回归能解释三十岁危机吗——占星术与发展心理学之间',
      ja: 'サターンリターンは30歳の危機を説明できるのか——占星術と発達心理学のあいだ',
    },
    {
      ko: '토성의 29.46년 공전 주기, 첫 토성 회귀가 29~30세에 오는 이유, 레빈슨의 서른 전환 연구, 그리고 별자리 예측력에 대한 실증 연구 결과를 함께 정리합니다.',
      en: "Saturn's 29.46-year orbit, why the first Saturn return arrives around 29–30, Levinson's study of the midlife transition, and what empirical research says about sign prediction.",
      zh: '土星29.46年的公转周期、第一次土星回归为何在29~30岁到来、莱文森的三十岁转折研究，以及关于星座预测力的实证研究结果。',
      ja: '土星の29.46年の公転周期、最初のサターンリターンが29〜30歳に来る理由、レヴィンソンの30歳の転機研究、星座の予測力に関する実証研究の結果を整理します。',
    },
  ),
  article(
    'star-name-etymology',
    '2026-11-16',
    10,
    '✨',
    'culture',
    {
      ko: '베텔게우스, 알골, 미자르 — 별 이름은 누가 지었나',
      en: 'Betelgeuse, Algol, Mizar — who named the stars',
      zh: '参宿四、大陵五、开阳——星星的名字是谁取的',
      ja: 'ベテルギウス、アルゴル、ミザール——星の名前は誰がつけたのか',
    },
    {
      ko: '아랍어에서 온 밝은 별 이름들, 프톨레마이오스 목록이 번역되며 생긴 오해, 2016년 국제천문연맹의 공식 별 이름 목록, 그리고 한국 전통의 28수와 천상열차분야지도.',
      en: "Bright star names from Arabic, the misunderstandings that came with translating Ptolemy's catalogue, the IAU's 2016 official star names, and Korea's traditional 28 mansions and star chart.",
      zh: '源自阿拉伯语的亮星名、翻译托勒密星表时产生的误解、2016年国际天文学联合会的正式星名，以及韩国传统的二十八宿与天象列次分野之图。',
      ja: 'アラビア語に由来する明るい星の名、プトレマイオスの星表が翻訳される際に生じた誤解、2016年の国際天文学連合の正式星名、そして韓国伝統の二十八宿と天象列次分野之図。',
    },
  ),
  article(
    'islamic-astronomy-legacy',
    '2026-11-19',
    12,
    '🕌',
    'history',
    {
      ko: '마라가 천문대에서 코페르니쿠스까지 — 이슬람 천문학이 유럽에 넘긴 것',
      en: 'From the Maragha observatory to Copernicus — what Islamic astronomy passed to Europe',
      zh: '从马拉盖天文台到哥白尼——伊斯兰天文学留给欧洲的东西',
      ja: 'マラーガ天文台からコペルニクスまで——イスラーム天文学がヨーロッパに渡したもの',
    },
    {
      ko: '지혜의 집의 번역, 알콰리즈미, 1259년 마라가 천문대와 투시 부부, 울루그베그의 사마르칸트 관측, 톨레도 번역과 알폰시안 표까지. 유럽 천문학이 물려받은 계산 기술의 계보.',
      en: "The translations of the House of Wisdom, al-Khwarizmi, the Maragha observatory of 1259 and the Tusi couple, Ulugh Beg's Samarkand observations, the Toledo translations and the Alfonsine tables — the lineage of calculation Europe inherited.",
      zh: '智慧宫的翻译、花拉子米、1259年马拉盖天文台与图西双轮、乌鲁伯格在撒马尔罕的观测、托莱多翻译与阿方索星表，欧洲天文学继承的计算技术谱系。',
      ja: '知恵の館の翻訳、アル・フワーリズミー、1259年のマラーガ天文台とトゥースィーの対、ウルグ・ベクのサマルカンド観測、トレド翻訳とアルフォンソ表まで。ヨーロッパ天文学が受け継いだ計算技術の系譜。',
    },
  ),
];

export function getBlogArticle(slug: string): BlogArticle | undefined {
  return BLOG_ARTICLES.find((article) => article.slug === slug);
}

export function formatArticleDate(iso: string, lang: Lang): string {
  const [year, month, day] = iso.split('-').map((part) => Number(part));
  if (lang === 'ko') return `${year}년 ${month}월 ${day}일`;
  if (lang === 'ja') return `${year}年${month}月${day}日`;
  if (lang === 'zh') return `${year}年${month}月${day}日`;
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return `${months[month - 1]} ${day}, ${year}`;
}
