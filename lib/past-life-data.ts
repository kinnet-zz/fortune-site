import { type Lang } from './i18n';

export interface PastLife {
  emoji: string;
  era: Record<Lang, string>;
  title: Record<Lang, string>;
  desc: Record<Lang, string>;
  traits: Record<Lang, string[]>;
}

export const PAST_LIVES: PastLife[] = [
  {
    emoji: '🎨',
    era:   { ko: '조선시대', en: 'Joseon Dynasty', zh: '朝鲜时代', ja: '朝鮮時代' },
    title: { ko: '궁중 화원', en: 'Royal Court Painter', zh: '宫廷画师', ja: '宮廷画員' },
    desc:  { ko: '왕실의 의뢰를 받아 산수화와 초상화를 그리던 예술가. 붓 한 자루로 역사를 기록했습니다.', en: 'An artist who painted landscapes and portraits for the royal court, recording history with a single brush.', zh: '受皇室委托绘制山水画和肖像画的艺术家，用一支画笔记录了历史。', ja: '王室の依頼を受けて山水画や肖像画を描いた芸術家。一本の筆で歴史を記録しました。' },
    traits: { ko: ['섬세함', '예술적 감각', '인내심'], en: ['Delicacy', 'Artistic sense', 'Patience'], zh: ['细腻', '艺术感', '耐心'], ja: ['繊細さ', '芸術的感覚', '忍耐力'] },
  },
  {
    emoji: '🏛️',
    era:   { ko: '고대 이집트', en: 'Ancient Egypt', zh: '古埃及', ja: '古代エジプト' },
    title: { ko: '신전 신관', en: 'Temple Priest', zh: '神殿祭司', ja: '神殿の神官' },
    desc:  { ko: '파라오와 신들 사이의 중개자로서 신성한 의식을 집전하고 고대 지식을 수호하던 존재.', en: 'A mediator between the Pharaoh and the gods, conducting sacred rituals and guarding ancient knowledge.', zh: '作为法老与众神之间的调解者，主持神圣仪式，守护古代知识。', ja: 'ファラオと神々の仲介者として聖なる儀式を執り行い、古代の知識を守った存在。' },
    traits: { ko: ['신비로움', '지혜', '의식적 엄숙함'], en: ['Mysticism', 'Wisdom', 'Ceremonial gravity'], zh: ['神秘', '智慧', '庄严'], ja: ['神秘性', '知恵', '儀式的厳粛さ'] },
  },
  {
    emoji: '⚔️',
    era:   { ko: '중세 유럽', en: 'Medieval Europe', zh: '中世纪欧洲', ja: '中世ヨーロッパ' },
    title: { ko: '기사', en: 'Knight', zh: '骑士', ja: '騎士' },
    desc:  { ko: '명예와 충성을 신조로 삼아 전장을 누볐던 전사. 약자를 보호하고 주군에게 헌신했습니다.', en: 'A warrior who roamed battlefields with honor and loyalty as their creed, protecting the weak and serving their lord.', zh: '以荣誉和忠诚为信条驰骋战场的战士，保护弱者，效忠主君。', ja: '名誉と忠誠を信条に戦場を駆け抜けた戦士。弱者を守り主君に献身しました。' },
    traits: { ko: ['용맹함', '충성심', '정의감'], en: ['Bravery', 'Loyalty', 'Justice'], zh: ['勇猛', '忠诚', '正义感'], ja: ['勇猛さ', '忠誠心', '正義感'] },
  },
  {
    emoji: '🛡️',
    era:   { ko: '고대 로마', en: 'Ancient Rome', zh: '古罗马', ja: '古代ローマ' },
    title: { ko: '검투사', en: 'Gladiator', zh: '角斗士', ja: '剣闘士' },
    desc:  { ko: '콜로세움의 함성 속에서 살아남은 전사. 자유를 얻기 위해 모든 것을 걸었던 불굴의 존재.', en: 'A warrior who survived the roar of the Colosseum, staking everything for freedom.', zh: '在斗兽场的欢呼声中存活下来的战士，为了自由赌上了一切。', ja: 'コロッセウムの歓声の中を生き抜いた戦士。自由を得るために全てをかけた不屈の存在。' },
    traits: { ko: ['투지', '생존 본능', '강인함'], en: ['Fighting spirit', 'Survival instinct', 'Toughness'], zh: ['斗志', '求生本能', '坚韧'], ja: ['闘志', '生存本能', '強靭さ'] },
  },
  {
    emoji: '🌸',
    era:   { ko: '신라시대', en: 'Silla Kingdom', zh: '新罗时代', ja: '新羅時代' },
    title: { ko: '화랑', en: 'Hwarang Warrior', zh: '花郎', ja: '花郎' },
    desc:  { ko: '화랑도의 정신으로 수련하고 나라를 지킨 젊은 전사. 문무를 겸비한 삼국 통일의 주역.', en: 'A young warrior trained in the Hwarang spirit, a key figure in unifying the Three Kingdoms.', zh: '以花郎精神修炼、守护国家的年轻战士，文武兼备，是三国统一的主角。', ja: '花郎の精神で修練し国を守った若き戦士。文武を兼ね備えた三国統一の立役者。' },
    traits: { ko: ['순수함', '무예', '의리'], en: ['Purity', 'Martial arts', 'Brotherhood'], zh: ['纯洁', '武艺', '义气'], ja: ['純粋さ', '武芸', '義理'] },
  },
  {
    emoji: '📜',
    era:   { ko: '당나라', en: 'Tang Dynasty', zh: '唐朝', ja: '唐時代' },
    title: { ko: '궁정 시인', en: 'Court Poet', zh: '宫廷诗人', ja: '宮廷詩人' },
    desc:  { ko: '달빛과 술잔 속에서 세상의 이치를 노래했던 시인. 그의 시는 천년이 지나도 사람들 가슴을 울립니다.', en: 'A poet who sang of life\'s truths amid moonlight and wine. Their verses still resonate a thousand years later.', zh: '在月光和酒杯中歌颂世间道理的诗人，他的诗歌历经千年仍动人心弦。', ja: '月明かりと盃の中で世の理を詠んだ詩人。その詩は千年後も人々の心を揺さぶります。' },
    traits: { ko: ['감수성', '창의력', '낭만'], en: ['Sensitivity', 'Creativity', 'Romance'], zh: ['感受力', '创造力', '浪漫'], ja: ['感受性', '創造力', 'ロマン'] },
  },
  {
    emoji: '🦉',
    era:   { ko: '고대 그리스', en: 'Ancient Greece', zh: '古希腊', ja: '古代ギリシャ' },
    title: { ko: '철학자', en: 'Philosopher', zh: '哲学家', ja: '哲学者' },
    desc:  { ko: '아고라에서 진리를 탐구하며 제자들과 문답을 나눴던 사상가. 세계를 바꾼 질문들을 던졌습니다.', en: 'A thinker who explored truth in the agora, exchanging questions with disciples and posing questions that changed the world.', zh: '在广场探索真理，与弟子们进行问答的思想家，提出了改变世界的问题。', ja: 'アゴラで真理を探求し弟子たちと問答を交わした思想家。世界を変えた問いを投げかけました。' },
    traits: { ko: ['논리력', '탐구심', '비판적 사고'], en: ['Logic', 'Curiosity', 'Critical thinking'], zh: ['逻辑力', '探究心', '批判性思维'], ja: ['論理力', '探究心', '批判的思考'] },
  },
  {
    emoji: '⛵',
    era:   { ko: '바이킹 시대', en: 'Viking Age', zh: '维京时代', ja: 'ヴァイキング時代' },
    title: { ko: '탐험가', en: 'Explorer', zh: '探险家', ja: '探検家' },
    desc:  { ko: '미지의 바다를 향해 롱쉽을 타고 항해했던 모험가. 두려움 없이 새로운 세계를 개척했습니다.', en: 'An adventurer who sailed in a longship toward unknown seas, fearlessly pioneering new worlds.', zh: '乘坐长船驶向未知海洋的冒险家，无畏地开拓了新世界。', ja: '未知の海に向かってロングシップで航海した冒険家。恐れることなく新世界を切り開きました。' },
    traits: { ko: ['대담함', '모험심', '자유로움'], en: ['Boldness', 'Adventurous spirit', 'Freedom'], zh: ['大胆', '冒险精神', '自由'], ja: ['大胆さ', '冒険心', '自由奔放'] },
  },
  {
    emoji: '🐪',
    era:   { ko: '실크로드 시대', en: 'Silk Road Era', zh: '丝绸之路时代', ja: 'シルクロード時代' },
    title: { ko: '상인', en: 'Merchant', zh: '商人', ja: '商人' },
    desc:  { ko: '동서양을 잇는 실크로드를 누비며 비단과 향신료를 교역했던 모험적인 상인.', en: 'An adventurous merchant who traveled the Silk Road, trading silk and spices between East and West.', zh: '穿梭于连接东西方的丝绸之路，交易丝绸和香料的冒险商人。', ja: '東西をつなぐシルクロードを旅し、絹と香辛料を交易した冒険的な商人。' },
    traits: { ko: ['협상력', '적응력', '통찰력'], en: ['Negotiation', 'Adaptability', 'Insight'], zh: ['谈判力', '适应力', '洞察力'], ja: ['交渉力', '適応力', '洞察力'] },
  },
  {
    emoji: '🙏',
    era:   { ko: '티베트 왕국', en: 'Tibetan Kingdom', zh: '西藏王国', ja: 'チベット王国' },
    title: { ko: '라마승', en: 'Lama Monk', zh: '喇嘛僧', ja: 'ラマ僧' },
    desc:  { ko: '히말라야 설산의 수도원에서 깨달음을 추구하며 명상에 잠겼던 수행자. 내면의 평화를 찾았습니다.', en: 'A practitioner who sought enlightenment in a Himalayan monastery, immersed in meditation and inner peace.', zh: '在喜马拉雅山脉的修道院中追求启悟、沉浸于冥想的修行者，找到了内心的平静。', ja: 'ヒマラヤの雪山の修道院で悟りを求め、瞑想に没頭した修行者。内なる平和を見つけました。' },
    traits: { ko: ['평온함', '깊은 사유', '자비심'], en: ['Serenity', 'Deep contemplation', 'Compassion'], zh: ['平静', '深思', '慈悲'], ja: ['平穏さ', '深い思索', '慈悲心'] },
  },
  {
    emoji: '🖌️',
    era:   { ko: '르네상스 시대', en: 'Renaissance', zh: '文艺复兴时代', ja: 'ルネサンス時代' },
    title: { ko: '화가', en: 'Painter', zh: '画家', ja: '画家' },
    desc:  { ko: '인체의 아름다움과 자연의 빛을 캔버스에 담았던 예술가. 시대를 초월한 걸작을 남겼습니다.', en: 'An artist who captured the beauty of the human form and the light of nature on canvas, leaving timeless masterpieces.', zh: '将人体之美与自然之光描绘于画布的艺术家，留下了超越时代的杰作。', ja: '人体の美しさと自然の光をキャンバスに収めた芸術家。時代を超えた傑作を残しました。' },
    traits: { ko: ['창의성', '완벽주의', '영감'], en: ['Creativity', 'Perfectionism', 'Inspiration'], zh: ['创造性', '完美主义', '灵感'], ja: ['創造性', '完璧主義', 'インスピレーション'] },
  },
  {
    emoji: '🗡️',
    era:   { ko: '조선시대', en: 'Joseon Dynasty', zh: '朝鲜时代', ja: '朝鮮時代' },
    title: { ko: '무관', en: 'Military Officer', zh: '武官', ja: '武官' },
    desc:  { ko: '나라의 방패가 되어 국경을 지킨 무장. 엄격한 훈련과 전술로 적을 물리쳤습니다.', en: 'An armed officer who served as the nation\'s shield, defending borders with rigorous training and tactics.', zh: '成为国家盾牌守护边境的武将，用严格训练和战术击退敌人。', ja: '国の盾となり国境を守った武将。厳しい訓練と戦術で敵を退けました。' },
    traits: { ko: ['강인함', '규율', '리더십'], en: ['Strength', 'Discipline', 'Leadership'], zh: ['强健', '纪律', '领导力'], ja: ['強靭さ', '規律', 'リーダーシップ'] },
  },
  {
    emoji: '🌞',
    era:   { ko: '아즈텍 제국', en: 'Aztec Empire', zh: '阿兹特克帝国', ja: 'アステカ帝国' },
    title: { ko: '제사장', en: 'High Priest', zh: '祭司', ja: '祭司' },
    desc:  { ko: '태양신에게 바치는 의식을 집전하며 우주의 질서를 유지했던 신성한 존재.', en: 'A sacred figure who conducted rituals for the sun god, maintaining the cosmic order.', zh: '主持献祭太阳神仪式，维系宇宙秩序的神圣存在。', ja: '太陽神への儀式を執り行い、宇宙の秩序を維持した神聖な存在。' },
    traits: { ko: ['카리스마', '신비주의', '권위'], en: ['Charisma', 'Mysticism', 'Authority'], zh: ['魅力', '神秘主义', '权威'], ja: ['カリスマ', '神秘主義', '権威'] },
  },
  {
    emoji: '⚗️',
    era:   { ko: '중세 유럽', en: 'Medieval Europe', zh: '中世纪欧洲', ja: '中世ヨーロッパ' },
    title: { ko: '연금술사', en: 'Alchemist', zh: '炼金术士', ja: '錬金術師' },
    desc:  { ko: '납을 금으로 바꾸는 꿈을 품고 밤새 실험하던 지식 탐구자. 현대 과학의 씨앗을 심었습니다.', en: 'A knowledge seeker who experimented through the night, dreaming of turning lead into gold, planting seeds of modern science.', zh: '怀揣点铁成金之梦彻夜实验的知识探求者，播下了现代科学的种子。', ja: '鉛を金に変える夢を抱き夜通し実験した知識探求者。近代科学の種を蒔きました。' },
    traits: { ko: ['탐구심', '집요함', '상상력'], en: ['Curiosity', 'Tenacity', 'Imagination'], zh: ['探究心', '执着', '想象力'], ja: ['探究心', '執拗さ', '想像力'] },
  },
  {
    emoji: '🌹',
    era:   { ko: '페르시아 제국', en: 'Persian Empire', zh: '波斯帝国', ja: 'ペルシャ帝国' },
    title: { ko: '궁정 시인', en: 'Court Poet', zh: '宫廷诗人', ja: '宮廷詩人' },
    desc:  { ko: '장미 향기와 포도주 속에서 사랑과 신비를 노래했던 시인. 그 시는 수백 년을 흘러 지금도 읽힙니다.', en: 'A poet who sang of love and mystery amid roses and wine. Their verses have flowed across centuries and are still read today.', zh: '在玫瑰芬芳与葡萄酒中歌颂爱与神秘的诗人，其诗歌流传数百年至今仍被阅读。', ja: 'バラの香りとワインの中で愛と神秘を詠んだ詩人。その詩は何百年も流れ今も読まれています。' },
    traits: { ko: ['낭만', '직관', '감성'], en: ['Romance', 'Intuition', 'Emotion'], zh: ['浪漫', '直觉', '感性'], ja: ['ロマン', '直観', '感性'] },
  },
  {
    emoji: '🥷',
    era:   { ko: '에도 시대', en: 'Edo Period', zh: '江户时代', ja: '江戸時代' },
    title: { ko: '닌자', en: 'Ninja', zh: '忍者', ja: '忍者' },
    desc:  { ko: '어둠 속을 누비며 정보를 수집하고 임무를 완수했던 그림자 전사. 결코 존재를 드러내지 않았습니다.', en: 'A shadow warrior who moved through darkness, gathering information and completing missions. Never revealing their existence.', zh: '穿梭于黑暗中收集情报、完成任务的影子战士，从不暴露自己的存在。', ja: '闇の中を駆け巡り情報を集め任務を完遂した影の戦士。決して存在を現しませんでした。' },
    traits: { ko: ['집중력', '민첩성', '냉철함'], en: ['Focus', 'Agility', 'Cool-headedness'], zh: ['专注力', '敏捷', '冷静'], ja: ['集中力', '機敏さ', '冷静さ'] },
  },
  {
    emoji: '🎵',
    era:   { ko: '중국 당나라', en: 'Tang Dynasty China', zh: '中国唐朝', ja: '中国唐時代' },
    title: { ko: '황실 악사', en: 'Imperial Musician', zh: '皇室乐师', ja: '皇室楽師' },
    desc:  { ko: '황제 앞에서 비파와 쟁을 연주하며 궁중의 화려함을 음악으로 수놓았던 예인.', en: 'An entertainer who wove the splendor of the imperial court through music, playing pipa and zheng before the emperor.', zh: '在皇帝面前演奏琵琶和筝，用音乐描绘宫廷华丽的艺人。', ja: '皇帝の前で琵琶や筝を演奏し、宮廷の華やかさを音楽で織り成した芸人。' },
    traits: { ko: ['음악적 재능', '우아함', '감수성'], en: ['Musical talent', 'Elegance', 'Sensitivity'], zh: ['音乐才华', '优雅', '感受力'], ja: ['音楽的才能', '優雅さ', '感受性'] },
  },
  {
    emoji: '🌿',
    era:   { ko: '고대 켈트', en: 'Ancient Celtic', zh: '古代凯尔特', ja: '古代ケルト' },
    title: { ko: '드루이드', en: 'Druid', zh: '德鲁伊', ja: 'ドルイド' },
    desc:  { ko: '숲의 정령과 교감하고 자연의 이치를 깨달은 신비로운 사제. 부족의 지혜를 대대로 전했습니다.', en: 'A mystical priest who communed with forest spirits and understood nature\'s laws, passing down tribal wisdom through generations.', zh: '与森林精灵交流、领悟自然法则的神秘祭司，将部落智慧代代相传。', ja: '森の精霊と交感し自然の理を悟った神秘的な祭司。部族の知恵を代々伝えました。' },
    traits: { ko: ['자연친화', '신비감', '직관'], en: ['Nature affinity', 'Mystical aura', 'Intuition'], zh: ['亲近自然', '神秘感', '直觉'], ja: ['自然親和', '神秘的雰囲気', '直観'] },
  },
  {
    emoji: '⭐',
    era:   { ko: '고대 메소포타미아', en: 'Ancient Mesopotamia', zh: '古代美索不达米亚', ja: '古代メソポタミア' },
    title: { ko: '점성술사', en: 'Astrologer', zh: '占星师', ja: '占星術師' },
    desc:  { ko: '밤하늘의 별을 읽어 왕의 운명과 전쟁의 승패를 예언했던 지혜로운 현자.', en: 'A wise sage who read the night sky to predict a king\'s fate and the outcome of wars.', zh: '解读夜空星象，预言国王命运和战争胜负的智慧贤者。', ja: '夜空の星を読み取り、王の運命と戦争の勝敗を予言した賢者。' },
    traits: { ko: ['예지력', '집중력', '신중함'], en: ['Foresight', 'Focus', 'Prudence'], zh: ['预见力', '专注力', '谨慎'], ja: ['予知力', '集中力', '慎重さ'] },
  },
  {
    emoji: '💊',
    era:   { ko: '조선시대', en: 'Joseon Dynasty', zh: '朝鲜时代', ja: '朝鮮時代' },
    title: { ko: '의녀', en: 'Female Physician', zh: '女医', ja: '女医師' },
    desc:  { ko: '한의학을 배워 궁중 여인들과 백성들을 치료했던 선구적인 여성 의료인.', en: 'A pioneering female healer who learned traditional medicine to treat court ladies and commoners alike.', zh: '学习韩医学、为宫廷女性和百姓治病的先驱性女性医者。', ja: '韓方医学を学び宮廷の女性たちや民を治療した先駆的な女性医療者。' },
    traits: { ko: ['헌신', '지식욕', '따뜻한 마음'], en: ['Dedication', 'Thirst for knowledge', 'Warmth'], zh: ['奉献', '求知欲', '温暖'], ja: ['献身', '知識欲', '温かい心'] },
  },
  {
    emoji: '🌙',
    era:   { ko: '고대 마야 문명', en: 'Ancient Maya', zh: '古代玛雅文明', ja: '古代マヤ文明' },
    title: { ko: '천문학자', en: 'Astronomer', zh: '天文学家', ja: '天文学者' },
    desc:  { ko: '피라미드 꼭대기에서 별을 관측하고 정밀한 달력을 만들었던 수학자이자 천문학자.', en: 'A mathematician and astronomer who observed stars from atop pyramids and created a precise calendar.', zh: '在金字塔顶端观测星象、制作精准历法的数学家兼天文学家。', ja: 'ピラミッドの頂から星を観測し、精密な暦を作った数学者兼天文学者。' },
    traits: { ko: ['분석력', '정밀함', '우주적 사고'], en: ['Analysis', 'Precision', 'Cosmic thinking'], zh: ['分析力', '精确', '宇宙思维'], ja: ['分析力', '精密さ', '宇宙的思考'] },
  },
  {
    emoji: '✨',
    era:   { ko: '비잔틴 제국', en: 'Byzantine Empire', zh: '拜占庭帝国', ja: 'ビザンツ帝国' },
    title: { ko: '모자이크 장인', en: 'Mosaic Artisan', zh: '马赛克工匠', ja: 'モザイク職人' },
    desc:  { ko: '수천 개의 유리 조각으로 성당 벽을 신성한 그림으로 장식했던 섬세한 예술 장인.', en: 'A delicate artisan who decorated cathedral walls with sacred images made from thousands of glass pieces.', zh: '用数千块玻璃碎片将教堂墙壁装饰成神圣图画的精细艺术工匠。', ja: '何千もの小さなガラスで聖堂の壁を聖なる絵で飾った繊細な芸術職人。' },
    traits: { ko: ['꼼꼼함', '예술성', '인내'], en: ['Meticulousness', 'Artistry', 'Patience'], zh: ['细心', '艺术性', '耐心'], ja: ['几帳面さ', '芸術性', '忍耐'] },
  },
  {
    emoji: '👑',
    era:   { ko: '조선시대', en: 'Joseon Dynasty', zh: '朝鲜时代', ja: '朝鮮時代' },
    title: { ko: '상궁', en: 'Head Court Lady', zh: '尚宫', ja: '尚宮' },
    desc:  { ko: '궁중의 모든 의례와 규범을 관장하며 왕실을 내부에서 이끌었던 최고 품계의 궁녀.', en: 'The highest-ranking court lady who oversaw all royal ceremonies and protocols, leading the palace from within.', zh: '掌管宫廷所有礼仪规范，从内部领导王室的最高品阶宫女。', ja: '宮廷の全ての儀礼と規範を管掌し、王室を内部から導いた最高品階の宮女。' },
    traits: { ko: ['책임감', '우아함', '통솔력'], en: ['Responsibility', 'Grace', 'Leadership'], zh: ['责任感', '优雅', '统率力'], ja: ['責任感', '優雅さ', '統率力'] },
  },
  {
    emoji: '💃',
    era:   { ko: '무굴 제국', en: 'Mughal Empire', zh: '莫卧儿帝国', ja: 'ムガル帝国' },
    title: { ko: '궁정 무희', en: 'Court Dancer', zh: '宫廷舞女', ja: '宮廷舞姫' },
    desc:  { ko: '화려한 의상을 입고 황제 앞에서 춤을 추며 신과 인간의 이야기를 몸으로 표현했던 예술가.', en: 'An artist who wore dazzling costumes and danced before the emperor, expressing stories of gods and humans through movement.', zh: '身着华丽服装在皇帝面前起舞，用身体表现神与人类故事的艺术家。', ja: '華やかな衣装を纏い皇帝の前で踊り、神と人間の物語を身体で表現した芸術家。' },
    traits: { ko: ['표현력', '열정', '아름다움'], en: ['Expressiveness', 'Passion', 'Beauty'], zh: ['表达力', '热情', '美丽'], ja: ['表現力', '情熱', '美しさ'] },
  },
];

export function getPastLife(birthDate: string, name: string): PastLife {
  const date = new Date(birthDate);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  // 별자리 인덱스 (0~11)
  const zodiacIndex = getZodiacIndex(month, day);
  // 띠 인덱스 (0~11)
  const chineseIndex = ((year - 2020) % 12 + 12) % 12;
  // 이름 해시
  const nameHash = name.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);

  const idx = (zodiacIndex * 7 + chineseIndex * 11 + nameHash * 3) % PAST_LIVES.length;
  return PAST_LIVES[idx];
}

function getZodiacIndex(month: number, day: number): number {
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 0;
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 1;
  if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) return 2;
  if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) return 3;
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 4;
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 5;
  if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) return 6;
  if ((month === 10 && day >= 24) || (month === 11 && day <= 22)) return 7;
  if ((month === 11 && day >= 23) || (month === 12 && day <= 21)) return 8;
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 9;
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 10;
  return 11;
}
