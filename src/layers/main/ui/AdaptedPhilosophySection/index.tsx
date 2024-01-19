import StickyScroll from '@/utils/ui/StickyScroll'
import { useMotionValue } from 'framer-motion'
import useWidth from '@/utils/hooks/useWidth'
import PhilosophySection from '../PhilosophySection'
import styles from './styles.module.scss'
import usePointMove from '@/layers/main/usePointMove'

export default function AdaptedPhilosophySection() {
    const scrollProgress = useMotionValue(0)
    const move = usePointMove(scrollProgress)
    const width = useWidth()


    return (width > 1000 ?
    <StickyScroll
        className={styles.stickyScroll}
        onScroll={(v) => scrollProgress.set(v)}
    >
        <PhilosophySection scrollProgress={scrollProgress} />
    </StickyScroll>
    :
    <PhilosophySection
        onLeft={move(-1)}
        onRight={move(1)}
        scrollProgress={scrollProgress}
    />)
}