import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { getGuide } from '@/lib/guide-data';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) return {};

  return {
    title: `${guide.ko.title} | StarFate`,
    description: guide.ko.subtitle,
    alternates: { canonical: `/guide/${slug}` },
  };
}

export default function GuideLayout({ children }: { children: ReactNode }) {
  return children;
}
