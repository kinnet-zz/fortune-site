'use client';

import Link from 'next/link';
import { useEffect, type ReactNode } from 'react';
import type { BlogArticle } from '@/lib/blog-articles';
import { formatArticleDate } from '@/lib/blog-articles';
import {
  ARTICLE_UI,
  type ArticleBlock,
  type ArticleBody,
  type ArticleSection,
  type BlogArticleContent,
  type Tone,
} from '@/lib/blog-content/types';
import { normalizeLang } from '@/lib/i18n';
import { siteCopy } from '@/lib/site-copy';
import { useLang } from '@/lib/useLang';

const TONE_STYLE: Record<Tone, { background: string; border: string; title: string }> = {
  neutral: { background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.06)', title: '#f2f0ea' },
  warm: { background: 'rgba(255,150,50,0.08)', border: '1px solid rgba(255,150,50,0.2)', title: '#fcd9a8' },
  cool: { background: 'rgba(100,140,255,0.08)', border: '1px solid rgba(100,140,255,0.2)', title: '#b9c8f4' },
  positive: { background: 'rgba(52,168,110,0.09)', border: '1px solid rgba(52,168,110,0.2)', title: '#a9dcc2' },
  caution: { background: 'rgba(200,110,110,0.09)', border: '1px solid rgba(200,110,110,0.22)', title: '#e2b2b2' },
  accent: { background: 'rgba(206,220,238,0.12)', border: '1px solid rgba(206,220,238,0.28)', title: '#e6ecf5' },
};

