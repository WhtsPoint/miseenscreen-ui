import styles from './styles.module.scss'

interface Params {
    header: string,
    list: string[],
    paragraph?: string
}

export default function Main({ header, paragraph, list }: Params) {
    return (<div className={styles.stack}>
        <h2 className={styles.header}>{header}</h2>
        {paragraph && <p>{paragraph}</p>}
        <ul className={styles.list}>
            {list.map((text, index) => <li key={index}>{text}</li>)}
        </ul>
    </div>)
}