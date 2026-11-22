import type { Metadata } from 'next';
import BlogArticleView from '@/components/BlogArticleView';
import { getArticle, getArticleContent, relatedArticles } from '@/lib/blog-content';

export const metadata: Metadata = {
  title: '지배 행성과 별자리의 관계 — 화성, 금성, 목성이 성격에 미치는 영향 | StarFate',
  description: '각 별자리를 지배하는 행성의 신화적 의미부터 실제 성격에 미치는 영향까지. 태양계 10개 천체와 12개 별자리의 관계를 체계적으로 분석합니다.',
  alternates: { canonical: '/blog/planets-and-zodiac-signs' },
  openGraph: {
    title: '지배 행성과 별자리의 관계 — 행성이 성격에 미치는 영향',
    description: '화성, 금성, 목성 등 지배 행성과 별자리의 깊은 연관성 분석',
    type: 'article',
  },
};

export default function Page() {
  const article = getArticle('planets-and-zodiac-signs');
  const content = getArticleContent('planets-and-zodiac-signs');
  if (!article || !content) return null;
  return <BlogArticleView article={article} content={content} related={relatedArticles('planets-and-zodiac-signs')} />;
}
