import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: '개인정보처리방침 | StarFate',
  description: 'StarFate의 생년월일 처리, 접속 로그, 쿠키, Google Analytics 및 AdSense 데이터 처리 방침입니다.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyLayout({ children }: { children: ReactNode }) {
  return children;
}
