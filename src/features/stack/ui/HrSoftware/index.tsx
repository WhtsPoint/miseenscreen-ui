import { Item } from '@/widgets/stack'
import { useTranslations } from 'next-intl'
import videos from '@/utils/config/videos'
import { CSSProperties } from 'react'
import config from '@/utils/config'

interface Params {
    style?: CSSProperties
}

export default function HrSoftware({ style }: Params) {
    const t = useTranslations('stack')

    return (<Item
        style={style}
        video={{ src: videos.stack[4] }}
        theme={t('hr-software')}
        href={config.routes.services.hrSoftware}
    />)
}