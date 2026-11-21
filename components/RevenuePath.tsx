'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import FortuneForm from '@/components/FortuneForm';
import { CardArtwork, type ArtworkVariant } from '@/components/Artwork';
import { trackEvent } from '@/lib/analytics';
import type { Lang } from '@/lib/i18n';
import type { FortuneErrorState } from '@/lib/homeFortune';

interface ConversionHeroProps {
  onSubmit: (birthDate: string, gender: string) => void;
  isLoading: boolean;
  lang: Lang;
  error?: FortuneErrorState | null;
}

type LangTuple = Record<Lang, [string, string]>;

const COPY: Record<Lang, {
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  titleTail: string;
  description: string;
  privacy: string;
  moreTitle: string;
  moreKicker: string;
  relatedTitle: string;
  relatedDescription: string;
  formKicker: string;
  browse: string;
  viewAll: string;
  cardCta: string;
  statLabels: string[];
  trust: string[];
  pathsTitle: string;
  pathsKicker: string;
  pathsDescription: string;
}> = {
  ko: {
    eyebrow: 'StarFate · 오늘의 리딩',
    titleLead: '달빛 아래에서,',
    titleAccent: '오늘의 운세',
    titleTail: '한 장의 리딩으로',
    description: '생년월일로 별자리와 띠를 계산해 종합운·연애운·금전운·직업운을 한 장의 리딩으로 보여드립니다.',
    privacy: '입력한 생년월일은 결과 계산에만 사용하며 프로필로 저장하지 않습니다.',
    moreTitle: '운세를 본 다음 많이 찾는 콘텐츠',
    moreKicker: 'Continue the reading',
    relatedTitle: '결과와 함께 보면 더 재미있는 콘텐츠',
    relatedDescription: '한 번의 운세 확인으로 끝내지 말고, 궁합과 타로까지 이어서 확인해보세요.',
    formKicker: 'Birth chart reading',
    browse: '둘러보기',
    viewAll: '전체 보기',
    cardCta: '보기',
    statLabels: ['12개 별자리 해석', '4개 언어 지원', '매일 갱신'],
    trust: ['무료', '입력정보 저장 안 함', '매일 갱신'],
    pathsTitle: '다섯 갈래의 달빛 리딩',
    pathsKicker: 'Five ways to read',
    pathsDescription: '오늘의 운세부터 별자리 백과, 타로, 궁합, 해석 가이드까지. 지금 궁금한 결부터 골라 들어가세요.',
  },
  en: {
    eyebrow: 'StarFate · Daily reading',
    titleLead: 'Under the silver moon,',
    titleAccent: 'today’s fortune',
    titleTail: 'in one reading',
    description: 'Use your birth date to see your overall, love, money, and career reading in a single card.',
    privacy: 'Your birth date is used only for this calculation and is not saved as a profile.',
    moreTitle: 'Popular next reads',
    moreKicker: 'Continue the reading',
    relatedTitle: 'Continue your reading',
    relatedDescription: 'Explore compatibility, tarot, and today’s zodiac readings next.',
    formKicker: 'Birth chart reading',
    browse: 'Browse all',
    viewAll: 'View all',
    cardCta: 'Open',
    statLabels: ['12 sign guides', '4 languages', 'Updated daily'],
    trust: ['Free', 'No profile storage', 'Updated daily'],
    pathsTitle: 'Five paths by moonlight',
    pathsKicker: 'Five ways to read',
    pathsDescription: 'Daily fortune, the zodiac almanac, tarot, compatibility and reading guides — begin with the question you carry tonight.',
  },
  zh: {
    eyebrow: 'StarFate · 今日运势',
    titleLead: '月光之下，',
    titleAccent: '今日运势',
    titleTail: '一签即读',
    description: '输入生日即可查看综合运、爱情运、财运和事业运的完整解读。',
    privacy: '生日仅用于本次计算，不会保存为个人资料。',
    moreTitle: '大家接着查看的内容',
    moreKicker: 'Continue the reading',
    relatedTitle: '继续探索你的运势',
    relatedDescription: '接着查看星座配对、塔罗牌和今日星座运势。',
    formKicker: 'Birth chart reading',
    browse: '浏览全部',
    viewAll: '查看全部',
    cardCta: '查看',
    statLabels: ['12星座解读', '4种语言', '每日更新'],
    trust: ['免费', '不保存输入信息', '每日更新'],
    pathsTitle: '五条月光之路',
    pathsKicker: 'Five ways to read',
    pathsDescription: '今日运势、星座百科、塔罗、配对与解读指南，随心选择此刻想问的那一个。',
  },
  ja: {
    eyebrow: 'StarFate · 今日のリーディング',
    titleLead: '銀の月の下で、',
    titleAccent: '今日の運勢',
    titleTail: '一枚のリーディングに',
    description: '生年月日から総合運・恋愛運・金運・仕事運を一枚のリーディングにまとめます。',
    privacy: '生年月日は今回の計算にのみ使用し、プロフィールとして保存しません。',
    moreTitle: '次によく見られるコンテンツ',
    moreKicker: 'Continue the reading',
    relatedTitle: '運勢をさらに楽しむ',
    relatedDescription: '星座相性、タロット、今日の星座運勢も続けて確認できます。',
    formKicker: 'Birth chart reading',
    browse: 'すべて見る',
    viewAll: 'すべて見る',
    cardCta: '見る',
    statLabels: ['12星座の解説', '4言語対応', '毎日更新'],
    trust: ['無料', '入力情報を保存しない', '毎日更新'],
    pathsTitle: '五つの月光リーディング',
    pathsKicker: 'Five ways to read',
    pathsDescription: '今日の運勢、星座図鑑、タロット、相性、読み解きガイド。今夜知りたいところから。',
  },
};

