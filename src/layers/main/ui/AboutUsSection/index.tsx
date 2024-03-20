'use client'

import styles from './styles.module.scss'
import { AboutUs } from '@/features/about-us'
import { useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import useCertainSection from '@/utils/hooks/useCertainSection'

export default function AboutUsSection() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['0.5 1', '1 0'] })
    const opacity = useTransform(scrollYProgress, [0.5, 0.8], [1, 0])

    useCertainSection({ ref, section: 'our-story' })

    return (<motion.section style={{ opacity }} ref={ref} className={styles.aboutUs}>
        <AboutUs className={styles.aboutUs__aboutUs} />
    </motion.section>)
}