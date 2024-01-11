import YMarquee from '@/utils/ui/YMarquee'
import styles from './styles.module.scss'
import { useMotionValueEvent, useScroll, useTransform, useVelocity } from 'framer-motion'
import { useState } from 'react'

const maxDuration = 10

export default function Background() {
    const [duration, setDuration] = useState<number>(maxDuration)
    const { scrollY } = useScroll()
    const velocity = useVelocity(scrollY)
    const speed = useTransform(velocity, (value): number => Math.abs(value) > 0 ? 1 : 0.1)

    return (<div className={styles.background}>
        <YMarquee className={styles.background__marquee} speed={speed} direction={'down'}>
            <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ width: '25px', height: '25px', background: 'red' }} />
            </div>
        </YMarquee>
        <YMarquee className={styles.background__marquee} speed={speed} direction={'up'}>
            <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ width: '25px', height: '25px', background: 'red' }} />
            </div>
        </YMarquee>
    </div>)
}