'use server'

import getAllBlogs from './getAllBlogs'
import type { Blog } from '@/widgets/blog'
import { notFound } from 'next/navigation'

export default async function getBlogById(locale: string, id: string): Promise<Blog> {
    const blog = (await getAllBlogs(locale)).find((blog) => blog.id === id)

    if (!blog) notFound()

    return blog
}