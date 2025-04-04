'use client'

import Background from './Background'
import { useTranslations } from 'next-intl'
import { Props, Title } from '@/widgets/stack'
import { Link } from '@/utils/lib/navigation'
import { cl } from '@/utils/lib/cl'
import config from '@/utils/config'
import sectionStyles from '@/utils/assets/styles/stack/section.module.scss'
import contentStyles from '@/utils/assets/styles/stack/content.module.scss'
import styles from './styles.module.scss'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function WebPortals() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const t = useTranslations('services.web-portals')

    //TODO: Refactor with types
    const props = Object.values(t.raw('props')).map(({ title }: any) => title)

    return (<Link
        ref={ref}
        href={config.routes.services.webPortals}
        className={cl(sectionStyles.section, styles.webPortals)}
    >
        <div className={contentStyles.content}>
            <Title>{t('title')}</Title>
            <Props props={props} />
        </div>
        <Background isInView={isInView} className={styles.background} />
    </Link>)
}