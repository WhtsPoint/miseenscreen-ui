import { Item } from '@/widgets/stack'
import { useTranslations } from 'next-intl'
import { MotionStyle } from 'framer-motion'

const videoLink = 'https://drive.google.com/uc?export=download&id=1JF2YR_g_fwzcS2L8kalNdiH0hBWyjFcb'

interface Params {
    className?: string
    style?: MotionStyle
}

export default function HrSoftware({ className, style }: Params) {
    const t = useTranslations('stack')

    return (<Item
        className={className}
        style={style}
        video={{ src: videoLink }}
        theme={t('hr-software')}
    />)
}