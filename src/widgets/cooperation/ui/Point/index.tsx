import { motion } from 'framer-motion'
import styles from './styles.module.scss'
import StyledDt from '@/utils/ui/StyledDt'

interface Params {
    topic: string,
    description: string,
    isInView?: boolean,
    animationOptions?: { delay?: number },
    className?: string
}

export default function Point({ topic, description, isInView, animationOptions, className }: Params) {
    return (<motion.div
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: isInView ? 2 : 0.5, ...animationOptions }}
        className={className}
    >
        <StyledDt>{topic}</StyledDt>
        <dd className={styles.topic__dd}>{description}</dd>
    </motion.div>)
}