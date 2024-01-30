import config from '@/utils/config'

interface Return {
    error?: any,
    status: number
}

interface Params {
    email: string,
    reCaptchaToken: string
}

export default async function subscribeEmail({ email, reCaptchaToken }: Params): Promise<Return> {
    const data = await fetch(
        config.api + `subscription?email=${email}&token=${reCaptchaToken}`,
        { method: 'POST' }
    )
    const { error } = await data.json()

    return { error, status: data.status }
}