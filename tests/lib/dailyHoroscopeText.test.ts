import { describe, expect, it } from 'vitest';
import { normalizeDailyHoroscope } from '@/lib/dailyHoroscope';

const longEnglish = Array.from(
  { length: 12 },
  () => 'Venus warms the room and you speak more gently than usual today.',
).join(' ');

const longKorean = Array.from(
  { length: 12 },
  () => '금성이 방의 공기를 따뜻하게 만들고 오늘 당신의 말투는 평소보다 부드러워집니다.',
).join(' ');

describe('daily horoscope text limits', () => {
  it('keeps an English section inside its wider limit and ends on a sentence', () => {
    const result = normalizeDailyHoroscope(
      { love: longEnglish, money: longEnglish, work: longEnglish },
      'leo',
      '2026-11-23',
      { lang: 'en' },
    );
    for (const text of [result.love, result.money, result.work]) {
      expect(text.length).toBeLessThanOrEqual(700);
      expect(text.endsWith('.')).toBe(true);
      expect(text.startsWith('Venus')).toBe(true);
    }
  });

  it('keeps a Korean section inside the Korean limit', () => {
    const result = normalizeDailyHoroscope(
      { love: longKorean },
      'leo',
      '2026-11-23',
      { lang: 'ko' },
    );
    expect(result.love.length).toBeLessThanOrEqual(350);
    expect(result.love.endsWith('.')).toBe(true);
  });

  it('gives English far more room than Korean for the same field', () => {
    const en = normalizeDailyHoroscope({ overall: longEnglish }, 'leo', '2026-11-23', { lang: 'en' });
    const ko = normalizeDailyHoroscope({ overall: longKorean }, 'leo', '2026-11-23', { lang: 'ko' });
    expect(en.overall.length).toBeGreaterThan(ko.overall.length);
    expect(en.overall.length).toBeLessThanOrEqual(900);
    expect(ko.overall.length).toBeLessThanOrEqual(500);
  });

  it('never leaves a half word when the cut falls mid-sentence', () => {
    const text = `${'word '.repeat(200)}end`;
    const result = normalizeDailyHoroscope({ love: text }, 'leo', '2026-11-23', { lang: 'en' });
    expect(result.love.endsWith('word')).toBe(true);
    expect(result.love.includes('en')).toBe(false);
  });
});
