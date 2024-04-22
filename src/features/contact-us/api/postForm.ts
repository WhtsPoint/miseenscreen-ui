import type {FormParams} from '@/widgets/contact-us'
import formToFormData from '@/features/contact-us/lib/formToFormData'
import config from '@/utils/config'

export default async function postForm(params: FormParams & { token: string }): Promise<[string, null] | [null, string]> {
    const formData = formToFormData(params)
    try {
        const response = await fetch(config.api + 'call-form', { method: 'POST', body: formData })

        const body = await response.json()

        if (!response.ok) return [null, body['error']]

        return [body['id'], null]

    } catch {
        return [null, 'Bad connection']
    }
}