import { getTranslations } from 'next-intl/server'

export default async function generateMetadataWithTranslation(locale: string, page: string) {
    const t = await getTranslations({ locale, namespace: 'pages' })
    const metadata = t.raw(page)

    return { ...metadata, openGraph: metadata }
}