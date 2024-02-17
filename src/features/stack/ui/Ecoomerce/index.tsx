import { Item } from '@/widgets/stack'
import { useTranslations } from 'next-intl'
import videos from '@/utils/config/videos'
import config from '@/utils/config'
import { CSSProperties } from 'react'

interface Params {
    style?: CSSProperties
}

export default function Eccomerce({ style }: Params) {
    const t = useTranslations('stack')

    return (<Item
        style={style}
        video={{ src: videos.stack[3] }}
        theme={t('ecommerce')}
        href={config.routes.services.ecommerce}
    />)
}