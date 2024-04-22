'use client'

import Image from 'next/image'
import videos from '@/utils/config/videos'
import { cl } from '@/utils/lib/cl'
import styles from './styles.module.scss'
import lightImage from '@/utils/assets/images/who-we-are/light-2.png'
import useBackgroundAnimation from '@/features/who-we-are/hooks/useBackgroundAnimation'

interface Params {
    className?: string
}

export default function BookBackground({ className }: Params) {
    const ref = useBackgroundAnimation()

    return (<div ref={ref} className={cl(styles.bookBackground, className)}>
        <video data-tag={'background'} className={styles.video} autoPlay muted loop playsInline>
            <source type={'video/mp4'} src={videos.rotatingBook} />
        </video>
        <div data-tag={'light'} className={styles.light}>
            <Image fill sizes={'1300px'} className={styles.lightImage} src={lightImage.src} alt={''} />
        </div>
    </div>)
}