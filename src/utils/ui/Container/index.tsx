import styles from './styles.module.scss'
import { forwardRef, type ReactNode } from 'react'
import type { Children } from '@/utils/interfaces/Children'
import { cl } from '@/utils/lib/cl'

interface Params extends Children<ReactNode> {
    isHidden?: boolean,
    className?: string,
    isShowed?: boolean,
    tag?: string
}

const Container = forwardRef<HTMLDivElement, Params>((params: Params, ref) => {
    const { isHidden, children, className, isShowed = true, tag } = params
    const classes = cl(
        isHidden && styles.hidden,
        className
    )

    return (isShowed && <div data-tag={tag} className={classes}>
        {children}
    </div>)
})

Container.displayName = 'Container'

export default Container