import generateMetadataWithTranslation from '../lib/generateMetadataWithTranslation'
import { Terms } from '@/layers/terms'
import type { Locale } from '@/utils/interfaces/Locale'
import { unstable_setRequestLocale } from 'next-intl/server'

export const generateMetadata = async (params: Locale) => {
    return generateMetadataWithTranslation(params.params.locale, 'terms')
}

interface Params {
    params: {
        locale: string
    }
}

export default function Page({ params: { locale } }: Params) {
    unstable_setRequestLocale(locale);

    return <Terms />
}