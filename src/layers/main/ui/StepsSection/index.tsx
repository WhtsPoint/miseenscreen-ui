import styles from './styles.module.scss'
import { TitleBlock } from '@/features/steps'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FilledPoints } from '@/features/steps'

export default function StepsSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { margin: '-40%', once: true })

    return (<section ref={ref} className={styles.stepSection}>
        <TitleBlock className={styles.stepSection__title} />
        <FilledPoints isInView={isInView} className={styles.stepSection__points} />
    </section>)
}