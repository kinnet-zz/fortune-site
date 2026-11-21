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

const EDITORIAL_POINTS = [
  {
    title: '문화적 맥락을 먼저 설명합니다',
    body: '서양 황도대와 동양 12지는 시대와 지역에 따라 다르게 발전했습니다. StarFate는 운세 문장만 보여주기보다 각 상징이 어떤 배경에서 쓰였는지 함께 안내합니다.',
  },
  {
    title: '오락과 사실을 구분합니다',
    body: '운세는 미래 예측이 아니라 자기성찰을 돕는 가벼운 콘텐츠입니다. 천문학적 사실, 역사 자료, 점성술 해석을 같은 문장 안에서 섞지 않도록 구분합니다.',
  },
  {
    title: '개인정보를 저장하지 않습니다',
    body: '생년월일은 별자리와 12지를 계산하고 운세 문장을 생성하는 순간에만 사용됩니다. 결과 확인 뒤 서버에 별도 프로필로 저장하지 않습니다.',
  },
];

const GUIDE_LINKS: { href: string; label: string; desc: string; tag: string; variant: ArtworkVariant }[] = [
  {
    href: '/blog/how-to-read-daily-fortune',
    label: '운세를 건강하게 읽는 법',
    desc: '운세를 예언이 아니라 하루의 의도 설정과 자기 점검 도구로 활용하는 방법',
    tag: '가이드',
    variant: 'journal',
  },
  {
    href: '/blog/zodiac-myths-facts',
    label: '별자리, 왜 자꾸 보게 될까?',
    desc: '밤하늘의 역사와 바넘 효과, 연애의 실제 장면으로 풀어본 별자리 이야기',
    tag: '별자리',
    variant: 'zodiac',
  },
  {
    href: '/blog/chinese-vs-western-zodiac',
    label: '동양 12지와 서양 별자리 비교',
    desc: '두 전통이 성격과 운명을 설명하는 방식의 차이와 공통점',
    tag: '비교',
    variant: 'history',
  },
];

const SAMPLE_READINGS = [
  {
    title: '별자리 해석 예시',
    body: '처녀자리는 세부를 정리하는 힘을 상징합니다. 오늘의 조언은 “완벽한 결과”보다 “확인 가능한 다음 단계”를 세우는 쪽에 가깝습니다.',
  },
  {
    title: '12지 해석 예시',
    body: '용띠는 추진력과 표현력을 상징합니다. 다만 운세 해석에서는 강한 행동력만이 아니라 주변과 속도를 맞추는 균형도 함께 봅니다.',
  },
  {
    title: '자기성찰 질문',
    body: '오늘의 운세를 읽은 뒤에는 “지금 미루는 결정은 무엇인가”, “감정이 앞선 판단은 없는가”처럼 행동으로 옮길 질문 하나를 남기는 것이 좋습니다.',
  },
];

