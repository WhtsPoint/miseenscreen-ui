import { PrivacyPolicy } from '@/layers/privacy-policy'
import { Locale } from '@/utils/interfaces/Locale'
import generateMetadataWithTranslation from '../lib/generateMetadataWithTranslation'
import { unstable_setRequestLocale } from 'next-intl/server'

export const generateMetadata = async (params: Locale) => {
    return generateMetadataWithTranslation(params.params.locale, 'privacy-policy')
}

interface Params {
    params: {
        locale: string
    }
}

export default function Page({ params: { locale } }: Params) {
    unstable_setRequestLocale(locale);

    return (<>
        <PrivacyPolicy />
    </>)
}