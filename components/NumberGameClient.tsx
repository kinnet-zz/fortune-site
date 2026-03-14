'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import type { LeaderboardEntry } from '@/app/api/leaderboard/route';

// 레벨 설정
const LEVELS = [
  { max: 20, cols: 5, time: 15 },
  { max: 30, cols: 6, time: 15 },
  { max: 42, cols: 7, time: 12 },
  { max: 56, cols: 7, time: 12 },
  { max: 72, cols: 8, time: 10 },
  { max: 90, cols: 9, time: 10 },
];

function getLevelConfig(level: number) {
  return LEVELS[Math.min(level - 1, LEVELS.length - 1)];
}

function generateGrid(level: number): { numbers: number[]; missing: number } {
  const { max } = getLevelConfig(level);
  const all = Array.from({ length: max }, (_, i) => i + 1);
  const missingIdx = Math.floor(Math.random() * max);
  const missing = all[missingIdx];
  const numbers = all.filter((_, i) => i !== missingIdx);
  // 셔플
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }
  return { numbers, missing };
}

type GameState = 'idle' | 'playing' | 'finished' | 'submitting' | 'submitted';

export default function NumberGameClient() {
  const [gameState, setGameState] = useState<GameState>('idle');
  const [level, setLevel] = useState(1);
  const [grid, setGrid] = useState<{ numbers: number[]; missing: number }>({ numbers: [], missing: 0 });
  const [timeLeft, setTimeLeft] = useState(15);
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
    setTimeLeft(cfg.time);
    setLevelStartTime(Date.now());
  }, []);

  const endGame = useCallback((finalLevel: number, times: number[]) => {
    clearTimer();
    setGameState('finished');
    setLevelTimes(times);
    setLevel(finalLevel);
    // 리더보드 미리 로드
    setLoadingBoard(true);
    fetch('/api/leaderboard')
      .then(r => r.json())
      .then((d: { entries: LeaderboardEntry[] }) => setLeaderboard(d.entries))
      .catch(() => {})
      .finally(() => setLoadingBoard(false));
  }, []);

  // 타이머
  useEffect(() => {
    if (gameState !== 'playing') return;
    clearTimer();
    timerRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearTimer();
          endGame(level, levelTimes);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return clearTimer;
  }, [gameState, level, endGame, levelTimes]);

  // 게임 시작
  const startGame = () => {
    setLevelTimes([]);
    setRank(null);
    setNickname('');
    setSubmitError('');
    setGameState('playing');
    startLevel(1);
  };

  // 숫자 클릭
  const handleClick = (num: number) => {
    if (gameState !== 'playing') return;
    const elapsed = (Date.now() - levelStartTime) / 1000;

    if (num === grid.missing) {
      // 정답
      clearTimer();
      const newTimes = [...levelTimes, elapsed];
      setLevelTimes(newTimes);
      const nextLevel = level + 1;
      setGameState('playing');
      startLevel(nextLevel);
    } else {
      // 오답 — 화면 빨간 플래시
      setWrongFlash(true);
      setTimeout(() => setWrongFlash(false), 400);
    }
  };

  // 점수 제출
  const handleSubmit = async () => {
    const name = nickname.trim();
    if (!name) return;
    if (name.length > 10) {
      setSubmitError('닉네임은 10자 이내로 입력해주세요');
      return;
    }
    setSubmitError('');
    setGameState('submitting');

    const avgTime = levelTimes.length > 0
      ? levelTimes.reduce((a, b) => a + b, 0) / levelTimes.length
      : 0;
    // 클리어한 레벨 수 = levelTimes.length
    const clearedLevel = levelTimes.length;

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
        // 리더보드 갱신
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
  const avgTime = levelTimes.length > 0
    ? (levelTimes.reduce((a, b) => a + b, 0) / levelTimes.length).toFixed(1)
    : '0.0';
  const clearedLevel = levelTimes.length;

  return (
    <div
      className="min-h-screen flex flex-col items-center"
      style={{ background: 'linear-gradient(135deg, #050520 0%, #0a0a2e 50%, #050520 100%)' }}
    >
      {/* 헤더 */}
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
              <h1 className="text-3xl font-bold text-white mb-2">빠진 숫자 찾기</h1>
              <p className="text-white/50 text-sm">숫자 그리드에서 사라진 숫자를 찾아라!</p>
            </div>

            <div
              className="w-full rounded-xl p-4 text-left space-y-2"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <p className="text-white/70 text-sm">📋 <span className="text-white/90 font-medium">규칙</span></p>
              <p className="text-white/50 text-sm">• 1~N 숫자 중 하나가 사라졌습니다</p>
              <p className="text-white/50 text-sm">• 빠진 숫자를 클릭하면 다음 레벨</p>
              <p className="text-white/50 text-sm">• 시간 초과 또는 틀리면 게임 오버</p>
              <p className="text-white/50 text-sm">• 레벨이 오를수록 숫자는 많아지고 시간은 줄어듭니다</p>
            </div>

            <div className="grid grid-cols-3 gap-3 w-full text-center text-sm">
              {LEVELS.slice(0, 3).map((l, i) => (
                <div key={i} className="rounded-lg p-3" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="text-purple-400 font-bold">Lv.{i + 1}</div>
                  <div className="text-white/60">1~{l.max}</div>
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
                <span className="text-white/40 text-sm">1~{cfg.max} 중</span>
              </div>
              <div
                className="px-4 py-1.5 rounded-full font-mono font-bold text-lg"
                style={{
                  background: timeLeft <= 3 ? 'rgba(239,68,68,0.2)' : 'rgba(255,255,255,0.06)',
                  color: timeLeft <= 3 ? '#f87171' : '#fff',
                  border: `1px solid ${timeLeft <= 3 ? 'rgba(239,68,68,0.4)' : 'rgba(255,255,255,0.1)'}`,
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
                  background: timeLeft <= 3 ? '#ef4444' : 'linear-gradient(90deg, #7c3aed, #a855f7)',
                }}
              />
            </div>

            {/* 그리드 */}
            <div
              className="w-full rounded-xl p-3 transition-all"
              style={{
                background: wrongFlash ? 'rgba(239,68,68,0.1)' : 'rgba(255,255,255,0.03)',
                border: wrongFlash ? '1px solid rgba(239,68,68,0.3)' : '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div
                className="grid gap-1.5"
                style={{ gridTemplateColumns: `repeat(${cfg.cols}, minmax(0, 1fr))` }}
              >
                {grid.numbers.map((num, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleClick(num)}
                    className="aspect-square flex items-center justify-center rounded-lg font-medium text-sm transition-all active:scale-90"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      color: 'rgba(255,255,255,0.8)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      fontSize: cfg.max > 56 ? '0.7rem' : cfg.max > 30 ? '0.8rem' : '0.9rem',
                    }}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 게임 오버 / 점수 등록 */}
        {(gameState === 'finished' || gameState === 'submitting') && (
          <div className="w-full flex flex-col items-center gap-5 mt-4">
            <div className="text-center">
              <div className="text-5xl mb-2">{clearedLevel >= 6 ? '🏆' : clearedLevel >= 4 ? '🥈' : clearedLevel >= 2 ? '🥉' : '😅'}</div>
              <h2 className="text-2xl font-bold text-white">레벨 {clearedLevel} 클리어!</h2>
              <p className="text-white/50 text-sm mt-1">평균 {avgTime}초 / 레벨</p>
            </div>

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

            {/* 현재 리더보드 미리보기 */}
            {!loadingBoard && leaderboard.length > 0 && (
              <div className="w-full">
                <p className="text-white/40 text-xs mb-2">현재 TOP 5</p>
                <div className="space-y-1.5">
                  {leaderboard.slice(0, 5).map((e, i) => (
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
              {rank && rank <= 100 ? (
                <p className="text-purple-300 text-lg font-bold mt-2">현재 {rank}위</p>
              ) : (
                <p className="text-white/50 text-sm mt-2">100위 밖이에요. 재도전하세요!</p>
              )}
            </div>

            {/* 리더보드 */}
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
