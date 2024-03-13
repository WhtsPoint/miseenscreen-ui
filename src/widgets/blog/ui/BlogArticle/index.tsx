import { Blog } from '../../interfaces/Blog'
import Image from 'next/image'
import { Children } from '@/utils/interfaces/Children'
import { Fragment, ReactNode } from 'react'
import styles from './styles.module.scss'
import { getTranslations } from 'next-intl/server'

interface Params extends Children<ReactNode> {
    blog: Pick<Blog, 'title' | 'themes' | 'previewCover' | 'id' | 'createdAt'>
}

export default async function BlogArticle({ blog, children }: Params) {
    const t = await getTranslations('blogs.content.general')
    const { title, themes, previewCover: { width, height, src }, createdAt } = blog
    const [year, month, day] = [
        createdAt.getFullYear(),
        ("0" + (createdAt.getMonth() + 1)).slice(-2),
        ("0" + (createdAt.getDay() + 1)).slice(-2),
    ]

    return (<section className={styles.blogArticle}>
        <Image
            className={styles.blogArticle__background}
            alt={'Article cover page'}
            {...{ width, height, src }}
        />
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
                    <div className={styles.blogArticle__content__header__meta__themes}>
                        <p>{t('created-at')}</p>
                        <p>{`${month}.${day}.${year}`}</p>
                    </div>
                </div>
            </header>
            <article className={styles.blogArticle__body}>
                {children}
            </article>
        </div>
    </section>)
}