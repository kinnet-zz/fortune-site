'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import {
  ADSENSE_READY_EVENT,
  CONSENT_CHANGED_EVENT,
  getCookieConsent,
  isAdSensePath,
  isNoIndexPage,
} from '@/lib/adConsent';

const GA_ID = 'G-5Q4N5V6BQK';
const ADSENSE_CLIENT = 'ca-pub-3314960461630607';

type GoogleWindow = Window & {
  dataLayer?: unknown[][];
  gtag?: (...args: unknown[]) => void;
};

function setGoogleConsent(command: 'default' | 'update', granted: boolean) {
  const googleWindow = window as GoogleWindow;
  googleWindow.dataLayer = googleWindow.dataLayer || [];
  googleWindow.gtag = googleWindow.gtag || function gtag(...args: unknown[]) {
    googleWindow.dataLayer?.push(args);
  };

  const state = granted ? 'granted' : 'denied';
  googleWindow.gtag('consent', command, {
    ad_storage: state,
    analytics_storage: state,
    ad_user_data: state,
    ad_personalization: state,
  });
}

function loadAnalytics() {
  const googleWindow = window as GoogleWindow;

  googleWindow.dataLayer = googleWindow.dataLayer || [];
  googleWindow.gtag = googleWindow.gtag || function gtag(...args: unknown[]) {
    googleWindow.dataLayer?.push(args);
  };
  googleWindow.gtag('js', new Date());
  googleWindow.gtag('config', GA_ID, { anonymize_ip: true });

  if (!document.getElementById('google-analytics-script')) {
    const script = document.createElement('script');
    script.id = 'google-analytics-script';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);
  }
}

function loadAdSense() {
  const existing = document.getElementById('google-adsense-script') as HTMLScriptElement | null;
  if (existing) {
    if (existing.dataset.loaded === 'true') {
      window.dispatchEvent(new Event(ADSENSE_READY_EVENT));
    }
    return;
  }

  const script = document.createElement('script');
  script.id = 'google-adsense-script';
  script.async = true;
  script.crossOrigin = 'anonymous';
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`;
  script.addEventListener('load', () => {
    script.dataset.loaded = 'true';
    window.dispatchEvent(new Event(ADSENSE_READY_EVENT));
  });
  document.head.appendChild(script);
}

export default function ConsentScripts() {
  const pathname = usePathname();
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    setGoogleConsent('default', false);
    const syncConsent = () => setAccepted(getCookieConsent() === 'accepted');
    syncConsent();
    window.addEventListener(CONSENT_CHANGED_EVENT, syncConsent);
    return () => window.removeEventListener(CONSENT_CHANGED_EVENT, syncConsent);
  }, []);

  useEffect(() => {
    setGoogleConsent('update', accepted);
    if (!accepted) return;

    loadAnalytics();

    // AdSense is intentionally limited to substantial content pages. Next.js
    // adds a noindex robots tag to 404 pages, which must never request ads.
    if (isAdSensePath(pathname) && !isNoIndexPage()) {
      loadAdSense();
    }
  }, [accepted, pathname]);

  return null;
}
