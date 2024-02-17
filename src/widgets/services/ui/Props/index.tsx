import { motion, useInView } from 'framer-motion'
import sectionStyles from '@/utils/assets/styles/services.module.scss'
import { useRef } from 'react'

interface Params {
    props: string[]
}

export default function Props({ props }: Params) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (<motion.ul
        ref={ref}
        className={sectionStyles.props}
        initial={{ opacity: 0 }}
        animate={isInView && 'view'}
        variants={{ view: { opacity: 1 } }}
        transition={{ staggerChildren: 0.3 }}
    >
        {Object.values(props).map((item, index) => <motion.li
                key={index}
                className={sectionStyles.props__item}
                initial={{ opacity: 0, y: -100 }}
                variants={{ view: { opacity: 1, y: 0 } }}
                transition={{ ease: 'linear' }}
        >
            {item}
        </motion.li>)}
    </motion.ul>)
}