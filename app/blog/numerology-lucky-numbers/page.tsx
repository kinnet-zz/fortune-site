import type { Metadata } from 'next';
import BlogArticleView from '@/components/BlogArticleView';
import { getArticle, getArticleContent, relatedArticles } from '@/lib/blog-content';

export const metadata: Metadata = {
  title: '수비학과 행운의 숫자 — 내 운명 숫자로 알아보는 운세 | StarFate',
  description: '수비학(Numerology)의 기초부터 생년월일로 계산하는 운명 숫자까지. 별자리 행운의 숫자와 수비학이 어떻게 연결되는지 완벽하게 설명합니다.',
  alternates: { canonical: '/blog/numerology-lucky-numbers' },
  openGraph: {
    title: '수비학과 행운의 숫자 — 내 운명 숫자로 알아보는 운세',
    description: '생년월일로 계산하는 운명 숫자부터 별자리 행운의 숫자 연결까지 완벽 가이드',
    type: 'article',
  },
};

export default function Page() {
  const article = getArticle('numerology-lucky-numbers');
  const content = getArticleContent('numerology-lucky-numbers');
  if (!article || !content) return null;
  return <BlogArticleView article={article} content={content} related={relatedArticles('numerology-lucky-numbers')} />;
}
