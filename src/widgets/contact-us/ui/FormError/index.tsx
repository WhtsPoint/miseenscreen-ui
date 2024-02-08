import { Children } from '@/utils/interfaces/Children'
import { ReactNode } from 'react'
import styles from './styles.module.scss'
import { useAnimate } from 'framer-motion'
import { cl } from '@/utils/lib/cl'

interface Params extends Children<ReactNode> {
    error?: string
}

export default function FormError({ children, error }: Params) {
    return (<div className={cl(styles.box, error && styles.box_error)}>
        {children}
        {error && <small className={styles.box__error}>{error}</small>}
    </div>)
}