import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { Children } from '@/utils/interfaces/Children'
import styles from './styles.module.scss'
import { cl } from '@/utils/lib/cl'

interface Params extends Children<ReactNode[]> {
    className?: string,
    step: number
}

export default function SectionSteps({ className, children, step }: Params) {
    const transition = { duration: 0.5, ease: 'linear' }

    return (<div className={cl(styles.container, className)}>
        <motion.div
            className={styles.container__items}
            animate={{ x: `${-100 * step}%` }}
            transition={transition}
        >
            {children.map((child, index) => <motion.div
                key={index}
                className={styles.container__items__item}
                animate={{ filter: `brightness(${index === step ? 1 : 0})` }}
                transition={transition}
            >
                {child}
            </motion.div>)}
        </motion.div>
    </div>)
}