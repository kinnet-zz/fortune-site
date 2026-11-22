import type { Metadata } from 'next';
import BlogArticleView from '@/components/BlogArticleView';
import { getArticle, getArticleContent, relatedArticles } from '@/lib/blog-content';

export const metadata: Metadata = {
  title: '2026년 말의 해 — 12띠별 연간 운세 완벽 가이드 | StarFate',
  description: '2026년 병오년(丙午年) 말의 해를 맞이하는 12띠별 운세를 완벽하게 분석합니다. 각 띠별 2026년 사랑운, 직업운, 금전운 총정리.',
  alternates: { canonical: '/blog/chinese-zodiac-2026' },
  openGraph: {
    title: '2026년 말의 해 — 12띠별 연간 운세 완벽 가이드',
    description: '2026년 병오년 12띠별 사랑운·직업운·금전운을 완벽 분석합니다',
    type: 'article',
  },
};

export default function Page() {
  const article = getArticle('chinese-zodiac-2026');
  const content = getArticleContent('chinese-zodiac-2026');
  if (!article || !content) return null;
  return <BlogArticleView article={article} content={content} related={relatedArticles('chinese-zodiac-2026')} />;
}
