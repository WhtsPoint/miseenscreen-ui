import styles from './styles.module.scss'
import { ReactNode } from 'react'
import { Children } from '@/utils/interfaces/Children'
import { MotionValue, useAnimate, useMotionValueEvent } from 'framer-motion'
import { cl } from '@/utils/lib/cl'

interface Params extends Children<ReactNode> {
    position: MotionValue<number>,
    className?: string
}

export default function SceneSwitcher({ children, position, className }: Params) {
    const [ref, animate] = useAnimate()

    useMotionValueEvent(position, 'change', (value) => {
        animate(ref.current, { transform: `translateY(${value * -100}%)` })
    })

    return (<div className={cl(styles.container, className)}>
        <div ref={ref} className={styles.container__list}>
            {children}
        </div>
    </div>)
}