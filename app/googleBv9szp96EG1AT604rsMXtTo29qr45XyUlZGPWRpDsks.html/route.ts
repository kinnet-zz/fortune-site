export const runtime = 'edge';

export function GET() {
  return new Response('google-site-verification: Bv9szp96EG1AT604rsMXtTo29qr45XyUlZGPWRpDsks', {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}
