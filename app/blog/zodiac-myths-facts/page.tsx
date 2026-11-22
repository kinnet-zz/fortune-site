import type { Metadata } from 'next';
import BlogArticleView from '@/components/BlogArticleView';
import { getArticle, getArticleContent, relatedArticles } from '@/lib/blog-content';

const pageUrl = 'https://starfate.day/blog/zodiac-myths-facts';
const pageTitle = '별자리, 안 믿는다면서 왜 자꾸 보게 될까?';
const pageDescription = '별자리 이야기가 오래 살아남은 이유를 밤하늘의 역사, 바넘 효과, 연애와 관계의 실제 장면을 통해 위트 있게 풀어봅니다.';

export const metadata: Metadata = {
  title: `${pageTitle} | StarFate`,
  description: pageDescription,
  alternates: { canonical: '/blog/zodiac-myths-facts' },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: pageUrl,
  },
};

export default function Page() {
  const article = getArticle('zodiac-myths-facts');
  const content = getArticleContent('zodiac-myths-facts');
  if (!article || !content) return null;
  return <BlogArticleView article={article} content={content} related={relatedArticles('zodiac-myths-facts')} />;
}
