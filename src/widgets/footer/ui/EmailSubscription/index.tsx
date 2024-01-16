import styles from './styles.module.scss'
import { useTranslations } from 'next-intl'
import { cl } from '@/utils/lib/cl'
import { FormEvent, useRef, useState } from 'react'
import { isEmail } from '@/utils/lib/validator'

interface Params {
    onSend: (email: string) => unknown,
    className?: string
}

export default function EmailSubscription({ onSend, className }: Params) {
    const t = useTranslations('email-subscription')
    const email = useRef<string>('')
    const [isError, setIsError] = useState<boolean>()

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
            onChange={({ target }) => email.current = target.value}
            placeholder={t('input-placeholder')}
            className={styles.emailSubscription__input}
        />
        <button type={'submit'} className={styles.emailSubscription__send}>{t('send')}</button>
    </form>)
}