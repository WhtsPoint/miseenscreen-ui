'use client'

import styles from './styles.module.scss'
import lightImage from '@/utils/assets/images/stack/particles/portals-light.png'
import laptopImage from '@/utils/assets/images/stack/posters/web-portals/laptop.png'
import robotImage from '@/utils/assets/images/stack/posters/web-portals/robot.png'
import { cl } from '@/utils/lib/cl'
import Particle from '@/utils/ui/Particle'

interface Params {
    className?: string,
    isInView: boolean
}

export default function Background({ className, isInView }: Params) {
    return (<div className={cl(styles.background, className)}>
        <div className={styles.main}>
            <div className={styles.top}>
                <Particle
                    isInView={isInView}
                    className={styles.laptop}
                    animation={{ initial: { opacity: 0 }, viewAnimation: { opacity: 1 }, transition: { duration: 1, delay: 2 } }}
                    image={{ src: laptopImage.src, sizes: '50vw' }}
                />
                <Particle
                    isInView={isInView}
                    className={styles.light}
                    animation={{ initial: { opacity: 0 }, viewAnimation: { opacity: 1 }, transition: { duration: 1, delay: 1.5 } }}
                    image={{ src: lightImage.src, sizes: '50vw' }}
                />
            </div>
            <Particle
                isInView={isInView}
                className={styles.robot}
                animation={{ initial: { opacity: 0 }, viewAnimation: { opacity: 1 }, transition: { duration: 1, delay: 1 } }}
                image={{ src: robotImage.src, sizes: '50vw' }}
            />
        </div>
    </div>)
}