import { cl } from '@/utils/lib/cl'
import styles from './styles.module.scss'
import PointWithMarker, { PointParams } from '@/widgets/steps/ui/PointWithMarker'
import VerticalLine from '@/widgets/steps/ui/VerticalLine'

interface Params {
    className?: string,
    isInView?: boolean,
    points: PointParams[]
}

export default function Points({ className, points, isInView }: Params) {
    return (<article className={cl(className, styles.points)}>
        <VerticalLine isInView={isInView} className={styles.points__line} />
        <dl className={styles.points__list}>
            {points.map((params, index) => <PointWithMarker
                key={params.topic}
                isInView={isInView}
                transition={{ delay: index / 3 }}
                {...params}
            />)}
        </dl>
    </article>)
}