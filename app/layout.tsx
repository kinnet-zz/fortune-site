import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';
import CookieBanner from '../components/CookieBanner';
import Header from '../components/Header';
import Footer from '../components/Footer';

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
  display: 'swap',
  variable: '--font-noto-sans-kr',
});

export const metadata: Metadata = {
  title: '오늘의 운세 ✨ | 별자리·띠 무료 운세',
  description: '생년월일을 입력하고 오늘의 운세를 무료로 확인해보세요. 종합운, 연애운, 금전운, 직업운을 별자리와 띠로 알아보는 AI 운세 서비스입니다.',
  keywords: ['운세', '오늘의 운세', '별자리', '띠', '연애운', '금전운', '직업운', '무료운세', 'AI운세', '사주'],
  metadataBase: new URL('https://fortune-site-6dg.pages.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: '오늘의 운세 ✨ | 별자리·띠 무료 운세',
    description: '생년월일을 입력하고 오늘의 운세를 무료로 확인해보세요. 종합운, 연애운, 금전운, 직업운을 AI가 알려드립니다.',
    type: 'website',
    url: 'https://fortune-site-6dg.pages.dev',
    siteName: '오늘의 운세',
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary',
    title: '오늘의 운세 ✨',
    description: '별자리·띠로 알아보는 오늘의 운세 (무료)',
  },
  robots: {
    index: true,
    follow: true,
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
              url: 'https://fortune-site-6dg.pages.dev',
              description: '생년월일로 별자리와 띠를 분석하여 오늘의 운세를 AI가 알려드리는 무료 서비스',
              applicationCategory: 'LifestyleApplication',
              operatingSystem: 'Web',
              inLanguage: 'ko',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'KRW',
              },
            }),
          }}
        />
      </head>
      <body className={`${notoSansKR.className} antialiased`}>
        <Header />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
