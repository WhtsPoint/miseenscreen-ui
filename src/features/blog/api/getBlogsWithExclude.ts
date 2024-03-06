'use server'

import { getAllBlogs } from '@/features/blog'
import { Blog } from '@/widgets/blog'

export default async function getBlogsWithExclude(locale: string, excludeIds: string[]): Promise<Blog[]> {
    const blogs = await getAllBlogs(locale)

    return blogs.filter((blog) => !excludeIds.includes(blog.id))
}