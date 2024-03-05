import { Blog } from '../../interfaces/Blog'
import Image from 'next/image'
import { Children } from '@/utils/interfaces/Children'
import { ReactNode } from 'react'
import styles from './styles.module.scss'

interface Params extends Children<ReactNode> {
    blog: Blog
}

export default function BlogArticle({ blog, children }: Params) {
    const { title, previewCover} = blog

    return (<section className={styles.blogArticle}>
        <header className={styles.blogArticle__header}>
            <Image {...previewCover} alt={'Article cover page'} />
        </header>
        <article className={styles.blogArticle__body}>
            <h1>{title}</h1>
            {children}
        </article>
    </section>)
}