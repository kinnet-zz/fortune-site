import type { Metadata } from 'next';
import AboutContent from '@/components/AboutContent';

export const metadata: Metadata = {
  title: '사이트 소개 | 오늘의 운세',
  description: '오늘의 운세 서비스 소개. AI 기술로 별자리와 띠를 분석하여 매일 새로운 운세를 제공하는 무료 운세 서비스입니다.',
};

export default function AboutPage() {
  return <AboutContent />;
}