const READING_PATHS: {
  href: string;
  variant: ArtworkVariant;
  tag: Record<Lang, string>;
  text: LangTuple;
  featured?: boolean;
}[] = [
  {
    href: '#birth-chart',
    variant: 'yearly',
    featured: true,
    tag: { ko: '오늘', en: 'Today', zh: '今日', ja: '今日' },
    text: {
      ko: ['오늘의 운세', '생년월일로 읽는 종합·연애·금전·직업운'],
      en: ['Daily fortune', 'Overall, love, money and career in one card'],
      zh: ['今日运势', '生日解读：综合、爱情、财运与事业'],
      ja: ['今日の運勢', '生年月日から総合・恋愛・金運・仕事運'],
    },
  },
  {
    href: '/zodiac',
    variant: 'zodiac',
    featured: true,
    tag: { ko: '별자리', en: 'Zodiac', zh: '星座', ja: '星座' },
    text: {
      ko: ['12별자리 백과', '황도 12궁의 상징과 해석을 차분히'],
      en: ['Zodiac almanac', 'The twelve signs, their symbols and readings'],
      zh: ['12星座百科', '黄道十二宫的象征与解读'],
      ja: ['12星座図鑑', '黄道十二宮の象徴と読み解き'],
    },
  },
  {
    href: '/card-draw',
    variant: 'tarot',
    tag: { ko: '타로', en: 'Tarot', zh: '塔罗', ja: 'タロット' },
    text: {
      ko: ['타로 카드 뽑기', '세 장의 카드로 읽는 오늘의 마음'],
      en: ['Draw a tarot card', 'Three cards for tonight’s question'],
      zh: ['抽取塔罗牌', '三张牌解读此刻的心意'],
      ja: ['タロットを引く', '三枚のカードで今夜の心を読む'],
    },
  },
  {
    href: '/guide/zodiac-compatibility',
    variant: 'compatibility',
    tag: { ko: '궁합', en: 'Compatibility', zh: '配对', ja: '相性' },
    text: {
      ko: ['별자리 궁합', '두 사람의 결을 달빛 아래에서 비교'],
      en: ['Compatibility', 'Two charts read side by side'],
      zh: ['星座配对', '在月光下比较两个人的频率'],
      ja: ['星座相性', '二人のリズムを月明かりで重ねる'],
    },
  },
  {
    href: '/blog',
    variant: 'journal',
    tag: { ko: '가이드', en: 'Guide', zh: '指南', ja: 'ガイド' },
    text: {
      ko: ['해석 가이드', '운세를 건강하게 읽는 법과 문화적 배경'],
      en: ['Reading guides', 'How to read fortune well, and its history'],
      zh: ['解读指南', '如何健康地阅读运势与文化背景'],
      ja: ['読み解きガイド', '運勢との付き合い方と文化的背景'],
    },
  },
];

