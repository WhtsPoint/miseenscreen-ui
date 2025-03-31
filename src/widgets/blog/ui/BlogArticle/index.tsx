import type { Blog } from '../../interfaces/Blog'
import Image from 'next/image'
import type { Children } from '@/utils/interfaces/Children'
import { Fragment, type ReactNode } from 'react'
import { getTranslations } from 'next-intl/server'
import { HeaderThemeSwitcher } from '@/features/header'
import styles from './styles.module.scss'

interface Params extends Children<ReactNode> {
    blog: Pick<Blog, 'title' | 'themes' | 'previewCover' | 'id' | 'createdAt'>
}

export default async function BlogArticle({ blog, children }: Params) {
    const t = await getTranslations('blogs.content.general')
    const { title, themes, previewCover, createdAt } = blog

    return (<section className={styles.blogArticle}>
        <div className={styles.blogArticle__background}>
            <Image
                fill
                sizes={'100vw'}
                src={previewCover.src}
                className={styles.blogArticle__background__image}
                alt={'Article cover page'}
            />
        </div>
        <HeaderThemeSwitcher />
        <div className={styles.blogArticle__content}>
            <header className={styles.blogArticle__content__header}>
                <h1 className={styles.blogArticle__content__header__title}>{title}</h1>
                <div className={styles.blogArticle__content__header__meta}>
                    <div className={styles.blogArticle__content__header__meta__themes}>
                        <p>{t('themes')}</p>
                        <ul className={styles.blogArticle__content__header__meta__themes__list}>
                            {themes.map((theme, index) => <Fragment key={index}>
                                <li>{theme}</li>
                                {index !== themes.length - 1 ? ' | ' : ''}
                            </Fragment>)}
                        </ul>
                    </div>
                </div>
            </header>
            <article className={styles.blogArticle__body}>
                {children}
            </article>
        </div>
    </section>)
}