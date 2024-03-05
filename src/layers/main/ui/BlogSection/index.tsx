import { ArticleCarousel } from '@/features/blog'
import Logo from '@/features/blog/ui/Logo'
import { getAllBlogs } from '@/features/blog'
import { getLocale } from 'next-intl/server'
import styles from './styles.module.scss'

export default async function BlogSection() {
    const locale = await getLocale()
    const blogs = await getAllBlogs(locale)

    return (<section className={styles.section}>
        <Logo className={styles.section__logo} />
        <ArticleCarousel blogs={blogs} className={styles.section__carousel} />
    </section>)
}