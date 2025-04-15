import type { Metadata } from 'next'
import type { Locale } from '@/utils/types/Locale'

const languages = {
    en: 'en',
    ru: 'ru',
    ua: 'uk-UA'
} satisfies Record<Locale, string>

export default function generateAlternates(path: string): Metadata {
    return {
        alternates: {
            languages: {
                ...Object.fromEntries(Object.entries(languages).map(([locale, language]) => {
                    return [language, `${process.env.NEXT_PUBLIC_HOST_URL}/${locale}${path}`]
                })),
                'x-default': `${process.env.NEXT_PUBLIC_HOST_URL}${path}`
            }
        }
    }
}