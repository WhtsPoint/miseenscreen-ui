import { cookies } from 'next/headers'

export default async function getAccessToken(): Promise<string | undefined> {
    return cookies().get('access_token')?.value
}