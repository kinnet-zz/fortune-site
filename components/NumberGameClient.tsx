'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { useLang } from '@/lib/useLang';
import type { LeaderboardEntry } from '@/app/api/leaderboard/route';

const TOTAL = 100;
const COLS = 10;
const START_TIME = 60;
const TIME_DECREASE = 5;
const MIN_TIME = 15;

const tr = {
  ko: {
    home: '← 홈으로',
    title: '1~100 순서대로 터치',
    subtitle: '매 라운드마다 더 빠르게!',
    rulesTitle: '규칙',
    rule1: '• 1~100 숫자가 랜덤 위치에 섞여 있습니다',
    rule2: '• 1부터 순서대로 눌러야 합니다',
    rule3: '• 클리어하면 다음 라운드, 5초씩 짧아집니다',
    rule4: '• 시간이 다 되면 게임 오버',
    round: (r: number) => `${r}라운드`,
    next: (n: number) => `다음: ${n}`,
    sec: (t: number) => `${t}초`,
    start: '게임 시작',
    cleared: (r: number) => `${r}라운드 클리어!`,
    failed: '1라운드 실패',
    avg: (t: string) => `평균 ${t}초 / 라운드`,
    top100prompt: 'TOP 100에 이름을 남기세요',
    placeholder: '닉네임 (최대 10자)',
    register: '등록',
    needClear: '1라운드를 클리어해야 등록할 수 있어요',
    top10: '현재 TOP 10',
    retry: '다시 도전',
    registered: '등록 완료!',
    rankMsg: (r: number) => `현재 ${r}위`,
    rankOut: '100위 밖이에요. 재도전!',
    seeAll: '전체 TOP 100 보기 →',
    errLen: '닉네임은 10자 이내로 입력해주세요',
    errFail: '등록에 실패했습니다',
    errNet: '네트워크 오류가 발생했습니다',
    rankSuffix: '위',
    roundSuffix: '라운드',
    secSuffix: '초',
    submitting: '...',
  },
  en: {
    home: '← Home',
    title: 'Tap 1~100 in Order',
    subtitle: 'Faster every round!',
    rulesTitle: 'Rules',
    rule1: '• Numbers 1~100 are shuffled randomly',
    rule2: '• Tap them in order starting from 1',
    rule3: '• Each round clears → next round, 5s shorter',
    rule4: '• Time runs out = Game over',
    round: (r: number) => `Round ${r}`,
    next: (n: number) => `Next: ${n}`,
    sec: (t: number) => `${t}s`,
    start: 'Start Game',
    cleared: (r: number) => `Round ${r} Cleared!`,
    failed: 'Round 1 Failed',
    avg: (t: string) => `Avg ${t}s / round`,
    top100prompt: 'Leave your name in TOP 100',
    placeholder: 'Nickname (max 10 chars)',
    register: 'Submit',
    needClear: 'Clear at least 1 round to register',
    top10: 'Current TOP 10',
    retry: 'Try Again',
    registered: 'Registered!',
    rankMsg: (r: number) => `Current rank: #${r}`,
    rankOut: 'Outside top 100. Try again!',
    seeAll: 'See all TOP 100 →',
    errLen: 'Nickname must be 10 chars or less',
    errFail: 'Registration failed',
    errNet: 'Network error occurred',
    rankSuffix: '',
    roundSuffix: ' rounds',
    secSuffix: 's',
    submitting: '...',
  },
  zh: {
    home: '← 首页',
    title: '按顺序点击 1~100',
    subtitle: '每轮速度更快！',
    rulesTitle: '规则',
    rule1: '• 1~100 的数字随机排列',
    rule2: '• 从 1 开始按顺序点击',
    rule3: '• 完成后进入下一轮，每轮缩短5秒',
    rule4: '• 时间耗尽即游戏结束',
    round: (r: number) => `第${r}轮`,
    next: (n: number) => `下一个: ${n}`,
    sec: (t: number) => `${t}秒`,
    start: '开始游戏',
    cleared: (r: number) => `第${r}轮通关！`,
    failed: '第1轮失败',
    avg: (t: string) => `平均 ${t}秒 / 轮`,
    top100prompt: '在 TOP 100 留下你的名字',
    placeholder: '昵称（最多10个字符）',
    register: '登记',
    needClear: '至少通过1轮才能登记',
    top10: '当前 TOP 10',
    retry: '再次挑战',
    registered: '登记完成！',
    rankMsg: (r: number) => `当前排名第 ${r} 位`,
    rankOut: '未进入前100名，再试试！',
    seeAll: '查看全部 TOP 100 →',
    errLen: '昵称不能超过10个字符',
    errFail: '登记失败',
    errNet: '网络错误',
    rankSuffix: '名',
    roundSuffix: '轮',
    secSuffix: '秒',
    submitting: '...',
  },
  ja: {
    home: '← ホームへ',
    title: '1~100 順番にタップ',
    subtitle: '毎ラウンドもっと速く！',
    rulesTitle: 'ルール',
    rule1: '• 1~100の数字がランダムに並んでいます',
    rule2: '• 1から順番にタップしてください',
    rule3: '• クリアすると次ラウンド、5秒ずつ短くなります',
    rule4: '• 時間切れでゲームオーバー',
    round: (r: number) => `ラウンド${r}`,
    next: (n: number) => `次: ${n}`,
    sec: (t: number) => `${t}秒`,
    start: 'ゲームスタート',
    cleared: (r: number) => `ラウンド${r}クリア！`,
    failed: 'ラウンド1失敗',
    avg: (t: string) => `平均 ${t}秒 / ラウンド`,
    top100prompt: 'TOP 100に名前を残しましょう',
    placeholder: 'ニックネーム（最大10文字）',
    register: '登録',
    needClear: 'ラウンド1をクリアすると登録できます',
    top10: '現在の TOP 10',
    retry: '再挑戦',
    registered: '登録完了！',
    rankMsg: (r: number) => `現在${r}位`,
    rankOut: '100位圏外です。再挑戦！',
    seeAll: '全 TOP 100 を見る →',
    errLen: 'ニックネームは10文字以内にしてください',
    errFail: '登録に失敗しました',
    errNet: 'ネットワークエラーが発生しました',
    rankSuffix: '位',
    roundSuffix: 'ラウンド',
    secSuffix: '秒',
    submitting: '...',
  },
};

