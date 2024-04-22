'use client'

import type { Status } from '@/widgets/contact-us'
import { useState } from 'react'
import Arrow from '@/utils/ui/Arrow'
import { statuses } from '@/widgets/contact-us/utils/status'
import cycleMove from '@/utils/lib/cycleMove'
import styles from './styles.module.scss'

interface Params {
    initStatus?: Status,
    onChange?: (status: Status) => unknown
}

const statusText = {
    'inWork': 'In work',
    'done': 'Done',
    'none': 'None'
} as const satisfies Record<Status|'none', string>

export default function StatusSwitcher({ initStatus, onChange }: Params) {
    const [status, setStatus] = useState<Status|undefined>(initStatus)

    const move = (step: number) => () => {
        const newStatus = status ? cycleMove(statuses, status, step) : 'inWork'
        setStatus(newStatus)
        onChange?.(newStatus)
    }

    return (<div className={styles.statusSwitcher}>
        <Arrow className={styles.arrow} direction={'left'} onClick={move(-1)} noAnimation noHover />
        <span className={styles.status}>{statusText[status || 'none']}</span>
        <Arrow className={styles.arrow} onClick={move(1)} noAnimation noHover />
    </div>)
}