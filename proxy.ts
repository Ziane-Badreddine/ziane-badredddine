import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for:
  // - /api, /trpc, /_next, /_vercel
  // - files containing a dot (favicon.ico, etc.)
  // - /studio-* routes
  matcher: '/((?!api|trpc|_next|_vercel|studio|.*\\..*).*)'
};
