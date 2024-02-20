import { ServicePage } from '@/layers/serivces'
import { Locale } from '@/utils/interfaces/Locale'
import generateMetadataWithTranslation from '../lib/generateMetadataWithTranslation'

export const generateMetadata = async (params: Locale) => {
    return generateMetadataWithTranslation(params.params.locale, 'services')
}

export default function Page() {
    return <ServicePage />
}