const config = {
    locale: {
        locales: ['en', 'ru', 'ua'],
        defaultLocale: 'en',
    },
    routes: {
        header: {
            cases: '#welcome',
            cooperation: '/cooperation',
            ourStory: '/about',
            blog: '/blog',
            contactUs: '/contact'
        }
    },
    api: 'http://localhost:8000/api/v0/'
}

export default config