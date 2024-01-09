import { MotionValue, useTransform } from 'framer-motion'
import styles from './styles.module.scss'
import BackgroundVideo from '@/utils/ui/BackgroundVideo'
import { motion} from 'framer-motion'
import { cl } from '@/utils/lib/cl'

const videoLink = 'https://drive.google.com/uc?export=download&id=1ci7_r883rwxlhv83mlYF4_Jxk-h7P8iz'

interface Params {
    scrollProgress: MotionValue<number>,
    className?: string
}

export default function CodingBackground({ scrollProgress, className }: Params) {
    const x = useTransform(scrollProgress, [0.2, 0.4], [200, 0])
    const opacity = useTransform(scrollProgress, [0.2, 0.4], [0, 1])

    return (<div className={cl(styles.codingBackground, className)}>
        <motion.div className={styles.codingBackground__container} style={{ x, opacity }}>
            <BackgroundVideo src={videoLink} />
        </motion.div>
    </div>)
}