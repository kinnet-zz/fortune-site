export type Lang = 'ko' | 'en' | 'zh' | 'ja';

export interface Translations {
  formTitle: string;
  formSubtitle: string;
  formHint: string;
  genderLabel: string;
  male: string;
  female: string;
  dateLabel: string;
  submitBtn: string;
  loadingBtn: string;
  footerText: string;
  zodiacSigns: string[];
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
  quotaTitle: string;
  quotaMsg1: string;
  quotaMsg2: string;
  errorTitle: string;
  back: string;
  retryHint: string;
  generalError: string;
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
  },
};

export function t(lang: Lang): Translations {
  return translations[lang];
}
