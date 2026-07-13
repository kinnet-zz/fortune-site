import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: '오늘의 별자리 운세 | StarFate',
  description: '12별자리의 오늘 운세와 종합운, 연애운, 금전운, 직업운을 오락 및 자기성찰 목적으로 제공합니다.',
  alternates: { canonical: '/blog/daily' },
};

export default function DailyLayout({ children }: { children: ReactNode }) {
  return children;
}
