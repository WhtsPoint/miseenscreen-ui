'use client'

import { Props, Title } from '@/widgets/stack'
import { useTranslations } from 'next-intl'
import { Link } from '@/utils/lib/navigation'
import { cl } from '@/utils/lib/cl'
import config from '@/utils/config'
import Background from './Background'
import styles from './styles.module.scss'
import sectionStyles from '@/utils/assets/styles/stack/section.module.scss'
import contentStyles from '@/utils/assets/styles/stack/content.module.scss'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function ElSolution() {
    const t = useTranslations('services.elearning')
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (<Link
        ref={ref}
        href={config.routes.services.elearning}
        className={cl(sectionStyles.section, styles.elSolution, sectionStyles.reverse)}
    >
        <Background isInView={isInView} className={styles.background} />
        <div className={contentStyles.content}>
            <Title>{t('title')}</Title>
            <Props props={Object.values(t.raw('props'))} />
        </div>
    </Link>)
}