import type { SupportedLang } from '../i18n';

// Structured article bodies. Every article is stored once per language so the
// same layout renders in Korean, English and Japanese, and a test can check
// that no Korean text is left in the translated bodies.

export type Tone = 'neutral' | 'warm' | 'cool' | 'positive' | 'caution' | 'accent';

export type ArticleBlock =
  /** Paragraph. Inline **bold** is supported. */
  | { t: 'p'; text: string }
  | { t: 'h3'; text: string }
  | { t: 'ul'; items: string[] }
  | { t: 'ol'; items: string[] }
  | { t: 'table'; head: string[]; rows: string[][] }
  | { t: 'cards'; items: { title: string; meta?: string; text: string; tone?: Tone }[] }
  | { t: 'box'; title?: string; text: string; tone?: Tone }
  /** Small muted line, e.g. a caveat under a table. */
  | { t: 'note'; text: string }
  | { t: 'image'; src: string; alt: string; caption?: string }
  /** External source list (fact-check references). */
  | { t: 'links'; items: { label: string; href: string; note?: string }[] };

export interface ArticleSection {
  heading?: string;
  blocks: ArticleBlock[];
}

export interface ArticleBody {
  /** Standfirst under the headline. */
  intro: string;
  sections: ArticleSection[];
  /** Sentence above the closing call-to-action button. */
  cta: string;
}

export interface BlogArticleContent {
  /** Slugs of two further articles shown at the end. */
  related?: string[];
  ko: ArticleBody;
  en: ArticleBody;
  ja: ArticleBody;
}

export type ArticleLang = SupportedLang;

export const ARTICLE_UI: Record<ArticleLang, { back: string; related: string; ctaButton: string }> = {
  ko: {
    back: '← 블로그 목록으로',
    related: '관련 글',
    ctaButton: '🔮 오늘의 운세 무료로 보기 →',
  },
  en: {
    back: '← Back to the blog',
    related: 'Related reading',
    ctaButton: "🔮 See today's fortune free →",
  },
  ja: {
    back: '← ブログ一覧へ',
    related: '関連記事',
    ctaButton: '🔮 今日の運勢を無料で見る →',
  },
};
