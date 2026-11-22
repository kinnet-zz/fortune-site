export const runtime = 'edge';

import type { Metadata } from 'next';
import Link from 'next/link';
import NumberGameClient from '@/components/NumberGameClient';
import { NumerologyInfo } from '@/components/InfoSections';

export const metadata: Metadata = {
  title: '숫자 순서 게임 🔢 | 수비학 두뇌 트레이닝 — StarFate',
  description: '1부터 순서대로 빠르게 눌러라! 수비학(Numerology)에서 숫자는 우주의 언어입니다. 두뇌를 단련하며 행운의 숫자 에너지를 체험해보세요. TOP 100 랭킹 도전.',
  alternates: { canonical: '/number-game' },
  openGraph: {
    title: '숫자 순서 게임 🔢 | 수비학 두뇌 트레이닝',
    description: '수비학에서 숫자는 우주의 언어. 두뇌를 단련하며 행운의 숫자 에너지를 체험하세요.',
    type: 'website',
    url: 'https://starfate.day/number-game',
    siteName: 'StarFate',
    images: [{ url: 'https://starfate.day/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '숫자 순서 게임 🔢 | 수비학 두뇌 트레이닝',
    description: '수비학에서 숫자는 우주의 언어. 두뇌를 단련하며 행운의 숫자 에너지를 체험하세요.',
  },
};

const bgStyle = {
  background: '#101620',
  minHeight: '100vh',
};

export default function NumberGamePage() {
  return (
    <div style={bgStyle}>
      <NumberGameClient />
      <NumerologyInfo />
    </div>
  );
}
