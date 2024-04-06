'use client'

import { motion, Transition, useInView } from 'framer-motion'
import { useRef } from 'react'
import { cl } from '@/utils/lib/cl'
import sectionStyles from '@/utils/assets/styles/services.module.scss'

interface Params {
    props: string[],
    claasName?: string,
    transition?: Transition,
    listTransition?: Transition
}

export default function Props({ claasName, transition, props, listTransition }: Params) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (<motion.ul
        ref={ref}
        className={cl(sectionStyles.props, claasName)}
        initial={{ opacity: 0 }}
        animate={isInView && 'view'}
        variants={{ view: { opacity: 1 } }}
        transition={{ staggerChildren: 0.3, ...listTransition }}
    >
        {Object.values(props).map((item, index) => <motion.li
                key={index}
                className={sectionStyles.props__item}
                initial={{ opacity: 0, y: -100 }}
                variants={{ view: { opacity: 1, y: 0 } }}
                transition={{ ease: 'linear', ...transition }}
        >
            {item}
        </motion.li>)}
    </motion.ul>)
}