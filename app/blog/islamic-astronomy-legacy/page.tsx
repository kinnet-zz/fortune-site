import type { Metadata } from 'next';
import BlogArticleView from '@/components/BlogArticleView';
import { getArticle, getArticleContent, relatedArticles } from '@/lib/blog-content';

export const metadata: Metadata = {
  title: '마라가 천문대에서 코페르니쿠스까지 — 이슬람 천문학이 유럽에 넘긴 것 | StarFate',
  description: '지혜의 집의 번역, 알콰리즈미, 1259년 마라가 천문대와 투시 부부, 울루그베그의 사마르칸트 관측, 톨레도 번역과 알폰시안 표까지. 유럽 천문학이 물려받은 계산 기술의 계보.',
  alternates: { canonical: 'https://starfate.day/blog/islamic-astronomy-legacy' },
  openGraph: {
    title: '마라가 천문대에서 코페르니쿠스까지',
    description: '천문학의 계산 기술은 어디에서 왔나 — 번역, 관측소, 그리고 별 이름의 이동 경로.',
    type: 'article',
  },
};

export default function Page() {
  const article = getArticle('islamic-astronomy-legacy');
  const content = getArticleContent('islamic-astronomy-legacy');
  if (!article || !content) return null;
  return <BlogArticleView article={article} content={content} related={relatedArticles('islamic-astronomy-legacy')} />;
}
