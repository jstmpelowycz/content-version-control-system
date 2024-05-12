import { NextRequest, NextResponse } from 'next/server';
import { AUTH_ROUTES, PROTECTED_ROUTES, ROUTES } from '@/routes';

export function middleware(request: NextRequest): NextResponse {
  const jwtCookie = request.cookies.get('jwt');
  const hasToken = Boolean(jwtCookie?.value);

  const isProtectedRoute = PROTECTED_ROUTES.includes(request.nextUrl.pathname);
  const isAuthRoute = AUTH_ROUTES.includes(request.nextUrl.pathname);

  const shouldRedirectToSignIn = !hasToken && isProtectedRoute;
  const shouldRedirectToHome = hasToken && isAuthRoute;

  if (shouldRedirectToSignIn) {
    return NextResponse.redirect(`${request.nextUrl.origin}${ROUTES.signIn}`);
  }

  if (shouldRedirectToHome) {
    return NextResponse.redirect(`${request.nextUrl.origin}${ROUTES.home}`);
  }

  return NextResponse.next();
}
