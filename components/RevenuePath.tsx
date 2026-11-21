'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import FortuneForm from '@/components/FortuneForm';
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
  statLabels: [string, string, string];
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
    statLabels: ['12 별자리', '4개 언어', '매일 갱신'],
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
    statLabels: ['12 signs', '4 languages', 'Daily'],
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
    statLabels: ['12星座', '4种语言', '每日更新'],
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
    statLabels: ['12星座', '4言語', '毎日更新'],
  },
};

const RELATED_ITEMS = [
  {
    href: '/card-draw',
    index: '01',
    ko: ['그 사람에게 연락 올까?', '오늘의 타로 한 장 뽑기'],
    en: ['Will they contact me?', 'Draw today’s tarot card'],
    zh: ['对方会联系我吗？', '抽取今日塔罗牌'],
    ja: ['あの人から連絡は来る？', '今日のタロットを引く'],
  },
  {
    href: '/guide/zodiac-compatibility',
    index: '02',
    ko: ['우리 둘은 얼마나 잘 맞을까?', '12별자리 궁합 분석'],
    en: ['How compatible are we?', 'Zodiac compatibility guide'],
    zh: ['我们有多般配？', '十二星座配对指南'],
    ja: ['二人の相性は？', '12星座相性ガイド'],
  },
  {
    href: '/blog/2026-yearly-horoscope',
    index: '03',
    ko: ['2026년 하반기, 내 별자리 운은?', '연애·재물·직업운 미리 보기'],
    en: ['What does late 2026 hold for your sign?', 'Preview love, money, and career trends'],
    zh: ['2026年下半年，你的星座运势如何？', '提前查看爱情、财运与事业趋势'],
    ja: ['2026年後半、あなたの星座運は？', '恋愛・金運・仕事運を先取り'],
  },
] as const;

/** Fine line-art zodiac wheel for the cream hero. */
function LineArtWheel({ className = '' }: { className?: string }) {
  const ticks = Array.from({ length: 72 }, (_, i) => i);
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden="true" fill="none">
      <circle cx="200" cy="200" r="186" stroke="rgba(20,23,43,0.14)" strokeWidth="0.8" />
      <circle cx="200" cy="200" r="158" stroke="rgba(169,128,63,0.28)" strokeWidth="0.7" strokeDasharray="1 8" />
      {ticks.map((i) => {
        const angle = (i / ticks.length) * Math.PI * 2;
        const long = i % 6 === 0;
        const r1 = long ? 176 : 181;
        return (
          <line
            key={i}
            x1={200 + Math.cos(angle) * r1}
            y1={200 + Math.sin(angle) * r1}
            x2={200 + Math.cos(angle) * 186}
            y2={200 + Math.sin(angle) * 186}
            stroke={long ? 'rgba(20,23,43,0.3)' : 'rgba(20,23,43,0.14)'}
            strokeWidth={long ? 0.9 : 0.6}
          />
        );
      })}
      <path
        d="M118 238 L160 204 L194 214 L230 166 L266 180 L294 140"
        stroke="rgba(20,23,43,0.34)"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      {[[118, 238], [160, 204], [194, 214], [230, 166], [266, 180], [294, 140]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 5 ? 2.4 : 1.6} fill="rgba(20,23,43,0.55)" />
      ))}
      <circle cx="200" cy="200" r="120" stroke="rgba(20,23,43,0.08)" strokeWidth="0.7" />
    </svg>
  );
}

