import { ArticleTableWithButtonAndLogo, getAllBlogsPreviewsV2 } from '@/features/blog'
import { getLocale } from 'next-intl/server'
import { FooterSection } from '@/layers/main'
import styles from './styles.module.scss'

export default async function AllBlogsPage() {
    const locale = await getLocale()
    const blogs = await getAllBlogsPreviewsV2(locale)

    return (<section className={styles.page}>
        <ArticleTableWithButtonAndLogo blogs={blogs} />
        <FooterSection className={styles.footer} />
    </section>)
}