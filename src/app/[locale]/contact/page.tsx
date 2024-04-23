import { ContactUsPage } from '@/layers/contact'
import type { Locale } from '@/utils/interfaces/Locale'
import generateMetadataWithTranslation from '../lib/generateMetadataWithTranslation'
import useCertainMessages from '../../hooks/useCertainIntlMessages'
import { NextIntlClientProvider } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import generateAlternates from '../lib/generateAlternates'

export const generateMetadata = async (params: Locale) => {
    return {
        ...await generateMetadataWithTranslation(params.params.locale, 'contact-us'),
        ...generateAlternates('/contact')
    }
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