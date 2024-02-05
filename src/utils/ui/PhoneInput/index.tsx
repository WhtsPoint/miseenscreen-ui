import { ChangeEvent, useState } from 'react'
import codesToFlags from '@/utils/config/country-icons'
import styles from './styles.module.scss'
import { cl } from '@/utils/lib/cl'

interface Params {
    placeholder?: string,
    defaultValue: string,
    className: string,
    maxLength?: number
}

export default function PhoneInput({ className, defaultValue, ...params }: Params) {
    const [phone, setPhone] = useState<string>(defaultValue)

    const country = Object.entries(codesToFlags)
        .find(([ code ]) => (new RegExp('^' + code)).exec(phone.replace(/^\+/, '')))

    return (<label className={cl(styles.phoneInput, className)}>
        <span className={styles.phoneInput__flag}>{country ? country[1]: '🏴'}</span>
        <input
            className={styles.phoneInput__input}
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
            {...params}
        />
    </label>)
}