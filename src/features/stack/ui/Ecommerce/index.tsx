'use client'

import Particle from '@/utils/ui/Particle'
import Poster from '../Poster'
import { Props, Title } from '@/widgets/stack'
import { useTranslations } from 'next-intl'
import { Link } from '@/utils/lib/navigation'
import { cl } from '@/utils/lib/cl'
import config from '@/utils/config'
import styles from './styles.module.scss'
import sectionStyles from '@/utils/assets/styles/stack/section.module.scss'
import contentStyles from '@/utils/assets/styles/stack/content.module.scss'
import posterImage from '@/utils/assets/images/stack/posters/ecommerce.jpg'
import glareImage from '@/utils/assets/images/stack/particles/glare3.png'
import backGlareImage from '@/utils/assets/images/stack/particles/glare2.png'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const anim = {
    initial: { opacity: 0 },
    viewAnimation: { opacity: 1 },
} as const

export default function Ecommerce() {
    const t = useTranslations('services.ecommerce')
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (<Link
        ref={ref}
        href={config.routes.services.ecommerce}
        className={cl(styles.ecommerce, sectionStyles.section)}
    >
        <Poster isInView={isInView} className={styles.poster} src={posterImage.src}>
            <Particle
                isInView={isInView}
                className={styles.glare}
                animation={{ ...anim, transition: { duration: 1, delay: 2 } }}
                image={{ src: glareImage.src, sizes: '25vw' }}
            />
        </Poster>
        <Particle
            className={styles.backGlare}
            animation={{ ...anim, transition: { duration: 1, delay: 2 } }}
            image={{ src: backGlareImage.src, sizes: '50vw' }}
            isInView={isInView}
        />
        <div className={contentStyles.content}>
            <Title>{t('title')}</Title>
            <Props props={Object.values(t.raw('props'))} />
        </div>
    </Link>)
}