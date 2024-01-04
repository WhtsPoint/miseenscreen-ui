import { Points, TitleBlock } from '@/features/cooperation'
import styles from './styles.module.scss'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import VerticalLine from '../../../../features/cooperation/ui/VerticalLine'

export default function CooperationSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { margin: '-40%', once: true })

    return (<section ref={ref} className={styles.cooperationSection}>
        <TitleBlock isInView={isInView} className={styles.cooperationSection__title} />
        <VerticalLine isInView={isInView} />
        <Points isInView={isInView} className={styles.cooperationSection__points} />
    </section>)
}