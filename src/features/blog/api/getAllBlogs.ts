'use server'

import cover from '@/utils/assets/images/blog/what/preview.jpeg'
import { getTranslations } from 'next-intl/server'
import { Blog } from '@/widgets/blog'
import { WhatBlog } from '@/features/blog'
import { createElement } from 'react'

export default async function getAllBlogs(locale: string): Promise<Blog[]> {
    const t = await getTranslations({ locale, namespace: 'blogs' })

    const blogs: Omit<Blog, 'title' | 'description' | 'themes'>[] = [
        {
            id: 'what',
            previewCover: cover,
            createdAt: new Date('December 17, 1995 03:24:00'),
            content: createElement(WhatBlog)
        }
    ]
    blogs.sort((first, second) => {
        return second.createdAt.getTime() - first.createdAt.getTime()
    })

    return blogs.map((blog) => {
        const translation = t.raw(blog.id)
        return { ...translation, themes: Object.values(translation.themes), ...blog }
    })
}