import { Item } from '@/widgets/stack'
import { useTranslations } from 'next-intl'
import styles from './styles.module.scss'
import videos from '@/utils/config/videos'
import { CSSProperties } from 'react'
import config from '@/utils/config'

interface Params {
    style?: CSSProperties
}

export default function Analytics({ style }: Params) {
    const t = useTranslations('stack')

    return (<Item
        style={style}
        video={{ src: videos.stack[0] }}
        theme={t('analytics')}
        themeClass={styles.themeText}
        href={config.routes.services.analytics}
    />)
}