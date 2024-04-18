import { ReactNode, useState } from 'react'
import CategoriesRow from '../CategoriesRow'
import type { Category } from '@/widgets/search/types/Category'
import { cl } from '@/utils/lib/cl'
import categories from '../../utils/categories'
import styles from './styles.module.scss'

interface Params extends Record<`${Category}List`, ReactNode> {
    className?: string
}

export default function SearchResultList({ className, ...params }: Params) {
    const [category, setCategory] = useState<Category>(categories[0])

    return (<div className={cl(styles.searchResultList, className)}>
        <CategoriesRow onSelect={setCategory} />
        <div className={styles.list}>
            {params[`${category}List`]}
        </div>
    </div>)
}