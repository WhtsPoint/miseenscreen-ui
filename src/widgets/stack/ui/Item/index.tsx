import styles from './styles.module.scss'
import { cl } from '@/utils/lib/cl'
import openSans from '@/utils/assets/fonts/OpenSans'
import { motion, MotionStyle } from 'framer-motion'
import Image from 'next/image'

interface Params {
    style?: MotionStyle
    src: string,
    theme: string,
    themeClass?: string
}

export default function Item({ src, theme, style, themeClass }: Params) {
    return (<motion.article className={styles.item} style={style}>
        <div className={styles.item__videoBlock}>
           <Image src={src} alt={''} />
        </div>
        <h3 style={openSans.style} className={cl(styles.item__theme, themeClass)}>{theme}</h3>
    </motion.article>)
}