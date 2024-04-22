import styles from './styles.module.scss'
import type { SearchCoincidence } from '../../types/SearchCoincidence'

interface Params {
    text: SearchCoincidence
}

export default function SearchedText({ text: { text, coincidence } }: Params) {
    return ((typeof coincidence !== 'undefined') ? <>
        {text.slice(0, coincidence.start)}
        <span className={styles.searchedText}>{text.slice(coincidence.start, coincidence.end)}</span>
        {text.slice(coincidence.end)}
    </> : text)
}