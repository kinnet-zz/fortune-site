import type { Metadata } from 'next';
import BlogArticleView from '@/components/BlogArticleView';
import { getArticle, getArticleContent, relatedArticles } from '@/lib/blog-content';

export const metadata: Metadata = {
  title: '같은 날 태어난 2,000명을 추적했다 — 쌍둥이 연구가 별자리에 던진 가장 불편한 질문 | StarFate',
  description: '제프리 딘이 분석한 2,101명의 타임트윈 자료, 숀 칼슨의 Nature 실험, 화성 효과 논란을 통해 점성술의 예측력을 검토합니다.',
  alternates: { canonical: 'https://starfate.day/blog/twin-study-astrology' },
  openGraph: {
    title: '같은 날 태어난 2,000명을 추적했다 — 쌍둥이 연구가 별자리에 던진 가장 불편한 질문',
    description: '점성술을 수십 년에 걸쳐 과학적으로 검증한 연구들이 발견한 것, 그리고 발견하지 못한 것.',
    type: 'article',
  },
};

export default function Page() {
  const article = getArticle('twin-study-astrology');
  const content = getArticleContent('twin-study-astrology');
  if (!article || !content) return null;
  return <BlogArticleView article={article} content={content} related={relatedArticles('twin-study-astrology')} />;
}
