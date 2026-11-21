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

const COPY: Record<Lang, {
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  titleTail: string;
  description: string;
  privacy: string;
  moreTitle: string;
  relatedTitle: string;
  relatedDescription: string;
  formKicker: string;
  browse: string;
  viewAll: string;
  cardCta: string;
  statLabels: string[];
  trust: string[];
}> = {
  ko: {
    eyebrow: 'StarFate · 오늘의 리딩',
    titleLead: '설명보다 먼저,',
    titleAccent: '오늘의 운세',
    titleTail: '바로 확인하세요',
    description: '생년월일로 별자리와 띠를 계산해 종합운·연애운·금전운·직업운을 한 장의 리딩으로 보여드립니다.',
    privacy: '입력한 생년월일은 결과 계산에만 사용하며 프로필로 저장하지 않습니다.',
    moreTitle: '운세를 본 다음 많이 찾는 콘텐츠',
    relatedTitle: '결과와 함께 보면 더 재미있는 콘텐츠',
    relatedDescription: '한 번의 운세 확인으로 끝내지 말고, 궁합과 타로까지 이어서 확인해보세요.',
    formKicker: 'Birth chart reading',
    browse: '둘러보기',
    viewAll: '전체 보기',
    cardCta: '보기',
    statLabels: ['12개 별자리 해석', '4개 언어 지원', '매일 갱신'],
    trust: ['무료', '입력정보 저장 안 함', '매일 갱신'],
  },
  en: {
    eyebrow: 'StarFate · Daily reading',
    titleLead: 'Before the guide,',
    titleAccent: 'today’s fortune',
    titleTail: 'in ten seconds',
    description: 'Use your birth date to see your overall, love, money, and career reading in a single card.',
    privacy: 'Your birth date is used only for this calculation and is not saved as a profile.',
    moreTitle: 'Popular next reads',
    relatedTitle: 'Continue your reading',
    relatedDescription: 'Explore compatibility, tarot, and today’s zodiac readings next.',
    formKicker: 'Birth chart reading',
    browse: 'Browse all',
    viewAll: 'View all',
    cardCta: 'Open',
    statLabels: ['12 sign guides', '4 languages', 'Updated daily'],
    trust: ['Free', 'No profile storage', 'Updated daily'],
  },
  zh: {
    eyebrow: 'StarFate · 今日运势',
    titleLead: '先看运势，',
    titleAccent: '今日运势',
    titleTail: '十秒即可',
    description: '输入生日即可查看综合运、爱情运、财运和事业运的完整解读。',
    privacy: '生日仅用于本次计算，不会保存为个人资料。',
    moreTitle: '大家接着查看的内容',
    relatedTitle: '继续探索你的运势',
    relatedDescription: '接着查看星座配对、塔罗牌和今日星座运势。',
    formKicker: 'Birth chart reading',
    browse: '浏览全部',
    viewAll: '查看全部',
    cardCta: '查看',
    statLabels: ['12星座解读', '4种语言', '每日更新'],
    trust: ['免费', '不保存输入信息', '每日更新'],
  },
  ja: {
    eyebrow: 'StarFate · 今日のリーディング',
    titleLead: 'ガイドの前に、',
    titleAccent: '今日の運勢',
    titleTail: '10秒で確認',
    description: '生年月日から総合運・恋愛運・金運・仕事運を一枚のリーディングにまとめます。',
    privacy: '生年月日は今回の計算にのみ使用し、プロフィールとして保存しません。',
    moreTitle: '次によく見られるコンテンツ',
    relatedTitle: '運勢をさらに楽しむ',
    relatedDescription: '星座相性、タロット、今日の星座運勢も続けて確認できます。',
    formKicker: 'Birth chart reading',
    browse: 'すべて見る',
    viewAll: 'すべて見る',
    cardCta: '見る',
    statLabels: ['12星座の解説', '4言語対応', '毎日更新'],
    trust: ['無料', '入力情報を保存しない', '毎日更新'],
  },
};

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

