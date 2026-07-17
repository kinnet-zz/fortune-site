'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import {
  ADSENSE_READY_EVENT,
  CONSENT_CHANGED_EVENT,
  getCookieConsent,
  isAdSensePath,
  isNoIndexPage,
} from '@/lib/adConsent';

interface AdUnitProps {
  slot: string;
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  className?: string;
  style?: React.CSSProperties;
}

export default function AdUnit({ slot, format = 'auto', className = '', style }: AdUnitProps) {
  const adRef = useRef<HTMLModElement>(null);
  const initialized = useRef(false);
  const pathname = usePathname();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const syncConsent = () => {
      setEnabled(
        getCookieConsent() === 'accepted' &&
        isAdSensePath(pathname) &&
        !isNoIndexPage()
      );
    };
    syncConsent();
    window.addEventListener(CONSENT_CHANGED_EVENT, syncConsent);
    return () => window.removeEventListener(CONSENT_CHANGED_EVENT, syncConsent);
  }, [pathname]);

  useEffect(() => {
    if (!enabled) {
      initialized.current = false;
      return;
    }
    if (initialized.current) return;

    const initializeAd = () => {
      if (initialized.current) return;
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const adsbygoogle = (window as any).adsbygoogle;
        if (adsbygoogle) {
          adsbygoogle.push({});
          initialized.current = true;
        }
      } catch {
        // AdSense may still be loading. The ready event will retry once.
      }
    };

    initializeAd();
    window.addEventListener(ADSENSE_READY_EVENT, initializeAd);
    return () => window.removeEventListener(ADSENSE_READY_EVENT, initializeAd);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className={`ad-container overflow-hidden text-center ${className}`} style={style}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block', ...style }}
        data-ad-client="ca-pub-3314960461630607"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
