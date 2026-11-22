import type { DailyZodiacSlug, Localized } from './dailyHoroscope';
import type { SupportedLang } from './i18n';

// Static editorial copy for /blog/daily/[zodiac]. The daily reading itself is
// generated per language in lib/dailyHoroscope; this is the evergreen text
// around it (sign introduction, usage tips, section labels).

export interface ZodiacStaticInfo {
  trait: string;
  desc: string;
  tip: string;
}

type SignInfo = Record<SupportedLang, ZodiacStaticInfo>;

export const ZODIAC_STATIC_INFO: Record<DailyZodiacSlug, SignInfo> = {
  aries: {
    ko: {
      trait: '용감하고 도전적인 개척자',
      desc: '양자리는 황도대의 첫 번째 별자리로, 불의 원소를 지닌 행동파입니다. 화성의 지배를 받아 에너지와 열정이 넘치며, 새로운 시작을 이끄는 타고난 리더입니다. 오늘 하루 화성의 에너지가 당신에게 용기와 추진력을 더해줍니다.',
      tip: '양자리 일일운세는 당신의 충동적 에너지를 건설적으로 활용하는 방향을 제시합니다. 종합운이 높은 날에는 새 프로젝트나 인간관계 시도에 적극 나서고, 낮은 날에는 잠시 속도를 늦추는 것이 좋습니다.',
    },
    en: {
      trait: 'The brave, pioneering starter',
      desc: 'Aries is the first sign of the zodiac: a fire-sign doer ruled by Mars, full of energy and enthusiasm and a natural leader of new beginnings. Today Mars adds courage and momentum to your day.',
      tip: 'The Aries daily reading points at how to use your impulsive energy constructively. On a high-scoring day, take a new project or a new relationship forward; on a low day, ease off the pace for a while.',
    },
    ja: {
      trait: '勇敢で挑戦的な開拓者',
      desc: '牡羊座は黄道十二宮の最初の星座で、火の元素を持つ行動派です。火星の支配のもと、エネルギーと情熱にあふれ、新しい始まりを導く生まれながらのリーダーです。今日は火星の力が勇気と推進力を後押しします。',
      tip: '牡羊座の今日の運勢は、衝動的なエネルギーを建設的に使う方向を示します。スコアが高い日は新しい仕事や人間関係に踏み出し、低い日は少しペースを落とすのが良いでしょう。',
    },
  },
  taurus: {
    ko: {
      trait: '안정적이고 신뢰감 있는 수호자',
      desc: '황소자리는 땅의 원소를 지닌 금성 지배 별자리로, 안정·아름다움·물질적 풍요를 상징합니다. 인내심이 강하고 신뢰할 수 있는 성격이며, 한 번 결심하면 끝까지 밀어붙이는 지구력이 있습니다. 오늘 금성이 보내는 풍요의 에너지에 집중해보세요.',
      tip: '황소자리 일일운세는 재물과 감각적 즐거움에 관한 메시지를 담고 있습니다. 금전운이 높은 날에는 재테크 계획을 검토하고, 연애운이 좋은 날에는 감성적인 표현을 아끼지 마세요.',
    },
    en: {
      trait: 'The steady, dependable keeper',
      desc: 'Taurus is an earth sign ruled by Venus, standing for stability, beauty and material comfort. It is patient and trustworthy, with the endurance to carry a decision through. Today, notice what Venus offers in the way of comfort and plenty.',
      tip: 'The Taurus daily reading carries messages about money and the pleasures of the senses. On a strong money day, review a savings plan; on a good love day, do not hold back a warm expression.',
    },
    ja: {
      trait: '安定して信頼できる守り手',
      desc: '牡牛座は地の元素を持つ金星支配の星座で、安定・美・物質的な豊かさを象徴します。忍耐強く信頼できる性格で、一度決めたことは最後までやり通す持久力があります。今日は金星が届ける豊かさのエネルギーに目を向けてみてください。',
      tip: '牡牛座の今日の運勢には、お金と感覚的な喜びについてのメッセージが含まれます。金運が高い日は資産計画を見直し、恋愛運が良い日は気持ちのこもった表現を惜しまないでください。',
    },
  },
  gemini: {
    ko: {
      trait: '호기심 많고 재치 있는 소통가',
      desc: '쌍둥이자리는 공기 원소의 수성 지배 별자리로, 지적 호기심과 뛰어난 소통 능력이 특징입니다. 다재다능하고 적응력이 강하며, 새로운 정보와 아이디어에 빠르게 반응합니다. 오늘 수성의 영리한 에너지가 당신의 언어와 사고를 날카롭게 합니다.',
      tip: '쌍둥이자리 일일운세에서 소통 관련 운세가 핵심입니다. 오늘 대화나 협상이 예정되어 있다면 종합운과 직업운을 함께 확인하고, 중요한 결정은 에너지 점수가 높은 날로 미루는 것이 유리합니다.',
    },
    en: {
      trait: 'The curious, quick-witted communicator',
      desc: 'Gemini is an air sign ruled by Mercury, marked by intellectual curiosity and a gift for communication. It is versatile and adaptable, responding fast to new information and ideas. Today Mercury sharpens your language and your thinking.',
      tip: 'Communication is the core of the Gemini daily reading. If you have a conversation or negotiation today, check the overall and work scores together, and postpone a major decision to a day with a higher score.',
    },
    ja: {
      trait: '好奇心旺盛で機知に富む伝え手',
      desc: 'ふたご座は風の元素を持つ水星支配の星座で、知的な好奇心と優れたコミュニケーション力が特徴です。多才で適応力が高く、新しい情報やアイデアに素早く反応します。今日は水星の賢いエネルギーが言葉と思考を鋭くします。',
      tip: 'ふたご座の今日の運勢では、コミュニケーションに関する運が核心です。会話や交渉の予定がある日は総合運と仕事運をあわせて確認し、重要な決断はスコアが高い日へ延ばすのが有利です。',
    },
  },
  cancer: {
    ko: {
      trait: '감성적이고 가정적인 보호자',
      desc: '게자리는 물의 원소를 지닌 달 지배 별자리입니다. 강한 직관력과 공감 능력을 가지고 있으며, 가족과 가까운 사람들을 보호하려는 본능이 뛰어납니다. 달의 주기에 따라 감정이 유동적으로 변하며, 오늘 달이 보내는 직관의 메시지에 귀 기울여 보세요.',
      tip: '게자리 일일운세는 감정의 흐름을 읽는 데 특히 유용합니다. 사랑·인간관계 운이 좋은 날에는 가까운 사람에게 마음을 표현하고, 점수가 낮은 날에는 혼자만의 회복 시간을 갖는 것이 현명합니다.',
    },
    en: {
      trait: 'The sensitive, home-loving protector',
      desc: 'Cancer is a water sign ruled by the Moon. It works from strong intuition and empathy, with a deep instinct to protect family and those close to it. Mood moves with the lunar cycle, so listen today to what the Moon is quietly pointing at.',
      tip: 'The Cancer daily reading is especially useful for reading the flow of feeling. On a good love day, say what you feel to someone close; on a low day, give yourself time alone to recover.',
    },
    ja: {
      trait: '情感豊かで家庭的な守り手',
      desc: 'かに座は水の元素を持つ月支配の星座です。強い直感力と共感力を持ち、家族や近しい人を守ろうとする本能に優れています。月の周期によって感情は流動的に移ろうので、今日は月が送る直感のメッセージに耳を傾けてみてください。',
      tip: 'かに座の今日の運勢は、感情の流れを読むのに特に役立ちます。恋愛・人間関係の運が良い日は近しい人に気持ちを伝え、スコアが低い日はひとりの回復時間をとるのが賢明です。',
    },
  },
  leo: {
    ko: {
      trait: '당당하고 카리스마 넘치는 왕자',
      desc: '사자자리는 불의 원소를 지닌 태양 지배 별자리로, 황도대에서 가장 강렬한 존재감을 자랑합니다. 창의성과 리더십이 뛰어나며, 자신이 중심이 되는 무대에서 빛을 발합니다. 오늘 태양의 에너지가 당신의 자신감과 창의력을 극대화합니다.',
      tip: '사자자리 일일운세에서 직업·커리어 운이 중요한 지표가 됩니다. 점수가 높은 날에는 발표나 제안 등 주목받는 자리에 나서세요. 낮은 날에는 무대 뒤에서 준비하는 시간으로 삼는 것이 좋습니다.',
    },
    en: {
      trait: 'The confident, charismatic lead',
      desc: 'Leo is a fire sign ruled by the Sun, with the strongest presence in the zodiac. It is creative and naturally leading, and shines brightest on a stage it holds. Today the Sun is behind your confidence and your ideas.',
      tip: 'Work and career scores matter most in the Leo daily reading. On a high day, step onto a stage — a presentation or a proposal. On a low day, use the time to prepare from behind it.',
    },
    ja: {
      trait: '堂々としてカリスマのある主役',
      desc: 'しし座は火の元素を持つ太陽支配の星座で、黄道十二宮でもっとも強い存在感を放ちます。創造性とリーダーシップに優れ、自分が中心となる舞台で輝きます。今日は太陽のエネルギーが自信と創造力を最大限に引き上げます。',
      tip: 'しし座の今日の運勢では、仕事・キャリアの運が重要な指標になります。スコアが高い日は発表や提案など注目される場に出てください。低い日は舞台裏で準備する時間にすると良いでしょう。',
    },
  },
  virgo: {
    ko: {
      trait: '꼼꼼하고 분석적인 완벽주의자',
      desc: '처녀자리는 땅의 원소를 지닌 수성 지배 별자리입니다. 세심한 분석력과 실용적인 사고방식이 강점이며, 어떤 상황에서도 최선의 해결책을 찾아냅니다. 건강과 루틴에 대한 높은 의식이 있으며, 오늘 수성이 당신의 논리적 사고를 더욱 예리하게 만들어줍니다.',
      tip: '처녀자리 일일운세는 건강·루틴·업무 효율성과 밀접합니다. 건강 운과 직업 운이 높은 날에는 중요한 계획이나 분석 작업을 진행하고, 낮은 날에는 완벽주의를 잠시 내려놓고 충분히 쉬세요.',
    },
    en: {
      trait: 'The careful, analytical perfectionist',
      desc: 'Virgo is an earth sign ruled by Mercury. Its strength is close analysis and practical thinking, and it finds the best workable fix in almost any situation. It is attentive to health and routine, and today Mercury makes your reasoning sharper still.',
      tip: 'The Virgo daily reading is closely tied to health, routine and efficiency. On a day with strong health and work scores, take on a plan or an analytical task; on a low day, set perfectionism down and rest properly.',
    },
    ja: {
      trait: '丁寧で分析的な完璧主義者',
      desc: 'おとめ座は地の元素を持つ水星支配の星座です。細やかな分析力と実用的な考え方が強みで、どんな状況でも最善の解決策を見つけ出します。健康と習慣への意識が高く、今日は水星が論理的思考をさらに鋭くします。',
      tip: 'おとめ座の今日の運勢は、健康・習慣・仕事の効率と深く結びついています。健康運と仕事運が高い日は重要な計画や分析作業を進め、低い日は完璧主義をいったん手放してしっかり休んでください。',
    },
  },
  libra: {
    ko: {
      trait: '균형 잡히고 공정한 외교관',
      desc: '천칭자리는 공기 원소를 지닌 금성 지배 별자리로, 균형·조화·아름다움을 추구합니다. 뛰어난 심미안과 외교적 능력을 가지고 있으며, 갈등보다는 협력과 평화를 선호합니다. 오늘 금성이 당신의 인간관계와 심미적 감각을 더욱 풍요롭게 합니다.',
      tip: '천칭자리 일일운세에서 사랑·인간관계 운이 핵심 지표입니다. 균형 점수가 높은 날에는 중요한 협상이나 화해를 시도하고, 낮은 날에는 혼자 결정을 내리기보다 신뢰할 수 있는 사람과 상의하세요.',
    },
    en: {
      trait: 'The balanced, fair diplomat',
      desc: 'Libra is an air sign ruled by Venus and seeks balance, harmony and beauty. It has a fine eye and a diplomat\u2019s touch, preferring cooperation and peace to conflict. Today Venus enriches your relationships and your sense of what looks and feels right.',
      tip: 'Love and relationship scores are the key indicator in the Libra daily reading. On a well-balanced day, attempt an important negotiation or a reconciliation; on a low day, talk a decision through with someone you trust rather than deciding alone.',
    },
    ja: {
      trait: 'バランス感覚のある公正な外交官',
      desc: 'てんびん座は風の元素を持つ金星支配の星座で、均衡・調和・美を求めます。優れた審美眼と外交的な力を持ち、対立よりも協力と平和を好みます。今日は金星が人間関係と美意識をより豊かにします。',
      tip: 'てんびん座の今日の運勢では、恋愛・人間関係の運が主要な指標です。バランスのスコアが高い日は重要な交渉や仲直りに踏み出し、低い日はひとりで決めず信頼できる人と相談してください。',
    },
  },
  scorpio: {
    ko: {
      trait: '직관적이고 집중력 강한 탐구자',
      desc: '전갈자리는 물의 원소를 지닌 명왕성(화성) 지배 별자리로, 황도대에서 가장 강렬하고 신비로운 에너지를 가집니다. 깊은 통찰력과 변화에 대한 두려움 없는 태도가 특징이며, 진실을 파고드는 집착적인 탐구심이 있습니다. 오늘 명왕성이 당신의 직관과 내면의 힘을 끌어올립니다.',
      tip: '전갈자리 일일운세는 숨겨진 진실과 변화의 기운을 반영합니다. 종합 점수가 높은 날에는 중요한 계약이나 투자 결정이 유리하며, 낮은 날에는 의심과 집착을 내려놓고 자신을 신뢰하는 연습을 해보세요.',
    },
    en: {
      trait: 'The intuitive, intensely focused seeker',
      desc: 'Scorpio is a water sign ruled by Pluto (and Mars), carrying the most intense and private energy in the zodiac. It has deep insight, no fear of change, and a relentless curiosity that digs for what is true. Today Pluto lifts your intuition and your inner force.',
      tip: 'The Scorpio daily reading reflects hidden truths and the pull of change. On a high-scoring day, a contract or an investment decision is favoured; on a low day, set suspicion and fixation down and practise trusting yourself.',
    },
    ja: {
      trait: '直感的で集中力の強い探究者',
      desc: 'さそり座は水の元素を持つ冥王星（火星）支配の星座で、黄道十二宮でもっとも強烈で神秘的なエネルギーを持ちます。深い洞察力と変化を恐れない姿勢が特徴で、真実を掘り下げる執着的な探究心があります。今日は冥王星が直感と内なる力を引き上げます。',
      tip: 'さそり座の今日の運勢は、隠された真実と変化の気配を映します。総合スコアが高い日は重要な契約や投資の判断が有利で、低い日は疑いと執着を手放し、自分を信頼する練習をしてみてください。',
    },
  },
  sagittarius: {
    ko: {
      trait: '낙관적이고 모험을 즐기는 철학자',
      desc: '사수자리는 불의 원소를 지닌 목성 지배 별자리로, 자유와 모험·철학적 탐구를 사랑합니다. 낙관적이고 개방적인 성격으로 새로운 경험에 두려움이 없으며, 지식과 지혜를 쌓는 것에서 큰 기쁨을 느낍니다. 오늘 목성의 확장 에너지가 당신의 가능성을 넓혀줍니다.',
      tip: '사수자리 일일운세는 여행·학습·신념과 관련한 메시지를 담습니다. 점수가 높은 날에는 새로운 도전이나 학습을 시작하기에 최적이며, 낮은 날에는 경솔한 약속이나 충동적 지출을 삼가세요.',
    },
    en: {
      trait: 'The optimistic, adventure-loving philosopher',
      desc: 'Sagittarius is a fire sign ruled by Jupiter and loves freedom, adventure and philosophical enquiry. Optimistic and open, it meets new experience without fear and takes real pleasure in gathering knowledge. Today Jupiter\u2019s expanding energy widens what feels possible.',
      tip: 'The Sagittarius daily reading carries messages about travel, learning and belief. On a high day it is an excellent moment to start a challenge or a course; on a low day, hold back from rash promises and impulse spending.',
    },
    ja: {
      trait: '楽観的で冒険を楽しむ哲学者',
      desc: 'いて座は火の元素を持つ木星支配の星座で、自由と冒険、哲学的な探究を愛します。楽観的で開かれた性格で新しい経験を恐れず、知識と知恵を積み重ねることに大きな喜びを感じます。今日は木星の拡大のエネルギーが可能性を広げます。',
      tip: 'いて座の今日の運勢は、旅・学び・信念に関するメッセージを含みます。スコアが高い日は新しい挑戦や学習を始めるのに最適で、低い日は軽はずみな約束や衝動的な支出を控えてください。',
    },
  },
  capricorn: {
    ko: {
      trait: '성실하고 목표 지향적인 전략가',
      desc: '염소자리는 땅의 원소를 지닌 토성 지배 별자리로, 황도대에서 가장 야망 있고 자기 훈련이 철저한 별자리입니다. 장기적인 목표를 향해 꾸준히 나아가는 인내심과 현실적인 판단력이 강점입니다. 오늘 토성이 당신의 책임감과 집중력을 더욱 강화시켜줍니다.',
      tip: '염소자리 일일운세는 커리어·재물·장기 계획과 깊이 연결됩니다. 직업운·금전운이 높은 날에는 중요한 비즈니스 결정이나 투자를 검토하기 좋습니다. 낮은 날에는 목표 재점검과 휴식을 통해 에너지를 충전하세요.',
    },
    en: {
      trait: 'The diligent, goal-driven strategist',
      desc: 'Capricorn is an earth sign ruled by Saturn, the most ambitious and self-disciplined sign of the zodiac. Its strength is patience toward a long-term goal together with a realistic eye. Today Saturn reinforces your sense of responsibility and your focus.',
      tip: 'The Capricorn daily reading is closely tied to career, money and long plans. On a day with strong work and money scores, review an important business decision or investment. On a low day, recharge by re-checking your goals and resting.',
    },
    ja: {
      trait: '誠実で目標志向の戦略家',
      desc: 'やぎ座は地の元素を持つ土星支配の星座で、黄道十二宮でもっとも野心的で自己鍛錬の徹底した星座です。長期的な目標へ着実に進む忍耐力と現実的な判断力が強みです。今日は土星が責任感と集中力をさらに強めます。',
      tip: 'やぎ座の今日の運勢は、キャリア・お金・長期計画と深く結びついています。仕事運・金運が高い日は重要なビジネスの判断や投資を検討すると良いでしょう。低い日は目標の見直しと休息でエネルギーを充電してください。',
    },
  },
  aquarius: {
    ko: {
      trait: '독창적이고 인도주의적인 혁신가',
      desc: '물병자리는 공기 원소를 지닌 천왕성(토성) 지배 별자리로, 황도대에서 가장 독립적이고 혁신적인 별자리입니다. 인류애와 사회 변화에 대한 강한 관심을 가지고 있으며, 독특한 시각으로 세상을 바라봅니다. 오늘 천왕성이 당신의 창의성과 혁신 정신에 불꽃을 지핍니다.',
      tip: '물병자리 일일운세는 사회적 연결과 창의적 아이디어에 초점을 맞춥니다. 인간관계 운이 높은 날에는 새로운 사람을 만나거나 커뮤니티 활동에 참여하세요. 낮은 날에는 혼자 아이디어를 구상하는 고독한 시간이 오히려 생산적입니다.',
    },
    en: {
      trait: 'The original, humanitarian innovator',
      desc: 'Aquarius is an air sign ruled by Uranus (and Saturn), the most independent and inventive sign in the zodiac. It cares about people at large and about social change, and looks at the world from its own angle. Today Uranus sparks your creativity and your wish to try something new.',
      tip: 'The Aquarius daily reading focuses on social connection and creative ideas. On a day with a strong relationship score, meet someone new or join a community activity. On a low day, time alone working out an idea is the more productive choice.',
    },
    ja: {
      trait: '独創的で人道主義的な革新者',
      desc: 'みずがめ座は風の元素を持つ天王星（土星）支配の星座で、黄道十二宮でもっとも独立心が強く革新的な星座です。人類愛と社会の変化への関心が強く、独自の視点で世界を見ます。今日は天王星が創造性と革新の精神に火を灯します。',
      tip: 'みずがめ座の今日の運勢は、社会的なつながりと創造的なアイデアに焦点を当てます。人間関係の運が高い日は新しい人に会うかコミュニティの活動に参加しましょう。低い日はひとりでアイデアを練る孤独な時間のほうが生産的です。',
    },
  },
  pisces: {
    ko: {
      trait: '예민하고 상상력 풍부한 몽상가',
      desc: '물고기자리는 물의 원소를 지닌 해왕성(목성) 지배 별자리로, 황도대의 마지막 별자리입니다. 풍부한 상상력과 깊은 공감 능력을 가지고 있으며, 영적·예술적 감수성이 뛰어납니다. 12별자리의 지혜를 모두 담은 별자리로, 오늘 해왕성이 당신의 직관과 창의성을 높여줍니다.',
      tip: '물고기자리 일일운세는 감정·직관·영성의 흐름을 반영합니다. 점수가 높은 날에는 예술 작업이나 명상, 상담 등 감수성이 필요한 활동에 에너지를 쏟으세요. 낮은 날에는 현실적인 경계를 설정하고 감정 소진을 방지하는 데 집중하세요.',
    },
    en: {
      trait: 'The sensitive, imaginative dreamer',
      desc: 'Pisces is a water sign ruled by Neptune (and Jupiter) and closes the zodiac. It has a rich imagination and deep empathy, with a strong spiritual and artistic sensibility. Carrying the wisdom of all twelve signs, it draws on intuition today as Neptune heightens it.',
      tip: 'The Pisces daily reading reflects the flow of feeling, intuition and spirit. On a high day, put energy into work that needs sensibility — art, meditation, listening to someone. On a low day, set a practical boundary and guard against emotional exhaustion.',
    },
    ja: {
      trait: '繊細で想像力豊かな夢想家',
      desc: 'うお座は水の元素を持つ海王星（木星）支配の星座で、黄道十二宮の最後の星座です。豊かな想像力と深い共感力を持ち、霊的・芸術的な感受性に優れています。12星座の知恵をすべて宿す星座で、今日は海王星が直感と創造性を高めます。',
      tip: 'うお座の今日の運勢は、感情・直感・霊性の流れを映します。スコアが高い日は創作や瞑想、相談など感受性を必要とする活動に力を使ってください。低い日は現実的な境界を引き、感情の消耗を防ぐことに集中しましょう。',
    },
  },
};

