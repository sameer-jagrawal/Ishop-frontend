// proxy.js
import { NextResponse } from 'next/server';


const protectedRoutes = ['/checkout',  '/profile'];
const authoRoutes = ['/login','/register','otp-verify']

export function proxy(request) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('jwt')?.value || null



  if (protectedRoutes.includes(pathname) && !token) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('next', pathname);
    return NextResponse.redirect(loginUrl);
  }

  if(authoRoutes.includes(pathname) && token){
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/checkout', '/profile', '/login','/register','/otp-verify'],
};