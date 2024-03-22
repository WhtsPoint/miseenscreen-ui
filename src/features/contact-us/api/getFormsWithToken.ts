import config from '@/utils/config'
import { PaginatedForms } from '../interfaces/PaginatedForms'

export default async function getFormsWithToken(
    count: number, page: number, accessToken: string
): Promise<[PaginatedForms, null] | [null, string]> {
    try {
        const response = await fetch(
            `${config.api}admin/call-forms?count=${count}&page=${page}`,
            {
                headers: {'Authorization': 'Bearer ' + accessToken}
            }
        )

        if ([401, 403].includes(response.status)) {
            return [null, 'Invalid token']
        }

        const body = await response.json()

        if (!response.ok) {
            console.log(body)
            return [null, body.error]
        }

        return [body, null]
    } catch (error) {
        console.log(error)
        return [null, 'Bad request attempt']
    }
}