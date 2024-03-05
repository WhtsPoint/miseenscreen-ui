'use server'

import { Blog } from '@/widgets/blog'
import getAllBlogs from './getAllBlogs'

export default async function getAllBlogsId(): Promise<Blog['id'][]> {
    return (await getAllBlogs('en')).map(({ id }) => id)
}