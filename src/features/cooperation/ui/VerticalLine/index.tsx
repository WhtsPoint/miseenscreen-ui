import { motion } from 'framer-motion'
import styles from './styles.module.scss'

interface Params {
    isInView?: boolean
}

export default function VerticalLine({ isInView }: Params) {
    return (<motion.hr
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: isInView ? 1.5 : 0.5 }}
        className={styles.line}
    />)
}