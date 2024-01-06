import { Children } from '@/utils/interfaces/Children'
import { ReactNode } from 'react'
import styles from './styles.module.scss'

interface Params extends Children<ReactNode> {}

export default function StyledDt({ children }: Params) {
    return (<dt className={styles.dt}>{children}</dt>)
}