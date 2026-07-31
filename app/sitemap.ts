import { MetadataRoute } from 'next';
import { DAILY_ZODIACS, getTodayKST } from '@/lib/dailyHoroscope';

const CHINESE_ZODIAC_SLUGS = [
  'rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake',
  'horse', 'goat', 'monkey', 'rooster', 'dog', 'pig',
];

const BLOG_SLUGS = [
  'what-is-astrology',
  'zodiac-compatibility-guide',
  'chinese-vs-western-zodiac',
  'how-to-read-daily-fortune',
  'planets-and-zodiac-signs',
  'zodiac-career-guide',
  'moon-sign-guide',
  'rising-sign-guide',
  'chinese-zodiac-compatibility',
  'numerology-lucky-numbers',
  'zodiac-blood-type',
  'zodiac-myths-facts',
  'chinese-zodiac-2026',
  '2026-yearly-horoscope',
  'barnum-effect-astrology',
  'morning-fortune-ritual',
  'daily-horoscope-habit',
  'nasa-ophiuchus-13th-zodiac',
  'twin-study-astrology',
  'ancient-egypt-astronomy',
];

const GUIDE_SLUGS = [
  'zodiac-compatibility',
  'horoscope-history',
  'tarot-guide',
  'numerology',
  'past-life-culture',
  'fortune-tips',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://starfate.day';
  // Only daily pages change on a schedule. Omitting lastModified from
  // evergreen pages prevents every sitemap request from claiming that all
  // content changed just now.
  const dailyLastModified = new Date(`${getTodayKST()}T00:00:00+09:00`);

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: 'daily', priority: 1 },
    { url: `${baseUrl}/blog`, changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/blog/daily`, changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/zodiac`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/chinese-zodiac`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/card-draw`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/past-life`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/number-game`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/number-game/leaderboard`, changeFrequency: 'daily', priority: 0.4 },
    { url: `${baseUrl}/zodiac-memory`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/idol`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/about`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/contact`, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${baseUrl}/privacy`, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${baseUrl}/terms`, changeFrequency: 'monthly', priority: 0.3 },
  ];

  const blogPages: MetadataRoute.Sitemap = BLOG_SLUGS.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const zodiacPages: MetadataRoute.Sitemap = DAILY_ZODIACS.map((zodiac) => ({
    url: `${baseUrl}/zodiac/${zodiac.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const dailyHoroscopePages: MetadataRoute.Sitemap = DAILY_ZODIACS.map((zodiac) => ({
    url: `${baseUrl}/blog/daily/${zodiac.slug}`,
    lastModified: dailyLastModified,
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }));

  const chineseZodiacPages: MetadataRoute.Sitemap = CHINESE_ZODIAC_SLUGS.map((slug) => ({
    url: `${baseUrl}/chinese-zodiac/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const guidePages: MetadataRoute.Sitemap = GUIDE_SLUGS.map((slug) => ({
    url: `${baseUrl}/guide/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...dailyHoroscopePages,
    ...blogPages,
    ...zodiacPages,
    ...chineseZodiacPages,
    ...guidePages,
  ];
}
