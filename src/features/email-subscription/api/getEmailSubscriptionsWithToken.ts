import config from '@/utils/config'
import type {PaginatedEmailSubscriptions} from '../interfaces/PaginatedEmailSubscriptions'

export default  async function getEmailSubscriptionsWithToken(
    count: number, page: number, accessToken: string
): Promise<[PaginatedEmailSubscriptions, null] | [null, string]> {
    try {
        const response = await fetch(
            `${config.api}admin/subscriptions?count=${count}&page=${page}`,
            {
                headers: {'Authorization': 'Bearer ' + accessToken}
            }
        )

        if ([401, 403].includes(response.status)) {
            return [null, 'Invalid token']
        }

        const body = await response.json()

        if (!response.ok) {
            return [null, body.error]
        }

        return [body, null]
    } catch (error) {
        return [null, 'Bad request attempt']
    }
}