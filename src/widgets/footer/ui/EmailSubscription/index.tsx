import styles from './styles.module.scss'
import { useTranslations } from 'next-intl'
import { cl } from '@/utils/lib/cl'
import { type ChangeEvent, type FormEvent, useRef, useState } from 'react'
import { isEmail } from '@/utils/lib/validator'
import SubscribeButton from '@/widgets/footer/ui/SubscribeButton'
import type { Status } from '../../types/Status'

interface Params {
    onSend: (email: string) => unknown,
    onChange?: () => unknown,
    className?: string,
    status: Status
}

export default function EmailSubscription({ onSend, onChange, status, className }: Params) {
    const t = useTranslations('email-subscription')
    const email = useRef<string>('')
    const [isError, setIsError] = useState<boolean>()

    const onInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
        email.current = target.value
        onChange?.()
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const isValid = isEmail(email.current)
        setIsError(!isValid)
        isValid && onSend(email.current)
    }

    const style = cl(
        styles.emailSubscription,
        className,
        isError && styles.emailSubscription_error
    )

    return (<form onSubmit={onSubmit} className={style}>
        <input
            name={'email'}
            onChange={onInput}
            placeholder={t('input-placeholder')}
            className={styles.emailSubscription__input}
        />
        <SubscribeButton status={status} className={styles.emailSubscription__send} />
    </form>)
}