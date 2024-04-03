'use client'

import { Children } from '@/utils/interfaces/Children'
import { ReactNode, useEffect, useState } from 'react'
import ContactUsModal from '../ContactUsModal'
import { createPortal } from 'react-dom'
import styles from './styles.module.scss'

interface Params extends Children<ReactNode> {}

export default function ContactUsModalWrapper({ children }: Params) {
    const [isClient, setIsClient] = useState<boolean>(false)

    useEffect(() => setIsClient(true), [])

    return (<>
        {isClient && createPortal(<ContactUsModal className={styles.modal} />, document.body)}
        {children}
    </>)
}