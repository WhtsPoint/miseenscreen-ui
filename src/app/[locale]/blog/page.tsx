import type { Locale } from '@/utils/interfaces/Locale'
import type { Metadata } from 'next'
import { AllBlogsPage } from '@/layers/blog'
import { NextIntlClientProvider } from 'next-intl'
import useCertainMessages from '../../hooks/useCertainIntlMessages'
import generateAlternates from '../lib/generateAlternates'
import { unstable_setRequestLocale } from 'next-intl/server'
import generateMetadataWithTranslation from '../lib/generateMetadataWithTranslation'

export const generateMetadata = async (params: Locale): Promise<Metadata> => {
    return {
        ...await generateMetadataWithTranslation(params.params.locale, 'blogs'),
        ...generateAlternates('/blog')
    }
}

const messageKeys = [
    'footer',
    'email-subscription',
    'contact-us-modal',
    'contact-us'
] as const satisfies string[]

interface Params {
    params: {
        locale: string
    }
}

export default function Page({ params: { locale } }: Params) {
    unstable_setRequestLocale(locale);

    const messeges = useCertainMessages(messageKeys)

    return (<NextIntlClientProvider messages={messeges}>
        <AllBlogsPage />
    </NextIntlClientProvider>)
}