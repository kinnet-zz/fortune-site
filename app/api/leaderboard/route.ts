export const runtime = 'edge';

import { NextRequest, NextResponse } from 'next/server';
import { getRequestContext } from '@cloudflare/next-on-pages';

export interface LeaderboardEntry {
  name: string;
  level: number;
  avgTime: number;
  date: string;
}

type KVStore = {
  get(key: string): Promise<string | null>;
  put(key: string, value: string): Promise<void>;
};

const KV_KEY = 'leaderboard_v1';
const MAX_ENTRIES = 100;
// 제어문자, HTML 특수문자 제외
const VALID_NAME_RE = /^[^\x00-\x1f\x7f<>&"'\\]{1,10}$/;

function getKV(): KVStore {
  const { env } = getRequestContext();
  return (env as Record<string, KVStore>)['LEADERBOARD_KV'];
}

async function getEntries(kv: KVStore): Promise<LeaderboardEntry[]> {
  const raw = await kv.get(KV_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw) as LeaderboardEntry[];
  } catch {
    return [];
  }
}

function sortEntries(entries: LeaderboardEntry[]): LeaderboardEntry[] {
  return [...entries].sort((a, b) => {
    if (b.level !== a.level) return b.level - a.level;
    return a.avgTime - b.avgTime;
  });
}

export async function GET() {
  try {
    const kv = getKV();
    const entries = await getEntries(kv);
    const sorted = sortEntries(entries);
    return NextResponse.json({ entries: sorted.slice(0, MAX_ENTRIES) });
  } catch {
    return NextResponse.json({ entries: [] });
  }
}

export async function POST(request: NextRequest) {
  let body: { name?: unknown; level?: unknown; avgTime?: unknown };
  try {
    body = await request.json() as typeof body;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const level = typeof body.level === 'number' ? Math.floor(body.level) : 0;
  const avgTime = typeof body.avgTime === 'number' ? body.avgTime : 0;

  if (!VALID_NAME_RE.test(name)) {
    return NextResponse.json({ error: '닉네임에 사용할 수 없는 문자가 포함되어 있습니다' }, { status: 400 });
  }
  if (level < 1 || level > 50) {
    return NextResponse.json({ error: 'Invalid level' }, { status: 400 });
  }
  if (avgTime < 0 || avgTime > 60) {
    return NextResponse.json({ error: 'Invalid time' }, { status: 400 });
  }

  try {
    const kv = getKV();
    const entries = await getEntries(kv);

    // 같은 이름이면 덮어쓰기
    const filtered = entries.filter(e => e.name !== name);

    const newEntry: LeaderboardEntry = {
      name,
      level,
      avgTime: Math.round(avgTime * 10) / 10,
      date: new Date().toISOString().split('T')[0],
    };

    filtered.push(newEntry);
    const sorted = sortEntries(filtered).slice(0, MAX_ENTRIES);

    await kv.put(KV_KEY, JSON.stringify(sorted));

    const rank = sorted.findIndex(e => e.name === name) + 1;
    return NextResponse.json({ rank, entry: newEntry });
  } catch {
    return NextResponse.json({ error: 'Storage unavailable' }, { status: 503 });
  }
}
