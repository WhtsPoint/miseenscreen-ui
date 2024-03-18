const nextIntlWrapper = require('next-intl/plugin')(
    './src/app/lib/i18n.ts'
);

/** @type {import('next').NextConfig} */
const nextConfig = nextIntlWrapper({
    output: 'standalone',
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3000'
            },
            {
                protocol: 'http',
                hostname: 'miseenscreen.com',
                port: ''
            }
        ],
    }
})

module.exports = nextConfig
