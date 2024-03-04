import Arrow from '@/utils/ui/Arrow'
import { motion } from 'framer-motion'
import { Children } from '@/utils/interfaces/Children'
import { ReactNode } from 'react'
import styles from './styles.module.scss'
import { cl } from '@/utils/lib/cl'

interface Params extends Children<ReactNode[]> {
    currentElement: number,
    onLeft?: () => unknown,
    onRight?: () => unknown,
    frameClassName?: string,
    arrowClassName?: string
}

export default function Carousel(
    { currentElement, onLeft, onRight, children, frameClassName, arrowClassName }: Params
) {
    return (<div className={styles.articleCarousel}>
        <Arrow className={arrowClassName} direction={'left'} onClick={onLeft} />
        <div className={styles.articleCarousel__carousel}>
            <motion.div
                animate={{ x: currentElement * -100 + '%' }}
                transition={{ ease: 'linear' }}
                className={cl(styles.articleCarousel__carousel__content, frameClassName)}
            >
                {children.map((child, index) => <div key={index} className={styles.articleCarousel__carousel__content__element}>
                    {child}
                </div>)}
            </motion.div>
        </div>
        <Arrow className={arrowClassName} direction={'right'} onClick={onRight} />
    </div>)
}