import type { Metadata } from 'next';
import BlogArticleView from '@/components/BlogArticleView';
import { getArticle, getArticleContent, relatedArticles } from '@/lib/blog-content';

export const metadata: Metadata = {
  title: '고대 이집트는 왜 별자리로 나일강 범람을 예측했나 — 천문학과 점성술이 갈라지기 전의 역사 | StarFate',
  description: '시리우스와 나일강 범람의 관계, 덴데라 조디악, 바빌로니아에서 그리스로의 전파, 케플러까지 점성술을 했던 과학자들. 천문학과 점성술 분리의 5,000년 역사.',
  alternates: { canonical: 'https://starfate.day/blog/ancient-egypt-astronomy' },
  openGraph: {
    title: '고대 이집트는 왜 별자리로 나일강 범람을 예측했나 — 천문학과 점성술이 갈라지기 전의 역사',
    description: '시리우스, 나일강, 덴데라 조디악, 프톨레마이오스까지 — 하늘을 읽는 두 언어가 탄생하고 분리된 5,000년의 이야기.',
    type: 'article',
  },
};

export default function Page() {
  const article = getArticle('ancient-egypt-astronomy');
  const content = getArticleContent('ancient-egypt-astronomy');
  if (!article || !content) return null;
  return <BlogArticleView article={article} content={content} related={relatedArticles('ancient-egypt-astronomy')} />;
}
