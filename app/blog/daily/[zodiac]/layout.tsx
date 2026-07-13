import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const ZODIAC_NAMES: Record<string, string> = {
  aries: '양자리',
  taurus: '황소자리',
  gemini: '쌍둥이자리',
  cancer: '게자리',
  leo: '사자자리',
  virgo: '처녀자리',
  libra: '천칭자리',
  scorpio: '전갈자리',
  sagittarius: '사수자리',
  capricorn: '염소자리',
  aquarius: '물병자리',
  pisces: '물고기자리',
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ zodiac: string }>;
}): Promise<Metadata> {
  const { zodiac } = await params;
  const name = ZODIAC_NAMES[zodiac] ?? zodiac;

  return {
    title: `${name} 오늘의 운세 | StarFate`,
    description: `${name}의 오늘 종합운, 연애운, 금전운, 직업운과 자기성찰 조언을 확인하세요.`,
    alternates: { canonical: `/blog/daily/${zodiac}` },
  };
}

export default function ZodiacDailyLayout({ children }: { children: ReactNode }) {
  return children;
}
