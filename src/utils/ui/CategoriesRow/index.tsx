import styles from './styles.module.scss'
import type { ReactNode } from 'react'

interface Params<K extends keyof any, V extends ReactNode> {
    categories: Record<K, V>,
    onSelect?: (category: K) => unknown
}

export default function CategoriesRow
    <K extends keyof any, V extends ReactNode>
({ categories, onSelect }: Params<K, V>) {
    return (<ul className={styles.categoriesRow}>
        {Object.entries<V>(categories).map(([key, value]) => (<li
            key={key}
            onClick={() => onSelect?.(key as K)}
        >
            <button className={styles.category}>{value}</button>
        </li>))}
    </ul>)
}