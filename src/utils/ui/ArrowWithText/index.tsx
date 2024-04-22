import styles from './styles.module.scss'
import Arrow from '@/utils/ui/Arrow'
import type { ArrowDirection } from '@/utils/types/ArrowDirection'
import { cl } from '@/utils/lib/cl'

interface Params {
    direction?: ArrowDirection,
    className?: string,
    blockClassName?: string,
    textClassName?: string,
    text: string,
    onClick?: () => unknown
}

export default function ArrowWithText({ onClick, text, textClassName, blockClassName, ...params }: Params) {
    return (<div className={cl(styles.arrowWithText, blockClassName)}>
        <Arrow onClick={onClick} {...params} />
        <span className={cl(styles.arrowWithText__text, textClassName)}>{text}</span>
    </div>)
}