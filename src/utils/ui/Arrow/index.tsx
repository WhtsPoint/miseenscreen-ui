import arrowImage from '@/utils/assets/images/arrow.svg'
import styles from './styles.module.scss'
import { cl } from '@/utils/lib/cl'
import { ArrowDirection } from '@/utils/types/ArrowDirection'
import { useEffect } from 'react'
import { useAnimate, useInView } from 'framer-motion'
import { motion } from 'framer-motion'

interface Params {
    direction?: ArrowDirection,
    className?: string,
    onClick?: () => unknown
}

export default function Arrow({ direction = 'right', className, onClick }: Params) {
    const [ref, animate] = useAnimate()
    const isInView = useInView(ref, { once: true })

    const x = 5 * (direction === 'right' ? 1 : -1)

    useEffect(() => {
        if (isInView) {
            animate(ref.current, { x: [0, x, 0] }, { duration: 1, repeat: 1 })
        }
    }, [x, isInView, animate, ref])

    return (<button onClick={onClick} className={cl(styles.arrow, className)}>
        <motion.img
            whileHover={{ x }}
            ref={ref}
            src={arrowImage.src}
            style={direction === 'left' ? { rotate: '180deg'} : {}}
            alt={''}
        />
    </button>)
}