import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';
import CookieBanner from '../components/CookieBanner';

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
  display: 'swap',
  variable: '--font-noto-sans-kr',
});

export const metadata: Metadata = {
  title: '오늘의 운세 ✨',
  description: '생년월일을 입력하고 오늘의 운세를 확인해보세요. 종합운, 연애운, 금전운, 직업운을 별자리와 함께 알아보세요.',
  keywords: ['운세', '오늘의 운세', '별자리', '띠', '연애운', '금전운', '직업운'],
  openGraph: {
    title: '오늘의 운세 ✨',
    description: '생년월일을 입력하고 오늘의 운세를 확인해보세요.',
    type: 'website',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3314960461630607" crossOrigin="anonymous"></script>
      </head>
      <body className={`${notoSansKR.className} antialiased`}>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
