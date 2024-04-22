'use server'

import type { Blog } from '@/widgets/search'
import { getAllBlogs } from '@/features/blog'
import searchCoincidenceInCategory from '../lib/searchCoincidenceInCategory'
import removeBlogContentTags from '../lib/removeBlogContentTags'

export default async function getAllBlogsSearch(locale: string, line: string): Promise<Blog[]> {
    let blogs = await getAllBlogs(locale)

    return searchCoincidenceInCategory(
        blogs.map(({ title, content, id }) => ({
            title,
            description: removeBlogContentTags(content),
            id
        })),
        line
    )
}