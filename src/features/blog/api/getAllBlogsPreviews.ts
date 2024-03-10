import { BlogPreview } from '@/widgets/blog'
import { getAllBlogs } from '@/features/blog'

export default async function getAllBlogsPreviews(locale: string): Promise<BlogPreview[]> {
    return (await getAllBlogs(locale)).map(({ title, id, previewCover, createdAt }) => ({ title, id, previewCover, createdAt }))
}