const RELATED_ITEMS: {
  href: string;
  variant: ArtworkVariant;
  tag: Record<Lang, string>;
  ko: [string, string];
  en: [string, string];
  zh: [string, string];
  ja: [string, string];
}[] = [
  {
    href: '/card-draw',
    variant: 'tarot',
    tag: { ko: '타로', en: 'Tarot', zh: '塔罗', ja: 'タロット' },
    ko: ['그 사람에게 연락 올까?', '오늘의 타로 한 장 뽑기'],
    en: ['Will they contact me?', 'Draw today’s tarot card'],
    zh: ['对方会联系我吗？', '抽取今日塔罗牌'],
    ja: ['あの人から連絡は来る？', '今日のタロットを引く'],
  },
  {
    href: '/guide/zodiac-compatibility',
    variant: 'compatibility',
    tag: { ko: '궁합', en: 'Compatibility', zh: '配对', ja: '相性' },
    ko: ['우리 둘은 얼마나 잘 맞을까?', '12별자리 궁합 분석'],
    en: ['How compatible are we?', 'Zodiac compatibility guide'],
    zh: ['我们有多般配？', '十二星座配对指南'],
    ja: ['二人の相性は？', '12星座相性ガイド'],
  },
  {
    href: '/blog/2026-yearly-horoscope',
    variant: 'yearly',
    tag: { ko: '연간 운세', en: 'Yearly', zh: '年度运势', ja: '年間運勢' },
    ko: ['2026년 하반기, 내 별자리 운은?', '연애·재물·직업운 미리 보기'],
    en: ['What does late 2026 hold for your sign?', 'Preview love, money, and career trends'],
    zh: ['2026年下半年，你的星座运势如何？', '提前查看爱情、财运与事业趋势'],
    ja: ['2026年後半、あなたの星座運は？', '恋愛・金運・仕事運を先取り'],
  },
];

