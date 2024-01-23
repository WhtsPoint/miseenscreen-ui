import Image, { StaticImageData } from 'next/image'
import styles from './styles.module.scss'
import { cl } from '@/utils/lib/cl'

interface Params {
    photos: StaticImageData[],
    isHidden?: boolean
}

export default function MarqueeLine({ photos, isHidden }: Params) {
    return (<div className={cl(styles.photoMarquee, isHidden && styles.photoMarquee_hidden)}>
        {photos.map((photo, index) => <div key={index}><Image
            width={photo.width}
            height={photo.height}
            src={photo}
            className={styles.photoMarquee__image}
            alt={''}
            priority
        /></div>)}
    </div>)
}