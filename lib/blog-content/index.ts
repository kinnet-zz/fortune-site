import type { BlogArticle } from '../blog-articles';
import { BLOG_ARTICLES, getBlogArticle } from '../blog-articles';
import type { BlogArticleContent } from './types';

import { whatIsAstrology, planetsAndSigns } from './astrology-intro';
import { howToReadDailyFortune, dailyHoroscopeHabit } from './fortune-habit';
import { zodiacCompatibilityGuide } from './zodiac-compatibility';
import { chineseVsWestern } from './chinese-vs-western';
import { zodiacCareerGuide, moonSignGuide } from './career-moon';
import { risingSignGuide, chineseZodiacCompatibility } from './rising-chinese-compat';
import { numerologyLuckyNumbers, zodiacBloodType } from './numerology-bloodtype';
import { zodiacMythsFacts, ophiuchus13th } from './myths-ophiuchus';
import { yearlyHoroscope2026, chineseZodiac2026 } from './yearly-2026';
import { barnumEffect } from './barnum';
import { morningFortuneRitual } from './morning-ritual';
import { twinStudy } from './twin-study';
import { saturnReturn, lunarCalendarRule } from './saturn-lunar';
import { ancientEgypt } from './ancient-egypt';
import { medievalArt, starNameEtymology } from './medieval-starnames';
import { islamicLegacy } from './islamic-legacy';

export type { BlogArticleContent } from './types';
export { ARTICLE_UI } from './types';

/** Full article bodies, keyed by URL slug, in every offered language. */
export const BLOG_CONTENT: Record<string, BlogArticleContent> = {
  'what-is-astrology': whatIsAstrology,
  'planets-and-zodiac-signs': planetsAndSigns,
  'zodiac-compatibility-guide': zodiacCompatibilityGuide,
  'chinese-vs-western-zodiac': chineseVsWestern,
  'how-to-read-daily-fortune': howToReadDailyFortune,
  'daily-horoscope-habit': dailyHoroscopeHabit,
  'zodiac-career-guide': zodiacCareerGuide,
  'moon-sign-guide': moonSignGuide,
  'rising-sign-guide': risingSignGuide,
  'chinese-zodiac-compatibility': chineseZodiacCompatibility,
  'numerology-lucky-numbers': numerologyLuckyNumbers,
  'zodiac-blood-type': zodiacBloodType,
  'zodiac-myths-facts': zodiacMythsFacts,
  'nasa-ophiuchus-13th-zodiac': ophiuchus13th,
  '2026-yearly-horoscope': yearlyHoroscope2026,
  'chinese-zodiac-2026': chineseZodiac2026,
  'barnum-effect-astrology': barnumEffect,
  'morning-fortune-ritual': morningFortuneRitual,
  'twin-study-astrology': twinStudy,
  'saturn-return-psychology': saturnReturn,
  'lunar-calendar-rule': lunarCalendarRule,
  'ancient-egypt-astronomy': ancientEgypt,
  'zodiac-in-medieval-art': medievalArt,
  'star-name-etymology': starNameEtymology,
  'islamic-astronomy-legacy': islamicLegacy,
};

// Articles that are published and in the sitemap but kept out of the /blog
// index, so the index stays at the 24 featured guides.
export const EXTRA_ARTICLES: Record<string, BlogArticle> = {
  'daily-horoscope-habit': {
    slug: 'daily-horoscope-habit',
    date: '2025-07-29',
    minutes: 10,
    emoji: '🌤️',
    title: {
      ko: '운세를 4년간 매일 확인했더니 생긴 일 — 습관이 된 운세의 심리학',
      en: 'Four years of checking a horoscope every day — what actually happened',
      zh: '连续四年每天查看运势后发生的事',
      ja: '四年間、毎日運勢を見てわかったこと — 習慣になった占いの心理学',
    },
    description: {
      ko: '반신반의하며 시작한 일일 운세 확인이 어느새 4년이 됐다. 운세가 맞아서 계속한 게 아니라, 오히려 틀릴 때 더 많은 것을 배웠다.',
      en: 'A daily fortune check begun with doubts turned into four years. I did not keep going because it was right; I learned more when it was wrong.',
      zh: '半信半疑开始的每日运势查看，不知不觉已过了四年。坚持下去的原因不是运势准，而是错的时候学到的更多。',
      ja: '半信半疑で始めた毎日の運勢チェックが、いつのまにか四年になった。当たったから続けたのではなく、外れたときのほうが多くを学んだ。',
    },
    category: {
      ko: '운세 습관',
      en: 'Fortune habits',
      zh: '运势习惯',
      ja: '運勢の習慣',
    },
  },
};

export function getArticle(slug: string): BlogArticle | undefined {
  return getBlogArticle(slug) ?? EXTRA_ARTICLES[slug];
}

export function getArticleContent(slug: string): BlogArticleContent | undefined {
  return BLOG_CONTENT[slug];
}

export function relatedArticles(slug: string): BlogArticle[] {
  const content = BLOG_CONTENT[slug];
  if (!content?.related) return [];
  return content.related
    .map((relatedSlug) => getArticle(relatedSlug))
    .filter((article): article is BlogArticle => Boolean(article));
}

/** Slugs in reading order, used by the completeness test. */
export function contentSlugs(): string[] {
  return [...BLOG_ARTICLES.map((a) => a.slug), ...Object.keys(EXTRA_ARTICLES)];
}
