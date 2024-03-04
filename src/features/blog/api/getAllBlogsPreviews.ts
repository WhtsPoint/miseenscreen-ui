import getAllBlogs from './getAllBlogs'
import { BlogPreview } from '@/widgets/blog'

export default function getAllBlogsPreviews(): BlogPreview[] {
    return getAllBlogs()
}