'use client'

import { Background } from '@/features/cases-points'
import { cl } from '@/utils/lib/cl'
import styles from './styles.module.scss'

interface Params {
    className?: string,
    backgroundClassName?: string
}

export default function CasesBackground({ className, backgroundClassName }: Params) {
    return (<div data-tag={'background'} className={cl(styles.casesBackground, className)}>
        <Background className={cl(styles.background, backgroundClassName)} position={0} isInViewMotion={true} />
    </div>)
}