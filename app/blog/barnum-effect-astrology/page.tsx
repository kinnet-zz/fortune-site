import type { Metadata } from 'next';
import BlogArticleView from '@/components/BlogArticleView';
import { getArticle, getArticleContent, relatedArticles } from '@/lib/blog-content';

export const metadata: Metadata = {
  title: 'MBTI보다 정교한 \'운명의 알고리즘\': 왜 우리는 여전히 별자리에 열광하는가? | StarFate',
  description: '1948년 포러 효과(바넘 효과)의 심리학적 원리로 별자리 신뢰의 메커니즘을 분석합니다. 왜 12개의 문장이 수십억 명에게 "나만의 이야기"처럼 느껴지는가.',
  alternates: { canonical: '/blog/barnum-effect-astrology' },
  openGraph: {
    title: 'MBTI보다 정교한 \'운명의 알고리즘\': 왜 우리는 별자리에 열광하는가?',
    description: '포러 효과와 자기 확증적 예언으로 풀어보는 별자리 심리학 심층 분석',
    type: 'article',
  },
};

export default function Page() {
  const article = getArticle('barnum-effect-astrology');
  const content = getArticleContent('barnum-effect-astrology');
  if (!article || !content) return null;
  return <BlogArticleView article={article} content={content} related={relatedArticles('barnum-effect-astrology')} />;
}
