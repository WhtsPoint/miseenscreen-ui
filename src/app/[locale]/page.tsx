import type { Locale } from '@/utils/interfaces/Locale'
import type { Metadata } from 'next'
import { MainPage } from '@/layers/main'
import generateMetadataWithTranslation from './lib/generateMetadataWithTranslation'
import generateAlternates from './lib/generateAlternates'
import { NextIntlClientProvider } from 'next-intl'
import useCertainMessages from '../hooks/useCertainIntlMessages'
import { unstable_setRequestLocale } from 'next-intl/server'

export const generateMetadata = async (params: Locale): Promise<Metadata> => {
    return {
        ...await generateMetadataWithTranslation(params.params.locale, 'main'),
        ...generateAlternates('/blog')
    }
}

const messageKeys = [
    'welcome',
    'stack',
    'cooperation',
    'philosophy',
    'steps',
    'cases',
    'cases-points',
    'about-us',
    'footer',
    'email-subscription',
    'contact-us',
    'contact-us-modal',
    'services'
] as const satisfies string[]

interface Params {
    params: {
        locale: string
    }
}

export default function Page({ params: { locale } }: Params) {
    unstable_setRequestLocale(locale);

    const messages = useCertainMessages(messageKeys)

    return (<NextIntlClientProvider messages={messages}>
        <MainPage />
    </NextIntlClientProvider>)
}