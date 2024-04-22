'use client'

import type { Children } from '@/utils/interfaces/Children'
import { type ReactNode, useRef } from 'react'
import { useInView } from 'framer-motion'
import { motion } from 'framer-motion'
import { useFadeAnimation } from '@/widgets/services'
import useCertainSection from '@/utils/hooks/useCertainSection'
import sectionStyles from '@/utils/assets/styles/services.module.scss'

interface Params extends Children<ReactNode> {
    name: string
}

export default function Service({ children, name }: Params) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const [opacity] = useFadeAnimation(ref)

    useCertainSection({ ref, section: name })

    return (<motion.section
        ref={ref}
        animate={isInView && 'inView'}
        variants={{ inView: {} }}
        transition={{ staggerChildren: 0.3 }}
        style={{ opacity }}
        className={sectionStyles.service}
    >
        {children}
    </motion.section>)
}