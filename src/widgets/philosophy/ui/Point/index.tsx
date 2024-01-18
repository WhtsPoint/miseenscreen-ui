import styles from './styles.module.scss'
import { cl } from '@/utils/lib/cl'
import { motion, MotionStyle } from 'framer-motion'

interface Params {
    article: string,
    description: string,
    descriptionStyles?: MotionStyle
    className?: string
}

export default function Point({ article, description, className, descriptionStyles }: Params) {
    return (<article className={cl(styles.point, className)}>
        <h2 className={styles.point__article}>{article}</h2>
        <motion.p style={descriptionStyles} className={styles.point__description}>
            {description}
        </motion.p>
        <hr className={styles.point__hr} />
    </article>)
}