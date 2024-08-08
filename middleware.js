// middleware.js
import { NextResponse } from 'next/server';

export function middleware(req) {
  const auth = req.cookies.get('auth');
  if (!auth) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|login).*)',
  ],
};
