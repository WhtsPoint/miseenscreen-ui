import { Footer, FooterBackground } from '@/features/footer'
import styles from './styles.module.scss'

export default function FooterSection() {
    return (<div className={styles.footerSection}>
        <FooterBackground className={styles.footerSection__background} />
        <b className={styles.footerSection__title}>MISEENSCREEN</b>
        <Footer />
    </div>)
}