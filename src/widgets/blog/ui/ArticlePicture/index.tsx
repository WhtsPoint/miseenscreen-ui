import Image, { StaticImageData } from 'next/image'
import { cl } from '@/utils/lib/cl'
import styles from './styles.module.scss'

interface Params {
    image: StaticImageData,
    caption: string,
    className?: string
}

export default function ArticlePicture({ image, caption, className }: Params) {
    const { width, height, src } = image

    return (<figure className={cl(styles.picture, className)}>
        <Image
            className={styles.picture__image}
            alt={caption}
            {...{ width, height, src }}
        />
        <figcaption className={styles.picture__caption}>{caption}</figcaption>
    </figure>)
}