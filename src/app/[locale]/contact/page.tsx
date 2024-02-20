import { ContactUsPage } from '@/layers/contact'
import { Locale } from '@/utils/interfaces/Locale'
import generateMetadataWithTranslation from '../lib/generateMetadataWithTranslation'

export const generateMetadata = async (params: Locale) => {
    return generateMetadataWithTranslation(params.params.locale, 'contact-us')
}

export default function Page() {
    return (<ContactUsPage />)
}