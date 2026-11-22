import type { Metadata } from 'next';
import BlogArticleView from '@/components/BlogArticleView';
import { getArticle, getArticleContent, relatedArticles } from '@/lib/blog-content';

export const metadata: Metadata = {
  title: '동양 12지와 서양 별자리의 차이점 — 두 전통의 지혜 비교 | StarFate',
  description: '음양오행에 기반한 동양 12지와 황도대 기반 서양 별자리. 두 체계의 역사, 원리, 성격 해석의 공통점과 차이점을 깊이 있게 비교합니다.',
  alternates: { canonical: '/blog/chinese-vs-western-zodiac' },
  openGraph: {
    title: '동양 12지와 서양 별자리의 차이점',
    description: '두 고대 전통의 지혜를 비교 분석',
    type: 'article',
  },
};

export default function Page() {
  const article = getArticle('chinese-vs-western-zodiac');
  const content = getArticleContent('chinese-vs-western-zodiac');
  if (!article || !content) return null;
  return <BlogArticleView article={article} content={content} related={relatedArticles('chinese-vs-western-zodiac')} />;
}
