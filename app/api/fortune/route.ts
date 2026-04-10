export const runtime = 'edge';

import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getZodiacSign, getChineseZodiac } from "@/lib/zodiac";
import { VALID_LANGS } from "@/lib/i18n";

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

// Static fortune fallback — used when GEMINI_API_KEY is not configured
// Generates a deterministic but varied fortune based on zodiac + date
function getStaticFortune(
  zodiacSign: string,
  chineseZodiac: string,
  gender: string,
  language: string
): FortuneResponse {
  const today = new Date();
  // Seed: day of year + zodiac hash for variety
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000
  );
  const zodiacHash = zodiacSign.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const seed = (dayOfYear * 13 + zodiacHash * 7) % 100;

  const score = 45 + (seed % 50); // 45–94 range

  type LangKey = "ko" | "en" | "ja" | "zh";
  const lang = (["ko", "en", "ja", "zh"].includes(language) ? language : "ko") as LangKey;

  const templates: Record<LangKey, {
    overall: string[];
    love: string[];
    money: string[];
    work: string[];
    luckyColors: string[];
  }> = {
    ko: {
      overall: [
        `${zodiacSign}의 기운이 오늘 당신의 내면을 조용히 채웁니다. 주변의 소음에 휘둘리지 말고 자신의 중심을 지키세요. 오늘은 새로운 시도보다 현재의 것을 안정시키는 날입니다.`,
        `${chineseZodiac}의 해 기운이 흐르는 오늘, 작은 것에서 큰 의미를 발견할 수 있습니다. 서두르지 않는 태도가 오히려 더 많은 것을 가져다 줄 것입니다.`,
        `오늘은 ${zodiacSign}의 수호 행성이 순행하는 날입니다. 오랫동안 미뤄온 일을 시작하기에 좋은 에너지가 흐릅니다. 직관을 믿고 한 걸음 내딛어 보세요.`,
      ],
      love: [
        `감정 표현을 조금 더 솔직하게 해보세요. 상대방은 당신의 진심을 기다리고 있을 수 있습니다. 작은 배려 하나가 관계를 크게 바꿀 수 있습니다.`,
        `오늘은 혼자만의 시간이 연애 에너지를 재충전시켜 줍니다. 강요하거나 서두르지 말고, 자연스러운 흐름에 맡기세요. 인연은 준비된 자에게 옵니다.`,
        `파트너와 솔직한 대화를 나누기 좋은 날입니다. 오해가 쌓인 부분이 있다면 오늘이 풀 기회입니다. 부드러운 말 한마디가 큰 울림을 줄 것입니다.`,
      ],
      money: [
        `충동적인 지출을 삼가고 필요한 것과 원하는 것을 구분해 보세요. 작은 절약의 습관이 큰 재정적 안정으로 이어집니다. 재테크보다 지출 관리가 우선입니다.`,
        `예상치 못한 소소한 수입이 있을 수 있습니다. 하지만 큰 투자나 거래는 오늘보다 좀 더 신중하게 검토한 후 결정하세요. 안정이 수익보다 우선입니다.`,
        `오늘은 금전적으로 큰 변동은 없는 무난한 날입니다. 가계부를 정리하거나 재정 계획을 점검하기에 좋은 날입니다. 미래를 위한 씨앗을 심는 시간으로 활용하세요.`,
      ],
      work: [
        `집중력이 높아지는 시간대를 찾아 중요한 업무를 배치하세요. 협업보다는 개인 작업이 더 효율적인 날입니다. 완벽을 추구하되 완료를 먼저 하는 전략이 필요합니다.`,
        `팀 내에서 당신의 아이디어가 빛을 발할 수 있습니다. 의견을 적극적으로 표현하되 상대의 말도 충분히 들어주세요. 오늘의 소통이 내일의 기회를 만듭니다.`,
        `어려운 문제에 부딪힌다면 다른 시각에서 접근해 보세요. 막혀있던 것들이 의외의 방향에서 풀릴 수 있습니다. 포기하지 않는 끈기가 오늘의 미덕입니다.`,
      ],
      luckyColors: ["보라색", "파란색", "초록색", "노란색", "주황색", "분홍색", "하늘색", "금색"],
    },
    en: {
      overall: [
        `The energy of ${zodiacSign} quietly fills your inner world today. Stay grounded and resist being swayed by external noise. Today is a day to consolidate, not to rush into the new.`,
        `With the ${chineseZodiac} year's energy in flow, you can find great meaning in small things. A patient approach will bring you far more than haste ever could.`,
        `Your ruling planet moves in harmony today. Stagnant projects you've been putting off now have fresh wind behind them. Trust your instincts and take that first step.`,
      ],
      love: [
        `Be a little more honest with your feelings. The other person may be waiting for your sincerity. A small gesture of care can transform the relationship in ways you don't expect.`,
        `Today, solitary time recharges your romantic energy. Don't force things or rush — let the natural flow guide you. Connection comes to those who are ready.`,
        `This is a good day for an honest conversation with your partner. If misunderstandings have built up, today is the moment to clear the air. Gentle words will resonate deeply.`,
      ],
      money: [
        `Avoid impulsive spending and distinguish between needs and wants. Small savings habits lead to great financial stability over time. Expense management comes before investment strategy.`,
        `A modest unexpected income is possible today. But hold off on large investments or deals — review them more carefully before committing. Stability outweighs short-term gains.`,
        `Financially, today is steady and unremarkable. It's a great day to review your budget or check your financial plan. Use it to plant seeds for a more secure future.`,
      ],
      work: [
        `Identify your peak focus hours and schedule critical tasks then. Solo work proves more productive than collaboration today. Aim for done before perfect.`,
        `Your ideas can shine within the team today. Express your views actively, but also listen fully to others. Today's communication plants tomorrow's opportunity.`,
        `If you hit a wall, try approaching from a different angle. Solutions to stubborn problems can appear from unexpected directions. Persistence is today's greatest virtue.`,
      ],
      luckyColors: ["purple", "blue", "green", "yellow", "orange", "pink", "sky blue", "gold"],
    },
    ja: {
      overall: [
        `${zodiacSign}のエネルギーが今日、あなたの内面を静かに満たします。周囲の喧騒に流されず、自分の軸を守ってください。新しいことより今あるものを安定させる日です。`,
        `${chineseZodiac}の年の気が流れる今日、小さなことに大きな意味を見出せます。焦らない姿勢がむしろ多くのものをもたらしてくれるでしょう。`,
        `今日は守護惑星が順行する日です。長い間後回しにしていたことを始めるエネルギーが流れています。直感を信じて一歩踏み出してみてください。`,
      ],
      love: [
        `もう少し素直に感情を表現してみてください。相手はあなたの本心を待っているかもしれません。小さな気遣いが関係を大きく変えることがあります。`,
        `今日は一人の時間が恋愛エネルギーを充電してくれます。強引にせず焦らず、自然な流れに委ねましょう。縁は準備ができた人のところへやってきます。`,
        `パートナーと率直な話し合いをするのに良い日です。誤解が積み重なっている部分があれば今日が解消のチャンスです。穏やかな一言が大きな響きを持ちます。`,
      ],
      money: [
        `衝動的な出費を控え、必要なものと欲しいものを区別してみてください。小さな節約の習慣が大きな経済的安定につながります。運用より支出管理が先決です。`,
        `思わぬ小さな収入があるかもしれません。ただし大きな投資や取引は今日より慎重に検討してから決めましょう。安定が収益より優先されます。`,
        `今日は金銭的に大きな変動のない平穏な日です。家計簿の整理や財務計画の見直しに適した日です。将来のための種を蒔く時間に活用してください。`,
      ],
      work: [
        `集中力が高まる時間帯を見つけて重要な業務を配置してください。協業より個人作業の方が効率的な日です。完璧より完了を優先する戦略が必要です。`,
        `チーム内であなたのアイデアが輝けます。積極的に意見を表現しながらも相手の話もしっかり聞きましょう。今日のコミュニケーションが明日のチャンスを生みます。`,
        `困難な問題にぶつかったら、別の視点からアプローチしてみてください。行き詰まっていたことが意外な方向から解決するかもしれません。諦めない粘り強さが今日の美徳です。`,
      ],
      luckyColors: ["紫色", "青色", "緑色", "黄色", "オレンジ", "ピンク", "水色", "金色"],
    },
    zh: {
      overall: [
        `${zodiacSign}的能量今天悄悄充满你的内心。不要被外界的喧嚣所左右，守住自己的重心。今天是巩固现有事物的日子，而非仓促开始新事物。`,
        `在${chineseZodiac}年运气流动的今天，你能从小事中发现大意义。不急不躁的态度反而会带来更多收获。`,
        `今天是守护星顺行的日子。长期搁置的事项现在有了新的推动力。相信直觉，迈出第一步吧。`,
      ],
      love: [
        `试着更坦诚地表达你的感情。对方可能正在等待你的真心。一个小小的关心举动可能会让关系发生巨大改变。`,
        `今天独处的时光能为你的爱情能量充电。不要强迫或着急，顺其自然吧。缘分会来到准备好的人身边。`,
        `今天适合与伴侣进行坦诚的对话。如果有误解积累，今天正是化解的机会。温柔的一句话会产生深远的影响。`,
      ],
      money: [
        `避免冲动消费，区分需要和想要。小储蓄的习惯会带来巨大的财务稳定。支出管理优先于理财投资。`,
        `可能会有意外的小收入。但大额投资或交易请更谨慎地审查后再决定。稳定比短期收益更重要。`,
        `今天财务上没有大的波动，是平稳的一天。适合整理家庭账本或检视财务计划。把它当作为未来播下种子的时间吧。`,
      ],
      work: [
        `找到注意力最集中的时段安排重要工作。今天个人工作比合作更有效率。先求完成再求完美。`,
        `你的想法在团队中可以大放异彩。积极表达意见，同时也要充分倾听对方。今天的沟通创造明天的机会。`,
        `遇到难题时，试着换个角度思考。一直卡住的事情可能会从意想不到的方向得到解决。坚持不懈是今天最大的美德。`,
      ],
      luckyColors: ["紫色", "蓝色", "绿色", "黄色", "橙色", "粉色", "天蓝色", "金色"],
    },
  };

  const tpl = templates[lang];
  const idx = (seed % 3) as 0 | 1 | 2;
  const colorIdx = seed % tpl.luckyColors.length;
  const luckyNumber = 1 + (seed % 99);

  return {
    zodiacSign,
    chineseZodiac,
    overall: tpl.overall[idx],
    love: tpl.love[idx],
    money: tpl.money[idx],
    work: tpl.work[idx],
    luckyColor: tpl.luckyColors[colorIdx],
    luckyNumber,
    score,
  };
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

    // gender 검증
    const ALLOWED_GENDERS = ["남자", "여자"];
    if (!gender || !ALLOWED_GENDERS.includes(gender)) {
      return NextResponse.json({ error: "성별은 남자 또는 여자만 허용됩니다." }, { status: 400 });
    }

    // language 검증
    if (language !== undefined && !VALID_LANGS.includes(language as never)) {
      return NextResponse.json({ error: "지원하지 않는 언어입니다." }, { status: 400 });
    }

    const zodiac = getZodiacSign(birthDate);
    const birthYear = parsedDate.getFullYear();
    const chineseZodiac = getChineseZodiac(birthYear);
    const todayKorean = getTodayKorean();

    const apiKey = process.env.GEMINI_API_KEY;

    // No API key → return static fortune (site always works)
    if (!apiKey) {
      const staticFortune = getStaticFortune(zodiac.korean, chineseZodiac, gender, language || "ko");
      return NextResponse.json(staticFortune, { status: 200 });
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
      // Gemini returned empty → fall back to static
      const staticFortune = getStaticFortune(zodiac.korean, chineseZodiac, gender, language || "ko");
      return NextResponse.json(staticFortune, { status: 200 });
    }

    let fortuneData: FortuneResponse;
    try {
      const cleanedText = responseText
        .replace(/^```(?:json)?\s*/i, "")
        .replace(/\s*```$/i, "")
        .trim();

      fortuneData = JSON.parse(cleanedText);
    } catch {
      // Parse failure → fall back to static
      const staticFortune = getStaticFortune(zodiac.korean, chineseZodiac, gender, language || "ko");
      return NextResponse.json(staticFortune, { status: 200 });
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

    // Any other server error → return static fortune so site never breaks
    try {
      const body = await request.clone().json().catch(() => ({})) as { birthDate?: string; gender?: string; language?: string };
      const zodiac = body.birthDate ? getZodiacSign(body.birthDate) : { korean: "양자리", english: "Aries" };
      const birthYear = body.birthDate ? new Date(body.birthDate).getFullYear() : 2000;
      const chineseZodiac = getChineseZodiac(birthYear);
      const staticFortune = getStaticFortune(zodiac.korean, chineseZodiac, body.gender || "남자", body.language || "ko");
      return NextResponse.json(staticFortune, { status: 200 });
    } catch {
      return NextResponse.json(
        { error: "서버 내부 오류가 발생했습니다." },
        { status: 500 }
      );
    }
  }
}
