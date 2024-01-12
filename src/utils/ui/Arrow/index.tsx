import arrowImage from '@/utils/assets/images/arrow.svg'
import Image from 'next/image'
import styles from './styles.module.scss'
import { cl } from '@/utils/lib/cl'
import { ArrowDirection } from '@/utils/types/ArrowDirection'

interface Params {
    direction?: ArrowDirection,
    className?: string,
    onClick?: () => unknown
}

export default function Arrow({ direction = 'right', className, onClick }: Params) {
    return (<button onClick={onClick} className={cl(styles.arrow, className)}>
        <Image
            src={arrowImage}
            style={direction === 'left' ? { rotate: '180deg'} : {}}
            alt={''}
        />
    </button>)
}