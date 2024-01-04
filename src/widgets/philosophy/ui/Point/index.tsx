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
        <div className={styles.point__article}>
            <h2>{article}</h2>
        </div>
        <motion.p style={descriptionStyles} className={styles.point__description}>
            {description}
        </motion.p>
        <hr className={styles.point__hr} />
    </article>)
}