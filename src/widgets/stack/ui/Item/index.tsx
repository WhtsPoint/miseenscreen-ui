import styles from './styles.module.scss'
import { cl } from '@/utils/lib/cl'
import openSans from '@/utils/assets/fonts/OpenSans'
import { motion, MotionStyle } from 'framer-motion'
import BackgroundVideo from '@/utils/ui/BackgroundVideo'
import BasicLoading from '@/utils/ui/LoadingBlock'

interface Video {
    src: string,
    type?: string
}

interface Params {
    style?: MotionStyle
    video: Video,
    theme: string,
    themeClass?: string
}

export default function Item({ video, theme, style, themeClass }: Params) {
    return (<motion.article className={styles.item} style={style}>
        <div className={styles.item__videoBlock}>
            <BackgroundVideo {...video} loadingElement={<BasicLoading />} />
        </div>
        <h3 style={openSans.style} className={cl(styles.item__theme, themeClass)}>{theme}</h3>
    </motion.article>)
}