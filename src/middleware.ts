/* eslint-disable no-case-declarations */
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function middleware(req: NextRequest) {
      const basicAuth = req.headers.get('Authorization')?.split(' ')[1];
      const url = req.nextUrl;
      if (basicAuth) {
        const [username, password] = atob(basicAuth).split(':');

        if (
          username === 'username' &&
          password === 'password'
        ) {
          return NextResponse.next();
        }
      }
      url.pathname = '/api/basicauth';
      return NextResponse.rewrite(url);
}

export const config = {
  matcher: '/:path*',
};
