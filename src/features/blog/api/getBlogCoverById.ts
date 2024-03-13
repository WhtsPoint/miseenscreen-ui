import { getBlogById } from '@/features/blog'

export default async function getBlogCoverById(locale: string, id: string): Promise<string> {
    return process.env.HOST_URL + (await getBlogById(locale, id)).previewCover.src
}