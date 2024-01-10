import styles from './styles.module.scss'
import { Background, Details } from '@/features/cases-points'
import { useRef } from 'react'
import { useInView, useMotionValue, useTransform } from 'framer-motion'
import StickyScroll from '@/utils/ui/StickyScroll'

export default function CasesPointsSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { margin: '-40%' })
    const scrollProgress = useMotionValue(0)
    const frame = useTransform(scrollProgress, (value) => Math.min(Math.floor(value * 3), 2))
    const isBackgroundInView = useTransform(scrollProgress, (value) => value >= 0.2)

    return (<StickyScroll className={styles.stickyScroll} onScroll={(value) => scrollProgress.set(value)}>
        <section ref={ref} className={styles.casesPointsSection}>
            <Background isInViewMotion={isInView} className={styles.casesPointsSection__background} />
            <Details frame={frame} isInView={isInView} className={styles.casesPointsSection__details} />
        </section>
    </StickyScroll>)
}   