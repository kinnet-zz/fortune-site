import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.hostname === 'www.starfate.day') {
    const canonicalUrl = request.nextUrl.clone();
    canonicalUrl.hostname = 'starfate.day';
    return NextResponse.redirect(canonicalUrl, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
