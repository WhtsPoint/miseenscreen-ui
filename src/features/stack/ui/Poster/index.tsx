import { Poster as UnfilledPoster } from '@/widgets/stack'
import { cl } from '@/utils/lib/cl'
import type { Children } from '@/utils/interfaces/Children'
import type { ReactNode } from 'react'
import styles from './styles.module.scss'

type UnfilledPosterParams = Parameters<typeof UnfilledPoster>[0]

interface Params extends Omit<UnfilledPosterParams, 'sizes'>, Partial<Children<ReactNode>> {
    className?: string,
    isInView: boolean
}

export default function Poster({ children, isInView, className, ...params }: Params) {
    return (<div className={cl(styles.poster, className)}>
        <UnfilledPoster style={{ width: '100%' }} transition={{ delay: 1 }} sizes={'50vw'} {...params} />
        {children}
    </div>)
}