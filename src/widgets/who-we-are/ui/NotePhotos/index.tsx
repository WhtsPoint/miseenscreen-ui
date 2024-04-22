import NotePhoto from '../NotePhoto'
import { cl } from '@/utils/lib/cl'
import globalStyles from '@/utils/assets/styles/who-we-are.module.scss'
import styles from './styles.module.scss'
import programmingImage from '@/utils/assets/images/who-we-are/programming.png'
import daryaImage from '@/utils/assets/images/who-we-are/darya-2.jpeg'
import bts from '@/utils/assets/images/who-we-are/bts.png'

type NotePhotoParams = Parameters<typeof NotePhoto>[0]

interface Params extends Pick<NotePhotoParams, 'sizes'> {
    className?: string
}

const photoParams = {
    className: cl(globalStyles.photo, styles.image)
} as const

export default function NotePhotos({ className, sizes }: Params) {
    return (<div className={cl(styles.images, className)}>
        <NotePhoto src={programmingImage.src} alt={'Programming image'} sizes={sizes} {...photoParams} />
        <NotePhoto src={daryaImage.src} alt={'Project manager Darya image'} sizes={sizes} {...photoParams} />
        <NotePhoto src={bts.src} alt={'Light board'} sizes={sizes} {...photoParams} />
    </div>)
}