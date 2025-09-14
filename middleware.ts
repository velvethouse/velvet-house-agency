// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isAdminRoute = request.nextUrl.pathname.startsWith('/admin');

  if (isAdminRoute && request.nextUrl.pathname !== '/admin/login') {
    const isLoggedIn = request.cookies.get('velvet_admin_logged')?.value === '1';

    if (!isLoggedIn) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

// ✅ Active uniquement sur les routes admin
export const config = {
  matcher: ['/admin/:path*'],
};
