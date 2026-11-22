import type { Metadata } from 'next';
import BlogArticleView from '@/components/BlogArticleView';
import { getArticle, getArticleContent, relatedArticles } from '@/lib/blog-content';

export const metadata: Metadata = {
  title: '점성술이란 무엇인가? 서양 별자리의 역사와 기초 완벽 가이드 | StarFate',
  description: '수천 년의 역사를 가진 점성술의 기원부터 현대 별자리 해석법까지. 황도대 12별자리, 지배 행성, 원소의 관계를 체계적으로 설명합니다.',
  alternates: { canonical: '/blog/what-is-astrology' },
  openGraph: {
    title: '점성술이란 무엇인가? 서양 별자리의 역사와 기초 가이드',
    description: '수천 년의 역사를 가진 점성술의 기원부터 현대 별자리 해석법까지',
    type: 'article',
  },
};

export default function Page() {
  const article = getArticle('what-is-astrology');
  const content = getArticleContent('what-is-astrology');
  if (!article || !content) return null;
  return <BlogArticleView article={article} content={content} related={relatedArticles('what-is-astrology')} />;
}
