import styles from './styles.module.scss'
import { cl } from '@/utils/lib/cl'
import openSans from '@/utils/assets/fonts/OpenSans'
import { motion, MotionStyle } from 'framer-motion'

interface Video {
    src: string,
    type?: string
}

interface Params {
    className?: string,
    style?: MotionStyle
    video: Video,
    theme: string
}

export default function Item({ className, video, theme, style }: Params) {
    const { src, type = 'video/mp4' } = video

    return (<motion.article className={cl(styles.item, className)} style={style}>
        <div className={styles.item__videoBlock}>
            <video
                muted={true}
                autoPlay={true}
                loop={true}
                controls={false}
                className={styles.item__videoBlock__video}
            >
                <source src={src} type={type} />
            </video>
        </div>
        <h3 style={openSans.style} className={styles.item__theme}>{theme}</h3>
    </motion.article>)
}