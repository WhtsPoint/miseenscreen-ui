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
    { comment, fullName, companyName, employeeNumber, phone, services, email, files}: FormParams,
    validationRules: ValidationRules
): FormError[] {
    const errors = []
    const fileError = validateFiles(files, validationRules.files)

    if (comment.length === 0) errors.push({ name: 'problem' })
    if (fullName.length < minLength) errors.push({ name: 'name', params: { min: minLength }})
    if (companyName.length < minLength) errors.push({ name: 'company', params: { min: minLength }})
    if (employeeNumber.length === 0) errors.push({ name: 'employees-amount' })
    if (phone.length === 0) errors.push({ name: 'phone' })
    if (email.length === 0) errors.push({ name: 'email' })
    if (services.length === 0) errors.push({ name: 'services' })
    if (fileError) errors.push(fileError)

    return errors
}