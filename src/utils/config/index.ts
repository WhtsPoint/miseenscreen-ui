const config = {
    locale: {
        locales: ['en', 'ru', 'ua'],
        defaultLocale: 'en',
    },
    routes: {
        header: {
            cases: '/#cases',
            cooperation: '/#cooperation',
            ourStory: '/#our-story',
            blog: '/blog',
            contactUs: '/contact',
            services: '/#services'
        },
        services: {
            ecommerce: '/services#ecommerce',
            webPortals: '/services#web-portals',
            elearning: '/services#e-learning',
            hrSoftware: '/services#hr-software',
            analytics: '/services#custom-erp'
        }
    },
    api: 'http://localhost:5500/api/v0/'
} as const

export default config