import styles from './styles.module.scss'
import { cl } from '@/utils/lib/cl'
import Particle from '@/utils/ui/Particle'
import leftHandImage from '@/utils/assets/images/stack/posters/elearning/left-hand.png'
import rightHandImage from '@/utils/assets/images/stack/posters/elearning/right-hand.png'
import circleImage from '@/utils/assets/images/stack/posters/elearning/circle.png'
import lightImage from '@/utils/assets/images/stack/particles/x-light-2.png'

interface Params {
    className?: string
}

export default function Background({ className }: Params) {
    return (<div className={cl(styles.background, className)}>
        <div className={styles.right}>
            <Particle
                className={styles.rightHand}
                animation={{
                    initial: { y: -100, opacity: 0 },
                    viewAnimation: { y: 0, opacity: 1 },
                    transition: { duration: 1, delay: 1 }
                }}
                image={{ src: rightHandImage.src }}
            />
        </div>
        <div className={styles.left}>
            <Particle
                className={styles.leftHand}
                animation={{
                    initial: { y: 100, opacity: 0 },
                    viewAnimation: { y: 0, opacity: 1 },
                    transition: { duration: 1, delay: 1 }
                }}
                image={{ src: leftHandImage.src }}
            />
        </div>
        <Particle
            className={styles.circle}
            animation={{
                initial: { opacity: 0 },
                viewAnimation: { opacity: 1 },
                transition: { duration: 1, delay: 2 }
            }}
            image={{ src: circleImage.src }}
        />
        <Particle
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