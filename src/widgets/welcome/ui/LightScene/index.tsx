import { useRef } from 'react'
import { MotionValue, useMotionValueEvent, useTransform } from 'framer-motion'
import styles from './styles.module.scss'
import videos from '@/utils/config/videos'

interface Params {
    scrollY: MotionValue<number>
}

export default function LightScene({ scrollY }: Params) {
    const ref = useRef<HTMLVideoElement>(null)
    const frameProgress = useTransform(scrollY, [0, 0.5], [1, 0])

    useMotionValueEvent(scrollY, 'change', async () => {
        const video = ref.current
        if (video) {
            await ref.current.play()
            video.currentTime = frameProgress.get() * 1.4
            ref.current.pause()
        }
    })

    return (<div className={styles.lightScene}>
        <video
            ref={ref}
            className={styles.lightScene__video}
            autoPlay={true}
            muted={true}
            controls={false}
            preload={'preload'}
        >
            <source src={videos.lightScene} type={'video/mp4'} />
        </video>
    </div>)
}