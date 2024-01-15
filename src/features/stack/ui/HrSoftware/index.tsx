import { Item } from '@/widgets/stack'
import { useTranslations } from 'next-intl'
import { MotionStyle } from 'framer-motion'
import videos from '@/utils/config/videos'


interface Params {
    style?: MotionStyle
}

export default function HrSoftware({ style }: Params) {
    const t = useTranslations('stack')

    return (<Item
        style={style}
        video={{ src: videos.stack[4] }}
        theme={t('hr-software')}
    />)
}