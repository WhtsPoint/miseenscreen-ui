import styles from './styles.module.scss'
import { motion } from 'framer-motion'
import { cl } from '@/utils/lib/cl'

interface Params {
    isInView?: boolean,
    className?: string,
    scale: number,
    transition?: { delay?: number }
}

export default function Marker({ isInView, transition, scale, className}: Params) {
    return (<motion.div
        initial={{ width: 1, height: 1, visibility: 'collapse' }}
        animate={isInView && { scale, visibility: 'visible' }}
        transition={transition}
        className={cl(styles.marker, className)}
    />)
}