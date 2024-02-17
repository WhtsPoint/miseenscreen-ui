import { Children } from '@/utils/interfaces/Children'
import { ReactNode, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import sectionStyles from '@/utils/assets/styles/services.module.scss'

interface Params extends Children<ReactNode> {}

export default function Title({ children }: Params) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (<motion.h2
        ref={ref}
        animate={isInView && 'view'}
        initial={{ opacity: 0, y: -100 }}
        variants={{ view: { opacity: 1, y: 0 } }}
        transition={{ ease: 'linear' }}
        className={sectionStyles.title}
    >
        {children}
    </motion.h2>)
}