import { FormEvent, useState } from 'react'
import validateForm from '../lib/validateForm'
import { FormParams } from '../interfaces/FormParams'
import { FormError } from '../interfaces/FormError'
import { useTranslations } from 'next-intl'
import { ValidationRules } from '../interfaces/ValidationRules'

interface Params {
    services: string[],
    files: File[],
    validation: ValidationRules
}

type Return = [(event: FormEvent<HTMLFormElement>) => unknown, (name: string) => string | undefined]

export default function useFormSend({ validation, ...params }: Params): Return {
    const t =  useTranslations('contact-us.form.errors')
    const [errors, setErrors] = useState<FormError[]>([])

    const onSend = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const data = {
            ...Object.fromEntries(new FormData(event.currentTarget)),
            ...params
        }
        setErrors(validateForm(data as unknown as FormParams, validation))
    }

    const getError = (name: string) => {
        const error = errors.find((params) => params.name === name)
        return error && t(error.name, error.params)
    }

    return [ onSend, getError ]
}