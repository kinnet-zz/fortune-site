import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: '문의하기 | StarFate',
  description: 'StarFate 서비스, 콘텐츠 및 개인정보 처리에 관한 문의 안내입니다.',
  alternates: { canonical: '/contact' },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
