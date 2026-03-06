'use client';

import { type ReactNode } from 'react';

// LangProvider is now a no-op wrapper kept for layout.tsx compatibility.
// Language state is managed by the singleton store in useLang.ts,
// which works reliably across all React roots in Next.js App Router.
export function LangProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
