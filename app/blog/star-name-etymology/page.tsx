import type { Metadata } from 'next';
import BlogArticleView from '@/components/BlogArticleView';
import { getArticle, getArticleContent, relatedArticles } from '@/lib/blog-content';

export const metadata: Metadata = {
  title: '베텔게우스, 알골, 미자르 — 별 이름은 누가 지었나 | StarFate',
  description: '아랍어에서 온 밝은 별 이름들, 프톨레마이오스 목록이 번역되며 생긴 오해, 2016년 국제천문연맹의 공식 별 이름 목록, 그리고 한국 전통의 28수와 천상열차분야지도.',
  alternates: { canonical: 'https://starfate.day/blog/star-name-etymology' },
  openGraph: {
    title: '별 이름은 누가 지었나 — 베텔게우스와 알골의 어원',
    description: '밤하늘의 이름 절반은 아랍어에서 왔습니다. 번역이 만든 오해와 공식 이름이 정해지기까지의 과정.',
    type: 'article',
  },
};

export default function Page() {
  const article = getArticle('star-name-etymology');
  const content = getArticleContent('star-name-etymology');
  if (!article || !content) return null;
  return <BlogArticleView article={article} content={content} related={relatedArticles('star-name-etymology')} />;
}
