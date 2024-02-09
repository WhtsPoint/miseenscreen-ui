import { FormParams } from '@/widgets/contact-us'
import formToFormData from '@/features/contact-us/lib/formToFormData'
import config from '@/utils/config'

export default async function postForm(params: FormParams & { token: string }) {
    const formData = formToFormData(params)
    const response = await fetch(config.api + 'call-form', { method: 'POST', body: formData })

}