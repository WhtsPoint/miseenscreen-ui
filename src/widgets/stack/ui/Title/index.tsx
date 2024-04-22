'use client'

import { motion, useInView } from 'framer-motion'
import type { Children } from '@/utils/interfaces/Children'
import { type ReactNode, useRef } from 'react'
import styles from './styles.module.scss'

interface Params extends Partial<Children<ReactNode>> {}

export default function Title({ children }: Params) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (<motion.h2
        className={styles.title}
        ref={ref}
        animate={isInView && 'view'}
        initial={{ x: -100, opacity: 0 }}
        variants={{ view: { x: 0, opacity: 1 }}}
        transition={{ duration: 0.5 }}
    >
        {children}
    </motion.h2>)
}