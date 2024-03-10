import { MainPage } from '@/layers/main'
import { Locale } from '@/utils/interfaces/Locale'
import generateMetadataWithTranslation from './lib/generateMetadataWithTranslation'
import { NextIntlClientProvider } from 'next-intl'
import useCertainMessages from '../hooks/useCertainIntlMessages'

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
    'email-subscription'
] as const satisfies string[]

export default function Page() {
    const messages = useCertainMessages(messageKeys)

    return (<NextIntlClientProvider messages={messages}>
        <MainPage />
    </NextIntlClientProvider>)
}