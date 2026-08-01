'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import FortuneCard from '../components/FortuneCard';
import AdUnit from '../components/AdUnit';
import InfoSection from '../components/InfoSection';
import { HomeConversionHero, ResultNextSteps } from '../components/RevenuePath';
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

interface BackgroundStar {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  delay: number;
  duration: number;
}

const STAR_COLORS = [
  'rgba(255,255,255,0.9)',
  'rgba(192,132,252,0.8)',
  'rgba(240,171,252,0.7)',
  'rgba(165,243,252,0.6)',
  'rgba(255,255,255,0.7)',
];

const FLOATING_SYMBOL_SIZES = [18, 21, 15, 20, 17, 14, 19, 22, 16, 18, 15, 21];
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

const GUIDE_LINKS = [
  {
    href: '/blog/how-to-read-daily-fortune',
    label: '운세를 건강하게 읽는 법',
    desc: '운세를 예언이 아니라 하루의 의도 설정과 자기 점검 도구로 활용하는 방법',
  },
  {
    href: '/blog/zodiac-myths-facts',
    label: '별자리, 왜 자꾸 보게 될까?',
    desc: '밤하늘의 역사와 바넘 효과, 연애의 실제 장면으로 풀어본 별자리 이야기',
  },
  {
    href: '/blog/chinese-vs-western-zodiac',
    label: '동양 12지와 서양 별자리 비교',
    desc: '두 전통이 성격과 운명을 설명하는 방식의 차이와 공통점',
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

function BackgroundStars() {
  const [stars, setStars] = useState<BackgroundStar[]>([]);

  useEffect(() => {
    setStars(
      Array.from({ length: 64 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.3,
        opacity: Math.random() * 0.7 + 0.1,
        delay: Math.random() * 6,
        duration: Math.random() * 4 + 2,
      }))
    );
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            background: STAR_COLORS[star.id % STAR_COLORS.length],
            opacity: star.opacity,
            animation: `twinkle ${star.duration}s ease-in-out infinite`,
            animationDelay: `${star.delay}s`,
            boxShadow: star.size > 1.5
              ? `0 0 ${star.size * 3}px ${STAR_COLORS[star.id % STAR_COLORS.length]}`
              : 'none',
          }}
        />
      ))}

      {/* 떠다니는 별자리 기호 */}
      {['♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓'].map((sign, i) => (
        <div
          key={sign}
          className="absolute select-none"
          style={{
            left: `${(i * 8.5) % 95}%`,
            top: `${(i * 13 + 5) % 90}%`,
            fontSize: `${FLOATING_SYMBOL_SIZES[i]}px`,
            color: 'rgba(192,132,252,0.06)',
            animation: `float ${6 + i * 0.7}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
          }}
        >
          {sign}
        </div>
      ))}

      {/* 오로라 글로우 레이어들 */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 20% 40%, rgba(139,92,246,0.12) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 50% 60% at 80% 20%, rgba(236,72,153,0.08) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 90%, rgba(99,102,241,0.1) 0%, transparent 70%)',
        }}
      />
    </div>
  );
}

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
    <div className="min-h-screen relative aurora-bg">
      <BackgroundStars />

      {/* 상단 퍼플 글로우 */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] opacity-25 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(139,92,246,0.5) 0%, rgba(236,72,153,0.2) 50%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      {/* 좌측 핑크 글로우 */}
      <div
        className="fixed top-1/3 left-0 w-[400px] h-[600px] opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(240,171,252,0.6) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <main className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-start px-4 py-6 sm:py-8 pb-16">
          {!fortune && (
            <HomeConversionHero onSubmit={handleSubmit} isLoading={isLoading} lang={lang} error={error} />
          )}

          {!fortune && !isLoading && (
            <section className="w-full max-w-6xl mx-auto mb-10" aria-labelledby="home-guide-heading">
              <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 items-start">
                <div
                  className="rounded-3xl p-7 sm:p-8"
                  style={{
                    background: 'linear-gradient(135deg, rgba(15,10,40,0.92), rgba(40,12,70,0.72))',
                    border: '1px solid rgba(192,132,252,0.16)',
                    boxShadow: '0 24px 80px rgba(15,10,40,0.42)',
                    backdropFilter: 'blur(18px)',
                  }}
                >
                  <p className="text-purple-300/70 text-xs font-semibold tracking-[0.22em] uppercase mb-4">
                    Zodiac and self-reflection guide
                  </p>
                  <h2 id="home-guide-heading" className="font-serif-display text-2xl sm:text-3xl font-bold text-white/92 leading-tight mb-4">
                    StarFate는 별자리와 12지를 하루의 자기성찰 언어로 풀어 쓰는 운세 가이드입니다.
                  </h2>
                  <p className="text-white/76 text-base leading-8 mb-6 text-keep-all">
                    생년월일 기반 운세 도구는 빠른 확인을 위한 기능이고, 사이트의 핵심은 별자리·동양 12지·수비학·타로를 문화적 배경과 함께 설명하는 해석 콘텐츠입니다. 운세는 예언이 아니라 오늘의 감정, 관계, 선택을 돌아보는 가벼운 참고 자료로 제공합니다.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Link href="/blog" className="inline-flex min-h-11 items-center px-4 py-2 rounded-xl text-base font-semibold text-white bg-purple-600/75 hover:bg-purple-500 transition-colors">
                      가이드 블로그 보기
                    </Link>
                    <Link href="/zodiac" className="inline-flex min-h-11 items-center px-4 py-2 rounded-xl text-base font-semibold text-purple-100 border border-purple-300/20 hover:border-purple-300/40 transition-colors">
                      12별자리 백과
                    </Link>
                    <Link href="/chinese-zodiac" className="inline-flex min-h-11 items-center px-4 py-2 rounded-xl text-base font-semibold text-purple-100 border border-purple-300/20 hover:border-purple-300/40 transition-colors">
                      12지 띠 백과
                    </Link>
                    <Link href="/about" className="inline-flex min-h-11 items-center px-4 py-2 rounded-xl text-base font-semibold text-purple-100 border border-purple-300/20 hover:border-purple-300/40 transition-colors">
                      편집 기준
                    </Link>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {EDITORIAL_POINTS.map((item) => (
                    <article
                      key={item.title}
                      className="py-5 border-b border-white/10 last:border-b-0"
                      style={{
                        background: 'transparent',
                      }}
                    >
                      <h2 className="text-white/90 text-base font-semibold mb-2">{item.title}</h2>
                      <p className="text-white/68 text-sm leading-7 text-keep-all">{item.body}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[1.35fr_1fr_1fr] gap-3 mt-6">
                {GUIDE_LINKS.map((guide) => (
                  <Link
                    key={guide.href}
                    href={guide.href}
                    className="rounded-2xl p-5 block card-glow"
                    style={{
                      background: 'rgba(139,92,246,0.04)',
                      border: '1px solid rgba(192,132,252,0.12)',
                      backdropFilter: 'blur(16px)',
                    }}
                  >
                    <h2 className="text-white/90 text-base font-semibold mb-2">{guide.label}</h2>
                    <p className="text-white/68 text-sm leading-7 text-keep-all">{guide.desc}</p>
                  </Link>
                ))}
              </div>

              <section className="mt-5 rounded-3xl p-6" style={{ background: 'rgba(5,5,32,0.52)', border: '1px solid rgba(255,255,255,0.07)' }} aria-labelledby="sample-reading-heading">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-5">
                  <div>
                    <p className="text-purple-300/60 text-xs font-semibold tracking-[0.18em] uppercase mb-2">Readable without form input</p>
                    <h2 id="sample-reading-heading" className="font-serif-display text-white/86 text-xl font-bold">입력 없이도 읽을 수 있는 해석 예시</h2>
                  </div>
                  <p className="text-white/65 text-sm leading-6 max-w-md text-keep-all">
                    개인화 결과는 폼 뒤에 있지만, 심사자와 방문자가 바로 읽을 수 있도록 고정 해석 콘텐츠를 함께 제공합니다.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {SAMPLE_READINGS.map((sample) => (
                    <article key={sample.title} className="py-4 md:px-4 border-t md:border-t-0 md:border-l first:border-l-0 border-white/10">
                      <h3 className="text-white/85 text-sm font-semibold mb-2">{sample.title}</h3>
                      <p className="text-white/65 text-sm leading-7 text-keep-all">{sample.body}</p>
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
                  className={`w-full max-w-2xl mb-4 rounded-xl px-4 py-3 text-sm sm:text-base leading-6 ${error?.scope === 'refresh' ? 'border border-amber-300/30 bg-amber-300/10 text-amber-100' : 'border border-purple-300/25 bg-purple-300/10 text-purple-100'}`}
                  role={error?.scope === 'refresh' ? 'alert' : 'status'}
                >
                  {error?.scope === 'refresh' ? REQUEST_STATUS_COPY[lang].refreshError : isRefreshing ? REQUEST_STATUS_COPY[lang].refreshing : resultStatus}
                </div>
              )}
              <div ref={resultRef} className="w-full flex justify-center scroll-mt-6 focus:outline-none" tabIndex={-1}>
                <FortuneCard fortune={fortune} onReset={handleReset} lang={lang} />
              </div>
              <ResultNextSteps lang={lang} />
            </>
          )}

          {fortune && (
            <>
              <div className="mt-8 text-center">
                <p className="text-white/65 text-sm">{t(lang).retryHint}</p>
              </div>
              <div className="w-full max-w-lg mx-auto mt-8">
                <AdUnit slot="4511932122" format="auto" />
              </div>
            </>
          )}

          {!isLoading && <InfoSection />}

          {!isLoading && (
            <div className="w-full max-w-2xl mx-auto px-4 mt-10">
              <AdUnit slot="4511932122" format="horizontal" />
            </div>
          )}
        </div>
      </main>

      {/* 우측 하단 인디고 글로우 */}
      <div
        className="fixed bottom-0 right-0 w-[600px] h-[400px] opacity-12 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(99,102,241,0.5) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
    </div>
  );
}
