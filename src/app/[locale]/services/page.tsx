import { ServicePage } from '@/layers/serivces'
import { Locale } from '@/utils/interfaces/Locale'
import generateMetadataWithTranslation from '../lib/generateMetadataWithTranslation'
import { NextIntlClientProvider } from 'next-intl'
import useCertainMessages from '../../hooks/useCertainIntlMessages'

export const generateMetadata = async (params: Locale) => {
    return generateMetadataWithTranslation(params.params.locale, 'services')
}

const messageKeys = [
    'services',
    'footer',
    'email-subscription'
] as const satisfies string[]

export default function Page() {
    const messages = useCertainMessages(messageKeys)

    return (<>
        <NextIntlClientProvider messages={messages}>
            <ServicePage />
        </NextIntlClientProvider>
    </>)
}