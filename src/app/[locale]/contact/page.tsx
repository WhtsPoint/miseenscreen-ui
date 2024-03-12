import { ContactUsPage } from '@/layers/contact'
import { Locale } from '@/utils/interfaces/Locale'
import generateMetadataWithTranslation from '../lib/generateMetadataWithTranslation'
import useCertainMessages from '../../hooks/useCertainIntlMessages'
import { NextIntlClientProvider } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'

export const generateMetadata = async (params: Locale) => {
    return generateMetadataWithTranslation(params.params.locale, 'contact-us')
}

const messageKeys = [
    'contact-us',
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
        <ContactUsPage />
    </NextIntlClientProvider>)
}