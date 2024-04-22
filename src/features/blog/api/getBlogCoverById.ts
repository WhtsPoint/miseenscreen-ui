import { getBlogById } from '@/features/blog'

export default async function getBlogCoverById(locale: string, id: string): Promise<string> {
    return `https://${process.env.HOSTNAME}:${process.env.PORT}/` + (await getBlogById(locale, id)).previewCover.src
}