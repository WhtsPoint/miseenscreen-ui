import { motion, useInView } from 'framer-motion'
import sectionStyles from '@/utils/assets/styles/services.module.scss'
import { useRef } from 'react'

export default function Hl() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (<motion.div
        ref={ref}
        initial={{ width: '0%' }}
        animate={isInView && 'view'}
        variants={{ view: { width: '100%' } }}
        className={sectionStyles.line}
    />)
}