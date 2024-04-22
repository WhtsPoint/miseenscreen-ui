import { Item } from '@/widgets/stack'
import { useTranslations } from 'next-intl'
import AnalyticsLink from '../../AnalyticsLink'
import type { CSSProperties } from 'react'
import videos from '@/utils/config/videos'
import styles from './styles.module.scss'

interface Params {
    style?: CSSProperties
}

export default function Analytics({ style }: Params) {
    const t = useTranslations('stack')

    return (<AnalyticsLink style={style}>
        <Item
            video={{ src: videos.stack[0] }}
            theme={t('analytics')}
            themeClass={styles.themeText}
        />
    </AnalyticsLink>)
}