import Logo from '@/features/blog/ui/Logo'
import ArticleTable from '@/features/blog/ui/ArticleTable'
import type {BlogPreviewV2} from '@/widgets/blog'
import { cl } from '@/utils/lib/cl'
import styles from './styles.module.scss'
import type { ReactNode } from 'react'

interface Params {
    className?: string,
    blogs: BlogPreviewV2[],
    blogsChildren?: Record<number, ReactNode>
}

export default function ArticleTableWithLogo({ className, blogs, blogsChildren }: Params) {
    return (<div className={cl(styles.section, className)}>
        <Logo className={styles.logo} />
        <ArticleTable className={styles.table} articleClassName={styles.blog} blogs={blogs} blogsChildren={blogsChildren} />
    </div>)
}