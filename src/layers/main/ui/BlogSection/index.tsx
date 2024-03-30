import { getAllBlogsPreviewsV2 } from '@/features/blog'
import { Logo } from '@/features/blog'
import { getLocale } from 'next-intl/server'
import { CertainSectionWrapper } from '@/layers/main'
import { ArticleTable } from '@/features/blog'
import { cl } from '@/utils/lib/cl'
import { Link } from '@/utils/lib/navigation'
import config from '@/utils/config'
import styles from './styles.module.scss'
import buttonStyles from '@/utils/assets/styles/button.module.scss'

const blogsCount = 6

export default async function BlogSection() {
    const locale = await getLocale()
    const blogs = await getAllBlogsPreviewsV2(locale, blogsCount)

    return (<CertainSectionWrapper>
        <section className={styles.section}>
            <Logo className={styles.section__logo} />
            <ArticleTable className={styles.table} articleClassName={styles.blog} blogs={blogs} />
            <Link href={config.routes.blog} className={cl(styles.moreButton, buttonStyles.button)}>Learn more</Link>
        </section>
    </CertainSectionWrapper>)
}