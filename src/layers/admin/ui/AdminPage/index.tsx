import styles from './styles.module.scss'
import { CallFormsList } from '@/features/contact-us'

export default function AdminPage() {
    return (<div className={styles.adminPage}>
        <CallFormsList className={styles.adminPage__list} />
    </div>)
}