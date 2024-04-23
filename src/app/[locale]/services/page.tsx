import { ServicePage } from '@/layers/serivces'
import type { Locale } from '@/utils/interfaces/Locale'
import generateMetadataWithTranslation from '../lib/generateMetadataWithTranslation'
import { NextIntlClientProvider } from 'next-intl'
import useCertainMessages from '../../hooks/useCertainIntlMessages'
import { unstable_setRequestLocale } from 'next-intl/server'
import generateAlternates from '../lib/generateAlternates'

export const generateMetadata = async (params: Locale) => {
    return {
        ...await generateMetadataWithTranslation(params.params.locale, 'services'),
        ...generateAlternates('/services')
    }
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