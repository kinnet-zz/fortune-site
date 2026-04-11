'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLang } from '@/lib/useLang';

// ─── Zodiac Data ───────────────────────────────────────────────────────────────

const ZODIACS = [
  { id: 'aries',       symbol: '♈', ko: '양자리',    en: 'Aries',       zh: '白羊座', ja: '牡羊座',  color: '#f87171' },
  { id: 'taurus',      symbol: '♉', ko: '황소자리',   en: 'Taurus',      zh: '金牛座', ja: '牡牛座',  color: '#fb923c' },
  { id: 'gemini',      symbol: '♊', ko: '쌍둥이자리', en: 'Gemini',      zh: '双子座', ja: '双子座',  color: '#fbbf24' },
  { id: 'cancer',      symbol: '♋', ko: '게자리',     en: 'Cancer',      zh: '巨蟹座', ja: '蟹座',    color: '#4ade80' },
  { id: 'leo',         symbol: '♌', ko: '사자자리',   en: 'Leo',         zh: '狮子座', ja: '獅子座',  color: '#f59e0b' },
  { id: 'virgo',       symbol: '♍', ko: '처녀자리',   en: 'Virgo',       zh: '处女座', ja: '乙女座',  color: '#a3e635' },
  { id: 'libra',       symbol: '♎', ko: '천칭자리',   en: 'Libra',       zh: '天秤座', ja: '天秤座',  color: '#38bdf8' },
  { id: 'scorpio',     symbol: '♏', ko: '전갈자리',   en: 'Scorpio',     zh: '天蝎座', ja: '蠍座',    color: '#818cf8' },
  { id: 'sagittarius', symbol: '♐', ko: '사수자리',   en: 'Sagittarius', zh: '射手座', ja: '射手座',  color: '#e879f9' },
  { id: 'capricorn',   symbol: '♑', ko: '염소자리',   en: 'Capricorn',   zh: '摩羯座', ja: '山羊座',  color: '#94a3b8' },
  { id: 'aquarius',    symbol: '♒', ko: '물병자리',   en: 'Aquarius',    zh: '水瓶座', ja: '水瓶座',  color: '#60a5fa' },
  { id: 'pisces',      symbol: '♓', ko: '물고기자리', en: 'Pisces',      zh: '双鱼座', ja: '魚座',    color: '#c084fc' },
] as const;

type ZodiacId = typeof ZODIACS[number]['id'];

function getZodiac(id: ZodiacId) {
  return ZODIACS.find(z => z.id === id)!;
}

function getZodiacName(z: typeof ZODIACS[number], lang: string) {
  if (lang === 'en') return z.en;
  if (lang === 'zh') return z.zh;
  if (lang === 'ja') return z.ja;
  return z.ko;
}

// ─── Level Config ──────────────────────────────────────────────────────────────

interface LevelConfig {
  pairs: number;
  previewMs: number;
  timeLimit: number | null;
}

const LEVEL_CONFIGS: LevelConfig[] = [
  { pairs: 3,  previewMs: 2500, timeLimit: null },
  { pairs: 4,  previewMs: 2500, timeLimit: null },
  { pairs: 6,  previewMs: 2000, timeLimit: null },
  { pairs: 8,  previewMs: 2000, timeLimit: 90   },
  { pairs: 10, previewMs: 1500, timeLimit: 90   },
  { pairs: 12, previewMs: 1500, timeLimit: 90   },
  { pairs: 12, previewMs: 1000, timeLimit: 60   },
];

const MAX_LEVEL = LEVEL_CONFIGS.length;

function getLevelConfig(level: number): LevelConfig {
  return LEVEL_CONFIGS[Math.min(level - 1, MAX_LEVEL - 1)];
}

// ─── Card Types ────────────────────────────────────────────────────────────────

