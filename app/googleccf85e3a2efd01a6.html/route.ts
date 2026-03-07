export const runtime = 'edge';

export function GET() {
  return new Response('google-site-verification: googleccf85e3a2efd01a6.html', {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}
