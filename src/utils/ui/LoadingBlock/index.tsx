import styles from './styles.module.scss'
import { cl } from '@/utils/lib/cl'

interface Params {
    className?: string
}

export default function BasicLoading({ className }: Params) {
    return (<div className={cl(styles.loadingBlock, className)}>
        <div className={styles.loadingBlock__indicator} />
    </div>)
}