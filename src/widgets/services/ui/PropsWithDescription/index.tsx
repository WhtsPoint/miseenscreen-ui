'use client'

import sectionStyles from '@/utils/assets/styles/services.module.scss'
import { Prop } from '@/widgets/services/intefaces/Prop'
import { motion, useInView } from 'framer-motion'
import { cl } from '@/utils/lib/cl'
import { useRef } from 'react'

interface Params {
    props: Prop[]
}

export default function PropsWithDescription({ props }: Params) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (<motion.dl
        ref={ref}
        animate={isInView && 'view'}
        variants={{ view: {} }}
        className={sectionStyles.dl}
        transition={{ staggerChildren: 0.3 }}
    >
        {Object.values<Prop>(props).map(({ title, details }, index) => {
            return <motion.div
                key={index}
                className={sectionStyles.dl__item}
                initial={{ opacity: 0 }}
                variants={{ view: { opacity: 1, y: [-100, 0] } }}
                transition={{ ease: 'linear' }}
            >
                <dt className={cl(sectionStyles.dl__item__title, sectionStyles.props__item)}>{title}</dt>
                <dd className={sectionStyles.dl__item__details}>{details}</dd>
            </motion.div>
        })}
    </motion.dl>)
}