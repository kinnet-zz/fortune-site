'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import FortuneCard from '../components/FortuneCard';
import AdUnit from '../components/AdUnit';
import InfoSection from '../components/InfoSection';
import { HomeConversionHero, ResultNextSteps } from '../components/RevenuePath';
import { CardArtwork, type ArtworkVariant } from '../components/Artwork';
import { trackEvent } from '@/lib/analytics';
import { decodeSharedResult } from '@/lib/sharedFortune';
import { t } from '@/lib/i18n';
import { useLang } from '@/lib/useLang';
import { siteCopy } from '@/lib/site-copy';
import {
  FortuneRequestError,
  getFortuneErrorCode,
  isAbortError,
  isLatestFortuneRequest,
  makeFortuneRequestKey,
  shouldStartFortuneRequest,
  type FortuneErrorState,
  type FortuneInputSnapshot,
  type FortuneRequestSnapshot,
} from '@/lib/homeFortune';

interface FortuneResult {
  zodiacSign: string;
  chineseZodiac: string;
  overall: string;
  love: string;
  money: string;
  work: string;
  luckyColor: string;
  luckyNumber: number;
  score: number;
}

const SCORE_BUCKET_SIZE = 20;

const REQUEST_STATUS_COPY = {
  ko: { refreshing: '언어에 맞춰 운세를 다시 읽는 중입니다.', refreshed: '선택한 언어로 운세를 업데이트했습니다.', refreshError: '기존 운세는 그대로 두었습니다. 잠시 후 언어 변경을 다시 시도해 주세요.', ready: '오늘의 운세 결과가 준비되었습니다.' },
  en: { refreshing: 'Updating your reading for the selected language.', refreshed: 'Your reading has been updated.', refreshError: 'Your previous reading is still here. Please try changing the language again shortly.', ready: 'Your daily fortune is ready.' },
  zh: { refreshing: '正在按所选语言更新运势。', refreshed: '运势已按所选语言更新。', refreshError: '已保留原有运势，请稍后重试语言切换。', ready: '今日运势已生成。' },
  ja: { refreshing: '選択した言語で運勢を更新しています。', refreshed: '選択した言語で運勢を更新しました。', refreshError: '元の運勢はそのまま表示しています。しばらくしてから再度お試しください。', ready: '今日の運勢ができました。' },
} as const;

const GUIDE_LINKS: { href: string; variant: ArtworkVariant }[] = [
  { href: '/blog/how-to-read-daily-fortune', variant: 'journal' },
  { href: '/blog/zodiac-myths-facts', variant: 'zodiac' },
  { href: '/blog/chinese-vs-western-zodiac', variant: 'history' },
];

