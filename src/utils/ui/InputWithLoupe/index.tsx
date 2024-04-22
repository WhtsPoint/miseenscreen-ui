import type { InputHTMLAttributes } from 'react'
import Image from 'next/image'
import styles from './styles.module.scss'
import loupeImage from '@/utils/assets/images/loupe.svg'

interface Params extends InputHTMLAttributes<HTMLInputElement> {}

export default function InputWithLoupe(params: Params) {
    return (<div className={styles.inputBLock}>
        <Image className={styles.loupe} src={loupeImage} alt={''} />
        <input className={styles.input} {...params} />
    </div>)
}