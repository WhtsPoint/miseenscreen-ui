import { getAllBlogs } from '@/features/blog'
import { BlogPreviewV2 } from '@/widgets/blog/interfaces/BlogPreviewV2'

export default async function getAllBlogsPreviewsV2(locale: string, count?: number): Promise<BlogPreviewV2[]> {
    return ([...await getAllBlogs(locale)]).slice(0, count).map(({ title, id, previewCover, createdAt, themes, author }) => {
        return { title, id, previewCover, createdAt, themes, author }
    })
}