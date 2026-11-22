import type { Metadata } from 'next';
import BlogArticleView from '@/components/BlogArticleView';
import { getArticle, getArticleContent, relatedArticles } from '@/lib/blog-content';

export const metadata: Metadata = {
  title: '12 별자리 궁합 완벽 분석 — 나와 가장 잘 맞는 별자리는? | StarFate',
  description: '별자리 궁합의 원리부터 원소별 궁합 패턴, 연애 궁합, 친구 궁합까지. 12개 별자리 간의 궁합을 원소와 행성 에너지를 기반으로 분석합니다.',
  alternates: { canonical: '/blog/zodiac-compatibility-guide' },
  openGraph: {
    title: '12 별자리 궁합 완벽 분석 — 나와 가장 잘 맞는 별자리는?',
    description: '별자리 궁합의 원리부터 원소별 궁합 패턴까지 완벽 분석',
    type: 'article',
  },
};

export default function Page() {
  const article = getArticle('zodiac-compatibility-guide');
  const content = getArticleContent('zodiac-compatibility-guide');
  if (!article || !content) return null;
  return <BlogArticleView article={article} content={content} related={relatedArticles('zodiac-compatibility-guide')} />;
}
