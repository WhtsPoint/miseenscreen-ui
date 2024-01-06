import { Point } from '@/widgets/cooperation'
import styles from './styles.module.scss'
import Marker from '@/widgets/steps/ui/Marker'

interface Transition {
    delay?: number
}

interface TextParams {
    topic: string,
    description: string
}

interface Params extends TextParams {
    isInView?: boolean,
    transition?: Transition
}

export default function PointWithMarker(
    { topic, description, isInView, transition }: Params
) {
    return (<div className={styles.point}>
        <Marker
            className={styles.point__marker}
            isInView={isInView}
            scale={15}
            transition={transition}
        />
        <Point
            topic={topic}
            description={description}
            isInView={isInView}
            animationOptions={transition}
            className={styles.point__point}
        />
    </div>)
}

export type {TextParams as PointParams}