export default function HomeClient() {
  const { lang } = useLang();
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
    <div className="relative min-h-screen bg-white">
      <main className="relative z-10 min-h-screen">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-start px-5 pb-24 pt-12 sm:px-6 sm:pt-16">
          {!fortune && (
            <HomeConversionHero onSubmit={handleSubmit} isLoading={isLoading} lang={lang} error={error} />
          )}

          {!fortune && !isLoading && (
            <section className="mb-20 w-full" aria-labelledby="home-guide-heading">
              {/* 편집 기준 */}
              <div className="relative overflow-hidden rounded-[24px] border border-[#e8eaef] bg-[#f8f9fb] px-6 py-10 sm:px-10 sm:py-12">
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{ background: 'radial-gradient(ellipse 40% 70% at 96% 0%, rgba(59,91,219,0.07) 0%, transparent 62%)' }}
                  aria-hidden="true"
                />
                <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
                  <div>
                    <span className="eyebrow">The editorial standard</span>
                    <h2 id="home-guide-heading" className="mt-5 max-w-2xl text-[1.55rem] font-bold leading-[1.28] tracking-[-0.03em] text-[#0f172a] text-keep-all sm:text-[2.1rem]">
                      StarFate는 별자리와 12지를 <span className="font-display italic text-[#3b5bdb]">하루의 자기성찰 언어</span>로 풀어 쓰는 운세 가이드입니다.
                    </h2>
                    <p className="mt-5 max-w-2xl text-[0.86rem] leading-8 text-[#64748b] text-keep-all">
                      생년월일 기반 운세 도구는 빠른 확인을 위한 기능이고, 사이트의 핵심은 별자리·동양 12지·수비학·타로를 문화적 배경과 함께 설명하는 해석 콘텐츠입니다. 운세는 예언이 아니라 오늘의 감정, 관계, 선택을 돌아보는 가벼운 참고 자료로 제공합니다.
                    </p>
                    <div className="mt-7 flex flex-wrap gap-2">
                      <Link href="/blog" className="btn-ghost">가이드 블로그</Link>
                      <Link href="/zodiac" className="btn-ghost">12별자리 백과</Link>
                      <Link href="/chinese-zodiac" className="btn-ghost">12지 띠 백과</Link>
                      <Link href="/about" className="btn-ghost">편집 기준</Link>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 lg:border-l lg:border-[#e8eaef] lg:pl-8">
                    {[
                      ['12', '별자리 해석'],
                      ['24', '에디토리얼 가이드'],
                      ['4', '언어 지원'],
                    ].map(([value, label]) => (
                      <div key={label} className="rounded-xl border border-[#e8eaef] bg-white px-3 py-4">
                        <p className="text-[1.6rem] font-bold leading-none tracking-[-0.04em] text-[#3b5bdb]">{value}</p>
                        <p className="mt-2 text-[0.64rem] leading-4 text-[#64748b]">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
                {EDITORIAL_POINTS.map((item, index) => (
                  <article key={item.title} className="rounded-2xl border border-[#e8eaef] bg-white p-6">
                    <span className="inline-flex h-7 items-center rounded-full bg-[#eef2ff] px-2.5 text-[0.68rem] font-semibold tracking-[0.04em] text-[#3b5bdb]">
                      0{index + 1}
                    </span>
                    <h3 className="mt-3 text-[0.92rem] font-semibold tracking-[-0.02em] text-[#0f172a]">{item.title}</h3>
                    <p className="mt-2 text-[0.78rem] leading-7 text-[#64748b] text-keep-all">{item.body}</p>
                  </article>
                ))}
              </div>

              {/* 가이드 카드 */}
              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
                {GUIDE_LINKS.map((guide) => (
                  <Link
                    key={guide.href}
                    href={guide.href}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-[#e8eaef] bg-white p-2 transition-all duration-300 hover:-translate-y-1 hover:border-[#dcdfe6] hover:shadow-[0_18px_40px_-26px_rgba(15,23,42,0.28)]"
                  >
                    <CardArtwork variant={guide.variant} />
                    <div className="flex flex-1 flex-col px-2.5 pb-2 pt-3.5">
                      <span className="tag mb-2 self-start">{guide.tag}</span>
                      <h3 className="text-[0.95rem] font-semibold leading-snug tracking-[-0.02em] text-[#0f172a] text-keep-all">
                        {guide.label}
                      </h3>
                      <p className="mt-1.5 line-clamp-2 text-[0.76rem] leading-5 text-[#64748b] text-keep-all">{guide.desc}</p>
                      <span className="mt-3 flex items-center gap-1.5 text-[0.72rem] font-medium text-[#3b5bdb]">
                        읽기
                        <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              <section className="mt-16" aria-labelledby="sample-reading-heading">
                <div className="mb-6 flex flex-col gap-3 border-t border-[#e8eaef] pt-9 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <span className="eyebrow">Reading examples</span>
                    <h2 id="sample-reading-heading" className="mt-3 text-[1.3rem] font-bold tracking-[-0.03em] text-[#0f172a]">해석 예시로 먼저 살펴보기</h2>
                  </div>
                  <p className="max-w-md text-[0.78rem] leading-6 text-[#64748b] text-keep-all">
                    생년월일을 입력하기 전에 아래 세 가지 예시로 해석의 결을 먼저 볼 수 있습니다. 입력하면 같은 항목이 내 별자리와 오늘 날짜에 맞춰 채워집니다.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  {SAMPLE_READINGS.map((sample, index) => (
                    <article key={sample.title} className="rounded-2xl border border-[#e8eaef] bg-[#f8f9fb] p-6">
                      <span className="text-[0.66rem] font-semibold tabular-nums tracking-[0.12em] text-[#64748b]">0{index + 1}</span>
                      <h3 className="mt-2 text-[0.9rem] font-semibold tracking-[-0.02em] text-[#0f172a]">{sample.title}</h3>
                      <p className="mt-2 text-[0.78rem] leading-7 text-[#64748b] text-keep-all">{sample.body}</p>
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
                      ? 'border-amber-200 bg-amber-50 text-amber-900'
                      : 'border-[#e0e6ff] bg-[#f5f7ff] text-[#2741b3]'
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
                <p className="text-[0.76rem] text-[#64748b]">{t(lang).retryHint}</p>
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