function getTimeLimit(round: number): number {
  return Math.max(START_TIME - (round - 1) * TIME_DECREASE, MIN_TIME);
}

function generateGrid(): number[] {
  const nums = Array.from({ length: TOTAL }, (_, i) => i + 1);
  for (let i = nums.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  return nums;
}

type GameState = 'idle' | 'playing' | 'finished' | 'submitting' | 'submitted';

export default function NumberGameClient() {
  const { lang } = useLang();
  const t = tr[lang as keyof typeof tr] ?? tr.ko;

  const [gameState, setGameState] = useState<GameState>('idle');
  const [round, setRound] = useState(1);
  const [grid, setGrid] = useState<number[]>([]);
  const [nextTarget, setNextTarget] = useState(1);
  const [timeLeft, setTimeLeft] = useState(START_TIME);
  const [wrongFlash, setWrongFlash] = useState(false);
  const [roundTimes, setRoundTimes] = useState<number[]>([]);
  const [roundStartTime, setRoundStartTime] = useState(0);
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

  const startRound = useCallback((r: number) => {
    setRound(r);
    setGrid(generateGrid());
    setNextTarget(1);
    setTimeLeft(getTimeLimit(r));
    setRoundStartTime(Date.now());
  }, []);

  const endGame = useCallback((times: number[]) => {
    clearTimer();
    setGameState('finished');
    setRoundTimes(times);
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
  }, [gameState, round]);

  useEffect(() => {
    if (gameState === 'playing' && timeLeft === 0) endGame(roundTimes);
  }, [timeLeft, gameState, endGame, roundTimes]);

  const startGame = () => {
    setRoundTimes([]);
    setRank(null);
    setNickname('');
    setSubmitError('');
    setGameState('playing');
    startRound(1);
  };

  const handleClick = (num: number) => {
    if (gameState !== 'playing') return;
    if (num !== nextTarget) {
      setWrongFlash(true);
      setTimeout(() => setWrongFlash(false), 300);
      return;
    }
    if (nextTarget === TOTAL) {
      clearTimer();
      const elapsed = (Date.now() - roundStartTime) / 1000;
      const newTimes = [...roundTimes, elapsed];
      setRoundTimes(newTimes);
      startRound(round + 1);
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

    const clearedRounds = roundTimes.length;
    const avgTime = roundTimes.length > 0
      ? roundTimes.reduce((a, b) => a + b, 0) / roundTimes.length
      : 0;

    try {
      const res = await fetch('/api/leaderboard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, level: clearedRounds, avgTime }),
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
        setSubmitError(data.error ?? t.errFail);
        setGameState('finished');
      }
    } catch {
      setSubmitError(t.errNet);
      setGameState('finished');
    }
  };

  useEffect(() => {
    if (gameState === 'finished' && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [gameState]);

  const clearedRounds = roundTimes.length;
  const timeLimit = getTimeLimit(round);
  const avgTime = roundTimes.length > 0
    ? (roundTimes.reduce((a, b) => a + b, 0) / roundTimes.length).toFixed(1)
    : '0.0';

  return (
    <div
      className="min-h-screen flex flex-col items-center"
      style={{ background: 'linear-gradient(135deg, #050520 0%, #0a0a2e 50%, #050520 100%)' }}
    >
      <div className="w-full max-w-2xl px-4 pt-6 pb-2 flex items-center justify-between">
        <Link href="/" className="text-white/40 hover:text-white/70 text-sm transition-colors">
          {t.home}
        </Link>
        <Link
          href="/number-game/leaderboard"
          className="text-sm font-medium px-3 py-1.5 rounded-lg"
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
              <h1 className="text-3xl font-bold text-white mb-2">{t.title}</h1>
              <p className="text-white/50 text-sm">{t.subtitle}</p>
            </div>

            <div
              className="w-full rounded-xl p-4 text-left space-y-2"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <p className="text-white/70 text-sm">📋 <span className="text-white/90 font-medium">{t.rulesTitle}</span></p>
              <p className="text-white/50 text-sm">{t.rule1}</p>
              <p className="text-white/50 text-sm">{t.rule2}</p>
              <p className="text-white/50 text-sm">{t.rule3}</p>
              <p className="text-white/50 text-sm">{t.rule4}</p>
            </div>

            <div className="grid grid-cols-3 gap-3 w-full text-center text-sm">
              {[1, 2, 3].map(r => (
                <div key={r} className="rounded-lg p-3" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="text-purple-400 font-bold">{t.round(r)}</div>
                  <div className="text-white/60">1~100</div>
                  <div className="text-white/40 text-xs">{t.sec(getTimeLimit(r))}</div>
                </div>
              ))}
            </div>

            <button
              onClick={startGame}
              className="w-full py-4 rounded-xl font-bold text-lg text-white transition-all active:scale-95"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #6d28d9)' }}
            >
              {t.start}
            </button>
          </div>
        )}

        {/* 게임 화면 */}
        {gameState === 'playing' && (
          <div className="w-full flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className="px-3 py-1 rounded-full text-sm font-bold"
                  style={{ background: 'rgba(124,58,237,0.3)', color: '#c084fc' }}
                >
                  {t.round(round)}
                </span>
                <span
                  className="px-3 py-1 rounded-full text-sm font-bold"
                  style={{ background: 'rgba(255,255,255,0.08)', color: '#fff' }}
                >
                  {t.next(nextTarget)}
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
                {t.sec(timeLeft)}
              </div>
            </div>

            <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
              <div
                className="h-full rounded-full transition-all duration-1000"
                style={{
                  width: `${(timeLeft / timeLimit) * 100}%`,
                  background: timeLeft <= 5 ? '#ef4444' : 'linear-gradient(90deg, #7c3aed, #a855f7)',
                }}
              />
            </div>

            <div
              className="w-full rounded-xl p-2 transition-all"
              style={{
                background: wrongFlash ? 'rgba(239,68,68,0.08)' : 'rgba(255,255,255,0.03)',
                border: wrongFlash ? '1px solid rgba(239,68,68,0.3)' : '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}>
                {grid.map((num, idx) => {
                  const done = num < nextTarget;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleClick(num)}
                      disabled={done}
                      className="aspect-square flex items-center justify-center rounded-md font-bold transition-all active:scale-90"
                      style={{
                        background: done ? 'rgba(124,58,237,0.15)' : 'rgba(255,255,255,0.07)',
                        color: done ? 'rgba(167,139,250,0.35)' : 'rgba(255,255,255,0.9)',
                        border: done ? '1px solid rgba(124,58,237,0.15)' : '1px solid rgba(255,255,255,0.1)',
                        fontSize: '0.7rem',
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
                {clearedRounds >= 5 ? '🏆' : clearedRounds >= 3 ? '🥈' : clearedRounds >= 1 ? '🥉' : '😅'}
              </div>
              <h2 className="text-2xl font-bold text-white">
                {clearedRounds > 0 ? t.cleared(clearedRounds) : t.failed}
              </h2>
              {clearedRounds > 0 && (
                <p className="text-white/50 text-sm mt-1">{t.avg(avgTime)}</p>
              )}
            </div>

            {clearedRounds > 0 ? (
              <div
                className="w-full rounded-xl p-4 text-center"
                style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)' }}
              >
                <p className="text-white/60 text-sm mb-3">{t.top100prompt}</p>
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
                    className="flex-1 px-3 py-2.5 rounded-lg text-sm text-white outline-none"
                    style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
                  />
                  <button
                    onClick={handleSubmit}
                    disabled={gameState === 'submitting' || !nickname.trim()}
                    className="px-4 py-2.5 rounded-lg font-bold text-sm text-white transition-all disabled:opacity-40"
                    style={{ background: 'linear-gradient(135deg, #7c3aed, #6d28d9)' }}
                  >
                    {gameState === 'submitting' ? t.submitting : t.register}
                  </button>
                </div>
                {submitError && <p className="text-red-400 text-xs mt-2">{submitError}</p>}
              </div>
            ) : (
              <p className="text-white/40 text-sm">{t.needClear}</p>
            )}

            {!loadingBoard && leaderboard.length > 0 && (
              <div className="w-full">
                <p className="text-white/40 text-xs mb-2">{t.top10}</p>
                <div className="space-y-1.5">
                  {leaderboard.slice(0, 10).map((e, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between px-3 py-2 rounded-lg text-sm"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
                    >
                      <span className="text-white/50">{i + 1}{t.rankSuffix}</span>
                      <span className="text-white/80 font-medium">{e.name}</span>
                      <span className="text-purple-400">{e.level}{t.roundSuffix}</span>
                      <span className="text-white/40">{e.avgTime}{t.secSuffix}</span>
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
              {t.retry}
            </button>
          </div>
        )}

        {/* 등록 완료 */}
        {gameState === 'submitted' && (
          <div className="w-full flex flex-col items-center gap-5 mt-4 text-center">
            <div>
              <div className="text-5xl mb-3">🎉</div>
              <h2 className="text-2xl font-bold text-white">{t.registered}</h2>
              {rank && rank <= 100
                ? <p className="text-purple-300 text-lg font-bold mt-2">{t.rankMsg(rank)}</p>
                : <p className="text-white/50 text-sm mt-2">{t.rankOut}</p>
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
                      <span className="w-8 text-white/40 font-mono">{i + 1}{t.rankSuffix}</span>
                      <span className="flex-1 text-left text-white/80 font-medium">{e.name}</span>
                      <span className="text-purple-400 mr-3">{e.level}{t.roundSuffix}</span>
                      <span className="text-white/40 text-xs">{e.avgTime}{t.secSuffix}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/number-game/leaderboard"
                  className="block mt-3 text-center text-sm text-purple-400 hover:text-purple-300 transition-colors"
                >
                  {t.seeAll}
                </Link>
              </div>
            )}

            <button
              onClick={startGame}
              className="w-full py-3 rounded-xl font-bold text-white transition-all active:scale-95"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #6d28d9)' }}
            >
              {t.retry}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
