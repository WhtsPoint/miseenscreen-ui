import { MainPage } from '@/layers/main'
import { Locale } from '@/utils/interfaces/Locale'
import generateMetadataWithTranslation from './lib/generateMetadataWithTranslation'
import { NextIntlClientProvider } from 'next-intl'
import useCertainMessages from '../hooks/useCertainIntlMessages'
import { unstable_setRequestLocale } from 'next-intl/server'

export const generateMetadata = async (params: Locale) => {
    return generateMetadataWithTranslation(params.params.locale, 'main')
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
    'contact-us-modal'
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