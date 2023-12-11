import createMiddleware from 'next-intl/middleware';
import globalConfig from '@/utils/config'
export default createMiddleware(globalConfig.locale);

export const config = {
    matcher: ['/', '/(en|ru|ua)/:path*']
};