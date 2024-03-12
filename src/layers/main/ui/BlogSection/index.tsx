import { ArticleCarousel, getAllBlogsPreviews } from '@/features/blog'
import { Logo } from '@/features/blog'
import { getLocale } from 'next-intl/server'
import styles from './styles.module.scss'
import { CertainSectionWrapper } from '@/layers/main'

export default async function BlogSection() {
    const locale = await getLocale()
    const blogs = await getAllBlogsPreviews(locale)

    return (<CertainSectionWrapper>
        <section className={styles.section}>
            <Logo className={styles.section__logo} />
            <ArticleCarousel blogs={blogs} className={styles.section__carousel} />
        </section>
    </CertainSectionWrapper>)
}