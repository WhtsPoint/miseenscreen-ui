import { Poster as UnfilledPoster } from '@/widgets/stack'
import { cl } from '@/utils/lib/cl'
import { Children } from '@/utils/interfaces/Children'
import { ReactNode } from 'react'
import styles from './styles.module.scss'

type UnfilledPosterParams = Parameters<typeof UnfilledPoster>[0]

interface Params extends Omit<UnfilledPosterParams, 'sizes'>, Partial<Children<ReactNode>> {
    className?: string
}

export default function Poster({ children, className, ...params }: Params) {
    return (<div className={cl(styles.poster, className)}>
        <UnfilledPoster style={{ width: '100%' }} transition={{ delay: 1 }} sizes={'50vw'} {...params} />
        {children}
    </div>)
}