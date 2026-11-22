import type { Metadata } from 'next';
import BlogArticleView from '@/components/BlogArticleView';
import { getArticle, getArticleContent, relatedArticles } from '@/lib/blog-content';

export const metadata: Metadata = {
  title: '12띠 궁합 완벽 가이드 — 나와 잘 맞는 띠는? | StarFate',
  description: '동양 전통의 12띠 궁합을 완벽하게 분석합니다. 삼합(三合), 육합(六合), 상충(相沖) 관계를 기반으로 한 정통 띠 궁합 가이드.',
  alternates: { canonical: '/blog/chinese-zodiac-compatibility' },
  openGraph: {
    title: '12띠 궁합 완벽 가이드 — 나와 잘 맞는 띠는?',
    description: '삼합, 육합, 상충 관계를 기반으로 한 정통 띠 궁합 가이드.',
    type: 'article',
  },
};

export default function Page() {
  const article = getArticle('chinese-zodiac-compatibility');
  const content = getArticleContent('chinese-zodiac-compatibility');
  if (!article || !content) return null;
  return <BlogArticleView article={article} content={content} related={relatedArticles('chinese-zodiac-compatibility')} />;
}
