import { AnimatePresence, motion } from 'framer-motion'
import { ReactNode } from 'react'
import { Children } from '@/utils/interfaces/Children'
import styles from './styles.module.scss'
import { cl } from '@/utils/lib/cl'

interface Params extends Children<ReactNode[]> {
    className?: string,
    step: number
}

const getAnimationByStep = (step: number) => (index: number) => {
    const isCurrent = index === step
    const state = { opacity: isCurrent ? 1 : 0 }
    return {
        initial: state,
        animate: state,
        transition: { duration: 0.5, delay: isCurrent ? 0.5 : 0 }
    }
}

export default function SectionSteps({ className, children, step }: Params) {
    const getAnimation = getAnimationByStep(step)

    return (<div className={cl(styles.container, className)}>
        <AnimatePresence>
            <motion.div
                key={step}
                className={styles.container__item}
                animate={{ opacity: [0, 1], x: [-300, 0] }}
                exit={{ opacity: [1, 0], x: [0, -300] }}
                transition={{ duration: 1 }}
            >
                {children[step]}
            </motion.div>
        </AnimatePresence>
    </div>)
}

// export default function SectionSteps({ className, children, step }: Params) {
//     const getAnimation = getAnimationByStep(step)
//
//     return (<div className={cl(styles.container, className)}>
//         <motion.div
//             className={styles.container__items}
//             animate={{ x: `${-100 * step}%` }}
//             transition={{ duration: 1, ease: 'linear' }}
//         >
//             {children.map((child, index) => <motion.div
//                 key={index}
//                 className={styles.container__items__item}
//                 {...getAnimation(index)}
//             >
//                 {child}
//             </motion.div>)}
//         </motion.div>
//     </div>)
// }