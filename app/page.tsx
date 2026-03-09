import type { Metadata } from 'next';
import type { Lang } from '@/lib/i18n';
import HomeClient from '@/components/HomeClient';

const VALID_LANGS: Lang[] = ['ko', 'en', 'ja', 'zh'];

function getLang(param?: string): Lang {
  return VALID_LANGS.includes(param as Lang) ? (param as Lang) : 'ko';
}

const ogData: Record<Lang, { title: string; description: string }> = {
  ko: {
    title: '오늘의 운세 ✨ | 별자리·띠 무료 운세',
    description: '생년월일로 별자리와 띠를 분석하는 AI 무료 운세. 종합운·연애운·금전운·직업운을 매일 확인하세요.',
  },
  en: {
    title: "Today's Fortune ✨ | Free AI Horoscope",
    description: 'Free AI fortune analyzing your zodiac & Chinese zodiac. Check your daily Overall, Love, Money & Career fortune.',
  },
  ja: {
    title: '今日の運勢 ✨ | 無料AI占い',
    description: '生年月日で星座と十二支を分析する無料AI占い。毎日の総合運・恋愛運・金運・仕事運をチェック。',
  },
  zh: {
    title: '今日运势 ✨ | 免费AI占卜',
    description: '根据生日分析星座和生肖的免费AI运势。每日查看综合运·爱情运·财运·事业运。',
  },
};

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}): Promise<Metadata> {
  const { lang: langParam } = await searchParams;
  const lang = getLang(langParam);
  const { title, description } = ogData[lang];
  const url = lang === 'ko' ? 'https://www.starfate.day' : `https://www.starfate.day/?lang=${lang}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url,
      siteName: 'StarFate',
      images: [
        {
          url: 'https://www.starfate.day/og-image.png',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://www.starfate.day/og-image.png'],
    },
  };
}

export default function Page() {
  return <HomeClient />;
}
