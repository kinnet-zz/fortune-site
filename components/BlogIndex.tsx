'use client';

import Link from 'next/link';
import { CardArtwork, type ArtworkVariant } from '@/components/Artwork';
import { BLOG_ARTICLES, formatArticleDate } from '@/lib/blog-articles';
import { useLang } from '@/lib/useLang';
import { siteCopy } from '@/lib/site-copy';
import type { Lang } from '@/lib/i18n';

const HOME_LABEL: Record<Lang, string> = { ko: '홈', en: 'Home', zh: '首页', ja: 'ホーム' };

const CATEGORY_ART: { match: string; variant: ArtworkVariant }[] = [
  { match: '궁합', variant: 'compatibility' },
  { match: '달', variant: 'moon' },
  { match: '행성', variant: 'orbit' },
  { match: '심리', variant: 'journal' },
  { match: '역사', variant: 'scroll' },
  { match: '문화', variant: 'zodiac' },
  { match: '커리어', variant: 'numbers' },
  { match: '점성술', variant: 'astrology' },
  { match: '운세', variant: 'yearly' },
];

function artworkFor(categoryKo: string): ArtworkVariant {
  return CATEGORY_ART.find((entry) => categoryKo.includes(entry.match))?.variant ?? 'journal';
}

export default function BlogIndex() {
  const { lang } = useLang();
  const copy = siteCopy(lang);
  const featured = BLOG_ARTICLES[BLOG_ARTICLES.length - 1];
  const rest = BLOG_ARTICLES.slice(0, -1).slice().reverse();
  const categories = Array.from(new Set(BLOG_ARTICLES.map((a) => a.category[lang])));
  const readLabel = (minutes: number) => copy.minutesRead(minutes);

  return (
    <div className="relative min-h-screen bg-[#101620]">
      <section className="relative overflow-hidden border-b border-[rgba(184,199,220,0.14)]">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 46% 70% at 88% -20%, rgba(206,220,238,0.07) 0%, transparent 64%)' }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-5 pb-12 pt-10 sm:px-6 sm:pt-16">
          <nav className="flex items-center gap-2 text-[0.76rem] text-[#9aa3b2]" aria-label={copy.brandTagline}>
            <Link href="/" className="transition-colors hover:text-[#e6ecf5]">
              {HOME_LABEL[lang]}
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#bdc5d1]">{copy.info.blogTitle}</span>
          </nav>
          <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="eyebrow">The journal</span>
              <h1 className="mt-4 text-[2.4rem] font-bold leading-[1.08] tracking-[-0.04em] text-[#f2f0ea] sm:text-[3.2rem]">
                {copy.blog.titleLead}
                <span className="font-display font-semibold italic text-[#e6ecf5]">{copy.blog.titleAccent}</span>
              </h1>
              <p className="mt-4 max-w-xl text-[0.92rem] leading-8 text-[#9aa3b2] text-keep-all">{copy.blog.intro}</p>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-[rgba(184,199,220,0.14)] bg-[#101620] px-3.5 py-2">
              <span className="text-[0.95rem] font-bold tabular-nums text-[#f2f0ea]">{BLOG_ARTICLES.length}</span>
              <span className="text-[0.66rem] uppercase tracking-[0.1em] text-[#9aa3b2]">{copy.blog.articlesUnit}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6">
        <Link
          href="/blog/daily"
          className="group mb-10 flex flex-col gap-4 rounded-2xl border border-[rgba(184,199,220,0.14)] bg-[#121722] p-5 transition-all duration-300 hover:border-[rgba(184,199,220,0.28)] hover:bg-[#101620] hover:shadow-[0_18px_40px_-26px_rgba(0,0,0,0.25)] sm:flex-row sm:items-center sm:p-6"
        >
          <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl border border-[rgba(184,199,220,0.14)] bg-[#101620] text-[#e6ecf5]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.16" stroke="currentColor" strokeWidth="1.3" />
              <path d="M12 2.6v2.2M12 19.2v2.2M2.6 12h2.2M19.2 12h2.2M5.4 5.4l1.6 1.6M17 17l1.6 1.6M18.6 5.4L17 7M7 17l-1.6 1.6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
          </div>
          <div className="flex-1">
            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#e6ecf5]">
              {copy.blog.dailyKicker}
            </span>
            <h2 className="mt-1.5 text-[1.15rem] font-bold tracking-[-0.03em] text-[#f2f0ea] sm:text-[1.35rem]">{copy.blog.dailyTitle}</h2>
            <p className="mt-1 text-[0.8rem] text-[#9aa3b2]">{copy.blog.dailyDesc}</p>
          </div>
          <span className="inline-flex items-center gap-2 text-[0.8rem] font-semibold text-[#e6ecf5] transition-transform duration-300 group-hover:translate-x-1">
            {copy.blog.dailyCta} <span aria-hidden="true">→</span>
          </span>
        </Link>

        <div className="mb-8 flex flex-wrap items-center gap-2">
          <span className="mr-1 text-[0.66rem] uppercase tracking-[0.12em] text-[#9aa3b2]">{copy.blog.topicsLabel}</span>
          {categories.map((cat) => (
            <span key={cat} className="tag-quiet">{cat}</span>
          ))}
        </div>

        <Link
          href={`/blog/${featured.slug}`}
          className="group mb-6 grid gap-6 overflow-hidden rounded-2xl border border-[rgba(184,199,220,0.14)] bg-[#101620] p-2 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(184,199,220,0.28)] hover:shadow-[0_24px_50px_-30px_rgba(0,0,0,0.28)] lg:grid-cols-[1.05fr_1fr] lg:items-stretch"
        >
          <CardArtwork variant={artworkFor(featured.category.ko)} className="!aspect-auto min-h-[13rem] lg:h-full" />
          <div className="flex flex-col justify-between px-4 pb-4 pt-2 lg:px-6 lg:py-6">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="tag">{copy.blog.featuredLabel}</span>
                <span className="text-[0.7rem] text-[#9aa3b2]">
                  {formatArticleDate(featured.date, lang)} · {readLabel(featured.minutes)}
                </span>
              </div>
              <h2 className="mt-4 text-[1.4rem] font-bold leading-snug tracking-[-0.03em] text-[#f2f0ea] text-keep-all sm:text-[1.75rem]">
                {featured.title[lang]}
              </h2>
              <p className="mt-3 text-[0.84rem] leading-7 text-[#9aa3b2] text-keep-all">{featured.description[lang]}</p>
            </div>
            <div className="mt-5 flex items-center gap-3 border-t border-[rgba(184,199,220,0.10)] pt-4">
              <span className="text-[0.7rem] font-medium uppercase tracking-[0.08em] text-[#9aa3b2]">{featured.category[lang]}</span>
              <span className="ml-auto inline-flex items-center gap-2 text-[0.8rem] font-semibold text-[#e6ecf5]">
                {copy.blog.readSuffix} <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </div>
          </div>
        </Link>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[rgba(184,199,220,0.14)] bg-[#101620] p-2 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(184,199,220,0.28)] hover:shadow-[0_18px_40px_-26px_rgba(0,0,0,0.28)]"
            >
              <CardArtwork variant={artworkFor(article.category.ko)} />
              <div className="flex flex-1 flex-col px-2.5 pb-2 pt-3.5">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <span className="tag">{article.category[lang]}</span>
                  <span className="text-[0.64rem] text-[#9aa3b2]">{readLabel(article.minutes)}</span>
                </div>
                <h2 className="text-[0.98rem] font-semibold leading-snug tracking-[-0.02em] text-[#f2f0ea] text-keep-all transition-colors group-hover:text-[#e6ecf5]">
                  {article.title[lang]}
                </h2>
                <p className="mt-2 line-clamp-2 text-[0.76rem] leading-5 text-[#9aa3b2] text-keep-all">
                  {article.description[lang]}
                </p>
                <div className="mt-auto flex items-center justify-between border-t border-[rgba(184,199,220,0.10)] pt-3 text-[0.68rem] text-[#9aa3b2]">
                  <span>{formatArticleDate(article.date, lang)}</span>
                  <span>{readLabel(article.minutes)}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 rounded-[24px] border border-[rgba(184,199,220,0.14)] bg-[#121722] px-6 py-10 text-center">
          <span className="eyebrow eyebrow-center">Daily reading</span>
          <p className="text-[1.2rem] font-bold tracking-[-0.03em] text-[#f2f0ea]">{copy.blog.ctaTitle}</p>
          <Link href="/" className="btn-primary mt-1 text-[0.88rem]">
            {copy.blog.ctaButton} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
