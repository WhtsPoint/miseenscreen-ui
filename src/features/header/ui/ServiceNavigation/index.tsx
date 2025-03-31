'use client'

import { useTranslations } from 'next-intl'
import { type ReactNode, useState } from 'react'
import type {Children} from '@/utils/interfaces/Children'
import {
    AnalyticsLink,
    CRMSolutionLink,
    EccomerceLink,
    ElSolutionLink,
    HrSoftwareLink,
    WebServicesLink
} from '@/features/stack'
import styles from './styles.module.scss'
import Container from '@/utils/ui/Container'

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
        {<Container className={styles.container} isHidden={isHidden}>
            <div className={styles.serviceNavigation}>
                <h2>Services</h2>
                <nav className={styles.navigation}>
                    <ul className={styles.list}>
                        <li><EccomerceLink className={styles.item}>{t('ecommerce')}</EccomerceLink></li>
                        <li><WebServicesLink className={styles.item}>{t('web-services')}</WebServicesLink></li>
                        <li><ElSolutionLink className={styles.item}>{t('elearning-solution')}</ElSolutionLink></li>
                        <li><HrSoftwareLink className={styles.item}>{t('hr-software')}</HrSoftwareLink></li>
                        <li><AnalyticsLink className={styles.item}>{t('analytics')}</AnalyticsLink></li>
                        <li><CRMSolutionLink className={styles.item}>{t('crm')}</CRMSolutionLink></li>
                    </ul>
                </nav>
            </div>
        </Container>}
    </div>)
}