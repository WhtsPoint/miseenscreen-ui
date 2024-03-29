import generateMetadataWithTranslation from '../lib/generateMetadataWithTranslation'
import { Terms } from '@/layers/terms'
import { Locale } from '@/utils/interfaces/Locale'

export const generateMetadata = async (params: Locale) => {
    return generateMetadataWithTranslation(params.params.locale, 'terms')
}

export default function Page() {
    return <Terms />
}