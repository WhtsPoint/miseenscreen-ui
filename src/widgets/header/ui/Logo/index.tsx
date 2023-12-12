import openSans from '@/utils/assets/fonts/OpenSans'
import styles from './style.module.scss'

export default function Logo() {
    return (<h1 style={openSans.style} className={styles.logo}>MISEENSCREEN</h1>)
}