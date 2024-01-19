import styles from './styles.module.scss'
import { cl } from '@/utils/lib/cl'
import { motion, MotionStyle } from 'framer-motion'
import Arrow from '@/utils/ui/Arrow'

interface Params {
    article: string,
    description: string,
    descriptionStyles?: MotionStyle
    className?: string,
    onLeft?: () => unknown,
    onRight?: () => unknown
}

export default function Point(
    { article, description, className, descriptionStyles, onLeft, onRight}: Params
) {
    return (<article className={cl(styles.point, className)}>
        <div className={styles.point__article}>
            <Arrow className={styles.point__article__arrow} onClick={onLeft} direction={'left'} />
            <h2 className={styles.point__article__title}>{article}</h2>
            <Arrow className={styles.point__article__arrow} onClick={onRight} direction={'right'} />
        </div>
        <motion.p style={descriptionStyles} className={styles.point__description}>
            {description}
        </motion.p>
        <hr className={styles.point__hr} />
    </article>)
}