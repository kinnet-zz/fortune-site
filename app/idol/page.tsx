export const runtime = 'edge';

import type { Metadata } from 'next';
import IdolClient from '@/components/IdolClient';

const ogData = {
  ko: {
    title: '나는 어느 소속사 스타일? | SM · JYP · YG · HYBE 관상 분석',
    description: '내 얼굴을 AI가 분석해 SM, JYP, YG, HYBE 중 딱 맞는 소속사를 찾아드립니다. 사진 한 장으로 바로 확인!',
  },
  en: {
    title: 'Which K-Pop Agency Fits Your Face? | SM · JYP · YG · HYBE',
    description: 'AI analyzes your face and finds your perfect K-pop agency match — SM, JYP, YG, or HYBE. Upload a photo and find out!',
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
