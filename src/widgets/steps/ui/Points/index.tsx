import { cl } from '@/utils/lib/cl'
import styles from './styles.module.scss'
import PointWithMarker from '@/widgets/steps/ui/PointWithMarker'
import VerticalLine from '@/widgets/steps/ui/VerticalLine'
import type { MotionValue } from 'framer-motion'
import type { Topic } from '@/widgets/steps/interfaces/Topic'

interface Params {
    className?: string,
    isInView?: boolean,
    points: [Topic, Topic][],
    position: MotionValue<number>
}

export default function Points({ className, points, position, isInView }: Params) {
    return (<article className={cl(className, styles.points)}>
        <VerticalLine isInView={isInView} className={styles.points__line} />
        <dl className={styles.points__list}>
            {points.map((params, index) => <PointWithMarker
                position={position}
                key={params[0].topic}
                isInView={isInView}
                transition={{ delay: index / 2 + 0.5 }}
                params={params}
            />)}
        </dl>
    </article>)
}