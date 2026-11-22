import type { Metadata } from 'next';
import BlogArticleView from '@/components/BlogArticleView';
import { getArticle, getArticleContent, relatedArticles } from '@/lib/blog-content';

export const metadata: Metadata = {
  title: '중세 기도서 달력에는 왜 별자리가 함께 그려졌나 — 성무일도서와 황도대 미술 | StarFate',
  description: '베리 공작의 성무일도서 달력 그림, 12달의 노동, 지오토의 별, 뒤러의 천구도까지. 중세와 르네상스 미술에서 별자리가 시간을 표시하는 장치로 쓰인 이유를 살펴봅니다.',
  alternates: { canonical: 'https://starfate.day/blog/zodiac-in-medieval-art' },
  openGraph: {
    title: '중세 기도서 달력에는 왜 별자리가 함께 그려졌나',
    description: '성무일도서의 달력 그림과 12달의 노동, 지오토의 혜성, 뒤러의 천구도 — 그림 속 황도대를 읽는 법.',
    type: 'article',
  },
};

export default function Page() {
  const article = getArticle('zodiac-in-medieval-art');
  const content = getArticleContent('zodiac-in-medieval-art');
  if (!article || !content) return null;
  return <BlogArticleView article={article} content={content} related={relatedArticles('zodiac-in-medieval-art')} />;
}
