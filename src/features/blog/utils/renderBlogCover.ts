import type { Blog } from '@/widgets/blog'
import { createElement, type ReactNode } from 'react'
import Cover from '../ui/WhatBlog/Cover'

const coverElements = {
    // 'employees-promotion': null,
    // 'company-consciousness-2': null,
    'company-consciousness': Cover
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