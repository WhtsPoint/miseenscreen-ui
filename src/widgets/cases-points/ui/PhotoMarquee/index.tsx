import YMarquee from '@/utils/ui/YMarquee'
import { MotionValue } from 'framer-motion'
import { Direction } from '@/utils/lib/y-marquee'
import styles from './styles.module.scss'
import Image, { StaticImageData } from 'next/image'

interface Params {
    photos: StaticImageData[]
    speed: MotionValue<number>,
    direction: Direction
}

export default function PhotoMarquee({ photos, ...params }: Params) {
    return (<YMarquee className={styles.yMarquee} {...params}>
        <div className={styles.photoMarquee}>
            {photos.map((photo, index) => <Image
                key={index}
                width={photo.width}
                height={photo.height}
                src={photo}
                className={styles.photoMarquee__image}
                alt={''}
            />)}
        </div>
    </YMarquee>)
}