/** Soft silver moon-glow used behind sections, drawn with CSS only. */
function MoonGlow({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute ${className}`} aria-hidden="true">
      <div className="h-full w-full rounded-full bg-[radial-gradient(circle,rgba(230,236,245,0.18)_0%,rgba(184,199,220,0.07)_40%,rgba(184,199,220,0.02)_62%,transparent_76%)]" />
    </div>
  );
}

function RelatedCard({
  item,
  lang,
  location,
}: {
  item: (typeof RELATED_ITEMS)[number];
  lang: Lang;
  location: 'home' | 'result';
}) {
  const [title, description] = item[lang];
  return (
    <Link
      href={item.href}
      onClick={() => trackEvent('related_content_click', {
        content_path: item.href,
        click_location: location,
        language: lang,
      })}
      className="group flex flex-col overflow-hidden rounded-[20px] border border-[rgba(184,199,220,0.14)] bg-[rgba(15,19,28,0.82)] p-2 transition-all duration-500 hover:-translate-y-1 hover:border-[rgba(184,199,220,0.34)] hover:shadow-[0_30px_60px_-34px_rgba(0,0,0,0.9)]"
    >
      <CardArtwork variant={item.variant} />
      <div className="flex flex-1 flex-col px-2.5 pb-2 pt-3.5">
        <div className="mb-2 flex items-center gap-2">
          <span className="tag">{item.tag[lang]}</span>
        </div>
        <h3 className="font-display text-[1.02rem] leading-snug text-[#f2f0ea] text-keep-all">
          {title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-[0.76rem] leading-5 text-[#9aa3b2] text-keep-all">{description}</p>
        <span className="mt-3 flex items-center gap-1.5 text-[0.72rem] tracking-[0.04em] text-[#dbe6f4] opacity-70 transition-opacity duration-300 group-hover:opacity-100">
          {COPY[lang].cardCta}
          <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
        </span>
      </div>
    </Link>
  );
}

function RelatedLinks({ lang, location }: { lang: Lang; location: 'home' | 'result' }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {RELATED_ITEMS.map((item) => (
        <RelatedCard key={item.href} item={item} lang={lang} location={location} />
      ))}
    </div>
  );
}

function PathCard({
  item,
  lang,
}: {
  item: (typeof READING_PATHS)[number];
  lang: Lang;
}) {
  const [label, description] = item.text[lang];
  return (
    <Link
      href={item.href}
      className={`group relative flex flex-col overflow-hidden rounded-[22px] border border-[rgba(184,199,220,0.14)] bg-[rgba(12,16,24,0.72)] transition-all duration-500 hover:-translate-y-1 hover:border-[rgba(230,236,245,0.38)] hover:shadow-[0_34px_70px_-36px_rgba(0,0,0,0.95)] ${
        item.featured ? 'lg:col-span-3' : 'lg:col-span-2'
      }`}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden sm:aspect-[16/9]">
        <img
          src={
            item.variant === 'zodiac'
              ? '/images/card-zodiac-wheel.webp'
              : item.variant === 'tarot'
                ? '/images/card-tarot.webp'
                : item.variant === 'compatibility'
                  ? '/images/card-love-match.webp'
                  : item.variant === 'journal'
                    ? '/images/card-guidance.webp'
                    : '/images/card-daily-fortune.webp'
          }
          alt=""
          width={1000}
          height={750}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,9,14,0.05)_0%,rgba(7,9,14,0.35)_58%,rgba(7,9,14,0.92)_100%)]" />
        <span className="absolute left-4 top-4 rounded-full border border-[rgba(230,236,245,0.28)] bg-[rgba(7,9,14,0.55)] px-2.5 py-1 text-[0.62rem] tracking-[0.14em] text-[#dbe6f4] backdrop-blur">
          {item.tag[lang]}
        </span>
      </div>
      <div className="flex flex-1 flex-col px-5 pb-5 pt-1 sm:px-6">
        <h3 className="font-display text-[1.24rem] leading-tight text-[#f6f9fd] text-keep-all sm:text-[1.35rem]">
          {label}
        </h3>
        <p className="mt-2 text-[0.8rem] leading-6 text-[#9aa3b2] text-keep-all">{description}</p>
        <span className="mt-4 flex items-center gap-1.5 text-[0.7rem] tracking-[0.14em] text-[#b8c7dc] opacity-0 transition-all duration-300 group-hover:opacity-100">
          {COPY[lang].cardCta}
          <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}

export function HomeConversionHero({ onSubmit, isLoading, lang, error }: ConversionHeroProps) {
  const copy = COPY[lang];
  const [today, setToday] = useState('');
  const [numericDate, setNumericDate] = useState('');

  useEffect(() => {
    const locale = lang === 'ko' ? 'ko-KR' : lang === 'ja' ? 'ja-JP' : lang === 'zh' ? 'zh-CN' : 'en-US';
    const now = new Date();
    setToday(new Intl.DateTimeFormat(locale, {
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    }).format(now));
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, '0');
    const d = String(now.getDate()).padStart(2, '0');
    setNumericDate(`${y}.${m}.${d}`);
  }, [lang]);

  return (
    <>
      <section className="relative mb-16 w-full" aria-labelledby="fortune-first-heading">
        <div className="relative overflow-hidden rounded-[28px] border border-[rgba(184,199,220,0.16)] bg-[#080b11] sm:rounded-[34px]">
          {/* 달빛 수묵 히어로 아트 — 데스크탑은 배경, 모바일은 상단 배너 */}
          <div className="absolute inset-0 hidden sm:block" aria-hidden="true">
            <img
              src="/images/hero-silver-moon.webp"
              alt=""
              width={1536}
              height={1024}
              fetchPriority="high"
              className="h-full w-full object-cover object-[52%_30%] opacity-[0.9]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,9,14,0.97)_0%,rgba(7,9,14,0.9)_26%,rgba(7,9,14,0.55)_48%,rgba(7,9,14,0.18)_72%,rgba(7,9,14,0.1)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,9,14,0.72)_0%,rgba(7,9,14,0.25)_18%,transparent_34%,rgba(7,9,14,0.35)_68%,rgba(7,9,14,0.94)_100%)]" />
            <MoonGlow className="left-[42%] top-[-16%] h-[46rem] w-[46rem] opacity-80" />
          </div>

          <div className="relative h-[15.5rem] w-full sm:hidden" aria-hidden="true">
            <img
              src="/images/hero-silver-moon.webp"
              alt=""
              width={1536}
              height={1024}
              fetchPriority="high"
              className="h-full w-full object-cover object-[52%_26%]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,9,14,0.42)_0%,rgba(7,9,14,0.08)_38%,rgba(7,9,14,0.72)_78%,#080b11_100%)]" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(230,236,245,0.35),transparent)]" />
          </div>

          <div className="relative grid grid-cols-1 items-center gap-10 px-5 pb-9 pt-8 sm:px-9 sm:pb-12 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-12 lg:pb-16 lg:pt-20">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <span className="inline-flex items-center gap-2.5 rounded-full border border-[rgba(230,236,245,0.24)] bg-[rgba(7,9,14,0.45)] px-3.5 py-1.5 text-[0.64rem] tracking-[0.18em] text-[#dbe6f4] backdrop-blur">
                  <span className="relative flex h-2 w-2" aria-hidden="true">
                    <span className="absolute inset-0 rounded-full bg-[#e6ecf5]" />
                    <span className="absolute inset-0 animate-ping rounded-full bg-[#e6ecf5] opacity-40" />
                  </span>
                  {copy.eyebrow}
                </span>
                <span className="flex items-center gap-2 text-[0.68rem] tracking-[0.08em] text-[#9aa3b2]">
                  <span className="tabular-nums">{numericDate}</span>
                  <span className="h-3 w-px bg-[rgba(184,199,220,0.28)]" />
                  <span>{today}</span>
                </span>
              </div>

              <h1
                id="fortune-first-heading"
                className="mt-8 text-[2.15rem] font-light leading-[1.16] tracking-[-0.03em] text-[#f6f9fd] text-keep-all sm:text-[2.9rem] lg:text-[3.25rem]"
              >
                <span className="block font-display">{copy.titleLead}</span>
                <span className="mt-1 block font-display text-[2.5rem] italic leading-[1.1] text-[#e6ecf5] [text-shadow:0_0_38px_rgba(230,236,245,0.35)] sm:text-[3.4rem] lg:text-[3.8rem]">
                  {copy.titleAccent}
                </span>
                <span className="mt-2 block font-display text-[1.6rem] font-normal text-[#c2ccdb] sm:text-[2rem]">
                  {copy.titleTail}
                </span>
              </h1>

              <p className="mx-auto mt-7 max-w-lg text-[0.9rem] leading-8 text-[#b6bec9] text-keep-all lg:mx-0">
                {copy.description}
              </p>

              <div className="mt-7 flex flex-wrap items-center justify-center gap-2 lg:justify-start" aria-label={copy.privacy}>
                {copy.trust.map((item) => (
                  <span key={item} className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(184,199,220,0.18)] bg-[rgba(7,9,14,0.35)] px-2.5 py-1 text-[0.68rem] text-[#b6bec9]">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-[#e6ecf5]">
                      <path d="M5 12.5l4.2 4.2L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-9 hidden items-center gap-5 border-t border-[rgba(184,199,220,0.16)] pt-5 lg:flex">
                {copy.statLabels.map((label, i) => (
                  <div key={label} className={`flex items-baseline gap-2 ${i > 0 ? 'border-l border-[rgba(184,199,220,0.16)] pl-5' : ''}`}>
                    <span className="text-[0.72rem] tracking-[0.04em] text-[#b6bec9]">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div id="birth-chart" className="home-ritual-form scroll-mt-28">
              <div className="mb-3 flex items-center justify-between px-1">
                <span className="text-[0.6rem] uppercase tracking-[0.2em] text-[#b8c7dc]">
                  {copy.formKicker}
                </span>
                <span className="flex items-center gap-1.5 text-[0.6rem] tabular-nums tracking-[0.16em] text-[#7f8899]">
                  <svg width="10" height="10" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <circle cx="8" cy="8" r="6.4" stroke="currentColor" strokeWidth="0.9" />
                    <path d="M11.4 4.6A4.6 4.6 0 108 12.6" stroke="currentColor" strokeWidth="0.9" />
                  </svg>
                  01 / 01
                </span>
              </div>
              <FortuneForm onSubmit={onSubmit} isLoading={isLoading} lang={lang} error={error} />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20 w-full" aria-labelledby="reading-paths-heading">
        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow">{copy.pathsKicker}</span>
            <h2 id="reading-paths-heading" className="section-heading mt-4">
              {copy.pathsTitle}
            </h2>
          </div>
          <p className="max-w-sm text-[0.78rem] leading-6 text-[#9aa3b2] text-keep-all">
            {copy.pathsDescription}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {READING_PATHS.map((item) => (
            <PathCard key={item.href} item={item} lang={lang} />
          ))}
        </div>
      </section>
    </>
  );
}

export function ResultNextSteps({ lang }: { lang: Lang }) {
  const copy = COPY[lang];

  return (
    <section
      className="relative mx-auto mt-14 w-full max-w-4xl"
      aria-labelledby="result-next-heading"
    >
      <MoonGlow className="left-1/2 top-[-9rem] h-[26rem] w-[26rem] -translate-x-1/2 opacity-60" />
      <div className="relative mb-7 text-center">
        <span className="eyebrow eyebrow-center mx-auto">Continue the reading</span>
        <h2 id="result-next-heading" className="section-heading mt-4">
          {copy.relatedTitle}
        </h2>
        <p className="mx-auto mt-3 max-w-md text-[0.82rem] leading-6 text-[#9aa3b2] text-keep-all">{copy.relatedDescription}</p>
      </div>
      <RelatedLinks lang={lang} location="result" />
    </section>
  );
}
