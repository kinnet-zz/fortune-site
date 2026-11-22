import type { Metadata } from 'next';
import BlogIndex from '@/components/BlogIndex';

export const metadata: Metadata = {
  title: '별자리·운세 가이드 블로그 | StarFate',
  description: '점성술, 별자리, 운세에 관한 가이드. 서양 별자리와 동양 12지의 역사, 궁합, 해석법을 문화적 배경과 함께 설명합니다.',
  alternates: { canonical: 'https://starfate.day/blog' },
  openGraph: {
    title: '별자리·운세 가이드 블로그 | StarFate',
    description: '점성술, 별자리, 운세에 관한 깊이 있는 가이드 모음',
    type: 'website',
    url: 'https://starfate.day/blog',
  },
};

export default function BlogIndexPage() {
  return <BlogIndex />;
}
