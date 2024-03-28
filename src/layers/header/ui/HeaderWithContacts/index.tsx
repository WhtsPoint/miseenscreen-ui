import { Contacts, Header } from '@/features/header'
import styles from './styles.module.scss'

export default function HeaderWithContacts() {
    return (<div className={styles.container}>
        <Contacts />
        <Header />
    </div>)
}