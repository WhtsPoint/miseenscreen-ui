import styles from './styles.module.scss'
import Arrow from '@/utils/ui/Arrow'
import { ArrowDirection } from '@/utils/types/ArrowDirection'
import { cl } from '@/utils/lib/cl'

interface Params {
    direction?: ArrowDirection,
    className?: string,
    textClassName?: string,
    text: string,
    onClick?: () => unknown
}

export default function ArrowWithText({ onClick, text, textClassName, ...params }: Params) {
    return (<div className={styles.arrowWithText}>
        <Arrow onClick={onClick} {...params} />
        <span className={cl(styles.arrowWithText__text, textClassName)}>{text}</span>
    </div>)
}