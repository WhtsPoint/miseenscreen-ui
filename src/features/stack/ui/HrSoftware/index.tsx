'use client'

import { useTranslations } from 'next-intl'
import { Props, Title } from '@/widgets/stack'
import { cl } from '@/utils/lib/cl'
import { Link } from '@/utils/lib/navigation'
import Background from './Background'
import config from '@/utils/config'
import styles from './styles.module.scss'
import sectionStyles from '@/utils/assets/styles/stack/section.module.scss'
import contentStyles from '@/utils/assets/styles/stack/content.module.scss'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function HrSoftware() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const t = useTranslations('services.hr-software')

    return (<Link
        ref={ref}
        href={config.routes.services.hrSoftware}
        className={cl(sectionStyles.section, styles.hrSoftware)}
    >
        <div className={contentStyles.content}>
            <Title>{t('title')}</Title>
            <Props props={Object.values(t.raw('props'))} />
        </div>
        <Background isInView={isInView} className={styles.background} />
    </Link>)
}