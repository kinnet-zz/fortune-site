import type { Metadata } from 'next';
import { Noto_Sans_KR, Noto_Sans_JP, Noto_Sans_SC } from 'next/font/google';
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

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
});

const notoSansSC = Noto_Sans_SC({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
  display: 'swap',
  variable: '--font-noto-sans-sc',
});

export const metadata: Metadata = {
  title: '오늘의 운세 ✨ | 별자리·띠 무료 운세',
  description: '생년월일로 별자리와 띠를 분석하는 AI 무료 운세 서비스. 오늘의 종합운, 연애운, 금전운, 직업운을 확인해보세요. 매일 업데이트되는 오늘의 운세.',
  keywords: [
    '운세', '오늘의 운세', '별자리 운세', '띠 운세', '무료 운세', '연애운', '금전운', '직업운', '종합운', 'AI 운세', '사주', '별자리', '2025 운세', '2026 운세', '일일 운세',
    'fortune', 'horoscope', 'free horoscope', 'daily horoscope', 'zodiac fortune', 'AI fortune', 'zodiac sign', 'birth date fortune', 'free zodiac reading', 'horoscope today', 'Chinese zodiac', 'love horoscope', 'money horoscope', 'career horoscope', 'star sign', 'astrology', 'free astrology',
    '今日の運勢', '占い', '無料占い', '星座占い', '誕生日占い', '十二支', '恋愛運', '金運', '仕事運', '総合運', 'AI占い', '毎日の運勢', '星占い', '今日の星座', '運勢診断', '無料星座占い',
    '今日运势', '免费占卜', '星座运势', '生肖运势', '星座', '免费星座', '每日运势', '爱情运', '财运', '工作运', 'AI占卜', '生日占卜', '十二生肖', '星座占卜',
  ],
  metadataBase: new URL('https://www.starfate.day'),
  alternates: {
    canonical: 'https://www.starfate.day',
    languages: {
      'x-default': 'https://www.starfate.day',
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
    alternateLocale: ['en_US', 'ja_JP', 'zh_CN'],
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
    <html lang="ko" className={`${notoSansKR.variable} ${notoSansJP.variable} ${notoSansSC.variable}`}>
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
                {
                  '@type': 'Question',
                  name: '今日の運勢は無料ですか？',
                  acceptedAnswer: { '@type': 'Answer', text: 'はい、完全無料です。生年月日を入力するだけですぐに確認できます。' },
                },
                {
                  '@type': 'Question',
                  name: '占い結果は毎日変わりますか？',
                  acceptedAnswer: { '@type': 'Answer', text: 'AIが今日の日付をもとに毎日新しい運勢を生成します。同じ生年月日でも日付が変わると結果が変わります。' },
                },
                {
                  '@type': 'Question',
                  name: '個人情報は保存されますか？',
                  acceptedAnswer: { '@type': 'Answer', text: 'いいえ。入力された生年月日は運勢生成後すぐに破棄され、サーバーには保存されません。' },
                },
                {
                  '@type': 'Question',
                  name: 'どの星座と十二支に対応していますか？',
                  acceptedAnswer: { '@type': 'Answer', text: '西洋占星術の12星座（おひつじ座〜うお座）と東洋の十二支（ねずみ〜いのしし）すべてに対応しています。' },
                },
                {
                  '@type': 'Question',
                  name: 'Is the fortune telling service free?',
                  acceptedAnswer: { '@type': 'Answer', text: 'Yes, completely free. Just enter your birth date to get your daily fortune instantly.' },
                },
                {
                  '@type': 'Question',
                  name: 'Does the fortune change every day?',
                  acceptedAnswer: { '@type': 'Answer', text: 'Yes, AI generates a new fortune every day based on today\'s date. Even with the same birth date, the fortune changes daily.' },
                },
                {
                  '@type': 'Question',
                  name: 'Is my personal information stored?',
                  acceptedAnswer: { '@type': 'Answer', text: 'No. Your birth date is discarded immediately after generating your fortune and is never stored on our servers.' },
                },
                {
                  '@type': 'Question',
                  name: 'Which zodiac signs are supported?',
                  acceptedAnswer: { '@type': 'Answer', text: 'All 12 Western zodiac signs (Aries to Pisces) and all 12 Chinese zodiac animals are supported.' },
                },
                {
                  '@type': 'Question',
                  name: '今日运势是免费的吗？',
                  acceptedAnswer: { '@type': 'Answer', text: '是的，完全免费。只需输入生日即可立即查看今日运势。' },
                },
                {
                  '@type': 'Question',
                  name: '运势每天都会变化吗？',
                  acceptedAnswer: { '@type': 'Answer', text: '是的，AI每天根据今天的日期生成新的运势。即使生日相同，日期不同运势也会不同。' },
                },
                {
                  '@type': 'Question',
                  name: '个人信息会被保存吗？',
                  acceptedAnswer: { '@type': 'Answer', text: '不会。您输入的生日在生成运势后立即删除，不会存储在服务器上，请放心使用。' },
                },
                {
                  '@type': 'Question',
                  name: '支持哪些星座和生肖？',
                  acceptedAnswer: { '@type': 'Answer', text: '支持西方占星术的12个星座（白羊座至双鱼座）和东方十二生肖全部12种动物。' },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${notoSansKR.className} ${notoSansJP.className} ${notoSansSC.className} antialiased`}>
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
