import styles from './styles.module.scss'
import { TitleBlock } from '@/features/steps'
import { Points } from '@/widgets/steps'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function StepsSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { margin: '-40%', once: true })

    return (<section ref={ref} className={styles.stepSection}>
        <TitleBlock className={styles.stepSection__title} />
        <Points isInView={isInView} className={styles.stepSection__points} />
    </section>)
}