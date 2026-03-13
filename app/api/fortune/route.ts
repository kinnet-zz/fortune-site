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
    const { birthDate, gender, language } = body as { birthDate: string; gender: string; language?: string };

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
    if (parsedDate.getFullYear() < 1900) {
      return NextResponse.json({ error: "1900년 이후 날짜를 입력해주세요." }, { status: 400 });
    }

    // gender 검증 (허용값만 통과)
    const ALLOWED_GENDERS = ["남자", "여자"];
    if (!gender || !ALLOWED_GENDERS.includes(gender)) {
      return NextResponse.json({ error: "성별은 남자 또는 여자만 허용됩니다." }, { status: 400 });
    }

    // language 검증 (허용값만 통과)
    const ALLOWED_LANGS = ['ko', 'en', 'zh', 'ja'];
    if (language !== undefined && !ALLOWED_LANGS.includes(language)) {
      return NextResponse.json({ error: "지원하지 않는 언어입니다." }, { status: 400 });
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
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

    const languageMap: Record<string, string> = {
      ko: '한국어',
      en: 'English',
      zh: '中文(简体)',
      ja: '日本語',
    };
    const outputLang = languageMap[language || 'ko'] || '한국어';

    let prompt: string;
    if (!language || language === 'ko') {
      prompt = `오늘은 ${todayKorean}입니다.
사용자는 ${gender}이고, 별자리는 ${zodiac.korean}(${zodiac.english}, ${zodiac.dateRange})이며, 띠는 ${chineseZodiac}입니다.

숙련된 점성술사의 시각으로 오늘의 운세를 철학적이고 깊이 있게 작성하세요.

[반드시 따를 지침]
1. 점수(score)는 현실적으로 설정하세요. 매일이 좋은 날일 수는 없습니다.
   - 좋은 날 (70~100): 행성 기운이 순행하고 흐름이 좋은 날
   - 보통 날 (40~69): 평범하고 큰 변화 없는 날
   - 힘든 날 (1~39): 역행하거나 긴장된 기운이 흐르는 날
2. score가 50 미만이면 각 항목(overall, love, money, work)에 반드시 구체적인 해결책·대처법을 포함하세요.
   (예: "~을 삼가고 ~에 집중해보세요", "~하지 않도록 주의하고 ~을 실천하면 도움이 됩니다")
3. 별자리 수호 행성의 기운, 음양의 흐름, 오늘의 천체 에너지를 자연스럽게 언급하세요.
4. "좋은 하루가 될 것입니다"처럼 뻔한 표현은 금지. 해당 별자리 특성과 연결된 구체적인 통찰을 담으세요.
5. 각 항목은 2~3문장으로 작성하세요.

반드시 아래 JSON 형식으로만 응답하고, JSON 외의 다른 텍스트나 마크다운은 절대 포함하지 마세요.

{
  "zodiacSign": "${zodiac.korean}",
  "chineseZodiac": "${chineseZodiac}",
  "overall": "종합운 (2-3문장, score<50이면 해결책 포함)",
  "love": "연애운 (2-3문장, score<50이면 해결책 포함)",
  "money": "금전운 (2-3문장, score<50이면 해결책 포함)",
  "work": "직업운 (2-3문장, score<50이면 해결책 포함)",
  "luckyColor": "행운의 색 (단어 하나, 예: 파란색)",
  "luckyNumber": 행운의 숫자 (1~99 사이의 정수),
  "score": 오늘의 운세 점수 (1~100 사이의 정수, 반드시 현실적으로)
}`;
    } else {
      const today = new Date();
      const todayStr = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' });
      const genderEnglish = gender === '남자' ? 'male' : 'female';

      prompt = `Today is ${todayStr}.
The user is ${genderEnglish}. Their zodiac sign is ${zodiac.english} (${zodiac.dateRange}), and their Chinese zodiac is ${chineseZodiac}.

Write today's fortune in ${outputLang} as a seasoned astrologer — philosophical, specific, and grounded in astrological wisdom.

[Mandatory Guidelines]
1. Set the score REALISTICALLY. Not every day is favorable.
   - Good day (70–100): Planetary energy flows harmoniously
   - Average day (40–69): Neutral, uneventful cosmic energy
   - Challenging day (1–39): Adverse or tense planetary aspects at play
2. If score < 50, each field (overall, love, money, work) MUST include concrete remedies or countermeasures.
   (e.g., "Avoid X today and instead focus on Y", "Refrain from Z; try A to restore balance")
3. Reference the sign's ruling planet, elemental energy, yin/yang balance, and today's celestial influence naturally.
4. Avoid generic phrases like "It will be a wonderful day." Provide specific, insightful content rooted in this sign's astrological nature.
5. Each field: 2–3 sentences.

Respond ONLY with the following JSON format, no other text or markdown.
ALL text fields must be written in ${outputLang}.

{
  "zodiacSign": "zodiac sign name in ${outputLang}",
  "chineseZodiac": "Chinese zodiac animal name in ${outputLang}",
  "overall": "overall fortune (2-3 sentences, include remedy if score < 50)",
  "love": "love fortune (2-3 sentences, include remedy if score < 50)",
  "money": "financial fortune (2-3 sentences, include remedy if score < 50)",
  "work": "career fortune (2-3 sentences, include remedy if score < 50)",
  "luckyColor": "lucky color as a single word/phrase in ${outputLang}",
  "luckyNumber": lucky number between 1 and 99,
  "score": fortune score between 1 and 100 (set realistically — not always high)
}`;
    }

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
    console.error("운세 API 오류 발생");

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
