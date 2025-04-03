'use client'

import Image from 'next/image'
import styles from './styles.module.scss'
import { motion, useInView, type Variant } from 'framer-motion'
import lightImage from '@/utils/assets/images/stack/particles/portals-light.png'
import laptopImage from '@/utils/assets/images/stack/posters/web-portals/laptop.png'
import robotImage from '@/utils/assets/images/stack/posters/web-portals/robot.png'
import { cl } from '@/utils/lib/cl'
import { useRef } from 'react'
import Particle from '@/utils/ui/Particle'

interface Params {
    className?: string
}

export default function Background({ className }: Params) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const animation = (params: Variant) => ({
        animate: isInView && 'view',
        initial: { opacity: 0 },
        variants: { view: { ...params } }
    })

    return (<div ref={ref} className={cl(styles.background, className)}>
        <div className={styles.main}>
            <div className={styles.top}>
                <Particle
                    className={styles.laptop}
                    animation={{ initial: { opacity: 0 }, viewAnimation: { opacity: 1 }, transition: { duration: 1, delay: 2 } }}
                    image={{ src: laptopImage.src }}
                />
                <Particle
                    className={styles.light}
                    animation={{ initial: { opacity: 0 }, viewAnimation: { opacity: 1 }, transition: { duration: 1, delay: 1.5 } }}
                    image={{ src: lightImage.src }}
                />
            </div>
            <Particle
                className={styles.robot}
                animation={{ initial: { opacity: 0 }, viewAnimation: { opacity: 1 }, transition: { duration: 1, delay: 1 } }}
                image={{ src: robotImage.src }}
            />
        </div>
    </div>)
}