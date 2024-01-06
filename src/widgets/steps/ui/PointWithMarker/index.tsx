import styles from './styles.module.scss'
import Marker from '@/widgets/steps/ui/Marker'
import SceneSwitcher from '@/utils/ui/SceneSwitcher'
import { MotionValue } from 'framer-motion'
import StyledDt from '@/utils/ui/StyledDt'
import { Topic } from '@/widgets/steps/interfaces/Topic'
import { motion } from 'framer-motion'

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
    return (<div className={styles.point}>
        <Marker
            className={styles.point__marker}
            isInView={isInView}
            scale={15}
            transition={transition}
        />
        <motion.div
            initial={{ opacity: 0 }}
            animate={isInView && { opacity: 1 }}
            transition={transition}
            className={styles.point__point}
        >
            <SceneSwitcher className={styles.point__point__dtSwitcher} position={position}>
                {[<StyledDt key={0}>{params[0].topic}</StyledDt>, <StyledDt key={1}>{params[1].topic}</StyledDt>]}
            </SceneSwitcher>
            <SceneSwitcher className={styles.point__point__ddSwitcher} position={position}>
                {[<dd key={0}>{params[0].description}</dd>, <dd key={1}>{params[1].description}</dd>]}
            </SceneSwitcher>
        </motion.div>
    </div>)
}