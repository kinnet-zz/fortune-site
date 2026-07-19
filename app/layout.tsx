import type { Metadata } from 'next';
import { Playfair_Display } from 'next/font/google';
import './globals.css';
import CookieBanner from '../components/CookieBanner';
import ConsentScripts from '../components/ConsentScripts';
import ConditionalHeader from '../components/ConditionalHeader';
import Footer from '../components/Footer';
import { LangProvider } from '@/lib/LangContext';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-playfair-display',
});

export const metadata: Metadata = {
  title: 'StarFate | 별자리·12지 운세 해석 가이드',
  description: '서양 별자리와 동양 12지를 함께 읽는 운세 해석 가이드입니다. 오늘의 운세 도구, 별자리 백과, 12지 설명, 자기성찰용 해석 예시를 제공합니다.',
  keywords: [
    '운세', '오늘의 운세', '별자리 운세', '띠 운세', '무료 운세', '연애운', '금전운', '직업운', '종합운', 'AI 운세', '사주', '별자리', '2025 운세', '2026 운세', '일일 운세',
    'fortune', 'horoscope', 'free horoscope', 'daily horoscope', 'zodiac fortune', 'AI fortune', 'zodiac sign', 'birth date fortune', 'free zodiac reading', 'horoscope today', 'Chinese zodiac', 'love horoscope', 'money horoscope', 'career horoscope', 'star sign', 'astrology', 'free astrology',
    '今日の運勢', '占い', '無料占い', '星座占い', '誕生日占い', '十二支', '恋愛運', '金運', '仕事運', '総合運', 'AI占い', '毎日の運勢', '星占い', '今日の星座', '運勢診断', '無料星座占い',
    '今日运势', '免费占卜', '星座运势', '生肖运势', '星座', '免费星座', '每日运势', '爱情运', '财运', '工作运', 'AI占卜', '生日占卜', '十二生肖', '星座占卜',
  ],
  metadataBase: new URL('https://starfate.day'),
  openGraph: {
    title: 'StarFate | 별자리·12지 운세 해석 가이드',
    description: '서양 별자리와 동양 12지를 함께 읽는 운세 해석 가이드. 운세 도구와 별자리 백과, 12지 설명을 제공합니다.',
    type: 'website',
    url: 'https://starfate.day',
    siteName: '오늘의 운세',
    locale: 'ko_KR',
    alternateLocale: ['en_US', 'ja_JP', 'zh_CN'],
    images: [
      {
        url: 'https://starfate.day/og-image.png',
        width: 1200,
        height: 630,
        alt: '오늘의 운세 - 별자리·12지 무료 운세 가이드',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StarFate | 별자리·12지 운세 해석 가이드',
    description: '별자리와 12지를 문화적 맥락으로 읽는 운세 해석 가이드.',
    images: ['https://starfate.day/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'Bv9szp96EG1AT604rsMXtTo29qr45XyUlZGPWRpDsks',
    other: {
      'naver-site-verification': '',
      'msvalidate.01': '0AF7E4CE188D36AC9712DD2AD536A04A',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={playfairDisplay.variable}>
      <head>
        <meta name="google-adsense-account" content="ca-pub-3314960461630607" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🔮</text></svg>" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'StarFate',
              url: 'https://starfate.day',
              logo: 'https://starfate.day/og-image.png',
              description: '별자리와 동양 12지를 문화적 맥락으로 설명하는 운세 해석 가이드',
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'dhcho0607@gmail.com',
                contactType: 'customer service',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: '오늘의 운세',
              alternateName: ['Today\'s Fortune', '今日运势', '今日の運勢'],
              url: 'https://starfate.day',
              description: '별자리와 동양 12지 해석을 바탕으로 오늘의 운세를 참고용으로 확인하는 무료 도구',
              applicationCategory: 'LifestyleApplication',
              operatingSystem: 'Web',
              inLanguage: ['ko', 'en', 'zh', 'ja'],
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'KRW',
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <LangProvider>
          <ConditionalHeader />
          {children}
          <Footer />
          <ConsentScripts />
          <CookieBanner />
        </LangProvider>
      </body>
    </html>
  );
}
