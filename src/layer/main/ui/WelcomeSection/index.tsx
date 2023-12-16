'use client'

import styles from './style.module.scss'
import { useRef } from 'react'
import { useScroll } from 'framer-motion'
import { WelcomeText } from '@/widgets/main'
import { LightScene } from '@/widgets/main'

export default function WelcomeSection() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 0', '1 0']
    })

    return (<section ref={ref} className={styles.section}>
        <LightScene scrollY={scrollYProgress} />
        <WelcomeText scrollY={scrollYProgress} />
    </section>)
}