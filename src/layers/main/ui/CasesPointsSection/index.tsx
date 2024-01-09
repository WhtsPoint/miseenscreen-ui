import styles from './styles.module.scss'
import { Details } from '@/features/cases-points'

export default function CasesPointsSection() {
    return (<section className={styles.casesPointsSection}>
        <Details />
    </section>)
}