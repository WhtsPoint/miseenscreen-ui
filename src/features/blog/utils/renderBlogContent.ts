import type { ReactNode } from 'react'
import type { Blog } from '@/widgets/blog'
import What2Blog from '../ui/What2Blog'
import WhatBlog from '../ui/WhatBlog'
import EmployeesPromotionBlog from '../ui/EmployeesPromotionBlog'
import { createElement } from 'react'

const blogsComponents = {
    'employees-promotion': EmployeesPromotionBlog,
    'company-consciousness-2': What2Blog,
    'company-consciousness': WhatBlog
} as const

export default function renderBlogContent({ id, content }: Pick<Blog, 'id' | 'content'>): ReactNode {
    if (!(id in blogsComponents)) return content

    return createElement(blogsComponents[id as keyof typeof blogsComponents], { content })
}