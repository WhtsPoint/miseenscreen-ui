import BackgroundVideo from '@/utils/ui/BackgroundVideo'
import styles from './styles.module.scss'
import videos from '@/utils/config/videos'
import { cl } from '@/utils/lib/cl'

interface Params {
    className?: string
}

export default function Background({ className }: Params) {
    return (<div className={cl(styles.background, className)}>
        <BackgroundVideo className={styles.video} src={videos.welcomeBackground} />
    </div>)
}