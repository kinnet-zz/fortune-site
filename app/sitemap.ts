import { MetadataRoute } from 'next';

const ZODIAC_SLUGS = [
  'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo',
  'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces',
];

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
  'love-compatibility-guide',
  'zodiac-myths-facts',
  'chinese-zodiac-2026',
  '2026-yearly-horoscope',
  'barnum-effect-astrology',
  'morning-fortune-ritual',
  'nasa-ophiuchus-13th-zodiac',
  'twin-study-astrology',
  'ancient-egypt-astronomy',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.starfate.day';
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: 'daily', priority: 1 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/blog/daily`, lastModified: now, changeFrequency: 'daily', priority: 0.95 },
    { url: `${baseUrl}/zodiac`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/chinese-zodiac`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/card-draw`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/past-life`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/number-game`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/idol`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
  ];

  const blogPages: MetadataRoute.Sitemap = BLOG_SLUGS.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const dailyHoroscopePages: MetadataRoute.Sitemap = ZODIAC_SLUGS.map((slug) => ({
    url: `${baseUrl}/blog/daily/${slug}`,
    lastModified: now,
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }));

  const zodiacPages: MetadataRoute.Sitemap = ZODIAC_SLUGS.map((slug) => ({
    url: `${baseUrl}/zodiac/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const chineseZodiacPages: MetadataRoute.Sitemap = CHINESE_ZODIAC_SLUGS.map((slug) => ({
    url: `${baseUrl}/chinese-zodiac/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...blogPages, ...dailyHoroscopePages, ...zodiacPages, ...chineseZodiacPages];
}
