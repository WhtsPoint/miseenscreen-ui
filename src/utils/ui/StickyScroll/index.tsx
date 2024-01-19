import { Children } from '@/utils/interfaces/Children'
import { ReactNode, useRef } from 'react'
import { cl } from '@/utils/lib/cl'
import styles from './styles.module.scss'
import { MotionValue, useMotionValueEvent, useScroll } from 'framer-motion'

interface Params extends Children<ReactNode> {
    className?: string,
    onScroll: (progress: number) => unknown
}

export default function StickyScroll({ className, children, onScroll }: Params) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref })

    useMotionValueEvent(scrollYProgress, 'change', (value) => {
        onScroll(value)
    })

    return (<div ref={ref} className={cl(styles.stickyScroll, className)}>
        <div className={styles.stickyScroll__content}>
            {children}
        </div>
    </div>)
}