function RelatedLinks({ lang, location }: { lang: Lang; location: 'home' | 'result' }) {
  const isHome = location === 'home';
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      {RELATED_ITEMS.map((item, index) => {
        const [title, description] = item[lang];
        const isLead = isHome && index === 0;
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => trackEvent('related_content_click', {
              content_path: item.href,
              click_location: location,
              language: lang,
            })}
            className={`group relative flex flex-col justify-between p-6 transition-all duration-500 hover:-translate-y-1 focus-visible:outline-none ${
              isLead
                ? 'border border-[rgba(226,205,162,0.22)] bg-[linear-gradient(155deg,#141a35,#0e142b)] text-[#f7f0e1]'
                : 'card-lux hover:border-[rgba(169,128,63,0.45)]'
            }`}
            style={{ borderRadius: '0.5rem' }}
          >
            <div className="flex items-start justify-between gap-3">
              <span className={`font-display text-[1.5rem] italic leading-none ${isLead ? 'text-[rgba(226,205,162,0.75)]' : 'text-[rgba(169,128,63,0.55)]'}`}>
                {item.index}
              </span>
              <span className={`text-[0.8rem] transition-transform duration-300 group-hover:translate-x-1 ${isLead ? 'text-[rgba(226,205,162,0.7)]' : 'text-[var(--gold)]'}`}>
                →
              </span>
            </div>
            <div className="mt-8">
              <h3 className={`font-display font-semibold leading-snug text-keep-all ${isLead ? 'text-[1.25rem]' : 'text-[1.02rem]'} ${isLead ? '' : 'text-[var(--ink)]'}`}>
                {title}
              </h3>
              <p className={`mt-2 text-[0.76rem] leading-6 text-keep-all ${isLead ? 'text-[rgba(247,240,225,0.6)]' : 'text-[var(--muted)]'}`}>{description}</p>
            </div>
          </Link>
        );
      })}
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

  const trustItems = lang === 'ko'
    ? ['무료', '입력정보 저장 안 함', '매일 갱신']
    : lang === 'ja'
      ? ['無料', '入力情報を保存しない', '毎日更新']
      : lang === 'zh'
        ? ['免费', '不保存输入信息', '每日更新']
        : ['Free', 'No profile storage', 'Updated daily'];

  return (
    <section className="relative mx-auto mb-16 w-full max-w-6xl" aria-labelledby="fortune-first-heading">
      <div className="pointer-events-none absolute -right-10 -top-16 hidden w-[30rem] opacity-70 md:block">
        <LineArtWheel className="h-auto w-full" />
      </div>

      <div className="home-ritual-grid relative">
        <div className="home-ritual-copy relative">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 lg:justify-start">
            <span className="eyebrow">{copy.eyebrow}</span>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3 text-[0.66rem] tracking-[0.24em] text-[var(--muted-2)] lg:justify-start">
            <span className="font-display text-[0.92rem] italic tracking-[0.12em] text-[var(--gold)]">{numericDate}</span>
            <span className="h-3 w-px bg-[rgba(169,128,63,0.4)]" />
            <span className="min-h-4">{today}</span>
          </div>

          <h1
            id="fortune-first-heading"
            className="mt-5 font-display text-[2.4rem] font-semibold leading-[1.12] text-[var(--ink)] text-keep-all sm:text-[3.3rem] lg:text-[3.85rem]"
          >
            <span className="block">{copy.titleLead}</span>
            <span className="block italic text-[var(--gold)]">{copy.titleAccent}</span>
            <span className="block">{copy.titleTail}</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-[0.92rem] leading-8 text-[var(--muted)] text-keep-all sm:text-[0.98rem] lg:mx-0">
            {copy.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 lg:justify-start" aria-label={copy.privacy}>
            {trustItems.map((item) => (
              <span key={item} className="inline-flex items-center gap-2 text-[0.72rem] tracking-[0.05em] text-[var(--muted)]">
                <span className="h-1 w-1 rotate-45 bg-[var(--gold)]" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 hidden items-center gap-8 border-t border-[var(--line)] pt-5 lg:flex">
            {copy.statLabels.map((label, i) => (
              <div key={label} className={i > 0 ? 'border-l border-[var(--line)] pl-8' : ''}>
                <p className="font-display text-[1.05rem] font-semibold text-[var(--ink)]">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="home-ritual-form">
          <div className="mb-3 flex items-center justify-between px-1">
            <span className="text-[0.58rem] font-semibold uppercase tracking-[0.3em] text-[var(--gold)]">
              {copy.formKicker}
            </span>
            <span className="text-[0.58rem] uppercase tracking-[0.2em] text-[var(--muted-2)]">01 / 01</span>
          </div>
          <FortuneForm onSubmit={onSubmit} isLoading={isLoading} lang={lang} error={error} />
        </div>
      </div>

      <div className="mt-16 border-t border-[var(--line)] pt-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="font-display text-[1.15rem] font-semibold text-[var(--ink)]">
            {copy.moreTitle}
          </h2>
          <span className="hidden text-[0.58rem] uppercase tracking-[0.3em] text-[var(--muted-2)] sm:block">
            Explore
          </span>
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
      className="card-lux mx-auto mt-8 w-full max-w-2xl p-5 sm:p-7"
      aria-labelledby="result-next-heading"
    >
      <div className="mb-6 text-center">
        <span className="eyebrow eyebrow-center mx-auto">Next</span>
        <h2 id="result-next-heading" className="mt-3 font-display text-xl font-semibold text-[var(--ink)]">{copy.relatedTitle}</h2>
        <p className="mt-2 text-[0.82rem] leading-6 text-[var(--muted)]">{copy.relatedDescription}</p>
      </div>
      <RelatedLinks lang={lang} location="result" />
    </section>
  );
}
