import { Analytics, Ecommerce, ElSolution, HrSoftware, WebPortals, CRM } from '@/features/stack'
import styles from './styles.module.scss'

export default function StackSectionV2() {
    return (<div className={styles.section}>
        <Ecommerce />
        <WebPortals />
        <ElSolution />
        <HrSoftware />
        <CRM />
        <Analytics />
    </div>)
}