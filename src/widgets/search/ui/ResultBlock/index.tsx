import SearchedText from '@/utils/ui/SearchedText'
import type { SearchCoincidence } from '@/utils/types/SearchCoincidence'
import styles from './styles.module.scss'

interface Params {
    title: SearchCoincidence,
    description: SearchCoincidence,
    onClick?: () => unknown
}

export default function ResultBlock({ title, description, onClick }: Params) {
    return (<div
        tabIndex={0}
        className={styles.resultBlock}
        onClick={onClick}
    >
        <b className={styles.title}><SearchedText text={title} /></b>
        <p className={styles.description}><SearchedText text={description} /></p>
    </div>)
}