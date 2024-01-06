import styles from './styles.module.scss'
import { cl } from '@/utils/lib/cl'
import { motion } from 'framer-motion'

interface Params {
    isInView?: boolean,
    className?: string
}

export default function VerticalLine({ isInView, className }: Params) {
    return (<motion.hr
        className={cl(styles.verticalLine, className)}
        initial={{ height: 0, display: 'none' }}
        animate={ isInView && { height: '100%', display: 'initial' }}
    />)
}