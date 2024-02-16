import { motion } from 'framer-motion'
import sectionStyles from '@/utils/assets/styles/services.module.scss'

export default function Hl() {
    return (<motion.div
        initial={{ width: '0%' }}
        variants={{ inView: { width: '100%' } }}
        className={sectionStyles.line}
    />)
}