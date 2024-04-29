import { HeaderTheme } from '@/features/header'
import { getLocale } from 'next-intl/server'
import type { ReactNode } from 'react'
import { notFound } from 'next/navigation'
import EnTerms from '../EnTerms'
import RuTerms from '@/layers/terms/ui/RuTerms'
import UaTerms from '@/layers/terms/UaTerms'
import type { Locale } from '@/utils/types/Locale'

const pages = {
    'en': <EnTerms />,
    'ru': <RuTerms />,
    'ua': <UaTerms />
} as const satisfies Record<Locale, ReactNode>

const isPageExists = (locale: string): locale is keyof typeof pages=> locale in pages

export default async function Terms() {
    const locale = await getLocale()

    if (!isPageExists(locale)) return notFound()

    return (<>
        <HeaderTheme theme={'solid'} />
        {pages[locale]}
    </>)
}