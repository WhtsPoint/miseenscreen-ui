'use server'

import { getAccessToken, unAuth } from '@/features/admin'
import deleteEmailSubscriptionWithToken from '../api/deleteEmailSubscriptionWithToken'

export default async function deleteEmailSubscription(
    id: string
): Promise<ReturnType<typeof deleteEmailSubscriptionWithToken>|void> {
    const token = await getAccessToken()

    if (!token) return unAuth()

    const error = await deleteEmailSubscriptionWithToken(id, token)

    if (error === 'Invalid token') return unAuth()

    return error
}