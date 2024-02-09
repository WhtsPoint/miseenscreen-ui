import { AnimatePresence, motion } from 'framer-motion'
import { ReactNode } from 'react'
import { Children } from '@/utils/interfaces/Children'
import styles from './styles.module.scss'
import { cl } from '@/utils/lib/cl'

interface Params extends Children<ReactNode[]> {
    className?: string,
    step: number
}

export default function SectionSteps({ className, children, step }: Params) {
    return (<div className={cl(styles.container, className)}>
        <AnimatePresence>
            <motion.div
                key={step}
                className={styles.container__item}
                animate={{ opacity: [0, 1], x: [-300, 0], position: 'static' }}
                exit={{ opacity: [1, 0], x: [0, -300], position: 'absolute' }}
                transition={{ duration: 1 }}
            >
                {children[step]}
            </motion.div>
        </AnimatePresence>
    </div>)
}