import { Points, TitleBlock } from '@/features/cooperation'
import { forwardRef, RefObject, useEffect } from 'react'
import { useInView } from 'framer-motion'
import VerticalLine from '../../../../features/cooperation/ui/VerticalLine'
import styles from './styles.module.scss'
import { useRouter } from '@/utils/lib/navigation'

const CooperationSection = forwardRef<HTMLDivElement>((_params, ref) => {
    const isInView = useInView(ref as RefObject<HTMLElement>, { margin: '-40%', once: true })
    const a = useInView(ref as RefObject<HTMLElement>)
    const router = useRouter()

    return (<section ref={ref} className={styles.cooperationSection}>
        <TitleBlock isInView={isInView} className={styles.cooperationSection__title} />
        <VerticalLine isInView={isInView} className={styles.cooperationSection__hr} />
        <Points isInView={isInView} className={styles.cooperationSection__points} />
    </section>)
})

CooperationSection.displayName = 'CooperationSection'

export default CooperationSection