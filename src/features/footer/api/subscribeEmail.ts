import config from '@/utils/config'

interface Return {
    error?: any,
    status: number
}

export default async function subscribeEmail(email: string): Promise<Return> {
    const data = await fetch(
        config.api + 'subscription?email=' + email,
        { method: 'POST' }
    )
    const { error } = await data.json()

    return { error, status: data.status }
}