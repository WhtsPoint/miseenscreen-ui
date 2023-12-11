import styles from './styles.module.scss'
import { ReactNode } from 'react'
import { Children } from '@/utils/interfaces/Children'
import { cl } from '@/utils/lib/cl'

interface Params extends Children<ReactNode> {
    isHidden?: boolean,
    className?: string,
    isShowed?: boolean
}

export default function Container(params: Params) {
    const { isHidden, children, className, isShowed = true } = params
    const classes = cl(
        isHidden && styles.hidden,
        className
    )

    return (isShowed && <div className={classes}>
        {children}
    </div>)
}