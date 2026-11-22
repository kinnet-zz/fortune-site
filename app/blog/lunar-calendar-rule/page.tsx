import type { Metadata } from 'next';
import BlogArticleView from '@/components/BlogArticleView';
import { getArticle, getArticleContent, relatedArticles } from '@/lib/blog-content';

export const metadata: Metadata = {
  title: '윤달은 왜 생길까 — 음력의 19년 주기와 2033년 문제 | StarFate',
  description: '삭망월 29.53일과 태양년 365.24일의 차이, 19년에 7번 윤달을 넣는 메톤 주기, 중기가 없는 달을 윤달로 삼는 규칙, 그리고 2033년에 달력 계산이 갈리는 이유.',
  alternates: { canonical: 'https://starfate.day/blog/lunar-calendar-rule' },
  openGraph: {
    title: '윤달은 왜 생길까 — 음력의 19년 주기와 2033년 문제',
    description: '달의 주기와 태양의 주기는 나누어떨어지지 않습니다. 그 나머지를 어떻게 처리했는지가 달력의 역사입니다.',
    type: 'article',
  },
};

export default function Page() {
  const article = getArticle('lunar-calendar-rule');
  const content = getArticleContent('lunar-calendar-rule');
  if (!article || !content) return null;
  return <BlogArticleView article={article} content={content} related={relatedArticles('lunar-calendar-rule')} />;
}
