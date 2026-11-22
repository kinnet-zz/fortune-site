import type { Metadata } from 'next';
import BlogArticleView from '@/components/BlogArticleView';
import { getArticle, getArticleContent, relatedArticles } from '@/lib/blog-content';

export const metadata: Metadata = {
  title: '별자리별 적성과 직업 가이드 — 내 운명의 커리어는? | StarFate',
  description: '12개 별자리의 타고난 재능과 강점으로 알아보는 최적의 직업과 커리어 방향. 별자리별 직업 운과 성공하는 업무 스타일을 분석합니다.',
  alternates: { canonical: '/blog/zodiac-career-guide' },
  openGraph: {
    title: '별자리별 적성과 직업 가이드 — 내 운명의 커리어는?',
    description: '12개 별자리의 타고난 재능과 강점으로 알아보는 최적의 직업과 커리어 방향.',
    type: 'article',
  },
};

export default function Page() {
  const article = getArticle('zodiac-career-guide');
  const content = getArticleContent('zodiac-career-guide');
  if (!article || !content) return null;
  return <BlogArticleView article={article} content={content} related={relatedArticles('zodiac-career-guide')} />;
}
