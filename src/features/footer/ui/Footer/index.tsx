import styles from './styles.module.scss'
import { Link } from '@/utils/lib/navigation'
import { cl } from '@/utils/lib/cl'

export default function Footer() {
    return (<footer className={styles.footer}>
        <div className={styles.footer__other}>
            <div className={cl(styles.footer__other__block, styles.footer__other__nav)}>
                <b>Navigate</b>
                <nav>
                    <Link href={'#services'}>Services</Link>
                    <Link href={'#our-story'}>Our Story</Link>
                    <Link href={'#cases'}>Cases</Link>
                    <Link href={'#support'}>Support</Link>
                </nav>
            </div>
            <div className={cl(styles.footer__other__block, styles.footer__other__nav)}>
                <b>Social Media</b>
                <nav>
                    <Link href={'#services'}>Instagram</Link>
                    <Link href={'#our-story'}>Facebook</Link>
                    <Link href={'#cases'}>Youtube</Link>
                    <Link href={'#support'}>Twitter</Link>
                </nav>
            </div>
        </div>
    </footer>)
}