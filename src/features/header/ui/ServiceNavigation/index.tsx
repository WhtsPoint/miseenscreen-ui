'use client'

import { useTranslations } from 'next-intl'
import { ReactNode, useState } from 'react'
import { Children } from '@/utils/interfaces/Children'
import { AnalyticsLink, EccomerceLink, ElSolutionLink, HrSoftwareLink, WebServicesLink } from '@/features/stack'
import styles from './styles.module.scss'

interface Params extends Children<ReactNode> {}

export default function ServiceNavigation({ children }: Params) {
    const t = useTranslations('stack')
    const [isHidden, setIsHidden] = useState<boolean>(true)

    return (<div
        className={styles.wrapper}
        onMouseEnter={() => setIsHidden(false)}
        onMouseLeave={() => setIsHidden(true)}
    >
        {children}
        {!isHidden && <div className={styles.serviceNavigation}>
            <h2>Services</h2>
            <nav className={styles.navigation}>
                <ul className={styles.list}>
                    <li><EccomerceLink className={styles.item}>{t('ecommerce')}</EccomerceLink></li>
                    <li><WebServicesLink className={styles.item}>{t('web-services')}</WebServicesLink></li>
                    <li><ElSolutionLink className={styles.item}>{t('elearning-solution')}</ElSolutionLink></li>
                    <li><HrSoftwareLink className={styles.item}>{t('hr-software')}</HrSoftwareLink></li>
                    <li><AnalyticsLink className={styles.item}>{t('analytics')}</AnalyticsLink></li>
                </ul>
            </nav>
        </div>}
    </div>)
}