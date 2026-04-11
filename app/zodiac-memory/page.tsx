export const runtime = 'edge';

import type { Metadata } from 'next';
import ZodiacMemoryClient from '@/components/ZodiacMemoryClient';

export const metadata: Metadata = {
  title: '별자리 기억 게임 🌟 | StarFate',
  description: '별자리 카드 쌍을 기억하고 모두 맞춰라! 레벨이 오를수록 카드가 늘고 시간이 짧아집니다.',
  openGraph: {
    title: '별자리 기억 게임 🌟 | StarFate',
    description: '별자리 카드 쌍을 기억하고 모두 맞춰라!',
    type: 'website',
    url: 'https://www.starfate.day/zodiac-memory',
    siteName: 'StarFate',
    images: [{ url: 'https://www.starfate.day/og-image.png', width: 1200, height: 630 }],
  },
};

export default function ZodiacMemoryPage() {
  return <ZodiacMemoryClient />;
}
