import styles from './styles.module.scss'
import { cl } from '@/utils/lib/cl'
import Particle from '@/utils/ui/Particle'
import circleImage from '@/utils/assets/images/stack/particles/circle.png'
import robotImage from '@/utils/assets/images/stack/posters/erp/robot.png'
import phoneImage from '@/utils/assets/images/stack/posters/erp/phone.png'
import crossImage from '@/utils/assets/images/stack/particles/cross-light.png'

interface Params {
    className?: string
}

export default function Background({ className }: Params) {
    return (<div className={cl(styles.background, className)}>
        <Particle
            className={styles.circle}
            animation={{ initial: { opacity: 0 }, viewAnimation: { opacity: 1 }, transition: { duration: 1 } }}
            image={{ src: circleImage.src }}
        />
        <Particle
            className={styles.robot}
            animation={{ initial: { opacity: 0, x: -100 }, viewAnimation: { opacity: 1, x: 0 }, transition: { duration: 1, delay: 1 } }}
            image={{ src: robotImage.src }}
        />
        <Particle
            className={styles.phone}
            animation={{ initial: { opacity: 0, x: 100 }, viewAnimation: { opacity: 1, x: 0 }, transition: { duration: 1, delay: 1 } }}
            image={{ src: phoneImage.src }} />
        <Particle
            className={styles.light}
            animation={{ initial: { opacity: 0 }, viewAnimation: { opacity: 1 }, transition: { duration: 1, delay: 1.5 } }}
            image={{ src: crossImage.src }}
        />
    </div>)
}