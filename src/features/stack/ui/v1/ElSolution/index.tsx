import { Item } from '@/widgets/stack'
import { useTranslations } from 'next-intl'
import { CSSProperties } from 'react'
import ElSolutionLink from '../../ElSolutionLink'
import videos from '@/utils/config/videos'

interface Params {
    style?: CSSProperties
}

export default function ElSolution({ style }: Params) {
    const t = useTranslations('stack')

    return (<ElSolutionLink style={style}>
        <Item
            video={{ src: videos.stack[2] }}
            theme={t('elearning-solution')}
        />
    </ElSolutionLink>)
}