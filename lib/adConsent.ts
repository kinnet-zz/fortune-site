export const COOKIE_CONSENT_KEY = 'cookie-consent';
export const CONSENT_CHANGED_EVENT = 'starfate:consent-changed';
export const ADSENSE_READY_EVENT = 'starfate:adsense-ready';

export type CookieConsent = 'accepted' | 'declined' | null;
type ConsentStorage = Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
let sessionConsent: CookieConsent = null;
let sessionFallbackActive = false;

function normalizeCookieConsent(value: string | null): CookieConsent {
  return value === 'accepted' || value === 'declined' ? value : null;
}

function resolveConsentStorage(storage?: ConsentStorage): ConsentStorage | null {
  if (storage) return storage;
  if (typeof window === 'undefined') return null;
  return window.localStorage;
}

export function getCookieConsent(storage?: ConsentStorage): CookieConsent {
  if (sessionFallbackActive) return sessionConsent;

  try {
    const target = resolveConsentStorage(storage);
    if (!target) return sessionConsent;

    return normalizeCookieConsent(target.getItem(COOKIE_CONSENT_KEY));
  } catch {
    return sessionConsent;
  }
}

export function isConsentStorageEvent(event: Pick<StorageEvent, 'key'>): boolean {
  return event.key === COOKIE_CONSENT_KEY || event.key === null;
}

export function syncConsentFromStorageEvent(
  event: Pick<StorageEvent, 'key' | 'newValue'>,
): boolean {
  if (!isConsentStorageEvent(event)) return false;

  sessionFallbackActive = false;
  sessionConsent = normalizeCookieConsent(event.newValue);
  return true;
}

export function subscribeToConsentChanges(listener: () => void): () => void {
  if (typeof window === 'undefined') return () => undefined;

  const handleStorage = (event: StorageEvent) => {
    if (syncConsentFromStorageEvent(event)) listener();
  };

  window.addEventListener(CONSENT_CHANGED_EVENT, listener);
  window.addEventListener('storage', handleStorage);
  return () => {
    window.removeEventListener(CONSENT_CHANGED_EVENT, listener);
    window.removeEventListener('storage', handleStorage);
  };
}

export function setCookieConsent(consent: Exclude<CookieConsent, null>, storage?: ConsentStorage): boolean {
  sessionConsent = consent;
  try {
    const target = resolveConsentStorage(storage);
    if (!target) {
      sessionFallbackActive = true;
      return false;
    }
    target.setItem(COOKIE_CONSENT_KEY, consent);
    sessionFallbackActive = false;
    return true;
  } catch {
    sessionFallbackActive = true;
    return false;
  }
}

export function clearCookieConsent(storage?: ConsentStorage): boolean {
  sessionConsent = null;
  try {
    const target = resolveConsentStorage(storage);
    if (!target) {
      sessionFallbackActive = true;
      return false;
    }
    target.removeItem(COOKIE_CONSENT_KEY);
    sessionFallbackActive = false;
    return true;
  } catch {
    sessionFallbackActive = true;
    return false;
  }
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
