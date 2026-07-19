'use client';

import Link from 'next/link';
import FortuneForm from '@/components/FortuneForm';
import { trackEvent } from '@/lib/analytics';
import type { Lang } from '@/lib/i18n';

interface ConversionHeroProps {
  onSubmit: (birthDate: string, gender: string) => void;
  isLoading: boolean;
  lang: Lang;
}

const COPY: Record<Lang, {
  eyebrow: string;
  title: string;
  description: string;
  privacy: string;
  moreTitle: string;
  relatedTitle: string;
  relatedDescription: string;
}> = {
  ko: {
    eyebrow: '10초 무료 운세',
    title: '설명보다 먼저, 오늘의 운세를 바로 확인하세요',
    description: '생년월일로 별자리와 띠를 계산해 종합운·연애운·금전운·직업운을 보여드립니다.',
    privacy: '입력한 생년월일은 결과 계산에만 사용하며 프로필로 저장하지 않습니다.',
    moreTitle: '운세를 본 다음 많이 찾는 콘텐츠',
    relatedTitle: '결과와 함께 보면 더 재미있는 콘텐츠',
    relatedDescription: '한 번의 운세 확인으로 끝내지 말고, 궁합과 타로까지 이어서 확인해보세요.',
  },
  en: {
    eyebrow: 'Free 10-second reading',
    title: 'Check today’s fortune before reading the guide',
    description: 'Use your birth date to see your overall, love, money, and career reading.',
    privacy: 'Your birth date is used only for this calculation and is not saved as a profile.',
    moreTitle: 'Popular next reads',
    relatedTitle: 'Continue your reading',
    relatedDescription: 'Explore compatibility, tarot, and today’s zodiac readings next.',
  },
  zh: {
    eyebrow: '10秒免费运势',
    title: '先查看今天的运势，再阅读详细指南',
    description: '输入生日即可查看综合运、爱情运、财运和事业运。',
    privacy: '生日仅用于本次计算，不会保存为个人资料。',
    moreTitle: '大家接着查看的内容',
    relatedTitle: '继续探索你的运势',
    relatedDescription: '接着查看星座配对、塔罗牌和今日星座运势。',
  },
  ja: {
    eyebrow: '10秒無料占い',
    title: 'ガイドを読む前に、今日の運勢をすぐ確認',
    description: '生年月日から総合運・恋愛運・金運・仕事運を確認できます。',
    privacy: '生年月日は今回の計算にのみ使用し、プロフィールとして保存しません。',
    moreTitle: '次によく見られるコンテンツ',
    relatedTitle: '運勢をさらに楽しむ',
    relatedDescription: '星座相性、タロット、今日の星座運勢も続けて確認できます。',
  },
};

const RELATED_ITEMS = [
  {
    href: '/card-draw',
    emoji: '🃏',
    ko: ['그 사람에게 연락 올까?', '오늘의 타로 한 장 뽑기'],
    en: ['Will they contact me?', 'Draw today’s tarot card'],
    zh: ['对方会联系我吗？', '抽取今日塔罗牌'],
    ja: ['あの人から連絡は来る？', '今日のタロットを引く'],
  },
  {
    href: '/guide/zodiac-compatibility',
    emoji: '💞',
    ko: ['우리 둘은 얼마나 잘 맞을까?', '12별자리 궁합 분석'],
    en: ['How compatible are we?', 'Zodiac compatibility guide'],
    zh: ['我们有多般配？', '十二星座配对指南'],
    ja: ['二人の相性は？', '12星座相性ガイド'],
  },
  {
    href: '/blog/2026-yearly-horoscope',
    emoji: '🔭',
    ko: ['2026년 하반기, 내 별자리 운은?', '연애·재물·직업운 미리 보기'],
    en: ['What does late 2026 hold for your sign?', 'Preview love, money, and career trends'],
    zh: ['2026年下半年，你的星座运势如何？', '提前查看爱情、财运与事业趋势'],
    ja: ['2026年後半、あなたの星座運は？', '恋愛・金運・仕事運を先取り'],
  },
] as const;

function RelatedLinks({ lang, location }: { lang: Lang; location: 'home' | 'result' }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {RELATED_ITEMS.map((item) => {
        const [title, description] = item[lang];
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => trackEvent('related_content_click', {
              content_path: item.href,
              click_location: location,
              language: lang,
            })}
            className="group rounded-2xl p-4 text-left transition-all duration-200 hover:-translate-y-1"
            style={{
              background: 'rgba(139,92,246,0.07)',
              border: '1px solid rgba(192,132,252,0.16)',
            }}
          >
            <span className="text-2xl" aria-hidden="true">{item.emoji}</span>
            <h3 className="text-white/90 text-base font-bold mt-3 mb-1 group-hover:text-purple-200">{title}</h3>
            <p className="text-white/62 text-base leading-6">{description}</p>
          </Link>
        );
      })}
    </div>
  );
}

export function HomeConversionHero({ onSubmit, isLoading, lang }: ConversionHeroProps) {
  const copy = COPY[lang];

  return (
    <section className="w-full max-w-4xl mx-auto mb-10" aria-labelledby="fortune-first-heading">
      <div className="text-center max-w-2xl mx-auto mb-7">
        <p className="text-purple-300/75 text-xs font-bold tracking-[0.22em] uppercase mb-3">{copy.eyebrow}</p>
        <h1 id="fortune-first-heading" className="font-serif-display text-3xl sm:text-4xl font-bold text-white/95 leading-tight mb-3">
          {copy.title}
        </h1>
        <p className="text-white/68 text-base leading-7">{copy.description}</p>
      </div>

      <FortuneForm onSubmit={onSubmit} isLoading={isLoading} lang={lang} />

      <p className="text-center text-white/58 text-sm sm:text-base leading-6 mt-4">🔒 {copy.privacy}</p>

      <div className="mt-8">
        <h2 className="text-white/78 text-base font-semibold text-center mb-4">{copy.moreTitle}</h2>
        <RelatedLinks lang={lang} location="home" />
      </div>
    </section>
  );
}

export function ResultNextSteps({ lang }: { lang: Lang }) {
  const copy = COPY[lang];

  return (
    <section
      className="w-full max-w-2xl mx-auto mt-8 rounded-3xl p-5 sm:p-6"
      style={{ background: 'rgba(5,5,32,0.58)', border: '1px solid rgba(255,255,255,0.08)' }}
      aria-labelledby="result-next-heading"
    >
      <div className="text-center mb-5">
        <h2 id="result-next-heading" className="text-white/88 text-lg font-bold mb-2">{copy.relatedTitle}</h2>
        <p className="text-white/62 text-base leading-6">{copy.relatedDescription}</p>
      </div>
      <RelatedLinks lang={lang} location="result" />
    </section>
  );
}
