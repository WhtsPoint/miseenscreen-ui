'use server'

import { getTranslations } from 'next-intl/server'
import { Blog } from '@/widgets/blog'
import { What2Blog, WhatBlog } from '@/features/blog'
import { createElement } from 'react'
import cover1 from '@/utils/assets/images/blog/what/preview.jpeg'
import cover2 from '@/utils/assets/images/blog/what2/preview.png'

export default async function getAllBlogs(locale: string): Promise<Blog[]> {
    const t = await getTranslations({ locale, namespace: 'blogs' })

    const blogs: Omit<Blog, 'title' | 'description' | 'themes'>[] = [
        {
            id: 'company-consciousness',
            previewCover: cover1,
            createdAt: new Date('03.02.2024'),
            content: createElement(WhatBlog)
        },
        {
            id: 'company-consciousness-2',
            previewCover: cover2,
            createdAt: new Date('03.07.2024'),
            content: createElement(What2Blog)
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