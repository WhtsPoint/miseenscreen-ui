'use server'

import cover from '@/utils/assets/images/blog/what/preview.jpg'
import { getTranslations } from 'next-intl/server'
import { Blog } from '@/widgets/blog'

export default async function getAllBlogs(locale: string): Promise<Blog[]> {
    const t = await getTranslations({ locale, namespace: 'blogs' })

    const blogs =  [
        {
            id: 'what',
            previewCover: cover,
            createdAt: new Date('December 17, 1995 03:24:00')
        }
    ]
    blogs.sort((first, second) => {

        return second.createdAt.getTime() - first.createdAt.getTime()
    })

    return blogs.map((blog) => ({ ...t.raw(blog.id), ...blog}))
}