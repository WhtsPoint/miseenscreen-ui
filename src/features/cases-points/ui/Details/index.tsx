import { MotionValue } from 'framer-motion'
import styles from './styles.module.scss'

interface Params {
    frame?: MotionValue<number>
}

export default function Details({ frame }: Params) {
    return (<div className={styles.details}>
        <div className={styles.details__title}>
            <h2>CASES</h2>
        </div>
    </div>)
}