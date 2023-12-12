'use client'

import { Children } from '@/utils/interfaces/Children'
import { cloneElement, ReactElement } from 'react'
import styles from './style.module.scss'
import useScene from '@/widgets/header/hooks/useScene'

interface Params extends Children<ReactElement[]> {
    previousPage?: string,
    nextPage?: string
}

export default function Scene({ children, previousPage, nextPage }: Params) {
    const { ref } = useScene({
        previousPage,
        nextPage,
        childrenCount: children.length
    })

    return (<div className={styles.scenes}>
        <div ref={ref} className={styles.scenes__list}>{children}</div>
    </div>)
}