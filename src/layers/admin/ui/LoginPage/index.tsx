import styles from './styles.module.scss'
import { LoginForm } from '@/features/admin'

export default function LoginPage() {
    return (<section className={styles.loginPage}>
        <LoginForm className={styles.loginPage__form} />
    </section>)
}