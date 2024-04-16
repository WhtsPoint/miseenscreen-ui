import Image from 'next/image'
import styles from './styles.module.scss'
import { cl } from '@/utils/lib/cl'

type ImageParams = Parameters<typeof Image>[0]

interface Params extends Pick<ImageParams, 'src' | 'alt' | 'sizes'> {
    className?: string
}

export default function NotePhoto({ className, ...params }: Params) {
    return (<div data-tag={'note-photo'} className={cl(styles.notePhoto, className)}>
        <Image fill className={styles.image} {...params} />
    </div>)
}