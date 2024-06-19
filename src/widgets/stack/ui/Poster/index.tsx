'use client'

import Image from 'next/image'
import { motion, type Transition, useInView } from 'framer-motion'
import { cl } from '@/utils/lib/cl'
import styles from './styles.module.scss'
import { type CSSProperties, useRef } from 'react'

type ImageParams = Parameters<typeof Image>[0]

interface Params extends Pick<ImageParams, 'src' | 'sizes'>, Partial<Pick<ImageParams, 'alt'>> {
    className?: string,
    style?: CSSProperties
    transition?: Transition
}

export default function Poster({ className, alt = '', transition, style, ...params }: Params) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (<div ref={ref} style={style} className={cl(styles.poster, className)}>
        <motion.div
            animate={isInView && 'view'}
            style={{ scale: 1.2 }}
            initial={{ y: 50, opacity: 0 }}
            variants={{ view: { y: 0, opacity: 1 } }}
            transition={{ duration: 1.5, ...transition }}
            className={styles.imageContainer}
        >
            <Image className={styles.image} fill alt={alt} { ...params } />
        </motion.div>
    </div>)
}