import Image from 'next/image'
import styles from './styles.module.scss'
import { cl } from '@/utils/lib/cl'
import type { Media } from '@/widgets/cases-points/types/Media'

interface Params {
    media: Media[],
    isHidden?: boolean,
    className?: string
}

export default function MarqueeLine({ media, isHidden, className }: Params) {
    return (<div className={cl(styles.photoMarquee, isHidden && styles.photoMarquee_hidden, className)}>
        {media.map((media, index) => <div key={index}>
            {'type' in media ?
                <video className={styles.photoMarquee__image} autoPlay muted loop playsInline>
                    <source src={media.src} type={media.format} />
                </video>
                : <Image
                    src={media.src}
                    width={media.width}
                    height={media.height}
                    className={styles.photoMarquee__image}
                    alt={''}
                />
            }
        </div>)}
    </div>)
}