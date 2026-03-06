export type Lang = 'ko' | 'en' | 'zh' | 'ja';

export const LANG_LABELS: Record<Lang, string> = {
  ko: '한국어',
  en: 'EN',
  zh: '中文',
  ja: '日本語',
};

export interface Translations {
  // Form
  formTitle: string;
  formSubtitle: string;
  formHint: string;
  genderLabel: string;
  male: string;
  female: string;
  dateLabel: string;
  submitBtn: string;
  loadingBtn: string;
  loadingTitle: string;
  loadingMessages: string[];
  footerText: string;
  zodiacSigns: string[];
  // Fortune Card
  resultHeader: string;
  scoreLabel: string;
  detailLabel: string;
  overall: string;
  love: string;
  money: string;
  work: string;
  luckyItemLabel: string;
  luckyColorLabel: string;
  luckyNumberLabel: string;
  shareBtn: string;
  copied: string;
  resetBtn: string;
  linkCopyBtn: string;
  linkCopied: string;
  disclaimer: string;
  scoreLevel: (score: number) => string;
  // Errors
  quotaTitle: string;
  quotaMsg1: string;
  quotaMsg2: string;
  errorTitle: string;
  back: string;
  retryHint: string;
  generalError: string;
  // Navigation
  backHome: string;
  navFortune: string;
  navZodiac: string;
  navChineseZodiac: string;
  navAbout: string;
  // InfoSection
  howToTitle: string;
  howToSteps: { title: string; desc: string }[];
  zodiacGuideTitle: string;
  zodiacGuideTraits: string[];
  serviceIntroTitle: string;
  serviceIntroText: string;
  // Zodiac page
  zodiacPageTitle: string;
  zodiacPageSubtitle: string;
  elementsTitle: string;
  elementItems: { element: string; signs: string; desc: string }[];
  zodiacDetailTitle: string;
  coreTraitsLabel: string;
  personalityLabel: string;
  loveTrendLabel: string;
  moneyTrendLabel: string;
  compatibleSignsLabel: string;
  luckyLabel: string;
  zodiacCTA: string;
  // Chinese Zodiac page
  chineseZodiacPageTitle: string;
  chineseZodiacPageSubtitle: string;
  findMyZodiacTitle: string;
  lunarNote: string;
  chineseDetailTitle: string;
  strengthsLabel: string;
  weaknessesLabel: string;
  compatibleAnimalsLabel: string;
  careersLabel: string;
  recentYearsLabel: string;
  animalUnit: string;
  chineseZodiacCTA: string;
  // Zodiac planets (12 items, by sign order)
  zodiacPlanets: string[];
  // Chinese zodiac animal names (12 items)
  chineseZodiacAnimals: string[];
  // Footer
  footerDesc: string;
  footerService: string;
  footerPolicy: string;
  footerDisclaimer: string;
  // About page
  aboutTitle: string;
  aboutSubtitle: string;
  missionTitle: string;
  missionText1: string;
  missionText2: string;
  missionText3: string;
  missionNote: string;
  featuresTitle: string;
  featureItems: { icon: string; title: string; desc: string }[];
  aiSystemTitle: string;
  aiSystemSteps: { title: string; desc: string }[];
  faqTitle: string;
  faqItems: { q: string; a: string }[];
  operationTitle: string;
  opLabels: { serviceName: string; serviceUrl: string; email: string; started: string; tech: string };
}

