import { Link } from '@/utils/lib/navigation'
import config from '@/utils/config'
import { cl } from '@/utils/lib/cl'
import type { BlogPreviewV2 } from '@/widgets/blog'
import ArticleTableWithLogo from '@/features/blog/ui/ArticleTableWithLogo'
import buttonStyles from '@/utils/assets/styles/button.module.scss'
import styles from './styles.module.scss'

interface Params {
    blogs: BlogPreviewV2[]
}

export default function ArticleTableWithButtonAndLogo(params: Params) {
    return (<section className={styles.section}>
        <ArticleTableWithLogo {...params} />
        <Link href={config.routes.blog} className={cl(styles.moreButton, buttonStyles.button)}>Learn more</Link>
    </section>)
}