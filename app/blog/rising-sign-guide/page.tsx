import type { Metadata } from 'next';
import BlogArticleView from '@/components/BlogArticleView';
import { getArticle, getArticleContent, relatedArticles } from '@/lib/blog-content';

export const metadata: Metadata = {
  title: '상승 별자리(어센던트) 완벽 가이드 — 타인이 보는 나 | StarFate',
  description: '출생 시간으로 결정되는 상승 별자리(라이징 사인)의 의미와 역할. 첫인상, 외모, 사회적 이미지를 좌우하는 숨겨진 별자리를 알아보세요.',
  alternates: { canonical: '/blog/rising-sign-guide' },
  openGraph: {
    title: '상승 별자리(어센던트) 완벽 가이드 — 타인이 보는 나',
    description: '첫인상, 외모, 사회적 이미지를 좌우하는 숨겨진 별자리를 알아보세요.',
    type: 'article',
  },
};

export default function Page() {
  const article = getArticle('rising-sign-guide');
  const content = getArticleContent('rising-sign-guide');
  if (!article || !content) return null;
  return <BlogArticleView article={article} content={content} related={relatedArticles('rising-sign-guide')} />;
}
