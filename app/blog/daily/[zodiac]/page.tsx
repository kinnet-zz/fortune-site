'use client';

export const runtime = 'edge';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const bgStyle = {
  background: 'linear-gradient(160deg, #050520 0%, #0a0a2e 30%, #130a2e 60%, #1a0a3e 100%)',
  minHeight: '100vh',
};

const ZODIAC_SLUGS = [
  'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo',
  'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces',
];

const ZODIAC_INFO: Record<string, {
  ko: string; symbol: string; element: string; planet: string;
  dates: string; trait: string; desc: string; tip: string;
}> = {
  aries:       { ko: '양자리',   symbol: '♈', element: '불', planet: '화성',  dates: '3/21~4/19',  trait: '용감하고 도전적인 개척자',
    desc: '양자리는 황도대의 첫 번째 별자리로, 불의 원소를 지닌 행동파입니다. 화성의 지배를 받아 에너지와 열정이 넘치며, 새로운 시작을 이끄는 타고난 리더입니다. 오늘 하루 화성의 에너지가 당신에게 용기와 추진력을 더해줍니다.',
    tip: '양자리 일일운세는 당신의 충동적 에너지를 건설적으로 활용하는 방향을 제시합니다. 종합운이 높은 날에는 새 프로젝트나 인간관계 시도에 적극 나서고, 낮은 날에는 잠시 속도를 늦추는 것이 좋습니다.' },
  taurus:      { ko: '황소자리', symbol: '♉', element: '땅', planet: '금성',  dates: '4/20~5/20',  trait: '안정적이고 신뢰감 있는 수호자',
    desc: '황소자리는 땅의 원소를 지닌 금성 지배 별자리로, 안정·아름다움·물질적 풍요를 상징합니다. 인내심이 강하고 신뢰할 수 있는 성격이며, 한 번 결심하면 끝까지 밀어붙이는 지구력이 있습니다. 오늘 금성이 보내는 풍요의 에너지에 집중해보세요.',
    tip: '황소자리 일일운세는 재물과 감각적 즐거움에 관한 메시지를 담고 있습니다. 금전운이 높은 날에는 재테크 계획을 검토하고, 연애운이 좋은 날에는 감성적인 표현을 아끼지 마세요.' },
  gemini:      { ko: '쌍둥이자리', symbol: '♊', element: '공기', planet: '수성', dates: '5/21~6/21', trait: '호기심 많고 재치 있는 소통가',
    desc: '쌍둥이자리는 공기 원소의 수성 지배 별자리로, 지적 호기심과 뛰어난 소통 능력이 특징입니다. 다재다능하고 적응력이 강하며, 새로운 정보와 아이디어에 빠르게 반응합니다. 오늘 수성의 영리한 에너지가 당신의 언어와 사고를 날카롭게 합니다.',
    tip: '쌍둥이자리 일일운세에서 소통 관련 운세가 핵심입니다. 오늘 대화나 협상이 예정되어 있다면 종합운과 직업운을 함께 확인하고, 중요한 결정은 에너지 점수가 높은 날로 미루는 것이 유리합니다.' },
  cancer:      { ko: '게자리',   symbol: '♋', element: '물', planet: '달',    dates: '6/22~7/22',  trait: '감성적이고 가정적인 보호자',
    desc: '게자리는 물의 원소를 지닌 달 지배 별자리입니다. 강한 직관력과 공감 능력을 가지고 있으며, 가족과 가까운 사람들을 보호하려는 본능이 뛰어납니다. 달의 주기에 따라 감정이 유동적으로 변하며, 오늘 달이 보내는 직관의 메시지에 귀 기울여 보세요.',
    tip: '게자리 일일운세는 감정의 흐름을 읽는 데 특히 유용합니다. 사랑·인간관계 운이 좋은 날에는 가까운 사람에게 마음을 표현하고, 점수가 낮은 날에는 혼자만의 회복 시간을 갖는 것이 현명합니다.' },
  leo:         { ko: '사자자리', symbol: '♌', element: '불', planet: '태양',  dates: '7/23~8/22',  trait: '당당하고 카리스마 넘치는 왕자',
    desc: '사자자리는 불의 원소를 지닌 태양 지배 별자리로, 황도대에서 가장 강렬한 존재감을 자랑합니다. 창의성과 리더십이 뛰어나며, 자신이 중심이 되는 무대에서 빛을 발합니다. 오늘 태양의 에너지가 당신의 자신감과 창의력을 극대화합니다.',
    tip: '사자자리 일일운세에서 직업·커리어 운이 중요한 지표가 됩니다. 점수가 높은 날에는 발표나 제안 등 주목받는 자리에 나서세요. 낮은 날에는 무대 뒤에서 준비하는 시간으로 삼는 것이 좋습니다.' },
  virgo:       { ko: '처녀자리', symbol: '♍', element: '땅', planet: '수성',  dates: '8/23~9/22',  trait: '꼼꼼하고 분석적인 완벽주의자',
    desc: '처녀자리는 땅의 원소를 지닌 수성 지배 별자리입니다. 세심한 분석력과 실용적인 사고방식이 강점이며, 어떤 상황에서도 최선의 해결책을 찾아냅니다. 건강과 루틴에 대한 높은 의식이 있으며, 오늘 수성이 당신의 논리적 사고를 더욱 예리하게 만들어줍니다.',
    tip: '처녀자리 일일운세는 건강·루틴·업무 효율성과 밀접합니다. 건강 운과 직업 운이 높은 날에는 중요한 계획이나 분석 작업을 진행하고, 낮은 날에는 완벽주의를 잠시 내려놓고 충분히 쉬세요.' },
  libra:       { ko: '천칭자리', symbol: '♎', element: '공기', planet: '금성', dates: '9/23~10/23', trait: '균형 잡히고 공정한 외교관',
    desc: '천칭자리는 공기 원소를 지닌 금성 지배 별자리로, 균형·조화·아름다움을 추구합니다. 뛰어난 심미안과 외교적 능력을 가지고 있으며, 갈등보다는 협력과 평화를 선호합니다. 오늘 금성이 당신의 인간관계와 심미적 감각을 더욱 풍요롭게 합니다.',
    tip: '천칭자리 일일운세에서 사랑·인간관계 운이 핵심 지표입니다. 균형 점수가 높은 날에는 중요한 협상이나 화해를 시도하고, 낮은 날에는 혼자 결정을 내리기보다 신뢰할 수 있는 사람과 상의하세요.' },
  scorpio:     { ko: '전갈자리', symbol: '♏', element: '물', planet: '명왕성', dates: '10/24~11/22', trait: '직관적이고 집중력 강한 탐구자',
    desc: '전갈자리는 물의 원소를 지닌 명왕성(화성) 지배 별자리로, 황도대에서 가장 강렬하고 신비로운 에너지를 가집니다. 깊은 통찰력과 변화에 대한 두려움 없는 태도가 특징이며, 진실을 파고드는 집착적인 탐구심이 있습니다. 오늘 명왕성이 당신의 직관과 내면의 힘을 끌어올립니다.',
    tip: '전갈자리 일일운세는 숨겨진 진실과 변화의 기운을 반영합니다. 종합 점수가 높은 날에는 중요한 계약이나 투자 결정이 유리하며, 낮은 날에는 의심과 집착을 내려놓고 자신을 신뢰하는 연습을 해보세요.' },
  sagittarius: { ko: '사수자리', symbol: '♐', element: '불', planet: '목성',  dates: '11/23~12/21', trait: '낙관적이고 모험을 즐기는 철학자',
    desc: '사수자리는 불의 원소를 지닌 목성 지배 별자리로, 자유와 모험·철학적 탐구를 사랑합니다. 낙관적이고 개방적인 성격으로 새로운 경험에 두려움이 없으며, 지식과 지혜를 쌓는 것에서 큰 기쁨을 느낍니다. 오늘 목성의 확장 에너지가 당신의 가능성을 넓혀줍니다.',
    tip: '사수자리 일일운세는 여행·학습·신념과 관련한 메시지를 담습니다. 점수가 높은 날에는 새로운 도전이나 학습을 시작하기에 최적이며, 낮은 날에는 경솔한 약속이나 충동적 지출을 삼가세요.' },
  capricorn:   { ko: '염소자리', symbol: '♑', element: '땅', planet: '토성',  dates: '12/22~1/19',  trait: '성실하고 목표 지향적인 전략가',
    desc: '염소자리는 땅의 원소를 지닌 토성 지배 별자리로, 황도대에서 가장 야망 있고 자기 훈련이 철저한 별자리입니다. 장기적인 목표를 향해 꾸준히 나아가는 인내심과 현실적인 판단력이 강점입니다. 오늘 토성이 당신의 책임감과 집중력을 더욱 강화시켜줍니다.',
    tip: '염소자리 일일운세는 커리어·재물·장기 계획과 깊이 연결됩니다. 직업운·금전운이 높은 날에는 중요한 비즈니스 결정이나 투자를 검토하기 좋습니다. 낮은 날에는 목표 재점검과 휴식을 통해 에너지를 충전하세요.' },
  aquarius:    { ko: '물병자리', symbol: '♒', element: '공기', planet: '천왕성', dates: '1/20~2/18', trait: '독창적이고 인도주의적인 혁신가',
    desc: '물병자리는 공기 원소를 지닌 천왕성(토성) 지배 별자리로, 황도대에서 가장 독립적이고 혁신적인 별자리입니다. 인류애와 사회 변화에 대한 강한 관심을 가지고 있으며, 독특한 시각으로 세상을 바라봅니다. 오늘 천왕성이 당신의 창의성과 혁신 정신에 불꽃을 지핍니다.',
    tip: '물병자리 일일운세는 사회적 연결과 창의적 아이디어에 초점을 맞춥니다. 인간관계 운이 높은 날에는 새로운 사람을 만나거나 커뮤니티 활동에 참여하세요. 낮은 날에는 혼자 아이디어를 구상하는 고독한 시간이 오히려 생산적입니다.' },
  pisces:      { ko: '물고기자리', symbol: '♓', element: '물', planet: '해왕성', dates: '2/19~3/20', trait: '예민하고 상상력 풍부한 몽상가',
    desc: '물고기자리는 물의 원소를 지닌 해왕성(목성) 지배 별자리로, 황도대의 마지막 별자리입니다. 풍부한 상상력과 깊은 공감 능력을 가지고 있으며, 영적·예술적 감수성이 뛰어납니다. 12별자리의 지혜를 모두 담은 별자리로, 오늘 해왕성이 당신의 직관과 창의성을 높여줍니다.',
    tip: '물고기자리 일일운세는 감정·직관·영성의 흐름을 반영합니다. 점수가 높은 날에는 예술 작업이나 명상, 상담 등 감수성이 필요한 활동에 에너지를 쏟으세요. 낮은 날에는 현실적인 경계를 설정하고 감정 소진을 방지하는 데 집중하세요.' },
};

