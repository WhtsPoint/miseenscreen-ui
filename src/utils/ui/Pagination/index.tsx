'use client'

import Arrow from '@/utils/ui/Arrow'
import styles from './styles.module.scss'
import { cl } from '@/utils/lib/cl'
import { useState } from 'react'

interface Pagination {
    setPage: (page: number) => unknown,
    page: number,
    pageCount: number|null
}

interface Params {
    pagination: Pagination
}

export default function Pagination({ pagination: { page: current, setPage, pageCount } }: Params) {
    if (!pageCount) return

    const length = 10
    const section = Math.ceil(current / length)
    const list = Array.from(Array(length).keys()).map((index) => {
        return length * (section - 1) + (index + 1)
    }).filter((page) => page <= pageCount)


    return (<nav className={styles.pagination}>
        <Arrow
            onClick={() => setPage(current - 1)}
            className={styles.pagination__arrow}
            direction={'left'}
            noAnimation
        />
        <ul className={styles.pagination__list}>
            {list.map((page) => <li
                key={page}
                className={cl(
                    styles.pagination__list__item,
                    page === current && styles.pagination__list__item_current
                )}
                onClick={() => setPage(page)}
            >
                {page}
            </li>)}
        </ul>
        <Arrow
            onClick={() => setPage(current + 1)}
            className={styles.pagination__arrow}
            direction={'right'}
            noAnimation
        />
    </nav>)
}

export function usePagination(
    pageCount: number|null,
    onChange?: (value: number) => unknown
): Pagination {
    const [value, setValue] = useState<number>(1)

    const setPage = (newValue: number) => {
        const correctValue = Math.max(1, Math.min(pageCount || newValue, newValue))
        setValue(correctValue)
        if (correctValue !== value) onChange?.(correctValue)
    }

    return { page: value, pageCount, setPage }
}