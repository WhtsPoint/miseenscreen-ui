import styles from './styles.module.scss'
import { LoginForm } from '@/features/admin'
import { HeaderTheme } from '@/features/header'

export default function LoginPage() {
    return (<>
        <HeaderTheme theme={'solid'} />
        <section className={styles.loginPage}>
            <LoginForm className={styles.loginPage__form} />
        </section>
    </>)
}