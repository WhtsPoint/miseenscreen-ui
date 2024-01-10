import styles from './styles.module.scss'
import { cl } from '@/utils/lib/cl'
import { motion } from 'framer-motion'
import { Background as NotFilledBackground } from '@/widgets/cases-points'

interface Params {
    className?: string,
    isInViewMotion: boolean
}

export default function Background({ className, isInViewMotion }: Params) {
    // const [isInView, setIsInView] = useState<boolean>(isInViewMotion.get())
    //
    // useMotionValueEvent(isInViewMotion, 'change', setIsInView)

    return (<div className={cl(styles.background, className)}>
        <motion.div transition={{ duration: 0.8 }} animate={{ y: isInViewMotion ? 0 : '100%' }} style={{ width: '100%', height: '100%', background: 'blue'}}>
            <NotFilledBackground />
        </motion.div>
    </div>)
}