import { cl } from '@/utils/lib/cl'
import styles from './styles.module.scss'

interface Params {
    className?: string,
    videoClass?: string,
    src: string,
    type?: string
}

export default function BackgroundVideo({ className, src, videoClass, type = 'video/mp4'}: Params) {
    return (<div className={cl(styles.container, className)}>
        <video className={cl(styles.container__video, videoClass)} muted={true} autoPlay={true} loop={true}>
            <source src={src} type={type} />
        </video>
    </div>)
}