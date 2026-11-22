import type { Lang } from './i18n';

// Copy for the sections added in the silver-moon renewal (9c2c1778) and for
// labels that were still hard-coded in Korean. Kept in one place so every
// surface can be checked for completeness in tests.

export interface SiteCopy {
  brandTagline: string;
  home: {
    editorialTitleLead: string;
    editorialTitleAccent: string;
    editorialTitleTail: string;
    editorialBody: string;
    ctas: { blog: string; zodiac: string; chinese: string; about: string };
    statLabels: string[];
    points: { title: string; body: string }[];
    guidesTitle: string;
    viewAll: string;
    read: string;
    guideCards: { label: string; desc: string; tag: string }[];
    samplesTitle: string;
    samplesIntro: string;
    samples: { title: string; body: string }[];
  };
  info: {
    zodiacLink: string;
    chineseTitle: string;
    chineseLink: string;
    blogTitle: string;
    blogLink: string;
    read: string;
    faq: { q: string; a: string }[];
    aboutExtra: string;
  };
  about: {
    editorialTitle: string;
    operatorName: string;
    operatorRole: string;
    body1: string;
    body2: string;
    emailCta: string;
    contactCta: string;
  };
  zodiac: {
    heroLead: string;
    heroAccent: string;
    findTitle: string;
    findHint: string;
    guideLink: string;
    ctaTitle: string;
  };
  chineseZodiac: {
    elementChip: string;
    guideLink: string;
    ctaTitle: string;
  };
  blog: {
    titleLead: string;
    titleAccent: string;
    intro: string;
    articlesUnit: string;
    dailyKicker: string;
    dailyTitle: string;
    dailyDesc: string;
    dailyCta: string;
    topicsLabel: string;
    featuredLabel: string;
    readSuffix: string;
    ctaTitle: string;
    ctaButton: string;
    authorName: string;
    authorRole: string;
    authorBio: string;
    aboutLink: string;
    contactLink: string;
  };
  articleNotice: string;
  baseCompatible: string;
  minutesRead: (minutes: number) => string;
}

