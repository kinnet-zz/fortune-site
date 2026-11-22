import type { Metadata } from 'next';
import BlogArticleView from '@/components/BlogArticleView';
import { getArticle, getArticleContent, relatedArticles } from '@/lib/blog-content';

export const metadata: Metadata = {
  title: '토성 회귀는 서른의 위기를 설명할까 — 점성술과 발달심리학 사이 | StarFate',
  description: '토성의 29.46년 공전 주기, 첫 토성 회귀가 29~30세에 오는 이유, 레빈슨의 서른 전환 연구, 그리고 별자리 예측력에 대한 실증 연구 결과를 함께 정리합니다.',
  alternates: { canonical: 'https://starfate.day/blog/saturn-return-psychology' },
  openGraph: {
    title: '토성 회귀는 서른의 위기를 설명할까',
    description: '29년 5개월마다 돌아오는 토성. 그 시기에 사람이 흔들리는 이유를 천문학과 발달심리학 양쪽에서 살펴봅니다.',
    type: 'article',
  },
};

export default function Page() {
  const article = getArticle('saturn-return-psychology');
  const content = getArticleContent('saturn-return-psychology');
  if (!article || !content) return null;
  return <BlogArticleView article={article} content={content} related={relatedArticles('saturn-return-psychology')} />;
}
