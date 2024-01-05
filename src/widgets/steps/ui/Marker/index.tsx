import styles from './styles.module.scss'
import { motion } from 'framer-motion'

interface Params {
    isInView?: boolean,
    transition?: {
        delay?: number
    }
}

export default function Marker({ isInView, transition }: Params) {
    const animation = isInView && { scale: 15 }
    return (<motion.div
        initial={{ width: 1, height: 1 }}
        animate={animation}
        transition={transition}
        className={styles.marker}
    />)
}