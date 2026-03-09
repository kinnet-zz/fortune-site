export const runtime = 'edge';

import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

type Agency = 'SM' | 'JYP' | 'YG' | 'HYBE';

interface IdolAnalysisResponse {
  topAgency: Agency;
  scores: Record<Agency, number>;
  summary: string;
  features: {
    eyes: string;
    nose: string;
    lips: string;
    overall: string;
  };
  similarIdol: string;
}

const ALLOWED_MIME_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const MAX_BASE64_LENGTH = 7_000_000; // ~5MB

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { image, mimeType, lang = 'ko' } = body as {
      image: string;
      mimeType: string;
      lang?: string;
    };

    if (!image || !mimeType) {
      return NextResponse.json({ error: 'image와 mimeType이 필요합니다.' }, { status: 400 });
    }
    if (!ALLOWED_MIME_TYPES.includes(mimeType)) {
      return NextResponse.json({ error: '지원하지 않는 파일 형식입니다.' }, { status: 400 });
    }
    if (image.length > MAX_BASE64_LENGTH) {
      return NextResponse.json({ error: '파일 크기가 너무 큽니다.' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: '서버 설정 오류' }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-lite' });

    const isKorean = lang === 'ko';

    const prompt = isKorean
      ? `당신은 K-팝 기획사 캐스팅 디렉터입니다. 이 사람의 얼굴을 분석하여 4대 기획사(SM, JYP, YG, HYBE) 중 어느 소속사의 아이돌 외모 기준에 가장 잘 맞는지 분석해주세요.

각 기획사의 선호 외모 기준:
- SM엔터테인먼트: 하트형 얼굴, 균형잡힌 이목구비, 도시적이고 우아한 클래식 미인형. 대표 아이돌: 카리나, 윈터, 샤이니, EXO
- JYP엔터테인먼트: 건강하고 발랄한 에너지, 웃는 모습이 매력적인 친근한 인상, 큰 눈이 특징. 대표: 트와이스, ITZY, 스트레이키즈
- YG엔터테인먼트: 힙합 무드의 강렬하고 개성있는 인상, 고양이상 또는 날카로운 피처, 트렌디한 마스크. 대표: BLACKPINK, BIGBANG, iKON
- HYBE: 소년미/소녀미가 돋보이는 청량한 매력, 세련되고 글로벌 트렌드에 맞는 이목구비, 청순하거나 시크한 느낌. 대표: BTS, NewJeans, LE SSERAFIM

[분석 규칙]
1. 4개 기획사 점수의 합이 반드시 200점이 되도록 배분하세요.
2. 1위와 2위 차이가 최소 10점은 나야 합니다 (명확한 결과를 위해).
3. 얼굴이 보이지 않거나 사진이 아닌 경우 error 필드를 반환하세요.
4. 모든 텍스트는 한국어로 작성하세요.
5. similarIdol은 특정 인물과 닮았다는 표현 대신 "~스타일" 또는 "~분위기"로 작성하세요.

반드시 아래 JSON 형식으로만 응답하세요. JSON 외 텍스트 없음.

{
  "topAgency": "SM" | "JYP" | "YG" | "HYBE",
  "scores": { "SM": 숫자, "JYP": 숫자, "YG": 숫자, "HYBE": 숫자 },
  "summary": "전체 분석 요약 (2-3문장, 1위 소속사 특성과 연결)",
  "features": {
    "eyes": "눈매 분석 (1-2문장)",
    "nose": "코 분석 (1문장)",
    "lips": "입꼬리/입술 분석 (1문장)",
    "overall": "전체 인상 분석 (1-2문장)"
  },
  "similarIdol": "~스타일 또는 ~분위기 (1-2개 소속사 예시 포함)"
}`
      : `You are a K-pop talent scout. Analyze this person's facial features and determine which of the 4 major K-pop agencies (SM, JYP, YG, HYBE) their appearance best aligns with.

Agency aesthetic preferences:
- SM Entertainment: Heart-shaped face, balanced features, urban and elegant classic beauty. Examples: Karina, Winter, SHINee, EXO
- JYP Entertainment: Healthy and energetic vibe, charming smile, friendly and approachable impression, often with large expressive eyes. Examples: TWICE, ITZY, Stray Kids
- YG Entertainment: Bold hip-hop influenced impression, sharp cat-like features, unique and trendy look. Examples: BLACKPINK, BIGBANG, iKON
- HYBE: Fresh boyish/girlish charm, refined and globally appealing features, can range from innocent to chic. Examples: BTS, NewJeans, LE SSERAFIM

[Rules]
1. The 4 scores MUST sum to exactly 200.
2. The top score must exceed the second score by at least 10 points.
3. If no face is visible, return an error field.
4. All text must be in English.
5. For similarIdol, describe style/vibe rather than claiming resemblance to specific individuals.

Respond ONLY with JSON, no other text.

{
  "topAgency": "SM" | "JYP" | "YG" | "HYBE",
  "scores": { "SM": number, "JYP": number, "YG": number, "HYBE": number },
  "summary": "Overall analysis (2-3 sentences connecting to top agency traits)",
  "features": {
    "eyes": "Eye shape analysis (1-2 sentences)",
    "nose": "Nose analysis (1 sentence)",
    "lips": "Lip/mouth analysis (1 sentence)",
    "overall": "Overall impression (1-2 sentences)"
  },
  "similarIdol": "~style or ~vibe (include 1-2 agency examples)"
}`;

    const imagePart = {
      inlineData: {
        data: image,
        mimeType: mimeType as 'image/jpeg' | 'image/png' | 'image/webp',
      },
    };

    const result = await model.generateContent([prompt, imagePart]);
    const responseText = result.response.text();

    if (!responseText) {
      return NextResponse.json({ error: '분석 결과를 받지 못했습니다.' }, { status: 500 });
    }

    let analysisData: IdolAnalysisResponse & { error?: string };
    try {
      // JSON 블록 추출 (모델이 앞뒤에 텍스트를 추가할 경우 대응)
      const jsonMatch = responseText.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        return NextResponse.json({ error: '결과 파싱에 실패했습니다.' }, { status: 500 });
      }
      analysisData = JSON.parse(jsonMatch[0]);
    } catch {
      return NextResponse.json({ error: '결과 파싱에 실패했습니다.' }, { status: 500 });
    }

    if (analysisData.error) {
      return NextResponse.json({ error: analysisData.error }, { status: 422 });
    }

    // 점수 합계 보정 (200으로 정규화)
    const agencies: Agency[] = ['SM', 'JYP', 'YG', 'HYBE'];
    const total = agencies.reduce((sum, a) => sum + (analysisData.scores[a] || 0), 0);
    if (total !== 200 && total > 0) {
      agencies.forEach((a) => {
        analysisData.scores[a] = Math.round((analysisData.scores[a] / total) * 200);
      });
    }

    // topAgency 재확인
    const topAgency = agencies.reduce((a, b) =>
      analysisData.scores[a] >= analysisData.scores[b] ? a : b
    );
    analysisData.topAgency = topAgency;

    // 텍스트 길이 제한
    const MAX = 300;
    analysisData.summary = String(analysisData.summary).slice(0, MAX);
    analysisData.features.eyes = String(analysisData.features.eyes).slice(0, MAX);
    analysisData.features.nose = String(analysisData.features.nose).slice(0, MAX);
    analysisData.features.lips = String(analysisData.features.lips).slice(0, MAX);
    analysisData.features.overall = String(analysisData.features.overall).slice(0, MAX);
    analysisData.similarIdol = String(analysisData.similarIdol).slice(0, 100);

    return NextResponse.json(analysisData, { status: 200 });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    if (msg.includes('429') || msg.toLowerCase().includes('quota') || msg.toLowerCase().includes('rate limit')) {
      return NextResponse.json({ error: 'QUOTA_EXCEEDED' }, { status: 429 });
    }
    // DEBUG: 실제 오류 메시지 노출 (확인 후 제거 예정)
    return NextResponse.json({ error: msg || '알 수 없는 오류' }, { status: 500 });
  }
}
