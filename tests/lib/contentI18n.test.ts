import { describe, it, expect } from 'vitest';
import { GUIDES } from '@/lib/guide-data';
import { PAST_LIVES } from '@/lib/past-life-data';
import { TAROT_CARDS } from '@/lib/tarot-data';
import { ZODIAC_CONTENT } from '@/lib/zodiac-data';
import { CHINESE_ZODIAC_CONTENT } from '@/lib/chinese-zodiac-data';
import { tIdol } from '@/lib/idol-i18n';

// Regression coverage for the language switch: the editorial/tool data that
// backs each page must not silently fall back to Korean for en/zh/ja.

const HANGUL = /[\uac00-\ud7a3]/;
const NON_KO = ['en', 'zh', 'ja'] as const;

function collectStrings(value: unknown, out: string[] = []): string[] {
  if (typeof value === 'string') out.push(value);
  else if (Array.isArray(value)) value.forEach((item) => collectStrings(item, out));
  else if (value && typeof value === 'object') {
    Object.values(value as Record<string, unknown>).forEach((item) => collectStrings(item, out));
  }
  return out;
}

function expectNoKorean(value: unknown, label: string) {
  const leftovers = collectStrings(value).filter((s) => HANGUL.test(s));
  expect(leftovers, `${label} still contains Korean`).toEqual([]);
}

describe('multilingual content data', () => {
  it('translates every guide article', () => {
    expect(GUIDES.length).toBeGreaterThan(0);
    for (const guide of GUIDES) {
      for (const lang of NON_KO) {
        const body = guide[lang];
        expect(body.title.length, `${guide.slug} ${lang} title`).toBeGreaterThan(0);
        expect(body.sections.length, `${guide.slug} ${lang} sections`).toBeGreaterThan(0);
        expectNoKorean(body, `guide ${guide.slug} ${lang}`);
      }
    }
  });

  it('translates every past-life entry', () => {
    for (const life of PAST_LIVES) {
      for (const lang of NON_KO) {
        expectNoKorean(
          { era: life.era[lang], title: life.title[lang], desc: life.desc[lang], traits: life.traits[lang] },
          `past life ${life.title.ko} ${lang}`,
        );
      }
    }
  });

  it('translates every tarot card', () => {
    for (const card of TAROT_CARDS) {
      for (const lang of NON_KO) {
        expectNoKorean(
          {
            name: card.name[lang],
            keyword: card.keyword[lang],
            message: card.message[lang],
            reversed: card.reversed?.[lang],
          },
          `tarot ${card.name.ko} ${lang}`,
        );
      }
    }
  });

  it('translates every zodiac and Chinese zodiac entry', () => {
    for (const lang of NON_KO) {
      expectNoKorean(ZODIAC_CONTENT[lang], `zodiac ${lang}`);
      expectNoKorean(CHINESE_ZODIAC_CONTENT[lang], `chinese zodiac ${lang}`);
    }
  });

  it('translates the idol test copy', () => {
    for (const lang of NON_KO) {
      expectNoKorean(tIdol(lang), `idol ${lang}`);
    }
  });
});
