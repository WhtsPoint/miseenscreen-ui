import { ArticleCarousel } from '@/features/blog'
import styles from './styles.module.scss'
import Logo from '@/features/blog/ui/Logo'

export default function BlogSection() {
    return (<section className={styles.section}>
        <Logo className={styles.section__logo} />
        <ArticleCarousel className={styles.section__carousel} />
    </section>)
}