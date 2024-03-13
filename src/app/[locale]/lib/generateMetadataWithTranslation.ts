import { getTranslations } from 'next-intl/server'
import { Metadata } from 'next'
import openGraphImage from '../../opengraph-image.png'

const { src, width, height } = openGraphImage

export default async function generateMetadataWithTranslation(
    locale: string, page: string
): Promise<Metadata> {
    const t = await getTranslations({ locale, namespace: 'pages' })
    const metadata = t.raw(page)
    const metadataBase = process.env.HOST_URL ? new URL(process.env.HOST_URL) : null

    return { ...metadata, metadataBase, openGraph: { ...metadata, images: [{ url: src, width, height }] } }
}