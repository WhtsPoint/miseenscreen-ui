import ArticleTable from '../ArticleTable'
import { Link } from '@/utils/lib/navigation'
import config from '@/utils/config'
import { cl } from '@/utils/lib/cl'
import styles from './styles.module.scss'
import buttonStyles from '@/utils/assets/styles/button.module.scss'
import Logo from '../Logo'
import { BlogPreviewV2 } from '@/widgets/blog'

interface Params {
    blogs: BlogPreviewV2[]
}

export default function ArticleTableWithButtonAndLogo(params: Params) {
    return (<section className={styles.section}>
        <Logo className={styles.logo} />
        <ArticleTable className={styles.table} articleClassName={styles.blog} {...params} />
        <Link href={config.routes.blog} className={cl(styles.moreButton, buttonStyles.button)}>Learn more</Link>
    </section>)
}