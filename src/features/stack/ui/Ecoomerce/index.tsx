import { Item } from '@/widgets/stack'
import { useTranslations } from 'next-intl'
import { MotionStyle } from 'framer-motion'
import videos from '@/utils/config/videos'

interface Params {
    style?: MotionStyle
}

export default function Eccomerce({ style }: Params) {
    const t = useTranslations('stack')

    return (<Item
        style={style}
        v
        theme={t('ecommerce')}
    />)
}