export default function HomeClient() {
  const { lang } = useLang();
  const copy = siteCopy(lang);
  const home = copy.home;
  const [birthDate, setBirthDate] = useState('');
  const [fortune, setFortune] = useState<FortuneResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState<FortuneErrorState | null>(null);
  const [resultStatus, setResultStatus] = useState('');
  const resultRef = useRef<HTMLDivElement>(null);
  const lastGenderRef = useRef('');
  const prevLangRef = useRef(lang);
  const currentLangRef = useRef(lang);
  const abortControllerRef = useRef<AbortController | null>(null);
  const requestIdRef = useRef(0);
  const inFlightRef = useRef<string | null>(null);
  const latestInputRef = useRef<FortuneInputSnapshot>({ birthDate: '', gender: '' });
  const shouldScrollResultRef = useRef(false);

  currentLangRef.current = lang;

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const r = params.get('r');
    if (!r) return;
    const decoded = decodeSharedResult(r);
    if (!decoded) return;

    try {
      const bd = params.get('bd') ?? '';
      const g = params.get('g') ?? '';
      setFortune(decoded);
      if (bd) setBirthDate(bd);
      if (g) lastGenderRef.current = g;
      trackEvent('shared_fortune_view', { language: lang });
    } catch {
      // 잘못된 URL 파라미터는 무시
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (fortune && resultRef.current && shouldScrollResultRef.current) {
      shouldScrollResultRef.current = false;
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      resultRef.current.focus({ preventScroll: true });
      resultRef.current.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    }
  }, [fortune]);

  useEffect(() => () => {
    requestIdRef.current += 1;
    const controller = abortControllerRef.current;
    abortControllerRef.current = null;
    inFlightRef.current = null;
    controller?.abort();
  }, []);

  const handleSubmit = useCallback(async (
    date: string,
    genderInput: string,
    source: 'user' | 'language-change' = 'user',
  ) => {
    const input = { birthDate: date, gender: genderInput };
    const requestKey = makeFortuneRequestKey(lang, input);
    if (!shouldStartFortuneRequest(inFlightRef.current, requestKey)) return;

    abortControllerRef.current?.abort();
    const controller = new AbortController();
    const request: FortuneRequestSnapshot = {
      id: requestIdRef.current + 1,
      lang,
      birthDate: date,
      gender: genderInput,
    };
    requestIdRef.current = request.id;
    abortControllerRef.current = controller;
    inFlightRef.current = requestKey;
    latestInputRef.current = input;

    const shouldTrackConversion = source === 'user';
    const hasExistingFortune = fortune !== null;
    const startedAt = performance.now();
    setBirthDate(date);
    lastGenderRef.current = genderInput;
    setIsLoading(source === 'user' || !hasExistingFortune);
    setIsRefreshing(source === 'language-change' && hasExistingFortune);
    setError(null);
    setResultStatus('');
    if (source === 'user') setFortune(null);
    shouldScrollResultRef.current = source === 'user' || !hasExistingFortune;
    if (shouldTrackConversion) trackEvent('fortune_start', { language: lang });

    try {
      const response = await fetch('/api/fortune', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ birthDate: date, gender: genderInput, language: lang }),
        signal: controller.signal,
      });

      if (!response.ok) {
        const errorData: unknown = await response.json().catch(() => null);
        const isQuotaError = response.status === 429 || (
          typeof errorData === 'object' && errorData !== null &&
          'error' in errorData && errorData.error === 'QUOTA_EXCEEDED'
        );
        throw new FortuneRequestError(isQuotaError ? 'QUOTA_EXCEEDED' : 'GENERAL_ERROR');
      }

      const data: FortuneResult = await response.json();
      if (!isLatestFortuneRequest(requestIdRef.current, request, currentLangRef.current, latestInputRef.current)) return;

      setFortune(data);
      setResultStatus(source === 'language-change' && hasExistingFortune ? REQUEST_STATUS_COPY[lang].refreshed : '');
      if (shouldTrackConversion) {
        trackEvent('fortune_result', {
          language: lang,
          zodiac_sign: data.zodiacSign,
          chinese_zodiac: data.chineseZodiac,
          score_bucket: Math.floor(data.score / SCORE_BUCKET_SIZE) * SCORE_BUCKET_SIZE,
          response_time_ms: Math.round(performance.now() - startedAt),
        });
      }
    } catch (err) {
      if (isAbortError(err)) return;
      if (!isLatestFortuneRequest(requestIdRef.current, request, currentLangRef.current, latestInputRef.current)) return;

      const errorCode = getFortuneErrorCode(err);
      const scope = source === 'language-change' && hasExistingFortune ? 'refresh' : 'form';
      setError({ code: errorCode, scope });
      setResultStatus('');
      if (shouldTrackConversion) {
        trackEvent('fortune_error', { language: lang, error_type: errorCode });
      }
    } finally {
      if (requestIdRef.current === request.id) {
        abortControllerRef.current = null;
        inFlightRef.current = null;
        setIsLoading(false);
        setIsRefreshing(false);
      }
    }
  }, [fortune, lang]);

  useEffect(() => {
    if (prevLangRef.current === lang) return;
    prevLangRef.current = lang;
    if (birthDate && lastGenderRef.current) {
      handleSubmit(birthDate, lastGenderRef.current, 'language-change');
    }
  }, [lang]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleReset = () => {
    abortControllerRef.current?.abort();
    abortControllerRef.current = null;
    requestIdRef.current += 1;
    inFlightRef.current = null;
    latestInputRef.current = { birthDate: '', gender: '' };
    trackEvent('fortune_reset', { language: lang });
    setFortune(null);
    setError(null);
    setBirthDate('');
    setIsLoading(false);
    setIsRefreshing(false);
    setResultStatus('');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <div className="relative min-h-screen">
      <main className="relative z-10 min-h-screen">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-start px-5 pb-24 pt-6 sm:px-6 sm:pt-8">
          {!fortune && (
            <HomeConversionHero onSubmit={handleSubmit} isLoading={isLoading} lang={lang} error={error} />
          )}

          {!fortune && !isLoading && (
            <section className="mb-20 w-full" aria-labelledby="home-guide-heading">
              {/* 편집 기준 */}
              <div className="relative overflow-hidden rounded-[26px] border border-[rgba(184,199,220,0.14)] bg-[linear-gradient(155deg,rgba(18,23,34,0.9)_0%,rgba(8,11,17,0.9)_62%)] px-6 py-11 sm:px-10 sm:py-14">
                <div
                  className="pointer-events-none absolute -right-24 -top-28 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(230,236,245,0.14)_0%,rgba(184,199,220,0.05)_45%,transparent_70%)]"
                  aria-hidden="true"
                />
                <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
                  <div>
                    <span className="eyebrow">The editorial standard</span>
                    <h2 id="home-guide-heading" className="mt-5 max-w-2xl font-display text-[1.75rem] leading-[1.28] tracking-[-0.015em] text-[#f6f9fd] text-keep-all sm:text-[2.35rem]">
                      {home.editorialTitleLead}<span className="italic text-[#e6ecf5]">{home.editorialTitleAccent}</span>{home.editorialTitleTail}
                    </h2>
                    <p className="mt-5 max-w-2xl text-[0.86rem] leading-8 text-[#9aa3b2] text-keep-all">
                      {home.editorialBody}
                    </p>
                    <div className="mt-7 flex flex-wrap gap-2">
                      <Link href="/blog" className="btn-ghost">{home.ctas.blog}</Link>
                      <Link href="/zodiac" className="btn-ghost">{home.ctas.zodiac}</Link>
                      <Link href="/chinese-zodiac" className="btn-ghost">{home.ctas.chinese}</Link>
                      <Link href="/about" className="btn-ghost">{home.ctas.about}</Link>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 lg:border-l lg:border-[rgba(184,199,220,0.16)] lg:pl-9">
                    {['12', '24', '4'].map((value, valueIndex) => {
                      const label = home.statLabels[valueIndex];
                      return (
                        <div key={value} className="border-t border-[rgba(230,236,245,0.28)] pt-3">
                          <p className="font-display text-[2rem] font-light leading-none tracking-[-0.02em] text-[#f6f9fd]">{value}</p>
                          <p className="mt-2 text-[0.62rem] leading-4 tracking-[0.06em] text-[#8b94a3]">{label}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="mt-14 grid grid-cols-1 gap-8 border-t border-[rgba(184,199,220,0.14)] pt-10 md:grid-cols-3 md:gap-10">
                {home.points.map((item, index) => (
                  <article key={item.title}>
                    <span className="font-display text-[0.78rem] tracking-[0.24em] text-[#8fa2bb]">
                      0{index + 1}
                    </span>
                    <h3 className="mt-3 font-display text-[1.1rem] leading-snug text-[#f2f0ea]">{item.title}</h3>
                    <p className="mt-2.5 text-[0.78rem] leading-7 text-[#9aa3b2] text-keep-all">{item.body}</p>
                  </article>
                ))}
              </div>

              {/* 가이드 카드 */}
              <div className="mt-16">
                <div className="mb-6 flex flex-col gap-2 border-t border-[rgba(184,199,220,0.14)] pt-9 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <span className="eyebrow">Editorial guides</span>
                    <h2 className="mt-3 font-display text-[1.5rem] tracking-[-0.015em] text-[#f6f9fd]">{home.guidesTitle}</h2>
                  </div>
                  <Link href="/blog" className="text-[0.76rem] tracking-[0.04em] text-[#b8c7dc] hover:text-[#f6f9fd]">
                    {home.viewAll} →
                  </Link>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  {GUIDE_LINKS.map((guide, guideIndex) => (
                    <Link
                      key={guide.href}
                      href={guide.href}
                      className="group flex flex-col overflow-hidden rounded-[20px] border border-[rgba(184,199,220,0.14)] bg-[rgba(15,19,28,0.72)] p-2 transition-all duration-500 hover:-translate-y-1 hover:border-[rgba(184,199,220,0.34)] hover:shadow-[0_30px_60px_-34px_rgba(0,0,0,0.9)]"
                    >
                      <CardArtwork variant={guide.variant} />
                      <div className="flex flex-1 flex-col px-2.5 pb-2 pt-3.5">
                        <span className="tag mb-2 self-start">{home.guideCards[guideIndex].tag}</span>
                        <h3 className="font-display text-[1.02rem] leading-snug text-[#f2f0ea] text-keep-all">
                          {home.guideCards[guideIndex].label}
                        </h3>
                        <p className="mt-1.5 line-clamp-2 text-[0.76rem] leading-5 text-[#9aa3b2] text-keep-all">{home.guideCards[guideIndex].desc}</p>
                        <span className="mt-3 flex items-center gap-1.5 text-[0.72rem] tracking-[0.04em] text-[#dbe6f4] opacity-70 transition-opacity duration-300 group-hover:opacity-100">
                          {home.read}
                          <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <section className="mt-20" aria-labelledby="sample-reading-heading">
                <div className="mb-7 flex flex-col gap-3 border-t border-[rgba(184,199,220,0.14)] pt-9 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <span className="eyebrow">Reading examples</span>
                    <h2 id="sample-reading-heading" className="mt-3 font-display text-[1.5rem] tracking-[-0.015em] text-[#f6f9fd]">{home.samplesTitle}</h2>
                  </div>
                  <p className="max-w-md text-[0.78rem] leading-6 text-[#9aa3b2] text-keep-all">
                    {home.samplesIntro}
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  {home.samples.map((sample, index) => (
                    <article key={sample.title} className="rounded-[20px] border border-[rgba(184,199,220,0.14)] bg-[rgba(12,16,24,0.6)] p-6">
                      <span className="font-display text-[0.72rem] tracking-[0.24em] text-[#8fa2bb]">0{index + 1}</span>
                      <h3 className="mt-2 font-display text-[1.02rem] tracking-[-0.01em] text-[#f2f0ea]">{sample.title}</h3>
                      <p className="mt-2 text-[0.78rem] leading-7 text-[#9aa3b2] text-keep-all">{sample.body}</p>
                    </article>
                  ))}
                </div>
              </section>
            </section>
          )}

          {fortune && (
            <>
              {(isRefreshing || error?.scope === 'refresh' || resultStatus) && (
                <div
                  className={`mb-5 w-full max-w-2xl rounded-xl border px-4 py-3 text-[0.8rem] leading-6 ${
                    error?.scope === 'refresh'
                      ? 'border-[rgba(216,195,154,0.35)] bg-[rgba(216,195,154,0.10)] text-[#e8dcc0]'
                      : 'border-[rgba(184,199,220,0.28)] bg-[rgba(184,199,220,0.08)] text-[#dbe6f4]'
                  }`}
                  role={error?.scope === 'refresh' ? 'alert' : 'status'}
                >
                  {error?.scope === 'refresh' ? REQUEST_STATUS_COPY[lang].refreshError : isRefreshing ? REQUEST_STATUS_COPY[lang].refreshing : resultStatus}
                </div>
              )}
              <div ref={resultRef} className="flex w-full scroll-mt-24 justify-center focus:outline-none" tabIndex={-1}>
                <FortuneCard fortune={fortune} onReset={handleReset} lang={lang} />
              </div>
              <ResultNextSteps lang={lang} />
            </>
          )}

          {fortune && (
            <>
              <div className="mt-8 text-center">
                <p className="text-[0.76rem] text-[#9aa3b2]">{t(lang).retryHint}</p>
              </div>
              <div className="mx-auto mt-8 w-full max-w-lg">
                <AdUnit slot="4511932122" format="auto" />
              </div>
            </>
          )}

          {!isLoading && <InfoSection />}

          {!isLoading && (
            <div className="mx-auto mt-16 w-full max-w-2xl">
              <AdUnit slot="4511932122" format="horizontal" />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
