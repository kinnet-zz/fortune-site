import type { Metadata } from 'next';
import BlogArticleView from '@/components/BlogArticleView';
import { getArticle, getArticleContent, relatedArticles } from '@/lib/blog-content';

export const metadata: Metadata = {
  title: '별자리와 혈액형의 관계 — 성격 유형 완벽 분석 | StarFate',
  description: '한국과 일본에서 오랫동안 이야기해온 별자리와 혈액형의 관계를 심층 분석합니다. 4가지 혈액형과 12별자리 조합이 만드는 48가지 성격 유형을 알아보세요.',
  alternates: { canonical: '/blog/zodiac-blood-type' },
  openGraph: {
    title: '별자리와 혈액형의 관계 — 성격 유형 완벽 분석',
    description: '4가지 혈액형과 12별자리 조합이 만드는 48가지 성격 유형을 알아보세요.',
    type: 'article',
  },
};

export default function Page() {
  const article = getArticle('zodiac-blood-type');
  const content = getArticleContent('zodiac-blood-type');
  if (!article || !content) return null;
  return <BlogArticleView article={article} content={content} related={relatedArticles('zodiac-blood-type')} />;
}
