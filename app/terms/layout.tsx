import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: '이용약관 | StarFate',
  description: 'StarFate 운세 및 자기성찰 콘텐츠의 이용 조건과 오락 목적 고지입니다.',
  alternates: { canonical: '/terms' },
};

export default function TermsLayout({ children }: { children: ReactNode }) {
  return children;
}
