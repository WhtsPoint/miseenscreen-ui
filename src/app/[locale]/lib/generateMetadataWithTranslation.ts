import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import openGraphImage from '../../opengraph-image.png'

const { src, width, height } = openGraphImage

export default async function generateMetadataWithTranslation(
    locale: string, page: string
): Promise<Metadata> {
    const t = await getTranslations({ locale, namespace: 'pages' })
    const metadata = t.raw(page)

    return { ...metadata, openGraph: { ...metadata, images: [{ url: src, width, height }] } }
}