export const SITE_COPY: Record<Lang, SiteCopy> = {
  ko: {
    brandTagline: '별자리 · 운세',
    home: {
      editorialTitleLead: 'StarFate는 별자리와 12지를 ',
      editorialTitleAccent: '하루의 자기성찰 언어',
      editorialTitleTail: '로 풀어 쓰는 운세 가이드입니다.',
      editorialBody:
        '생년월일 기반 운세 도구는 빠른 확인을 위한 기능이고, 사이트의 핵심은 별자리·동양 12지·수비학·타로를 문화적 배경과 함께 설명하는 해석 콘텐츠입니다. 운세는 예언이 아니라 오늘의 감정, 관계, 선택을 돌아보는 가벼운 참고 자료로 제공합니다.',
      ctas: { blog: '가이드 블로그', zodiac: '12별자리 백과', chinese: '12지 띠 백과', about: '편집 기준' },
      statLabels: ['별자리 해석', '에디토리얼 가이드', '언어 지원'],
      points: [
        {
          title: '문화적 맥락을 먼저 설명합니다',
          body: '서양 황도대와 동양 12지는 시대와 지역에 따라 다르게 발전했습니다. StarFate는 운세 문장만 보여주기보다 각 상징이 어떤 배경에서 쓰였는지 함께 안내합니다.',
        },
        {
          title: '오락과 사실을 구분합니다',
          body: '운세는 미래 예측이 아니라 자기성찰을 돕는 가벼운 콘텐츠입니다. 천문학적 사실, 역사 자료, 점성술 해석을 같은 문장 안에서 섞지 않도록 구분합니다.',
        },
        {
          title: '개인정보를 저장하지 않습니다',
          body: '생년월일은 별자리와 12지를 계산하고 운세 문장을 생성하는 순간에만 사용됩니다. 결과 확인 뒤 서버에 별도 프로필로 저장하지 않습니다.',
        },
      ],
      guidesTitle: '천천히 읽는 운세 이야기',
      viewAll: '전체 보기',
      read: '읽기',
      guideCards: [
        {
          label: '운세를 건강하게 읽는 법',
          desc: '운세를 예언이 아니라 하루의 의도 설정과 자기 점검 도구로 활용하는 방법',
          tag: '가이드',
        },
        {
          label: '별자리, 왜 자꾸 보게 될까?',
          desc: '밤하늘의 역사와 바넘 효과, 연애의 실제 장면으로 풀어본 별자리 이야기',
          tag: '별자리',
        },
        {
          label: '동양 12지와 서양 별자리 비교',
          desc: '두 전통이 성격과 운명을 설명하는 방식의 차이와 공통점',
          tag: '비교',
        },
      ],
      samplesTitle: '해석 예시로 먼저 살펴보기',
      samplesIntro:
        '생년월일을 입력하기 전에 아래 세 가지 예시로 해석의 결을 먼저 볼 수 있습니다. 입력하면 같은 항목이 내 별자리와 오늘 날짜에 맞춰 채워집니다.',
      samples: [
        {
          title: '별자리 해석 예시',
          body: '처녀자리는 세부를 정리하는 힘을 상징합니다. 오늘의 조언은 “완벽한 결과”보다 “확인 가능한 다음 단계”를 세우는 쪽에 가깝습니다.',
        },
        {
          title: '12지 해석 예시',
          body: '용띠는 추진력과 표현력을 상징합니다. 다만 운세 해석에서는 강한 행동력만이 아니라 주변과 속도를 맞추는 균형도 함께 봅니다.',
        },
        {
          title: '자기성찰 질문',
          body: '오늘의 운세를 읽은 뒤에는 “지금 미루는 결정은 무엇인가”, “감정이 앞선 판단은 없는가”처럼 행동으로 옮길 질문 하나를 남기는 것이 좋습니다.',
        },
      ],
    },
    info: {
      zodiacLink: '12별자리 상세 가이드',
      chineseTitle: '동양 12지 띠 안내',
      chineseLink: '12지 상세 가이드',
      blogTitle: '별자리 & 운세 가이드',
      blogLink: '전체 가이드 블로그',
      read: '읽기',
      faq: [
        {
          q: '오늘의 운세는 매일 바뀌나요?',
          a: '네. 오늘 날짜를 기준으로 별자리와 띠의 상징을 다시 조합해 매일 다른 참고 문장을 제공합니다. 같은 생년월일이라도 날짜가 바뀌면 결과가 달라집니다.',
        },
        {
          q: '생년월일 정보가 저장되나요?',
          a: '입력하신 생년월일은 운세 생성에만 사용되며 서버에 별도 저장되지 않습니다. 다만 서비스 운영을 위한 접속 로그와, 사용자가 동의한 경우에만 분석·광고 쿠키가 처리될 수 있습니다. 자세한 내용은 개인정보처리방침을 확인해 주세요.',
        },
        {
          q: '운세 결과는 얼마나 정확한가요?',
          a: '본 서비스의 운세는 오락 및 자기성찰 목적의 참고 콘텐츠입니다. 실제 미래를 예측하지 않으며, 중요한 결정의 근거로 사용하지 마세요.',
        },
        {
          q: '별자리와 띠는 어떻게 계산되나요?',
          a: '서양 별자리는 생년월일의 월·일을 기준으로, 동양 띠는 출생 연도를 기준으로 계산됩니다. 서양 별자리는 12개(양자리~물고기자리), 동양 띠는 12가지(쥐~돼지)입니다.',
        },
        {
          q: '서비스는 무료인가요?',
          a: '네, 완전 무료입니다. 생년월일과 성별만 입력하면 종합운·연애운·금전운·직업운·행운의 색·행운의 숫자를 바로 확인할 수 있습니다.',
        },
      ],
      aboutExtra:
        'starfate.day는 별자리와 동양 12지를 함께 읽는 무료 운세 가이드입니다. 한국어·영어·일본어를 지원하고, 타로와 별자리 궁합 등 가볍게 즐길 콘텐츠를 제공합니다. 모든 운세는 오락과 자기성찰을 위한 참고 자료입니다.',
    },
    about: {
      editorialTitle: '콘텐츠 운영 및 편집 기준',
      operatorName: 'StarFate 운영자',
      operatorRole: '작성·검수 책임',
      body1:
        'StarFate는 별자리와 동양 12지, 수비학과 타로를 문화적 배경과 자기성찰의 관점에서 소개하는 개인 운영 콘텐츠 서비스입니다. 운영자가 주제를 선정하고 글의 작성과 최종 검수를 담당합니다.',
      body2:
        '사실을 다루는 글은 가능한 한 원 논문·공식기관·학술 자료를 확인하고, 출처를 확인할 수 없는 단정적 표현은 사용하지 않는 것을 원칙으로 합니다. 점성술 해석과 일일 운세는 과학적 예측이 아닌 오락 및 자기성찰용 참고 콘텐츠로 구분합니다. 오류나 수정 요청은 아래 이메일로 접수합니다.',
      emailCta: '✉ 문의하기',
      contactCta: '📝 문의 페이지',
    },
    zodiac: {
      heroLead: '열두 개의 별자리,',
      heroAccent: '열두 가지 삶의 결',
      findTitle: '내 별자리 확인하기',
      findHint: '생일을 눌러 상세 가이드로 이동하세요',
      guideLink: '상세 가이드',
      ctaTitle: '오늘 내 별자리의 운세가 궁금하다면',
    },
    chineseZodiac: {
      elementChip: '음양오행',
      guideLink: '상세 가이드',
      ctaTitle: '오늘 내 띠의 운세가 궁금하다면',
    },
    blog: {
      titleLead: '별자리 & ',
      titleAccent: '운세 가이드',
      intro: '점성술의 역사, 별자리 궁합, 운세 해석법까지 — 깊이 있는 아스트롤로지 지식을 쌓아보세요.',
      articlesUnit: 'Articles',
      dailyKicker: '매일 자정 업데이트',
      dailyTitle: '오늘의 12별자리 일일 운세',
      dailyDesc: '종합·사랑·금전·건강 운세와 행운 아이템까지 매일 새롭게 업데이트됩니다.',
      dailyCta: '바로 보기',
      topicsLabel: '주제',
      featuredLabel: '추천',
      readSuffix: '읽기',
      ctaTitle: '가이드를 읽었다면, 오늘의 운세도 확인해보세요',
      ctaButton: '오늘의 운세 무료로 보기',
    authorName: 'StarFate 운영자',
    authorRole: '콘텐츠 작성·검수',
    authorBio:
      'StarFate의 가이드 글은 운영자가 주제를 선정하고 작성·검수합니다. 역사·과학·심리학에 관한 사실 주장은 확인 가능한 자료와 대조하며, 점성술 해석은 문화적 관습 및 오락 콘텐츠임을 구분해 설명합니다. 자동 생성된 일일 운세는 편집형 가이드 글과 별도로 운영합니다.',
    aboutLink: '사이트 소개',
    contactLink: '문의하기',
    },
    baseCompatible: '궁합',
    articleNotice: '',
    minutesRead: (m) => `${m}분 읽기`,
  },

  en: {
    brandTagline: 'Zodiac · Fortune',
    home: {
      editorialTitleLead: 'StarFate reads the zodiac and the twelve animals as ',
      editorialTitleAccent: 'a language for everyday self-reflection',
      editorialTitleTail: '.',
      editorialBody:
        'A birth-date reading is the quick check; the heart of the site is editorial content that explains the zodiac, the Eastern twelve animals, numerology and tarot together with their cultural background. Fortune here is not a prophecy but a light reference for looking back on today\'s feelings, relationships and choices.',
      ctas: { blog: 'Guide blog', zodiac: 'Zodiac encyclopedia', chinese: 'Chinese zodiac', about: 'Editorial standards' },
      statLabels: ['Sign guides', 'Editorial guides', 'Languages'],
      points: [
        {
          title: 'We explain the cultural context first',
          body: 'The Western zodiac and the Eastern twelve animals developed differently across eras and regions. StarFate explains where each symbol comes from instead of showing only a fortune sentence.',
        },
        {
          title: 'We keep entertainment and fact apart',
          body: 'Fortune is light content for self-reflection, not prediction. Astronomical facts, historical records and astrological interpretation are kept distinct instead of being blended into one sentence.',
        },
        {
          title: 'We do not store personal data',
          body: 'Your birth date is used only at the moment we calculate your sign and animal and generate the reading. It is not saved as a profile on the server.',
        },
      ],
      guidesTitle: 'Fortune notes, read slowly',
      viewAll: 'View all',
      read: 'Read',
      guideCards: [
        {
          label: 'How to read a daily fortune well',
          desc: 'Using fortune not as prophecy but as a way to set an intention and check in with yourself',
          tag: 'Guide',
        },
        {
          label: 'Why the zodiac keeps catching your eye',
          desc: 'Night-sky history, the Barnum effect, and a real scene from love — a zodiac story',
          tag: 'Zodiac',
        },
        {
          label: 'Eastern animals and Western signs compared',
          desc: 'How the two traditions differ, and agree, in explaining character and fate',
          tag: 'Compare',
        },
      ],
      samplesTitle: 'Look at a sample reading first',
      samplesIntro:
        "Before entering your birth date, you can get the tone of a reading from the three examples below. Once you enter yours, the same items fill in for your sign and today's date.",
      samples: [
        {
          title: 'Zodiac reading example',
          body: "Virgo symbolizes the power to put details in order. Today's advice leans less toward a 'perfect result' than toward 'a next step you can verify'.",
        },
        {
          title: 'Chinese zodiac example',
          body: 'The Dragon symbolizes drive and expression. In a reading we also look at the balance of matching pace with those around you, not only at strong action.',
        },
        {
          title: 'A question for reflection',
          body: "After reading today's fortune, leave one question you can act on — 'What decision am I postponing?' or 'Is any judgment being led by emotion?'",
        },
      ],
    },
    info: {
      zodiacLink: 'Full guide to the 12 signs',
      chineseTitle: 'The Eastern twelve animals',
      chineseLink: 'Full guide to the 12 animals',
      blogTitle: 'Zodiac & fortune guides',
      blogLink: 'All guides',
      read: 'Read',
      faq: [
        {
          q: "Does today's fortune change every day?",
          a: "Yes. We recombine the symbols of your sign and animal for today's date, so the reference sentences differ each day. Even with the same birth date, a new date brings a new result.",
        },
        {
          q: 'Is my birth date stored?',
          a: 'The birth date you enter is used only to generate the fortune and is not stored separately on the server. Access logs kept to operate the service, and analytics or advertising cookies only when you consent, may be processed. See the Privacy Policy for details.',
        },
        {
          q: 'How accurate is the fortune?',
          a: 'The fortune on this site is reference content for entertainment and self-reflection. It does not predict the actual future; please do not use it as the basis for important decisions.',
        },
        {
          q: 'How are the zodiac sign and animal calculated?',
          a: 'The Western sign is calculated from the month and day of your birth date, and the Eastern animal from your birth year. There are 12 Western signs (Aries to Pisces) and 12 animals (Rat to Pig).',
        },
        {
          q: 'Is the service free?',
          a: 'Yes, it is completely free. Enter only your birth date and gender to see overall, love, money and career fortune along with your lucky color and lucky number.',
        },
      ],
      aboutExtra:
        'starfate.day is a free fortune guide that reads the Western zodiac and the Eastern twelve animals together. It supports Korean, English and Japanese, and offers light content such as tarot and zodiac compatibility. All fortunes are reference material for entertainment and self-reflection.',
    },
    about: {
      editorialTitle: 'Content operations and editorial standards',
      operatorName: 'StarFate editor',
      operatorRole: 'Writing and final review',
      body1:
        'StarFate is a personally operated content service that introduces the zodiac, the Eastern twelve animals, numerology and tarot from the perspective of cultural background and self-reflection. The operator chooses the topics and is responsible for writing and final review.',
      body2:
        'For articles that deal with facts, we check original papers, official institutions and academic sources wherever possible, and we avoid definitive claims whose sources cannot be verified. Astrological interpretation and daily fortunes are treated as entertainment and self-reflection reference, not scientific prediction. Corrections can be sent to the email below.',
      emailCta: '✉ Email us',
      contactCta: '📝 Contact page',
    },
    zodiac: {
      heroLead: 'Twelve signs,',
      heroAccent: 'twelve textures of a life',
      findTitle: 'Find your sign',
      findHint: 'Tap a birthday range to open the full guide',
      guideLink: 'Full guide',
      ctaTitle: "Curious about today's fortune for your sign?",
    },
    chineseZodiac: {
      elementChip: 'Yin-yang & five elements',
      guideLink: 'Full guide',
      ctaTitle: "Curious about today's fortune for your animal?",
    },
    blog: {
      titleLead: 'Zodiac & ',
      titleAccent: 'fortune guides',
      intro: 'From the history of astrology to zodiac compatibility and how to read a fortune — build a little astrological knowledge.',
      articlesUnit: 'Articles',
      dailyKicker: 'Updated every midnight',
      dailyTitle: "Today's horoscope for all 12 signs",
      dailyDesc: 'Overall, love, money and health fortune plus a lucky item — refreshed every day.',
      dailyCta: 'Read now',
      topicsLabel: 'Topics',
      featuredLabel: 'Featured',
      readSuffix: 'read',
      ctaTitle: "Once you've read the guides, check today's fortune too",
      ctaButton: "See today's fortune free",
    authorName: 'StarFate editor',
    authorRole: 'Writing and review',
    authorBio:
      'Guides on StarFate are chosen, written and reviewed by the editor. Claims about history, science and psychology are checked against sources that can be verified, and astrological readings are explained as cultural custom and entertainment. Automatically generated daily fortunes are run separately from the edited guides.',
    aboutLink: 'About the site',
    contactLink: 'Contact',
    },
    baseCompatible: 'Compatibility',
    articleNotice: '',
    minutesRead: (m) => `${m} min read`,
  },

  zh: {
    brandTagline: '星座 · 运势',
    home: {
      editorialTitleLead: 'StarFate 把星座与十二生肖写成',
      editorialTitleAccent: '每日自省的语言',
      editorialTitleTail: '，是一份运势解读指南。',
      editorialBody:
        '生日运势工具用于快速查看，网站的核心是把星座、东方十二生肖、数字命理与塔罗连同文化背景一起讲清楚的解读内容。运势不是预言，而是回看今日情绪、关系与选择的一份轻参考。',
      ctas: { blog: '指南博客', zodiac: '十二星座百科', chinese: '十二生肖百科', about: '编辑标准' },
      statLabels: ['星座解读', '编辑指南', '语言支持'],
      points: [
        {
          title: '先说明文化背景',
          body: '西方黄道十二宫与东方十二生肖在不同时代与地域各自发展。StarFate 不只给出运势句子，也会说明每个象征从何而来。',
        },
        {
          title: '区分娱乐与事实',
          body: '运势不是预测，而是帮助自省的轻内容。天文事实、历史资料与占星解读不会混在同一句里。',
        },
        {
          title: '不保存个人信息',
          body: '生日只在计算星座与生肖、生成运势句子的瞬间使用，确认结果后不会在服务器保存为个人资料。',
        },
      ],
      guidesTitle: '慢慢读的运势故事',
      viewAll: '查看全部',
      read: '阅读',
      guideCards: [
        {
          label: '如何健康地看待运势',
          desc: '把运势当作设定意图、自我检视的工具，而不是预言',
          tag: '指南',
        },
        {
          label: '为什么总忍不住看星座？',
          desc: '从夜空的历史、巴纳姆效应到恋爱中的真实场景，讲述星座的故事',
          tag: '星座',
        },
        {
          label: '东方十二生肖与西方星座的比较',
          desc: '两种传统解释性格与命运的方式有何异同',
          tag: '比较',
        },
      ],
      samplesTitle: '先看解读示例',
      samplesIntro: '输入生日之前，可以先通过下面三个示例了解解读的风格。输入后，同样的项目会按你的星座与今天的日期填入。',
      samples: [
        {
          title: '星座解读示例',
          body: '处女座象征整理细节的力量。今天的建议与其说追求“完美结果”，不如说设定一个“可以确认的下一步”。',
        },
        {
          title: '生肖解读示例',
          body: '龙象征推动力与表现力。在解读中，我们不仅看强劲的行动力，也看与周围保持节奏的平衡。',
        },
        {
          title: '自省提问',
          body: '读完今日运势后，留下一个可以付诸行动的问题，比如“我现在在拖延什么决定”“有没有被情绪带偏的判断”。',
        },
      ],
    },
    info: {
      zodiacLink: '十二星座详细指南',
      chineseTitle: '东方十二生肖指南',
      chineseLink: '十二生肖详细指南',
      blogTitle: '星座与运势指南',
      blogLink: '全部指南',
      read: '阅读',
      faq: [
        {
          q: '今日运势每天都会变吗？',
          a: '会。根据今天的日期重新组合星座与生肖的象征，因此每天提供不同的参考句子。即使生日相同，日期不同结果也会不同。',
        },
        {
          q: '会保存生日信息吗？',
          a: '输入的生日仅用于生成运势，不会在服务器另存。为运营服务而产生的访问日志，以及仅在您同意时处理的分析与广告 Cookie，可能会被处理。详情请查看隐私政策。',
        },
        {
          q: '运势结果有多准确？',
          a: '本站运势是供娱乐与自省参考的内容，不预测实际未来，请勿作为重要决定的依据。',
        },
        {
          q: '星座和生肖如何计算？',
          a: '西方星座按生日的月与日计算，东方生肖按出生年份计算。西方星座共12个（白羊座至双鱼座），生肖共12个（鼠至猪）。',
        },
        {
          q: '服务免费吗？',
          a: '是的，完全免费。只需输入生日与性别，即可查看综合运、爱情运、财运、事业运以及幸运色与幸运数字。',
        },
      ],
      aboutExtra:
        'starfate.day 是一份把西方星座与东方十二生肖放在一起阅读的免费运势指南。支持韩语、英语和日语，并提供塔罗、星座配对等轻松内容。所有运势仅供娱乐与自省参考。',
    },
    about: {
      editorialTitle: '内容运营与编辑标准',
      operatorName: 'StarFate 运营者',
      operatorRole: '撰写与审校负责',
      body1:
        'StarFate 是个人运营的内容服务，从文化背景与自省的视角介绍星座、东方十二生肖、数字命理与塔罗。由运营者选定主题，并负责撰写与最终审校。',
      body2:
        '涉及事实的文章尽量核对原始论文、官方机构与学术资料，原则上不使用无法确认来源的断定表达。占星解读与每日运势属于娱乐与自省参考，而非科学预测。错误或修改请求请发送至下方邮箱。',
      emailCta: '✉ 联系我们',
      contactCta: '📝 联系页面',
    },
    zodiac: {
      heroLead: '十二个星座，',
      heroAccent: '十二种人生的质地',
      findTitle: '查看我的星座',
      findHint: '点击生日范围进入详细指南',
      guideLink: '详细指南',
      ctaTitle: '想知道今天我的星座运势吗？',
    },
    chineseZodiac: {
      elementChip: '阴阳五行',
      guideLink: '详细指南',
      ctaTitle: '想知道今天我的生肖运势吗？',
    },
    blog: {
      titleLead: '星座与',
      titleAccent: '运势指南',
      intro: '从占星史到星座配对、运势解读法——积累深入的占星知识。',
      articlesUnit: '篇文章',
      dailyKicker: '每日午夜更新',
      dailyTitle: '今日十二星座运势',
      dailyDesc: '综合、爱情、财运、健康运势与幸运物品，每天更新。',
      dailyCta: '立即查看',
      topicsLabel: '主题',
      featuredLabel: '精选',
      readSuffix: '阅读',
      ctaTitle: '读完指南，也来看看今天的运势',
      ctaButton: '免费查看今日运势',
    authorName: 'StarFate 运营者',
    authorRole: '内容撰写与审校',
    authorBio:
      'StarFate 的指南文章由运营者选题、撰写与审校。关于历史、科学与心理学的事实主张会与可核对的资料对照，占星解读则说明为文化习俗与娱乐内容。自动生成的每日运势与编辑类指南分开运营。',
    aboutLink: '关于本站',
    contactLink: '联系我们',
    },
    baseCompatible: '配对',
    articleNotice: '',
    minutesRead: (m) => `${m}分钟阅读`,
  },

  ja: {
    brandTagline: '星座 · 運勢',
    home: {
      editorialTitleLead: 'StarFateは星座と十二支を',
      editorialTitleAccent: '毎日の自己省察のことば',
      editorialTitleTail: 'として読み解く運勢ガイドです。',
      editorialBody:
        '生年月日による運勢ツールは手早く確認するための機能で、サイトの中心は星座・東洋の十二支・数秘術・タロットを文化的背景とともに解説する読み物です。運勢は予言ではなく、今日の感情や関係、選択を振り返るための軽い参考として提供します。',
      ctas: { blog: 'ガイドブログ', zodiac: '12星座図鑑', chinese: '十二支図鑑', about: '編集基準' },
      statLabels: ['星座の解説', '編集ガイド', '言語対応'],
      points: [
        {
          title: '文化的な背景から説明します',
          body: '西洋の黄道十二宮と東洋の十二支は、時代や地域によって異なる発展を遂げました。StarFateは運勢の一文だけでなく、その象徴がどのような背景で使われてきたかを添えます。',
        },
        {
          title: '娯楽と事実を分けて扱います',
          body: '運勢は未来予測ではなく、自己省察のための軽いコンテンツです。天文学的な事実、歴史資料、占星術の解釈を同じ文の中で混ぜないように区別します。',
        },
        {
          title: '個人情報を保存しません',
          body: '生年月日は星座と十二支を計算し、運勢の文章を生成する瞬間にのみ使用します。結果を確認した後、サーバーにプロフィールとして保存しません。',
        },
      ],
      guidesTitle: 'ゆっくり読む運勢の物語',
      viewAll: 'すべて見る',
      read: '読む',
      guideCards: [
        {
          label: '運勢を健全に読む方法',
          desc: '予言ではなく、その日の意図を定め自分を点検する道具として使う',
          tag: 'ガイド',
        },
        {
          label: '星座を、なぜ何度も見てしまうのか',
          desc: '夜空の歴史、バーナム効果、恋愛の実際の場面から語る星座の話',
          tag: '星座',
        },
        {
          label: '東洋の十二支と西洋の星座を比べる',
          desc: '性格と運命を説明する二つの伝統の違いと共通点',
          tag: '比較',
        },
      ],
      samplesTitle: 'まずは解釈例を見る',
      samplesIntro:
        '生年月日を入力する前に、下の三つの例で読み解きの雰囲気を確かめられます。入力すると同じ項目があなたの星座と今日の日付に合わせて埋まります。',
      samples: [
        {
          title: '星座の解釈例',
          body: '乙女座は細部を整える力を象徴します。今日の助言は「完璧な結果」よりも「確認できる次の一歩」を立てることに近いものです。',
        },
        {
          title: '十二支の解釈例',
          body: '辰（龍）は推進力と表現力を象徴します。運勢の読み解きでは、強い行動力だけでなく周囲と歩調を合わせる均衡も見ます。',
        },
        {
          title: '自己省察の問い',
          body: '今日の運勢を読んだあとは、「いま先延ばしにしている決断は何か」「感情が先立った判断はないか」のように、行動に移せる問いを一つ残すのがおすすめです。',
        },
      ],
    },
    info: {
      zodiacLink: '12星座の詳しいガイド',
      chineseTitle: '東洋の十二支ガイド',
      chineseLink: '十二支の詳しいガイド',
      blogTitle: '星座と運勢のガイド',
      blogLink: 'ガイド一覧',
      read: '読む',
      faq: [
        {
          q: '今日の運勢は毎日変わりますか？',
          a: 'はい。今日の日付をもとに星座と十二支の象徴を組み直し、毎日異なる参考の文章をお届けします。同じ生年月日でも日付が変われば結果も変わります。',
        },
        {
          q: '生年月日は保存されますか？',
          a: '入力いただいた生年月日は運勢の生成にのみ使用し、サーバーに別途保存しません。サービス運営のためのアクセスログ、および同意いただいた場合に限り分析・広告Cookieが処理されることがあります。詳しくはプライバシーポリシーをご確認ください。',
        },
        {
          q: '運勢はどのくらい正確ですか？',
          a: '本サービスの運勢は娯楽と自己省察のための参考コンテンツです。実際の未来を予測するものではなく、重要な判断の根拠として使用しないでください。',
        },
        {
          q: '星座と十二支はどう計算しますか？',
          a: '西洋の星座は生年月日の月日から、東洋の十二支は生まれた年から計算します。西洋の星座は12種類（牡羊座〜魚座）、東洋の十二支は12種類（ねずみ〜いのしし）です。',
        },
        {
          q: 'サービスは無料ですか？',
          a: 'はい、完全無料です。生年月日と性別を入力するだけで、総合運・恋愛運・金運・仕事運、ラッキーカラーとラッキーナンバーをすぐに確認できます。',
        },
      ],
      aboutExtra:
        'starfate.dayは西洋の星座と東洋の十二支をあわせて読む無料の運勢ガイドです。韓国語・英語・日本語に対応し、タロットや星座相性など気軽に楽しめるコンテンツを提供しています。すべての運勢は娯楽と自己省察のための参考資料です。',
    },
    about: {
      editorialTitle: 'コンテンツ運営と編集基準',
      operatorName: 'StarFate 運営者',
      operatorRole: '執筆・校閲責任',
      body1:
        'StarFateは星座・東洋の十二支・数秘術・タロットを、文化的な背景と自己省察の視点から紹介する個人運営のコンテンツサービスです。運営者がテーマを選び、執筆と最終校閲を担当します。',
      body2:
        '事実を扱う記事は可能な限り原論文・公的機関・学術資料を確認し、出典を確認できない断定的な表現は使わないことを原則とします。占星術の解釈と毎日の運勢は科学的予測ではなく、娯楽・自己省察のための参考として区別します。誤りや修正のご依頼は下記メールで受け付けます。',
      emailCta: '✉ お問い合わせ',
      contactCta: '📝 お問い合わせページ',
    },
    zodiac: {
      heroLead: '十二の星座、',
      heroAccent: '十二の人生の手ざわり',
      findTitle: '自分の星座を確認',
      findHint: '誕生日の範囲を押すと詳しいガイドへ移動します',
      guideLink: '詳しいガイド',
      ctaTitle: '今日の自分の星座の運勢が気になったら',
    },
    chineseZodiac: {
      elementChip: '陰陽五行',
      guideLink: '詳しいガイド',
      ctaTitle: '今日の自分の干支の運勢が気になったら',
    },
    blog: {
      titleLead: '星座と',
      titleAccent: '運勢のガイド',
      intro: '占星術の歴史から星座相性、運勢の読み解き方まで——アストロロジーの知識を深めましょう。',
      articlesUnit: '記事',
      dailyKicker: '毎日0時に更新',
      dailyTitle: '今日の12星座の運勢',
      dailyDesc: '総合・恋愛・金運・健康の運勢とラッキーアイテムを毎日更新します。',
      dailyCta: '今すぐ見る',
      topicsLabel: 'テーマ',
      featuredLabel: '注目',
      readSuffix: '読む',
      ctaTitle: 'ガイドを読んだら、今日の運勢も確認してみましょう',
      ctaButton: '今日の運勢を無料で見る',
    authorName: 'StarFate 運営者',
    authorRole: '記事の執筆・校閲',
    authorBio:
      'StarFateのガイド記事は運営者がテーマを選び、執筆・校閲しています。歴史・科学・心理学に関する事実の主張は確認できる資料と照らし合わせ、占星術の解釈は文化的な慣習および娯楽コンテンツとして区別して説明します。自動生成される毎日の運勢は、編集されたガイド記事とは別に運用しています。',
    aboutLink: 'サイトについて',
    contactLink: 'お問い合わせ',
    },
    baseCompatible: '相性',
    articleNotice: '',
    minutesRead: (m) => `${m}分で読めます`,
  },
};

export function siteCopy(lang: Lang): SiteCopy {
  return SITE_COPY[lang];
}
