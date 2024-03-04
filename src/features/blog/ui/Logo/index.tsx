import openSans from '@/utils/assets/fonts/OpenSans'
import styles from './styles.module.scss'
import { cl } from '@/utils/lib/cl'

interface Params {
    className?: string
}

export default function Logo({ className }: Params) {
    return (<h2 style={openSans.style} className={cl(styles.logo, className)}>
        <span className={styles.logo__name}>MISEENSCREEN</span>
        <span className={styles.logo__right}>Blog</span>
    </h2>)
}