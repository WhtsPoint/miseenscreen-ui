const config = {
    locale: {
        locales: ['en', 'ru', 'ua'],
        defaultLocale: 'en',
    },
    routes: {
        header: {
            cases: '#cases',
            cooperation: '#cooperation',
            ourStory: '#about',
            blog: '/blog',
            contactUs: '/contact'
        }
    },
    api: 'http://localhost:5500/api/v0/'
}

export default config