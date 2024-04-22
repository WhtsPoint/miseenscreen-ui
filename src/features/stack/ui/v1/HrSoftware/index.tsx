import { Item } from '@/widgets/stack'
import { useTranslations } from 'next-intl'
import videos from '@/utils/config/videos'
import type { CSSProperties } from 'react'
import HrSoftwareLink from '../../HrSoftwareLink'

interface Params {
    style?: CSSProperties
}

export default function HrSoftware({ style }: Params) {
    const t = useTranslations('stack')

    return (<HrSoftwareLink style={style}>
        <Item
            video={{ src: videos.stack[4] }}
            theme={t('hr-software')}
        />
    </HrSoftwareLink>)
}