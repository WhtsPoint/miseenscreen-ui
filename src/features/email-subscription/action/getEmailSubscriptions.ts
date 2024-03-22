'use server'

import getEmailSubscriptionsWithToken from '../api/getEmailSubscriptionsWithToken'
import { getAccessToken, unAuth } from '@/features/admin'

export default async function getEmailSubscriptions(
    count: number, page: number
): Promise<ReturnType<typeof getEmailSubscriptionsWithToken>|void> {
    const token = await getAccessToken()

    if (!token) return unAuth()

    const body = await getEmailSubscriptionsWithToken(count, page, token)

    if (body[1] === 'Invalid token') return unAuth()

    return body
}