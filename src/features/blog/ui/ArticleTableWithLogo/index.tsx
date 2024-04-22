import Logo from '@/features/blog/ui/Logo'
import ArticleTable from '@/features/blog/ui/ArticleTable'
import type {BlogPreviewV2} from '@/widgets/blog'
import { cl } from '@/utils/lib/cl'
import styles from './styles.module.scss'

interface Params {
    className?: string,
    blogs: BlogPreviewV2[]
}

export default function ArticleTableWithLogo({ className, blogs }: Params) {
    return (<div className={cl(styles.section, className)}>
        <Logo className={styles.logo} />
        <ArticleTable className={styles.table} articleClassName={styles.blog} blogs={blogs}/>
    </div>)
}