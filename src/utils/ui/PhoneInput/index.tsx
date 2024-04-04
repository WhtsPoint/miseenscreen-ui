import { useState } from 'react'
import PhoneCodeSelect from '@/utils/ui/PhoneCodeSelect'
import { PhoneCode } from '@/utils/types/PhoneCode'
import codesToFlags from '@/utils/config/country-icons'
import { cl } from '@/utils/lib/cl'
import styles from './styles.module.scss'

interface Params {
    placeholder?: string,
    defaultValue: string,
    className: string,
    maxLength?: number,
    name?: string
}

export default function PhoneInput({ className, defaultValue, ...params }: Params) {
    const [phone, setPhone] = useState<string>(defaultValue)

    const country = Object.entries(codesToFlags)
        .find(([ code ]) => (new RegExp('^' + code)).exec(phone.replace(/^\+/, '')))

    const onCodeChange = (code: PhoneCode) => setPhone('+' + code)

    return (<label className={cl(styles.phoneInput, className)}>
        <PhoneCodeSelect code={country && country[0] as PhoneCode} onChange={onCodeChange} />
        <input
            className={styles.phoneInput__input}
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
            {...params}
        />
    </label>)
}