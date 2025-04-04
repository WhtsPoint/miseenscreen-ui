'use client'

import Particle from '@/utils/ui/Particle'
import { cl } from '@/utils/lib/cl'
import styles from './styles.module.scss'
import hearthImage from '@/utils/assets/images/stack/posters/hr-software.jpg'
import lightImage from '@/utils/assets/images/stack/particles/plus-light.png'

interface Params {
    className?: string,
    isInView: boolean
}

export default function Background({ className, isInView }: Params) {
    return (<div className={cl(styles.background, className)}>
        <Particle
            isInView={isInView}
            className={styles.hearth}
            animation={{
                initial: { opacity: 0 },
                viewAnimation: { opacity: 1 },
                transition: { duration: 1, delay: 1 }
            }}
            image={{ src: hearthImage.src, sizes: '20vw' }}
        />
        <Particle
            isInView={isInView}
            className={styles.light}
            animation={{
                initial: { opacity: 0 },
                viewAnimation: { opacity: 1 },
                transition: { duration: 1, delay: 1.5 }
            }}
            image={{ src: lightImage.src, sizes: '100vw' }}
        />
    </div>)
}