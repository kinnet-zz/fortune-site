import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/api/',
      },
      {
        userAgent: 'Yeti',
        allow: '/',
        disallow: '/api/',
      },
      {
        userAgent: 'Y!J-BRW',
        allow: '/',
        disallow: '/api/',
      },
      {
        userAgent: 'bingbot',
        allow: '/',
        disallow: '/api/',
      },
      {
        userAgent: 'Baiduspider',
        allow: '/',
        disallow: '/api/',
      },
    ],
    sitemap: 'https://www.starfate.day/sitemap.xml',
  };
}
