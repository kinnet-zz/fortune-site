export type IdolLang = 'ko' | 'en';

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
