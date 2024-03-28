import styles from './styles.module.scss'
import { ReactNode } from 'react'
import { Children } from '@/utils/interfaces/Children'
import { cl } from '@/utils/lib/cl'

interface Params extends Children<ReactNode> {
    isHidden?: boolean,
    className?: string,
    isShowed?: boolean,
    tag?: string
}

export default function Container(params: Params) {
    const { isHidden, children, className, isShowed = true, tag } = params
    const classes = cl(
        isHidden && styles.hidden,
        className
    )

    return (isShowed && <div data-tag={tag} className={classes}>
        {children}
    </div>)
}