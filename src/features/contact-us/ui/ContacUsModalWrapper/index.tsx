'use client'

import type { Children } from '@/utils/interfaces/Children'
import { type ReactNode, useEffect, useState } from 'react'
import { MemoContactUsModal } from '../ContactUsModal'
import { createPortal } from 'react-dom'
import styles from './styles.module.scss'

interface Params extends Children<ReactNode> {}

export default function ContactUsModalWrapper({ children }: Params) {
    const [isClient, setIsClient] = useState<boolean>(false)

    useEffect(() => setIsClient(true), [])

    return (<>
        {isClient && createPortal(<MemoContactUsModal className={styles.modal} />, document.body)}
        {children}
    </>)
}