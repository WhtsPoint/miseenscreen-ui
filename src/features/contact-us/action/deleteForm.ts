'use server'

import { getAccessToken, unAuth } from '@/features/admin'
import type getFormsWithToken from '../api/getFormsWithToken'
import deleteFormWithToken from '../api/deleteFormWithToken'

export default async function deleteForm(
    id: string
): Promise<ReturnType<typeof getFormsWithToken>|void> {
    const token = await getAccessToken()

    if (!token) return unAuth()

    const error = await deleteFormWithToken(id, token)

    if (error === 'Invalid token') return unAuth()
}