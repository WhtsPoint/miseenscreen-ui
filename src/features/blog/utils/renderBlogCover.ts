import type { Blog } from '@/widgets/blog'
import { createElement, type ReactNode } from 'react'
import WhatCover from '../ui/WhatBlog/Cover'
import What2Cover from '../ui/What2Blog/Cover'
import EPromotionCover from '../ui/EmployeesPromotionBlog/Cover'

const coverElements = {
    'employees-promotion': EPromotionCover,
    'company-consciousness-2': What2Cover,
    'company-consciousness': WhatCover
} as const


// fill
// sizes={'100vw'}
// src={previewCover.src}
// className={styles.blogArticle__background__image}
// alt={'Article cover page'}

export default function renderBlogCover(
    { id, previewCover }: Pick<Blog, 'id' | 'previewCover'>
): ReactNode {
    if (!(id in coverElements)) return null

    return createElement(coverElements[id as keyof typeof coverElements], { previewCover })
}