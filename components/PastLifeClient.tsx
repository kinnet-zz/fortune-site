'use client';

import { useState, useEffect, useRef } from 'react';
import { useLang } from '@/lib/useLang';
import { getPastLife, type PastLife } from '@/lib/past-life-data';

const tr = {
  ko: {
    pageTitle: '나의 전생은?',
    pageSubtitle: '이름과 생년월일로 당신의 전생을 탐색합니다',
    namePlaceholder: '이름을 입력하세요',
    nameLabel: '이름',
    dateLabel: '생년월일',
    submitBtn: '전생 알아보기',
    eraLabel: '시대',
    traitsLabel: '전생의 특성',
    retryBtn: '다시 알아보기',
    shareBtn: '공유하기',
    shareText: (title: string, era: string) => `나의 전생은 ${era}의 ${title}!\n나의 전생을 알아보세요 👉 https://www.starfate.day/past-life`,
    footerText: '✦ 오락 목적의 콘텐츠입니다 ✦',
  },
  en: {
    pageTitle: 'Your Past Life',
    pageSubtitle: 'Discover who you were with your name and birthday',
    namePlaceholder: 'Enter your name',
    nameLabel: 'Name',
    dateLabel: 'Date of Birth',
    submitBtn: 'Reveal My Past Life',
    eraLabel: 'Era',
    traitsLabel: 'Past Life Traits',
    retryBtn: 'Try Again',
    shareBtn: 'Share',
    shareText: (title: string, era: string) => `My past life was a ${title} in ${era}!\nDiscover yours 👉 https://www.starfate.day/past-life?lang=en`,
    footerText: '✦ For entertainment purposes only ✦',
  },
  zh: {
    pageTitle: '我的前世是谁？',
    pageSubtitle: '用姓名和生日探索你的前世',
    namePlaceholder: '请输入姓名',
    nameLabel: '姓名',
    dateLabel: '出生日期',
    submitBtn: '揭晓我的前世',
    eraLabel: '时代',
    traitsLabel: '前世特质',
    retryBtn: '重新测试',
    shareBtn: '分享',
    shareText: (title: string, era: string) => `我的前世是${era}的${title}！\n快来探索你的前世 👉 https://www.starfate.day/past-life?lang=zh`,
    footerText: '✦ 仅供娱乐目的 ✦',
  },
  ja: {
    pageTitle: '私の前世は？',
    pageSubtitle: '名前と生年月日で前世を探ります',
    namePlaceholder: '名前を入力してください',
    nameLabel: '名前',
    dateLabel: '生年月日',
    submitBtn: '前世を調べる',
    eraLabel: '時代',
    traitsLabel: '前世の特性',
    retryBtn: 'もう一度調べる',
    shareBtn: 'シェアする',
    shareText: (title: string, era: string) => `私の前世は${era}の${title}！\n前世を調べてみよう 👉 https://www.starfate.day/past-life?lang=ja`,
    footerText: '✦ エンタメ目的のコンテンツです ✦',
  },
};

const REVEAL_STEPS = [200, 500, 800, 1100];

