'use client'

import BackgroundVideo from '@/utils/ui/BackgroundVideo'
import type {Children} from '@/utils/interfaces/Children'
import { type ReactNode, useRef } from 'react'
import { useScroll, useTransform } from 'framer-motion'
import { motion } from 'framer-motion'
import videos from '@/utils/config/videos'

interface Params extends Children<ReactNode> {
    servicesClassName?: string,
    videoClassName?: string
}

export default function BackgroundWrapper({ children, servicesClassName, videoClassName }: Params) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['0 0', '1 0'] })
    const opacity = useTransform(scrollYProgress, [0.9, 0.95], [1, 0])

    return <motion.div style={{ opacity }}>
        <BackgroundVideo src={videos.services} className={videoClassName} />
        <div ref={ref} className={servicesClassName}>
            {children}
        </div>
    </motion.div>
}