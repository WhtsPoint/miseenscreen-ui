'use server'

import { MainPage } from '@/layers/main'
import { Locale } from '@/utils/interfaces/Locale'
import generateMetadataWithTranslation from './lib/generateMetadataWithTranslation'

export const generateMetadata = async (params: Locale) => {
    return generateMetadataWithTranslation(params.params.locale, 'main')
}

export default async function Page() {
    return (<MainPage />)
}