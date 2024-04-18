import { CallFormsList } from '@/features/contact-us'
import styles from './styles.module.scss'
import { EmailSubscriptionsList } from '@/features/email-subscription'
import { HeaderTheme } from '@/features/header'

export default function AdminPage() {
    return (<>
        <HeaderTheme theme={'solid'} />
        <div className={styles.adminPage}>
            <h1>Admin Panel</h1>
            <section className={styles.adminPage__forms}>
                <h2>Contact Us Forms</h2>
                <CallFormsList countOnPage={8} className={styles.adminPage__forms__list} />
            </section>
            <section className={styles.adminPage__subscriptions}>
                <h2>Email Subscriptions</h2>
                <EmailSubscriptionsList countOnPage={8} className={styles.adminPage__subscriptions__list} />
            </section>
        </div>
    </>)
}