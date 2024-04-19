import type { SearchCoincidence } from '@/utils/types/SearchCoincidence'
import styles from './styles.module.scss'

interface Params {
    text: SearchCoincidence
}

export default function SearchedText({ text: { text, start, end} }: Params) {
    return ((typeof start !== 'undefined' && typeof end !== 'undefined') ? <>
        {text.slice(0, start)}
        <span className={styles.searchedText}>{text.slice(start, end)}</span>
        {text.slice(end)}
    </> : text)
}