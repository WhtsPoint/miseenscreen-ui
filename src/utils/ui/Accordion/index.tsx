'use client'

import styles from './styles.module.scss'
import type { ReactNode } from 'react'
import Arrow from '@/utils/ui/Arrow'
import type { Children } from '@/utils/interfaces/Children'

interface Params extends Partial<Children<ReactNode>> {
    summary: ReactNode
}

export default function Accordion({ summary, children }: Params) {

    return (<details className={styles.accordion}>
        <summary className={styles.accordion__summary}>
            <div className={styles.accordion__summary__content}>
                {summary}
            </div>
            <Arrow className={styles.accordion__summary__switcher} direction={'down'} noAnimation />
        </summary>
        <div className={styles.accordion__details}>{children}</div>
    </details>)
}