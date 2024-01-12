import arrowImage from '@/utils/assets/images/arrow.svg'
import Image from 'next/image'
import styles from './styles.module.scss'
import { cl } from '@/utils/lib/cl'

interface Params {
    direction?: 'left' | 'right',
    className?: string
}

export default function Arrow({ direction = 'right', className }: Params) {
    return (<button className={cl(styles.arrow, className)}>
        <Image
            src={arrowImage}
            style={direction === 'left' ? { rotate: '180deg'} : {}}
            alt={''}
        />
    </button>)
}