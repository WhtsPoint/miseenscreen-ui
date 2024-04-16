import { Locale } from '@/utils/interfaces/Locale'
import { WhoWeArePage } from '@/layers/who-we-are'
import useCertainMessages from '@/app/hooks/useCertainIntlMessages'
import generateMetadataWithTranslation from '../lib/generateMetadataWithTranslation'
import { unstable_setRequestLocale } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'

export const generateMetadata = async (params: Locale) => {
    return generateMetadataWithTranslation(params.params.locale, 'privacy-policy')
}

interface Params {
    params: {
        locale: string
    }
}

const messageKeys = [
    'who-we-are',
    'footer',
    'email-subscription'
] as const satisfies string[]

export default function Page({ params: { locale } }: Params) {
    unstable_setRequestLocale(locale);

    const messages = useCertainMessages(messageKeys)

    return (<NextIntlClientProvider messages={messages}>
        <WhoWeArePage />
    </NextIntlClientProvider>)
}