'use client'

import arrowImage from '@/utils/assets/images/arrow.svg'
import styles from './style.module.scss'
import { cl } from '@/utils/lib/cl'
import { ArrowDirection } from '@/utils/types/ArrowDirection'
import { useEffect } from 'react'
import { useAnimate, useInView } from 'framer-motion'
import { motion } from 'framer-motion'

interface Params {
    direction?: ArrowDirection,
    className?: string,
    onClick?: () => unknown,
    noAnimation?: boolean
}

const rotates = {
    'left': '180deg',
    'right': '0',
    'up': '-90deg',
    'down': '90deg'
} as const

const animations = {
    'left': { x: -5, y: 0 },
    'right': { x: 5, y: 0 },
    'up': { x: 0, y: -5 },
    'down': { x: 0, y: 5 }
} as const

export default function Arrow({ direction = 'right', className, onClick, noAnimation }: Params) {
    const [ref, animate] = useAnimate()
    const isInView = useInView(ref, { once: true })
    const { x, y } = animations[direction]

    useEffect(() => {
        if (isInView && !noAnimation) {
            animate(
                ref.current,
                { x: [0, x, 0], y: [0, y, 0] },
                { duration: 1, repeat: 1 }
            )
        }
    }, [x, y, isInView, animate, ref])

    return (<button onClick={onClick} className={cl(styles.arrow, className)}>
        <motion.img
            whileHover={{ x }}
            ref={ref}
            src={arrowImage.src}
            style={{ rotate: rotates[direction] }}
            alt={''}
        />
    </button>)
}