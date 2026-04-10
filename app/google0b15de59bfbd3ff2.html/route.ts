export const runtime = 'edge';

export function GET() {
  return new Response('google-site-verification: google0b15de59bfbd3ff2.html', {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}
