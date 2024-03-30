import { ArticleTable, getAllBlogsPreviewsV2, Logo } from '@/features/blog'
import { getLocale } from 'next-intl/server'
import styles from './styles.module.scss'

export default async function AllBlogsPage() {
    const locale = await getLocale()
    const blogs = await getAllBlogsPreviewsV2(locale)

    return (<section className={styles.page}>
        <Logo />
        <ArticleTable className={styles.table} articleClassName={styles.blog} blogs={blogs} />
    </section>)
}