const config = {
    locale: {
        locales: ['en', 'ru', 'ua'] as const,
        defaultLocale: 'en',
    },
    routes: {
        header: {
            cases: '/#cases',
            cooperation: '/#cooperation',
            ourStory: '/who-we-are',
            blog: '/blog',
            contactUs: '/contact',
            services: '/#services',
            steps: '/#steps'
        },
        services: {
            index: '/services',
            ecommerce: '/services#ecommerce',
            webPortals: '/services#web-portals',
            elearning: '/services#e-learning',
            hrSoftware: '/services#hr-software',
            analytics: '/services#custom-erp'
        },
        blog: '/blog',
        privacyPolicy: '/privacy-policy',
        terms: '/terms'
    },
    contacts: {
        email: 'support@miseenscreen.com',
        phone: {
            current: '+1323-683-8107',
            display: '+1 323 683 8107'
        },
        instagram: 'https://www.instagram.com/invites/contact/?i=9x8se10rzuid&utm_content=ufl7961',
        facebook: 'https://www.facebook.com/profile.php?id=61558356326051&mibextid=dGKdO6',
        threads: 'https://www.facebook.com/profile.php?id=61558356326051&mibextid=dGKdO6',
        twitter: 'https://twitter.com/Mise_en_screen',
        youtube: '#'
    },
    api: process.env.NEXT_PUBLIC_API_URL
}

export default config