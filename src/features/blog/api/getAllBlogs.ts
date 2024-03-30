'use server'

import { getTranslations } from 'next-intl/server'
import { Blog } from '@/widgets/blog'
import { EmployeesPromotionBlog, What2Blog, WhatBlog } from '@/features/blog'
import { createElement } from 'react'
import cover1 from '@/../public/assets/blog/employees-promotion/preview.jpeg'
import cover2 from '@/../public/assets/blog/what/preview.jpeg'
import cover3 from '@/../public/assets/blog/what2/preview.png'

export default async function getAllBlogs(locale: string): Promise<Blog[]> {
    const t = await getTranslations({ locale, namespace: 'blogs' })

    const blogs: Omit<Blog, 'title' | 'description' | 'themes'>[] = [
        {
            id: 'employees-promotion',
            previewCover: { ...cover3, src: '/assets/blog/employees-promotion/preview.jpeg' },
            createdAt: new Date('03.06.2024'),
            content: createElement(EmployeesPromotionBlog),
            author: t('names.darya')
        },
        {
            id: 'company-consciousness-2',
            previewCover: { ...cover2, src: '/assets/blog/what2/preview.png' },
            createdAt: new Date('03.02.2024'),
            content: createElement(What2Blog),
            author: t('names.darya')
        },
        {
            id: 'company-consciousness',
            previewCover: { ...cover1, src: '/assets/blog/what/preview.jpeg' },
            createdAt: new Date('03.02.2024'),
            content: createElement(WhatBlog),
            author: t('names.darya')
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