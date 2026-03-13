export type IdolLang = 'ko' | 'en' | 'zh' | 'ja';
export type Gender = 'female' | 'male';

export type Agency = 'SM' | 'JYP' | 'YG' | 'HYBE';

export interface IdolTranslations {
  pageTitle: string;
  pageSubtitle: string;
  uploadTitle: string;
  uploadDesc: string;
  uploadBtn: string;
  cameraBtn: string;
  privacyNote: string;
  analyzeBtn: string;
  analyzing: string;
  analyzingMessages: string[];
  resultTitle: string;
  agencyLabel: string;
  summaryLabel: string;
  featuresLabel: string;
  eyes: string;
  nose: string;
  lips: string;
  overall: string;
  similarIdolLabel: string;
  shareBtn: string;
  retryBtn: string;
  errorMsg: string;
  noFaceMsg: string;
  quotaMsg: string;
  fileTooLarge: string;
  invalidFile: string;
  agencyDesc: Record<Agency, string>;
  agencyTagline: Record<Agency, string>;
  langLabel: string;
  disclaimer: string;
  genderLabel: string;
  genderFemale: string;
  genderMale: string;
}

const translations: Record<IdolLang, IdolTranslations> = {
  ko: {
    pageTitle: '나는 어느 소속사 스타일?',
    pageSubtitle: '각 소속사 아이돌의 외모 특성을 바탕으로, 당신에게 어울리는 소속사를 찾아드립니다',
    uploadTitle: '사진을 업로드하세요',
    uploadDesc: '정면 얼굴 사진이 가장 정확합니다',
    uploadBtn: '사진 선택',
    cameraBtn: '카메라 촬영',
    privacyNote: '🔒 이미지는 분석 후 즉시 삭제됩니다',
    analyzeBtn: '소속사 테스트 시작',
    analyzing: '분석 중...',
    analyzingMessages: [
      '눈매를 분석하는 중...',
      '소속사 기준과 비교하는 중...',
      '아이돌 데이터베이스 검색 중...',
      '코와 입꼬리 분석 중...',
      '결과를 정리하는 중...',
    ],
    resultTitle: '분석 결과',
    agencyLabel: '소속사 매칭',
    summaryLabel: '종합 분석',
    featuresLabel: '부위별 분석',
    eyes: '눈매',
    nose: '코',
    lips: '입꼬리',
    overall: '전체 인상',
    similarIdolLabel: '비슷한 스타일',
    shareBtn: '결과 공유하기',
    retryBtn: '다시 분석하기',
    errorMsg: '분석에 실패했습니다. 다른 사진으로 다시 시도해주세요.',
    noFaceMsg: '얼굴이 인식되지 않았습니다. 정면 얼굴이 잘 보이는 사진을 올려주세요.',
    quotaMsg: '일일 분석 한도를 초과했습니다. 자정 이후 다시 이용해주세요.',
    fileTooLarge: '파일 크기가 5MB를 초과합니다.',
    invalidFile: 'JPG, PNG, WEBP 형식만 지원합니다.',
    agencyDesc: {
      SM: '도시적이고 클래식한 미인형',
      JYP: '건강하고 발랄한 청춘 스타일',
      YG: '강렬하고 개성있는 카리스마',
      HYBE: '세련되고 글로벌한 청량함',
    },
    agencyTagline: {
      SM: '우아하고 균형잡힌 이목구비',
      JYP: '친근하고 밝은 에너지',
      YG: '힙하고 트렌디한 마스크',
      HYBE: '소년/소녀미의 청량한 매력',
    },
    langLabel: 'Language',
    disclaimer: '✦ 본 서비스는 AI 기반 오락 콘텐츠입니다. 실제 소속사 오디션 기준과 다를 수 있습니다 ✦',
    genderLabel: '성별 선택',
    genderFemale: '여자',
    genderMale: '남자',
  },
  en: {
    pageTitle: 'Which K-Pop Agency Fits Your Face?',
    pageSubtitle: 'See which agency\'s idol aesthetic matches your face — SM · JYP · YG · HYBE',
    uploadTitle: 'Upload Your Photo',
    uploadDesc: 'A front-facing photo gives the most accurate result',
    uploadBtn: 'Choose Photo',
    cameraBtn: 'Take Photo',
    privacyNote: '🔒 Your image is deleted immediately after analysis',
    analyzeBtn: 'Analyze My Face',
    analyzing: 'Analyzing...',
    analyzingMessages: [
      'Analyzing eye shape...',
      'Comparing with agency standards...',
      'Searching idol database...',
      'Analyzing nose and lip shape...',
      'Finalizing results...',
    ],
    resultTitle: 'Analysis Result',
    agencyLabel: 'Agency Match',
    summaryLabel: 'Overall Analysis',
    featuresLabel: 'Feature Breakdown',
    eyes: 'Eyes',
    nose: 'Nose',
    lips: 'Lips',
    overall: 'Overall Impression',
    similarIdolLabel: 'Similar Style',
    shareBtn: 'Share Result',
    retryBtn: 'Try Again',
    errorMsg: 'Analysis failed. Please try with a different photo.',
    noFaceMsg: 'No face detected. Please upload a photo with a clearly visible front-facing face.',
    quotaMsg: 'Daily limit reached. Please try again after midnight.',
    fileTooLarge: 'File size exceeds 5MB.',
    invalidFile: 'Only JPG, PNG, and WEBP formats are supported.',
    agencyDesc: {
      SM: 'Classic, polished beauty',
      JYP: 'Fresh, energetic youth style',
      YG: 'Bold, charismatic presence',
      HYBE: 'Refined, global appeal',
    },
    agencyTagline: {
      SM: 'Elegant and balanced features',
      JYP: 'Friendly and bright energy',
      YG: 'Hip and trendy vibe',
      HYBE: 'Fresh boyish/girlish charm',
    },
    langLabel: 'Language',
    disclaimer: '✦ This is AI-based entertainment content. Results may differ from actual agency audition standards ✦',
    genderLabel: 'Select Gender',
    genderFemale: 'Female',
    genderMale: 'Male',
  },
  zh: {
    pageTitle: '我是哪个公司的风格？',
    pageSubtitle: '根据各大公司偶像的外貌特征，为您找到最匹配的经纪公司',
    uploadTitle: '上传您的照片',
    uploadDesc: '正面照效果最佳',
    uploadBtn: '选择照片',
    cameraBtn: '拍摄照片',
    privacyNote: '🔒 图片分析后立即删除',
    analyzeBtn: '开始分析',
    analyzing: '分析中...',
    analyzingMessages: [
      '分析眼型中...',
      '与公司标准对比中...',
      '搜索偶像数据库...',
      '分析鼻子和嘴型...',
      '整理结果中...',
    ],
    resultTitle: '分析结果',
    agencyLabel: '公司匹配',
    summaryLabel: '综合分析',
    featuresLabel: '部位分析',
    eyes: '眼型',
    nose: '鼻子',
    lips: '嘴型',
    overall: '整体印象',
    similarIdolLabel: '相似风格',
    shareBtn: '分享结果',
    retryBtn: '重新分析',
    errorMsg: '分析失败，请换一张照片重试。',
    noFaceMsg: '未检测到人脸，请上传正面清晰的照片。',
    quotaMsg: '已达每日分析上限，请午夜后再试。',
    fileTooLarge: '文件大小超过5MB。',
    invalidFile: '仅支持JPG、PNG、WEBP格式。',
    agencyDesc: {
      SM: '都市感经典美',
      JYP: '清新活力青春风',
      YG: '强烈个性魅力',
      HYBE: '时尚全球清爽感',
    },
    agencyTagline: {
      SM: '优雅均衡的五官',
      JYP: '亲切明朗的气质',
      YG: '潮流时尚的颜值',
      HYBE: '少年/少女感清新魅力',
    },
    langLabel: 'Language',
    disclaimer: '✦ 本服务为AI娱乐内容，结果可能与实际公司选秀标准不同 ✦',
    genderLabel: '选择性别',
    genderFemale: '女',
    genderMale: '男',
  },
  ja: {
    pageTitle: '私はどの事務所スタイル？',
    pageSubtitle: '各事務所アイドルの外見特性をもとに、あなたに合う事務所を見つけます',
    uploadTitle: '写真をアップロード',
    uploadDesc: '正面の顔写真が最も正確です',
    uploadBtn: '写真を選ぶ',
    cameraBtn: 'カメラ撮影',
    privacyNote: '🔒 画像は分析後すぐに削除されます',
    analyzeBtn: '分析スタート',
    analyzing: '分析中...',
    analyzingMessages: [
      '目元を分析中...',
      '事務所基準と比較中...',
      'アイドルDBを検索中...',
      '鼻と口元を分析中...',
      '結果をまとめています...',
    ],
    resultTitle: '分析結果',
    agencyLabel: '事務所マッチ',
    summaryLabel: '総合分析',
    featuresLabel: 'パーツ別分析',
    eyes: '目元',
    nose: '鼻',
    lips: '口元',
    overall: '全体の印象',
    similarIdolLabel: '似たスタイル',
    shareBtn: '結果をシェア',
    retryBtn: '再分析する',
    errorMsg: '分析に失敗しました。別の写真でお試しください。',
    noFaceMsg: '顔が認識されませんでした。正面の顔がよく見える写真をアップロードしてください。',
    quotaMsg: '1日の分析上限を超えました。深夜以降に再度お試しください。',
    fileTooLarge: 'ファイルサイズが5MBを超えています。',
    invalidFile: 'JPG、PNG、WEBP形式のみ対応しています。',
    agencyDesc: {
      SM: '都会的でクラシックな美人系',
      JYP: '健康的で活発な青春スタイル',
      YG: '強烈で個性的なカリスマ',
      HYBE: '洗練されたグローバルな爽やかさ',
    },
    agencyTagline: {
      SM: '上品でバランスの取れた目鼻立ち',
      JYP: '親しみやすく明るいエネルギー',
      YG: 'ヒップでトレンディなマスク',
      HYBE: '少年/少女の爽やかな魅力',
    },
    langLabel: 'Language',
    disclaimer: '✦ 本サービスはAIエンタメコンテンツです。実際の事務所オーディション基準とは異なる場合があります ✦',
    genderLabel: '性別を選択',
    genderFemale: '女性',
    genderMale: '男性',
  },
};

export function tIdol(lang: IdolLang): IdolTranslations {
  return translations[lang];
}

export const AGENCY_COLORS: Record<Agency, { primary: string; bg: string; border: string; text: string }> = {
  SM: {
    primary: '#00A0E9',
    bg: 'rgba(0,160,233,0.15)',
    border: 'rgba(0,160,233,0.4)',
    text: '#60cbff',
  },
  JYP: {
    primary: '#FF5C00',
    bg: 'rgba(255,92,0,0.15)',
    border: 'rgba(255,92,0,0.4)',
    text: '#ff8c4a',
  },
  YG: {
    primary: '#D4AF37',
    bg: 'rgba(212,175,55,0.15)',
    border: 'rgba(212,175,55,0.4)',
    text: '#f0cc5a',
  },
  HYBE: {
    primary: '#9B59B6',
    bg: 'rgba(155,89,182,0.15)',
    border: 'rgba(155,89,182,0.4)',
    text: '#c77dff',
  },
};
