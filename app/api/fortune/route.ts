export const runtime = 'edge';

import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getZodiacSign, getChineseZodiac } from "@/lib/zodiac";

interface FortuneResponse {
  zodiacSign: string;
  chineseZodiac: string;
  overall: string;
  love: string;
  money: string;
  work: string;
  luckyColor: string;
  luckyNumber: number;
  score: number;
}

function getTodayKorean(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
  const weekday = weekdays[today.getDay()];
  return `${year}년 ${month}월 ${day}일 (${weekday})`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { birthDate, gender } = body as { birthDate: string; gender: string };

    // birthDate 검증
    if (!birthDate) {
      return NextResponse.json({ error: "birthDate가 필요합니다." }, { status: 400 });
    }
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(birthDate)) {
      return NextResponse.json({ error: "birthDate는 YYYY-MM-DD 형식이어야 합니다." }, { status: 400 });
    }
    const parsedDate = new Date(birthDate);
    if (isNaN(parsedDate.getTime())) {
      return NextResponse.json({ error: "유효하지 않은 날짜입니다." }, { status: 400 });
    }
    if (parsedDate > new Date()) {
      return NextResponse.json({ error: "미래 날짜는 입력할 수 없습니다." }, { status: 400 });
    }

    // gender 검증 (허용값만 통과)
    const ALLOWED_GENDERS = ["남자", "여자"];
    if (!gender || !ALLOWED_GENDERS.includes(gender)) {
      return NextResponse.json({ error: "성별은 남자 또는 여자만 허용됩니다." }, { status: 400 });
    }

    const zodiac = getZodiacSign(birthDate);
    const birthYear = parsedDate.getFullYear();
    const chineseZodiac = getChineseZodiac(birthYear);
    const todayKorean = getTodayKorean();

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "서버 설정 오류: API 키가 없습니다." },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `오늘은 ${todayKorean}입니다.
사용자는 ${gender}이고, 별자리는 ${zodiac.korean}(${zodiac.english}, ${zodiac.dateRange})이며, 띠는 ${chineseZodiac}입니다.

위 정보를 바탕으로 오늘의 운세를 한국어로 작성해주세요.
반드시 아래 JSON 형식으로만 응답하고, JSON 외의 다른 텍스트나 마크다운은 절대 포함하지 마세요.

{
  "zodiacSign": "${zodiac.korean}",
  "chineseZodiac": "${chineseZodiac}",
  "overall": "종합운 내용 (2-3문장)",
  "love": "연애운 내용 (2-3문장)",
  "money": "금전운 내용 (2-3문장)",
  "work": "직업운 내용 (2-3문장)",
  "luckyColor": "행운의 색 (단어 하나, 예: 파란색)",
  "luckyNumber": 행운의 숫자 (1~99 사이의 정수),
  "score": 오늘의 운세 점수 (1~100 사이의 정수)
}`;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    if (!responseText) {
      return NextResponse.json(
        { error: "Gemini로부터 유효한 응답을 받지 못했습니다." },
        { status: 500 }
      );
    }

    let fortuneData: FortuneResponse;
    try {
      const cleanedText = responseText
        .replace(/^```(?:json)?\s*/i, "")
        .replace(/\s*```$/i, "")
        .trim();

      fortuneData = JSON.parse(cleanedText);
    } catch {
      console.error("JSON 파싱 실패");
      return NextResponse.json(
        { error: "운세 데이터 파싱에 실패했습니다." },
        { status: 500 }
      );
    }

    // 숫자 범위 보정
    fortuneData.luckyNumber = Math.max(1, Math.min(99, Number(fortuneData.luckyNumber)));
    fortuneData.score = Math.max(1, Math.min(100, Number(fortuneData.score)));

    // 텍스트 필드 길이 제한 (프롬프트 인젝션 방지)
    const MAX_TEXT_LENGTH = 300;
    fortuneData.overall = String(fortuneData.overall).slice(0, MAX_TEXT_LENGTH);
    fortuneData.love = String(fortuneData.love).slice(0, MAX_TEXT_LENGTH);
    fortuneData.money = String(fortuneData.money).slice(0, MAX_TEXT_LENGTH);
    fortuneData.work = String(fortuneData.work).slice(0, MAX_TEXT_LENGTH);
    fortuneData.luckyColor = String(fortuneData.luckyColor).slice(0, 20);

    return NextResponse.json(fortuneData, { status: 200 });
  } catch (error: unknown) {
    console.error("운세 API 오류:", error);

    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: "요청 형식이 올바르지 않습니다." },
        { status: 400 }
      );
    }

    const errorMessage = error instanceof Error ? error.message : "";
    if (errorMessage.includes("429") || errorMessage.toLowerCase().includes("quota") || errorMessage.toLowerCase().includes("rate limit")) {
      return NextResponse.json(
        { error: "QUOTA_EXCEEDED" },
        { status: 429 }
      );
    }

    return NextResponse.json(
      { error: "서버 내부 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