export default function PastLifeClient() {
  const { lang } = useLang();
  const t = tr[lang] ?? tr.ko;

  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [today, setToday] = useState('');
  const [result, setResult] = useState<PastLife | null>(null);
  const [revealing, setRevealing] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [step, setStep] = useState(0);
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setToday(new Date().toISOString().split('T')[0]);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !birthDate) return;

    setResult(null);
    setRevealing(true);
    setRevealed(false);
    setStep(0);

    const pl = getPastLife(birthDate, name.trim());

    REVEAL_STEPS.forEach((delay, i) => {
      setTimeout(() => setStep(i + 1), delay);
    });

    setTimeout(() => {
      setResult(pl);
      setRevealing(false);
      setRevealed(true);
      setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    }, 1400);
  };

  const handleRetry = () => {
    setResult(null);
    setRevealed(false);
    setRevealing(false);
    setStep(0);
    setName('');
    setBirthDate('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShare = () => {
    if (!result) return;
    const text = t.shareText(result.title[lang], result.era[lang]);
    if (navigator.share) {
      navigator.share({ text }).catch(() => {});
    } else {
      navigator.clipboard.writeText(text).catch(() => {});
    }
  };

  const isValid = name.trim().length > 0 && birthDate.length > 0;

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #0a0118 0%, #0f0526 50%, #0a0118 100%)' }}>

      {/* 히어로 */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(139,92,246,0.15) 0%, transparent 70%)',
        }} />
        <div className="relative z-10 max-w-md mx-auto px-4 pt-12 pb-6 text-center">
          <div className="text-6xl mb-4 animate-pulse">🌀</div>
          <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-3">
            {t.pageTitle}
          </h1>
          <p className="text-white/40 text-sm max-w-xs mx-auto">{t.pageSubtitle}</p>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 pb-20 space-y-6">

        {/* 결과 */}
        {result && revealed && (
          <div ref={resultRef}>
            <ResultCard result={result} lang={lang} t={t} onRetry={handleRetry} onShare={handleShare} />
          </div>
        )}

        {/* 로딩 */}
        {revealing && (
          <RevealLoader step={step} lang={lang} />
        )}

        {/* 폼 */}
        {!result && !revealing && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div
              className="rounded-3xl p-[1px]"
              style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.5), rgba(99,102,241,0.2), rgba(168,85,247,0.5))' }}
            >
              <div
                className="rounded-3xl p-7 space-y-5"
                style={{ background: 'linear-gradient(135deg, rgba(15,5,40,0.97) 0%, rgba(20,8,55,0.97) 100%)' }}
              >
                {/* 이름 */}
                <div>
                  <label className="block text-purple-200 text-sm font-semibold mb-2 tracking-wide">
                    {t.nameLabel}
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.namePlaceholder}
                    maxLength={30}
                    className="w-full rounded-2xl px-4 py-4 text-white text-base font-medium outline-none transition-all"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1.5px solid rgba(139,92,246,0.25)',
                    }}
                  />
                </div>

                {/* 생년월일 */}
                <div>
                  <label className="block text-purple-200 text-sm font-semibold mb-2 tracking-wide">
                    {t.dateLabel}
                  </label>
                  <input
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    min="1900-01-01"
                    max={today}
                    className="w-full rounded-2xl px-4 py-4 text-white text-base font-medium outline-none [color-scheme:dark]"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1.5px solid rgba(139,92,246,0.25)',
                      colorScheme: 'dark',
                    }}
                  />
                </div>

                {/* 제출 버튼 */}
                <button
                  type="submit"
                  disabled={!isValid}
                  className="w-full py-4 rounded-2xl font-black text-base transition-all duration-200"
                  style={{
                    background: isValid
                      ? 'linear-gradient(135deg, #7c3aed 0%, #9333ea 50%, #6366f1 100%)'
                      : 'rgba(255,255,255,0.06)',
                    color: isValid ? '#fff' : 'rgba(255,255,255,0.25)',
                    boxShadow: isValid ? '0 0 30px rgba(139,92,246,0.4)' : 'none',
                    cursor: isValid ? 'pointer' : 'not-allowed',
                  }}
                >
                  🌀 {t.submitBtn}
                </button>
              </div>
            </div>

            {/* 미리보기 카드들 */}
            <PastLifePreview lang={lang} />
          </form>
        )}

        <p className="text-center text-white/20 text-xs mt-6">{t.footerText}</p>
      </div>
    </div>
  );
}

function RevealLoader({ step, lang }: { step: number; lang: string }) {
  const messages: Record<string, string[]> = {
    ko: ['시간의 흐름을 거슬러 올라가는 중...', '전생의 기억을 탐색하는 중...', '과거의 흔적을 찾는 중...', '전생이 밝혀지고 있습니다...'],
    en: ['Traveling back through time...', 'Searching past life memories...', 'Tracing echoes of the past...', 'Your past life is revealing itself...'],
    zh: ['穿越时间长河...', '探索前世记忆...', '寻找过去的痕迹...', '前世正在揭晓...'],
    ja: ['時の流れを遡っています...', '前世の記憶を探索中...', '過去の痕跡を辿っています...', '前世が明かされています...'],
  };
  const msgs = messages[lang] ?? messages.ko;
  const msg = msgs[Math.min(step, msgs.length) - 1] ?? msgs[0];

  return (
    <div className="flex flex-col items-center gap-8 py-20">
      <div className="relative w-20 h-20">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-full animate-spin"
            style={{
              border: '2px solid transparent',
              borderTopColor: ['#a855f7', '#818cf8', '#e879f9'][i],
              animationDuration: `${1.2 + i * 0.4}s`,
              transform: `scale(${1 - i * 0.18})`,
            }}
          />
        ))}
        <div className="absolute inset-0 flex items-center justify-center text-2xl">🌀</div>
      </div>
      <p className="text-purple-300/70 text-sm text-center animate-pulse px-4">{msg}</p>
    </div>
  );
}

