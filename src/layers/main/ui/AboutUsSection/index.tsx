'use client'

import useCertainSection from '@/utils/hooks/useCertainSection'
import { useScroll, useTransform } from 'framer-motion'
import { AboutUs } from '@/features/about-us'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from '@/utils/lib/navigation'
import config from '@/utils/config'
import styles from './styles.module.scss'

export default function AboutUsSection() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['0.5 1', '1 0'] })
    const opacity = useTransform(scrollYProgress, [0.5, 0.8], [1, 0])

    useCertainSection({ ref, section: 'our-story' })

    return (<motion.section style={{ opacity }} ref={ref} className={styles.aboutUs}>
        <AboutUs className={styles.aboutUs__aboutUs} imagesChildren={
            <Link className={styles.ourStory} href={config.routes.header.ourStory}><b>OUR STORY</b></Link>
        } />
    </motion.section>)
}