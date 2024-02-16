import { Children } from '@/utils/interfaces/Children'
import { ReactNode, useRef } from 'react'
import { useInView } from 'framer-motion'
import { motion } from 'framer-motion'
import sectionStyles from '@/utils/assets/styles/services.module.scss'
import { useFadeAnimation } from '@/widgets/services'

interface Params extends Children<ReactNode> {}

export default function Service({ children }: Params) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const [opacity] = useFadeAnimation(ref)

    return (<motion.section
        ref={ref}
        animate={isInView && 'inView'}
        variants={{ inView: {} }}
        transition={{ staggerChildren: 0.3 }}
        style={{ opacity }}
        className={sectionStyles.service}
    >
        {children}
    </motion.section>)
}