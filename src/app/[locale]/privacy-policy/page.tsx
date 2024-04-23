import { PrivacyPolicy } from '@/layers/privacy-policy'
import type { Locale } from '@/utils/interfaces/Locale'
import generateMetadataWithTranslation from '../lib/generateMetadataWithTranslation'
import { unstable_setRequestLocale } from 'next-intl/server'
import generateAlternates from '../lib/generateAlternates'

export const generateMetadata = async (params: Locale) => {
    return {
        ...await generateMetadataWithTranslation(params.params.locale, 'privacy-policy'),
        ...generateAlternates('/privacy-policy')
    }
}

interface Params {
    params: {
        locale: string
    }
}

export default function Page({ params: { locale } }: Params) {
    unstable_setRequestLocale(locale);

    return (<PrivacyPolicy />)
}