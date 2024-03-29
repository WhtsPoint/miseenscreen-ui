import { PrivacyPolicy } from '@/layers/privacy-policy'
import { Locale } from '@/utils/interfaces/Locale'
import generateMetadataWithTranslation from '../lib/generateMetadataWithTranslation'

export const generateMetadata = async (params: Locale) => {
    return generateMetadataWithTranslation(params.params.locale, 'privacy-policy')
}

export default function Page() {
    return (<PrivacyPolicy />)
}