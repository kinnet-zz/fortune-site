export interface TarotCard {
  id: number;
  emoji: string;
  image: string; // Rider-Waite 1909 public domain image (Wikimedia Commons)
  name: Record<'ko' | 'en' | 'zh' | 'ja', string>;
  keyword: Record<'ko' | 'en' | 'zh' | 'ja', string>;
  message: Record<'ko' | 'en' | 'zh' | 'ja', string>;
  color: string; // accent color
}

const WM = 'https://upload.wikimedia.org/wikipedia/commons/thumb';

export const TAROT_CARDS: TarotCard[] = [
  {
    id: 0, emoji: '🌟', color: '#f59e0b',
    image: `${WM}/6/6e/RWS1909_-_00_Fool.jpeg/250px-RWS1909_-_00_Fool.jpeg`,
    name: { ko: '광대', en: 'The Fool', zh: '愚者', ja: '愚者' },
    keyword: { ko: '새로운 시작', en: 'New Beginning', zh: '新的开始', ja: '新たな始まり' },
    message: {
      ko: '두려움 없이 새로운 길로 나아가세요. 지금 이 순간이 당신 인생 최고의 출발점입니다. 실패를 두려워하지 말고, 경험이 당신을 성장시킬 것입니다.',
      en: 'Step forward without fear into the unknown. This very moment is the greatest starting point of your life. Embrace the experience — it will make you grow.',
      zh: '无所畏惧地踏上新路。此刻正是你人生最好的出发点。不要害怕失败，经历会让你成长。',
      ja: '恐れることなく新しい道へ踏み出しましょう。この瞬間があなたの人生最高のスタート地点です。失敗を恐れず、経験があなたを成長させます。',
    },
  },
  {
    id: 1, emoji: '✨', color: '#8b5cf6',
    image: `${WM}/b/b0/RWS1909_-_01_Magician.jpeg/250px-RWS1909_-_01_Magician.jpeg`,
    name: { ko: '마법사', en: 'The Magician', zh: '魔法师', ja: '魔術師' },
    keyword: { ko: '능력과 의지', en: 'Skill & Will', zh: '能力与意志', ja: '能力と意志' },
    message: {
      ko: '당신 안에는 상상 이상의 능력이 잠들어 있습니다. 지금 당신이 가진 것들로 충분히 원하는 것을 이룰 수 있어요. 집중하고 행동하면 기적이 일어납니다.',
      en: 'Within you sleeps far more ability than you imagine. You already have everything needed to achieve what you want. Focus and act — miracles happen.',
      zh: '你内心深处沉睡着超乎想象的能力。你现在拥有的已经足以实现你的愿望。专注行动，奇迹自会发生。',
      ja: 'あなたの中には想像以上の能力が眠っています。今あなたが持っているものだけで、望むことを十分に成し遂げられます。集中して行動すれば奇跡が起きます。',
    },
  },
  {
    id: 2, emoji: '🌙', color: '#6366f1',
    image: `${WM}/2/26/RWS1909_-_02_High_Priestess.jpeg/250px-RWS1909_-_02_High_Priestess.jpeg`,
    name: { ko: '여사제', en: 'High Priestess', zh: '女祭司', ja: '女教皇' },
    keyword: { ko: '직관과 신비', en: 'Intuition & Mystery', zh: '直觉与神秘', ja: '直観と神秘' },
    message: {
      ko: '당신의 직감을 믿으세요. 지금 당신이 느끼는 조용한 울림이 진실을 가리키고 있습니다. 논리보다 마음의 소리에 귀 기울일 때입니다.',
      en: 'Trust your intuition. That quiet inner voice you\'re feeling right now is pointing toward truth. It\'s time to listen to your heart over your head.',
      zh: '相信你的直觉。你现在感受到的那份宁静共鸣正指向真相。是时候倾听内心的声音而非逻辑了。',
      ja: 'あなたの直感を信じてください。今感じている静かな響きが真実を指しています。論理より心の声に耳を傾けるときです。',
    },
  },
  {
    id: 3, emoji: '🌸', color: '#ec4899',
    image: `${WM}/7/70/RWS1909_-_03_Empress.jpeg/250px-RWS1909_-_03_Empress.jpeg`,
    name: { ko: '여황제', en: 'The Empress', zh: '女皇', ja: '女帝' },
    keyword: { ko: '풍요와 창조', en: 'Abundance & Creation', zh: '丰盛与创造', ja: '豊かさと創造' },
    message: {
      ko: '당신 주변에 풍요로움이 넘쳐흐르고 있습니다. 창의적인 에너지가 충만한 지금, 새로운 것을 만들어보세요. 자연처럼 당신도 피어날 준비가 되어 있습니다.',
      en: 'Abundance flows all around you. Now, brimming with creative energy, is the time to create something new. Like nature, you are ready to bloom.',
      zh: '你周围洋溢着丰盛。创造力充沛的现在，试着创造新事物吧。就像大自然一样，你已准备好绽放。',
      ja: 'あなたの周りに豊かさが溢れています。創造的なエネルギーが満ちた今、新しいものを作ってみましょう。自然のようにあなたも花開く準備ができています。',
    },
  },
  {
    id: 4, emoji: '👑', color: '#f59e0b',
    image: `${WM}/b/b4/RWS1909_-_04_Emperor.jpeg/250px-RWS1909_-_04_Emperor.jpeg`,
    name: { ko: '황제', en: 'The Emperor', zh: '皇帝', ja: '皇帝' },
    keyword: { ko: '안정과 권위', en: 'Stability & Authority', zh: '稳定与权威', ja: '安定と権威' },
    message: {
      ko: '흔들리지 않는 중심을 갖추는 것이 중요한 시기입니다. 명확한 목표와 계획으로 당신의 세계를 구축해 나가세요. 리더십을 발휘할 때가 왔습니다.',
      en: 'Now is the time to build an unshakeable core. Construct your world with clear goals and plans. Your moment to step into leadership has arrived.',
      zh: '拥有坚不可摧的中心是此时的重要课题。以明确的目标和计划构建你的世界。展现领导力的时机已到。',
      ja: '揺るぎない軸を持つことが大切な時期です。明確な目標と計画で自分の世界を築いていきましょう。リーダーシップを発揮するときが来ました。',
    },
  },
  {
    id: 5, emoji: '🕊️', color: '#10b981',
    image: `${WM}/7/70/RWS1909_-_05_Hierophant.jpeg/250px-RWS1909_-_05_Hierophant.jpeg`,
    name: { ko: '교황', en: 'The Hierophant', zh: '教皇', ja: '法王' },
    keyword: { ko: '전통과 지혜', en: 'Tradition & Wisdom', zh: '传统与智慧', ja: '伝統と知恵' },
    message: {
      ko: '경험에서 우러나온 지혜가 지금 당신에게 필요합니다. 가르침을 받거나 누군가를 가르칠 기회가 찾아올 것입니다. 배움을 통해 성장하세요.',
      en: 'Wisdom born from experience is what you need right now. An opportunity to learn or to teach someone will come your way. Grow through understanding.',
      zh: '源自经验的智慧正是你现在所需要的。学习或传授他人的机会即将到来。通过学习来成长吧。',
      ja: '経験から生まれた知恵が今のあなたに必要です。学ぶか、誰かを教える機会が訪れるでしょう。学びを通じて成長してください。',
    },
  },
  {
    id: 6, emoji: '💕', color: '#f43f5e',
    image: `${WM}/8/87/RWS1909_-_06_Lovers.jpeg/250px-RWS1909_-_06_Lovers.jpeg`,
    name: { ko: '연인', en: 'The Lovers', zh: '恋人', ja: '恋人' },
    keyword: { ko: '사랑과 선택', en: 'Love & Choice', zh: '爱与选择', ja: '愛と選択' },
    message: {
      ko: '마음이 이끄는 대로 선택하세요. 관계에서 진심과 연결이 중요한 시기입니다. 사랑하는 사람에게 마음을 표현하는 것을 두려워하지 마세요.',
      en: 'Choose where your heart leads. This is a time when genuine connection in relationships truly matters. Don\'t be afraid to express your feelings to those you love.',
      zh: '跟随内心做出选择。此时关系中的真诚与连结最为重要。不要害怕向所爱之人表达你的心意。',
      ja: '心の導くままに選択してください。関係における真心と繋がりが大切な時期です。愛する人に気持ちを伝えることを恐れないでください。',
    },
  },
  {
    id: 7, emoji: '⚡', color: '#3b82f6',
    image: `${WM}/a/aa/RWS1909_-_07_Chariot.jpeg/250px-RWS1909_-_07_Chariot.jpeg`,
    name: { ko: '전차', en: 'The Chariot', zh: '战车', ja: '戦車' },
    keyword: { ko: '승리와 추진력', en: 'Victory & Drive', zh: '胜利与推进力', ja: '勝利と推進力' },
    message: {
      ko: '목표를 향해 강하게 전진하세요. 어떤 장애물도 당신의 의지를 막을 수 없습니다. 자신을 믿고 끝까지 달려가면 반드시 승리가 기다리고 있습니다.',
      en: 'Drive hard toward your goal. No obstacle can stop your will. Believe in yourself and run to the end — victory is waiting for you there.',
      zh: '奋力向目标前进。任何障碍都无法阻挡你的意志。相信自己坚持到底，胜利必定在等待着你。',
      ja: '目標に向かって力強く前進してください。どんな障害もあなたの意志を止めることはできません。自分を信じて最後まで走り続ければ、必ず勝利が待っています。',
    },
  },
  {
    id: 8, emoji: '🦁', color: '#f97316',
    image: `${WM}/2/29/RWS1909_-_08_Strength.jpeg/250px-RWS1909_-_08_Strength.jpeg`,
    name: { ko: '힘', en: 'Strength', zh: '力量', ja: '力' },
    keyword: { ko: '용기와 인내', en: 'Courage & Patience', zh: '勇气与耐心', ja: '勇気と忍耐' },
    message: {
      ko: '진정한 강함은 부드러움과 인내에서 나옵니다. 지금의 어려움도 당신의 내면 깊은 곳에 있는 힘으로 이겨낼 수 있어요. 당신은 이미 충분히 강합니다.',
      en: 'True strength comes from gentleness and patience. The difficulty you face now can be overcome by the power deep within you. You are already strong enough.',
      zh: '真正的力量来自温柔与耐心。当前的困难也能靠你内心深处的力量克服。你已经足够强大了。',
      ja: '本当の強さは柔らかさと忍耐から生まれます。今の困難もあなたの内なる深い力で乗り越えられます。あなたはすでに十分強いです。',
    },
  },
  {
    id: 9, emoji: '🕯️', color: '#94a3b8',
    image: `${WM}/2/28/RWS1909_-_09_Hermit.jpeg/250px-RWS1909_-_09_Hermit.jpeg`,
    name: { ko: '은둔자', en: 'The Hermit', zh: '隐者', ja: '隠者' },
    keyword: { ko: '내면의 빛', en: 'Inner Light', zh: '内在之光', ja: '内なる光' },
    message: {
      ko: '잠시 혼자만의 시간을 갖고 스스로에게 귀를 기울이세요. 외부의 소음을 줄이고 내면의 목소리를 들을 때 진정한 답이 보입니다. 당신 안에 이미 지혜가 있습니다.',
      en: 'Take some time alone and listen to yourself. When you quiet the external noise and hear your inner voice, the real answer becomes clear. The wisdom is already within you.',
      zh: '花些时间独处，倾听自己的内心。当你减少外界喧嚣，聆听内心声音时，真正的答案就会显现。智慧已在你心中。',
      ja: 'しばらくひとりの時間を持ち、自分に耳を傾けましょう。外の雑音を減らし内なる声を聴くとき、本当の答えが見えてきます。あなたの中にすでに知恵があります。',
    },
  },
  {
    id: 10, emoji: '🎡', color: '#8b5cf6',
    image: `${WM}/8/8a/RWS1909_-_10_Wheel_of_Fortune.jpeg/250px-RWS1909_-_10_Wheel_of_Fortune.jpeg`,
    name: { ko: '운명의 수레바퀴', en: 'Wheel of Fortune', zh: '命运之轮', ja: '運命の輪' },
    keyword: { ko: '변화와 행운', en: 'Change & Luck', zh: '变化与好运', ja: '変化と幸運' },
    message: {
      ko: '행운의 바퀴가 당신 쪽으로 돌아오고 있습니다. 변화를 두려워하지 말고 흐름에 몸을 맡기세요. 지금 이 순간이 인생의 전환점이 될 수 있습니다.',
      en: 'The wheel of fortune is turning your way. Don\'t fear change — let yourself go with the flow. This very moment could be the turning point of your life.',
      zh: '幸运之轮正向你转来。不要害怕变化，顺势而为。此刻可能成为你人生的转折点。',
      ja: '幸運の輪があなたの方へ回ってきています。変化を恐れず、流れに身を委ねましょう。この瞬間が人生の転換点になるかもしれません。',
    },
  },
  {
    id: 11, emoji: '⚖️', color: '#10b981',
    image: `${WM}/4/4f/RWS1909_-_11_Justice.jpeg/250px-RWS1909_-_11_Justice.jpeg`,
    name: { ko: '정의', en: 'Justice', zh: '正义', ja: '正義' },
    keyword: { ko: '균형과 진실', en: 'Balance & Truth', zh: '平衡与真相', ja: 'バランスと真実' },
    message: {
      ko: '정직함과 공정함이 당신에게 가장 강력한 무기입니다. 진실을 말하고 올바른 선택을 하면 결과는 반드시 좋은 방향으로 흐릅니다. 균형을 유지하세요.',
      en: 'Honesty and fairness are your most powerful weapons. Speak the truth and make the right choice — the outcome will always flow in a good direction. Stay balanced.',
      zh: '诚实与公正是你最强大的武器。说真话、做正确的选择，结果必定朝好的方向发展。保持平衡。',
      ja: '正直さと公正さがあなたの最強の武器です。真実を語り正しい選択をすれば、結果は必ず良い方向に向かいます。バランスを保ちましょう。',
    },
  },
  {
    id: 12, emoji: '🌿', color: '#06b6d4',
    image: `${WM}/a/ab/RWS1909_-_12_Hanged_Man.jpeg/250px-RWS1909_-_12_Hanged_Man.jpeg`,
    name: { ko: '매달린 사람', en: 'The Hanged Man', zh: '倒吊人', ja: '吊るされた男' },
    keyword: { ko: '새로운 시각', en: 'New Perspective', zh: '新视角', ja: '新たな視点' },
    message: {
      ko: '지금 멈추는 것이 오히려 앞으로 나아가는 길입니다. 다른 각도에서 상황을 바라보면 완전히 새로운 해결책이 보입니다. 기다림 속에 지혜가 있습니다.',
      en: 'Pausing right now is actually the way to move forward. Look at the situation from a different angle — a completely new solution will appear. There is wisdom in waiting.',
      zh: '此刻的停下其实正是前进之路。换个角度看待情况，全新的解决方案就会显现。等待之中自有智慧。',
      ja: '今立ち止まることが、むしろ前に進む道です。違う角度から状況を見ると、まったく新しい解決策が見えます。待つことの中に知恵があります。',
    },
  },
  {
    id: 13, emoji: '🦋', color: '#a855f7',
    image: `${WM}/e/e9/RWS1909_-_13_Death.jpeg/250px-RWS1909_-_13_Death.jpeg`,
    name: { ko: '변화', en: 'Transformation', zh: '蜕变', ja: '変容' },
    keyword: { ko: '끝과 새 시작', en: 'Endings & Renewal', zh: '结束与新生', ja: '終わりと再生' },
    message: {
      ko: '무언가가 끝나고 있다면, 그것은 더 나은 무언가의 시작입니다. 두려움 없이 변화를 받아들이세요. 나비가 번데기를 벗고 날아오르듯, 당신도 변화 속에서 빛날 것입니다.',
      en: 'If something is ending, it is the beginning of something better. Embrace change without fear. Like a butterfly emerging from its cocoon, you will shine through transformation.',
      zh: '如果有什么正在结束，那是更好的事物的开始。毫无畏惧地接受变化。就像蝴蝶破茧而出，你也将在变化中闪耀光芒。',
      ja: '何かが終わりを告げているなら、それはより良い何かの始まりです。恐れずに変化を受け入れましょう。蝶が繭を脱して飛び立つように、あなたも変化の中で輝くでしょう。',
    },
  },
  {
    id: 14, emoji: '🌈', color: '#14b8a6',
    image: `${WM}/9/9e/RWS1909_-_14_Temperance.jpeg/250px-RWS1909_-_14_Temperance.jpeg`,
    name: { ko: '절제', en: 'Temperance', zh: '节制', ja: '節制' },
    keyword: { ko: '균형과 조화', en: 'Balance & Harmony', zh: '平衡与和谐', ja: 'バランスと調和' },
    message: {
      ko: '서두르지 말고 천천히, 그러나 꾸준히 나아가세요. 인내와 균형이 지금 당신에게 가장 필요한 덕목입니다. 조화로운 리듬 속에서 모든 것이 맞춰집니다.',
      en: 'Don\'t rush — move slowly but steadily. Patience and balance are the virtues you need most right now. In a harmonious rhythm, everything falls into place.',
      zh: '不要急躁，缓慢而稳定地前进。耐心与平衡是你现在最需要的品质。在和谐的节奏中，一切都会各归其位。',
      ja: '急がずゆっくりと、しかし着実に進みましょう。忍耐とバランスが今のあなたに最も必要な徳目です。調和のとれたリズムの中ですべてが整っていきます。',
    },
  },
  {
    id: 15, emoji: '🔥', color: '#ef4444',
    image: `${WM}/2/26/RWS1909_-_15_Devil.jpeg/250px-RWS1909_-_15_Devil.jpeg`,
    name: { ko: '해방', en: 'Liberation', zh: '解放', ja: '解放' },
    keyword: { ko: '자유와 각성', en: 'Freedom & Awakening', zh: '自由与觉醒', ja: '自由と覚醒' },
    message: {
      ko: '당신을 제한하는 두려움과 집착에서 벗어날 때입니다. 스스로 만든 한계를 깨뜨리면 그 너머에 자유가 있습니다. 진정한 당신의 모습을 마주할 용기를 가지세요.',
      en: 'It\'s time to break free from the fears and attachments holding you back. Shatter the limits you\'ve built yourself — freedom lies beyond them. Have the courage to face your true self.',
      zh: '是时候摆脱束缚你的恐惧与执念了。打破自己设下的枷锁，其外便是自由。请有勇气面对真实的自己。',
      ja: 'あなたを制限している恐れと執着から解き放たれるときです。自分で作った限界を破ればその先に自由があります。本当の自分と向き合う勇気を持ってください。',
    },
  },
  {
    id: 16, emoji: '⚡', color: '#f59e0b',
    image: `${WM}/2/2a/RWS1909_-_16_Tower.jpeg/250px-RWS1909_-_16_Tower.jpeg`,
    name: { ko: '번개', en: 'The Lightning', zh: '闪电', ja: '雷光' },
    keyword: { ko: '돌파와 각성', en: 'Breakthrough & Insight', zh: '突破与觉悟', ja: '突破と覚悟' },
    message: {
      ko: '예상치 못한 변화가 오더라도 당황하지 마세요. 그 흔들림이 더 단단한 토대를 만들기 위한 과정입니다. 무너지는 것은 다시 세울 수 있고, 더 강하게 세울 수 있습니다.',
      en: 'Even if unexpected change arrives, don\'t panic. That shaking is part of building a stronger foundation. What falls can be rebuilt — and built even stronger.',
      zh: '即使意外的变化来临，也不要慌张。那份动荡是建立更坚固基础的过程。倒下的可以重建，而且可以建得更坚强。',
      ja: '予期せぬ変化が来ても慌てないでください。その揺らぎはより強固な基盤を作るための過程です。崩れたものは再び建てられ、より強く建てることができます。',
    },
  },
  {
    id: 17, emoji: '⭐', color: '#818cf8',
    image: `${WM}/4/44/RWS1909_-_17_Star.jpeg/250px-RWS1909_-_17_Star.jpeg`,
    name: { ko: '별', en: 'The Star', zh: '星星', ja: '星' },
    keyword: { ko: '희망과 치유', en: 'Hope & Healing', zh: '希望与治愈', ja: '希望と癒し' },
    message: {
      ko: '어두운 밤이 끝나고 별빛이 당신을 비추고 있습니다. 희망을 잃지 마세요. 상처받은 마음도 치유되고 있고, 소망하던 것들이 서서히 현실이 되어가고 있습니다.',
      en: 'The dark night is ending and starlight is shining on you. Don\'t lose hope. Your wounded heart is healing, and the things you\'ve wished for are slowly becoming real.',
      zh: '黑暗的夜晚结束了，星光正在照耀你。不要失去希望。受伤的心正在愈合，渴望的事物正在慢慢变成现实。',
      ja: '暗い夜が終わり、星の光があなたを照らしています。希望を失わないでください。傷ついた心も癒えていき、願っていたことが少しずつ現実になっています。',
    },
  },
  {
    id: 18, emoji: '🌊', color: '#6366f1',
    image: `${WM}/3/3d/RWS1909_-_18_Moon.jpeg/250px-RWS1909_-_18_Moon.jpeg`,
    name: { ko: '달', en: 'The Moon', zh: '月亮', ja: '月' },
    keyword: { ko: '직관과 상상', en: 'Intuition & Imagination', zh: '直觉与想象', ja: '直観と想像' },
    message: {
      ko: '모든 것이 명확하지 않아도 괜찮습니다. 달빛처럼 은은하게, 그러나 분명히 길이 보이기 시작합니다. 불확실함 속에서 창의력이 피어나고 있습니다.',
      en: 'It\'s okay that not everything is clear. Like moonlight — gentle but definite — the path is beginning to appear. Your creativity is blooming within the uncertainty.',
      zh: '一切都不明朗也没关系。就像月光一样，温柔却清晰，道路已开始显现。创造力正在不确定中绽放。',
      ja: 'すべてが明確でなくても大丈夫です。月光のように穏やかに、しかし確かに道が見え始めています。不確かさの中で創造力が花開いています。',
    },
  },
  {
    id: 19, emoji: '☀️', color: '#fbbf24',
    image: `${WM}/e/e1/RWS1909_-_19_Sun.jpeg/250px-RWS1909_-_19_Sun.jpeg`,
    name: { ko: '태양', en: 'The Sun', zh: '太阳', ja: '太陽' },
    keyword: { ko: '기쁨과 성공', en: 'Joy & Success', zh: '喜悦与成功', ja: '喜びと成功' },
    message: {
      ko: '태양처럼 빛나는 에너지가 당신에게 가득합니다. 긍정적인 기운이 모든 것을 좋은 방향으로 이끌고 있어요. 기쁨을 만끽하고, 성공이 가까이 있음을 느끼세요.',
      en: 'You are filled with sun-bright energy. Positive forces are guiding everything in a good direction. Soak in the joy and feel how close success truly is.',
      zh: '你充满了如太阳般闪耀的能量。积极的气息正将一切引向好的方向。尽情享受喜悦，感受成功就在眼前。',
      ja: '太陽のように輝くエネルギーがあなたに満ちています。ポジティブな気が全てを良い方向に導いています。喜びを満喫し、成功が近くにあることを感じてください。',
    },
  },
  {
    id: 20, emoji: '🎺', color: '#a78bfa',
    image: `${WM}/8/8b/RWS1909_-_20_Judgement.jpeg/250px-RWS1909_-_20_Judgement.jpeg`,
    name: { ko: '심판', en: 'Judgement', zh: '审判', ja: '審判' },
    keyword: { ko: '각성과 재탄생', en: 'Awakening & Rebirth', zh: '觉醒与重生', ja: '覚醒と再生' },
    message: {
      ko: '새로운 자신으로 거듭날 시간이 왔습니다. 과거의 실수를 용서하고, 더 나은 미래를 향해 새롭게 출발하세요. 당신은 이미 충분히 준비되어 있습니다.',
      en: 'The time has come to be reborn as a new version of yourself. Forgive past mistakes and set off toward a better future. You are already prepared enough.',
      zh: '重生为全新自我的时刻到来了。原谅过去的错误，向更好的未来出发。你已经做好了足够的准备。',
      ja: '新しい自分に生まれ変わる時が来ました。過去の過ちを許し、より良い未来へと新たに出発しましょう。あなたはすでに十分な準備ができています。',
    },
  },
  {
    id: 21, emoji: '🌍', color: '#10b981',
    image: `${WM}/a/a4/RWS1909_-_21_World.jpeg/250px-RWS1909_-_21_World.jpeg`,
    name: { ko: '세계', en: 'The World', zh: '世界', ja: '世界' },
    keyword: { ko: '완성과 성취', en: 'Completion & Achievement', zh: '完成与成就', ja: '完成と達成' },
    message: {
      ko: '당신은 하나의 중요한 여정을 완성해 가고 있습니다. 지금까지의 노력이 아름다운 열매를 맺고 있어요. 자신을 축하하고, 다음 위대한 여정을 준비하세요.',
      en: 'You are completing one important journey. All your efforts so far are bearing beautiful fruit. Celebrate yourself, and prepare for the next great adventure.',
      zh: '你正在完成一段重要的旅程。迄今为止的努力正结出美丽的果实。为自己庆祝，并准备迎接下一段伟大旅程。',
      ja: '一つの大切な旅を完成させつつあります。これまでの努力が美しい実を結んでいます。自分を祝い、次の偉大な旅への準備をしましょう。',
    },
  },
];
