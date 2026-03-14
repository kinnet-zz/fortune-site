'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import type { LeaderboardEntry } from '@/app/api/leaderboard/route';

const MEDALS: Record<number, string> = { 1: '🥇', 2: '🥈', 3: '🥉' };

export default function LeaderboardClient() {
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
        {/* 상단 */}
        <div className="flex items-center justify-between mb-6">
          <Link href="/number-game" className="text-white/40 hover:text-white/70 text-sm transition-colors">
            ← 게임으로
          </Link>
        </div>

        <div className="text-center mb-6">
          <div className="text-5xl mb-2">🏆</div>
          <h1 className="text-2xl font-bold text-white">TOP 100 랭킹</h1>
          <p className="text-white/40 text-sm mt-1">빠진 숫자 찾기</p>
        </div>

        {loading && (
          <div className="flex flex-col items-center gap-3 mt-12">
            <div
              className="w-8 h-8 rounded-full border-2 border-t-transparent animate-spin"
              style={{ borderColor: 'rgba(167,139,250,0.3)', borderTopColor: '#a855f7' }}
            />
            <p className="text-white/30 text-sm">로딩 중...</p>
          </div>
        )}

        {!loading && entries.length === 0 && (
          <div className="text-center mt-12">
            <p className="text-white/30">아직 기록이 없습니다</p>
            <p className="text-white/20 text-sm mt-1">첫 번째 도전자가 되어보세요!</p>
            <Link
              href="/number-game"
              className="inline-block mt-4 px-6 py-2.5 rounded-xl font-bold text-white text-sm"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #6d28d9)' }}
            >
              게임 시작
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
                  {/* 순위 */}
                  <div className="w-8 text-center flex-shrink-0">
                    {MEDALS[rank] ? (
                      <span className="text-xl">{MEDALS[rank]}</span>
                    ) : (
                      <span className="text-white/30 font-mono text-sm">{rank}</span>
                    )}
                  </div>

                  {/* 이름 */}
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-medium truncate">{e.name}</p>
                    <p className="text-white/30 text-xs">{e.date}</p>
                  </div>

                  {/* 레벨 */}
                  <div className="text-right flex-shrink-0">
                    <p className="text-purple-400 font-bold">Lv.{e.level}</p>
                    <p className="text-white/40 text-xs">{e.avgTime}초/레벨</p>
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
            도전하기
          </Link>
        )}
      </div>
    </div>
  );
}
