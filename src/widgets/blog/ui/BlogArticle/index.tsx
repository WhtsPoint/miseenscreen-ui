import { Blog } from '../../interfaces/Blog'
import Image from 'next/image'
import { Children } from '@/utils/interfaces/Children'
import { Fragment, ReactNode } from 'react'
import styles from './styles.module.scss'

interface Params extends Children<ReactNode> {
    blog: Pick<Blog, 'title' | 'themes' | 'previewCover'>
}

export default function BlogArticle({ blog, children }: Params) {
    const { title, themes, previewCover: { width, height, src }} = blog

    return (<section className={styles.blogArticle}>
        <Image
            className={styles.blogArticle__background}
            alt={'Article cover page'}
            {...{ width, height, src }}
        />
        <div className={styles.blogArticle__content}>
            <header className={styles.blogArticle__content__header}>
                <h1 className={styles.blogArticle__content__header__title}>{title}</h1>
                <div className={styles.blogArticle__content__header__themes}>
                    <p>Themes:</p>
                    <ul className={styles.blogArticle__content__header__themes__list}>
                        {themes.map((theme, index) => <Fragment key={index}>
                            <li>{theme}</li>
                            {index !== themes.length - 1 ? ' | ' : ''}
                        </Fragment>)}
                    </ul>
                </div>
            </header>
            <article className={styles.blogArticle__body}>
                {children}
            </article>
        </div>
    </section>)
}