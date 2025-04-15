import type { Children } from '@/utils/interfaces/Children'
import { forwardRef, type ReactNode } from 'react'
import { cl } from '@/utils/lib/cl'
import { motion } from 'framer-motion'
import styles from './styles.module.scss'

interface Params extends Children<ReactNode> {
    className?: string,
    mainClassName?: string
}

const Marquee = forwardRef<HTMLDivElement, Params>(({ children, className, mainClassName }, ref) => {
    return (<div className={cl(styles.marquee, mainClassName)}>
        <div ref={ref} className={cl(styles.marquee__list, className)}>
            {children}
            {children}
        </div>
    </div>)
})

Marquee.displayName = 'Marquee'

export const MotionMarquee = motion(Marquee)