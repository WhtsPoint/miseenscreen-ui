import generateMetadataWithTranslation from '../lib/generateMetadataWithTranslation'
import { Terms } from '@/layers/terms'
import type { Locale } from '@/utils/interfaces/Locale'
import { unstable_setRequestLocale } from 'next-intl/server'
import generateAlternates from '../lib/generateAlternates'

export const generateMetadata = async (params: Locale) => {
    return {
        ...await generateMetadataWithTranslation(params.params.locale, 'terms'),
        ...generateAlternates('/terms')
    }
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