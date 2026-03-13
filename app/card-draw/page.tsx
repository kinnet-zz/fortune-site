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

export default function CardDrawPage() {
  return <CardDrawClient />;
}
