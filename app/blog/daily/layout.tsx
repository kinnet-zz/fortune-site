import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: '오늘의 별자리 운세 12가지 | StarFate',
  description: '양자리부터 물고기자리까지 12별자리의 오늘 종합운, 연애운, 금전운, 직업운과 실천 조언을 한눈에 확인하세요.',
  alternates: { canonical: '/blog/daily' },
  openGraph: {
    title: '오늘의 별자리 운세 12가지 | StarFate',
    description: '12별자리의 오늘 운세와 자기성찰 조언을 한눈에 확인하세요.',
    url: '/blog/daily',
    type: 'website',
    locale: 'ko_KR',
    siteName: 'StarFate',
  },
  twitter: {
    card: 'summary_large_image',
    title: '오늘의 별자리 운세 12가지 | StarFate',
    description: '12별자리의 오늘 운세와 자기성찰 조언을 한눈에 확인하세요.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

export default function DailyLayout({ children }: { children: ReactNode }) {
  return children;
}
