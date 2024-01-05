import styles from './styles.module.scss'
import Marker from '@/widgets/steps/ui/Marker'

interface Params {
    isInView?: boolean
}

export default function VerticalLine({ isInView }: Params) {
    return (<div className={styles.verticalLine}>
        {Array.from(Array(5).keys()).map((index) => {
            return <Marker isInView={isInView} key={index} transition={{ delay: index / 3 }} />
        })}
    </div>)
}