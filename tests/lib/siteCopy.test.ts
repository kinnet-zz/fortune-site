import { describe, it, expect } from 'vitest';
import { SITE_COPY, siteCopy } from '@/lib/site-copy';
import { BLOG_ARTICLES, formatArticleDate } from '@/lib/blog-articles';
import { VALID_LANGS, type Lang } from '@/lib/i18n';

const HANGUL = /[\uac00-\ud7a3]/;

function collectStrings(value: unknown, out: string[] = []): string[] {
  if (typeof value === 'string') {
    out.push(value);
  } else if (Array.isArray(value)) {
    value.forEach((item) => collectStrings(item, out));
  } else if (value && typeof value === 'object') {
    Object.values(value as Record<string, unknown>).forEach((item) => collectStrings(item, out));
  }
  return out;
}

describe('site copy', () => {
  it('has an entry for every supported language', () => {
    for (const lang of VALID_LANGS) {
      expect(SITE_COPY[lang]).toBeDefined();
      expect(siteCopy(lang)).toBe(SITE_COPY[lang]);
    }
  });

  it('keeps the same structural keys for every language', () => {
    const shape = (value: unknown): unknown => {
      if (Array.isArray(value)) return value.map(shape);
      if (value && typeof value === 'object') {
        return Object.fromEntries(
          Object.entries(value as Record<string, unknown>)
            .filter(([, v]) => typeof v !== 'function')
            .map(([k, v]) => [k, shape(v)]),
        );
      }
      return typeof value;
    };
    const reference = JSON.stringify(shape(SITE_COPY.ko));
    for (const lang of VALID_LANGS) {
      expect(JSON.stringify(shape(SITE_COPY[lang]))).toBe(reference);
    }
  });

  it('has no Korean text left in the English, Chinese or Japanese copy', () => {
    for (const lang of ['en', 'zh', 'ja'] as Lang[]) {
      const strings = collectStrings(SITE_COPY[lang]);
      const leftovers = strings.filter((s) => HANGUL.test(s));
      expect(leftovers, `${lang} copy still contains Korean`).toEqual([]);
    }
  });

  it('ships the same number of FAQ entries in every language', () => {
    const counts = VALID_LANGS.map((lang) => SITE_COPY[lang].info.faq.length);
    expect(new Set(counts).size).toBe(1);
    expect(counts[0]).toBe(5);
  });

  it('formats reading time per language', () => {
    expect(SITE_COPY.ko.minutesRead(8)).toBe('8분 읽기');
    expect(SITE_COPY.en.minutesRead(8)).toBe('8 min read');
    expect(SITE_COPY.zh.minutesRead(8)).toBe('8分钟阅读');
    expect(SITE_COPY.ja.minutesRead(8)).toBe('8分で読めます');
  });
});

describe('blog article index', () => {
  it('translates every article title, description and category', () => {
    for (const article of BLOG_ARTICLES) {
      for (const lang of VALID_LANGS) {
        expect(article.title[lang]?.length, `${article.slug} title ${lang}`).toBeGreaterThan(0);
        expect(article.description[lang]?.length, `${article.slug} description ${lang}`).toBeGreaterThan(0);
        expect(article.category[lang]?.length, `${article.slug} category ${lang}`).toBeGreaterThan(0);
      }
      for (const lang of ['en', 'zh', 'ja'] as Lang[]) {
        expect(HANGUL.test(article.title[lang]), `${article.slug} title ${lang}`).toBe(false);
        expect(HANGUL.test(article.description[lang]), `${article.slug} description ${lang}`).toBe(false);
        expect(HANGUL.test(article.category[lang]), `${article.slug} category ${lang}`).toBe(false);
      }
    }
  });

  it('has unique slugs', () => {
    const slugs = BLOG_ARTICLES.map((a) => a.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('formats dates per language', () => {
    expect(formatArticleDate('2026-11-02', 'ko')).toBe('2026년 11월 2일');
    expect(formatArticleDate('2026-11-02', 'ja')).toBe('2026年11月2日');
    expect(formatArticleDate('2026-11-02', 'zh')).toBe('2026年11月2日');
    expect(formatArticleDate('2026-11-02', 'en')).toBe('November 2, 2026');
  });
});
