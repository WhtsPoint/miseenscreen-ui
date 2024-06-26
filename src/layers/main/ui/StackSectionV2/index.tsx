import { Analytics, Ecommerce, ElSolution, HrSoftware, WebPortals } from '@/features/stack'
import styles from './styles.module.scss'

export default function StackSectionV2() {
    return (<div className={styles.section}>
        <Ecommerce />
        <ElSolution />
        <HrSoftware />
        <Analytics />
        <WebPortals />
    </div>)
}