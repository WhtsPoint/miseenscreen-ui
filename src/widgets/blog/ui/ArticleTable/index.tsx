'use client'

import { BlogPreview } from '../../interfaces/BlogPreview'
import ArticlePreviewV2 from '@/widgets/blog/ui/ArticlePreviewV2'
import { cl } from '@/utils/lib/cl'
import styles from './styles.module.scss'

interface Params {
    blogs: BlogPreview[],
    onClick?: (blogId: BlogPreview['id']) => unknown,
    className?: string,
    articleClassName?: string
}

export default function ArticleTable({ className, articleClassName, blogs, onClick }: Params) {
    return (<div className={cl(styles.articleList, className)}>
        {blogs.map((blog) => <ArticlePreviewV2
            key={blog.id}
            blog={blog}
            onClick={() => onClick?.(blog.id)}
            className={cl(styles.article, articleClassName)}
            titleClassName={styles.blogTitle}
        />)}
    </div>)
}