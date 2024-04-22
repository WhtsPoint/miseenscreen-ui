'use client'

import { motion, type Transition, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import styles from './styles.module.scss'
import ellipseLight from '@/utils/assets/images/stack/particles/ellips-light.png'

interface Params {
    className?: string,
    transition?: Transition
}

export default function EllipseLight({ className, transition }: Params) {
    const ref = useRef(null)
    const isInView = useInView(ref)

    return (<div ref={ref} className={className}>
        <motion.div
            animate={isInView && 'view'}
            initial={{ opacity: 0 }}
            variants={{ view: { opacity: 1 } }}
            transition={{ duration: 1, ...transition }}
        >
            <Image fill className={styles.upLight} src={ellipseLight.src} alt={''} />
        </motion.div>
    </div>)
}