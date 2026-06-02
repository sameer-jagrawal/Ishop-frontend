// proxy.js
import { NextResponse } from 'next/server';


const protectedRoutes = ['/checkout', '/profile', '/veiw-orders'];
const adminRoutes = ['/admin'];
const authoRoutes = ['/login','/register','/otp-verify', '/admin-auth/admin/login']

export function proxy(request) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('jwt')?.value || null



  const isProtectedRoute = protectedRoutes.some((route) => pathname === route || pathname.startsWith(`${route}/`));
  const isAdminRoute = adminRoutes.some((route) => pathname === route || pathname.startsWith(`${route}/`));
  const isAuthRoute = authoRoutes.includes(pathname);

  if (isProtectedRoute && !token) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('next', pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (isAdminRoute && !token) {
    const loginUrl = new URL('/admin-auth/admin/login', request.url);
    loginUrl.searchParams.set('next', pathname);
    return NextResponse.redirect(loginUrl);
  }

  if(isAuthRoute && token){
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/checkout/:path*', '/profile/:path*', '/veiw-orders/:path*', '/admin/:path*', '/login','/register','/otp-verify', '/admin-auth/admin/login'],
};
