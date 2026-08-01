import { beforeEach, describe, expect, it, vi } from 'vitest';

function storageWith(initial: string | null = null) {
  let value = initial;
  return {
    getItem: () => value,
    setItem: (_key: string, next: string) => { value = next; },
    removeItem: () => { value = null; },
  };
}

describe('cookie consent storage helpers', () => {
  beforeEach(() => vi.resetModules());

  it('returns only supported consent values', async () => {
    const { getCookieConsent } = await import('@/lib/adConsent');
    expect(getCookieConsent(storageWith('accepted'))).toBe('accepted');
    expect(getCookieConsent(storageWith('declined'))).toBe('declined');
    expect(getCookieConsent(storageWith('broken-value'))).toBeNull();
  });

  it('keeps a failed storage choice for the current module session only', async () => {
    let consent = await import('@/lib/adConsent');
    const blocked = {
      getItem: () => { throw new Error('blocked'); },
      setItem: () => { throw new Error('blocked'); },
      removeItem: () => { throw new Error('blocked'); },
    };
    expect(consent.getCookieConsent(blocked)).toBeNull();
    expect(consent.setCookieConsent('accepted', blocked)).toBe(false);
    expect(consent.getCookieConsent(blocked)).toBe('accepted');

    vi.resetModules();
    consent = await import('@/lib/adConsent');
    expect(consent.getCookieConsent(blocked)).toBeNull();
  });

  it('stores a valid decision when storage is available', async () => {
    const { getCookieConsent, setCookieConsent } = await import('@/lib/adConsent');
    const storage = storageWith();
    expect(setCookieConsent('declined', storage)).toBe(true);
    expect(getCookieConsent(storage)).toBe('declined');
  });

  it('does not revive session consent when readable storage no longer has a decision', async () => {
    const { getCookieConsent, setCookieConsent } = await import('@/lib/adConsent');
    const storage = storageWith();

    expect(setCookieConsent('accepted', storage)).toBe(true);
    storage.removeItem('cookie-consent');
    expect(getCookieConsent(storage)).toBeNull();
  });

  it('keeps the current-session choice when reads work but writes fail', async () => {
    const { getCookieConsent, setCookieConsent } = await import('@/lib/adConsent');
    const storage = {
      getItem: () => null,
      setItem: () => { throw new Error('write blocked'); },
      removeItem: () => undefined,
    };

    expect(setCookieConsent('accepted', storage)).toBe(false);
    expect(getCookieConsent(storage)).toBe('accepted');
  });

  it('keeps a failed clear as null even when readable storage still contains consent', async () => {
    const { clearCookieConsent, getCookieConsent } = await import('@/lib/adConsent');
    const storage = {
      getItem: () => 'accepted',
      setItem: () => undefined,
      removeItem: () => { throw new Error('delete blocked'); },
    };

    expect(clearCookieConsent(storage)).toBe(false);
    expect(getCookieConsent(storage)).toBeNull();
  });

  it('drops a write-failure fallback when another tab changes or removes consent', async () => {
    const consent = await import('@/lib/adConsent');
    let persisted: string | null = null;
    const storage = {
      getItem: () => persisted,
      setItem: () => { throw new Error('write blocked'); },
      removeItem: () => undefined,
    };

    expect(consent.setCookieConsent('accepted', storage)).toBe(false);
    expect(consent.getCookieConsent(storage)).toBe('accepted');

    persisted = 'declined';
    expect(consent.syncConsentFromStorageEvent({ key: 'cookie-consent', newValue: 'declined' })).toBe(true);
    expect(consent.getCookieConsent(storage)).toBe('declined');

    persisted = null;
    expect(consent.syncConsentFromStorageEvent({ key: 'cookie-consent', newValue: null })).toBe(true);
    expect(consent.getCookieConsent(storage)).toBeNull();
  });

  it('recognizes consent-key updates and localStorage clear events', async () => {
    const { isConsentStorageEvent } = await import('@/lib/adConsent');

    expect(isConsentStorageEvent({ key: 'cookie-consent' })).toBe(true);
    expect(isConsentStorageEvent({ key: null })).toBe(true);
    expect(isConsentStorageEvent({ key: 'unrelated-key' })).toBe(false);
  });

  it('clears persistent and session consent so settings reopen in the same session', async () => {
    const { clearCookieConsent, getCookieConsent, setCookieConsent } = await import('@/lib/adConsent');
    const storage = storageWith();

    expect(setCookieConsent('accepted', storage)).toBe(true);
    expect(getCookieConsent(storage)).toBe('accepted');
    expect(clearCookieConsent(storage)).toBe(true);
    expect(getCookieConsent(storage)).toBeNull();
  });
});
