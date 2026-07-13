export const runtime = 'edge';

import type { Metadata } from 'next';
import type { Lang } from '@/lib/i18n';
import HomeClient from '@/components/HomeClient';

const VALID_LANGS: Lang[] = ['ko', 'en', 'ja', 'zh'];

function getLang(param?: string): Lang {
  return VALID_LANGS.includes(param as Lang) ? (param as Lang) : 'ko';
}

const ogData: Record<Lang, { title: string; description: string }> = {
  ko: {
    title: 'StarFate | 별자리·12지 운세 해석 가이드',
    description: '서양 별자리와 동양 12지를 함께 읽는 운세 해석 가이드. 오늘의 운세 도구, 별자리 백과, 12지 설명, 자기성찰용 해석 예시를 제공합니다.',
  },
  en: {
    title: 'StarFate | Zodiac and Chinese Zodiac Guide',
    description: 'A guide to reading Western zodiac and Chinese zodiac traditions, with daily fortune tools, interpretation examples, and cultural context.',
  },
  ja: {
    title: 'StarFate | 星座と十二支の運勢ガイド',
    description: '西洋占星術と十二支をあわせて読む運勢ガイド。今日の運勢ツール、解釈例、文化的な背景を紹介します。',
  },
  zh: {
    title: 'StarFate | 星座与生肖运势解读指南',
    description: '结合西方星座与东方生肖的运势解读指南，提供今日运势工具、解读示例与文化背景说明。',
  },
};

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}): Promise<Metadata> {
  const { lang: langParam } = await searchParams;
  const lang = getLang(langParam);
  const { title, description } = ogData[lang];
  const url = lang === 'ko' ? 'https://starfate.day' : `https://starfate.day/?lang=${lang}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      type: 'website',
      url,
      siteName: 'StarFate',
      images: [
        {
          url: 'https://starfate.day/og-image.png',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://starfate.day/og-image.png'],
    },
  };
}

export default function Page() {
  return <HomeClient />;
}
