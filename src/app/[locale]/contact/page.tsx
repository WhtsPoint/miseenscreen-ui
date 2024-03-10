import { ContactUsPage } from '@/layers/contact'
import { Locale } from '@/utils/interfaces/Locale'
import generateMetadataWithTranslation from '../lib/generateMetadataWithTranslation'
import useCertainMessages from '../../hooks/useCertainIntlMessages'
import { NextIntlClientProvider } from 'next-intl'

export const generateMetadata = async (params: Locale) => {
    return generateMetadataWithTranslation(params.params.locale, 'contact-us')
}

const messageKeys = [
    'contact-us',
] as const satisfies string[]

export default function Page() {
    const messages = useCertainMessages(messageKeys)

    return (<NextIntlClientProvider messages={messages}>
        <ContactUsPage />
    </NextIntlClientProvider>)
}