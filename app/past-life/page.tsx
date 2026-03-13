export const runtime = 'edge';

import type { Metadata } from 'next';
import type { Lang } from '@/lib/i18n';
import PastLifeClient from '@/components/PastLifeClient';

const VALID_LANGS: Lang[] = ['ko', 'en', 'zh', 'ja'];
function getLang(p?: string): Lang {
  return VALID_LANGS.includes(p as Lang) ? (p as Lang) : 'ko';
}

const ogData: Record<Lang, { title: string; description: string }> = {
  ko: {
    title: '나의 전생은? ✨ | 무료 전생 테스트',
    description: '이름과 생년월일로 당신의 전생을 알아보세요. 고대 이집트 신관? 조선 화원? 바이킹 탐험가? AI가 분석해드립니다.',
  },
  en: {
    title: 'Who Were You in a Past Life? ✨ | Free Past Life Test',
    description: 'Discover your past life with your name and birthday. An Egyptian priest? Joseon painter? Viking explorer? Find out now.',
  },
  zh: {
    title: '我的前世是谁？✨ | 免费前世测试',
    description: '用姓名和生日探索你的前世。古埃及祭司？朝鲜画师？维京探险家？立即揭晓！',
  },
  ja: {
    title: '私の前世は？✨ | 無料前世テスト',
    description: '名前と生年月日で前世を調べましょう。古代エジプトの神官？朝鮮の画員？ヴァイキング探検家？今すぐ確認！',
  },
};

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}): Promise<Metadata> {
  const { lang: p } = await searchParams;
  const lang = getLang(p);
  const { title, description } = ogData[lang];
  const url = lang === 'ko'
    ? 'https://www.starfate.day/past-life'
    : `https://www.starfate.day/past-life?lang=${lang}`;

  return {
    title,
    description,
    openGraph: {
      title, description, type: 'website', url, siteName: 'StarFate',
      images: [{ url: 'https://www.starfate.day/og-image.png', width: 1200, height: 630, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['https://www.starfate.day/og-image.png'] },
    alternates: {
      canonical: url,
      languages: {
        ko: 'https://www.starfate.day/past-life',
        en: 'https://www.starfate.day/past-life?lang=en',
        zh: 'https://www.starfate.day/past-life?lang=zh',
        ja: 'https://www.starfate.day/past-life?lang=ja',
      },
    },
  };
}

export default function PastLifePage() {
  return <PastLifeClient />;
}
