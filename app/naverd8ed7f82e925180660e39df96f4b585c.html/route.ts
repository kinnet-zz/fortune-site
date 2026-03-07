export const runtime = 'edge';

export function GET() {
  return new Response('naver-site-verification: naverd8ed7f82e925180660e39df96f4b585c.html', {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}
