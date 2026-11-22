import type { Metadata } from 'next';
import BlogArticleView from '@/components/BlogArticleView';
import { getArticle, getArticleContent, relatedArticles } from '@/lib/blog-content';

export const metadata: Metadata = {
  title: '운명을 바꾸는 아침 5분: StarFate가 제안하는 나만의 운세 활용법 | StarFate',
  description: '피터 골위처의 실행 의도 연구와 점화 효과로 보는 아침 운세 루틴의 심리학. 운세를 예언이 아닌 의도 설정 도구로 활용하는 구체적인 5단계 방법.',
  alternates: { canonical: '/blog/morning-fortune-ritual' },
  openGraph: {
    title: '운명을 바꾸는 아침 5분: StarFate가 제안하는 나만의 운세 활용법',
    description: '실행 의도 연구를 참고해 구성한 아침 자기성찰 루틴 — 하루의 프레임을 의도적으로 설계하는 법',
    type: 'article',
  },
};

export default function Page() {
  const article = getArticle('morning-fortune-ritual');
  const content = getArticleContent('morning-fortune-ritual');
  if (!article || !content) return null;
  return <BlogArticleView article={article} content={content} related={relatedArticles('morning-fortune-ritual')} />;
}
