const nextIntlWrapper = require('next-intl/plugin')(
    './src/app/lib/i18n.ts'
);

/** @type {import('next').NextConfig} */
const nextConfig = nextIntlWrapper({})

module.exports = nextConfig
