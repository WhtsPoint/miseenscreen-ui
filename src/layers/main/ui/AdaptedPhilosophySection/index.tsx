import StickyScroll from '@/utils/ui/StickyScroll'
import { useMotionValue, useTransform } from 'framer-motion'
import PhilosophySection from '../PhilosophySection'
import styles from './styles.module.scss'
import usePointMove from '@/layers/main/usePointMove'
import useWidth from '@/utils/hooks/useWidth'
import { useEffect } from 'react'

export default function AdaptedPhilosophySection() {
    const scrollProgress = useMotionValue<number>(0)
    const [move, moveProgress] = usePointMove()
    const width = useWidth()
    const progress = useMotionValue<number>(0)

    const updateProgress = () => {
        progress.set(width && width > 1000 ? scrollProgress.get() : moveProgress.get())
    }

    useEffect(updateProgress, [updateProgress])
    scrollProgress.on('change', updateProgress)
    moveProgress.on('change', updateProgress)

    return (<StickyScroll
        className={styles.stickyScroll}
        onScroll={(v) => scrollProgress.set(v)}
    >
        <PhilosophySection
            scrollProgress={progress}
            onLeft={move(-1)}
            onRight={move(1)}
        />
    </StickyScroll>)
}