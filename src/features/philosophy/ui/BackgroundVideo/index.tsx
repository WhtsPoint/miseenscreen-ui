import styles from './styles.module.scss'
import { cl } from '@/utils/lib/cl'

const videoLink = 'https://drive.google.com/uc?export=download&id=1lWpqkjyCboKQu_-IuCelyIgECILbowEQ'

interface Params {
    className?: string
}

export default function BackgroundVideo({ className }: Params) {
    return (<div className={cl(styles.container, className)}>
        <video className={styles.container__video} muted={true} autoPlay={true} loop={true}>
            <source src={videoLink} type={'video/mp4'} />
        </video>
    </div>)
}