/** Renders paragraphs that may contain **bold** spans. */
function inline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean).map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return (
        <strong key={index} className="text-[#f2f0ea]">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

function Block({ block }: { block: ArticleBlock }) {
  switch (block.t) {
    case 'p':
      return <p className="mb-3">{inline(block.text)}</p>;
    case 'h3':
      return <h3 className="mb-2 mt-4 text-[#f2f0ea] font-semibold">{inline(block.text)}</h3>;
    case 'ul':
      return (
        <ul className="mb-3 space-y-2 pl-4 list-disc">
          {block.items.map((item, index) => (
            <li key={index}>{inline(item)}</li>
          ))}
        </ul>
      );
    case 'ol':
      return (
        <ol className="mb-3 space-y-2 pl-4 list-decimal">
          {block.items.map((item, index) => (
            <li key={index}>{inline(item)}</li>
          ))}
        </ol>
      );
    case 'note':
      return <p className="mt-2 text-xs text-[#9aa3b2]">{inline(block.text)}</p>;
    case 'links':
      return (
        <ul className="my-4 space-y-2 text-xs leading-6 text-[#9aa3b2]">
          {block.items.map((item, index) => (
            <li key={index}>
              <a href={item.href} target="_blank" rel="noreferrer" className="text-[#e6ecf5] transition-colors hover:text-[#f2f0ea]">
                {item.label}
              </a>
              {item.note ? ` — ${item.note}` : null}
            </li>
          ))}
        </ul>
      );
    case 'image':
      return (
        <figure className="my-8 overflow-hidden rounded-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={block.src} alt={block.alt} className="w-full object-cover" style={{ maxHeight: 360 }} />
          {block.caption && <figcaption className="mt-2 px-1 text-xs text-[#9aa3b2]">{block.caption}</figcaption>}
        </figure>
      );
    case 'box':
      return (
        <div
          className="rounded-2xl p-5 my-4"
          style={{ background: TONE_STYLE[block.tone ?? 'neutral'].background, border: TONE_STYLE[block.tone ?? 'neutral'].border }}
        >
          {block.title && (
            <h3 className="mb-2 text-sm font-semibold" style={{ color: TONE_STYLE[block.tone ?? 'neutral'].title }}>
              {inline(block.title)}
            </h3>
          )}
          <p className="text-[#f2f0ea]/72 text-sm leading-relaxed">{inline(block.text)}</p>
        </div>
      );
    case 'cards':
      return (
        <div className="my-4 space-y-3">
          {block.items.map((item, index) => {
            const tone = TONE_STYLE[item.tone ?? 'neutral'];
            return (
              <div key={index} className="rounded-2xl p-5" style={{ background: tone.background, border: tone.border }}>
                <h3 className="mb-2 text-sm font-bold" style={{ color: tone.title }}>
                  {inline(item.title)}
                </h3>
                {item.meta && <p className="mb-1 text-xs text-[#9aa3b2]">{inline(item.meta)}</p>}
                <p className="text-[#f2f0ea]/72 text-xs leading-relaxed">{inline(item.text)}</p>
              </div>
            );
          })}
        </div>
      );
    case 'table':
      return (
        <div className="my-4 overflow-x-auto">
          <table className="w-full text-xs border border-white/10 rounded-xl overflow-hidden">
            <thead>
              <tr style={{ background: 'rgba(0,0,0,0.05)' }}>
                {block.head.map((cell, index) => (
                  <th key={index} className="px-3 py-2 text-left text-[#f2f0ea]">{cell}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="border-t border-white/10">
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="px-3 py-2 text-[#bdc5d1]">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
}

function Section({ section }: { section: ArticleSection }) {
  return (
    <section>
      {section.heading && (
        <h2 className="text-xl font-bold text-[#f2f0ea] mb-4">{section.heading}</h2>
      )}
      {section.blocks.map((block, index) => (
        <Block key={index} block={block} />
      ))}
    </section>
  );
}

export interface BlogArticleViewProps {
  article: BlogArticle;
  content: BlogArticleContent;
  /** Article objects for the two related links. */
  related?: BlogArticle[];
}

export default function BlogArticleView({ article, content, related = [] }: BlogArticleViewProps) {
  const { lang: rawLang } = useLang();
  const lang = normalizeLang(rawLang);
  const copy = siteCopy(lang);
  const ui = ARTICLE_UI[lang];
  const body: ArticleBody = content[lang] ?? content.ko;

  // The page metadata is written once at build time, so the tab title follows
  // the reader's language here.
  useEffect(() => {
    document.title = `${article.title[lang]} | StarFate`;
  }, [article, lang]);

  const pageUrl = `https://starfate.day/blog/${article.slug}`;
  const inLanguage = lang === 'ko' ? 'ko-KR' : lang === 'ja' ? 'ja-JP' : 'en-US';
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title[lang],
    description: article.description[lang],
    datePublished: article.date,
    mainEntityOfPage: pageUrl,
    author: { '@type': 'Organization', name: copy.blog.authorName },
    publisher: { '@type': 'Organization', name: 'StarFate', url: 'https://starfate.day' },
    inLanguage,
  };

  return (
    <div style={{ background: '#101620', minHeight: '100vh' }}>
      <article className="max-w-3xl mx-auto px-6 py-16 text-[#f2f0ea]/80">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
        />
        <Link href="/blog" className="text-[#e6ecf5] hover:text-[#e6ecf5] text-sm mb-8 inline-block">
          {ui.back}
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span
              className="px-2 py-0.5 rounded-full text-xs font-medium"
              style={{ background: 'rgba(206,220,238,0.14)', color: '#e6ecf5' }}
            >
              {article.category[lang]}
            </span>
            <span className="text-[#9aa3b2] text-xs">
              {formatArticleDate(article.date, lang)} · {copy.minutesRead(article.minutes)}
            </span>
          </div>
          <h1 className="text-3xl font-bold text-[#f2f0ea] mb-4 leading-tight">
            {article.title[lang]}
          </h1>
          <p className="text-[#bdc5d1] text-base leading-relaxed">{body.intro}</p>
        </header>

        <div className="space-y-8 text-sm leading-relaxed">
          {body.sections.map((section, index) => (
            <Section key={index} section={section} />
          ))}
        </div>

        <div
          className="mt-12 p-6 rounded-2xl text-center"
          style={{ background: 'rgba(206,220,238,0.1)', border: '1px solid rgba(206,220,238,0.14)' }}
        >
          <p className="text-[#bdc5d1] mb-4 text-sm">{body.cta}</p>
          <Link
            href="/"
            className="inline-block px-6 py-3 rounded-full font-bold text-[#101620] text-sm"
            style={{ background: 'linear-gradient(135deg, #e6ecf5 0%, #f4f8fd 100%)' }}
          >
            {ui.ctaButton}
          </Link>
        </div>

        {related.length > 0 && (
          <nav className="mt-10">
            <h3 className="text-sm text-[#9aa3b2] mb-3 font-semibold uppercase tracking-widest">{ui.related}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  className="p-4 rounded-xl text-sm transition-colors hover:border-[#3a4a61]"
                  style={{ background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.06)' }}
                >
                  <div className="text-[#f2f0ea]/72 font-medium">
                    {item.emoji} {item.title[lang]}
                  </div>
                  <div className="text-[#9aa3b2] text-xs mt-1 line-clamp-2">{item.description[lang]}</div>
                </Link>
              ))}
            </div>
          </nav>
        )}
      </article>
    </div>
  );
}