interface DailyHoroscope {
  zodiac: string;
  zodiacKo: string;
  date: string;
  emoji: string;
  score: number;
  summary: string;
  overall: string;
  love: string;
  money: string;
  work: string;
  health: string;
  luckyColor: string;
  luckyNumber: number;
  luckyItem: string;
  advice: string;
}

function getTodayKST(): string {
  const now = new Date();
  const kst = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  return kst.toISOString().slice(0, 10);
}

function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-');
  const date = new Date(dateStr);
  const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
  return `${year}년 ${parseInt(month)}월 ${parseInt(day)}일 (${weekdays[date.getDay()]}요일)`;
}

function ScoreRing({ score }: { score: number }) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  const color = score >= 80 ? '#a78bfa' : score >= 65 ? '#60a5fa' : '#94a3b8';

  return (
    <div className="relative flex items-center justify-center" style={{ width: 100, height: 100 }}>
      <svg width="100" height="100" style={{ transform: 'rotate(-90deg)' }}>
        <circle cx="50" cy="50" r={radius} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
        <circle
          cx="50" cy="50" r={radius} fill="none"
          stroke={color} strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 1s ease' }}
        />
      </svg>
      <div className="absolute text-center">
        <div className="text-white font-bold text-xl leading-none">{score}</div>
        <div className="text-white/40 text-xs">점</div>
      </div>
    </div>
  );
}