const translations: Record<Lang, Translations> = {
  ko: {
    formTitle: '오늘의 운세',
    formSubtitle: '별자리가 당신의 운명을 속삭입니다',
    formHint: '생년월일을 입력하면 오늘의 운세를 알려드려요',
    genderLabel: '👤 성별',
    male: '남자',
    female: '여자',
    dateLabel: '🗓️ 생년월일',
    submitBtn: '운세 보기',
    loadingBtn: '운세 확인 중...',
    loadingTitle: '운세를 불러오는 중...',
    loadingMessages: ['별자리를 분석하는 중...','우주의 기운을 읽는 중...','오늘의 운세를 계산하는 중...','별빛 에너지를 모으는 중...','운명의 실을 잇는 중...'],
    footerText: '✦ 오늘 하루도 별빛이 당신을 비추기를 ✦',
    zodiacSigns: ['양자리','황소자리','쌍둥이자리','게자리','사자자리','처녀자리','천칭자리','전갈자리','사수자리','염소자리','물병자리','물고기자리'],
    resultHeader: '오늘의 운세 결과',
    scoreLabel: '오늘의 운세 점수',
    detailLabel: '세부 운세',
    overall: '종합운',
    love: '연애운',
    money: '금전운',
    work: '직업운',
    luckyItemLabel: '오늘의 행운 아이템',
    luckyColorLabel: '행운의 색',
    luckyNumberLabel: '행운의 숫자',
    shareBtn: '운세 공유',
    copied: '복사됨!',
    resetBtn: '다시 보기',
    linkCopyBtn: '사이트 링크 복사',
    linkCopied: '링크 복사됨!',
    disclaimer: '✦ 운세는 참고용입니다. 당신의 노력이 가장 중요합니다 ✦',
    scoreLevel: (s) => s >= 80 ? '최고의 날' : s >= 60 ? '좋은 날' : s >= 40 ? '보통의 날' : '주의가 필요한 날',
    quotaTitle: '오늘의 운세 조회 한도를 초과했습니다',
    quotaMsg1: '별빛이 너무 많은 분들께 닿았나봐요 🌟',
    quotaMsg2: '자정이 지나면 다시 운세를 확인할 수 있습니다.',
    errorTitle: '오류 발생',
    back: '돌아가기',
    retryHint: '다른 날짜로 운세를 확인하려면 "다시 보기"를 눌러주세요',
    generalError: '운세를 불러오는 중 오류가 발생했습니다. 다시 시도해주세요.',
    backHome: '← 홈으로',
    navFortune: '오늘의 운세',
    navZodiac: '별자리 정보',
    navChineseZodiac: '12띠 정보',
    navAbout: '사이트 소개',
    howToTitle: '이용 방법',
    howToSteps: [
      { title: '성별 선택', desc: '남자 또는 여자를 선택하세요. 성별에 따라 운세 표현이 달라집니다.' },
      { title: '생년월일 입력', desc: '정확한 생년월일을 입력하면 별자리와 띠가 자동으로 계산됩니다.' },
      { title: '운세 확인', desc: 'AI가 오늘의 종합운, 연애운, 금전운, 직업운을 분석해 드립니다.' },
    ],
    zodiacGuideTitle: '12 별자리 안내',
    zodiacGuideTraits: ['용감하고 활동적인','안정적이고 신뢰감 있는','호기심 많고 재치 있는','감성적이고 가정적인','당당하고 카리스마 있는','꼼꼼하고 분석적인','균형 잡히고 공정한','직관적이고 집중력 강한','낙관적이고 모험을 즐기는','성실하고 목표 지향적인','독창적이고 인도주의적인','예민하고 상상력 풍부한'],
    serviceIntroTitle: '🔮 서비스 소개',
    serviceIntroText: '오늘의 운세는 생년월일을 기반으로 서양 별자리(12궁도)와 동양 띠를 함께 분석하여 AI가 오늘의 운세를 알려드리는 무료 서비스입니다. 종합운, 연애운, 금전운, 직업운을 매일 새롭게 제공하며, 행운의 색과 숫자까지 알려드립니다. 운세는 오락 및 참고 목적으로 제공되며, 실제 미래를 예측하지 않습니다.',
    zodiacPageTitle: '별자리 운세 정보',
    zodiacPageSubtitle: '서양 점성술의 12별자리(황도대)를 완벽하게 알아보세요. 각 별자리의 성격, 연애 경향, 금전운, 궁합을 상세하게 안내합니다.',
    elementsTitle: '4대 원소와 별자리',
    elementItems: [
      { element: '불 🔥', signs: '양자리, 사자자리, 사수자리', desc: '열정적, 창의적, 행동적' },
      { element: '땅 🌍', signs: '황소자리, 처녀자리, 염소자리', desc: '현실적, 안정적, 인내심' },
      { element: '공기 💨', signs: '쌍둥이자리, 천칭자리, 물병자리', desc: '지적, 소통적, 유연함' },
      { element: '물 💧', signs: '게자리, 전갈자리, 물고기자리', desc: '감성적, 직관적, 공감' },
    ],
    zodiacDetailTitle: '12별자리 상세 안내',
    coreTraitsLabel: '핵심 특성',
    personalityLabel: '성격 & 특징',
    loveTrendLabel: '💕 연애 경향',
    moneyTrendLabel: '💰 금전 경향',
    compatibleSignsLabel: '잘 맞는 별자리',
    luckyLabel: '행운',
    zodiacCTA: '🔮 내 별자리 오늘 운세 보기',
    chineseZodiacPageTitle: '12띠 운세 정보',
    chineseZodiacPageSubtitle: '동양 전통의 십이지(十二支) 완벽 가이드. 내 띠의 성격, 강점, 약점, 궁합까지 모두 알아보세요.',
    findMyZodiacTitle: '내 띠 확인하기',
    lunarNote: '동양 십이지는 12년 주기로 반복됩니다. 태어난 해의 간지(干支)에 따라 띠가 결정됩니다. 단, 음력 설날(정월 초하루) 이전에 태어난 경우 이전 해의 띠가 됩니다.',
    chineseDetailTitle: '12띠 상세 안내',
    strengthsLabel: '✅ 강점',
    weaknessesLabel: '⚠️ 약점',
    compatibleAnimalsLabel: '잘 맞는 띠',
    careersLabel: '잘 맞는 직업',
    recentYearsLabel: '최근 해',
    animalUnit: '띠',
    chineseZodiacCTA: '🔮 내 띠 오늘 운세 보기',
    aboutTitle: '오늘의 운세 소개',
    aboutSubtitle: 'AI 기술로 별자리와 띠를 분석하는 무료 운세 서비스',
    missionTitle: '서비스 목적',
    missionText1: '<strong>오늘의 운세</strong>는 바쁜 일상 속에서 간편하게 오늘의 운세를 확인하고 싶은 분들을 위해 만들어진 무료 서비스입니다.',
    missionText2: '생년월일 하나만 입력하면 서양의 12별자리(황도대 점성술)와 동양의 12띠를 동시에 분석하여, Google Gemini AI가 오늘 날짜에 맞는 운세를 생성해 드립니다.',
    missionText3: '종합운, 연애운, 금전운, 직업운의 네 가지 분야와 함께 오늘의 행운의 색, 행운의 숫자까지 알려드려 하루를 더 긍정적으로 시작할 수 있도록 도와드립니다.',
    missionNote: '※ 본 서비스의 운세는 오락 및 참고 목적으로 제공되는 AI 생성 콘텐츠입니다. 실제 미래를 예측하거나 과학적 근거가 있는 내용이 아님을 안내해 드립니다.',
    featuresTitle: '서비스 특징',
    featureItems: [
      { icon: '🤖', title: 'AI 운세 생성', desc: 'Google Gemini AI가 별자리와 띠를 종합 분석하여 오늘 날짜 기준의 맞춤 운세를 생성합니다. 매일 새롭게 업데이트됩니다.' },
      { icon: '♈', title: '서양 별자리 분석', desc: '생년월일을 기반으로 12개의 황도대 별자리를 정확히 계산합니다. 양자리부터 물고기자리까지 각 별자리의 특성이 반영됩니다.' },
      { icon: '🐉', title: '동양 12띠 분석', desc: '태어난 해를 기준으로 12가지 동물 띠를 파악합니다. 쥐, 소, 호랑이 등 각 띠의 성격과 운세를 함께 고려합니다.' },
      { icon: '📊', title: '4가지 운세 분야', desc: '종합운, 연애운, 금전운, 직업운 네 가지 분야를 각각 분석합니다. 행운의 색과 행운의 숫자도 함께 알려드립니다.' },
      { icon: '🔒', title: '개인정보 보호', desc: '입력하신 생년월일은 운세 생성 즉시 파기되며 서버에 저장되지 않습니다. 개인정보를 안전하게 보호합니다.' },
      { icon: '📱', title: '모바일 최적화', desc: '스마트폰, 태블릿, PC 등 모든 기기에서 편리하게 이용할 수 있도록 반응형 디자인으로 설계되었습니다.' },
    ],
    aiSystemTitle: 'AI 운세 시스템 작동 방식',
    aiSystemSteps: [
      { title: '입력 정보 분석', desc: '생년월일과 성별을 입력받아 서양 별자리(황도 12궁)와 동양 12띠를 자동 계산합니다.' },
      { title: 'AI 운세 생성', desc: 'Google Gemini AI가 오늘 날짜, 별자리 특성, 띠의 성격을 종합하여 개인화된 운세 텍스트를 생성합니다.' },
      { title: '결과 제공', desc: '종합운, 연애운, 금전운, 직업운과 함께 운세 점수(100점 만점), 행운의 색, 행운의 숫자를 제공합니다.' },
    ],
    faqTitle: '자주 묻는 질문 (FAQ)',
    faqItems: [
      { q: '운세는 얼마나 정확한가요?', a: '본 서비스의 운세는 AI가 생성한 오락적 콘텐츠입니다. 실제 미래를 과학적으로 예측하거나 보장하지 않습니다. 가볍게 재미로 즐겨주세요.' },
      { q: '같은 생년월일이면 운세가 항상 같나요?', a: '아닙니다. 운세는 오늘 날짜를 기준으로 매일 새롭게 생성됩니다. 같은 생년월일이라도 날짜가 다르면 다른 운세가 나옵니다.' },
      { q: '성별이 운세에 영향을 미치나요?', a: '네, 성별 정보는 운세 표현의 자연스러움을 위해 활용됩니다. 동일 조건에서 성별에 따라 운세 문장의 표현 방식이 달라질 수 있습니다.' },
      { q: '운세 결과를 공유할 수 있나요?', a: '네, 운세 결과 화면에서 "운세 공유" 버튼을 누르면 운세 내용이 텍스트로 클립보드에 복사됩니다. 카카오톡, 문자 등으로 쉽게 공유하세요.' },
      { q: '서비스 이용은 무료인가요?', a: '네, 오늘의 운세는 완전 무료 서비스입니다. 별도의 회원가입이나 결제 없이 누구나 이용할 수 있습니다.' },
    ],
    operationTitle: '운영 정보',
    opLabels: { serviceName: '서비스명', serviceUrl: '서비스 주소', email: '문의 이메일', started: '서비스 시작', tech: '사용 기술' },
    zodiacPlanets: ['화성 ♂', '금성 ♀', '수성 ☿', '달 🌙', '태양 ☀️', '수성 ☿', '금성 ♀', '명왕성 ♇', '목성 ♃', '토성 ♄', '천왕성 ♅', '해왕성 ♆'],
    chineseZodiacAnimals: ['쥐', '소', '호랑이', '토끼', '용', '뱀', '말', '양', '원숭이', '닭', '개', '돼지'],
    footerDesc: '생년월일로 별자리와 띠를 분석하는 AI 무료 운세 서비스. 오늘의 종합운, 연애운, 금전운, 직업운을 확인해보세요.',
    footerService: '서비스',
    footerPolicy: '정책',
    footerDisclaimer: '본 서비스의 운세는 AI가 생성한 오락적 콘텐츠입니다. 실제 미래를 예측하지 않습니다.',
  },

  en: {
    formTitle: "Today's Fortune",
    formSubtitle: 'The stars whisper your destiny',
    formHint: "Enter your birth date to reveal today's fortune",
    genderLabel: '👤 Gender',
    male: 'Male',
    female: 'Female',
    dateLabel: '🗓️ Birth Date',
    submitBtn: 'See Fortune',
    loadingBtn: 'Reading Fortune...',
    loadingTitle: 'Reading your fortune...',
    loadingMessages: ['Analyzing your zodiac sign...','Reading cosmic energy...','Calculating today\'s fortune...','Gathering starlight energy...','Weaving the threads of fate...'],
    footerText: '✦ May the stars light your path today ✦',
    zodiacSigns: ['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'],
    resultHeader: "Today's Fortune",
    scoreLabel: 'Fortune Score',
    detailLabel: 'Detailed Fortune',
    overall: 'Overall',
    love: 'Love',
    money: 'Money',
    work: 'Career',
    luckyItemLabel: "Today's Lucky Items",
    luckyColorLabel: 'Lucky Color',
    luckyNumberLabel: 'Lucky Number',
    shareBtn: 'Share Fortune',
    copied: 'Copied!',
    resetBtn: 'Try Again',
    linkCopyBtn: 'Copy Site Link',
    linkCopied: 'Link Copied!',
    disclaimer: '✦ Fortune is for reference only. Your efforts matter most ✦',
    scoreLevel: (s) => s >= 80 ? 'Amazing Day' : s >= 60 ? 'Good Day' : s >= 40 ? 'Ordinary Day' : 'Day to be Careful',
    quotaTitle: 'Daily fortune limit exceeded',
    quotaMsg1: 'Too many people checked their fortune today 🌟',
    quotaMsg2: 'Fortune resets after midnight.',
    errorTitle: 'Error',
    back: 'Go Back',
    retryHint: 'Press "Try Again" to check fortune with a different date',
    generalError: 'An error occurred while loading your fortune. Please try again.',
    backHome: '← Back',
    navFortune: 'Fortune',
    navZodiac: 'Zodiac Info',
    navChineseZodiac: 'Chinese Zodiac',
    navAbout: 'About',
    howToTitle: 'How to Use',
    howToSteps: [
      { title: 'Select Gender', desc: 'Choose male or female. Fortune expressions vary by gender.' },
      { title: 'Enter Birthdate', desc: 'Your zodiac sign and Chinese zodiac animal are calculated automatically.' },
      { title: 'Check Fortune', desc: 'AI analyzes your Overall, Love, Money, and Career fortune for today.' },
    ],
    zodiacGuideTitle: '12 Zodiac Signs',
    zodiacGuideTraits: ['Brave & Active','Stable & Trustworthy','Curious & Witty','Emotional & Family-Oriented','Bold & Charismatic','Detail-Oriented & Analytical','Balanced & Fair','Intuitive & Focused','Optimistic & Adventurous','Diligent & Goal-Oriented','Creative & Humanitarian','Sensitive & Imaginative'],
    serviceIntroTitle: '🔮 About This Service',
    serviceIntroText: 'Fortune Teller is a free service that analyzes your Western zodiac sign and Chinese zodiac animal based on your birthdate, then generates your daily fortune with AI. Overall, Love, Money, and Career fortune are provided fresh every day, along with your lucky color and number. Fortune is provided for entertainment purposes only.',
    zodiacPageTitle: 'Zodiac Fortune Guide',
    zodiacPageSubtitle: 'Explore all 12 Western zodiac signs. Learn about personality, love tendencies, money fortune, and compatibility for each sign.',
    elementsTitle: '4 Elements & Zodiac Signs',
    elementItems: [
      { element: 'Fire 🔥', signs: 'Aries, Leo, Sagittarius', desc: 'Passionate, Creative, Active' },
      { element: 'Earth 🌍', signs: 'Taurus, Virgo, Capricorn', desc: 'Realistic, Stable, Patient' },
      { element: 'Air 💨', signs: 'Gemini, Libra, Aquarius', desc: 'Intellectual, Communicative, Flexible' },
      { element: 'Water 💧', signs: 'Cancer, Scorpio, Pisces', desc: 'Emotional, Intuitive, Empathetic' },
    ],
    zodiacDetailTitle: '12 Zodiac Signs in Detail',
    coreTraitsLabel: 'Key Traits',
    personalityLabel: 'Personality & Traits',
    loveTrendLabel: '💕 Love Tendency',
    moneyTrendLabel: '💰 Money Tendency',
    compatibleSignsLabel: 'Compatible Signs',
    luckyLabel: 'Lucky',
    zodiacCTA: '🔮 See My Zodiac Fortune',
    chineseZodiacPageTitle: 'Chinese Zodiac Guide',
    chineseZodiacPageSubtitle: 'Complete guide to the Eastern twelve animals. Discover personality, strengths, weaknesses, and compatibility for your sign.',
    findMyZodiacTitle: 'Find Your Animal Sign',
    lunarNote: 'The Chinese zodiac follows a 12-year cycle. Your sign is determined by your birth year. Note: if born before the Lunar New Year, you belong to the previous year\'s sign.',
    chineseDetailTitle: '12 Animals in Detail',
    strengthsLabel: '✅ Strengths',
    weaknessesLabel: '⚠️ Weaknesses',
    compatibleAnimalsLabel: 'Compatible Animals',
    careersLabel: 'Suitable Careers',
    recentYearsLabel: 'Recent Years',
    animalUnit: '',
    chineseZodiacCTA: '🔮 See My Chinese Zodiac Fortune',
    aboutTitle: 'About Fortune Teller',
    aboutSubtitle: 'Free AI fortune service analyzing your zodiac sign and Chinese zodiac animal',
    missionTitle: 'Our Mission',
    missionText1: '<strong>Fortune Teller</strong> is a free service for those who want to quickly check their daily fortune in busy lives.',
    missionText2: 'Simply enter your birthdate to analyze both the Western 12 zodiac signs and Eastern Chinese zodiac simultaneously, with Google Gemini AI generating a personalized fortune for today.',
    missionText3: 'Along with Overall, Love, Money, and Career fortune, we also provide your lucky color and lucky number to help you start the day more positively.',
    missionNote: '※ The fortune in this service is AI-generated entertainment content. It does not predict actual future events or have scientific basis.',
    featuresTitle: 'Features',
    featureItems: [
      { icon: '🤖', title: 'AI Fortune Generation', desc: 'Google Gemini AI analyzes your zodiac and Chinese zodiac to generate personalized daily fortune. Updated fresh every day.' },
      { icon: '♈', title: 'Western Zodiac Analysis', desc: 'Accurately calculates all 12 zodiac signs based on birthdate. Covers Aries through Pisces with each sign\'s unique characteristics.' },
      { icon: '🐉', title: 'Chinese Zodiac Analysis', desc: 'Determines your Chinese zodiac animal based on birth year. Incorporates the personality and fortune of all 12 animals.' },
      { icon: '📊', title: '4 Fortune Categories', desc: 'Analyzes Overall, Love, Money, and Career fortune separately. Also reveals your lucky color and lucky number.' },
      { icon: '🔒', title: 'Privacy Protection', desc: 'Your birthdate is discarded immediately after fortune generation and never stored on servers.' },
      { icon: '📱', title: 'Mobile Optimized', desc: 'Responsive design for smartphones, tablets, and PCs for convenient use on any device.' },
    ],
    aiSystemTitle: 'How the AI Fortune System Works',
    aiSystemSteps: [
      { title: 'Input Analysis', desc: 'Your birthdate and gender are used to automatically calculate your Western zodiac sign and Chinese zodiac animal.' },
      { title: 'AI Fortune Generation', desc: 'Google Gemini AI combines today\'s date, zodiac characteristics, and Chinese zodiac personality to generate personalized fortune text.' },
      { title: 'Result Delivery', desc: 'Overall, Love, Money, and Career fortune are provided along with a fortune score (out of 100), lucky color, and lucky number.' },
    ],
    faqTitle: 'Frequently Asked Questions (FAQ)',
    faqItems: [
      { q: 'How accurate is the fortune?', a: 'The fortune is AI-generated entertainment content. It does not scientifically predict or guarantee future events. Enjoy it for fun.' },
      { q: 'Do people with the same birthdate get the same fortune?', a: 'No. Fortune is generated fresh daily based on today\'s date. Different dates produce different fortunes even for the same birthdate.' },
      { q: 'Does gender affect the fortune?', a: 'Yes, gender information is used for natural expression in fortune text. Phrasing may differ based on gender for the same conditions.' },
      { q: 'Can I share my fortune?', a: 'Yes, press "Share Fortune" on the result screen to copy the fortune text to your clipboard. Share easily via messaging apps.' },
      { q: 'Is the service free?', a: 'Yes, Fortune Teller is completely free. No registration or payment required.' },
    ],
    operationTitle: 'Service Information',
    opLabels: { serviceName: 'Service Name', serviceUrl: 'URL', email: 'Contact Email', started: 'Since', tech: 'Technology' },
    zodiacPlanets: ['Mars ♂', 'Venus ♀', 'Mercury ☿', 'Moon 🌙', 'Sun ☀️', 'Mercury ☿', 'Venus ♀', 'Pluto ♇', 'Jupiter ♃', 'Saturn ♄', 'Uranus ♅', 'Neptune ♆'],
    chineseZodiacAnimals: ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'],
    footerDesc: 'A free AI fortune service analyzing zodiac signs and Chinese zodiac from your birthdate. Check your Overall, Love, Money, and Career fortune.',
    footerService: 'Services',
    footerPolicy: 'Policies',
    footerDisclaimer: 'The fortune in this service is AI-generated entertainment content. It does not predict actual future events.',
  },

  zh: {
    formTitle: '今日运势',
    formSubtitle: '星座正在诉说你的命运',
    formHint: '输入生日，查看今日运势',
    genderLabel: '👤 性别',
    male: '男',
    female: '女',
    dateLabel: '🗓️ 生日',
    submitBtn: '查看运势',
    loadingBtn: '运势解读中...',
    loadingTitle: '正在读取运势...',
    loadingMessages: ['正在分析星座...','正在感应宇宙能量...','正在计算今日运势...','正在汇聚星光能量...','正在编织命运之线...'],
    footerText: '✦ 愿今日星光照耀你 ✦',
    zodiacSigns: ['白羊座','金牛座','双子座','巨蟹座','狮子座','处女座','天秤座','天蝎座','射手座','摩羯座','水瓶座','双鱼座'],
    resultHeader: '今日运势结果',
    scoreLabel: '今日运势评分',
    detailLabel: '详细运势',
    overall: '综合运',
    love: '爱情运',
    money: '财运',
    work: '事业运',
    luckyItemLabel: '今日幸运物',
    luckyColorLabel: '幸运色',
    luckyNumberLabel: '幸运数字',
    shareBtn: '分享运势',
    copied: '已复制！',
    resetBtn: '重新查看',
    linkCopyBtn: '复制网站链接',
    linkCopied: '链接已复制！',
    disclaimer: '✦ 运势仅供参考，努力才是关键 ✦',
    scoreLevel: (s) => s >= 80 ? '最佳之日' : s >= 60 ? '吉日' : s >= 40 ? '普通之日' : '需谨慎之日',
    quotaTitle: '今日运势查询已达上限',
    quotaMsg1: '今日运势已被太多人查询 🌟',
    quotaMsg2: '午夜后可再次查询运势。',
    errorTitle: '错误',
    back: '返回',
    retryHint: '点击"重新查看"可用不同日期查询运势',
    generalError: '加载运势时出现错误，请重试。',
    backHome: '← 返回',
    navFortune: '今日运势',
    navZodiac: '星座信息',
    navChineseZodiac: '生肖信息',
    navAbout: '关于我们',
    howToTitle: '使用方法',
    howToSteps: [
      { title: '选择性别', desc: '选择男性或女性。运势表达方式因性别而异。' },
      { title: '输入生日', desc: '输入准确的生日，星座和生肖将自动计算。' },
      { title: '查看运势', desc: 'AI将分析今日的综合运、爱情运、财运和事业运。' },
    ],
    zodiacGuideTitle: '12星座介绍',
    zodiacGuideTraits: ['勇敢积极','稳定可靠','好奇机智','感性顾家','自信有魅力','细心分析','平衡公正','直觉专注','乐观冒险','勤奋目标','独创人道','敏感想象'],
    serviceIntroTitle: '🔮 服务介绍',
    serviceIntroText: '今日运势是一项免费服务，根据您的生日分析西方星座和东方生肖，由AI提供每日运势。每天更新综合运、爱情运、财运和事业运，还会告诉您幸运颜色和幸运数字。运势仅供娱乐和参考，不预测实际未来。',
    zodiacPageTitle: '星座运势指南',
    zodiacPageSubtitle: '全面了解西方占星学的12星座。详细介绍每个星座的性格、恋爱倾向、财运和相配星座。',
    elementsTitle: '四大元素与星座',
    elementItems: [
      { element: '火 🔥', signs: '白羊座、狮子座、射手座', desc: '热情、创意、行动' },
      { element: '土 🌍', signs: '金牛座、处女座、摩羯座', desc: '现实、稳定、耐心' },
      { element: '风 💨', signs: '双子座、天秤座、水瓶座', desc: '理智、沟通、灵活' },
      { element: '水 💧', signs: '巨蟹座、天蝎座、双鱼座', desc: '感性、直觉、共情' },
    ],
    zodiacDetailTitle: '12星座详细介绍',
    coreTraitsLabel: '核心特性',
    personalityLabel: '性格与特征',
    loveTrendLabel: '💕 恋爱倾向',
    moneyTrendLabel: '💰 财运倾向',
    compatibleSignsLabel: '相配星座',
    luckyLabel: '幸运',
    zodiacCTA: '🔮 查看我的星座运势',
    chineseZodiacPageTitle: '十二生肖运势指南',
    chineseZodiacPageSubtitle: '东方传统十二生肖完整指南。了解你的生肖性格、优势、弱点和相配生肖。',
    findMyZodiacTitle: '查询你的生肖',
    lunarNote: '中国十二生肖以12年为周期循环。生肖由出生年份决定。注意：如果在农历新年之前出生，属于上一年的生肖。',
    chineseDetailTitle: '十二生肖详细介绍',
    strengthsLabel: '✅ 优势',
    weaknessesLabel: '⚠️ 弱点',
    compatibleAnimalsLabel: '相配生肖',
    careersLabel: '适合职业',
    recentYearsLabel: '近年',
    animalUnit: '年',
    chineseZodiacCTA: '🔮 查看我的生肖运势',
    aboutTitle: '关于今日运势',
    aboutSubtitle: '利用AI技术分析星座和生肖的免费运势服务',
    missionTitle: '服务目的',
    missionText1: '<strong>今日运势</strong>是一项专为忙碌生活中想快速查看每日运势的人而设计的免费服务。',
    missionText2: '只需输入生日，即可同时分析西方12星座和东方12生肖，Google Gemini AI将为您生成今天的个性化运势。',
    missionText3: '除综合运、爱情运、财运、事业运四大领域外，还会告诉您幸运色和幸运数字，帮助您更积极地开始新的一天。',
    missionNote: '※ 本服务的运势是AI生成的娱乐内容，不预测实际未来，也没有科学依据。',
    featuresTitle: '服务特点',
    featureItems: [
      { icon: '🤖', title: 'AI运势生成', desc: 'Google Gemini AI综合分析您的星座和生肖，生成个性化每日运势。每天全新更新。' },
      { icon: '♈', title: '西方星座分析', desc: '根据生日精确计算12星座。涵盖白羊座至双鱼座，反映各星座特性。' },
      { icon: '🐉', title: '东方生肖分析', desc: '根据出生年份确定十二生肖，综合考量12种动物的性格和运势。' },
      { icon: '📊', title: '四大运势领域', desc: '分别分析综合运、爱情运、财运和事业运，还会告诉您幸运颜色和幸运数字。' },
      { icon: '🔒', title: '隐私保护', desc: '您的生日在生成运势后立即销毁，不会存储在服务器上。' },
      { icon: '📱', title: '移动端优化', desc: '响应式设计，适配智能手机、平板和PC，任何设备均可便捷使用。' },
    ],
    aiSystemTitle: 'AI运势系统工作原理',
    aiSystemSteps: [
      { title: '输入信息分析', desc: '根据您输入的生日和性别，自动计算西方星座和东方生肖。' },
      { title: 'AI运势生成', desc: 'Google Gemini AI综合今天的日期、星座特性和生肖性格，生成个性化运势文本。' },
      { title: '结果呈现', desc: '提供综合运、爱情运、财运和事业运，以及运势评分（满分100分）、幸运颜色和幸运数字。' },
    ],
    faqTitle: '常见问题 (FAQ)',
    faqItems: [
      { q: '运势有多准确？', a: '本服务的运势是AI生成的娱乐内容，不会科学地预测或保证未来。轻松享受即可。' },
      { q: '生日相同的人运势一样吗？', a: '不一样。运势每天根据今天日期全新生成。即使生日相同，日期不同运势也会不同。' },
      { q: '性别会影响运势吗？', a: '会。性别信息用于运势表达的自然性。相同条件下，性别不同运势措辞可能有所差异。' },
      { q: '可以分享运势结果吗？', a: '可以。在结果页面点击"分享运势"按钮，运势内容将复制到剪贴板，可通过微信等轻松分享。' },
      { q: '服务免费吗？', a: '是的，今日运势完全免费，无需注册或付费即可使用。' },
    ],
    operationTitle: '运营信息',
    opLabels: { serviceName: '服务名称', serviceUrl: '服务地址', email: '联系邮箱', started: '上线时间', tech: '使用技术' },
    zodiacPlanets: ['火星 ♂', '金星 ♀', '水星 ☿', '月亮 🌙', '太阳 ☀️', '水星 ☿', '金星 ♀', '冥王星 ♇', '木星 ♃', '土星 ♄', '天王星 ♅', '海王星 ♆'],
    chineseZodiacAnimals: ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'],
    footerDesc: '基于生日分析星座和生肖的免费AI运势服务。查看综合运、爱情运、财运和事业运。',
    footerService: '服务',
    footerPolicy: '政策',
    footerDisclaimer: '本服务的运势是AI生成的娱乐内容，不预测实际未来。',
  },

  ja: {
    formTitle: '今日の運勢',
    formSubtitle: '星座があなたの運命を囁きます',
    formHint: '生年月日を入力して今日の運勢をご確認ください',
    genderLabel: '👤 性別',
    male: '男性',
    female: '女性',
    dateLabel: '🗓️ 生年月日',
    submitBtn: '運勢を見る',
    loadingBtn: '運勢確認中...',
    loadingTitle: '運勢を読み込んでいます...',
    loadingMessages: ['星座を分析中...','宇宙のエネルギーを読んでいます...','今日の運勢を計算中...','星明かりのエネルギーを集めています...','運命の糸を結んでいます...'],
    footerText: '✦ 今日も星明かりがあなたを照らしますように ✦',
    zodiacSigns: ['おひつじ座','おうし座','ふたご座','かに座','しし座','おとめ座','てんびん座','さそり座','いて座','やぎ座','みずがめ座','うお座'],
    resultHeader: '今日の運勢結果',
    scoreLabel: '今日の運勢スコア',
    detailLabel: '詳細な運勢',
    overall: '総合運',
    love: '恋愛運',
    money: '金運',
    work: '仕事運',
    luckyItemLabel: '今日のラッキーアイテム',
    luckyColorLabel: 'ラッキーカラー',
    luckyNumberLabel: 'ラッキーナンバー',
    shareBtn: '運勢をシェア',
    copied: 'コピー済み！',
    resetBtn: 'もう一度見る',
    linkCopyBtn: 'サイトリンクをコピー',
    linkCopied: 'リンクコピー済み！',
    disclaimer: '✦ 運勢は参考程度に。あなたの努力が最も大切です ✦',
    scoreLevel: (s) => s >= 80 ? '最高の一日' : s >= 60 ? '良い一日' : s >= 40 ? '普通の一日' : '注意が必要な一日',
    quotaTitle: '本日の運勢確認上限を超えました',
    quotaMsg1: '今日は多くの方に星明かりが届いたようです 🌟',
    quotaMsg2: '深夜0時以降にもう一度ご確認ください。',
    errorTitle: 'エラー',
    back: '戻る',
    retryHint: '"もう一度見る"を押すと別の日付で確認できます',
    generalError: '運勢の読み込み中にエラーが発生しました。もう一度お試しください。',
    backHome: '← ホームへ',
    navFortune: '今日の運勢',
    navZodiac: '星座情報',
    navChineseZodiac: '十二支情報',
    navAbout: 'サイト紹介',
    howToTitle: '使い方',
    howToSteps: [
      { title: '性別を選択', desc: '男性または女性を選択してください。性別により運勢の表現が異なります。' },
      { title: '生年月日を入力', desc: '正確な生年月日を入力すると、星座と干支が自動的に計算されます。' },
      { title: '運勢を確認', desc: 'AIが今日の総合運・恋愛運・金運・仕事運を分析します。' },
    ],
    zodiacGuideTitle: '12星座案内',
    zodiacGuideTraits: ['勇敢で活動的','安定していて信頼できる','好奇心旺盛で機知に富む','感情豊かで家庭的','堂々としてカリスマ的','几帳面で分析的','バランスが取れて公平','直感的で集中力が強い','楽観的で冒険好き','真面目で目標志向','独創的で人道主義的','繊細で想像力豊か'],
    serviceIntroTitle: '🔮 サービス紹介',
    serviceIntroText: '今日の運勢は、生年月日をもとに西洋星座と東洋の干支を分析し、AIが毎日の運勢をお伝えする無料サービスです。総合運・恋愛運・金運・仕事運を毎日新しくお届けし、ラッキーカラーとラッキーナンバーもご案内します。運勢はエンタメ・参考目的で提供されており、実際の未来を予測するものではありません。',
    zodiacPageTitle: '星座運勢ガイド',
    zodiacPageSubtitle: '西洋占星術の12星座を完全解説。各星座の性格・恋愛傾向・金運・相性を詳しくご紹介します。',
    elementsTitle: '4大元素と星座',
    elementItems: [
      { element: '火 🔥', signs: 'おひつじ座・しし座・いて座', desc: '情熱的、創造的、行動的' },
      { element: '地 🌍', signs: 'おうし座・おとめ座・やぎ座', desc: '現実的、安定的、忍耐力' },
      { element: '風 💨', signs: 'ふたご座・てんびん座・みずがめ座', desc: '知的、コミュニカティブ、柔軟' },
      { element: '水 💧', signs: 'かに座・さそり座・うお座', desc: '感情的、直感的、共感力' },
    ],
    zodiacDetailTitle: '12星座詳細案内',
    coreTraitsLabel: '主な特性',
    personalityLabel: '性格・特徴',
    loveTrendLabel: '💕 恋愛傾向',
    moneyTrendLabel: '💰 金運傾向',
    compatibleSignsLabel: '相性の良い星座',
    luckyLabel: 'ラッキー',
    zodiacCTA: '🔮 自分の星座の運勢を見る',
    chineseZodiacPageTitle: '十二支運勢ガイド',
    chineseZodiacPageSubtitle: '東洋伝統の十二支完全ガイド。自分の干支の性格・強み・弱み・相性を確認しましょう。',
    findMyZodiacTitle: '自分の干支を確認',
    lunarNote: '中国の十二支は12年サイクルで繰り返されます。干支は生まれた年で決まります。ただし、旧正月以前に生まれた場合は前年の干支になります。',
    chineseDetailTitle: '十二支詳細案内',
    strengthsLabel: '✅ 強み',
    weaknessesLabel: '⚠️ 弱点',
    compatibleAnimalsLabel: '相性の良い干支',
    careersLabel: '向いている職業',
    recentYearsLabel: '近年',
    animalUnit: '年',
    chineseZodiacCTA: '🔮 自分の干支の運勢を見る',
    aboutTitle: '今日の運勢について',
    aboutSubtitle: 'AI技術で星座と干支を分析する無料運勢サービス',
    missionTitle: 'サービスの目的',
    missionText1: '<strong>今日の運勢</strong>は、忙しい日常の中で手軽に毎日の運勢を確認したい方のために作られた無料サービスです。',
    missionText2: '生年月日を入力するだけで、西洋の12星座と東洋の十二支を同時に分析し、Google Gemini AIが今日に合わせた運勢を生成します。',
    missionText3: '総合運・恋愛運・金運・仕事運の4分野に加え、ラッキーカラーとラッキーナンバーもお伝えし、前向きな一日のスタートをサポートします。',
    missionNote: '※ 本サービスの運勢はAIが生成したエンターテインメントコンテンツです。実際の未来を予測したり、科学的根拠があるものではありません。',
    featuresTitle: 'サービスの特徴',
    featureItems: [
      { icon: '🤖', title: 'AI運勢生成', desc: 'Google Gemini AIが星座と干支を総合的に分析し、パーソナライズされた毎日の運勢を生成します。毎日新しく更新されます。' },
      { icon: '♈', title: '西洋星座分析', desc: '生年月日をもとに12星座を正確に計算。おひつじ座からうお座まで各星座の特性が反映されます。' },
      { icon: '🐉', title: '東洋十二支分析', desc: '生まれた年をもとに12種類の干支を判定し、各干支の性格と運勢を総合的に考慮します。' },
      { icon: '📊', title: '4つの運勢分野', desc: '総合運・恋愛運・金運・仕事運を個別に分析。ラッキーカラーとラッキーナンバーもお知らせします。' },
      { icon: '🔒', title: 'プライバシー保護', desc: '入力された生年月日は運勢生成後即座に破棄され、サーバーに保存されません。' },
      { icon: '📱', title: 'モバイル最適化', desc: 'スマートフォン・タブレット・PCなどあらゆるデバイスで快適にご利用いただけます。' },
    ],
    aiSystemTitle: 'AI運勢システムの仕組み',
    aiSystemSteps: [
      { title: '入力情報の分析', desc: '生年月日と性別を入力すると、西洋星座と東洋十二支が自動的に計算されます。' },
      { title: 'AI運勢生成', desc: 'Google Gemini AIが今日の日付・星座の特性・干支の性格を総合して個人化された運勢テキストを生成します。' },
      { title: '結果の提供', desc: '総合運・恋愛運・金運・仕事運に加え、運勢スコア（100点満点）・ラッキーカラー・ラッキーナンバーを提供します。' },
    ],
    faqTitle: 'よくある質問 (FAQ)',
    faqItems: [
      { q: '運勢はどのくらい正確ですか？', a: '本サービスの運勢はAIが生成したエンターテインメントコンテンツです。実際の未来を科学的に予測・保証するものではありません。気軽にお楽しみください。' },
      { q: '生年月日が同じ人は運勢も同じですか？', a: 'いいえ。運勢は今日の日付をもとに毎日新しく生成されます。生年月日が同じでも日付が違えば異なる運勢になります。' },
      { q: '性別は運勢に影響しますか？', a: 'はい。性別情報は運勢表現の自然さのために使用されます。同じ条件でも性別によって運勢の文章表現が変わることがあります。' },
      { q: '運勢結果をシェアできますか？', a: 'はい。結果画面の「運勢をシェア」ボタンを押すと、運勢内容がクリップボードにコピーされます。LINEなどで簡単にシェアできます。' },
      { q: 'サービスは無料ですか？', a: 'はい。今日の運勢は完全無料サービスです。会員登録や支払い不要でご利用いただけます。' },
    ],
    operationTitle: '運営情報',
    opLabels: { serviceName: 'サービス名', serviceUrl: 'サービスURL', email: 'お問い合わせ', started: 'サービス開始', tech: '使用技術' },
    zodiacPlanets: ['火星 ♂', '金星 ♀', '水星 ☿', '月 🌙', '太陽 ☀️', '水星 ☿', '金星 ♀', '冥王星 ♇', '木星 ♃', '土星 ♄', '天王星 ♅', '海王星 ♆'],
    chineseZodiacAnimals: ['ねずみ', 'うし', 'とら', 'うさぎ', 'たつ', 'へび', 'うま', 'ひつじ', 'さる', 'とり', 'いぬ', 'いのしし'],
    footerDesc: '生年月日から星座と干支を分析するAI無料運勢サービス。総合運・恋愛運・金運・仕事運をご確認ください。',
    footerService: 'サービス',
    footerPolicy: 'ポリシー',
    footerDisclaimer: '本サービスの運勢はAIが生成したエンターテインメントコンテンツです。実際の未来を予測するものではありません。',
  },
};

export function t(lang: Lang): Translations {
  return translations[lang];
}
