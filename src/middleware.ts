import createMiddleware from 'next-intl/middleware';
import globalConfig from '@/utils/config'

const locale = globalConfig.locale

export default createMiddleware({ ...locale, locales: [...locale.locales] as string[] });

export const config = {
    matcher: ['/', '/(en|ru|ua)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};