import styles from './styles.module.scss'
import config from '@/utils/config'
import { useTranslations } from 'next-intl'
import { Link } from '@/utils/lib/navigation'

const routes = config.routes

export default function Header() {
    const t = useTranslations('header')

    return (<header className={styles.header}>
        <nav className={styles.header__nav}>
            <ul className={styles.header__nav__ul}>
                <li>{t('service')}</li>
                <li><Link href={'/'} locale={'ru'}>{t('cases')}</Link></li>
                <li><Link href={routes.cooperation}>{t('cooperation')}</Link></li>
                <li><Link href={routes.ourStory}>{t('our-story')}</Link></li>
                <li><Link href={routes.blog}>{t('blog')}</Link></li>
                <li><Link href={routes.contactUs}>{t('contact-us')}</Link></li>
            </ul>
        </nav>
    </header>)
}