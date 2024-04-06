'use client'

import Ring from '@/utils/ui/Ring'
import { useMotionValue, useTime, useTransform } from 'framer-motion'
import styles from './styles.module.scss'
import { cl } from '@/utils/lib/cl'

interface Params {
    radius?: number,
    width?: number,
    color?: string,
    className?: string
}

export default function BasicLoading({ className, radius = 25, width = 2, color = 'white' }: Params) {
    const progress = useMotionValue(25)
    const time = useTime()
    const rotate = useTransform(time, [0, 1000], [0, 360], { clamp: false })

    return (<div className={cl(styles.loadingBlock, className)}>
        <Ring rotate={rotate} radius={radius} width={width} color={color} progress={progress} />
    </div>)
}