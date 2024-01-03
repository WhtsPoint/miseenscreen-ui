import styles from './styles.module.scss'
import { cl } from '@/utils/lib/cl'
import { motion, MotionValue } from 'framer-motion'

interface Params {
    article: MotionValue<string>,
    description: MotionValue<string>,
    className?: string
}

export default function Point({ article, description, className }: Params) {
    return (<article className={cl(styles.point, className)}>
        <motion.h3 className={styles.point__article}>{article}</motion.h3>
        <motion.p className={styles.point__description}>{description}</motion.p>
        <hr className={styles.point__hr} />
    </article>)
}