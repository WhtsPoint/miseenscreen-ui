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
import glareImage from '@/utils/assets/images/stack/particles/glare.png'
import sideLightImage from '@/utils/assets/images/stack/particles/side-light.png'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const anim = {
    initial: { opacity: 0, x: 30 },
    viewAnimation: { opacity: 1, x: 0 },
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
        <Poster className={styles.poster} src={posterImage.src}>
            <Particle
                isInView={isInView}
                className={styles.glare}
                animation={{ ...anim, transition: { duration: 1, delay: 2 } }}
                image={{ src: glareImage.src, sizes: '200px' }}
            />
        </Poster>
        <Particle
            isInView={isInView}
            className={styles.sideLight}
            animation={{ ...anim, transition: { duration: 1, delay: 1 } }}
            image={{ src: sideLightImage.src, sizes: '300px' }}
        />
        <div className={contentStyles.content}>
            <Title>{t('title')}</Title>
            <Props props={Object.values(t.raw('props'))} />
        </div>
    </Link>)
}