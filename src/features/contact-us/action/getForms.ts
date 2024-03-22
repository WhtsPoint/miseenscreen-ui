'use server'

import { getAccessToken, unAuth } from '@/features/admin'
import getFormsWithToken from '../api/getFormsWithToken'

export default async function getForms(
    count: number, page: number
): Promise<ReturnType<typeof getFormsWithToken>|void> {
    const token = await getAccessToken()

    if (!token) return unAuth()

    const body = await getFormsWithToken(count, page, token)

    if (body[1] === 'Invalid token') return unAuth()

    return body
}