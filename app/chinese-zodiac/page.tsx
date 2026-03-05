import type { Metadata } from 'next';
import ChineseZodiacContent from '@/components/ChineseZodiacContent';

export const metadata: Metadata = {
  title: '12띠 운세 정보 | 오늘의 운세 - 동양 십이지 완벽 가이드',
  description: '동양 십이지(쥐, 소, 호랑이, 토끼, 용, 뱀, 말, 양, 원숭이, 닭, 개, 돼지)의 성격, 특성, 궁합을 완벽하게 알아보세요. 내 띠가 무엇인지 확인하고 운세를 확인해보세요.',
  alternates: { canonical: '/chinese-zodiac' },
};

export default function ChineseZodiacPage() {
  return <ChineseZodiacContent />;
}
