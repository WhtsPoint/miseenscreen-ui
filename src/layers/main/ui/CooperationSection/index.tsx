import { Points, TitleBlock } from '@/features/cooperation'
import styles from './styles.module.scss'

export default function CooperationSection() {
    return (<section className={styles.cooperationSection}>
        <TitleBlock className={styles.cooperationSection__title} />
        <Points className={styles.cooperationSection__points} />
    </section>)
}