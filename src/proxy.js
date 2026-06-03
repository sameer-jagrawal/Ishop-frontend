// proxy.js
import { NextResponse } from 'next/server';


const protectedRoutes = ['/checkout', '/profile', '/veiw-orders'];
const adminRoutes = ['/admin'];
const userAuthRoutes = ['/login','/register','/otp-verify'];
const adminAuthRoutes = ['/admin-auth/admin/login'];

export function proxy(request) {
  const { pathname } = request.nextUrl;
  const userToken = request.cookies.get('jwt')?.value || null;
  const adminToken = request.cookies.get('admin_jwt')?.value || null;



  const isProtectedRoute = protectedRoutes.some((route) => pathname === route || pathname.startsWith(`${route}/`));
  const isAdminRoute = adminRoutes.some((route) => pathname === route || pathname.startsWith(`${route}/`));
  const isUserAuthRoute = userAuthRoutes.includes(pathname);
  const isAdminAuthRoute = adminAuthRoutes.includes(pathname);

  if (isProtectedRoute && !userToken) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('next', pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (isAdminRoute && !adminToken) {
    const loginUrl = new URL('/admin-auth/admin/login', request.url);
    loginUrl.searchParams.set('next', pathname);
    return NextResponse.redirect(loginUrl);
  }

  if(isUserAuthRoute && userToken){
    return NextResponse.redirect(new URL('/', request.url));
  }

  if(isAdminAuthRoute && adminToken){
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/checkout/:path*', '/profile/:path*', '/veiw-orders/:path*', '/admin/:path*', '/login','/register','/otp-verify', '/admin-auth/admin/login'],
};
