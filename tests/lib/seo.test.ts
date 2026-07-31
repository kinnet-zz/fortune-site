import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { NextRequest } from 'next/server';
import { describe, expect, it } from 'vitest';
import robots from '../../app/robots';
import sitemap from '../../app/sitemap';
import { middleware } from '../../middleware';

const ROOT = fileURLToPath(new URL('../..', import.meta.url));
const CANONICAL_ORIGIN = 'https://starfate.day';

function sourceFiles(path: string): string[] {
  return readdirSync(path).flatMap((name) => {
    const child = join(path, name);
    if (statSync(child).isDirectory()) return sourceFiles(child);
    return /\.(?:ts|tsx|js|jsx)$/.test(name) ? [child] : [];
  });
}

describe('SEO canonical URL rules', () => {
  it('redirects the www host to the canonical host with a permanent redirect', () => {
    const response = middleware(
      new NextRequest('https://www.starfate.day/blog?source=search-console'),
    );

    expect(response.status).toBe(308);
    expect(response.headers.get('location')).toBe(
      'https://starfate.day/blog?source=search-console',
    );
  });

  it('publishes only unique non-www URLs in the sitemap', () => {
    const entries = sitemap();
    const urls = entries.map((entry) => entry.url);

    expect(new Set(urls).size).toBe(urls.length);
    expect(urls.every((url) => url === CANONICAL_ORIGIN || url.startsWith(`${CANONICAL_ORIGIN}/`))).toBe(true);
    expect(urls).toContain(`${CANONICAL_ORIGIN}/number-game/leaderboard`);
    expect(urls).toContain(`${CANONICAL_ORIGIN}/blog/daily-horoscope-habit`);
  });

  it('points robots.txt at the canonical sitemap', () => {
    expect(robots().sitemap).toBe(`${CANONICAL_ORIGIN}/sitemap.xml`);
  });

  it('keeps a self-canonical fallback and no legacy www URLs in source', () => {
    const layout = readFileSync(join(ROOT, 'app', 'layout.tsx'), 'utf8');
    const leaderboard = readFileSync(
      join(ROOT, 'app', 'number-game', 'leaderboard', 'page.tsx'),
      'utf8',
    );
    const files = [
      ...sourceFiles(join(ROOT, 'app')),
      ...sourceFiles(join(ROOT, 'components')),
      ...sourceFiles(join(ROOT, 'lib')),
      join(ROOT, 'middleware.ts'),
    ];

    expect(layout).toContain("metadataBase: new URL('https://starfate.day')");
    expect(layout).toMatch(/alternates:\s*\{\s*canonical:\s*'\.\/'/);
    expect(leaderboard).toContain("canonical: '/number-game/leaderboard'");

    for (const file of files) {
      expect(readFileSync(file, 'utf8')).not.toContain('https://www.starfate.day');
    }
  });
});
