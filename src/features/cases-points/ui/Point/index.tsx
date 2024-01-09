import SceneSwitcher from '@/utils/ui/SceneSwitcher'
import { MotionValue } from 'framer-motion'
import { useTranslations } from 'next-intl'
import styles from './styles.module.scss'

const points = ['portal', 'education', 'optimization'] as const

interface Params {
    frame: MotionValue<number>
}
export default function Point({ frame }: Params) {
    const t = useTranslations('cases-points')

    return (<SceneSwitcher position={frame} className={styles.point}>
        {points.map((point) => <b key={point}>{t('article.' + point)}</b>)}
    </SceneSwitcher>)
}