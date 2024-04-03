import { Item } from '@/widgets/stack'
import { useTranslations } from 'next-intl'
import videos from '@/utils/config/videos'
import { CSSProperties } from 'react'
import EccomerceLink from '../EcoomerceLink'

interface Params {
    style?: CSSProperties
}

export default function Eccomerce({ style }: Params) {
    const t = useTranslations('stack')

    return (<EccomerceLink style={style}>
        <Item
            video={{ src: videos.stack[3] }}
            theme={t('ecommerce')}
        />
    </EccomerceLink>)
}