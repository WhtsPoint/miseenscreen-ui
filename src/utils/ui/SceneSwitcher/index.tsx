import styles from './styles.module.scss'
import { ReactNode, useState } from 'react'
import { Children } from '@/utils/interfaces/Children'
import { MotionValue, motion, useMotionValueEvent } from 'framer-motion'
import { cl } from '@/utils/lib/cl'

interface Params extends Children<ReactNode> {
    position: MotionValue<number>,
    className?: string
}

//ATTENTION: Used state instead of MotionValue because of not working of framer-motion animate() function when loading the page
export default function SceneSwitcher({ children, position, className }: Params) {
    const [y, setY] = useState<number>(position.get())

    useMotionValueEvent(position, 'change', setY)

    return (<div className={cl(styles.container, className)}>
        <motion.div animate={{ transform: `translateY(${y * -100}%)`}} className={styles.container__list}>
            {children}
        </motion.div>
    </div>)
}