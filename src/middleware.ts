import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const RATE_LIMIT_MAP = new Map<string, { count: number; resetAt: number }>();

const MAX_REQUESTS = 5;
const WINDOW_MS = 60_000;

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/api/contact')) {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      'anonymous';

    const now = Date.now();
    const entry = RATE_LIMIT_MAP.get(ip);

    if (entry && now < entry.resetAt) {
      if (entry.count >= MAX_REQUESTS) {
        return NextResponse.json(
          { error: 'Demasiadas solicitudes. Espera un minuto.' },
          { status: 429 }
        );
      }
      entry.count++;
    } else {
      RATE_LIMIT_MAP.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};
