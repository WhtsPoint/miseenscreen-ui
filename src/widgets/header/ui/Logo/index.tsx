import openSans from '@/utils/assets/fonts/OpenSans'
import styles from './style.module.scss'
import { cl } from '@/utils/lib/cl'

interface Params {
    className?: string
}

export default function Logo({ className }: Params) {
    return (<h1 style={openSans.style} className={cl(styles.logo, className)}>MISEENSCREEN</h1>)
}