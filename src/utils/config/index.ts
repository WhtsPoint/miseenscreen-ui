const config = {
    locale: {
        locales: ['en', 'ru', 'ua'] as const,
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
        blog: '/blog',
        privacyPolicy: '/privacy-policy'
    },
    contacts: {
        email: 'commercial@miseenscreeen.com',
        phone: {
            current: '+1323-683-8107',
            display: '+1 323 683 8107'
        }
    },
    api: process.env.NEXT_PUBLIC_API_URL
}

export default config