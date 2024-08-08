import { NextResponse } from 'next/server';

export async function POST(req) {
  const { password } = await req.json();
  const correctPassword = process.env.NEXT_PASSWORD;

  if (password === correctPassword) {
    const response = NextResponse.json({ authenticated: true });
    response.cookies.set('auth', 'authenticated', { httpOnly: true, secure: true });
    return response;
  }

  return NextResponse.json({ authenticated: false }, { status: 401 });
}
