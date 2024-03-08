import { Blog } from '@/widgets/blog'
import { getBlogById } from '@/features/blog'

export default async function getBlogCoverById(locale: string, id: string): Promise<Blog['previewCover']> {
    return (await getBlogById(locale, id)).previewCover
}