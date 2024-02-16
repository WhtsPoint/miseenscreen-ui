import { motion } from 'framer-motion'
import { Children } from '@/utils/interfaces/Children'
import { ReactNode } from 'react'

interface Params extends Children<ReactNode> {}

export default function Description({ children }: Params) {
    return (<motion.p
        initial={{ opacity: 0 }}
        variants={{ inView: { opacity: 1 } }}
    >
        {children}
    </motion.p>)
}