function ResultCard({
  result, lang, t, onRetry, onShare,
}: {
  result: PastLife;
  lang: string;
  t: typeof tr.ko;
  onRetry: () => void;
  onShare: () => void;
}) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 50); }, []);

  const l = lang as keyof typeof result.title;

  return (
    <div
      className="transition-all duration-700"
      style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)' }}
    >
      <div
        className="rounded-3xl p-[1.5px]"
        style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.8), rgba(99,102,241,0.4), rgba(236,72,153,0.6))' }}
      >
        <div
          className="rounded-3xl overflow-hidden"
          style={{ background: 'linear-gradient(160deg, #120630 0%, #0e0428 100%)' }}
        >
          {/* 상단 배너 */}
          <div
            className="relative px-6 py-8 text-center overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.2) 0%, rgba(99,102,241,0.1) 100%)' }}
          >
            <div className="absolute inset-0 opacity-10"
              style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(168,85,247,0.8), transparent 70%)' }} />

            <div className="relative z-10">
              <div className="text-7xl mb-4" style={{ filter: 'drop-shadow(0 0 20px rgba(168,85,247,0.6))' }}>
                {result.emoji}
              </div>
              <div className="text-purple-300/60 text-xs font-semibold tracking-widest uppercase mb-2">
                {t.eraLabel} · {result.era[l]}
              </div>
              <h2 className="text-2xl font-black text-white leading-tight">
                {result.title[l]}
              </h2>
            </div>
          </div>

          {/* 내용 */}
          <div className="px-6 pb-6 space-y-5">
            <p className="text-white/70 text-sm leading-relaxed pt-2 text-center">
              {result.desc[l]}
            </p>

            {/* 특성 뱃지 */}
            <div>
              <div className="text-purple-300/50 text-xs font-semibold tracking-widest uppercase mb-3 text-center">
                {t.traitsLabel}
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {result.traits[l].map((trait) => (
                  <span
                    key={trait}
                    className="px-4 py-1.5 rounded-full text-sm font-bold"
                    style={{
                      background: 'rgba(139,92,246,0.2)',
                      border: '1px solid rgba(139,92,246,0.4)',
                      color: '#c4b5fd',
                    }}
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            {/* 버튼 */}
            <div className="flex gap-3 pt-2">
              <button
                onClick={onRetry}
                className="flex-1 py-3 rounded-2xl text-sm font-bold transition-all"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.5)',
                }}
              >
                {t.retryBtn}
              </button>
              <button
                onClick={onShare}
                className="flex-1 py-3 rounded-2xl text-sm font-bold transition-all"
                style={{
                  background: 'linear-gradient(135deg, rgba(139,92,246,0.6), rgba(99,102,241,0.6))',
                  border: '1px solid rgba(139,92,246,0.4)',
                  color: '#e9d5ff',
                }}
              >
                {t.shareBtn} ✨
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const PREVIEW_LIVES = [
  { emoji: '🎨', ko: '조선 화원', en: 'Joseon Painter', zh: '朝鲜画师', ja: '朝鮮画員' },
  { emoji: '🏛️', ko: '이집트 신관', en: 'Egyptian Priest', zh: '埃及祭司', ja: 'エジプト神官' },
  { emoji: '🥷', ko: '에도 닌자', en: 'Edo Ninja', zh: '江户忍者', ja: '江戸忍者' },
  { emoji: '⭐', ko: '메소포타미아 점성가', en: 'Mesopotamian Astrologer', zh: '美索不达米亚占星家', ja: 'メソポタミア占星師' },
];

function PastLifePreview({ lang }: { lang: string }) {
  const l = lang as 'ko' | 'en' | 'zh' | 'ja';
  return (
    <div className="grid grid-cols-2 gap-3">
      {PREVIEW_LIVES.map((life) => (
        <div
          key={life.emoji}
          className="rounded-2xl p-4 text-center"
          style={{
            background: 'rgba(139,92,246,0.07)',
            border: '1px solid rgba(139,92,246,0.15)',
          }}
        >
          <div className="text-3xl mb-1">{life.emoji}</div>
          <div className="text-white/40 text-xs">{life[l] ?? life.ko}</div>
        </div>
      ))}
    </div>
  );
}
