export const runtime = 'edge';

import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

type Agency = 'SM' | 'JYP' | 'YG' | 'HYBE';

interface SubScore {
  faceShape: number;
  eyes: number;
  noseLips: number;
  vibe: number;
  similarity: number;
}

interface IdolAnalysisResponse {
  topAgency: Agency;
  scores: Record<Agency, number>;
  subScores: Record<Agency, SubScore>;
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
const MAX_BASE64_LENGTH = 7_000_000;
const SUB_SCORE_KEYS: (keyof SubScore)[] = ['faceShape', 'eyes', 'noseLips', 'vibe', 'similarity'];
const AGENCIES: Agency[] = ['SM', 'JYP', 'YG', 'HYBE'];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { image, mimeType, lang = 'ko', gender = 'female' } = body as {
      image: string;
      mimeType: string;
      lang?: string;
      gender?: 'female' | 'male';
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
    const isFemale = gender !== 'male';

    // 성별별 아이돌 목록
    const idolListKo = isFemale
      ? {
          SM: '카리나·윈터(aespa), 슬기·웬디(Red Velvet), 루나(f(x))',
          JYP: '나연·지효(TWICE), 류진·예지(ITZY), 니쥬',
          YG: '제니·리사·지수·로제(BLACKPINK), 이수현(AKMU)',
          HYBE: '민지·해린·혜인(NewJeans), 카즈하·채원(LE SSERAFIM)',
        }
      : {
          SM: '태민·키(SHINee), 수호·백현·카이(EXO), 루카스(NCT)',
          JYP: '필릭스·현진(Stray Kids), 마크·잭슨(GOT7)',
          YG: 'G-DRAGON·태양·탑(BIGBANG), 바비(iKON), 송민호(WINNER)',
          HYBE: '뷔·정국·지민(BTS), 정한·버논(세븐틴), 니키(ENHYPEN)',
        };

    const idolListEn = isFemale
      ? {
          SM: 'Karina, Winter (aespa), Seulgi, Wendy (Red Velvet)',
          JYP: 'Nayeon, Jihyo (TWICE), Ryujin, Yeji (ITZY)',
          YG: 'Jennie, Lisa, Jisoo, Rosé (BLACKPINK)',
          HYBE: 'Minji, Haerin (NewJeans), Kazuha, Chaewon (LE SSERAFIM)',
        }
      : {
          SM: 'Taemin, Key (SHINee), Suho, Baekhyun, Kai (EXO)',
          JYP: 'Felix, Hyunjin (Stray Kids), Mark, Jackson (GOT7)',
          YG: 'G-Dragon, Taeyang, T.O.P (BIGBANG), Bobby (iKON)',
          HYBE: 'V, Jungkook, Jimin (BTS), Jeonghan, Vernon (SEVENTEEN)',
        };

    const prompt = isKorean
      ? `당신은 K-팝 기획사 캐스팅 디렉터입니다. 사진에서 사람 얼굴을 찾아 5개 항목으로 세부 채점하여 4대 기획사 적합도를 분析해주세요.

[얼굴 선택 규칙]
- 사진에 여러 명이 있으면: 가장 크고 중앙에 가까운 얼굴 1명을 선택해 분析하세요
- 단 1명이어도 분析하세요

[error 반환 조건 — 아래 경우에만]
사람 얼굴이 전혀 없으면 {"error": "이유"} 만 반환하세요.
- 동물, 사물, 풍경, 음식, 그림, 만화, 캐릭터
- 얼굴이 완전히 가려지거나 너무 작아 이목구비 식별 불가

[5개 항목 세부 채점 (각 항목 0-10점, 4개 기획사 각각)]
각 항목마다 이 사람의 얼굴이 각 기획사 기준에 얼마나 맞는지 채점하세요.
반드시 각 항목에서 최고점과 최저점 차이가 4점 이상이어야 합니다.

항목1 faceShape (얼굴형):
- SM 10점: 하트형·계란형, 갸름하고 균형잡힌 클래식 얼굴
- JYP 10점: 둥글고 귀여운 인상, 친근한 얼굴형
- YG 10점: 개성있고 각지거나 강한 윤곽, 독특한 얼굴형
- HYBE 10점: 갸름하고 청량한 소년/소녀 느낌 얼굴형

항목2 eyes (눈매):
- SM 10점: 또렷하고 세련된 눈, 균형잡힌 쌍꺼풀
- JYP 10점: 크고 동그란 큰 눈, 친근하고 활기찬 눈매
- YG 10점: 고양이상·날카로운 눈매, 강렬한 인상
- HYBE 10점: 길고 청량한 눈, 몽환적이거나 시크한 눈매

항목3 noseLips (코/입꼬리):
- SM 10점: 오목하고 균형잡힌 코, 우아한 입꼬리
- JYP 10점: 도톰하고 귀여운 코/입, 웃는 입꼬리
- YG 10점: 날카롭고 강한 코선, 도전적인 입매
- HYBE 10점: 작고 단정한 코, 청순한 입꼬리

항목4 vibe (전체분위기):
- SM 10점: 도시적이고 우아한 클래식 분위기
- JYP 10점: 밝고 친근하며 건강한 에너지
- YG 10점: 힙하고 강렬하며 카리스마 있는 분위기
- HYBE 10점: 청량하고 세련된 글로벌 감성

항목5 similarity (소속 아이돌 유사도 — ${isFemale ? '여성 아이돌 기준' : '남성 아이돌 기준'}):
- SM 아이돌: ${idolListKo.SM}
- JYP 아이돌: ${idolListKo.JYP}
- YG 아이돌: ${idolListKo.YG}
- HYBE 아이돌: ${idolListKo.HYBE}
각 소속사 실제 아이돌들과 이 사람의 외모 유사도를 0-10으로 채점

[similarIdol 필수 규칙]
topAgency 소속 아이돌 중 가장 유사한 실제 아이돌 1-2명을 이름으로 직접 명시하세요.
형식: "이름(그룹) 스타일" 또는 "이름(그룹) + 이름(그룹) 분위기"
절대로 소속사 특성 묘사로 채우지 말고, 반드시 실제 아이돌 이름을 쓰세요.
다른 소속사 아이돌 언급 금지.

얼굴이 있는 경우에만 아래 JSON으로 응답. 그 외: {"error": "이유"}

{
  "topAgency": "SM" | "JYP" | "YG" | "HYBE",
  "subScores": {
    "SM":   {"faceShape": 숫자, "eyes": 숫자, "noseLips": 숫자, "vibe": 숫자, "similarity": 숫자},
    "JYP":  {"faceShape": 숫자, "eyes": 숫자, "noseLips": 숫자, "vibe": 숫자, "similarity": 숫자},
    "YG":   {"faceShape": 숫자, "eyes": 숫자, "noseLips": 숫자, "vibe": 숫자, "similarity": 숫자},
    "HYBE": {"faceShape": 숫자, "eyes": 숫자, "noseLips": 숫자, "vibe": 숫자, "similarity": 숫자}
  },
  "summary": "전체 분석 요약 (2-3문장, 1위 소속사 특성과 연결)",
  "features": {
    "eyes": "눈매 분석 (1-2문장)",
    "nose": "코 분석 (1문장)",
    "lips": "입꼬리/입술 분석 (1문장)",
    "overall": "전체 인상 분석 (1-2문장)"
  },
  "similarIdol": "이름(그룹) 스타일"
}`
      : `You are a K-pop talent scout. Find a human face in the photo and score it across 5 dimensions to determine which of the 4 major agencies (SM, JYP, YG, HYBE) they match best.

[Face selection rules]
- Multiple people in the photo: select the largest and most centered face, then analyze
- Single person: analyze that face

[Return {"error": "reason"} ONLY if]
There is absolutely no human face in the image:
- Animals, objects, scenery, food, drawings, cartoons, characters
- Face completely obscured or too small to identify features

[5-Dimension Scoring (0-10 per dimension per agency)]
Score how well this person's face matches each agency's standards.
Each dimension MUST have at least a 4-point gap between highest and lowest score.

Dimension 1 faceShape:
- SM 10pts: Heart/oval shaped, slim and balanced classic face
- JYP 10pts: Round and cute, friendly approachable face shape
- YG 10pts: Strong jawline, angular or distinctive face shape
- HYBE 10pts: Slim, fresh boyish/girlish face shape

Dimension 2 eyes:
- SM 10pts: Sharp and refined eyes, balanced double eyelid
- JYP 10pts: Large round expressive eyes, bright and friendly
- YG 10pts: Cat-like or sharp eyes, intense gaze
- HYBE 10pts: Long and clear eyes, dreamy or chic look

Dimension 3 noseLips:
- SM 10pts: Balanced elegant nose, graceful lip corners
- JYP 10pts: Soft plump nose/lips, smiling mouth corners
- YG 10pts: Sharp strong nose, bold lip line
- HYBE 10pts: Small neat nose, innocent lip corners

Dimension 4 vibe:
- SM 10pts: Urban, elegant, classic beauty vibe
- JYP 10pts: Bright, friendly, healthy energy
- YG 10pts: Hip, intense, charismatic aura
- HYBE 10pts: Fresh, refined, global appeal

Dimension 5 similarity (idol resemblance — ${isFemale ? 'female idol standards' : 'male idol standards'}):
- SM idols: ${idolListEn.SM}
- JYP idols: ${idolListEn.JYP}
- YG idols: ${idolListEn.YG}
- HYBE idols: ${idolListEn.HYBE}

[similarIdol — MANDATORY RULE]
Name 1-2 actual idols from topAgency who most resemble this person.
Format: "Name (Group) style" or "Name (Group) + Name (Group) vibe"
NEVER fill this with agency descriptions. MUST use real idol names.
Do NOT mention idols from other agencies.

Respond with JSON only if face detected. Otherwise: {"error": "reason"}

{
  "topAgency": "SM" | "JYP" | "YG" | "HYBE",
  "subScores": {
    "SM":   {"faceShape": number, "eyes": number, "noseLips": number, "vibe": number, "similarity": number},
    "JYP":  {"faceShape": number, "eyes": number, "noseLips": number, "vibe": number, "similarity": number},
    "YG":   {"faceShape": number, "eyes": number, "noseLips": number, "vibe": number, "similarity": number},
    "HYBE": {"faceShape": number, "eyes": number, "noseLips": number, "vibe": number, "similarity": number}
  },
  "summary": "Overall analysis (2-3 sentences connecting to top agency traits)",
  "features": {
    "eyes": "Eye shape analysis (1-2 sentences)",
    "nose": "Nose analysis (1 sentence)",
    "lips": "Lip/mouth analysis (1 sentence)",
    "overall": "Overall impression (1-2 sentences)"
  },
  "similarIdol": "Name (Group) style"
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

    // subScores → scores 계산 (각 소속사 5개 항목 합산 후 200점 정규화)
    if (!analysisData.subScores) {
      return NextResponse.json({ error: 'NO_FACE' }, { status: 422 });
    }

    const rawScores: Record<Agency, number> = { SM: 0, JYP: 0, YG: 0, HYBE: 0 };
    for (const agency of AGENCIES) {
      const sub = analysisData.subScores[agency] || {};
      rawScores[agency] = SUB_SCORE_KEYS.reduce((sum, key) => sum + (Number(sub[key]) || 0), 0);
    }

    const rawTotal = AGENCIES.reduce((sum, a) => sum + rawScores[a], 0);
    const scores: Record<Agency, number> = { SM: 0, JYP: 0, YG: 0, HYBE: 0 };
    for (const agency of AGENCIES) {
      scores[agency] = rawTotal > 0 ? Math.round((rawScores[agency] / rawTotal) * 200) : 50;
    }
    analysisData.scores = scores;

    // topAgency 재확인
    const topAgency = AGENCIES.reduce((a, b) => scores[a] > scores[b] ? a : b);
    analysisData.topAgency = topAgency;

    // 점수가 너무 균등하면 얼굴 인식 실패 (최고점 < 45/200 = 22.5%)
    if (scores[topAgency] < 45) {
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
