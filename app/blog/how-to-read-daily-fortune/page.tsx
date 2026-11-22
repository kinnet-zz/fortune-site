import type { Metadata } from 'next';
import BlogArticleView from '@/components/BlogArticleView';
import { getArticle, getArticleContent, relatedArticles } from '@/lib/blog-content';

export const metadata: Metadata = {
  title: '오늘의 운세를 제대로 읽는 방법 — 운세 해석의 현명한 활용법 | StarFate',
  description: '매일 접하는 운세를 어떻게 해석하고 실생활에 적용할 수 있을까요? 운세의 원리와 건강하고 효과적으로 활용하는 방법을 알려드립니다.',
  alternates: { canonical: '/blog/how-to-read-daily-fortune' },
  openGraph: {
    title: '오늘의 운세를 제대로 읽는 방법 — 운세 해석의 현명한 활용법',
    description: '매일의 운세를 실생활에 효과적으로 활용하는 방법',
    type: 'article',
  },
};

export default function Page() {
  const article = getArticle('how-to-read-daily-fortune');
  const content = getArticleContent('how-to-read-daily-fortune');
  if (!article || !content) return null;
  return <BlogArticleView article={article} content={content} related={relatedArticles('how-to-read-daily-fortune')} />;
}
