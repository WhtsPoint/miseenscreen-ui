import styles from './styles.module.scss'
import Marker from '@/widgets/steps/ui/Marker'
import { MotionValue } from 'framer-motion'
import StyledDt from '@/utils/ui/StyledDt'
import { Topic } from '@/widgets/steps/interfaces/Topic'
import { motion } from 'framer-motion'
import useTextTransition from '@/widgets/steps/hooks/useTextTransition'

interface Transition {
    delay?: number
}
interface Params {
    isInView?: boolean,
    transition?: Transition,
    position: MotionValue<number>,
    params: [Topic, Topic]
}

export default function PointWithMarker(
    { params, position, isInView, transition }: Params
) {
    const [ref, { topic, description }] = useTextTransition({ position, text: params })

    return (<div className={styles.point}>
        <Marker
            className={styles.point__marker}
            isInView={isInView}
            scale={15}
            transition={transition}
        />
        <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView && { opacity: 1 }}
            transition={transition}
            className={styles.point__point}
        >
            <StyledDt>{topic}</StyledDt>
            <motion.dd>{description}</motion.dd>
        </motion.div>
    </div>)
}