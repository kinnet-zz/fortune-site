'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    try { localStorage.setItem('cookie-consent', 'accepted'); } catch { /* QuotaExceededError 무시 */ }
    setVisible(false);
  };

  const decline = () => {
    try { localStorage.setItem('cookie-consent', 'declined'); } catch { /* QuotaExceededError 무시 */ }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div
        className="max-w-2xl mx-auto rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        style={{
          background: 'rgba(15, 10, 40, 0.95)',
          border: '1px solid rgba(139, 92, 246, 0.3)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <p className="text-white/70 text-sm flex-1">
          🍪 저희 사이트는 맞춤 광고 제공을 위해 쿠키를 사용합니다.{' '}
          <Link href="/privacy" className="text-purple-400 underline hover:text-purple-300">
            개인정보처리방침
          </Link>
        </p>
        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 rounded-xl text-sm text-white/50 hover:text-white/80 border border-white/10 hover:border-white/20 transition-colors"
          >
            거부
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 rounded-xl text-sm font-semibold text-white transition-colors"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)' }}
          >
            동의
          </button>
        </div>
      </div>
    </div>
  );
}
