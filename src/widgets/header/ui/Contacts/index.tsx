import styles from './style.module.scss'

export default function Contacts() {
    return (<address className={styles.address}>
        <a href={'mailto:test@gmail.com'}>Email: test@gmail.com</a>
        <a href={'tel:+1.png 323 683 8106'}>Phone: +1 323 683 8106</a>
    </address>)
}