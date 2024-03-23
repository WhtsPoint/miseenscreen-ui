'use client'

import Arrow from '@/utils/ui/Arrow'
import styles from './styles.module.scss'
import { cl } from '@/utils/lib/cl'
import { useEffect, useRef, useState } from 'react'

interface Pagination {
    current: number,
    pageCount: number,
    setCurrent: (current: number) => unknown,
    setPageCount: (pageCount: number) => unknown,
}

interface Params {
    pagination: Pagination
}

export default function Pagination({ pagination: { current, pageCount, setCurrent } }: Params) {
    const length = 10
    const section = Math.ceil(current / length)
    const list = Array.from(Array(length).keys()).map((index) => {
        return length * (section - 1) + (index + 1)
    }).filter((page) => page <= pageCount)


    return (<nav className={styles.pagination}>
        <Arrow
            onClick={() => setCurrent(current - 1)}
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
                onClick={() => setCurrent(page)}
            >
                {page}
            </li>)}
        </ul>
        <Arrow
            onClick={() => setCurrent(current + 1)}
            className={styles.pagination__arrow}
            direction={'right'}
            noAnimation
        />
    </nav>)
}

export function usePagination(
    onChange?: (value: number) => unknown
): Pagination {
    const [current, setCurrent] = useState<number>(1)
    const [pageCount, setPageCount] = useState<number>(1)

    const filterValue = useRef((nonCorrectValue: number, pageCount: number) => {
        return Math.max(1, Math.min(pageCount, nonCorrectValue))
    })

    const onPageCountChange = ((pageCount: number) => {
        setPageCount(pageCount)
        changeCurrent(current, pageCount)
    })

    const onCurrentChange = (newCurrent: number) => {
        changeCurrent(newCurrent, pageCount)
    }

    const changeCurrent = (newValue: number, pageCount: number) => {
        const correctValue = filterValue.current(newValue, pageCount)
        setCurrent(correctValue)
        if (correctValue !== current) onChange?.(correctValue)
    }

    return { current, pageCount, setCurrent: onCurrentChange, setPageCount: onPageCountChange }
}