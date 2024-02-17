import { Item } from '@/widgets/stack'
import { useTranslations } from 'next-intl'
import videos from '@/utils/config/videos'
import config from '@/utils/config'
import { CSSProperties } from 'react'

interface Params {
    style?: CSSProperties
}

export default function WebServices({ style }: Params) {
    const t = useTranslations('stack')

    return (<Item
        style={style}
        video={{ src: videos.stack[1] }}
        theme={t('web-services')}
        href={config.routes.services.webPortals}
    />)
}