interface Card {
  uniqueId: string;
  zodiacId: ZodiacId;
  flipped: boolean;
  matched: boolean;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generateCards(level: number): Card[] {
  const { pairs } = getLevelConfig(level);
  const selected = ZODIACS.slice(0, pairs);
  const cards: Card[] = selected.flatMap(z => [
    { uniqueId: `${z.id}_0`, zodiacId: z.id as ZodiacId, flipped: false, matched: false },
    { uniqueId: `${z.id}_1`, zodiacId: z.id as ZodiacId, flipped: false, matched: false },
  ]);
  return shuffle(cards);
}

// ─── Score / Best ──────────────────────────────────────────────────────────────

interface BestEntry { score: number; time: number; mistakes: number }
type BestScores = Record<number, BestEntry>;
const BEST_KEY = 'zodiac-memory-best-v1';

function loadBest(): BestScores {
  try { const s = localStorage.getItem(BEST_KEY); return s ? JSON.parse(s) : {}; }
  catch { return {}; }
}
function saveBest(b: BestScores) {
  try { localStorage.setItem(BEST_KEY, JSON.stringify(b)); } catch {}
}
function calcScore(time: number, mistakes: number) { return time + mistakes * 5; }

// ─── i18n ──────────────────────────────────────────────────────────────────────

const tr = {
  ko: {
    back: '← 홈',
    title: '별자리 기억 게임',
    subtitle: '카드 쌍을 기억하고 모두 찾아라!',
    levelLabel: (l: number) => `Lv.${l}`,
    pairsLabel: (p: number) => `${p}쌍`,
    timeLimitLabel: (t: number) => `${t}초 제한`,
    noLimit: '시간제한 없음',
    startLv1: '1레벨부터 시작',
    previewTitle: '기억하세요!',
    pairs: '남은 쌍',
    mistakes: '실수',
    timeLeft: '남은 시간',
    timeElapsed: '경과',
    sec: '초',
    times: '번',
    levelClear: '레벨 클리어!',
    nextLevel: '다음 레벨 →',
    timeTaken: '걸린 시간',
    mistakesCount: '실수',
    gameOver: '시간 초과!',
    matched: '맞춘 쌍',
    tryAgain: '다시 도전',
    home: '처음으로',
    allClear: '전 레벨 클리어!',
    playAgain: '처음부터',
    best: '최고',
  },
  en: {
    back: '← Home',
    title: 'Zodiac Memory',
    subtitle: 'Remember and find all card pairs!',
    levelLabel: (l: number) => `Lv.${l}`,
    pairsLabel: (p: number) => `${p} pairs`,
    timeLimitLabel: (t: number) => `${t}s limit`,
    noLimit: 'No time limit',
    startLv1: 'Start from Lv.1',
    previewTitle: 'Memorize!',
    pairs: 'Remaining',
    mistakes: 'Mistakes',
    timeLeft: 'Time left',
    timeElapsed: 'Time',
    sec: 's',
    times: 'x',
    levelClear: 'Level Clear!',
    nextLevel: 'Next Level →',
    timeTaken: 'Time taken',
    mistakesCount: 'Mistakes',
    gameOver: 'Time Over!',
    matched: 'Matched',
    tryAgain: 'Try Again',
    home: 'Home',
    allClear: 'All Clear!',
    playAgain: 'Play Again',
    best: 'Best',
  },
  zh: {
    back: '← 首页',
    title: '星座记忆游戏',
    subtitle: '记住并找到所有配对！',
    levelLabel: (l: number) => `Lv.${l}`,
    pairsLabel: (p: number) => `${p}对`,
    timeLimitLabel: (t: number) => `${t}秒限制`,
    noLimit: '无时间限制',
    startLv1: '从第1关开始',
    previewTitle: '记住它们！',
    pairs: '剩余',
    mistakes: '错误',
    timeLeft: '剩余时间',
    timeElapsed: '用时',
    sec: '秒',
    times: '次',
    levelClear: '过关！',
    nextLevel: '下一关 →',
    timeTaken: '用时',
    mistakesCount: '错误',
    gameOver: '时间到！',
    matched: '已配对',
    tryAgain: '再试一次',
    home: '首页',
    allClear: '全部通关！',
    playAgain: '重新开始',
    best: '最佳',
  },
  ja: {
    back: '← ホーム',
    title: '星座記憶ゲーム',
    subtitle: 'カードのペアを記憶して全部見つけよう！',
    levelLabel: (l: number) => `Lv.${l}`,
    pairsLabel: (p: number) => `${p}ペア`,
    timeLimitLabel: (t: number) => `${t}秒制限`,
    noLimit: '時間制限なし',
    startLv1: 'Lv.1からスタート',
    previewTitle: '覚えて！',
    pairs: '残り',
    mistakes: 'ミス',
    timeLeft: '残り時間',
    timeElapsed: '経過',
    sec: '秒',
    times: '回',
    levelClear: 'レベルクリア！',
    nextLevel: '次のレベル →',
    timeTaken: '時間',
    mistakesCount: 'ミス',
    gameOver: 'タイムオーバー！',
    matched: '達成',
    tryAgain: 'もう一度',
    home: 'ホーム',
    allClear: '全レベルクリア！',
    playAgain: 'もう一度遊ぶ',
    best: 'ベスト',
  },
};

// ─── Phase ────────────────────────────────────────────────────────────────────

type Phase = 'idle' | 'preview' | 'playing' | 'levelClear' | 'gameOver' | 'allClear';

// ─── Component ────────────────────────────────────────────────────────────────

export default function ZodiacMemoryClient() {
  const { lang } = useLang();
  const t = tr[lang as keyof typeof tr] ?? tr.ko;

  const [phase, setPhase] = useState<Phase>('idle');
  const [level, setLevel] = useState(1);
  const [cards, setCards] = useState<Card[]>([]);
  const [flipped, setFlipped] = useState<string[]>([]);
  const [matched, setMatched] = useState<Set<ZodiacId>>(new Set());
  const [mistakes, setMistakes] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [bestScores, setBestScores] = useState<BestScores>({});
  const [previewCount, setPreviewCount] = useState(3);
  const [wrongFlash, setWrongFlash] = useState(false);
  const [matchFlash, setMatchFlash] = useState(false);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeLeftRef = useRef<number | null>(null);
  const timeElapsedRef = useRef(0);

  useEffect(() => { setBestScores(loadBest()); }, []);
  useEffect(() => () => { if (timerRef.current) clearInterval(timerRef.current); }, []);

  function stopTimer() {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
  }

  function startLevel(lv: number) {
    const cfg = getLevelConfig(lv);
    const newCards = generateCards(lv);
    stopTimer();

    setLevel(lv);
    setCards(newCards.map(c => ({ ...c, flipped: true })));
    setFlipped([]);
    setMatched(new Set());
    setMistakes(0);
    setTimeElapsed(0);
    setTimeLeft(cfg.timeLimit);
    timeLeftRef.current = cfg.timeLimit;
    timeElapsedRef.current = 0;
    setIsChecking(false);
    setPhase('preview');

    // Countdown display
    const steps = Math.ceil(cfg.previewMs / 1000);
    setPreviewCount(steps);
    let tick = steps;
    const countInterval = setInterval(() => {
      tick--;
      setPreviewCount(Math.max(tick, 0));
      if (tick <= 0) clearInterval(countInterval);
    }, 1000);

    setTimeout(() => {
      clearInterval(countInterval);
      setCards(newCards.map(c => ({ ...c, flipped: false })));
      setPhase('playing');

      if (cfg.timeLimit !== null) {
        let remaining = cfg.timeLimit;
        timerRef.current = setInterval(() => {
          remaining--;
          timeLeftRef.current = remaining;
          setTimeLeft(remaining);
          if (remaining <= 0) {
            stopTimer();
            setPhase('gameOver');
          }
        }, 1000);
      } else {
        let elapsed = 0;
        timerRef.current = setInterval(() => {
          elapsed++;
          timeElapsedRef.current = elapsed;
          setTimeElapsed(elapsed);
        }, 1000);
      }
    }, cfg.previewMs);
  }

  function handleCardClick(uniqueId: string) {
    if (isChecking || phase !== 'playing') return;
    const card = cards.find(c => c.uniqueId === uniqueId);
    if (!card || card.flipped || card.matched) return;

    const newFlipped = [...flipped, uniqueId];
    setCards(prev => prev.map(c => c.uniqueId === uniqueId ? { ...c, flipped: true } : c));
    setFlipped(newFlipped);

    if (newFlipped.length < 2) return;

    setIsChecking(true);
    const [id1, id2] = newFlipped;
    const c1 = cards.find(c => c.uniqueId === id1)!;
    const c2 = cards.find(c => c.uniqueId === id2)!;

    if (c1.zodiacId === c2.zodiacId) {
      // Match
      const newMatched = new Set(matched);
      newMatched.add(c1.zodiacId);
      setMatched(newMatched);
      setCards(prev => prev.map(c =>
        c.uniqueId === id1 || c.uniqueId === id2 ? { ...c, matched: true } : c
      ));
      setFlipped([]);
      setIsChecking(false);
      setMatchFlash(true);
      setTimeout(() => setMatchFlash(false), 300);

      const cfg = getLevelConfig(level);
      if (newMatched.size === cfg.pairs) {
        stopTimer();
        const timeUsed = cfg.timeLimit !== null
          ? cfg.timeLimit - (timeLeftRef.current ?? 0)
          : timeElapsedRef.current;
        const score = calcScore(timeUsed, mistakes);
        setBestScores(prev => {
          const updated = { ...prev };
          if (!updated[level] || score < updated[level].score) {
            updated[level] = { score, time: timeUsed, mistakes };
            saveBest(updated);
            return updated;
          }
          return prev;
        });
        setTimeout(() => {
          setPhase(level >= MAX_LEVEL ? 'allClear' : 'levelClear');
        }, 400);
      }
    } else {
      // Mismatch
      setMistakes(prev => prev + 1);
      setWrongFlash(true);
      setTimeout(() => {
        setCards(prev => prev.map(c =>
          c.uniqueId === id1 || c.uniqueId === id2 ? { ...c, flipped: false } : c
        ));
        setFlipped([]);
        setIsChecking(false);
        setWrongFlash(false);
      }, 800);
    }
  }

  const cfg = getLevelConfig(level);
  const remainingPairs = cfg.pairs - matched.size;
  const isCountdown = cfg.timeLimit !== null;
  const displayTime = isCountdown ? (timeLeft ?? cfg.timeLimit ?? 0) : timeElapsed;
  const timeRatio = isCountdown && cfg.timeLimit ? displayTime / cfg.timeLimit : 1;
  const timerColor = isCountdown
    ? (timeRatio > 0.5 ? '#34d399' : timeRatio > 0.25 ? '#fbbf24' : '#f87171')
    : '#a5b4fc';
  const cols = cfg.pairs <= 3 ? 3 : 4;
  const cardFontSize = cfg.pairs <= 4 ? '1.8rem' : cfg.pairs <= 8 ? '1.3rem' : '1.1rem';
  const nameFontSize = cfg.pairs <= 4 ? '0.68rem' : '0.55rem';

  const timeUsedForResult = isCountdown
    ? cfg.timeLimit! - (timeLeft ?? 0)
    : timeElapsed;

  return (
    <div
      className="min-h-screen flex flex-col items-center"
      style={{ background: 'linear-gradient(160deg, #06061a 0%, #0e0b28 50%, #06061a 100%)' }}
    >
      <div className="w-full max-w-lg px-4 pt-6 pb-12">

        {/* Back link */}
        <div className="mb-6">
          <Link href="/" className="text-white/40 hover:text-white/70 text-sm transition-colors">
            {t.back}
          </Link>
        </div>

        {/* ── IDLE ───────────────────────────────────────────────────────── */}
        {phase === 'idle' && (
          <div>
            <div className="text-center mb-8">
              <div className="text-5xl mb-3">🌟</div>
              <h1 className="text-2xl font-bold text-white">{t.title}</h1>
              <p className="text-white/40 text-sm mt-1">{t.subtitle}</p>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {LEVEL_CONFIGS.map((lcfg, i) => {
                const lv = i + 1;
                const best = bestScores[lv];
                return (
                  <button
                    key={lv}
                    onClick={() => startLevel(lv)}
                    className="flex flex-col items-start gap-1.5 p-4 rounded-2xl text-left transition-all active:scale-95 hover:opacity-90"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="text-purple-400 font-bold text-sm">{t.levelLabel(lv)}</span>
                      {best && (
                        <span className="text-white/30 text-xs">⭐ {best.score}pt</span>
                      )}
                    </div>
                    <span className="text-white/70 text-sm">{t.pairsLabel(lcfg.pairs)}</span>
                    <span className="text-white/30 text-xs">
                      {lcfg.timeLimit ? t.timeLimitLabel(lcfg.timeLimit) : t.noLimit}
                    </span>
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => startLevel(1)}
              className="w-full py-3 rounded-2xl font-bold text-white text-center transition-all active:scale-95"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #6d28d9)', boxShadow: '0 4px 20px rgba(124,58,237,0.35)' }}
            >
              {t.startLv1}
            </button>
          </div>
        )}

        {/* ── PREVIEW / PLAYING ──────────────────────────────────────────── */}
        {(phase === 'preview' || phase === 'playing') && (
          <div>
            {/* HUD */}
            <div className="flex items-center justify-between mb-4">
              <div
                className="px-3 py-1 rounded-full text-sm font-bold"
                style={{ background: 'rgba(124,58,237,0.25)', color: '#c084fc', border: '1px solid rgba(124,58,237,0.4)' }}
              >
                {t.levelLabel(level)}
              </div>
              <div className="flex items-center gap-5">
                <div className="text-center">
                  <p className="text-white/30 text-xs">{t.pairs}</p>
                  <p className="text-white font-bold">{remainingPairs}</p>
                </div>
                <div className="text-center">
                  <p className="text-white/30 text-xs">{t.mistakes}</p>
                  <p className="font-bold" style={{ color: mistakes > 0 ? '#f87171' : 'rgba(255,255,255,0.5)' }}>{mistakes}</p>
                </div>
                <div className="text-center">
                  <p className="text-white/30 text-xs">{isCountdown ? t.timeLeft : t.timeElapsed}</p>
                  <p className="font-bold text-lg" style={{ color: timerColor }}>{displayTime}{t.sec}</p>
                </div>
              </div>
            </div>

            {/* Preview banner */}
            {phase === 'preview' && (
              <div className="text-center mb-3">
                <span
                  className="px-4 py-1.5 rounded-full text-sm font-bold"
                  style={{ background: 'rgba(251,191,36,0.15)', color: '#fbbf24', border: '1px solid rgba(251,191,36,0.3)' }}
                >
                  {t.previewTitle} {previewCount > 0 ? previewCount : ''}
                </span>
              </div>
            )}

            {/* Card grid */}
            <div
              className="grid gap-2"
              style={{
                gridTemplateColumns: `repeat(${cols}, 1fr)`,
                borderRadius: '16px',
                boxShadow: wrongFlash
                  ? '0 0 24px rgba(248,113,113,0.35)'
                  : matchFlash
                    ? '0 0 24px rgba(74,222,128,0.25)'
                    : 'none',
                transition: 'box-shadow 0.2s',
              }}
            >
              {cards.map(card => {
                const z = getZodiac(card.zodiacId);
                const isVisible = card.flipped || card.matched;
                return (
                  <button
                    key={card.uniqueId}
                    onClick={() => handleCardClick(card.uniqueId)}
                    disabled={isVisible || phase === 'preview' || isChecking}
                    className="aspect-square flex flex-col items-center justify-center rounded-xl transition-all active:scale-90"
                    style={{
                      background: card.matched
                        ? `${z.color}20`
                        : card.flipped
                          ? `${z.color}15`
                          : 'rgba(255,255,255,0.05)',
                      border: card.matched
                        ? `1px solid ${z.color}50`
                        : card.flipped
                          ? `1px solid ${z.color}40`
                          : '1px solid rgba(255,255,255,0.07)',
                      cursor: isVisible ? 'default' : 'pointer',
                    }}
                  >
                    {isVisible ? (
                      <>
                        <span style={{ fontSize: cardFontSize, color: z.color, lineHeight: 1 }}>
                          {z.symbol}
                        </span>
                        <span
                          className="text-center leading-tight mt-1"
                          style={{ fontSize: nameFontSize, color: 'rgba(255,255,255,0.6)' }}
                        >
                          {getZodiacName(z, lang)}
                        </span>
                      </>
                    ) : (
                      <span style={{ fontSize: cardFontSize, opacity: 0.15 }}>⭐</span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Progress bar */}
            <div className="mt-4 w-full h-1 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
              <div
                className="h-full rounded-full transition-all"
                style={{
                  width: `${(matched.size / cfg.pairs) * 100}%`,
                  background: 'linear-gradient(90deg, #6366f1, #a855f7)',
                }}
              />
            </div>
          </div>
        )}

        {/* ── LEVEL CLEAR ────────────────────────────────────────────────── */}
        {phase === 'levelClear' && (
          <div className="text-center">
            <div className="text-5xl mb-4">✅</div>
            <h2 className="text-2xl font-bold text-white mb-1">{t.levelClear}</h2>
            <p className="text-white/40 text-sm mb-8">
              {t.levelLabel(level)} → {t.levelLabel(level + 1)}
            </p>
            <div className="flex justify-center gap-8 mb-8">
              <div>
                <p className="text-white/30 text-xs mb-1">{t.timeTaken}</p>
                <p className="text-white font-bold text-2xl">{timeUsedForResult}<span className="text-sm text-white/40">{t.sec}</span></p>
              </div>
              <div>
                <p className="text-white/30 text-xs mb-1">{t.mistakesCount}</p>
                <p className="font-bold text-2xl" style={{ color: mistakes > 0 ? '#f87171' : '#4ade80' }}>
                  {mistakes}<span className="text-sm text-white/40">{t.times}</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => startLevel(level + 1)}
              className="w-full py-3 rounded-2xl font-bold text-white transition-all active:scale-95"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #6d28d9)', boxShadow: '0 4px 20px rgba(124,58,237,0.35)' }}
            >
              {t.nextLevel}
            </button>
          </div>
        )}

        {/* ── GAME OVER ──────────────────────────────────────────────────── */}
        {phase === 'gameOver' && (
          <div className="text-center">
            <div className="text-5xl mb-4">⏰</div>
            <h2 className="text-2xl font-bold text-white mb-1">{t.gameOver}</h2>
            <p className="text-white/40 text-sm mb-8">
              {t.levelLabel(level)} · {matched.size}/{cfg.pairs} {t.matched}
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => startLevel(level)}
                className="flex-1 py-3 rounded-2xl font-bold text-white transition-all active:scale-95"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #6d28d9)', boxShadow: '0 4px 20px rgba(124,58,237,0.35)' }}
              >
                {t.tryAgain}
              </button>
              <button
                onClick={() => setPhase('idle')}
                className="flex-1 py-3 rounded-2xl font-bold transition-all active:scale-95"
                style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                {t.home}
              </button>
            </div>
          </div>
        )}

        {/* ── ALL CLEAR ──────────────────────────────────────────────────── */}
        {phase === 'allClear' && (
          <div className="text-center">
            <div className="text-6xl mb-4">👑</div>
            <h2 className="text-2xl font-bold text-white mb-2">{t.allClear}</h2>
            <p className="text-white/40 text-sm mb-8">{t.levelLabel(MAX_LEVEL)} 완료!</p>

            {/* Best scores summary */}
            <div className="space-y-2 mb-8">
              {Object.entries(bestScores).map(([lv, entry]) => (
                <div
                  key={lv}
                  className="flex items-center justify-between px-4 py-2 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <span className="text-purple-400 font-bold text-sm">{t.levelLabel(Number(lv))}</span>
                  <span className="text-white/60 text-sm">{entry.time}{t.sec} · {entry.mistakes}{t.times}</span>
                  <span className="text-white/30 text-xs">⭐ {entry.score}pt</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setPhase('idle')}
              className="w-full py-3 rounded-2xl font-bold text-white transition-all active:scale-95"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #6d28d9)', boxShadow: '0 4px 20px rgba(124,58,237,0.35)' }}
            >
              {t.playAgain}
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
