'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { useLang } from '@/lib/useLang';
import type { LeaderboardEntry } from '@/app/api/leaderboard/route';

const MAX_LEVEL = 15;

interface LevelConfig {
  total: number;
  timeLimit: number;
  cols: number;
}

function getLevelConfig(level: number): LevelConfig {
  const lv = Math.min(level, MAX_LEVEL);
  if (lv <= 10) {
    return {
      total: lv * 10,
      timeLimit: 60 - Math.floor((lv - 1) / 2) * 5,
      cols: lv <= 2 ? 5 : 10,
    };
  }
  return {
    total: 100,
    timeLimit: Math.max(40 - (lv - 10) * 5, 15),
    cols: 10,
  };
}

function getDifficultyLabel(level: number): { stars: number; color: string } {
  if (level <= 3)  return { stars: 1, color: '#34d399' };
  if (level <= 6)  return { stars: 2, color: '#60a5fa' };
  if (level <= 9)  return { stars: 3, color: '#a78bfa' };
  if (level <= 12) return { stars: 4, color: '#f472b6' };
  return            { stars: 5, color: '#fb923c' };
}

const PREVIEW_LEVELS = [1, 5, 10, 15];

const tr = {
  ko: {
    home: '홈',
    title: '숫자 순서 게임',
    subtitle: '1부터 순서대로 빠르게 눌러라!',
    rulesTitle: '게임 방법',
    rule1: '숫자를 1부터 순서대로 눌러야 합니다',
    rule2: '정확히 누르면 +1초, 틀리면 -2초',
    rule3: '레벨이 오를수록 숫자가 늘고 시간이 짧아집니다',
    rule4: '제한 시간이 다 되면 게임 오버',
    levelLabel: (l: number) => `Lv.${l}`,
    range: (n: number) => `1–${n}`,
    timeLabel: (t: number) => `${t}s`,
    start: '게임 시작',
    next: (n: number) => `${n}`,
    cleared: (l: number) => `Lv.${l} 클리어!`,
    nextLevel: (l: number) => `Lv.${l} 준비...`,
    failed: (l: number) => `Lv.${l} 실패`,
    allClear: '전 레벨 클리어!!',
    avg: (t: string) => `평균 ${t}초/레벨`,
    top100prompt: 'TOP 100에 이름 남기기',
    placeholder: '닉네임 (최대 10자)',
    register: '등록',
    needClear: 'Lv.1 클리어 후 등록할 수 있어요',
    top10: 'TOP 10',
    retry: '다시 도전',
    registered: '등록 완료!',
    rankMsg: (r: number) => `🏆 ${r}위`,
    rankOut: '100위 밖 — 재도전!',
    seeAll: '전체 TOP 100 보기 →',
    errLen: '닉네임은 10자 이내로 입력해주세요',
    errFail: '등록에 실패했습니다',
    errNet: '네트워크 오류',
    secSuffix: '초',
    nextLabel: '다음',
  },
  en: {
    home: 'Home',
    title: 'Number Rush',
    subtitle: 'Tap numbers in order as fast as you can!',
    rulesTitle: 'How to Play',
    rule1: 'Tap numbers from 1 in order',
    rule2: 'Correct +1s · Wrong -2s',
    rule3: 'Each level adds more numbers & less time',
    rule4: 'Time runs out = Game Over',
    levelLabel: (l: number) => `Lv.${l}`,
    range: (n: number) => `1–${n}`,
    timeLabel: (t: number) => `${t}s`,
    start: 'Start Game',
    next: (n: number) => `${n}`,
    cleared: (l: number) => `Lv.${l} Clear!`,
    nextLevel: (l: number) => `Lv.${l} Ready...`,
    failed: (l: number) => `Lv.${l} Failed`,
    allClear: 'ALL CLEAR!!',
    avg: (t: string) => `Avg ${t}s/level`,
    top100prompt: 'Leave your name in TOP 100',
    placeholder: 'Nickname (max 10)',
    register: 'Submit',
    needClear: 'Clear Lv.1 to register',
    top10: 'TOP 10',
    retry: 'Try Again',
    registered: 'Registered!',
    rankMsg: (r: number) => `🏆 Rank #${r}`,
    rankOut: 'Outside top 100 — retry!',
    seeAll: 'See full TOP 100 →',
    errLen: 'Max 10 characters',
    errFail: 'Registration failed',
    errNet: 'Network error',
    secSuffix: 's',
    nextLabel: 'Next',
  },
  zh: {
    home: '首页',
    title: '数字冲刺',
    subtitle: '从1开始按顺序快速点击！',
    rulesTitle: '游戏规则',
    rule1: '从1开始按顺序点击数字',
    rule2: '正确 +1秒 · 错误 -2秒',
    rule3: '每关数字变多，时间变短',
    rule4: '时间耗尽即游戏结束',
    levelLabel: (l: number) => `Lv.${l}`,
    range: (n: number) => `1–${n}`,
    timeLabel: (t: number) => `${t}s`,
    start: '开始游戏',
    next: (n: number) => `${n}`,
    cleared: (l: number) => `Lv.${l} 通关！`,
    nextLevel: (l: number) => `Lv.${l} 准备...`,
    failed: (l: number) => `Lv.${l} 失败`,
    allClear: '全关通关！！',
    avg: (t: string) => `平均 ${t}秒/关`,
    top100prompt: '在 TOP 100 留下你的名字',
    placeholder: '昵称（最多10字）',
    register: '登记',
    needClear: '通过 Lv.1 才能登记',
    top10: 'TOP 10',
    retry: '再次挑战',
    registered: '登记完成！',
    rankMsg: (r: number) => `🏆 第${r}名`,
    rankOut: '未进前100 — 再试！',
    seeAll: '查看全部 TOP 100 →',
    errLen: '昵称不能超过10个字符',
    errFail: '登记失败',
    errNet: '网络错误',
    secSuffix: '秒',
    nextLabel: '下一个',
  },
  ja: {
    home: 'ホーム',
    title: 'ナンバーラッシュ',
    subtitle: '1から順番に素早くタップ！',
    rulesTitle: '遊び方',
    rule1: '数字を1から順番にタップ',
    rule2: '正解 +1秒 · 間違い -2秒',
    rule3: 'レベルが上がると数字が増え時間が短くなる',
    rule4: '時間切れでゲームオーバー',
    levelLabel: (l: number) => `Lv.${l}`,
    range: (n: number) => `1–${n}`,
    timeLabel: (t: number) => `${t}s`,
    start: 'スタート',
    next: (n: number) => `${n}`,
    cleared: (l: number) => `Lv.${l} クリア！`,
    nextLevel: (l: number) => `Lv.${l} 準備中...`,
    failed: (l: number) => `Lv.${l} 失敗`,
    allClear: '全クリア！！',
    avg: (t: string) => `平均 ${t}秒/レベル`,
    top100prompt: 'TOP 100に名前を残す',
    placeholder: 'ニックネーム（最大10文字）',
    register: '登録',
    needClear: 'Lv.1クリアで登録可能',
    top10: 'TOP 10',
    retry: '再挑戦',
    registered: '登録完了！',
    rankMsg: (r: number) => `🏆 ${r}位`,
    rankOut: '100位圏外 — 再挑戦！',
    seeAll: '全 TOP 100 を見る →',
    errLen: '10文字以内にしてください',
    errFail: '登録に失敗しました',
    errNet: 'ネットワークエラー',
    secSuffix: '秒',
    nextLabel: '次',
  },
};

