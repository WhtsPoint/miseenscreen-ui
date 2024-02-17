import { Footer, FooterBackground } from '@/features/footer'
import styles from './styles.module.scss'

export default function FooterSection() {
    return (<div className={styles.footerSection}>
        <FooterBackground className={styles.footerSection__background} />
        <h2 className={styles.footerSection__title}>MISEENSCREEN</h2>
        <Footer />
    </div>)
}