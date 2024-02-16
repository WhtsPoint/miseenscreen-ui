import { Children } from '@/utils/interfaces/Children'
import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import sectionStyles from '@/utils/assets/styles/services.module.scss'

interface Params extends Children<ReactNode> {}

export default function Title({ children }: Params) {
    return (<motion.h2
        initial={{ opacity: 0, y: -100 }}
        variants={{ inView: { opacity: 1, y: 0 } }}
        transition={{ ease: 'linear' }}
        className={sectionStyles.title}
    >
        {children}
    </motion.h2>)
}