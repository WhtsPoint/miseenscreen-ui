import { FormParams } from '../interfaces/FormParams'
import { FormError } from '../interfaces/FormError'
import { ValidationRules } from '../interfaces/ValidationRules'
import validateFiles from '@/widgets/contact-us/lib/validateFiles'

const minLength = 3

interface Params {
    params: FormParams,
    validation: ValidationRules
}

export default function validateForm(
    { problem, name, company, employeesAmount, phone, services, email, files}: FormParams,
    validationRules: ValidationRules
): FormError[] {
    const errors = []
    const fileError = validateFiles(files, validationRules.files.maxCount, validationRules.files.maxSize)

    if (problem.length === 0) errors.push({ name: 'problem' })
    if (name.length < minLength) errors.push({ name: 'name', params: { min: minLength }})
    if (company.length < minLength) errors.push({ name: 'company', params: { min: minLength }})
    if (employeesAmount.length === 0) errors.push({ name: 'employees-amount' })
    if (phone.length === 0) errors.push({ name: 'phone' })
    if (email.length === 0) errors.push({ name: 'email' })
    if (services.length === 0) errors.push({ name: 'services' })
    if (fileError) errors.push(fileError)

    return errors
}