import type {MotionValue} from 'framer-motion'
import styles from './styles.module.scss'
import { useTranslations } from 'next-intl'
import { cl } from '@/utils/lib/cl'
import { VerticalLine } from '@/features/cooperation'
import Point from '../Point'

interface Params {
    frame: MotionValue<number>,
    className?: string,
    isInView?: boolean
}

export default function Details({ frame, className, isInView }: Params) {
    const t = useTranslations('cases-points')

    return (<div className={cl(styles.details, className)}>
        <div className={styles.details__title}>
            <h2>{t('title')}</h2>
            <h3>{t('sub-title')}</h3>
        </div>
        <div className={styles.details__main}>
            <VerticalLine
                isInView={isInView}
                className={styles.details__main__line}
            />
            <Point frame={frame} />
        </div>
    </div>)
}