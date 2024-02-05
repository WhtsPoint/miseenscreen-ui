import { FormParams } from '@/widgets/contact-us'
import { FormError } from '@/widgets/contact-us/interfaces/FormError'

export default function validateForm(
    { name, employeesAmount, phone, services, problem, email }: FormParams
): FormError | null {
    if (name.length < 3 || name.length > 2000) return { name: 'name', params: { min: 3, max: 2000 }}
    if (employeesAmount.match('^\d+$') === null) return { name: 'employeesAmount' }
    return null
}