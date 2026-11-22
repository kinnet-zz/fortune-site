import type { Metadata } from 'next';
import BlogArticleView from '@/components/BlogArticleView';
import { getArticle, getArticleContent, relatedArticles } from '@/lib/blog-content';

export const metadata: Metadata = {
  title: '달 별자리(Moon Sign) 완벽 가이드 — 숨겨진 나의 내면 | StarFate',
  description: '태양 별자리와 다른 달 별자리의 비밀을 알아보세요. 감정, 무의식, 내면의 자아를 지배하는 달 별자리 12가지를 완벽하게 설명합니다.',
  alternates: { canonical: '/blog/moon-sign-guide' },
  openGraph: {
    title: '달 별자리(Moon Sign) 완벽 가이드 — 숨겨진 나의 내면',
    description: '감정, 무의식, 내면의 자아를 지배하는 달 별자리 12가지를 완벽하게 설명합니다.',
    type: 'article',
  },
};

export default function Page() {
  const article = getArticle('moon-sign-guide');
  const content = getArticleContent('moon-sign-guide');
  if (!article || !content) return null;
  return <BlogArticleView article={article} content={content} related={relatedArticles('moon-sign-guide')} />;
}
