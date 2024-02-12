import config from '@/utils/config'

interface Params {
    email: string,
    reCaptchaToken: string
}

export default async function subscribeEmail({ email, reCaptchaToken }: Params): Promise<boolean> {
    try {
        const data = await fetch(
            config.api + `subscription?email=${email}&token=${reCaptchaToken}`,
            { method: 'POST' }
        )

        return data.ok;
    } catch {
        return false
    }
}