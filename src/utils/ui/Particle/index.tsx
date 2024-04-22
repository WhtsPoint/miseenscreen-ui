'use client'

import { useRef } from 'react'
import { motion, useInView, type Variant } from 'framer-motion'
import Image from 'next/image'
import styles from './styles.module.scss'

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

    return (<div className={className} ref={ref}>
        <motion.div
            className={styles.imageContainer}
            animate={isInView && 'view'}
            initial={animation.initial}
            transition={animation.transition}
            variants={{ view: animation.viewAnimation }}
        >
            <Image className={styles.image} fill priority={true} {...image} alt={''} />
        </motion.div>
    </div>)
}