import { describe, expect, it } from 'vitest';
import { BLOG_ARTICLES } from '@/lib/blog-articles';
import {
  BLOG_CONTENT,
  EXTRA_ARTICLES,
  contentSlugs,
  getArticle,
  getArticleContent,
  relatedArticles,
} from '@/lib/blog-content';
import { SUPPORTED_LANGS, normalizeLang } from '@/lib/i18n';

// Regression coverage for the three-language blog: every published article must
// carry a full body in ko, en and ja, and the translated bodies must not fall
// back to Korean text.

const HANGUL = /[\uac00-\ud7a3]/;

function collectStrings(value: unknown, out: string[] = []): string[] {
  if (typeof value === 'string') out.push(value);
  else if (Array.isArray(value)) value.forEach((item) => collectStrings(item, out));
  else if (value && typeof value === 'object') {
    Object.values(value as Record<string, unknown>).forEach((item) => collectStrings(item, out));
  }
  return out;
}

describe('blog article bodies', () => {
  it('has a body for every published article and nothing orphaned', () => {
    const slugs = contentSlugs();
    expect(new Set(slugs).size).toBe(slugs.length);
    expect(slugs.length).toBe(BLOG_ARTICLES.length + Object.keys(EXTRA_ARTICLES).length);
    for (const slug of slugs) {
      expect(BLOG_CONTENT[slug], `${slug} has no content`).toBeDefined();
      expect(getArticleContent(slug)).toBe(BLOG_CONTENT[slug]);
      expect(getArticle(slug), `${slug} has no index entry`).toBeDefined();
    }
    for (const slug of Object.keys(BLOG_CONTENT)) {
      expect(slugs, `${slug} is not a published article`).toContain(slug);
    }
  });

  it('writes every article in Korean, English and Japanese', () => {
    for (const slug of contentSlugs()) {
      for (const lang of SUPPORTED_LANGS) {
        const body = BLOG_CONTENT[slug][lang];
        expect(body, `${slug} ${lang}`).toBeDefined();
        expect(body.intro.length, `${slug} ${lang} intro`).toBeGreaterThan(20);
        expect(body.cta.length, `${slug} ${lang} cta`).toBeGreaterThan(0);
        expect(body.sections.length, `${slug} ${lang} sections`).toBeGreaterThan(0);
        for (const section of body.sections) {
          expect(section.blocks.length, `${slug} ${lang} empty section`).toBeGreaterThan(0);
        }
      }
    }
  });

  it('leaves no Korean text in the English or Japanese bodies', () => {
    for (const slug of contentSlugs()) {
      for (const lang of ['en', 'ja'] as const) {
        const leftovers = collectStrings(BLOG_CONTENT[slug][lang]).filter((s) => HANGUL.test(s));
        expect(leftovers, `${slug} ${lang} still contains Korean`).toEqual([]);
      }
    }
  });

  it('never leaves an empty translated string', () => {
    for (const slug of contentSlugs()) {
      for (const lang of SUPPORTED_LANGS) {
        const strings = collectStrings(BLOG_CONTENT[slug][lang]);
        expect(strings.every((s) => s.trim().length > 0), `${slug} ${lang} has an empty string`).toBe(true);
      }
    }
  });

  it('only links to articles that exist', () => {
    for (const slug of contentSlugs()) {
      const related = relatedArticles(slug);
      const declared = BLOG_CONTENT[slug].related ?? [];
      expect(related.length).toBe(declared.length);
      for (const article of related) {
        expect(article.slug).not.toBe(slug);
      }
    }
  });
});

describe('language fallback', () => {
  it('maps a retired Chinese preference onto English', () => {
    expect(normalizeLang('zh')).toBe('en');
    expect(normalizeLang('zh-CN')).toBe('en');
    expect(normalizeLang('ko')).toBe('ko');
    expect(normalizeLang('ja')).toBe('ja');
    expect(normalizeLang('fr')).toBe('ko');
    expect(normalizeLang(null)).toBe('ko');
  });

  it('offers exactly Korean, English and Japanese', () => {
    expect([...SUPPORTED_LANGS]).toEqual(['ko', 'en', 'ja']);
  });
});
