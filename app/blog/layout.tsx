'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { useLang } from '@/lib/useLang';
import { siteCopy } from '@/lib/site-copy';

export default function BlogLayout({ children }: { children: ReactNode }) {
  const { lang } = useLang();
  const pathname = usePathname();
  const copy = siteCopy(lang);
  const isIndex = pathname === '/blog';
  // Article bodies are written in every offered language now, so the
  // "Korean original" notice is only shown if a notice text is defined again.
  const showNotice = !isIndex && Boolean(copy.articleNotice.trim());

  return (
    <>
      {showNotice && (
        <div className="border-b border-[rgba(184,199,220,0.14)] bg-[#121722]">
          <div className="mx-auto flex max-w-3xl items-start gap-2.5 px-5 py-3 text-[0.76rem] leading-6 text-[#9aa3b2]">
            <span aria-hidden="true" className="mt-0.5 text-[#e6ecf5]">✦</span>
            <p className="text-keep-all">{copy.articleNotice}</p>
          </div>
        </div>
      )}
      {children}
      <div className="border-t border-[rgba(184,199,220,0.14)] bg-[#121722]">
        <div className="mx-auto max-w-3xl px-6 py-10">
          <div className="flex items-start gap-4 rounded-2xl border border-[rgba(184,199,220,0.14)] bg-[#101620] p-6">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#1b2231] text-[0.95rem] font-bold text-[#e6ecf5]">
              S
            </div>
            <div>
              <div className="mb-1.5 flex flex-wrap items-center gap-2">
                <span className="text-[0.88rem] font-semibold text-[#f2f0ea]">{copy.blog.authorName}</span>
                <span className="rounded-full bg-[rgba(184,199,220,0.10)] px-2 py-0.5 text-[0.68rem] text-[#525f72]">
                  {copy.blog.authorRole}
                </span>
              </div>
              <p className="text-[0.78rem] leading-6 text-[#9aa3b2] text-keep-all">{copy.blog.authorBio}</p>
              <div className="mt-3 flex gap-4">
                <Link href="/about" className="text-[0.75rem] font-medium text-[#e6ecf5] transition-colors hover:text-[#dbe6f4]">
                  {copy.blog.aboutLink} →
                </Link>
                <Link href="/contact" className="text-[0.75rem] font-medium text-[#e6ecf5] transition-colors hover:text-[#dbe6f4]">
                  {copy.blog.contactLink} →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
