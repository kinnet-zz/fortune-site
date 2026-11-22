import type { Metadata } from 'next';
import BlogArticleView from '@/components/BlogArticleView';
import { getArticle, getArticleContent, relatedArticles } from '@/lib/blog-content';

export const metadata: Metadata = {
  title: '2026년 별자리별 연간 운세 총정리 | StarFate',
  description: '2026년 말의 해를 맞이하는 12별자리의 연간 운세를 총정리합니다. 사랑, 직업, 금전, 건강 각 분야별 2026년 흐름을 예측합니다.',
  alternates: { canonical: '/blog/2026-yearly-horoscope' },
  openGraph: {
    title: '2026년 별자리별 연간 운세 총정리',
    description: '12별자리의 2026년 사랑·직업·금전·건강 연간 운세를 총정리합니다',
    type: 'article',
  },
};

export default function Page() {
  const article = getArticle('2026-yearly-horoscope');
  const content = getArticleContent('2026-yearly-horoscope');
  if (!article || !content) return null;
  return <BlogArticleView article={article} content={content} related={relatedArticles('2026-yearly-horoscope')} />;
}
