import { motion } from 'framer-motion'
import styles from './styles.module.scss'
import { cl } from '@/utils/lib/cl'

interface Params {
    isInView?: boolean,
    className?: string
}

export default function VerticalLine({ isInView, className }: Params) {
    return (<motion.hr
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: isInView ? 1.5 : 0.5 }}
        className={cl(styles.line, className)}
    />)
}