export const COOKIE_CONSENT_KEY = 'cookie-consent';
export const CONSENT_CHANGED_EVENT = 'starfate:consent-changed';
export const ADSENSE_READY_EVENT = 'starfate:adsense-ready';

export type CookieConsent = 'accepted' | 'declined' | null;

export function getCookieConsent(): CookieConsent {
  if (typeof window === 'undefined') return null;

  const value = window.localStorage.getItem(COOKIE_CONSENT_KEY);
  return value === 'accepted' || value === 'declined' ? value : null;
}

export function isAdSensePath(pathname: string): boolean {
  return (
    pathname === '/' ||
    pathname === '/blog' ||
    pathname.startsWith('/blog/') ||
    pathname === '/zodiac' ||
    pathname.startsWith('/zodiac/') ||
    pathname === '/chinese-zodiac' ||
    pathname.startsWith('/chinese-zodiac/') ||
    pathname.startsWith('/guide/')
  );
}

export function isNoIndexPage(): boolean {
  if (typeof document === 'undefined') return false;

  return Array.from(document.querySelectorAll('meta[name="robots"]')).some((meta) =>
    (meta.getAttribute('content') ?? '').toLowerCase().includes('noindex')
  );
}
