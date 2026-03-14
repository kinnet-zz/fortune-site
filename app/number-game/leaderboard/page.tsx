export const runtime = 'edge';

import type { Metadata } from 'next';
import LeaderboardClient from '@/components/LeaderboardClient';

export const metadata: Metadata = {
  title: 'TOP 100 랭킹 🏆 | 빠진 숫자 찾기',
  description: '빠진 숫자 찾기 게임 TOP 100 리더보드. 최고 기록에 도전하세요!',
};

export default function LeaderboardPage() {
  return <LeaderboardClient />;
}
