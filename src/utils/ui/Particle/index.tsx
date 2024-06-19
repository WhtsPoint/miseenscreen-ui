'use client'

import { useRef } from 'react'
import { motion, useInView, type Variant } from 'framer-motion'
import Image from 'next/image'
import styles from './styles.module.scss'
import { cl } from '@/utils/lib/cl'

type MotionDivParams = Parameters<typeof motion.div>[0]
type ImageParams = Parameters<typeof Image>[0]

interface Params {
    className?: string,
    animation: Pick<MotionDivParams, 'initial' | 'transition'> & { viewAnimation: Variant },
    image: Pick<ImageParams, 'src' | 'sizes'>
}

export default function Particle({ className, animation, image }: Params) {
    const ref = useRef(null)
    const isInView = useInView(ref)

    return (<div className={cl(styles.particle, className)} ref={ref}>
        <motion.div
            className={styles.imageContainer}
            animate={isInView && 'view'}
            initial={animation.initial}
            transition={animation.transition}
            variants={{ view: animation.viewAnimation }}
        >
            <Image className={styles.image} fill {...image} alt={''} />
        </motion.div>
    </div>)
}