import styles from './styles.module.scss'
import { useScroll, useTransform, useVelocity } from 'framer-motion'
import PhotoMarquee from '@/widgets/cases-points/ui/PhotoMarquee'
import { StaticImageData } from 'next/image'


interface Params {
    downPhotos: StaticImageData[],
    upPhotos: StaticImageData[]
}

export default function Background({ downPhotos, upPhotos }: Params) {
    const { scrollY } = useScroll()
    const velocity = useVelocity(scrollY)
    const speed = useTransform(velocity, (value): number => Math.abs(value) > 0 ? 1.5 : 0.05)

    return (<div className={styles.background}>
        <PhotoMarquee photos={downPhotos} speed={speed} direction={'down'} />
        <PhotoMarquee photos={upPhotos} speed={speed} direction={'up'} />
    </div>)
}