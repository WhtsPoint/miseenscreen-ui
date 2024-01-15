import { Item } from '@/widgets/stack'
import { useTranslations } from 'next-intl'
import { MotionStyle } from 'framer-motion'
import styles from './styles.module.scss'
import videos from '@/utils/config/videos'

interface Params {
    style?: MotionStyle
}

export default function Analytics({ style }: Params) {
    const t = useTranslations('stack')

    return (<Item
        style={style}
        video={{ src: videos.stack[0] }}
        theme={t('analytics')}
        themeClass={styles.themeText}
    />)
}