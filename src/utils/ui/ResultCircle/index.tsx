import Ring from '@/utils/ui/Ring'
import { useAnimate, useInView, useMotionValue } from 'framer-motion'
import Image, { type StaticImageData } from 'next/image'
import { useEffect } from 'react'
import { cl } from '@/utils/lib/cl'
import styles from './styles.module.scss'

interface Params {
    className?: string,
    iconSrc: StaticImageData
}

export default function ResultCircle({ className, iconSrc }: Params) {
    const [ref, animate] = useAnimate()
    const progress = useMotionValue(0)
    const isInView = useInView(ref)

    useEffect(() => {
        if (!isInView) return
        animate([
            [progress, [0, 100], { duration: 1, ease: 'easeInOut', delay: 0.5 }],
            ['img', { y: [50, 0], opacity: [0, 1] }, { duration: 1, delay: 0.5 }],
        ])
    }, [animate, isInView, progress])

    return (<div ref={ref} className={cl(styles.successWindow, className)}>
        <Ring progress={progress} radius={50} width={2} color={'white'} />
        <div className={styles.successWindow__check}>
            <Image src={iconSrc} alt={''} />
        </div>
    </div>)
}