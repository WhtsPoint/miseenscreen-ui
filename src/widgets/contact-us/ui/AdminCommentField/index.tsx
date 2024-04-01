import styles from './styles.module.scss'
import form from '@/utils/config/form'

interface Params {
    onInput?: (value: string) => unknown,
    initComment?: string
}

export default function AdminCommentField({ onInput, initComment }: Params) {
    return (<textarea
        className={styles.adminComment}
        defaultValue={initComment}
        maxLength={form.authorComment.maxLength}
        onChange={({ target }) => onInput?.(target.value)}
    />)
}