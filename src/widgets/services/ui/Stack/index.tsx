import { motion, useInView } from 'framer-motion'
import sectionStyles from '@/utils/assets/styles/services.module.scss'
import { useRef } from 'react'

interface Params {
    params: string[]
}

export default function Stack({ params }: Params) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (<motion.ul
        ref={ref}
        className={sectionStyles.stack}
        variants={{ view: {} }}
        animate={isInView && 'view'}
        transition={{ staggerChildren: 0.1 }}
    >
        {Object.values(params).map((item, index) => <motion.li
            key={index}
            initial={{ opacity: 0 }}
            variants={{ view: { opacity: 1, x: [-100, 0] } }}
            transition={{ ease: 'linear' }}
        >
            {item}
        </motion.li>)}
    </motion.ul>)
}