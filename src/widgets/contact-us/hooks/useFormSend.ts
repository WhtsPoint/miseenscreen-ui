import { type FormEvent, useState } from 'react'
import validateForm from '../lib/validateForm'
import type { FormParams } from '../interfaces/FormParams'
import type { FormError } from '../interfaces/FormError'
import { useTranslations } from 'next-intl'
import type { ValidationRules } from '../interfaces/ValidationRules'

interface Params {
    services: string[],
    files: File[],
    validation: ValidationRules,
    onSend: (params: FormParams) => unknown,
    isLoading: boolean
}

type Return = [(event: FormEvent<HTMLFormElement>) => unknown, (name: string) => string | undefined]

export default function useFormSend({ validation, onSend: send, isLoading, ...params }: Params): Return {
    const t =  useTranslations('contact-us.form.errors')
    const [errors, setErrors] = useState<FormError[]>([])

    const onSend = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (isLoading) return

        const data = {
            ...Object.fromEntries(new FormData(event.currentTarget)),
            ...params
        } as unknown as FormParams
        const errors = validateForm(data, validation)

        setErrors(errors)
        if (errors.length === 0) send(data)
    }

    const getError = (name: string) => {
        const error = errors.find((params) => params.name === name)
        return error && t(error.name, error.params)
    }

    return [ onSend, getError ]
}