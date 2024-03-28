const locales = ['en', 'ru', 'ua'] as const satisfies string[]

const config = {
    locale: {
        locales,
        defaultLocale: 'en',
    },
    routes: {
        header: {
            cases: '/#cases',
            cooperation: '/#cooperation',
            ourStory: '/#our-story',
            blog: '/#blog',
            contactUs: '/contact',
            services: '/#services'
        },
        services: {
            ecommerce: '/services#ecommerce',
            webPortals: '/services#web-portals',
            elearning: '/services#e-learning',
            hrSoftware: '/services#hr-software',
            analytics: '/services#custom-erp'
        },
        blog: '/blog'
    },
    api: process.env.NEXT_PUBLIC_API_URL
}

export default config