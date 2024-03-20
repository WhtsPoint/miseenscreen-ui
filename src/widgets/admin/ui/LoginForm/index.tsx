'use client'

import { LoginFormData } from '../../interfaces/LoginFormData'
import { cl } from '@/utils/lib/cl'
import { ChangeEvent, FormEvent, useRef } from 'react'
import styles from './styles.module.scss'
import inputsStyles from '@/utils/assets/styles/inputs.module.scss'
import buttonStyles from '@/utils/assets/styles/button.module.scss'

interface Params {
    className?: string,
    onSend: (data: LoginFormData) => unknown
}

const inputClass = cl(styles.loginForm__input, inputsStyles.input)

export default function LoginForm({ className, onSend }: Params) {
    const dataRef = useRef<LoginFormData>({ login: '', password: '' })

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onSend(dataRef.current)
    }

    const onInput = (field: keyof LoginFormData) => (event: ChangeEvent<HTMLInputElement>) => {
        dataRef.current[field] =  event.target.value
    }

    return (<form onSubmit={onSubmit} className={cl(styles.loginForm, className)}>
        <input
            className={inputClass}
            onChange={onInput('login')}
            placeholder={'Login'}
            name={'login'}/>
        <input
            className={inputClass}
            onChange={onInput('password')}
            placeholder={'Password'}
            name={'password'}
        />
        <button className={buttonStyles.button} type={'submit'}>Login</button>
    </form>)
}