function generateGrid(total: number): number[] {
  const nums = Array.from({ length: total }, (_, i) => i + 1);
  for (let i = nums.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  return nums;
}

type GameState = 'idle' | 'levelClear' | 'playing' | 'finished' | 'submitting' | 'submitted';

/* ── 타이머 색상 ── */
function timerColor(ratio: number) {
  if (ratio > 0.5) return '#34d399';
  if (ratio > 0.25) return '#fbbf24';
  return '#f87171';
}

export default function NumberGameClient() {
  const { lang } = useLang();
  const t = tr[lang as keyof typeof tr] ?? tr.ko;

  const [gameState, setGameState] = useState<GameState>('idle');
  const [level, setLevel] = useState(1);
  const [grid, setGrid] = useState<number[]>([]);
  const [nextTarget, setNextTarget] = useState(1);
  const [timeLeft, setTimeLeft] = useState(60);
  const [wrongFlash, setWrongFlash] = useState(false);
  const [correctFlash, setCorrectFlash] = useState(false);
  const [levelTimes, setLevelTimes] = useState<number[]>([]);
  const [levelStartTime, setLevelStartTime] = useState(0);
  const [nickname, setNickname] = useState('');
  const [rank, setRank] = useState<number | null>(null);
  const [submitError, setSubmitError] = useState('');
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loadingBoard, setLoadingBoard] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const clearTimer = () => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
  };

  const startLevel = useCallback((lv: number) => {
    const cfg = getLevelConfig(lv);
    setLevel(lv);
    setGrid(generateGrid(cfg.total));
    setNextTarget(1);
    setTimeLeft(cfg.timeLimit);
    setLevelStartTime(Date.now());
    setGameState('playing');
  }, []);

  const endGame = useCallback((times: number[]) => {
    clearTimer();
    setGameState('finished');
    setLevelTimes(times);
    setLoadingBoard(true);
    fetch('/api/leaderboard')
      .then(r => r.json())
      .then((d: { entries: LeaderboardEntry[] }) => setLeaderboard(d.entries))
      .catch(() => {})
      .finally(() => setLoadingBoard(false));
  }, []);

  useEffect(() => {
    if (gameState !== 'playing') return;
    clearTimer();
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) { clearTimer(); return 0; }
        return prev - 1;
      });
    }, 1000);
    return clearTimer;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState, level]);

  useEffect(() => {
    if (gameState === 'playing' && timeLeft === 0) endGame(levelTimes);
  }, [timeLeft, gameState, endGame, levelTimes]);

  const startGame = () => {
    setLevelTimes([]);
    setRank(null);
    setNickname('');
    setSubmitError('');
    startLevel(1);
  };

  const handleClick = (num: number) => {
    if (gameState !== 'playing') return;
    const cfg = getLevelConfig(level);

    if (num !== nextTarget) {
      setWrongFlash(true);
      setTimeout(() => setWrongFlash(false), 350);
      setTimeLeft(prev => Math.max(prev - 2, 0));
      return;
    }

    setCorrectFlash(true);
    setTimeout(() => setCorrectFlash(false), 150);
    setTimeLeft(prev => Math.min(prev + 1, cfg.timeLimit));

    if (nextTarget === cfg.total) {
      clearTimer();
      const elapsed = (Date.now() - levelStartTime) / 1000;
      const newTimes = [...levelTimes, elapsed];
      setLevelTimes(newTimes);
      if (level >= MAX_LEVEL) {
        endGame(newTimes);
      } else {
        setGameState('levelClear');
        setTimeout(() => startLevel(level + 1), 1800);
      }
    } else {
      setNextTarget(nextTarget + 1);
    }
  };

  const handleSubmit = async () => {
    const name = nickname.trim();
    if (!name) return;
    if (name.length > 10) { setSubmitError(t.errLen); return; }
    setSubmitError('');
    setGameState('submitting');
    const clearedLevel = levelTimes.length;
    const avgTime = levelTimes.length > 0
      ? levelTimes.reduce((a, b) => a + b, 0) / levelTimes.length : 0;
    try {
      const res = await fetch('/api/leaderboard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, level: clearedLevel, avgTime }),
      });
      const data = await res.json() as { rank?: number; error?: string };
      if (data.rank) {
        setRank(data.rank);
        setGameState('submitted');
        fetch('/api/leaderboard').then(r => r.json())
          .then((d: { entries: LeaderboardEntry[] }) => setLeaderboard(d.entries)).catch(() => {});
      } else {
        setSubmitError(data.error ?? t.errFail);
        setGameState('finished');
      }
    } catch {
      setSubmitError(t.errNet);
      setGameState('finished');
    }
  };

  useEffect(() => {
    if (gameState === 'finished' && inputRef.current)
      setTimeout(() => inputRef.current?.focus(), 100);
  }, [gameState]);

  const clearedLevel = levelTimes.length;
  const cfg = getLevelConfig(level);
  const timeRatio = timeLeft / cfg.timeLimit;
  const tColor = timerColor(timeRatio);
  const avgTime = levelTimes.length > 0
    ? (levelTimes.reduce((a, b) => a + b, 0) / levelTimes.length).toFixed(1) : '0.0';
  const isAllClear = clearedLevel >= MAX_LEVEL;
  const diff = getDifficultyLabel(level);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: 'linear-gradient(160deg, #06061a 0%, #0e0b28 50%, #06061a 100%)',
      }}
    >
      {/* 상단 헤더 */}
      <div
        className="w-full flex items-center justify-between px-4 py-3"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
      >
        <Link
          href="/"
          className="flex items-center gap-1.5 text-white/40 hover:text-white/70 text-sm transition-colors"
        >
          ← {t.home}
        </Link>
        <span className="text-white/50 text-sm font-bold tracking-widest">🔢 NUMBER RUSH</span>
        <Link
          href="/number-game/leaderboard"
          className="flex items-center gap-1 text-sm font-bold px-3 py-1.5 rounded-full transition-all"
          style={{ background: 'rgba(99,102,241,0.25)', color: '#a5b4fc', border: '1px solid rgba(99,102,241,0.4)' }}
        >
          🏆 TOP
        </Link>
      </div>

      <div className="flex-1 flex flex-col items-center w-full max-w-2xl mx-auto px-4 pb-8">

        {/* ── 시작 화면 ── */}
        {gameState === 'idle' && (
          <div className="flex flex-col items-center gap-6 mt-8 w-full">
            <div className="text-center">
              <div className="text-7xl mb-3" style={{ filter: 'drop-shadow(0 0 20px rgba(99,102,241,0.6))' }}>🔢</div>
              <h1 className="text-4xl font-black text-white tracking-tight">{t.title}</h1>
              <p className="text-indigo-300/60 text-sm mt-2">{t.subtitle}</p>
            </div>

            {/* 레벨 미리보기 */}
            <div className="grid grid-cols-4 gap-2 w-full">
              {PREVIEW_LEVELS.map(lv => {
                const c = getLevelConfig(lv);
                const d = getDifficultyLabel(lv);
                const isLast = lv === MAX_LEVEL;
                return (
                  <div
                    key={lv}
                    className="rounded-2xl p-3 text-center flex flex-col gap-1"
                    style={{
                      background: isLast
                        ? 'linear-gradient(135deg, rgba(251,146,60,0.2), rgba(239,68,68,0.15))'
                        : 'rgba(255,255,255,0.06)',
                      border: `1px solid ${isLast ? 'rgba(251,146,60,0.4)' : 'rgba(255,255,255,0.1)'}`,
                    }}
                  >
                    <div className="font-black text-sm" style={{ color: d.color }}>{t.levelLabel(lv)}</div>
                    <div className="text-white/70 text-xs font-bold">{t.range(c.total)}</div>
                    <div className="text-white/40 text-xs">{t.timeLabel(c.timeLimit)}</div>
                    <div className="flex justify-center gap-0.5 mt-0.5">
                      {isLast
                        ? <span style={{ fontSize: '0.8rem' }}>👑</span>
                        : Array.from({ length: 5 }).map((_, i) => (
                          <span key={i} style={{ fontSize: '0.5rem', color: i < d.stars ? d.color : 'rgba(255,255,255,0.15)' }}>★</span>
                        ))
                      }
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 규칙 */}
            <div
              className="w-full rounded-2xl p-4 space-y-2"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <p className="text-white/80 text-sm font-bold mb-3">📋 {t.rulesTitle}</p>
              {[t.rule1, t.rule2, t.rule3, t.rule4].map((r, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-indigo-400 text-xs mt-0.5 flex-shrink-0">▸</span>
                  <p className="text-white/55 text-sm">{r}</p>
                </div>
              ))}
            </div>

            <button
              onClick={startGame}
              className="w-full py-5 rounded-2xl font-black text-xl text-white transition-all active:scale-95"
              style={{
                background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                boxShadow: '0 8px 32px rgba(99,102,241,0.5)',
              }}
            >
              {t.start} ▶
            </button>
          </div>
        )}

        {/* ── 레벨 클리어 연출 ── */}
        {gameState === 'levelClear' && (
          <div className="flex-1 flex flex-col items-center justify-center gap-5 text-center">
            <div className="text-7xl" style={{ filter: 'drop-shadow(0 0 30px rgba(52,211,153,0.8))' }}>✅</div>
            <div>
              <h2
                className="text-4xl font-black"
                style={{ color: '#34d399', textShadow: '0 0 20px rgba(52,211,153,0.5)' }}
              >
                {t.cleared(level)}
              </h2>
              <p className="text-white/40 text-sm mt-2">{t.nextLevel(level + 1)}</p>
            </div>
            {level + 1 <= MAX_LEVEL && (() => {
              const nc = getLevelConfig(level + 1);
              const nd = getDifficultyLabel(level + 1);
              return (
                <div
                  className="px-8 py-4 rounded-2xl"
                  style={{ background: 'rgba(255,255,255,0.07)', border: `1px solid ${nd.color}40` }}
                >
                  <div className="font-black text-lg" style={{ color: nd.color }}>{t.levelLabel(level + 1)}</div>
                  <div className="text-white/60 text-sm mt-1">{t.range(nc.total)} · {t.timeLabel(nc.timeLimit)}</div>
                </div>
              );
            })()}
          </div>
        )}

        {/* ── 게임 화면 ── */}
        {gameState === 'playing' && (
          <div className="w-full flex flex-col gap-3 mt-4">

            {/* HUD */}
            <div
              className="flex items-center justify-between px-4 py-3 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              {/* 레벨 + 난이도 */}
              <div className="flex items-center gap-2">
                <span
                  className="px-3 py-1 rounded-full text-sm font-black"
                  style={{ background: `${diff.color}25`, color: diff.color, border: `1px solid ${diff.color}50` }}
                >
                  {t.levelLabel(level)}
                </span>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} style={{ fontSize: '0.5rem', color: i < diff.stars ? diff.color : 'rgba(255,255,255,0.15)' }}>★</span>
                  ))}
                </div>
              </div>

              {/* 다음 숫자 */}
              <div className="text-center">
                <div className="text-white/40 text-xs">{t.nextLabel}</div>
                <div
                  className="text-3xl font-black leading-none"
                  style={{ color: '#fff', textShadow: '0 0 12px rgba(165,180,252,0.6)' }}
                >
                  {t.next(nextTarget)}
                </div>
              </div>

              {/* 타이머 */}
              <div
                className="px-4 py-1.5 rounded-xl font-black text-2xl transition-all"
                style={{
                  color: tColor,
                  textShadow: `0 0 12px ${tColor}80`,
                  background: `${tColor}15`,
                  border: `1px solid ${tColor}40`,
                  minWidth: 70,
                  textAlign: 'center',
                }}
              >
                {timeLeft}s
              </div>
            </div>

            {/* 타임바 */}
            <div
              className="w-full h-2 rounded-full overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.08)' }}
            >
              <div
                className="h-full rounded-full transition-all duration-1000"
                style={{
                  width: `${(timeLeft / cfg.timeLimit) * 100}%`,
                  background: `linear-gradient(90deg, ${tColor}99, ${tColor})`,
                  boxShadow: `0 0 8px ${tColor}60`,
                }}
              />
            </div>

            {/* 진행도 */}
            <div className="flex items-center justify-between px-1">
              <span className="text-white/30 text-xs">{nextTarget - 1} / {cfg.total}</span>
              <div className="w-32 h-1 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
                <div
                  className="h-full rounded-full transition-all"
                  style={{
                    width: `${((nextTarget - 1) / cfg.total) * 100}%`,
                    background: 'linear-gradient(90deg, #6366f1, #a855f7)',
                  }}
                />
              </div>
            </div>

            {/* 그리드 */}
            <div
              className="w-full rounded-2xl p-2.5 transition-all duration-200"
              style={{
                background: wrongFlash
                  ? 'rgba(239,68,68,0.1)'
                  : correctFlash
                    ? 'rgba(52,211,153,0.06)'
                    : 'rgba(255,255,255,0.04)',
                border: wrongFlash
                  ? '1.5px solid rgba(239,68,68,0.5)'
                  : correctFlash
                    ? '1.5px solid rgba(52,211,153,0.3)'
                    : '1.5px solid rgba(255,255,255,0.08)',
                boxShadow: wrongFlash
                  ? '0 0 20px rgba(239,68,68,0.2)'
                  : correctFlash
                    ? '0 0 20px rgba(52,211,153,0.15)'
                    : 'none',
              }}
            >
              <div
                className="grid gap-1.5"
                style={{ gridTemplateColumns: `repeat(${cfg.cols}, minmax(0, 1fr))` }}
              >
                {grid.map((num, idx) => {
                  const done = num < nextTarget;
                  const isNext = num === nextTarget;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleClick(num)}
                      disabled={done}
                      className="aspect-square flex items-center justify-center rounded-xl font-bold transition-all active:scale-90"
                      style={{
                        background: done
                          ? 'rgba(99,102,241,0.2)'
                          : isNext
                            ? 'rgba(99,102,241,0.15)'
                            : 'rgba(255,255,255,0.07)',
                        color: done
                          ? 'rgba(165,180,252,0.4)'
                          : isNext
                            ? '#a5b4fc'
                            : 'rgba(255,255,255,0.85)',
                        border: done
                          ? '1px solid rgba(99,102,241,0.2)'
                          : isNext
                            ? '1px solid rgba(99,102,241,0.6)'
                            : '1px solid rgba(255,255,255,0.1)',
                        boxShadow: isNext && !done ? '0 0 10px rgba(99,102,241,0.4)' : 'none',
                        fontSize: cfg.cols <= 5 ? '1.2rem' : '0.72rem',
                        cursor: done ? 'default' : 'pointer',
                      }}
                    >
                      {done ? '✓' : num}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ── 게임 오버 ── */}
        {(gameState === 'finished' || gameState === 'submitting') && (
          <div className="w-full flex flex-col items-center gap-5 mt-6">
            {/* 결과 헤더 */}
            <div
              className="w-full rounded-3xl p-6 text-center"
              style={{
                background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(168,85,247,0.1))',
                border: '1px solid rgba(99,102,241,0.25)',
              }}
            >
              <div className="text-6xl mb-3">
                {isAllClear ? '👑' : clearedLevel >= 10 ? '🏆' : clearedLevel >= 5 ? '🥈' : clearedLevel >= 1 ? '🥉' : '😅'}
              </div>
              <h2 className="text-3xl font-black text-white">
                {isAllClear ? t.allClear : clearedLevel > 0 ? t.cleared(clearedLevel) : t.failed(level)}
              </h2>
              {clearedLevel > 0 && (
                <p className="text-indigo-300/60 text-sm mt-2">{t.avg(avgTime)}</p>
              )}
            </div>

            {/* 등록 폼 */}
            {clearedLevel > 0 ? (
              <div
                className="w-full rounded-2xl p-4"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <p className="text-white/50 text-sm mb-3 text-center">{t.top100prompt}</p>
                <div className="flex gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder={t.placeholder}
                    value={nickname}
                    onChange={e => setNickname(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                    maxLength={10}
                    disabled={gameState === 'submitting'}
                    className="flex-1 px-4 py-3 rounded-xl text-sm text-white outline-none"
                    style={{
                      background: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(255,255,255,0.15)',
                    }}
                  />
                  <button
                    onClick={handleSubmit}
                    disabled={gameState === 'submitting' || !nickname.trim()}
                    className="px-5 py-3 rounded-xl font-bold text-sm text-white transition-all disabled:opacity-40"
                    style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)' }}
                  >
                    {gameState === 'submitting' ? '...' : t.register}
                  </button>
                </div>
                {submitError && <p className="text-red-400 text-xs mt-2 text-center">{submitError}</p>}
              </div>
            ) : (
              <div
                className="w-full rounded-2xl py-4 text-center"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <p className="text-white/40 text-sm">{t.needClear}</p>
              </div>
            )}

            {/* TOP 10 */}
            {!loadingBoard && leaderboard.length > 0 && (
              <div className="w-full">
                <p className="text-white/30 text-xs font-bold uppercase tracking-wider mb-2">{t.top10}</p>
                <div className="space-y-1.5">
                  {leaderboard.slice(0, 10).map((e, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm"
                      style={{
                        background: i < 3 ? 'rgba(99,102,241,0.12)' : 'rgba(255,255,255,0.04)',
                        border: i < 3 ? '1px solid rgba(99,102,241,0.25)' : '1px solid rgba(255,255,255,0.06)',
                      }}
                    >
                      <span className="w-6 text-center font-bold" style={{ color: i === 0 ? '#fbbf24' : i === 1 ? '#d1d5db' : i === 2 ? '#fb923c' : 'rgba(255,255,255,0.3)' }}>
                        {i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : i + 1}
                      </span>
                      <span className="flex-1 text-white/80 font-medium truncate">{e.name}</span>
                      <span className="text-indigo-400 font-bold text-xs">Lv.{e.level}</span>
                      <span className="text-white/30 text-xs">{e.avgTime}s</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <button
              onClick={startGame}
              className="w-full py-4 rounded-2xl font-black text-white transition-all active:scale-95"
              style={{
                background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                boxShadow: '0 4px 20px rgba(99,102,241,0.4)',
              }}
            >
              {t.retry} ▶
            </button>
          </div>
        )}

        {/* ── 등록 완료 ── */}
        {gameState === 'submitted' && (
          <div className="w-full flex flex-col items-center gap-5 mt-6 text-center">
            <div
              className="w-full rounded-3xl p-8"
              style={{
                background: 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(168,85,247,0.15))',
                border: '1px solid rgba(99,102,241,0.3)',
              }}
            >
              <div className="text-6xl mb-3">🎉</div>
              <h2 className="text-3xl font-black text-white">{t.registered}</h2>
              {rank && rank <= 100
                ? <p className="text-2xl font-black mt-3" style={{ color: '#a5b4fc' }}>{t.rankMsg(rank)}</p>
                : <p className="text-white/50 text-sm mt-2">{t.rankOut}</p>
              }
            </div>

            {leaderboard.length > 0 && (
              <div className="w-full">
                <div className="space-y-1.5">
                  {leaderboard.slice(0, 10).map((e, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm"
                      style={{
                        background: e.name === nickname ? 'rgba(99,102,241,0.2)' : 'rgba(255,255,255,0.04)',
                        border: e.name === nickname ? '1px solid rgba(99,102,241,0.5)' : '1px solid rgba(255,255,255,0.06)',
                      }}
                    >
                      <span className="w-6 text-center font-bold" style={{ color: i === 0 ? '#fbbf24' : i === 1 ? '#d1d5db' : i === 2 ? '#fb923c' : 'rgba(255,255,255,0.3)' }}>
                        {i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : i + 1}
                      </span>
                      <span className="flex-1 text-left text-white/80 font-medium truncate">{e.name}</span>
                      <span className="text-indigo-400 font-bold text-xs">Lv.{e.level}</span>
                      <span className="text-white/30 text-xs">{e.avgTime}s</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/number-game/leaderboard"
                  className="block mt-4 text-center text-sm transition-colors"
                  style={{ color: '#818cf8' }}
                >
                  {t.seeAll}
                </Link>
              </div>
            )}

            <button
              onClick={startGame}
              className="w-full py-4 rounded-2xl font-black text-white transition-all active:scale-95"
              style={{
                background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                boxShadow: '0 4px 20px rgba(99,102,241,0.4)',
              }}
            >
              {t.retry} ▶
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
