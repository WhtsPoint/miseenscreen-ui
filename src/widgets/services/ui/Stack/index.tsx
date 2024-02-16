import { motion } from 'framer-motion'
import sectionStyles from '@/utils/assets/styles/services.module.scss'
import { useState } from 'react'

interface Params {
    params: string[]
}

export default function Stack({ params }: Params) {
    const [isAnimated, setIsAnimated] = useState<boolean>(false)

    const onAnimationComplete = (variant: string) => {
        if (variant !== 'inView') return
        setIsAnimated(true)
    }

    return (<motion.ul
        className={sectionStyles.stack}
        variants={{ list: {} }}
        animate={isAnimated && 'list'}
        onAnimationComplete={onAnimationComplete}
        transition={{ staggerChildren: 0.1 }}
    >
        {Object.values(params).map((item, index) => <motion.li
            key={index}
            initial={{ opacity: 0 }}
            variants={{ list: { opacity: 1, x: [-100, 0] } }}
            transition={{ ease: 'linear' }}
        >
            {item}
        </motion.li>)}
    </motion.ul>)
}