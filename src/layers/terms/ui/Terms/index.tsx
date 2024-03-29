import { getLocale } from 'next-intl/server'
import { ReactNode } from 'react'
import config from '@/utils/config'
import { notFound } from 'next/navigation'
import EnTerms from '../EnTerms'
import RuTerms from '@/layers/terms/ui/RuTerms'
import UaTerms from '@/layers/terms/UaTerms'

const pages = {
    'en': <EnTerms />,
    'ru': <RuTerms />,
    'ua': <UaTerms />
} as const satisfies Record<(typeof config.locale.locales)[number], ReactNode>

const isPageExists = (locale: string): locale is keyof typeof pages=> locale in pages

export default async function   Terms() {
    const locale = await getLocale()

    if (!isPageExists(locale)) return notFound()

    return pages[locale]
}