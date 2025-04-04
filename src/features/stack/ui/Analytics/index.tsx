'use client'

import { useTranslations } from 'next-intl'
import { Props, Title } from '@/widgets/stack'
import { cl } from '@/utils/lib/cl'
import { Link } from '@/utils/lib/navigation'
import config from '@/utils/config'
import styles from './styles.module.scss'
import sectionStyles from '@/utils/assets/styles/stack/section.module.scss'
import contentStyles from '@/utils/assets/styles/stack/content.module.scss'
import Background from './Background'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function Analytics() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const t = useTranslations('services.custom-erp')

    let props: string[] = []

    //TODO: Refactor with types
    Object.values(t.raw('segments')).forEach((segment: any) => {
        return Object.values(segment['props']).forEach(({ title }: any) => props.push(title))
    })

    return (<Link
        ref={ref}
        href={config.routes.services.analytics}
        className={cl(sectionStyles.section, styles.analytics, sectionStyles.reverse)}
    >
        <div className={contentStyles.content}>
            <Title>{t('title')}</Title>
            <Props props={props} />
        </div>
        <Background isInView={isInView} className={styles.background} />
    </Link>)
}