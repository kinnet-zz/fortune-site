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

[중요: 얼굴 감지 우선 확인]
이미지에 사람의 얼굴이 명확하게 보이지 않는 경우, 반드시 error 필드만 반환하고 분석을 진행하지 마세요.
error를 반환해야 하는 경우:
- 동물, 식물, 음식, 사물, 풍경 등 사람이 아닌 이미지
- 얼굴이 가려지거나 너무 작아서 이목구비를 분석할 수 없는 경우
- 그림, 만화, 애니메이션, 캐릭터 이미지
- 여러 명이 있어 분석 대상이 불명확한 경우

각 기획사의 선호 외모 기준:
- SM엔터테인먼트: 하트형 얼굴, 균형잡힌 이목구비, 도시적이고 우아한 클래식 미인형. 대표 아이돌: 카리나, 윈터, 샤이니, EXO
- JYP엔터테인먼트: 건강하고 발랄한 에너지, 웃는 모습이 매력적인 친근한 인상, 큰 눈이 특징. 대표: 트와이스, ITZY, 스트레이키즈
- YG엔터테인먼트: 힙합 무드의 강렬하고 개성있는 인상, 고양이상 또는 날카로운 피처, 트렌디한 마스크. 대표: BLACKPINK, BIGBANG, iKON
- HYBE: 소년미/소녀미가 돋보이는 청량한 매력, 세련되고 글로벌 트렌드에 맞는 이목구비, 청순하거나 시크한 느낌. 대표: BTS, NewJeans, LE SSERAFIM

[분석 규칙]
1. 4개 기획사 점수의 합이 반드시 200점이 되도록 배분하세요.
2. 1위와 2위 차이가 최소 15점은 나야 합니다 (명확한 결과를 위해).
3. 모든 텍스트는 한국어로 작성하세요.
4. similarIdol은 반드시 topAgency 소속 실제 아이돌 이름 1-2명을 명시하여 "이름(그룹) 스타일" 또는 "이름(그룹) 분위기"로 작성하세요.
   - SM 1위: 카리나(aespa), 윈터(aespa), 태민(SHINee), 수호(EXO) 등에서 선택
   - JYP 1위: 나연(TWICE), 류진(ITZY), 필릭스(Stray Kids) 등에서 선택
   - YG 1위: 제니(BLACKPINK), 리사(BLACKPINK), G-DRAGON(BIGBANG) 등에서 선택
   - HYBE 1위: 뷔(BTS), 민지(NewJeans), 카즈하(LE SSERAFIM) 등에서 선택
   다른 소속사 아이돌 언급 금지. 예시: "카리나(aespa) + 윈터(aespa) 스타일"

얼굴이 감지된 경우에만 아래 JSON 형식으로 응답하세요. 얼굴이 없으면 {"error": "이유"} 만 반환.

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
  "similarIdol": "이름(그룹) 스타일 또는 이름(그룹) 분위기"
}`
      : `You are a K-pop talent scout. Analyze this person's facial features and determine which of the 4 major K-pop agencies (SM, JYP, YG, HYBE) their appearance best aligns with.

[IMPORTANT: Face detection check first]
If a human face is NOT clearly visible in the image, return ONLY an error field and do not proceed with analysis.
Return error when:
- Image contains animals, plants, food, objects, scenery, or anything non-human
- Face is obscured, too small, or features cannot be analyzed
- Drawings, cartoons, anime, or illustrated characters
- Multiple people where the subject is unclear

Agency aesthetic preferences:
- SM Entertainment: Heart-shaped face, balanced features, urban and elegant classic beauty. Examples: Karina, Winter, SHINee, EXO
- JYP Entertainment: Healthy and energetic vibe, charming smile, friendly and approachable impression, often with large expressive eyes. Examples: TWICE, ITZY, Stray Kids
- YG Entertainment: Bold hip-hop influenced impression, sharp cat-like features, unique and trendy look. Examples: BLACKPINK, BIGBANG, iKON
- HYBE: Fresh boyish/girlish charm, refined and globally appealing features, can range from innocent to chic. Examples: BTS, NewJeans, LE SSERAFIM

[Rules]
1. The 4 scores MUST sum to exactly 200.
2. The top score must exceed the second score by at least 15 points.
3. All text must be in English.
4. For similarIdol, name 1-2 actual idols from the topAgency and write as "Name (Group) style" or "Name (Group) vibe".
   - SM winner: choose from Karina (aespa), Winter (aespa), Taemin (SHINee), Suho (EXO), etc.
   - JYP winner: choose from Nayeon (TWICE), Ryujin (ITZY), Felix (Stray Kids), etc.
   - YG winner: choose from Jennie (BLACKPINK), Lisa (BLACKPINK), G-Dragon (BIGBANG), etc.
   - HYBE winner: choose from V (BTS), Minji (NewJeans), Kazuha (LE SSERAFIM), etc.
   Do NOT mention idols from other agencies. Example: "Karina (aespa) + Winter (aespa) style"

Respond with JSON only. If no face detected: {"error": "reason"} only.

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
  "similarIdol": "Name (Group) style or Name (Group) vibe"
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
      return NextResponse.json({ error: 'NO_FACE' }, { status: 422 });
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
      analysisData.scores[a] > analysisData.scores[b] ? a : b
    );
    analysisData.topAgency = topAgency;

    // 점수가 너무 균등하면 얼굴 인식 실패로 간주 (최고점 < 65/200 = 32.5%)
    if (analysisData.scores[topAgency] < 65) {
      return NextResponse.json({ error: 'NO_FACE' }, { status: 422 });
    }

    // 텍스트 타입 보장
    analysisData.summary = String(analysisData.summary);
    analysisData.features.eyes = String(analysisData.features.eyes);
    analysisData.features.nose = String(analysisData.features.nose);
    analysisData.features.lips = String(analysisData.features.lips);
    analysisData.features.overall = String(analysisData.features.overall);
    analysisData.similarIdol = String(analysisData.similarIdol);

    return NextResponse.json(analysisData, { status: 200 });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    if (msg.includes('429') || msg.toLowerCase().includes('quota') || msg.toLowerCase().includes('rate limit')) {
      return NextResponse.json({ error: 'QUOTA_EXCEEDED' }, { status: 429 });
    }
    return NextResponse.json({ error: '분석에 실패했습니다.' }, { status: 500 });
  }
}
