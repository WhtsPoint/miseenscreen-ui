import { Item } from '@/widgets/stack'
import { useTranslations } from 'next-intl'
import { MotionStyle } from 'framer-motion'

const videoLink = 'https://drive.google.com/uc?export=download&id=1HTDCqWkANlHkLOkOPGC-9BrgTdaxERXY'

interface Params {
    className?: string
    style?: MotionStyle
}

export default function Eccomerce({ className, style }: Params) {
    const t = useTranslations('stack')

    return (<Item
        className={className}
        style={style}
        video={{ src: videoLink }}
        theme={t('ecommerce')}
    />)
}