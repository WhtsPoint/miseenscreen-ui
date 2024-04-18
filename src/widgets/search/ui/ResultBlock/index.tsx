import styles from './styles.module.scss'

interface Params {
    title: string,
    description: string,
    onClick?: () => unknown
}

export default function ResultBlock({ title, description, onClick }: Params) {
    return (<div
        tabIndex={0}
        className={styles.resultBlock}
        onClick={onClick}
    >
        <b className={styles.title}>{title}</b>
        <p className={styles.description}>{description}</p>
    </div>)
}