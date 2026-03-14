'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import type { LeaderboardEntry } from '@/app/api/leaderboard/route';

const LEVELS = [
  { count: 16, cols: 4, time: 20 },
  { count: 25, cols: 5, time: 30 },
  { count: 36, cols: 6, time: 40 },
  { count: 49, cols: 7, time: 50 },
  { count: 64, cols: 8, time: 60 },
  { count: 81, cols: 9, time: 70 },
];

function getLevelConfig(level: number) {
  return LEVELS[Math.min(level - 1, LEVELS.length - 1)];
}

function generateGrid(level: number): number[] {
  const { count } = getLevelConfig(level);
  const nums = Array.from({ length: count }, (_, i) => i + 1);
  for (let i = nums.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  return nums;
}

type GameState = 'idle' | 'playing' | 'finished' | 'submitting' | 'submitted';

export default function NumberGameClient() {
  const [gameState, setGameState] = useState<GameState>('idle');
  const [level, setLevel] = useState(1);
  const [grid, setGrid] = useState<number[]>([]);
  const [nextTarget, setNextTarget] = useState(1);
  const [timeLeft, setTimeLeft] = useState(20);
  const [wrongFlash, setWrongFlash] = useState(false);
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
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const startLevel = useCallback((lv: number) => {
    const cfg = getLevelConfig(lv);
    setLevel(lv);
    setGrid(generateGrid(lv));
    setNextTarget(1);
    setTimeLeft(cfg.time);
    setLevelStartTime(Date.now());
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
      setTimeLeft(t => {
        if (t <= 1) {
          clearTimer();
          setGameState('finished');
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return clearTimer;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState, level]);

  // 타임아웃 게임 오버
  useEffect(() => {
    if (gameState === 'playing' && timeLeft === 0) {
      endGame(levelTimes);
    }
  }, [timeLeft, gameState, endGame, levelTimes]);

  const startGame = () => {
    setLevelTimes([]);
    setRank(null);
    setNickname('');
    setSubmitError('');
    setGameState('playing');
    startLevel(1);
  };

  const handleClick = (num: number) => {
    if (gameState !== 'playing') return;

    if (num !== nextTarget) {
      setWrongFlash(true);
      setTimeout(() => setWrongFlash(false), 300);
      return;
    }

    const cfg = getLevelConfig(level);
    const newTarget = nextTarget + 1;

    if (newTarget > cfg.count) {
      // 레벨 클리어
      clearTimer();
      const elapsed = (Date.now() - levelStartTime) / 1000;
      const newTimes = [...levelTimes, elapsed];
      setLevelTimes(newTimes);
      startLevel(level + 1);
    } else {
      setNextTarget(newTarget);
    }
  };

  const handleSubmit = async () => {
    const name = nickname.trim();
    if (!name) return;
    if (name.length > 10) {
      setSubmitError('닉네임은 10자 이내로 입력해주세요');
      return;
    }
    setSubmitError('');
    setGameState('submitting');

    const clearedLevel = levelTimes.length;
    const avgTime = levelTimes.length > 0
      ? levelTimes.reduce((a, b) => a + b, 0) / levelTimes.length
      : 0;

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
        fetch('/api/leaderboard')
          .then(r => r.json())
          .then((d: { entries: LeaderboardEntry[] }) => setLeaderboard(d.entries))
          .catch(() => {});
      } else {
        setSubmitError(data.error ?? '등록에 실패했습니다');
        setGameState('finished');
      }
    } catch {
      setSubmitError('네트워크 오류가 발생했습니다');
      setGameState('finished');
    }
  };

  useEffect(() => {
    if (gameState === 'finished' && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [gameState]);

  const cfg = getLevelConfig(level);
  const clearedLevel = levelTimes.length;
  const avgTime = levelTimes.length > 0
    ? (levelTimes.reduce((a, b) => a + b, 0) / levelTimes.length).toFixed(1)
    : '0.0';

  return (
    <div
      className="min-h-screen flex flex-col items-center"
      style={{ background: 'linear-gradient(135deg, #050520 0%, #0a0a2e 50%, #050520 100%)' }}
    >
      <div className="w-full max-w-2xl px-4 pt-6 pb-2 flex items-center justify-between">
        <Link href="/" className="text-white/40 hover:text-white/70 text-sm transition-colors">
          ← 홈으로
        </Link>
        <Link
          href="/number-game/leaderboard"
          className="text-sm font-medium transition-colors px-3 py-1.5 rounded-lg"
          style={{ color: '#c084fc', background: 'rgba(124,58,237,0.15)' }}
        >
          🏆 TOP 100
        </Link>
      </div>

      <div className="w-full max-w-2xl px-4 flex-1 flex flex-col items-center justify-start pt-4">

        {/* 시작 화면 */}
        {gameState === 'idle' && (
          <div className="flex flex-col items-center gap-6 mt-8 text-center">
            <div>
              <div className="text-6xl mb-3">🔢</div>
              <h1 className="text-3xl font-bold text-white mb-2">숫자 순서대로 터치</h1>
              <p className="text-white/50 text-sm">1부터 순서대로 빠르게 눌러라!</p>
            </div>

            <div
              className="w-full rounded-xl p-4 text-left space-y-2"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <p className="text-white/70 text-sm">📋 <span className="text-white/90 font-medium">규칙</span></p>
              <p className="text-white/50 text-sm">• 1, 2, 3... 순서대로 눌러야 합니다</p>
              <p className="text-white/50 text-sm">• 숫자 위치는 매번 랜덤으로 섞입니다</p>
              <p className="text-white/50 text-sm">• 시간 안에 다 누르면 다음 레벨</p>
              <p className="text-white/50 text-sm">• 레벨이 오를수록 숫자가 많아집니다</p>
            </div>

            <div className="grid grid-cols-3 gap-3 w-full text-center text-sm">
              {LEVELS.slice(0, 3).map((l, i) => (
                <div key={i} className="rounded-lg p-3" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="text-purple-400 font-bold">Lv.{i + 1}</div>
                  <div className="text-white/60">1~{l.count}</div>
                  <div className="text-white/40 text-xs">{l.time}초</div>
                </div>
              ))}
            </div>

            <button
              onClick={startGame}
              className="w-full py-4 rounded-xl font-bold text-lg text-white transition-all active:scale-95"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #6d28d9)' }}
            >
              게임 시작
            </button>
          </div>
        )}

        {/* 게임 화면 */}
        {gameState === 'playing' && (
          <div className="w-full flex flex-col gap-3">
            {/* 상태 바 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className="px-3 py-1 rounded-full text-sm font-bold"
                  style={{ background: 'rgba(124,58,237,0.3)', color: '#c084fc' }}
                >
                  Lv.{level}
                </span>
                <span
                  className="px-3 py-1 rounded-full text-sm font-bold"
                  style={{ background: 'rgba(255,255,255,0.08)', color: '#fff' }}
                >
                  다음: {nextTarget}
                </span>
              </div>
              <div
                className="px-4 py-1.5 rounded-full font-mono font-bold text-lg"
                style={{
                  background: timeLeft <= 5 ? 'rgba(239,68,68,0.2)' : 'rgba(255,255,255,0.06)',
                  color: timeLeft <= 5 ? '#f87171' : '#fff',
                  border: `1px solid ${timeLeft <= 5 ? 'rgba(239,68,68,0.4)' : 'rgba(255,255,255,0.1)'}`,
                }}
              >
                {timeLeft}초
              </div>
            </div>

            {/* 타이머 바 */}
            <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
              <div
                className="h-full rounded-full transition-all duration-1000"
                style={{
                  width: `${(timeLeft / cfg.time) * 100}%`,
                  background: timeLeft <= 5 ? '#ef4444' : 'linear-gradient(90deg, #7c3aed, #a855f7)',
                }}
              />
            </div>

            {/* 그리드 */}
            <div
              className="w-full rounded-xl p-2 transition-all"
              style={{
                background: wrongFlash ? 'rgba(239,68,68,0.08)' : 'rgba(255,255,255,0.03)',
                border: wrongFlash ? '1px solid rgba(239,68,68,0.3)' : '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div
                className="grid gap-1.5"
                style={{ gridTemplateColumns: `repeat(${cfg.cols}, minmax(0, 1fr))` }}
              >
                {grid.map((num, idx) => {
                  const done = num < nextTarget;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleClick(num)}
                      disabled={done}
                      className="aspect-square flex items-center justify-center rounded-lg font-bold transition-all active:scale-90"
                      style={{
                        background: done ? 'rgba(124,58,237,0.15)' : 'rgba(255,255,255,0.07)',
                        color: done ? 'rgba(167,139,250,0.4)' : 'rgba(255,255,255,0.9)',
                        border: done ? '1px solid rgba(124,58,237,0.2)' : '1px solid rgba(255,255,255,0.1)',
                        fontSize: cfg.count > 49 ? '0.75rem' : cfg.count > 25 ? '0.85rem' : '1rem',
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

        {/* 게임 오버 */}
        {(gameState === 'finished' || gameState === 'submitting') && (
          <div className="w-full flex flex-col items-center gap-5 mt-4">
            <div className="text-center">
              <div className="text-5xl mb-2">
                {clearedLevel >= 5 ? '🏆' : clearedLevel >= 3 ? '🥈' : clearedLevel >= 1 ? '🥉' : '😅'}
              </div>
              <h2 className="text-2xl font-bold text-white">
                {clearedLevel > 0 ? `레벨 ${clearedLevel} 클리어!` : '레벨 1 실패'}
              </h2>
              {clearedLevel > 0 && (
                <p className="text-white/50 text-sm mt-1">평균 {avgTime}초 / 레벨</p>
              )}
            </div>

            {clearedLevel > 0 ? (
              <div
                className="w-full rounded-xl p-4 text-center"
                style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)' }}
              >
                <p className="text-white/60 text-sm mb-3">TOP 100에 이름을 남기세요</p>
                <div className="flex gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="닉네임 (최대 10자)"
                    value={nickname}
                    onChange={e => setNickname(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                    maxLength={10}
                    disabled={gameState === 'submitting'}
                    className="flex-1 px-3 py-2.5 rounded-lg text-sm text-white outline-none"
                    style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
                  />
                  <button
                    onClick={handleSubmit}
                    disabled={gameState === 'submitting' || !nickname.trim()}
                    className="px-4 py-2.5 rounded-lg font-bold text-sm text-white transition-all disabled:opacity-40"
                    style={{ background: 'linear-gradient(135deg, #7c3aed, #6d28d9)' }}
                  >
                    {gameState === 'submitting' ? '...' : '등록'}
                  </button>
                </div>
                {submitError && <p className="text-red-400 text-xs mt-2">{submitError}</p>}
              </div>
            ) : (
              <p className="text-white/40 text-sm">레벨 1을 클리어해야 등록할 수 있어요</p>
            )}

            {!loadingBoard && leaderboard.length > 0 && (
              <div className="w-full">
                <p className="text-white/40 text-xs mb-2">현재 TOP 10</p>
                <div className="space-y-1.5">
                  {leaderboard.slice(0, 10).map((e, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between px-3 py-2 rounded-lg text-sm"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
                    >
                      <span className="text-white/50">{i + 1}위</span>
                      <span className="text-white/80 font-medium">{e.name}</span>
                      <span className="text-purple-400">Lv.{e.level}</span>
                      <span className="text-white/40">{e.avgTime}초</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <button
              onClick={startGame}
              className="w-full py-3 rounded-xl font-bold text-white transition-all active:scale-95"
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              다시 도전
            </button>
          </div>
        )}

        {/* 등록 완료 */}
        {gameState === 'submitted' && (
          <div className="w-full flex flex-col items-center gap-5 mt-4 text-center">
            <div>
              <div className="text-5xl mb-3">🎉</div>
              <h2 className="text-2xl font-bold text-white">등록 완료!</h2>
              {rank && rank <= 100
                ? <p className="text-purple-300 text-lg font-bold mt-2">현재 {rank}위</p>
                : <p className="text-white/50 text-sm mt-2">100위 밖이에요. 재도전!</p>
              }
            </div>

            {leaderboard.length > 0 && (
              <div className="w-full">
                <div className="space-y-1.5">
                  {leaderboard.slice(0, 10).map((e, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm"
                      style={{
                        background: e.name === nickname ? 'rgba(124,58,237,0.15)' : 'rgba(255,255,255,0.04)',
                        border: e.name === nickname ? '1px solid rgba(124,58,237,0.3)' : '1px solid rgba(255,255,255,0.06)',
                      }}
                    >
                      <span className="w-8 text-white/40 font-mono">{i + 1}</span>
                      <span className="flex-1 text-left text-white/80 font-medium">{e.name}</span>
                      <span className="text-purple-400 mr-3">Lv.{e.level}</span>
                      <span className="text-white/40 text-xs">{e.avgTime}초</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/number-game/leaderboard"
                  className="block mt-3 text-center text-sm text-purple-400 hover:text-purple-300 transition-colors"
                >
                  전체 TOP 100 보기 →
                </Link>
              </div>
            )}

            <button
              onClick={startGame}
              className="w-full py-3 rounded-xl font-bold text-white transition-all active:scale-95"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #6d28d9)' }}
            >
              다시 도전
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
