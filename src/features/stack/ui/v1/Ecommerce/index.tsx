import { Item } from '@/widgets/stack'
import { useTranslations } from 'next-intl'
import videos from '@/utils/config/videos'
import type { CSSProperties } from 'react'
import EccomerceLink from '../../EcommerceLink'

interface Params {
    style?: CSSProperties
}

export default function Ecommerce({ style }: Params) {
    const t = useTranslations('stack')

    return (<EccomerceLink style={style}>
        <Item
            video={{ src: videos.stack[3] }}
            theme={t('ecommerce')}
        />
    </EccomerceLink>)
}