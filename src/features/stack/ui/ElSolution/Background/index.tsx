import styles from './styles.module.scss'
import { cl } from '@/utils/lib/cl'
import Particle from '@/utils/ui/Particle'
import leftHandImage from '@/utils/assets/images/stack/posters/elearning/left-hand.png'
import rightHandImage from '@/utils/assets/images/stack/posters/elearning/right-hand.png'
import circleImage from '@/utils/assets/images/stack/posters/elearning/circle.png'
import lightImage from '@/utils/assets/images/stack/particles/x-light-2.png'

interface Params {
    className?: string,
    isInView: boolean
}

export default function Background({ className, isInView }: Params) {
    return (<div className={cl(styles.background, className)}>
        <div className={styles.right}>
            <Particle
                isInView={isInView}
                className={styles.rightHand}
                animation={{
                    initial: { y: -100, opacity: 0 },
                    viewAnimation: { y: 0, opacity: 1 },
                    transition: { duration: 1, delay: 1 }
                }}
                image={{ src: rightHandImage.src, sizes: '50vw' }}
            />
        </div>
        <div className={styles.left}>
            <Particle
                isInView={isInView}
                className={styles.leftHand}
                animation={{
                    initial: { y: 100, opacity: 0 },
                    viewAnimation: { y: 0, opacity: 1 },
                    transition: { duration: 1, delay: 1 }
                }}
                image={{ src: leftHandImage.src, sizes: '50vw' }}
            />
        </div>
        <Particle
            isInView={isInView}
            className={styles.circle}
            animation={{
                initial: { opacity: 0 },
                viewAnimation: { opacity: 1 },
                transition: { duration: 1, delay: 2 }
            }}
            image={{ src: circleImage.src, sizes: '50vw' }}
        />
        <Particle
            isInView={isInView}
            className={styles.light}
            animation={{
                initial: { opacity: 0 },
                viewAnimation: { opacity: 1 },
                transition: { duration: 1, delay: 3 }
            }}
            image={{ src: lightImage.src }}
        />
    </div>)
}