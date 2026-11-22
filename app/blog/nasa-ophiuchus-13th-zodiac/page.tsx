import type { Metadata } from 'next';
import BlogArticleView from '@/components/BlogArticleView';
import { getArticle, getArticleContent, relatedArticles } from '@/lib/blog-content';

export const metadata: Metadata = {
  title: '뱀주인자리는 왜 황도 12궁에 포함되지 않을까? 천문학과 점성술의 차이 | StarFate',
  description: '뱀주인자리 논란을 통해 열대 황도대와 실제 별자리, 세차운동, 천문학과 점성술의 차이를 구분해 설명합니다.',
  alternates: { canonical: 'https://starfate.day/blog/nasa-ophiuchus-13th-zodiac' },
  openGraph: {
    title: '뱀주인자리는 왜 황도 12궁에 포함되지 않을까?',
    description: '실제 별자리와 점성술의 황도 12궁이 서로 다른 체계인 이유를 설명합니다.',
    type: 'article',
  },
};

export default function Page() {
  const article = getArticle('nasa-ophiuchus-13th-zodiac');
  const content = getArticleContent('nasa-ophiuchus-13th-zodiac');
  if (!article || !content) return null;
  return <BlogArticleView article={article} content={content} related={relatedArticles('nasa-ophiuchus-13th-zodiac')} />;
}
