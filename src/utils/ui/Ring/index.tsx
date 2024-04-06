'use client'

import { motion, MotionValue, useTransform } from 'framer-motion'
import styles from './styles.module.scss'
import { useRef } from 'react'

interface Params {
    radius: number,
    width: number,
    color: string
    progress: MotionValue<number>,
    rotate?: MotionValue<number>
}

export default function Ring({ radius, width, color, progress, rotate }: Params) {
    const ref = useRef<SVGCircleElement>(null)
    const l = 2 * radius * Math.PI
    const strokeDashoffset = useTransform(progress, (value) => (1 - value / 100) * l)

    return (<svg width={radius * 2} height={radius * 2}>
        <motion.circle
            ref={ref}
            style={{ strokeDashoffset, rotate, strokeDasharray: `${l} ${l}`}}
            className={styles.ring}
            stroke={color}
            strokeWidth={width}
            r={radius - width}
            fill={'transparent'}
            cx="50%"
            cy="50%"
        />
    </svg>)
}