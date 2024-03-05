'use client'

import { Points, TitleBlock } from '@/features/cooperation'
import { RefObject, useRef } from 'react'
import { useInView } from 'framer-motion'
import VerticalLine from '../../../../features/cooperation/ui/VerticalLine'
import styles from './styles.module.scss'
import useCertainSection from '@/utils/hooks/useCertainSection'

function CooperationSection() {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref as RefObject<HTMLElement>, { margin: '-40%', once: true })

    useCertainSection({ ref, section: 'cooperation' })

    return (<section ref={ref} className={styles.cooperationSection}>
        <TitleBlock isInView={isInView} className={styles.cooperationSection__title} />
        <VerticalLine isInView={isInView} className={styles.cooperationSection__hr} />
        <Points isInView={isInView} className={styles.cooperationSection__points} />
    </section>)
}

CooperationSection.displayName = 'CooperationSection'

export default CooperationSection