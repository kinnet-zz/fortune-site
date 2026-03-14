'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLang } from '@/lib/useLang';
import type { LeaderboardEntry } from '@/app/api/leaderboard/route';

const MEDALS: Record<number, string> = { 1: '🥇', 2: '🥈', 3: '🥉' };

const tr = {
  ko: {
    back: '← 게임으로',
    title: 'TOP 100 랭킹',
    subtitle: '1~100 순서대로 누르기',
    loading: '로딩 중...',
    empty: '아직 기록이 없습니다',
    emptyDesc: '첫 번째 도전자가 되어보세요!',
    startGame: '게임 시작',
    challenge: '도전하기',
    secPerRound: (s: number | string) => `${s}초/라운드`,
    level: (l: number) => `Lv.${l}`,
  },
  en: {
    back: '← Back to Game',
    title: 'TOP 100 Rankings',
    subtitle: 'Tap 1~100 in order',
    loading: 'Loading...',
    empty: 'No records yet',
    emptyDesc: 'Be the first challenger!',
    startGame: 'Start Game',
    challenge: 'Challenge',
    secPerRound: (s: number | string) => `${s}s/round`,
    level: (l: number) => `Lv.${l}`,
  },
  zh: {
    back: '← 返回游戏',
    title: 'TOP 100 排行榜',
    subtitle: '按顺序点击 1~100',
    loading: '加载中...',
    empty: '暂无记录',
    emptyDesc: '成为第一位挑战者！',
    startGame: '开始游戏',
    challenge: '挑战',
    secPerRound: (s: number | string) => `${s}秒/轮`,
    level: (l: number) => `Lv.${l}`,
  },
  ja: {
    back: '← ゲームへ',
    title: 'TOP 100 ランキング',
    subtitle: '1~100 順番にタップ',
    loading: '読み込み中...',
    empty: 'まだ記録がありません',
    emptyDesc: '最初の挑戦者になろう！',
    startGame: 'ゲームスタート',
    challenge: '挑戦する',
    secPerRound: (s: number | string) => `${s}秒/ラウンド`,
    level: (l: number) => `Lv.${l}`,
  },
};

export default function LeaderboardClient() {
  const { lang } = useLang();
  const t = tr[lang as keyof typeof tr] ?? tr.ko;

  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/leaderboard')
      .then(r => r.json())
      .then((d: { entries: LeaderboardEntry[] }) => setEntries(d.entries))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center"
      style={{ background: 'linear-gradient(135deg, #050520 0%, #0a0a2e 50%, #050520 100%)' }}
    >
      <div className="w-full max-w-lg px-4 pt-6 pb-12">
        <div className="flex items-center justify-between mb-6">
          <Link href="/number-game" className="text-white/40 hover:text-white/70 text-sm transition-colors">
            {t.back}
          </Link>
        </div>

        <div className="text-center mb-6">
          <div className="text-5xl mb-2">🏆</div>
          <h1 className="text-2xl font-bold text-white">{t.title}</h1>
          <p className="text-white/40 text-sm mt-1">{t.subtitle}</p>
        </div>

        {loading && (
          <div className="flex flex-col items-center gap-3 mt-12">
            <div
              className="w-8 h-8 rounded-full border-2 border-t-transparent animate-spin"
              style={{ borderColor: 'rgba(167,139,250,0.3)', borderTopColor: '#a855f7' }}
            />
            <p className="text-white/30 text-sm">{t.loading}</p>
          </div>
        )}

        {!loading && entries.length === 0 && (
          <div className="text-center mt-12">
            <p className="text-white/30">{t.empty}</p>
            <p className="text-white/20 text-sm mt-1">{t.emptyDesc}</p>
            <Link
              href="/number-game"
              className="inline-block mt-4 px-6 py-2.5 rounded-xl font-bold text-white text-sm"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #6d28d9)' }}
            >
              {t.startGame}
            </Link>
          </div>
        )}

        {!loading && entries.length > 0 && (
          <div className="space-y-2">
            {entries.map((e, i) => {
              const rank = i + 1;
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl"
                  style={{
                    background: rank <= 3 ? 'rgba(124,58,237,0.12)' : 'rgba(255,255,255,0.04)',
                    border: rank <= 3 ? '1px solid rgba(124,58,237,0.25)' : '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <div className="w-8 text-center flex-shrink-0">
                    {MEDALS[rank] ? (
                      <span className="text-xl">{MEDALS[rank]}</span>
                    ) : (
                      <span className="text-white/30 font-mono text-sm">{rank}</span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-medium truncate">{e.name}</p>
                    <p className="text-white/30 text-xs">{e.date}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-purple-400 font-bold">{t.level(e.level)}</p>
                    <p className="text-white/40 text-xs">{t.secPerRound(e.avgTime)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {!loading && entries.length > 0 && (
          <Link
            href="/number-game"
            className="block mt-6 w-full py-3 rounded-xl font-bold text-white text-center transition-all active:scale-95"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #6d28d9)' }}
          >
            {t.challenge}
          </Link>
        )}
      </div>
    </div>
  );
}
