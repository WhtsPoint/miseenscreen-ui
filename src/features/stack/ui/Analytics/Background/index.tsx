import styles from './styles.module.scss'
import { cl } from '@/utils/lib/cl'
import Particle from '@/utils/ui/Particle'
import circleImage from '@/utils/assets/images/stack/particles/circle.png'
import robotImage from '@/utils/assets/images/stack/posters/erp/robot.png'
import phoneImage from '@/utils/assets/images/stack/posters/erp/phone.png'
import crossImage from '@/utils/assets/images/stack/particles/cross-light.png'

interface Params {
    className?: string,
    isInView: boolean
}

export default function Background({ className, isInView }: Params) {
    return (<div className={cl(styles.background, className)}>
        <Particle
            isInView={isInView}
            className={styles.circle}
            animation={{ initial: { opacity: 0 }, viewAnimation: { opacity: 1 }, transition: { duration: 1 } }}
            image={{ src: circleImage.src, sizes: '50vw' }}
        />
        <Particle
            isInView={isInView}
            className={styles.robot}
            animation={{ initial: { opacity: 0, x: -100 }, viewAnimation: { opacity: 1, x: 0 }, transition: { duration: 1, delay: 1 } }}
            image={{ src: robotImage.src, sizes: '25vw' }}
        />
        <Particle
            isInView={isInView}
            className={styles.phone}
            animation={{ initial: { opacity: 0, x: 100 }, viewAnimation: { opacity: 1, x: 0 }, transition: { duration: 1, delay: 1 } }}
            image={{ src: phoneImage.src, sizes: '25vw' }} />
        <Particle
            isInView={isInView}
            className={styles.light}
            animation={{ initial: { opacity: 0 }, viewAnimation: { opacity: 1 }, transition: { duration: 1, delay: 1.5 } }}
            image={{ src: crossImage.src, sizes: '25vw' }}
        />
    </div>)
}