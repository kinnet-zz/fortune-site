export const runtime = 'edge';

import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { VALID_LANGS } from '@/lib/i18n';

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

    const ALLOWED_GENDERS = ['female', 'male'];
    if (!VALID_LANGS.includes(lang as never)) {
      return NextResponse.json({ error: '지원하지 않는 언어입니다.' }, { status: 400 });
    }
    if (!ALLOWED_GENDERS.includes(gender)) {
      return NextResponse.json({ error: '잘못된 요청입니다.' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: '서버 설정 오류' }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-lite' });

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

    const idolListZh = isFemale
      ? {
          SM: '卡莉娜·Winter(aespa), 瑟琪·温蒂(Red Velvet)',
          JYP: '娜演·志效(TWICE), 柳真·叶知(ITZY)',
          YG: '珍妮·Lisa·智秀·Rosé(BLACKPINK)',
          HYBE: '敏知·海琳(NewJeans), 一花·彩媛(LE SSERAFIM)',
        }
      : {
          SM: '泰民·Key(SHINee), 首护·伯贤·凯(EXO)',
          JYP: 'Felix·贤振(Stray Kids), 马克·杰克逊(GOT7)',
          YG: 'G-DRAGON·太阳·TOP(BIGBANG), 宝比(iKON)',
          HYBE: 'V·柾国·智旻(BTS), 政汉·Vernon(SEVENTEEN)',
        };

    const idolListJa = isFemale
      ? {
          SM: 'カリナ・ウィンター(aespa), スルギ・ウェンディ(Red Velvet)',
          JYP: 'ナヨン・ジヒョ(TWICE), リュジン・イェジ(ITZY)',
          YG: 'ジェニー・リサ・ジス・ロゼ(BLACKPINK)',
          HYBE: 'ミンジ・ヘリン(NewJeans), カズハ・チェウォン(LE SSERAFIM)',
        }
      : {
          SM: 'テミン・キー(SHINee), スホ・ベッキョン・カイ(EXO)',
          JYP: 'フィリックス・ヒョンジン(Stray Kids), マーク・ジャクソン(GOT7)',
          YG: 'G-DRAGON・テヤン・TOP(BIGBANG), ボビー(iKON)',
          HYBE: 'V・ジョングク・ジミン(BTS), ジョンハン・バーノン(SEVENTEEN)',
        };

    const prompt = lang === 'ko'
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
      : lang === 'zh'
      ? `您是K-pop经纪公司的星探。请在照片中找到人脸，从5个维度评分，判断与四大经纪公司（SM、JYP、YG、HYBE）中哪家最匹配。

[人脸选择规则]
- 多人照片：选择最大且最居中的人脸进行分析
- 单人照片：直接分析该人脸

[仅在以下情况返回{"error": "原因"}]
图像中完全没有人脸：
- 动物、物体、风景、食物、绘画、卡通、角色
- 脸部完全遮挡或太小无法识别五官

[5维度评分（每个维度每家公司0-10分）]
评估此人的脸与各公司标准的匹配程度。
每个维度中最高分与最低分之差必须至少4分。

维度1 faceShape（脸型）：
- SM 10分：心形/鹅蛋脸，纤细均衡的经典脸型
- JYP 10分：圆润可爱，亲切易接近的脸型
- YG 10分：强烈下颌线，有棱角或独特的脸型
- HYBE 10分：纤细清爽的少年/少女感脸型

维度2 eyes（眼神）：
- SM 10分：锐利精致的眼睛，均衡的双眼皮
- JYP 10分：大而圆的眼睛，明亮友好
- YG 10分：猫眼或锐利眼神，强烈气场
- HYBE 10分：细长清澈的眼睛，梦幻或冷艳

维度3 noseLips（鼻子/嘴角）：
- SM 10分：均衡优雅的鼻子，优美的嘴角
- JYP 10分：圆润可爱的鼻子/嘴唇，笑容嘴角
- YG 10分：锐利有力的鼻梁，大胆的嘴型
- HYBE 10分：小巧精致的鼻子，清纯的嘴角

维度4 vibe（整体氛围）：
- SM 10分：都市感、优雅、经典美人氛围
- JYP 10分：阳光、亲切、健康活力
- YG 10分：潮流、强烈、魅力十足
- HYBE 10分：清爽、精致、全球感

维度5 similarity（偶像相似度 — ${isFemale ? '女偶像标准' : '男偶像标准'}）：
- SM偶像：${idolListZh.SM}
- JYP偶像：${idolListZh.JYP}
- YG偶像：${idolListZh.YG}
- HYBE偶像：${idolListZh.HYBE}

[similarIdol — 必填规则]
从topAgency中列出1-2位与此人最相似的真实偶像名字。
格式："姓名（团体）风格" 或 "姓名（团体）+ 姓名（团体）气质"
绝对不能用公司特征描述代替，必须写真实偶像名字。
不得提及其他公司的偶像。

检测到人脸时仅用JSON回复。否则：{"error": "原因"}

{
  "topAgency": "SM" | "JYP" | "YG" | "HYBE",
  "subScores": {
    "SM":   {"faceShape": 数字, "eyes": 数字, "noseLips": 数字, "vibe": 数字, "similarity": 数字},
    "JYP":  {"faceShape": 数字, "eyes": 数字, "noseLips": 数字, "vibe": 数字, "similarity": 数字},
    "YG":   {"faceShape": 数字, "eyes": 数字, "noseLips": 数字, "vibe": 数字, "similarity": 数字},
    "HYBE": {"faceShape": 数字, "eyes": 数字, "noseLips": 数字, "vibe": 数字, "similarity": 数字}
  },
  "summary": "综合分析（2-3句话，与第一名公司特点相关联）",
  "features": {
    "eyes": "眼型分析（1-2句话）",
    "nose": "鼻子分析（1句话）",
    "lips": "嘴角/嘴唇分析（1句话）",
    "overall": "整体印象分析（1-2句话）"
  },
  "similarIdol": "姓名（团体）风格"
}`
      : lang === 'ja'
      ? `あなたはK-POPの芸能事務所のキャスティングディレクターです。写真から人の顔を見つけ、5つの項目で採点して4大事務所（SM、JYP、YG、HYBE）への適合度を分析してください。

[顔の選択ルール]
- 複数人の写真：最も大きく中央に近い顔1人を選んで分析
- 1人の場合：その顔を分析

[{"error": "理由"}を返す条件 — 以下の場合のみ]
画像に人の顔が全くない場合：
- 動物、物体、風景、食べ物、絵画、マンガ、キャラクター
- 顔が完全に隠れているか小さすぎて顔のパーツが識別不可

[5項目の詳細採点（各項目0-10点、4つの事務所それぞれ）]
各項目でこの人の顔が各事務所の基準にどれだけ合っているか採点してください。
各項目で最高点と最低点の差が必ず4点以上あること。

項目1 faceShape（顔型）：
- SM 10点：ハート型・卵型、細くてバランスの良いクラシックな顔
- JYP 10点：丸くて可愛い印象、親しみやすい顔型
- YG 10点：個性的で角張った強い輪郭、独特な顔型
- HYBE 10点：細くて爽やかな少年/少女感の顔型

項目2 eyes（目元）：
- SM 10点：くっきりと洗練された目、バランスの良い二重まぶた
- JYP 10点：大きくて丸い目、親しみやすく活き活きとした目元
- YG 10点：猫目・鋭い目元、強烈な印象
- HYBE 10点：細長く澄んだ目、夢幻的またはクールな目元

項目3 noseLips（鼻/口元）：
- SM 10点：均整のとれたエレガントな鼻、優雅な口角
- JYP 10点：ふっくら可愛い鼻/唇、笑顔の口角
- YG 10点：シャープで力強い鼻筋、挑戦的な口元
- HYBE 10点：小さくすっきりした鼻、清楚な口角

項目4 vibe（全体の雰囲気）：
- SM 10点：都会的でエレガントなクラシックな雰囲気
- JYP 10点：明るく親しみやすく健康的なエネルギー
- YG 10点：ヒップで強烈なカリスマのある雰囲気
- HYBE 10点：爽やかで洗練されたグローバルな感性

項目5 similarity（所属アイドルとの類似度 — ${isFemale ? '女性アイドル基準' : '男性アイドル基準'}）：
- SMアイドル：${idolListJa.SM}
- JYPアイドル：${idolListJa.JYP}
- YGアイドル：${idolListJa.YG}
- HYBEアイドル：${idolListJa.HYBE}
各事務所の実際のアイドルとこの人の外見の類似度を0-10で採点

[similarIdol 必須ルール]
topAgency所属アイドルの中で最も類似している実際のアイドル1-2名を名前で直接記載してください。
形式：「名前（グループ）スタイル」または「名前（グループ）+ 名前（グループ）の雰囲気」
絶対に事務所の特性描写で埋めず、必ず実際のアイドルの名前を書いてください。
他の事務所のアイドルに言及禁止。

顔がある場合のみ以下のJSONで回答。それ以外：{"error": "理由"}

{
  "topAgency": "SM" | "JYP" | "YG" | "HYBE",
  "subScores": {
    "SM":   {"faceShape": 数値, "eyes": 数値, "noseLips": 数値, "vibe": 数値, "similarity": 数値},
    "JYP":  {"faceShape": 数値, "eyes": 数値, "noseLips": 数値, "vibe": 数値, "similarity": 数値},
    "YG":   {"faceShape": 数値, "eyes": 数値, "noseLips": 数値, "vibe": 数値, "similarity": 数値},
    "HYBE": {"faceShape": 数値, "eyes": 数値, "noseLips": 数値, "vibe": 数値, "similarity": 数値}
  },
  "summary": "総合分析（2-3文、1位事務所の特性と関連付けて）",
  "features": {
    "eyes": "目元の分析（1-2文）",
    "nose": "鼻の分析（1文）",
    "lips": "口元/唇の分析（1文）",
    "overall": "全体的な印象の分析（1-2文）"
  },
  "similarIdol": "名前（グループ）スタイル"
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

    // subScores → scores 계산 (각 소속사 독립 100점 절대 채점, 소수점 1자리)
    // 5개 항목 × 최대 10점 = 최대 50 raw → /50 × 100 = 100점 만점
    if (!analysisData.subScores) {
      return NextResponse.json({ error: 'NO_FACE' }, { status: 422 });
    }

    const scores: Record<Agency, number> = { SM: 0, JYP: 0, YG: 0, HYBE: 0 };
    for (const agency of AGENCIES) {
      const sub = analysisData.subScores[agency] || {};
      const raw = SUB_SCORE_KEYS.reduce((sum, key) => sum + (Number(sub[key]) || 0), 0);
      scores[agency] = Math.round((raw / 50) * 1000) / 10; // 소수점 1자리 (0.0~100.0)
    }
    analysisData.scores = scores;

    // topAgency 재확인
    const topAgency = AGENCIES.reduce((a, b) => scores[a] > scores[b] ? a : b);
    analysisData.topAgency = topAgency;

    // 얼굴 인식 실패 기준: 최고점 20점 미만
    if (scores[topAgency] < 20) {
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