function Section({ emoji, title, content }: { emoji: string; title: string; content: string }) {
  return (
    <div
      className="rounded-2xl p-5"
      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">{emoji}</span>
        <h3 className="text-white font-semibold text-sm">{title}</h3>
      </div>
      <p className="text-white/70 text-sm leading-relaxed">{content}</p>
    </div>
  );
}

export default function ZodiacDailyPage() {
  const params = useParams();
  const zodiac = (params?.zodiac as string ?? '').toLowerCase();
  const today = getTodayKST();

  const [data, setData] = useState<DailyHoroscope | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!ZODIAC_SLUGS.includes(zodiac)) {
      setError(true);
      setLoading(false);
      return;
    }
    fetch(`/api/daily-horoscope?zodiac=${zodiac}&date=${today}`)
      .then((r) => {
        if (!r.ok) throw new Error('fetch failed');
        return r.json() as Promise<DailyHoroscope>;
      })
      .then((d) => { setData(d); setLoading(false); })
      .catch(() => { setError(true); setLoading(false); });
  }, [zodiac, today]);

  if (error) {
    return (
      <div style={bgStyle} className="flex items-center justify-center">
        <div className="text-center text-white/50">
          <div className="text-4xl mb-4">🔮</div>
          <p>운세를 불러오는 데 문제가 생겼어요.</p>
          <Link href="/blog/daily" className="text-purple-400 hover:text-purple-300 text-sm mt-4 inline-block">
            ← 목록으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  const info = ZODIAC_INFO[zodiac];

  return (
    <div style={bgStyle}>
      <article className="max-w-2xl mx-auto px-6 py-16">
        <Link href="/blog/daily" className="text-purple-400 hover:text-purple-300 text-sm mb-8 inline-block">
          ← 오늘의 전체 운세
        </Link>

        {loading || !data ? (
          <div className="space-y-4 animate-pulse">
            <div className="h-8 rounded-xl bg-white/5 w-3/4" />
            <div className="h-4 rounded-xl bg-white/5 w-1/2" />
            <div className="h-32 rounded-2xl bg-white/5 mt-8" />
            <div className="grid grid-cols-2 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-28 rounded-2xl bg-white/5" />
              ))}
            </div>
          </div>
        ) : (
          <>
            {/* Header */}
            <header className="mb-10">
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <span
                  className="px-2 py-0.5 rounded-full text-xs font-medium"
                  style={{ background: 'rgba(124,58,237,0.3)', color: 'rgba(196,181,253,1)' }}
                >
                  일일 운세
                </span>
                <span className="text-white/30 text-xs">{formatDate(data.date)}</span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="text-6xl">{data.emoji}</div>
                <div>
                  <h1 className="text-3xl font-bold text-white">{data.zodiacKo}</h1>
                  <p className="text-white/50 text-sm mt-1">{data.summary}</p>
                </div>
              </div>

              {/* Score + Lucky */}
              <div
                className="rounded-2xl p-5 flex items-center gap-6 flex-wrap"
                style={{ background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.2)' }}
              >
                <ScoreRing score={data.score} />
                <div className="flex-1 grid grid-cols-3 gap-4 min-w-0">
                  <div className="text-center">
                    <div className="text-white/40 text-xs mb-1">행운 색</div>
                    <div className="text-white font-semibold text-sm">{data.luckyColor}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white/40 text-xs mb-1">행운 숫자</div>
                    <div className="text-white font-semibold text-sm">{data.luckyNumber}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white/40 text-xs mb-1">행운 아이템</div>
                    <div className="text-white font-semibold text-sm">{data.luckyItem}</div>
                  </div>
                </div>
              </div>
            </header>

            {/* Overall */}
            <div
              className="rounded-2xl p-6 mb-6"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <h2 className="text-white font-bold text-base mb-3">🌟 종합 운세</h2>
              <p className="text-white/75 text-sm leading-relaxed">{data.overall}</p>
            </div>

            {/* Sections grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <Section emoji="💕" title="사랑 · 인간관계" content={data.love} />
              <Section emoji="💰" title="금전 · 재물" content={data.money} />
              <Section emoji="💼" title="직업 · 커리어" content={data.work} />
              <Section emoji="🌿" title="건강" content={data.health} />
            </div>

            {/* Advice */}
            <div
              className="rounded-2xl p-5 text-center"
              style={{ background: 'rgba(167,139,250,0.1)', border: '1px solid rgba(167,139,250,0.2)' }}
            >
              <div className="text-2xl mb-2">✨</div>
              <p className="text-purple-200 text-sm font-medium italic">&ldquo;{data.advice}&rdquo;</p>
              <p className="text-white/30 text-xs mt-2">오늘 하루를 위한 한 마디</p>
            </div>

            {/* Nav to other signs */}
            <nav className="mt-10">
              <p className="text-white/30 text-xs mb-4 text-center">다른 별자리 운세 보기</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {['aries','taurus','gemini','cancer','leo','virgo','libra','scorpio','sagittarius','capricorn','aquarius','pisces'].map((s) => (
                  <Link
                    key={s}
                    href={`/blog/daily/${s}`}
                    className={`px-3 py-1.5 rounded-full text-xs transition-colors ${
                      s === zodiac
                        ? 'text-white'
                        : 'text-white/40 hover:text-white/70'
                    }`}
                    style={s === zodiac ? { background: 'rgba(124,58,237,0.4)' } : { background: 'rgba(255,255,255,0.05)' }}
                  >
                    {s}
                  </Link>
                ))}
              </div>
            </nav>

          </>
        )}

        {/* Static zodiac info — always visible (SEO/AdSense) */}
        {info && (
          <section className="mt-12 space-y-6">
            <div
              className="rounded-2xl p-6"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{info.symbol}</span>
                <div>
                  <h2 className="text-white font-bold text-base">{info.ko} 별자리 소개</h2>
                  <p className="text-white/40 text-xs">{info.dates} · {info.element}의 원소 · 지배 행성: {info.planet}</p>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-3">
                <strong className="text-purple-300">{info.trait}</strong>
              </p>
              <p className="text-white/55 text-sm leading-relaxed">{info.desc}</p>
              <div className="mt-4">
                <Link href={`/zodiac/${zodiac}`} className="text-purple-400 hover:text-purple-300 text-xs transition-colors">
                  {info.ko} 상세 가이드 보기 →
                </Link>
              </div>
            </div>

            <div
              className="rounded-2xl p-6"
              style={{ background: 'rgba(124,58,237,0.07)', border: '1px solid rgba(124,58,237,0.15)' }}
            >
              <h2 className="text-white font-bold text-base mb-3">💡 {info.ko} 일일운세 활용 팁</h2>
              <p className="text-white/60 text-sm leading-relaxed mb-4">{info.tip}</p>
              <div className="space-y-2 text-sm text-white/50">
                <div className="flex gap-2">
                  <span className="text-purple-400 flex-shrink-0">▸</span>
                  <span><strong className="text-white/70">운세 점수 해석:</strong> 80점 이상은 에너지가 매우 좋은 날, 65~79점은 보통, 64점 이하는 신중하게 행동해야 하는 날입니다.</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-purple-400 flex-shrink-0">▸</span>
                  <span><strong className="text-white/70">행운 아이템 활용:</strong> 오늘의 행운 색과 아이템을 일상에 작게 접목해보세요. 긍정적 의도를 설정하는 데 도움이 됩니다.</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-purple-400 flex-shrink-0">▸</span>
                  <span><strong className="text-white/70">AI 생성 콘텐츠 안내:</strong> 본 운세는 Google Gemini AI가 별자리·띠·날짜를 기반으로 매일 새롭게 생성하는 오락 목적의 콘텐츠입니다. 실제 미래를 예측하지 않습니다.</span>
                </div>
              </div>
            </div>

            <div
              className="rounded-2xl p-5 text-center"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <p className="text-white/40 text-xs mb-3">생년월일로 별자리·띠 종합 운세 보기</p>
              <Link
                href="/"
                className="inline-block px-6 py-3 rounded-full font-bold text-white text-sm"
                style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #9333ea 100%)' }}
              >
                🔮 나의 오늘 운세 무료로 보기 →
              </Link>
            </div>
          </section>
        )}
      </article>
    </div>
  );
}
