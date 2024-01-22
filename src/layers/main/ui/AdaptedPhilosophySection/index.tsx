import StickyScroll from '@/utils/ui/StickyScroll'
import { useMotionValue, useTransform } from 'framer-motion'
import PhilosophySection from '../PhilosophySection'
import styles from './styles.module.scss'
import usePointMove from '@/layers/main/usePointMove'
import useWidth from '@/utils/hooks/useWidth'

export default function AdaptedPhilosophySection() {
    const scrollProgress = useMotionValue(0)
    const [move, moveProgress] = usePointMove()
    const width = useWidth()
    const progress = useTransform(
        () => width && width > 1000 ? scrollProgress.get() : moveProgress.get()
    )

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