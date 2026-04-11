export const runtime = 'edge';

import type { Metadata } from 'next';
import type { Lang } from '@/lib/i18n';
import CardDrawClient from '@/components/CardDrawClient';

const VALID_LANGS: Lang[] = ['ko', 'en', 'zh', 'ja'];
function getLang(p?: string): Lang {
  return VALID_LANGS.includes(p as Lang) ? (p as Lang) : 'ko';
}

const ogData: Record<Lang, { title: string; description: string }> = {
  ko: {
    title: '오늘의 타로 카드 🃏 | 무료 카드 뽑기',
    description: '오늘 당신에게 필요한 메시지를 타로 카드가 전해드립니다. 22장의 메이저 아르카나 중 하나를 뽑아보세요.',
  },
  en: {
    title: "Today's Tarot Card 🃏 | Free Card Draw",
    description: 'A tarot card delivers the message you need today. Draw one from the 22 Major Arcana and discover your guidance.',
  },
  zh: {
    title: '今日塔罗牌 🃏 | 免费抽牌',
    description: '塔罗牌为你传递今日所需的讯息。从22张大阿尔卡那中抽取一张，探索你的指引。',
  },
  ja: {
    title: '今日のタロットカード 🃏 | 無料カード引き',
    description: '今日あなたに必要なメッセージをタロットカードがお届けします。22枚の大アルカナから1枚引いてみましょう。',
  },
};

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}): Promise<Metadata> {
  const { lang: p } = await searchParams;
  const lang = getLang(p);
  const { title, description } = ogData[lang];
  const url = lang === 'ko'
    ? 'https://www.starfate.day/card-draw'
    : `https://www.starfate.day/card-draw?lang=${lang}`;

  return {
    title,
    description,
    openGraph: {
      title, description, type: 'website', url, siteName: 'StarFate',
      images: [{ url: 'https://www.starfate.day/og-image.png', width: 1200, height: 630, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['https://www.starfate.day/og-image.png'] },
    alternates: {
      canonical: url,
      languages: {
        ko: 'https://www.starfate.day/card-draw',
        en: 'https://www.starfate.day/card-draw?lang=en',
        zh: 'https://www.starfate.day/card-draw?lang=zh',
        ja: 'https://www.starfate.day/card-draw?lang=ja',
      },
    },
  };
}

const bgStyle = {
  background: 'linear-gradient(180deg, #0d0118 0%, #150a2e 60%, #0d0118 100%)',
};

const MAJOR_ARCANA = [
  { id: '0',    ko: '광대',      en: 'The Fool',          meaning: '새로운 시작, 순수함, 무한한 가능성. 두려움 없이 새 여정을 떠나는 에너지.' },
  { id: 'I',    ko: '마법사',    en: 'The Magician',      meaning: '능력과 의지, 집중력. 가진 자원을 최대한 활용하여 원하는 것을 현실로 만드는 힘.' },
  { id: 'II',   ko: '여사제',    en: 'High Priestess',    meaning: '직관과 신비, 내면의 지혜. 논리보다 감각과 무의식의 목소리에 귀 기울여야 할 때.' },
  { id: 'III',  ko: '여황제',    en: 'The Empress',       meaning: '풍요와 창조, 모성. 감각적 즐거움과 창의적 에너지가 충만하며 성장과 번영을 상징.' },
  { id: 'IV',   ko: '황제',      en: 'The Emperor',       meaning: '권위와 안정, 리더십. 질서와 구조를 통해 목표를 달성하는 실용적이고 단호한 에너지.' },
  { id: 'V',    ko: '교황',      en: 'The Hierophant',    meaning: '전통과 믿음, 영적 인도. 제도나 스승을 통해 지혜를 얻고 신뢰할 수 있는 길을 따르는 것.' },
  { id: 'VI',   ko: '연인들',    en: 'The Lovers',        meaning: '사랑과 선택, 가치관의 조화. 중요한 결정 앞에서 진정으로 원하는 것이 무엇인지 묻는 카드.' },
  { id: 'VII',  ko: '전차',      en: 'The Chariot',       meaning: '의지력과 승리, 자기 통제. 역경을 극복하고 목표를 향해 힘차게 전진하는 에너지.' },
  { id: 'VIII', ko: '힘',        en: 'Strength',          meaning: '용기와 내면의 힘, 인내. 폭력이 아닌 온화함과 자기 절제로 상황을 다스리는 진정한 강인함.' },
  { id: 'IX',   ko: '은둔자',    en: 'The Hermit',        meaning: '고독과 성찰, 내면의 빛. 혼자만의 시간을 통해 깊은 지혜를 찾고 내면의 진실을 발견하는 것.' },
  { id: 'X',    ko: '운명의 바퀴', en: 'Wheel of Fortune', meaning: '순환과 변화, 기회. 삶의 흐름은 끊임없이 변하며, 지금은 새로운 사이클이 시작되는 전환점.' },
  { id: 'XI',   ko: '정의',      en: 'Justice',           meaning: '균형과 진실, 인과응보. 공정한 결과와 책임을 강조하며, 진실에 기반한 결정이 필요한 시기.' },
  { id: 'XII',  ko: '매달린 남자', en: 'The Hanged Man',  meaning: '희생과 새로운 관점. 잠시 멈추고 다른 각도로 세상을 바라보면 예상치 못한 깨달음이 찾아옴.' },
  { id: 'XIII', ko: '변화',      en: 'Death',             meaning: '끝과 변환, 새로운 시작. 무언가가 끝나야 새것이 시작될 수 있다는 자연스러운 변화의 과정.' },
  { id: 'XIV',  ko: '절제',      en: 'Temperance',        meaning: '균형과 조화, 중용. 극단을 피하고 삶의 다양한 요소를 조화롭게 통합하는 지혜.' },
  { id: 'XV',   ko: '악마',      en: 'The Devil',         meaning: '속박과 집착, 물질주의. 자신을 옭아매는 습관이나 두려움을 인식하고 자유를 되찾을 것을 촉구.' },
  { id: 'XVI',  ko: '탑',        en: 'The Tower',         meaning: '급격한 변화와 붕괴, 깨달음. 거짓 구조가 무너지며 진실이 드러나는 충격적이지만 해방적인 순간.' },
  { id: 'XVII', ko: '별',        en: 'The Star',          meaning: '희망과 영감, 치유. 어둠 뒤에 찾아오는 빛처럼, 새로운 희망과 평화로운 에너지가 가득 차오름.' },
  { id: 'XVIII', ko: '달',       en: 'The Moon',          meaning: '환상과 불안, 무의식. 눈에 보이지 않는 것들이 영향을 미치고 있으며, 내면의 두려움과 마주해야 할 때.' },
  { id: 'XIX',  ko: '태양',      en: 'The Sun',           meaning: '기쁨과 성공, 활력. 모든 것이 밝게 빛나는 행복한 시기로, 자신감과 긍정적 에너지가 넘침.' },
  { id: 'XX',   ko: '심판',      en: 'Judgement',         meaning: '부활과 재탄생, 성찰. 과거를 돌아보고 내면의 부름에 응답하며 진정한 자신으로 거듭나는 순간.' },
  { id: 'XXI',  ko: '세계',      en: 'The World',         meaning: '완성과 통합, 성취. 하나의 사이클이 완전히 완성되어 전체적인 조화와 성공에 도달한 상태.' },
];

export default function CardDrawPage() {
  return (
    <div style={bgStyle}>
      <CardDrawClient />

      {/* Tarot educational content */}
      <div className="max-w-2xl mx-auto px-6 pb-20 space-y-8">

        {/* 타로란? */}
        <div
          className="rounded-2xl p-6"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          <h2 className="text-white font-bold text-base mb-3">🃏 타로 카드란?</h2>
          <p className="text-white/55 text-sm leading-relaxed mb-3">
            타로(Tarot)는 78장의 카드로 이루어진 상징 체계로, 14~15세기 유럽에서 카드 게임용으로 시작되어 18세기 이후 점술과 자기 성찰의 도구로 발전했습니다. 현재 가장 널리 사용되는 라이더-웨이트 타로(Rider-Waite Tarot, 1909)는 아서 에드워드 웨이트와 파멜라 콜먼 스미스가 제작한 것으로, 상징적 이미지로 가득한 삽화가 특징입니다.
          </p>
          <p className="text-white/55 text-sm leading-relaxed mb-3">
            타로 78장은 크게 두 부분으로 나뉩니다. <strong className="text-white/75">메이저 아르카나(Major Arcana)</strong> 22장은 &ldquo;큰 비밀&rdquo;을 의미하며, 인생의 중요한 전환점과 보편적 원형을 상징합니다. <strong className="text-white/75">마이너 아르카나(Minor Arcana)</strong> 56장은 일상적인 사건과 감정을 나타냅니다.
          </p>
          <p className="text-white/55 text-sm leading-relaxed">
            심리학자 카를 융(Carl Jung)은 타로의 상징이 인간의 집단 무의식에 존재하는 원형(Archetype)을 반영한다고 보았습니다. 현대에는 미래 예언보다 자기 이해와 내면 탐색의 도구로 활용되는 경향이 강합니다. StarFate의 카드 뽑기는 오락 목적으로 제공되며, 카드의 메시지를 하루의 의도를 설정하는 계기로 활용해보세요.
          </p>
        </div>

        {/* 메이저 아르카나 22장 가이드 */}
        <div
          className="rounded-2xl p-6"
          style={{ background: 'rgba(99,102,241,0.07)', border: '1px solid rgba(99,102,241,0.15)' }}
        >
          <h2 className="text-white font-bold text-base mb-5">✨ 메이저 아르카나 22장 완전 가이드</h2>
          <div className="space-y-3">
            {MAJOR_ARCANA.map((card) => (
              <div
                key={card.id}
                className="flex gap-3 items-start rounded-xl p-3"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
              >
                <div className="flex-shrink-0 w-12 text-center">
                  <div className="text-purple-400 font-black text-xs">{card.id}</div>
                  <div className="text-white font-bold text-xs mt-0.5">{card.ko}</div>
                  <div className="text-white/25 text-[9px]">{card.en}</div>
                </div>
                <p className="text-white/50 text-xs leading-relaxed pt-0.5">{card.meaning}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 카드 활용 팁 */}
        <div
          className="rounded-2xl p-6"
          style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <h2 className="text-white font-bold text-base mb-3">💡 타로 카드 활용 팁</h2>
          <div className="space-y-2 text-sm text-white/50">
            {[
              { t: '마음을 비우고 뽑기', d: '카드를 선택하기 전 잠시 눈을 감고 오늘 가장 신경 쓰이는 것이나 질문을 떠올리세요. 무의식이 끌리는 카드를 선택합니다.' },
              { t: '메시지를 일상에 적용하기', d: '카드의 메시지를 문자 그대로 해석하기보다, 오늘 하루 자신의 상황에 빗대어 어떤 의미인지 생각해보세요.' },
              { t: '일기처럼 기록하기', d: '오늘 뽑은 카드와 그 날 있었던 일을 짧게 기록해두면, 시간이 지나 패턴을 발견하는 흥미로운 경험이 됩니다.' },
              { t: '정방향·역방향의 의미', d: '전통 타로에서 카드가 뒤집혀 나오면(역방향) 해당 에너지가 막혀 있거나 내면을 향한다는 뜻입니다. StarFate는 정방향 기준으로 제공합니다.' },
            ].map((item) => (
              <div key={item.t} className="flex gap-2">
                <span className="text-indigo-400 flex-shrink-0">▸</span>
                <span><strong className="text-white/70">{item.t}:</strong> {item.d}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
