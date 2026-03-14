export const runtime = 'edge';

import type { Metadata } from 'next';
import NumberGameClient from '@/components/NumberGameClient';

export const metadata: Metadata = {
  title: '빠진 숫자 찾기 🔢 | 두뇌 트레이닝 게임',
  description: '1~N까지의 숫자 중 사라진 숫자를 찾아라! 레벨이 올라갈수록 숫자가 많아지고 시간이 줄어듭니다. 최고 기록으로 TOP 100에 도전하세요.',
  openGraph: {
    title: '빠진 숫자 찾기 🔢 | 두뇌 트레이닝',
    description: '숫자 그리드에서 사라진 숫자를 찾아라! TOP 100 랭킹 도전.',
    type: 'website',
    url: 'https://www.starfate.day/number-game',
    siteName: 'StarFate',
    images: [{ url: 'https://www.starfate.day/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '빠진 숫자 찾기 🔢 | 두뇌 트레이닝',
    description: '숫자 그리드에서 사라진 숫자를 찾아라!',
  },
};

export default function NumberGamePage() {
  return <NumberGameClient />;
}
