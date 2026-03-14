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

function getDifficultyStars(level: number): string {
  if (level <= 3) return '★☆☆☆☆';
  if (level <= 6) return '★★☆☆☆';
  if (level <= 9) return '★★★☆☆';
  if (level <= 12) return '★★★★☆';
  return '★★★★★';
}

const PREVIEW_LEVELS = [1, 5, 10, 15];

const tr = {
  ko: {
    home: '← 홈으로',
    title: '숫자 순서 게임',
    subtitle: '레벨이 오를수록 더 어려워집니다!',
    rulesTitle: '규칙',
    rule1: '• 숫자를 1부터 순서대로 눌러야 합니다',
    rule2: '• 레벨마다 숫자 범위와 제한 시간이 변합니다',
    rule3: '• 제한 시간 안에 클리어하면 다음 레벨로!',
    rule4: '• 시간이 다 되면 게임 오버',
    levelLabel: (l: number) => `레벨 ${l}`,
    range: (n: number) => `1 ~ ${n}`,
    timeLabel: (t: number) => `${t}초`,
    start: '게임 시작',
    next: (n: number) => `다음: ${n}`,
    cleared: (l: number) => `레벨 ${l} 클리어!`,
    nextLevel: (l: number) => `레벨 ${l} 시작...`,
    failed: (l: number) => `레벨 ${l} 실패`,
    allClear: '전 레벨 클리어!!',
    avg: (t: string) => `평균 ${t}초 / 레벨`,
    top100prompt: 'TOP 100에 이름을 남기세요',
    placeholder: '닉네임 (최대 10자)',
    register: '등록',
    needClear: '레벨 1을 클리어해야 등록할 수 있어요',
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
    roundSuffix: '레벨',
    secSuffix: '초',
  },
  en: {
    home: '← Home',
    title: 'Number Sequence Game',
    subtitle: 'Gets harder as you level up!',
    rulesTitle: 'Rules',
    rule1: '• Tap numbers in order starting from 1',
    rule2: '• Each level changes the range & time limit',
    rule3: '• Clear within time → next level!',
    rule4: '• Time runs out = Game over',
    levelLabel: (l: number) => `Level ${l}`,
    range: (n: number) => `1 ~ ${n}`,
    timeLabel: (t: number) => `${t}s`,
    start: 'Start Game',
    next: (n: number) => `Next: ${n}`,
    cleared: (l: number) => `Level ${l} Clear!`,
    nextLevel: (l: number) => `Level ${l} starting...`,
    failed: (l: number) => `Level ${l} Failed`,
    allClear: 'ALL LEVELS CLEARED!!',
    avg: (t: string) => `Avg ${t}s / level`,
    top100prompt: 'Leave your name in TOP 100',
    placeholder: 'Nickname (max 10 chars)',
    register: 'Submit',
    needClear: 'Clear at least level 1 to register',
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
    roundSuffix: ' lv',
    secSuffix: 's',
  },
  zh: {
    home: '← 首页',
    title: '数字顺序游戏',
    subtitle: '随着等级提升越来越难！',
    rulesTitle: '规则',
    rule1: '• 从 1 开始按顺序点击数字',
    rule2: '• 每关数字范围和时间限制不同',
    rule3: '• 在时间内完成即可进入下一关！',
    rule4: '• 时间耗尽即游戏结束',
    levelLabel: (l: number) => `第${l}关`,
    range: (n: number) => `1 ~ ${n}`,
    timeLabel: (t: number) => `${t}秒`,
    start: '开始游戏',
    next: (n: number) => `下一个: ${n}`,
    cleared: (l: number) => `第${l}关通关！`,
    nextLevel: (l: number) => `第${l}关开始...`,
    failed: (l: number) => `第${l}关失败`,
    allClear: '全关通关！！',
    avg: (t: string) => `平均 ${t}秒 / 关`,
    top100prompt: '在 TOP 100 留下你的名字',
    placeholder: '昵称（最多10个字符）',
    register: '登记',
    needClear: '至少通过第1关才能登记',
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
    roundSuffix: '关',
    secSuffix: '秒',
  },
  ja: {
    home: '← ホームへ',
    title: '数字順番ゲーム',
    subtitle: 'レベルが上がるほど難しくなります！',
    rulesTitle: 'ルール',
    rule1: '• 1から順番に数字をタップしてください',
    rule2: '• レベルごとに範囲と制限時間が変わります',
    rule3: '• 時間内にクリアすると次のレベルへ！',
    rule4: '• 時間切れでゲームオーバー',
    levelLabel: (l: number) => `レベル${l}`,
    range: (n: number) => `1 〜 ${n}`,
    timeLabel: (t: number) => `${t}秒`,
    start: 'ゲームスタート',
    next: (n: number) => `次: ${n}`,
    cleared: (l: number) => `レベル${l}クリア！`,
    nextLevel: (l: number) => `レベル${l}スタート...`,
    failed: (l: number) => `レベル${l}失敗`,
    allClear: '全レベルクリア！！',
    avg: (t: string) => `平均 ${t}秒 / レベル`,
    top100prompt: 'TOP 100に名前を残しましょう',
    placeholder: 'ニックネーム（最大10文字）',
    register: '登録',
    needClear: 'レベル1クリアで登録できます',
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
    roundSuffix: 'Lv',
    secSuffix: '秒',
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

export default function NumberGameClient() {
  const { lang } = useLang();
  const t = tr[lang as keyof typeof tr] ?? tr.ko;

  const [gameState, setGameState] = useState<GameState>('idle');
  const [level, setLevel] = useState(1);
  const [grid, setGrid] = useState<number[]>([]);
  const [nextTarget, setNextTarget] = useState(1);
  const [timeLeft, setTimeLeft] = useState(60);
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

  // 타이머
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

  // 타임아웃
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
      setTimeout(() => setWrongFlash(false), 300);
      setTimeLeft(prev => Math.max(prev - 2, 0));
      return;
    }

    // 정확히 클릭 → +1초 (레벨 제한시간 초과 불가)
    setTimeLeft(prev => Math.min(prev + 1, cfg.timeLimit));

    if (nextTarget === cfg.total) {
      // 레벨 클리어
      clearTimer();
      const elapsed = (Date.now() - levelStartTime) / 1000;
      const newTimes = [...levelTimes, elapsed];
      setLevelTimes(newTimes);

      if (level >= MAX_LEVEL) {
        // 전 레벨 클리어!
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

  const clearedLevel = levelTimes.length;
  const cfg = getLevelConfig(level);
  const avgTime = levelTimes.length > 0
    ? (levelTimes.reduce((a, b) => a + b, 0) / levelTimes.length).toFixed(1)
    : '0.0';
  const isAllClear = clearedLevel >= MAX_LEVEL;

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
          <div className="flex flex-col items-center gap-5 mt-6 text-center w-full">
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

            {/* 레벨 미리보기 */}
            <div className="grid grid-cols-4 gap-2 w-full">
              {PREVIEW_LEVELS.map(lv => {
                const c = getLevelConfig(lv);
                const isLast = lv === MAX_LEVEL;
                return (
                  <div
                    key={lv}
                    className="rounded-xl p-3 text-center"
                    style={{
                      background: isLast ? 'rgba(124,58,237,0.2)' : 'rgba(255,255,255,0.04)',
                      border: isLast ? '1px solid rgba(124,58,237,0.4)' : '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    <div className="text-purple-400 font-bold text-sm">{t.levelLabel(lv)}</div>
                    <div className="text-white/70 text-xs mt-1">{t.range(c.total)}</div>
                    <div className="text-white/40 text-xs">{t.timeLabel(c.timeLimit)}</div>
                    <div className="text-yellow-400/60 text-xs mt-1" style={{ fontSize: '0.55rem' }}>
                      {isLast ? '👑' : getDifficultyStars(lv)}
                    </div>
                  </div>
                );
              })}
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

        {/* 레벨 클리어 연출 */}
        {gameState === 'levelClear' && (
          <div className="flex flex-col items-center justify-center flex-1 text-center gap-4">
            <div
              className="text-6xl animate-bounce"
              style={{ animationDuration: '0.5s' }}
            >✅</div>
            <h2 className="text-3xl font-black text-white">{t.cleared(level)}</h2>
            <p className="text-purple-300/60 text-sm">{t.nextLevel(level + 1)}</p>
            {/* 다음 레벨 미리보기 */}
            {level + 1 <= MAX_LEVEL && (
              <div
                className="mt-2 px-6 py-3 rounded-xl text-center"
                style={{ background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.3)' }}
              >
                {(() => {
                  const nc = getLevelConfig(level + 1);
                  return (
                    <>
                      <div className="text-purple-300 font-bold">{t.levelLabel(level + 1)}</div>
                      <div className="text-white/60 text-sm">{t.range(nc.total)} · {t.timeLabel(nc.timeLimit)}</div>
                    </>
                  );
                })()}
              </div>
            )}
          </div>
        )}

        {/* 게임 화면 */}
        {gameState === 'playing' && (
          <div className="w-full flex flex-col gap-3">
            {/* 상태바 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className="px-3 py-1 rounded-full text-sm font-bold"
                  style={{ background: 'rgba(124,58,237,0.3)', color: '#c084fc' }}
                >
                  {t.levelLabel(level)}
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
                {t.timeLabel(timeLeft)}
              </div>
            </div>

            {/* 진행 바 */}
            <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
              <div
                className="h-full rounded-full transition-all duration-1000"
                style={{
                  width: `${(timeLeft / cfg.timeLimit) * 100}%`,
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
                      className="aspect-square flex items-center justify-center rounded-md font-bold transition-all active:scale-90"
                      style={{
                        background: done ? 'rgba(124,58,237,0.15)' : 'rgba(255,255,255,0.07)',
                        color: done ? 'rgba(167,139,250,0.35)' : 'rgba(255,255,255,0.9)',
                        border: done ? '1px solid rgba(124,58,237,0.15)' : '1px solid rgba(255,255,255,0.1)',
                        fontSize: cfg.cols <= 5 ? '1rem' : '0.7rem',
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

        {/* 게임 오버 / 등록 */}
        {(gameState === 'finished' || gameState === 'submitting') && (
          <div className="w-full flex flex-col items-center gap-5 mt-4">
            <div className="text-center">
              <div className="text-5xl mb-2">
                {isAllClear ? '👑' : clearedLevel >= 10 ? '🏆' : clearedLevel >= 5 ? '🥈' : clearedLevel >= 1 ? '🥉' : '😅'}
              </div>
              <h2 className="text-2xl font-bold text-white">
                {isAllClear ? t.allClear : clearedLevel > 0 ? t.cleared(clearedLevel) : t.failed(level)}
              </h2>
              {clearedLevel > 0 && (
                <p className="text-white/50 text-sm mt-1">{t.avg(avgTime)}</p>
              )}
            </div>

            {clearedLevel > 0 ? (
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
                    {gameState === 'submitting' ? '...' : t.register}
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
                      <span className="text-purple-400">Lv.{e.level}</span>
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
                      <span className="text-purple-400 mr-3">Lv.{e.level}</span>
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
