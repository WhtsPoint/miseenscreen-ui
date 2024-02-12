import Ring from '@/utils/ui/Ring'
import { useMotionValue, useTime, useTransform } from 'framer-motion'
import styles from './styles.module.scss'

interface Params {
    radius?: number,
    width?: number,
    color?: string
}

export default function BasicLoading({ radius = 25, width = 2, color = 'white' }: Params) {
    const progress = useMotionValue(25)
    const time = useTime()
    const rotate = useTransform(time, [0, 1000], [0, 360], { clamp: false })

    return (<div className={styles.loadingBlock}>
        <Ring rotate={rotate} radius={radius} width={width} color={color} progress={progress} />
    </div>)
}