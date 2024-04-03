import { ServicePage } from '@/layers/serivces'
import { Locale } from '@/utils/interfaces/Locale'
import generateMetadataWithTranslation from '../lib/generateMetadataWithTranslation'
import { NextIntlClientProvider } from 'next-intl'
import useCertainMessages from '../../hooks/useCertainIntlMessages'
import { unstable_setRequestLocale } from 'next-intl/server'

export const generateMetadata = async (params: Locale) => {
    return generateMetadataWithTranslation(params.params.locale, 'services')
}

const messageKeys = [
    'services',
    'footer',
    'email-subscription',
    'contact-us-modal'
] as const satisfies string[]

interface Params {
    params: {
        locale: string
    }
}

export default function Page({ params: { locale } }: Params) {
    unstable_setRequestLocale(locale)

    const messages = useCertainMessages(messageKeys)

    return (<>
        <NextIntlClientProvider messages={messages}>
            <ServicePage />
        </NextIntlClientProvider>
    </>)
}