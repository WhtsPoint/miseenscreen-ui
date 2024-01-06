import styles from './styles.module.scss'

export default function BasicLoading() {
    return (<div className={styles.loadingBlock}>
        <div className={styles.loadingBlock__indicator} />
    </div>)
}