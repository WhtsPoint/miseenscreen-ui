import config from '@/utils/config'

export default async function deleteEmailSubscriptionWithToken(
    id: string, accessToken: string
): Promise<string | undefined> {
    try {
        const response = await fetch(
            `${config.api}admin/subscription/${id}`,
            {
                method: 'DELETE',
                headers: {'Authorization': 'Bearer ' + accessToken}
            }
        )

        if ([401, 403].includes(response.status)) {
            return 'Invalid token'
        }

        const body = await response.json()

        if (!response.ok) {
            return body.error
        }
    } catch (error) {
        return 'Bad request attempt'
    }
}