import type { Metadata } from 'next';
import ZodiacContent from '@/components/ZodiacContent';

export const metadata: Metadata = {
  title: '별자리 운세 정보 | 오늘의 운세 - 12궁도 황도대 완벽 가이드',
  description: '12가지 서양 별자리의 특성, 날짜, 원소, 지배 행성을 모두 알아보세요. 양자리부터 물고기자리까지 각 별자리의 성격과 연애운, 금전운 경향을 상세하게 안내합니다.',
  alternates: { canonical: '/zodiac' },
};

export default function ZodiacPage() {
  return <ZodiacContent />;
}
