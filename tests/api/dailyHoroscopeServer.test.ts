import { afterEach, describe, expect, it, vi } from 'vitest';
import { buildFallbackHoroscope } from '../../lib/dailyHoroscope';

const { getRequestContextMock } = vi.hoisted(() => ({
  getRequestContextMock: vi.fn(),
}));

vi.mock('server-only', () => ({}));
vi.mock('@cloudflare/next-on-pages', () => ({
  getRequestContext: getRequestContextMock,
}));

import { getDailyHoroscope } from '../../lib/dailyHoroscopeServer';

function createKV() {
  return {
    get: vi.fn(),
    put: vi.fn(),
  };
}

function setCloudflareEnv(kv: ReturnType<typeof createKV>) {
  getRequestContextMock.mockReturnValue({
    env: {
      LEADERBOARD_KV: kv,
      GEMINI_API_KEY: 'gemini-key',
    },
  });
}

afterEach(() => {
  getRequestContextMock.mockReset();
  vi.unstubAllGlobals();
});

describe('daily horoscope server orchestration', () => {
  it('returns a validated cache hit without changing generatedAt', async () => {
    const kv = createKV();
    const cached = {
      ...buildFallbackHoroscope('aries', '2026-07-20'),
      generatedAt: '2026-07-20T00:10:00.000Z',
    };
    kv.get.mockResolvedValueOnce(JSON.stringify(cached));
    setCloudflareEnv(kv);

    const result = await getDailyHoroscope('aries', '2026-07-20');

    expect(result.cacheStatus).toBe('HIT');
    expect(result.source).toBe('ai');
    expect(result.horoscope.generatedAt).toBe(cached.generatedAt);
    expect(kv.put).not.toHaveBeenCalled();
  });

  it('does not call Gemini for a public cache miss', async () => {
    const kv = createKV();
    kv.get.mockResolvedValue(null);
    setCloudflareEnv(kv);
    const fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);

    const result = await getDailyHoroscope('taurus', '2026-07-20');

    expect(result.source).toBe('fallback');
    expect(result.cacheStatus).toBe('MISS');
    expect(fetchMock).not.toHaveBeenCalled();
    expect(kv.put).toHaveBeenCalledWith(
      'horoscope:fallback:v3:2026-07-20:taurus',
      expect.any(String),
      { expirationTtl: 300 },
    );
  });

  it('generates and stores AI content only when explicitly enabled', async () => {
    const kv = createKV();
    kv.get.mockResolvedValue(null);
    setCloudflareEnv(kv);
    const fetchMock = vi.fn().mockResolvedValue(new Response(JSON.stringify({
      candidates: [{
        content: {
          parts: [{ text: JSON.stringify({
            score: 82,
            summary: '오늘은 우선순위를 정하면 좋은 날입니다.',
            overall: '차분하게 할 일을 정리하고 확인 가능한 사실부터 처리해보세요.',
            love: '대화를 서두르지 말고 상대의 속도를 존중해보세요.',
            money: '결제 전 금액과 조건을 한 번 더 확인해보세요.',
            work: '중요한 작업부터 끝내면 집중력을 유지하기 좋습니다.',
            health: '가벼운 스트레칭과 수분 보충으로 리듬을 조절하세요.',
            luckyColor: '파란색',
            luckyNumber: 15,
            luckyItem: '향초',
            advice: '작은 한 걸음을 먼저 선택하세요.',
          }) }],
        },
      }],
    }), { status: 200 }));
    vi.stubGlobal('fetch', fetchMock);

    const result = await getDailyHoroscope('aries', '2026-07-20', { generate: true });

    expect(result.source).toBe('ai');
    expect(result.horoscope.score).toBe(82);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining('/models/gemini-3.1-flash-lite:generateContent'),
      expect.any(Object),
    );
    expect(kv.get).toHaveBeenCalledTimes(1);
    expect(kv.put).toHaveBeenCalledWith(
      'horoscope:v3:2026-07-20:aries',
      expect.any(String),
      { expirationTtl: 86400 },
    );
  });

  it('uses a short fallback cache after a Gemini failure', async () => {
    const kv = createKV();
    kv.get.mockResolvedValue(null);
    setCloudflareEnv(kv);
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response(
      JSON.stringify({ error: { message: 'temporary outage' } }),
      { status: 503 },
    )));

    const result = await getDailyHoroscope('pisces', '2026-07-20', {
      force: true,
      generate: true,
    });

    expect(result.source).toBe('fallback');
    expect(result.generationError).toBe('upstream');
    expect(kv.get).not.toHaveBeenCalled();
    expect(kv.put).toHaveBeenCalledWith(
      'horoscope:fallback:v3:2026-07-20:pisces',
      expect.any(String),
      { expirationTtl: 300 },
    );
  });

  it('reports a missing Gemini key without calling the upstream API', async () => {
    const kv = createKV();
    getRequestContextMock.mockReturnValue({ env: { LEADERBOARD_KV: kv } });
    const fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);

    const result = await getDailyHoroscope('aquarius', '2026-07-20', {
      force: true,
      generate: true,
    });

    expect(result.source).toBe('fallback');
    expect(result.generationError).toBe('missing-api-key');
    expect(fetchMock).not.toHaveBeenCalled();
  });
});
