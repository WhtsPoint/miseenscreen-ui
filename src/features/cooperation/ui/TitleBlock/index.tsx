import styles from './styles.module.scss'
import { cl } from '@/utils/lib/cl'

interface Params {
    className ?: string
}

export default function TitleBlock({ className }: Params) {
    return (<div className={cl(styles.titleBlock, className)}>
        <h2 className={styles.titleBlock__title}>
            <b className={styles.titleBlock__title__big}>Cooperation</b>
            <span className={styles.titleBlock__title__small}>With</span>
            <b className={styles.titleBlock__title__middle}>Missenscreen</b>
        </h2>
    </div>)
}