export interface DailyDetailCopy {
  backToDaily: string;
  badge: string;
  scoreUnit: string;
  luckyColorLabel: string;
  luckyNumberLabel: string;
  luckyItemLabel: string;
  overallTitle: string;
  loveTitle: string;
  moneyTitle: string;
  workTitle: string;
  healthTitle: string;
  adviceNote: string;
  otherSigns: string;
  introTitle: (name: string) => string;
  introMeta: (dates: string, element: string, planet: string) => string;
  guideLink: (name: string) => string;
  tipTitle: (name: string) => string;
  scoreGuideTitle: string;
  scoreGuideBody: string;
  luckyGuideTitle: string;
  luckyGuideBody: string;
  noticeTitle: string;
  noticeBody: string;
  ctaLead: string;
  ctaButton: string;
  relatedTitle: (name: string) => string;
  relatedTarot: string;
  relatedCompatibility: string;
  relatedHowToRead: string;
  updated: (date: string) => string;
  footerNote: string;
  headline: (name: string) => string;
  structuredAuthor: string;
  aboutKeywords: (name: string) => string[];
}

export const DAILY_DETAIL_COPY: Record<SupportedLang, DailyDetailCopy> = {
  ko: {
    backToDaily: '← 오늘의 전체 운세',
    badge: '일일 운세',
    scoreUnit: '점',
    luckyColorLabel: '행운 색',
    luckyNumberLabel: '행운 숫자',
    luckyItemLabel: '행운 아이템',
    overallTitle: '🌟 종합 운세',
    loveTitle: '사랑 · 인간관계',
    moneyTitle: '금전 · 재물',
    workTitle: '직업 · 커리어',
    healthTitle: '건강',
    adviceNote: '오늘 하루를 위한 한 마디',
    otherSigns: '다른 별자리 운세 보기',
    introTitle: (name) => `${name} 별자리 소개`,
    introMeta: (dates, element, planet) => `${dates} · ${element}의 원소 · 지배 행성: ${planet}`,
    guideLink: (name) => `${name} 상세 가이드 보기 →`,
    tipTitle: (name) => `💡 ${name} 일일운세 활용 팁`,
    scoreGuideTitle: '운세 점수 해석:',
    scoreGuideBody: '80점 이상은 에너지가 매우 좋은 날, 65~79점은 보통, 64점 이하는 신중하게 행동해야 하는 날입니다.',
    luckyGuideTitle: '행운 아이템 활용:',
    luckyGuideBody: '오늘의 행운 색과 아이템을 일상에 작게 접목해보세요. 긍정적 의도를 설정하는 데 도움이 됩니다.',
    noticeTitle: '운세 안내:',
    noticeBody: '본 운세는 별자리·띠·날짜를 기반으로 매일 새롭게 제공되는 오락 목적의 콘텐츠입니다. 실제 미래를 예측하지 않습니다.',
    ctaLead: '생년월일로 별자리·띠 종합 운세 보기',
    ctaButton: '🔮 나의 오늘 운세 무료로 보기 →',
    relatedTitle: (name) => `${name} 운세와 함께 보기`,
    relatedTarot: '🃏 오늘의 타로 한 장',
    relatedCompatibility: '💞 별자리 궁합 알아보기',
    relatedHowToRead: '📖 운세를 건강하게 읽는 법',
    updated: (date) => `업데이트: ${date} · 작성 및 검토: StarFate 편집팀`,
    footerNote: '별자리 운세는 오락과 자기성찰을 위한 참고 콘텐츠입니다. 건강·금전·법률 등 중요한 결정은 실제 정보와 전문가의 조언을 기준으로 판단하세요.',
    headline: (name) => `${name} 오늘의 운세`,
    structuredAuthor: 'StarFate 편집팀',
    aboutKeywords: (name) => [name, '오늘의 운세', '별자리 운세'],
  },
  en: {
    backToDaily: '← All of today\'s readings',
    badge: 'Daily horoscope',
    scoreUnit: 'pts',
    luckyColorLabel: 'Lucky colour',
    luckyNumberLabel: 'Lucky number',
    luckyItemLabel: 'Lucky item',
    overallTitle: '🌟 Overall',
    loveTitle: 'Love & relationships',
    moneyTitle: 'Money',
    workTitle: 'Work & career',
    healthTitle: 'Health',
    adviceNote: 'One line for today',
    otherSigns: 'Read another sign',
    introTitle: (name) => `About ${name}`,
    introMeta: (dates, element, planet) => `${dates} · ${element} element · Ruling planet: ${planet}`,
    guideLink: (name) => `Open the full ${name} guide →`,
    tipTitle: (name) => `💡 Getting more from the ${name} daily reading`,
    scoreGuideTitle: 'Reading the score:',
    scoreGuideBody: '80 or above is a day of very good energy, 65–79 is ordinary, and 64 or below calls for careful, deliberate action.',
    luckyGuideTitle: 'Using the lucky item:',
    luckyGuideBody: 'Bring today\'s lucky colour or item into your day in a small way. It helps set a positive intention.',
    noticeTitle: 'About this reading:',
    noticeBody: 'This reading is entertainment content renewed each day from the sign, the animal and the date. It does not predict actual events.',
    ctaLead: 'See your full sign-and-animal fortune from your birth date',
    ctaButton: '🔮 See my fortune for today, free →',
    relatedTitle: (name) => `Read alongside the ${name} reading`,
    relatedTarot: '🃏 Draw one tarot card for today',
    relatedCompatibility: '💞 Check zodiac compatibility',
    relatedHowToRead: '📖 How to read a fortune well',
    updated: (date) => `Updated ${date} · Written and reviewed by the StarFate editorial team`,
    footerNote: 'Horoscope content is reference material for entertainment and self-reflection. For health, money or legal decisions, rely on real information and professional advice.',
    headline: (name) => `${name} — today's horoscope`,
    structuredAuthor: 'StarFate editorial team',
    aboutKeywords: (name) => [name, 'daily horoscope', 'zodiac reading'],
  },
  ja: {
    backToDaily: '← 今日の運勢一覧へ',
    badge: '毎日の運勢',
    scoreUnit: '点',
    luckyColorLabel: 'ラッキーカラー',
    luckyNumberLabel: 'ラッキーナンバー',
    luckyItemLabel: 'ラッキーアイテム',
    overallTitle: '🌟 総合運',
    loveTitle: '恋愛・人間関係',
    moneyTitle: 'お金・金運',
    workTitle: '仕事・キャリア',
    healthTitle: '健康',
    adviceNote: '今日のためのひとこと',
    otherSigns: 'ほかの星座の運勢を見る',
    introTitle: (name) => `${name}の紹介`,
    introMeta: (dates, element, planet) => `${dates}・${element}の元素・守護惑星：${planet}`,
    guideLink: (name) => `${name}の詳しいガイドを見る →`,
    tipTitle: (name) => `💡 ${name}の今日の運勢を活かすヒント`,
    scoreGuideTitle: 'スコアの見方：',
    scoreGuideBody: '80以上はエネルギーがとても良い日、65〜79はふつう、64以下は慎重に行動したい日です。',
    luckyGuideTitle: 'ラッキーアイテムの使い方：',
    luckyGuideBody: '今日のラッキーカラーやアイテムを、日常に小さく取り入れてみてください。前向きな意図を定める助けになります。',
    noticeTitle: '運勢について：',
    noticeBody: '本運勢は星座・干支・日付をもとに毎日新しく提供される娯楽目的のコンテンツです。実際の未来を予測するものではありません。',
    ctaLead: '生年月日から星座と干支の総合運を見る',
    ctaButton: '🔮 自分の今日の運勢を無料で見る →',
    relatedTitle: (name) => `${name}の運勢とあわせて読む`,
    relatedTarot: '🃏 今日のタロットを一枚',
    relatedCompatibility: '💞 星座の相性を見る',
    relatedHowToRead: '📖 運勢を健全に読む方法',
    updated: (date) => `更新：${date}・執筆・校閲：StarFate編集チーム`,
    footerNote: '星座の運勢は娯楽と自己省察のための参考コンテンツです。健康・お金・法律などの重要な判断は、実際の情報と専門家の助言を基準にしてください。',
    headline: (name) => `${name}の今日の運勢`,
    structuredAuthor: 'StarFate編集チーム',
    aboutKeywords: (name) => [name, '今日の運勢', '星座占い'],
  },
};

// Kept for callers that only need the localized sign name record.
export type ZodiacNameRecord = Localized;
