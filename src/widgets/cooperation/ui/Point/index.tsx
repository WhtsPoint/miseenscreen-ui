import { motion } from 'framer-motion'
import styles from './styles.module.scss'

interface Params {
    topic: string,
    description: string,
    isInView?: boolean,
    animationOptions?: {
        delay?: number
    }
}

export default function Point({ topic, description, isInView, animationOptions }: Params) {
    return (<motion.div
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: isInView ? 2 : 0.5, ...animationOptions }}
    >
        <dt className={styles.topic__dt}>{topic}</dt>
        <dd className={styles.topic__dd}>{description}</dd>
    </motion.div>)
}