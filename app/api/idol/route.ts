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
      ? `당신은 SM·JYP·YG·HYBE 오디션 현장에서 10년 이상 일한 베테랑 캐스팅 디렉터입니다.
사진 속 얼굴을 보고 "이 사람이 어느 소속사에 어울리는가"를 직관적이고 구체적으로 분석해주세요.

[얼굴 선택 규칙]
- 여러 명이면 가장 크고 중앙에 있는 얼굴 1명만 분석
- 1명이면 그 얼굴 분석

[분석 불가 조건 — 아래 경우에만 {"error": "이유"} 반환]
- 동물, 사물, 풍경, 음식, 그림, 만화, 캐릭터
- 얼굴이 완전히 가려지거나 이목구비 식별 불가

---

[각 소속사 외모 DNA — 실제 아이돌 기준]

■ SM엔터테인먼트
대표: ${isFemale ? '카리나·윈터(aespa), 슬기·아이린(Red Velvet), 태연(SNSD)' : '태민·키(SHINee), 카이·수호·백현(EXO), 텐(WayV)'}
외모 DNA:
- 얼굴형: 카리나처럼 선이 깔끔한 계란형·하트형. 광대 적당, 턱선 갸름
- 눈: 태민처럼 또렷하고 세련됨. 눈꼬리 수평~살짝 올라감. 균형잡힌 쌍꺼풀
- 코: 콧대 높고 코끝 오뚝. 코 폭 좁고 정돈된 인상
- 입: 입꼬리 자연스럽게 올라감. 과하지 않은 우아함
- 분위기: 도시적·클래식. 화보를 찍으면 바로 써먹을 수 있는 세련된 첫인상

■ JYP엔터테인먼트
대표: ${isFemale ? '나연·지효(TWICE), 류진·예지(ITZY), 수지(구 미쓰에이)' : '필릭스·현진(Stray Kids), 영재(GOT7), 닉(엔시티)'}
외모 DNA:
- 얼굴형: 나연처럼 둥글고 생기있는 얼굴. 볼에 살이 있어 건강해 보임
- 눈: 크고 동그란 눈, 눈꼬리 내려가거나 수평. 눈웃음이 예쁨
- 코: 예지처럼 둥그스름하고 친근한 인상. 콧방울이 적당히 통통
- 입: 도톰하고 촉촉한 입술. 웃을 때 더 예뻐지는 입매
- 분위기: 밝고 친근하며 건강한 에너지. 옆집 친구 같은 편안함 속에 빛나는 매력

■ YG엔터테인먼트
대표: ${isFemale ? '제니·지수·리사·로제(BLACKPINK)' : 'G-DRAGON·태양·TOP(BIGBANG), 송민호(WINNER), 바비(iKON)'}
외모 DNA:
- 얼굴형: 제니처럼 개성 강한 얼굴형. 각진 턱선 또는 강한 광대, 독특한 윤곽
- 눈: 지수처럼 고양이상 눈꼬리 올라간 눈매 또는 반쯤 감긴 듯한 몽환적 눈. 강렬한 첫인상
- 코: 날카롭고 기품있는 코. 콧대 뚜렷하고 코끝이 도전적
- 입: 로제처럼 또렷한 입술 라인. 무표정에도 강한 존재감
- 분위기: 힙하고 반항적인 카리스마. 스트릿 패션이 어울리는 강렬함

■ HYBE
대표: ${isFemale ? '민지·해린·혜인(NewJeans), 카즈하·채원(LE SSERAFIM)' : 'V·정국·지민(BTS), 정한·버논(세븐틴), 니키(ENHYPEN)'}
외모 DNA:
- 얼굴형: 민지처럼 작고 갸름한 얼굴. 이마 넓고 페이스라인 깨끗
- 눈: V처럼 길고 청량한 눈. 눈꼬리 내려가거나 수평. 청순함과 시크함 공존
- 코: 작고 오뚝하며 단정. 전체 얼굴에서 도드라지지 않는 조화
- 입: 얇고 단정한 입술. 도도한 인상
- 분위기: 청량·글로벌·Y2K. 화장 없이도 빛나는 맑은 인상

---

[5개 항목 세부 채점 (각 항목 0-10점, 4개 기획사 각각)]
위 소속사 DNA를 기준으로 이 사람의 얼굴이 각 소속사에 얼마나 맞는지 채점하세요.
- 각 항목에서 최고점과 최저점 차이 반드시 4점 이상
- 가장 잘 맞는 소속사는 해당 항목에서 7점 이상
항목: faceShape, eyes, noseLips, vibe, similarity

---

[결과 작성 지침 — 공감도 극대화]

■ summary (가장 중요):
캐스팅 디렉터가 처음 이 얼굴을 봤을 때의 생생한 첫인상으로 시작하세요.
- 이 사람만의 가장 두드러진 특징을 먼저 언급
- "[소속사] 캐스팅 디렉터라면 바로 픽했을" 같은 표현 활용
- 구체적인 외모 특징과 소속사 DNA를 연결
- 절대 금지: "이 사람은 SM에 어울립니다" 같은 보고서 체
- 읽고 나서 "맞아, 나 그런 분위기야!" 하고 공감되게 써주세요

■ features.eyes: 눈의 가장 매력적인 특징 먼저 칭찬 → 어떤 아이돌과 연결되는지
■ features.nose: 코의 인상적 특징 → 전체 얼굴 균형에서 하는 역할
■ features.lips: 입술/입꼬리 특징 → 표정에서 주는 인상
■ features.overall: 이 사람이 무대에 선다면 어떤 포지션/컨셉이 어울릴지 구체적으로

■ similarIdol (필수):
이름만 쓰지 말고 "왜 닮았는지"를 함께 쓰세요.
형식: "이름(그룹) — [구체적으로 닮은 특징]"
예시: "카리나(aespa) — 갸름한 얼굴형과 또렷한 눈매의 조합"
다른 소속사 아이돌 언급 금지. topAgency 소속만.

---

얼굴이 있는 경우에만 아래 JSON으로 응답. 그 외: {"error": "이유"}

{
  "topAgency": "SM" | "JYP" | "YG" | "HYBE",
  "subScores": {
    "SM":   {"faceShape": 숫자, "eyes": 숫자, "noseLips": 숫자, "vibe": 숫자, "similarity": 숫자},
    "JYP":  {"faceShape": 숫자, "eyes": 숫자, "noseLips": 숫자, "vibe": 숫자, "similarity": 숫자},
    "YG":   {"faceShape": 숫자, "eyes": 숫자, "noseLips": 숫자, "vibe": 숫자, "similarity": 숫자},
    "HYBE": {"faceShape": 숫자, "eyes": 숫자, "noseLips": 숫자, "vibe": 숫자, "similarity": 숫자}
  },
  "summary": "캐스팅 디렉터 첫인상 서술 — 생생하고 구체적으로 (2-3문장)",
  "features": {
    "eyes": "눈매 — 칭찬+아이돌 연결 (1-2문장)",
    "nose": "코 — 인상적 특징+균형감 (1문장)",
    "lips": "입매 — 특징+표정 인상 (1문장)",
    "overall": "무대 위 포지션/컨셉 묘사 (1-2문장)"
  },
  "similarIdol": "이름(그룹) — 구체적으로 닮은 이유"
}`
      : lang === 'zh'
      ? `您是在SM·JYP·YG·HYBE选秀现场工作超过10年的资深星探。
请看照片中的脸，直观且具体地分析"这个人适合哪家公司"。

[人脸选择规则]
- 多人照片：选择最大且最居中的人脸进行分析
- 单人照片：直接分析该人脸

[仅在以下情况返回{"error": "原因"}]
- 动物、物体、风景、食物、绘画、卡通、角色
- 脸部完全遮挡或太小无法识别五官

---

[各公司颜值DNA — 以真实偶像为基准]

■ SM娱乐
代表：${isFemale ? '卡莉娜·Winter(aespa)，瑟琪·艾琳(Red Velvet)，太妍(SNSD)' : '泰民·Key(SHINee)，凯·首护·伯贤(EXO)'}
颜值DNA：
- 脸型：像卡莉娜一样轮廓清晰的鹅蛋脸/心形脸，颧骨适中，下颌纤细
- 眼睛：像泰民一样清晰精致，眼尾水平或微微上扬，双眼皮均衡
- 鼻子：鼻梁高挺，鼻尖俏丽，鼻翼纤细整洁
- 嘴唇：嘴角自然上扬，不过分浓艳的优雅感
- 气质：都市感·经典美，拍杂志封面般的精致第一印象

■ JYP娱乐
代表：${isFemale ? '娜演·志效(TWICE)，柳真·叶知(ITZY)，秀智(前Miss A)' : '菲利克斯·贤振(Stray Kids)，荣宰(GOT7)'}
颜值DNA：
- 脸型：像娜演一样圆润有活力的脸，脸颊丰满显健康
- 眼睛：大而圆的眼睛，眼尾下垂或水平，笑眼迷人
- 鼻子：像叶知一样圆润亲切，鼻翼适度圆润
- 嘴唇：丰润水润的嘴唇，笑起来更好看的嘴型
- 气质：阳光·亲切·健康活力，邻家感中散发的耀眼魅力

■ YG娱乐
代表：${isFemale ? '珍妮·智秀·Lisa·Rosé(BLACKPINK)' : 'G-DRAGON·太阳·TOP(BIGBANG)，宋旻浩(WINNER)'}
颜值DNA：
- 脸型：像珍妮一样个性强烈的脸型，有棱角的下颌线或突出的颧骨
- 眼睛：像智秀一样猫眼上扬或半眯的迷离眼神，强烈的第一印象
- 鼻子：锋利而有气质的鼻子，鼻梁明显，鼻尖有挑战感
- 嘴唇：像Rosé一样轮廓清晰的嘴唇，面无表情也很有存在感
- 气质：潮流·叛逆魅力，穿街头风格特别帅的强烈感

■ HYBE
代表：${isFemale ? '敏知·海琳(NewJeans)，一花·彩媛(LE SSERAFIM)' : 'V·柾国·智旻(BTS)，珍汉·Vernon(SEVENTEEN)'}
颜值DNA：
- 脸型：像敏知一样小而纤细的脸，额头宽，脸部线条干净
- 眼睛：像V一样细长清澈的眼睛，眼尾下垂或水平，清纯与酷感并存
- 鼻子：小巧挺立而整洁，与整张脸和谐不突兀
- 嘴唇：薄而整洁的嘴唇，给人高冷印象
- 气质：清爽·全球感·Y2K，不化妆也光彩照人的清透印象

---

[5项详细评分（每项0-10分，4家公司各自评分）]
以上述公司DNA为基准，评估此人的脸与各公司的匹配程度。
- 每项中最高分与最低分之差必须至少4分
- 最匹配的公司在该项必须达到7分以上
评分项：faceShape, eyes, noseLips, vibe, similarity

---

[结果撰写指南 — 最大化共鸣感]

■ summary（最重要）：
以星探第一次看到这张脸时的生动第一印象开始。
- 首先提及这个人最突出的特征
- 活用"[公司]的星探一定会立刻注意到"这样的表达
- 将具体外貌特征与公司DNA相连接
- 绝对禁止："这个人适合SM"这样的报告式写法
- 读完后让人感到"对，我就是这种气质！"的共鸣感

■ features.eyes：先称赞眼睛最迷人的特征 → 与哪位偶像相连
■ features.nose：鼻子的印象特征 → 在整体面部平衡中的作用
■ features.lips：嘴唇/嘴角特征 → 表情给人的印象
■ features.overall：如果这个人站上舞台，适合什么定位/概念

■ similarIdol（必填）：
不要只写名字，要一起写"为什么像"。
格式："姓名（团体）— [具体相似的特征]"
例：卡莉娜(aespa) — 纤细脸型与清晰眼神的组合
禁止提及其他公司偶像，只写topAgency所属。

---

检测到人脸时仅用JSON回复。否则：{"error": "原因"}

{
  "topAgency": "SM" | "JYP" | "YG" | "HYBE",
  "subScores": {
    "SM":   {"faceShape": 数字, "eyes": 数字, "noseLips": 数字, "vibe": 数字, "similarity": 数字},
    "JYP":  {"faceShape": 数字, "eyes": 数字, "noseLips": 数字, "vibe": 数字, "similarity": 数字},
    "YG":   {"faceShape": 数字, "eyes": 数字, "noseLips": 数字, "vibe": 数字, "similarity": 数字},
    "HYBE": {"faceShape": 数字, "eyes": 数字, "noseLips": 数字, "vibe": 数字, "similarity": 数字}
  },
  "summary": "星探生动的第一印象描述 — 具体且有共鸣感（2-3句话）",
  "features": {
    "eyes": "眼神 — 称赞+偶像联结（1-2句话）",
    "nose": "鼻子 — 印象特征+平衡感（1句话）",
    "lips": "嘴型 — 特征+表情印象（1句话）",
    "overall": "舞台上的定位/概念描述（1-2句话）"
  },
  "similarIdol": "姓名（团体）— 具体相似原因"
}`
      : lang === 'ja'
      ? `あなたはSM・JYP・YG・HYBEのオーディション現場で10年以上働いてきたベテランキャスティングディレクターです。
写真の顔を見て「この人はどの事務所に合うのか」を直感的かつ具体的に分析してください。

[顔の選択ルール]
- 複数人の写真：最も大きく中央に近い顔1人を選んで分析
- 1人の場合：その顔を分析

[分析不可の条件 — 以下の場合のみ{"error": "理由"}を返す]
- 動物、物体、風景、食べ物、絵画、マンガ、キャラクター
- 顔が完全に隠れているかパーツが識別不可

---

[各事務所のビジュアルDNA — 実際のアイドル基準]

■ SMエンタテインメント
代表：${isFemale ? 'カリナ・ウィンター(aespa)、スルギ・アイリン(Red Velvet)、テヨン(SNSD)' : 'テミン・キー(SHINee)、カイ・スホ・ベッキョン(EXO)'}
ビジュアルDNA：
- 顔型：カリナのようにラインが綺麗な卵型・ハート型。頬骨が適度で顎がシャープ
- 目：テミンのようにくっきりと洗練された目。目尻が水平~わずかに上がり、バランスの良い二重まぶた
- 鼻：鼻筋が高くて鼻先がすっきり。鼻幅が狭く整った印象
- 口：口角が自然に上がり、過度でない上品さ
- 雰囲気：都会的・クラシック。雑誌の表紙にそのまま使えるような洗練された第一印象

■ JYPエンタテインメント
代表：${isFemale ? 'ナヨン・ジヒョ(TWICE)、リュジン・イェジ(ITZY)、スジ(元Miss A)' : 'フィリックス・ヒョンジン(Stray Kids)、ヨンジェ(GOT7)'}
ビジュアルDNA：
- 顔型：ナヨンのように丸みがあって生き生きとした顔。頬に肉感があって健康的に見える
- 目：大きくて丸い目。目尻が下がるか水平で、笑顔が可愛い
- 鼻：イェジのように丸みがあって親しみやすい印象。小鼻が適度にふっくら
- 口：ふっくらとした潤いのある唇。笑うともっと可愛くなる口元
- 雰囲気：明るく親しみやすく健康的なエネルギー。隣の友人のような安心感の中に輝く魅力

■ YGエンタテインメント
代表：${isFemale ? 'ジェニー・ジス・Lisa・ロゼ(BLACKPINK)' : 'G-DRAGON・テヤン・TOP(BIGBANG)、ソン・ミノ(WINNER)'}
ビジュアルDNA：
- 顔型：ジェニーのように個性の強い顔型。角ばった顎線か強い頬骨、独特な輪郭
- 目：ジスのように猫目で目尻が上がるか、半目がちな幻想的な目。強烈な第一印象
- 鼻：シャープで気品のある鼻。鼻筋がはっきりして鼻先に挑戦的な印象
- 口：ロゼのようにくっきりした唇のライン。無表情でも強い存在感
- 雰囲気：ヒップで反骨的なカリスマ。ストリートファッションが似合う強烈な個性

■ HYBE
代表：${isFemale ? 'ミンジ・ヘリン(NewJeans)、カズハ・チェウォン(LE SSERAFIM)' : 'V・ジョングク・ジミン(BTS)、ジョンハン・バーノン(SEVENTEEN)'}
ビジュアルDNA：
- 顔型：ミンジのように小さくてシャープな顔。額が広くてフェイスラインがクリーン
- 目：Vのように細長くて澄んだ目。目尻が下がるか水平で、清楚さとクールさが共存
- 鼻：小さくて高くて整っている。顔全体の中で目立ちすぎないバランス
- 口：薄くて整った唇。クールな印象
- 雰囲気：爽やか・グローバル・Y2K。すっぴんでも輝くような透明感のある印象

---

[5項目の詳細採点（各項目0-10点、4つの事務所それぞれ）]
上記の事務所DNAを基準に、この人の顔が各事務所にどれだけ合っているか採点してください。
- 各項目で最高点と最低点の差が必ず4点以上
- 最も合う事務所はその項目で7点以上
採点項目：faceShape, eyes, noseLips, vibe, similarity

---

[結果の書き方 — 共感度を最大化]

■ summary（最重要）：
キャスティングディレクターがこの顔を初めて見た時の生き生きとした第一印象から始めてください。
- この人だけの最も際立つ特徴を最初に言及
- 「[事務所]のキャスティングディレクターなら即スカウトしたはず」という表現を活用
- 具体的な外見の特徴と事務所DNAを結びつける
- 絶対禁止：「この人はSMに向いています」のような報告書体
- 読んだ後に「そう、私ってそういう雰囲気だよね！」と共感できるように書く

■ features.eyes：目の最も魅力的な特徴をまず褒める → どのアイドルと繋がるか
■ features.nose：鼻の印象的な特徴 → 顔全体のバランスにおける役割
■ features.lips：唇/口角の特徴 → 表情から伝わる印象
■ features.overall：この人がステージに立つなら、どんなポジション/コンセプトが合うか具体的に

■ similarIdol（必須）：
名前だけでなく「なぜ似ているか」を一緒に書いてください。
形式：「名前（グループ）— [具体的に似ている特徴]」
例：カリナ(aespa) — 細い顔型とくっきりした目元の組み合わせ
他の事務所のアイドルに言及禁止。topAgency所属のみ。

---

顔がある場合のみ以下のJSONで回答。それ以外：{"error": "理由"}

{
  "topAgency": "SM" | "JYP" | "YG" | "HYBE",
  "subScores": {
    "SM":   {"faceShape": 数値, "eyes": 数値, "noseLips": 数値, "vibe": 数値, "similarity": 数値},
    "JYP":  {"faceShape": 数値, "eyes": 数値, "noseLips": 数値, "vibe": 数値, "similarity": 数値},
    "YG":   {"faceShape": 数値, "eyes": 数値, "noseLips": 数値, "vibe": 数値, "similarity": 数値},
    "HYBE": {"faceShape": 数値, "eyes": 数値, "noseLips": 数値, "vibe": 数値, "similarity": 数値}
  },
  "summary": "キャスティングディレクターの生き生きとした第一印象（2-3文、具体的に）",
  "features": {
    "eyes": "目元 — 褒め言葉+アイドル連結（1-2文）",
    "nose": "鼻 — 印象的な特徴+バランス感（1文）",
    "lips": "口元 — 特徴+表情の印象（1文）",
    "overall": "ステージ上のポジション/コンセプト描写（1-2文）"
  },
  "similarIdol": "名前（グループ）— 具体的に似ている理由"
}`
      : `You are a veteran K-pop casting director with 10+ years on the ground at SM, JYP, YG, and HYBE auditions.
Look at the face in the photo and give a vivid, specific analysis of which agency this person belongs to.

[Face selection rules]
- Multiple people: select the largest and most centered face
- Single person: analyze that face

[Return {"error": "reason"} ONLY if]
- Animals, objects, scenery, food, drawings, cartoons, characters
- Face completely obscured or features unidentifiable

---

[Each Agency's Visual DNA — Based on Real Idols]

■ SM Entertainment
Icons: ${isFemale ? 'Karina & Winter (aespa), Seulgi & Irene (Red Velvet), Taeyeon (SNSD)' : 'Taemin & Key (SHINee), Kai, Suho & Baekhyun (EXO)'}
Visual DNA:
- Face shape: Like Karina — clean-lined oval or heart face. Balanced cheekbones, slim jaw
- Eyes: Like Taemin — sharp and refined. Horizontal to slightly upturned corners, balanced double eyelid
- Nose: High bridge, neat tip, narrow nostrils — polished and precise
- Lips: Naturally lifted corners, understated elegance
- Vibe: Urban, classic. The kind of face that looks magazine-ready the moment you see it

■ JYP Entertainment
Icons: ${isFemale ? 'Nayeon & Jihyo (TWICE), Ryujin & Yeji (ITZY), Suzy (former Miss A)' : 'Felix & Hyunjin (Stray Kids), Youngjae (GOT7)'}
Visual DNA:
- Face shape: Like Nayeon — round and lively. Full cheeks that radiate health and warmth
- Eyes: Big round eyes, horizontal to slightly downturned corners. Irresistible eye-smile
- Nose: Like Yeji — rounded and approachable, slightly full nostrils
- Lips: Plump and dewy. The kind that looks even better when smiling
- Vibe: Bright, friendly, healthy energy. The charm that shines through natural relatability

■ YG Entertainment
Icons: ${isFemale ? 'Jennie, Jisoo, Lisa & Rosé (BLACKPINK)' : 'G-Dragon, Taeyang & T.O.P (BIGBANG), Song Mino (WINNER)'}
Visual DNA:
- Face shape: Like Jennie — strong personality. Angular jaw or defined cheekbones, distinctive contour
- Eyes: Like Jisoo — cat-like upturned gaze or heavy-lidded mystique. Instant intense impression
- Nose: Sharp, aristocratic bridge. Defined and bold
- Lips: Like Rosé — crisp lip line. Commanding presence even with a neutral expression
- Vibe: Hip, rebellious charisma. Made for streetwear and attitude

■ HYBE
Icons: ${isFemale ? 'Minji & Haerin (NewJeans), Kazuha & Chaewon (LE SSERAFIM)' : 'V, Jungkook & Jimin (BTS), Jeonghan & Vernon (SEVENTEEN)'}
Visual DNA:
- Face shape: Like Minji — small and slim. Wide forehead, clean hairline and jawline
- Eyes: Like V — long and crystal-clear. Horizontal to slightly downturned. Innocent yet chic
- Nose: Small, neat, and proportionate — blends harmoniously rather than standing out
- Lips: Thin and tidy, giving a cool, aloof impression
- Vibe: Fresh, global, Y2K. The kind of face that glows without makeup

---

[5-Dimension Scoring (0-10 per dimension per agency)]
Score based on the DNA above — how well does this person's face match each agency?
- Each dimension MUST have at least a 4-point spread between highest and lowest
- The best-matching agency should score 7+ in that dimension
Dimensions: faceShape, eyes, noseLips, vibe, similarity

---

[Writing Guidelines — Maximize Relatability]

■ summary (most important):
Open with the casting director's vivid, gut-reaction first impression.
- Lead with the most striking feature of this specific face
- Use lines like "Any [agency] casting director would have spotted them instantly"
- Connect specific features to the agency's DNA
- NEVER write: "This person suits SM" — no report-style language
- The reader should think: "Yes, that's exactly my vibe!"

■ features.eyes: Lead with the most attractive thing about the eyes → connect to which idol
■ features.nose: What's distinctive about the nose → its role in overall facial balance
■ features.lips: Lip/mouth corner traits → the impression it gives in expression
■ features.overall: If this person were on stage, what position/concept would suit them

■ similarIdol (MANDATORY):
Don't just write a name — explain WHY they resemble that idol.
Format: "Name (Group) — [specific resemblance]"
Example: "Karina (aespa) — the combo of a slim face and sharp, defined eyes"
No idols from other agencies. Only topAgency members.

---

Respond with JSON only if face detected. Otherwise: {"error": "reason"}

{
  "topAgency": "SM" | "JYP" | "YG" | "HYBE",
  "subScores": {
    "SM":   {"faceShape": number, "eyes": number, "noseLips": number, "vibe": number, "similarity": number},
    "JYP":  {"faceShape": number, "eyes": number, "noseLips": number, "vibe": number, "similarity": number},
    "YG":   {"faceShape": number, "eyes": number, "noseLips": number, "vibe": number, "similarity": number},
    "HYBE": {"faceShape": number, "eyes": number, "noseLips": number, "vibe": number, "similarity": number}
  },
  "summary": "Casting director's vivid first impression — specific and relatable (2-3 sentences)",
  "features": {
    "eyes": "Eyes — compliment + idol connection (1-2 sentences)",
    "nose": "Nose — distinctive trait + balance role (1 sentence)",
    "lips": "Lips — trait + expression impression (1 sentence)",
    "overall": "Stage position/concept that fits this person (1-2 sentences)"
  },
  "similarIdol": "Name (Group) — specific reason for resemblance"
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