function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 46% 52% at 88% 2%, rgba(59,91,219,0.07) 0%, transparent 68%), radial-gradient(ellipse 38% 40% at 2% 96%, rgba(15,23,42,0.035) 0%, transparent 70%)',
        }}
      />
      <svg className="absolute -right-24 -top-28 hidden h-[32rem] w-[32rem] text-[#3b5bdb] opacity-[0.16] md:block" viewBox="0 0 400 400" fill="none">
        <circle cx="200" cy="200" r="188" stroke="currentColor" strokeWidth="0.7" />
        <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="0.7" strokeDasharray="1 8" />
        <circle cx="200" cy="200" r="104" stroke="currentColor" strokeWidth="0.6" />
        <path d="M96 246L150 208l44 12 40-52 46 16 38-40" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
        {[[96, 246], [150, 208], [194, 220], [234, 168], [280, 184], [318, 144]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={i === 5 ? 2.6 : 1.7} fill="currentColor" />
        ))}
      </svg>
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
      className="group flex flex-col overflow-hidden rounded-2xl border border-[#e8eaef] bg-white p-2 transition-all duration-300 hover:-translate-y-1 hover:border-[#dcdfe6] hover:shadow-[0_18px_40px_-26px_rgba(15,23,42,0.28)]"
    >
      <CardArtwork variant={item.variant} />
      <div className="flex flex-1 flex-col px-2.5 pb-2 pt-3.5">
        <div className="mb-2 flex items-center gap-2">
          <span className="tag">{item.tag[lang]}</span>
        </div>
        <h3 className="text-[0.95rem] font-semibold leading-snug tracking-[-0.02em] text-[#0f172a] text-keep-all">
          {title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-[0.76rem] leading-5 text-[#64748b] text-keep-all">{description}</p>
        <span className="mt-3 flex items-center gap-1.5 text-[0.72rem] font-medium text-[#3b5bdb] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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
    <section className="relative mb-20 w-full" aria-labelledby="fortune-first-heading">
      <HeroBackdrop />

      <div className="home-ritual-grid relative">
        <div className="home-ritual-copy relative">
          <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#e8eaef] bg-white px-3 py-1.5 text-[0.68rem] font-medium text-[#475569] shadow-[0_1px_3px_rgba(15,23,42,0.04)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#3b5bdb]" aria-hidden="true" />
              {copy.eyebrow}
            </span>
            <span className="flex items-center gap-2 text-[0.7rem] text-[#64748b]">
              <span className="tabular-nums tracking-[0.06em]">{numericDate}</span>
              <span className="h-3 w-px bg-[#e2e5eb]" />
              <span>{today}</span>
            </span>
          </div>

          <h1
            id="fortune-first-heading"
            className="mt-7 text-[2.5rem] font-bold leading-[1.08] tracking-[-0.04em] text-[#0f172a] text-keep-all sm:text-[3.3rem] lg:text-[3.65rem]"
          >
            <span className="block">{copy.titleLead}</span>
            <span className="block font-display font-semibold italic tracking-[-0.02em] text-[#3b5bdb]">{copy.titleAccent}</span>
            <span className="block">{copy.titleTail}</span>
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-[0.95rem] leading-8 text-[#64748b] text-keep-all lg:mx-0">
            {copy.description}
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-2 lg:justify-start" aria-label={copy.privacy}>
            {copy.trust.map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5 rounded-full border border-[#e8eaef] bg-white/80 px-2.5 py-1 text-[0.7rem] text-[#64748b]">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-[#3b5bdb]">
                  <path d="M5 12.5l4.2 4.2L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </span>
            ))}
          </div>

          <div className="mt-9 hidden items-center gap-5 border-t border-[#e8eaef] pt-5 lg:flex">
            {copy.statLabels.map((label, i) => (
              <div key={label} className={`flex items-baseline gap-2 ${i > 0 ? 'border-l border-[#e8eaef] pl-5' : ''}`}>
                <span className="text-[0.78rem] font-medium text-[#475569]">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="home-ritual-form">
          <div className="mb-3 flex items-center justify-between px-1">
            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#64748b]">
              {copy.formKicker}
            </span>
            <span className="text-[0.62rem] tabular-nums tracking-[0.12em] text-[#64748b]">01 / 01</span>
          </div>
          <FortuneForm onSubmit={onSubmit} isLoading={isLoading} lang={lang} error={error} />
        </div>
      </div>

      <div className="mt-20 border-t border-[#e8eaef] pt-9">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <span className="eyebrow">{copy.browse}</span>
            <h2 className="mt-3 text-[1.3rem] font-bold tracking-[-0.03em] text-[#0f172a]">
              {copy.moreTitle}
            </h2>
          </div>
          <Link href="/blog" className="hidden min-h-9 items-center gap-1.5 text-[0.78rem] font-medium text-[#3b5bdb] hover:text-[#2741b3] sm:inline-flex">
            {copy.viewAll}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
        <RelatedLinks lang={lang} location="home" />
      </div>
    </section>
  );
}

export function ResultNextSteps({ lang }: { lang: Lang }) {
  const copy = COPY[lang];

  return (
    <section
      className="mx-auto mt-10 w-full max-w-3xl"
      aria-labelledby="result-next-heading"
    >
      <div className="mb-6 text-center">
        <span className="eyebrow eyebrow-center mx-auto">{copy.relatedTitle.split(' ')[0]}</span>
        <h2 id="result-next-heading" className="mt-3 text-[1.35rem] font-bold tracking-[-0.03em] text-[#0f172a]">
          {copy.relatedTitle}
        </h2>
        <p className="mt-2 text-[0.84rem] leading-6 text-[#64748b]">{copy.relatedDescription}</p>
      </div>
      <RelatedLinks lang={lang} location="result" />
    </section>
  );
}
