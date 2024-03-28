import { Footer, FooterBackground } from '@/features/footer'
import styles from './styles.module.scss'
import { cl } from '@/utils/lib/cl'

interface Params {
    className?: string
}

export default function FooterSection({ className }: Params) {
    return (<div className={cl(styles.footerSection, className)}>
        <FooterBackground className={styles.footerSection__background} />
        <h2 className={styles.footerSection__title}>MISEENSCREEN</h2>
        <Footer />
    </div>)
}