import styles from './styles.module.scss'
import { Background, Details } from '@/features/cases-points'
import { forwardRef, RefObject, useState } from 'react'
import { useInView, useMotionValue, useMotionValueEvent, useTransform } from 'framer-motion'
import StickyScroll from '@/utils/ui/StickyScroll'

const CasesPointsSection = forwardRef<HTMLDivElement>((_params, ref) => {
    const isInView = useInView(ref as RefObject<HTMLElement>, { margin: '-40%' })
    const scrollProgress = useMotionValue(0)
    const frame = useTransform(scrollProgress, (value) => Math.min(Math.floor(value * 3), 2))
    const [position, setPosition] = useState<number>(0)

    useMotionValueEvent(frame, 'change', setPosition)

    return (<StickyScroll className={styles.stickyScroll} onScroll={(value) => scrollProgress.set(value)}>
        <section ref={ref} className={styles.casesPointsSection}>
            <Background position={position} isInViewMotion={isInView} className={styles.casesPointsSection__background} />
            <Details frame={frame} isInView={isInView} className={styles.casesPointsSection__details} />
        </section>
    </StickyScroll>)
})

CasesPointsSection.displayName = 'CasesPointsSection'

export default CasesPointsSection