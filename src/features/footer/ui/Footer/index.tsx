'use client'

import styles from './styles.module.scss'
import Navigate from '../Navigate'
import Official from '../Official'
import SocialMedia from '../SocialMedia'
import Support from '../Support'
import EmailSubscription from '../EmailSubscription'
import { useTranslations } from 'next-intl'
import { Link } from '@/utils/lib/navigation'
import config from '@/utils/config'

export default function Footer() {
    const t = useTranslations('footer')

    return (<footer className={styles.footer}>
        <div className={styles.footer__subscription}>
            <p>{t('tip')}</p>
            <EmailSubscription className={styles.footer__subscription__form} />
            <p>{t('warning.text')}
                <Link
                    className={styles.footer__subscription__policyLink}
                    href={config.routes.privacyPolicy}
                >
                    {t('warning.link')}
                </Link>
            </p>
        </div>
        <div className={styles.footer__navigation}>
            <Navigate />
            <Official />
            <SocialMedia />
            <Support />
        </div>
    </footer>)
}