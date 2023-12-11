import styles from './styles.module.scss'
import { ReactNode } from 'react'
import { Children } from '@/utils/interfaces/Children'
import { cl } from '@/utils/lib/cl'

interface Params extends Children<ReactNode> {
    isVisible?: boolean,
    className?: string
}

export default function Container({ isVisible, children, className}: Params) {
    const classes = cl(!isVisible && styles.hidden, className)

    return (<div className={classes}>
        {children}
    </div>)
}