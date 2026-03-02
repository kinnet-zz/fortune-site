// 별자리 타입 정의
export interface ZodiacSign {
  english: string;   // 영어명
  korean: string;    // 한국어명
  dateRange: string; // 날짜 범위
}

// 12개 별자리 데이터
const ZODIAC_SIGNS: ZodiacSign[] = [
  {
    english: "Aries",
    korean: "양자리",
    dateRange: "3월 21일 ~ 4월 19일",
  },
  {
    english: "Taurus",
    korean: "황소자리",
    dateRange: "4월 20일 ~ 5월 20일",
  },
  {
    english: "Gemini",
    korean: "쌍둥이자리",
    dateRange: "5월 21일 ~ 6월 21일",
  },
  {
    english: "Cancer",
    korean: "게자리",
    dateRange: "6월 22일 ~ 7월 22일",
  },
  {
    english: "Leo",
    korean: "사자자리",
    dateRange: "7월 23일 ~ 8월 22일",
  },
  {
    english: "Virgo",
    korean: "처녀자리",
    dateRange: "8월 23일 ~ 9월 22일",
  },
  {
    english: "Libra",
    korean: "천칭자리",
    dateRange: "9월 23일 ~ 10월 23일",
  },
  {
    english: "Scorpio",
    korean: "전갈자리",
    dateRange: "10월 24일 ~ 11월 22일",
  },
  {
    english: "Sagittarius",
    korean: "사수자리",
    dateRange: "11월 23일 ~ 12월 21일",
  },
  {
    english: "Capricorn",
    korean: "염소자리",
    dateRange: "12월 22일 ~ 1월 19일",
  },
  {
    english: "Aquarius",
    korean: "물병자리",
    dateRange: "1월 20일 ~ 2월 18일",
  },
  {
    english: "Pisces",
    korean: "물고기자리",
    dateRange: "2월 19일 ~ 3월 20일",
  },
];

// 12개 띠 데이터 (2020년 = 쥐띠 기준)
const CHINESE_ZODIAC_ANIMALS: string[] = [
  "쥐띠",   // 자(子)
  "소띠",   // 축(丑)
  "호랑이띠", // 인(寅)
  "토끼띠", // 묘(卯)
  "용띠",   // 진(辰)
  "뱀띠",   // 사(巳)
  "말띠",   // 오(午)
  "양띠",   // 미(未)
  "원숭이띠", // 신(申)
  "닭띠",   // 유(酉)
  "개띠",   // 술(戌)
  "돼지띠", // 해(亥)
];

/**
 * 생년월일로 별자리를 계산합니다.
 * @param birthDate - YYYY-MM-DD 형식의 생년월일 문자열
 * @returns ZodiacSign 객체 (영어명, 한국어명, 날짜 범위)
 */
export function getZodiacSign(birthDate: string): ZodiacSign {
  const date = new Date(birthDate);
  const month = date.getMonth() + 1; // 1~12
  const day = date.getDate();        // 1~31

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    return ZODIAC_SIGNS[0]; // 양자리
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    return ZODIAC_SIGNS[1]; // 황소자리
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
    return ZODIAC_SIGNS[2]; // 쌍둥이자리
  } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
    return ZODIAC_SIGNS[3]; // 게자리
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    return ZODIAC_SIGNS[4]; // 사자자리
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    return ZODIAC_SIGNS[5]; // 처녀자리
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
    return ZODIAC_SIGNS[6]; // 천칭자리
  } else if ((month === 10 && day >= 24) || (month === 11 && day <= 22)) {
    return ZODIAC_SIGNS[7]; // 전갈자리
  } else if ((month === 11 && day >= 23) || (month === 12 && day <= 21)) {
    return ZODIAC_SIGNS[8]; // 사수자리
  } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    return ZODIAC_SIGNS[9]; // 염소자리
  } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    return ZODIAC_SIGNS[10]; // 물병자리
  } else {
    return ZODIAC_SIGNS[11]; // 물고기자리 (2월 19일 ~ 3월 20일)
  }
}

/**
 * 출생연도로 띠를 계산합니다.
 * 음력 기준이 아닌 양력 연도로 단순 계산합니다.
 * @param year - 출생연도 (예: 1990)
 * @returns 띠 한국어 문자열 (예: "말띠")
 */
export function getChineseZodiac(year: number): string {
  // 2020년은 쥐띠(인덱스 0)를 기준으로 계산
  // (year - 2020) % 12 로 인덱스를 구하되, 음수 방지를 위해 +12 후 다시 %12
  const index = ((year - 2020) % 12 + 12) % 12;
  return CHINESE_ZODIAC_ANIMALS[index];
}

/**
 * 전체 별자리 목록을 반환합니다.
 */
export function getAllZodiacSigns(): ZodiacSign[] {
  return ZODIAC_SIGNS;
}

/**
 * 전체 띠 목록을 반환합니다.
 */
export function getAllChineseZodiacs(): string[] {
  return CHINESE_ZODIAC_ANIMALS;
}
