'use client'

import { motion, useInView } from 'framer-motion'
import type { Children } from '@/utils/interfaces/Children'
import { type ReactNode, useRef } from 'react'

interface Params extends Children<ReactNode> {}

export default function Description({ children }: Params) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (<motion.p
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView && 'view'}
        variants={{ view: { opacity: 1 } }}
    >
        {children}
    </motion.p>)
}