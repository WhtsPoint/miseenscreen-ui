'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/utils/lib/navigation'
import config from '@/utils/config'
import { Props, Title } from '@/widgets/stack'
import Poster from '../Poster'
import Particle from '@/utils/ui/Particle'
import sectionStyles from '@/utils/assets/styles/stack/section.module.scss'
import contentStyles from '@/utils/assets/styles/stack/content.module.scss'
import posterImage from '@/utils/assets/images/stack/posters/crm.jpg'
import circleImage from '@/utils/assets/images/stack/particles/crm.png'
import xLightImage from '@/utils/assets/images/stack/particles/x-light.png'
import styles from './styles.module.scss'
import { cl } from '@/utils/lib/cl'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function CRM() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const t = useTranslations('services.crm')

    const props = Object.values(t.raw('props')).map(({ title }: any) => title)

    return (<Link ref={ref} className={sectionStyles.section} href={config.routes.services.crm}>
        <Poster src={posterImage.src} isInView={isInView} className={cl(styles.background, sectionStyles.section)}>
            <Particle
                isInView={isInView}
                className={styles.centerParticle}
                animation={{
                    initial: { opacity: 0 },
                    viewAnimation: { opacity: 1 },
                    transition: { duration: 1, delay: 2 }
                }}
                image={{ src: circleImage.src, sizes: '1100px' }}
            />
            <Particle
                isInView={isInView}
                className={styles.centerParticle}
                animation={{
                    initial: { opacity: 0 },
                    viewAnimation: { opacity: 1 },
                    transition: { duration: 1, delay: 2 }
                }}
                image={{ src: xLightImage.src, sizes: '1100px' }}
            />
        </Poster>
        <div className={contentStyles.content}>
            <Title>{t('title')}</Title>
            <Props props={props} />
        </div>
    </Link>)
}