'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import IdolHeader from './IdolHeader';

export default function ConditionalHeader() {
  const pathname = usePathname();
  if (pathname.startsWith('/idol')) return <IdolHeader />;
  return <Header />;
}
