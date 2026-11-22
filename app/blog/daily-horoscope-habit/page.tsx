import type { Metadata } from 'next';
import BlogArticleView from '@/components/BlogArticleView';
import { getArticle, getArticleContent, relatedArticles } from '@/lib/blog-content';

export const metadata: Metadata = {
  title: '운세를 4년간 매일 확인했더니 생긴 일 — 습관이 된 운세의 심리학 | StarFate',
  description: '반신반의하며 시작한 일일 운세 확인이 어느새 4년이 됐다. 운세가 맞아서 계속한 게 아니라, 오히려 틀릴 때 더 많은 것을 배웠다.',
  alternates: { canonical: 'https://starfate.day/blog/daily-horoscope-habit' },
  openGraph: {
    title: '운세를 4년간 매일 확인했더니 생긴 일',
    description: '4년간 매일 운세를 본 사람의 솔직한 기록',
    type: 'article',
  },
};

export default function Page() {
  const article = getArticle('daily-horoscope-habit');
  const content = getArticleContent('daily-horoscope-habit');
  if (!article || !content) return null;
  return <BlogArticleView article={article} content={content} related={relatedArticles('daily-horoscope-habit')} />;
}
