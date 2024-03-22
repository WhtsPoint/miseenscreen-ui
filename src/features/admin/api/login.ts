import { LoginFormData } from '@/widgets/admin'
import config from '@/utils/config'

export default async function login({ login, password }: LoginFormData): Promise<[string, null] | [null, string]> {
    let response

    try {
        response = await fetch(
            config.api + 'login',
            {
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: login, password }),
                method: 'POST',
                cache: 'no-store'
            }
        )
    } catch (error) {
        return [null, 'Bad attempt to send request'] as const
    }

    const body = await response.json()

    if (!response.ok) {
       return [null, body.message] as const
    }

    return [body.token, null] as const
}