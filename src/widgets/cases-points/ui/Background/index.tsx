import styles from './styles.module.scss'
import { useScroll, useTransform, useVelocity } from 'framer-motion'
import PhotoMarquee from '../PhotoMarquee'
import { StaticImageData } from 'next/image'
import chunk from '@/utils/lib/chunk'

interface Params {
    downPhotos: StaticImageData[],
    upPhotos: StaticImageData[],
    position: number,
    photoOnPosition: number
}

export default function Background({ downPhotos, upPhotos, position, photoOnPosition }: Params) {
    const { scrollY } = useScroll()
    const velocity = useVelocity(scrollY)
    const speed = useTransform(velocity, (value): number => Math.abs(value) > 0 ? 1.5 : 0.05)

    const downChunks = chunk(downPhotos, photoOnPosition)
    const upChunks = chunk(upPhotos, photoOnPosition)

    return (<div className={styles.background}>
        <PhotoMarquee position={position} allPhotos={downChunks} speed={speed} direction={'down'} />
        <PhotoMarquee position={position} allPhotos={upChunks} speed={speed} direction={'up'} />
    </div>)
}