export const runtime = 'edge';

import type { Metadata } from 'next';
import IdolClient from '@/components/IdolClient';

const ogData = {
  ko: {
    title: '내 K-아이돌 소속사 관상 분석 | SM · JYP · YG · HYBE',
    description: '내 얼굴은 어느 K-팝 소속사 스타일? SM의 우아함, JYP의 발랄함, YG의 카리스마, HYBE의 청량함 — AI가 분석해드립니다.',
  },
  en: {
    title: 'My K-Idol Agency Face Type | SM · JYP · YG · HYBE',
    description: 'Which K-pop agency does your face match? SM elegance, JYP energy, YG charisma, or HYBE freshness — analyzed by AI.',
  },
};

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}): Promise<Metadata> {
  const { lang = 'ko' } = await searchParams;
  const isEn = lang === 'en';
  const { title, description } = isEn ? ogData.en : ogData.ko;
  const url = isEn
    ? 'https://www.starfate.day/idol?lang=en'
    : 'https://www.starfate.day/idol';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url,
      siteName: 'StarFate',
      images: [
        {
          url: 'https://www.starfate.day/og-image.png',
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
      images: ['https://www.starfate.day/og-image.png'],
    },
    alternates: {
      canonical: url,
      languages: {
        'ko': 'https://www.starfate.day/idol',
        'en': 'https://www.starfate.day/idol?lang=en',
      },
    },
  };
}

export default function IdolPage() {
  return <IdolClient />;
}
