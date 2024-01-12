import styles from './styles.module.scss'
import { cl } from '@/utils/lib/cl'
import { motion } from 'framer-motion'
import { Background as NotFilledBackground } from '@/widgets/cases-points'
import { StaticImageData } from 'next/image'
import photo1 from '@/utils/assets/images/cases-points/3.jpeg'
import photo2 from '@/utils/assets/images/cases-points/4.jpeg'
import photo5 from '@/utils/assets/images/cases-points/2.jpg'

interface Params {
    className?: string,
    isInViewMotion: boolean
}

const downPhotos: StaticImageData[] = [photo1, photo2, photo5]

export default function Background({ className, isInViewMotion }: Params) {

    return (<div className={cl(styles.background, className)}>
        <motion.div
            transition={{ duration: 0.8 }}
            animate={{ y: isInViewMotion ? 0 : '100%' }}
            className={styles.background__container}
        >
            <NotFilledBackground downPhotos={downPhotos} upPhotos={downPhotos} />
        </motion.div>
    </div>)
}