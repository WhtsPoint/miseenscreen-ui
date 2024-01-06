import styles from './styles.module.scss'
import { TitleBlock } from '@/features/steps'
import { useInView, useMotionValue, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { FilledPoints } from '@/features/steps'
import StickyScroll from '@/utils/ui/StickyScroll'

export default function StepsSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { margin: '-40%', once: true })
    const scrollProgress = useMotionValue<number>(0)
    const position = useTransform(scrollProgress, (value) => Math.round(value))

    return (<StickyScroll onScroll={(val) => scrollProgress.set(val)} className={styles.stickyScroll}>
        <section ref={ref} className={styles.stickyScroll__stepSection}>
            <TitleBlock className={styles.stickyScroll__stepSection__title} />
            <FilledPoints
                position={position}
                isInView={isInView}
                className={styles.stickyScroll__stepSection__points}
            />
        </section>
    </StickyScroll>)
}