import { UpdateFormData } from '@/widgets/contact-us'
import config from '@/utils/config'

export default async function updateFormWithToken(form: UpdateFormData, accessToken: string): Promise<string | null> {
    const { id, ...fields } = form

    const response = await fetch(
        `${config.api}admin/call-form/${id}`,
        {
            method: 'PATCH',
            headers: {'Authorization': 'Bearer ' + accessToken, 'Content-Type': 'application/json'},
            body: JSON.stringify(fields)
        }
    )

    if ([401, 403].includes(response.status)) {
        return 'Invalid token'
    }

    if (response.status !== 204) {
        const body = await response.json()

        return body.error
    }

    return null
}