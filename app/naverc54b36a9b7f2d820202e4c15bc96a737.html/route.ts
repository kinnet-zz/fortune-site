export const runtime = 'edge';

export function GET() {
  return new Response('naver-site-verification: naverc54b36a9b7f2d820202e4c15bc96a737.html', {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}
