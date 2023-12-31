import { Item } from '@/widgets/stack'
import { useTranslations } from 'next-intl'
import { MotionStyle } from 'framer-motion'

const videoLink = 'https://drive.google.com/uc?export=download&id=1EQ1PuYaMexE9rs7kHhUc9AbcKLB_wP9k'

interface Params {
    style?: MotionStyle
}

export default function WebServices({ style }: Params) {
    const t = useTranslations('stack')

    return (<Item
        style={style}
        video={{ src: videoLink }}
        theme={t('web-services')}
    />)
}