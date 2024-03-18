import { getBlogById } from '@/features/blog'

export default async function getBlogCoverById(locale: string, id: string): Promise<string> {
    return `http://${process.env.HOSTNAME}:${process.env.PORT}/` + (await getBlogById(locale, id)).previewCover.src
}