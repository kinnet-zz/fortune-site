import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';
import CookieBanner from '../components/CookieBanner';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { LangProvider } from '@/lib/LangContext';

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
  display: 'swap',
  variable: '--font-noto-sans-kr',
});

export const metadata: Metadata = {
  title: '오늘의 운세 ✨ | 별자리·띠 무료 운세',
  description: '생년월일로 별자리와 띠를 분석하는 AI 무료 운세 서비스. 오늘의 종합운, 연애운, 금전운, 직업운을 확인해보세요. 매일 업데이트되는 오늘의 운세.',
  keywords: ['운세', '오늘의 운세', '별자리 운세', '띠 운세', '무료 운세', '연애운', '금전운', '직업운', '종합운', 'AI 운세', '사주', '별자리', '2024 운세', '2025 운세', '일일 운세', 'fortune', 'horoscope', '今日運勢', '今日运势', '今日の運勢'],
  metadataBase: new URL('https://www.starfate.day'),
  alternates: {
    canonical: 'https://www.starfate.day',
    languages: {
      'ko': 'https://www.starfate.day',
      'en': 'https://www.starfate.day',
      'zh': 'https://www.starfate.day',
      'ja': 'https://www.starfate.day',
    },
  },
  openGraph: {
    title: '오늘의 운세 ✨ | 별자리·띠 무료 운세',
    description: '생년월일로 별자리와 띠를 분석하는 AI 무료 운세 서비스. 오늘의 종합운, 연애운, 금전운, 직업운을 확인해보세요.',
    type: 'website',
    url: 'https://www.starfate.day',
    siteName: '오늘의 운세',
    locale: 'ko_KR',
    images: [
      {
        url: 'https://www.starfate.day/og-image.png',
        width: 1200,
        height: 630,
        alt: '오늘의 운세 - AI 무료 운세 서비스',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '오늘의 운세 ✨ | 별자리·띠 무료 운세',
    description: '생년월일로 별자리와 띠를 분석하는 AI 무료 운세. 매일 업데이트!',
    images: ['https://www.starfate.day/og-image.png'],
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
    google: '',
    other: {
      'naver-site-verification': '',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={notoSansKR.variable}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-adsense-account" content="ca-pub-3314960461630607" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🔮</text></svg>" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3314960461630607" crossOrigin="anonymous"></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: '오늘의 운세',
              alternateName: ['Today\'s Fortune', '今日运势', '今日の運勢'],
              url: 'https://www.starfate.day',
              description: '생년월일로 별자리와 띠를 분석하여 오늘의 운세를 AI가 알려드리는 무료 서비스',
              applicationCategory: 'LifestyleApplication',
              operatingSystem: 'Web',
              inLanguage: ['ko', 'en', 'zh', 'ja'],
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'KRW',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                ratingCount: '1024',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: '오늘의 운세는 무료인가요?',
                  acceptedAnswer: { '@type': 'Answer', text: '네, 완전 무료입니다. 생년월일만 입력하면 바로 확인할 수 있습니다.' },
                },
                {
                  '@type': 'Question',
                  name: '운세는 매일 바뀌나요?',
                  acceptedAnswer: { '@type': 'Answer', text: 'AI가 오늘 날짜를 기준으로 매일 새로운 운세를 생성합니다.' },
                },
                {
                  '@type': 'Question',
                  name: '개인정보가 저장되나요?',
                  acceptedAnswer: { '@type': 'Answer', text: '아니요. 입력하신 생년월일은 운세 생성 후 즉시 파기되며 서버에 저장되지 않습니다.' },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${notoSansKR.className} antialiased`}>
        <LangProvider>
          <Header />
          {children}
          <Footer />
          <CookieBanner />
        </LangProvider>
      </body>
    </html>
  );
}
