'use client'

import type { BlogPreviewV2 } from '../../interfaces/BlogPreviewV2'
import ArticlePreviewV2 from '@/widgets/blog/ui/ArticlePreviewV2'
import { cl } from '@/utils/lib/cl'
import styles from './styles.module.scss'
import type { ReactNode } from 'react'

interface Params {
    blogs: BlogPreviewV2[],
    blogsChildren?: Record<number, ReactNode>,
    onClick?: (blogId: BlogPreviewV2['id']) => unknown,
    className?: string,
    articleClassName?: string,
}

export default function ArticleTable({ className, blogsChildren, articleClassName, blogs, onClick }: Params) {
    console.log(blogsChildren)
    return (<div className={cl(styles.articleList, className)}>
        {blogs.map((blog, index) => <ArticlePreviewV2
            key={blog.id}
            blog={blog}
            onClick={() => onClick?.(blog.id)}
            className={cl(styles.article, articleClassName)}
            titleClassName={styles.blogTitle}
        >{blogsChildren?.[index]}</ArticlePreviewV2>)}
    </div>)
}