'use client';

import { getCookieConsent } from './adConsent';

type AnalyticsValue = string | number | boolean;

type AnalyticsWindow = Window & {
  dataLayer?: unknown[][];
  gtag?: (command: 'event', eventName: string, params?: Record<string, AnalyticsValue>) => void;
};

export function trackEvent(eventName: string, params: Record<string, AnalyticsValue> = {}) {
  if (typeof window === 'undefined') return;
  try {
    if (getCookieConsent() !== 'accepted') return;
  } catch {
    return;
  }
  const analyticsWindow = window as AnalyticsWindow;
  analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
  analyticsWindow.gtag = analyticsWindow.gtag || ((command, name, eventParams) => {
    analyticsWindow.dataLayer?.push([command, name, eventParams]);
  });
  analyticsWindow.gtag('event', eventName, params);
}
