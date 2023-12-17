import { Item } from '@/widgets/stack'
import { useTranslations } from 'next-intl'
import { CSSProperties } from 'react'

const videoLink = 'https://drive.google.com/uc?export=download&id=1EQ1PuYaMexE9rs7kHhUc9AbcKLB_wP9k'

interface Params {
    className?: string
    style?: CSSProperties
}

export default function WebServices({ className, style }: Params) {
    const t = useTranslations('stack')

    return (<Item
        className={className}
        style={style}
        video={{ src: videoLink }}
        theme={t('web-services')}
    />)
}