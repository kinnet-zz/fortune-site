import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { formatKoreanDate, getDailyZodiac, getTodayKST } from '@/lib/dailyHoroscope';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ zodiac: string }>;
}): Promise<Metadata> {
  const { zodiac } = await params;
  const info = getDailyZodiac(zodiac);
  if (!info) return { robots: { index: false, follow: false } };

  const date = formatKoreanDate(getTodayKST()).replace(/ \(.+\)$/, '');
  const title = `${date} ${info.ko} 오늘의 운세 | StarFate`;
  const description = `${date} ${info.ko}의 종합운, 연애운, 금전운, 직업운과 오늘 실천할 자기성찰 조언을 무료로 확인하세요.`;
  const url = `/blog/daily/${zodiac}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      locale: 'ko_KR',
      siteName: 'StarFate',
    },
    twitter: { card: 'summary_large_image', title, description },
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
  };
}

export default function ZodiacDailyLayout({ children }: { children: ReactNode }) {
  return children;
}
