'use server'

import updateFormWithToken from '../api/updateFormWithToken'
import { getAccessToken, unAuth } from '@/features/admin'
import { UpdateFormData } from '@/widgets/contact-us'

export default async function updateForm(form: UpdateFormData): Promise<ReturnType<typeof updateFormWithToken>|void> {
    const token = await getAccessToken()

    if (!token) return unAuth()

    const error = await updateFormWithToken(form, token)

    if (error === 'Invalid token') return unAuth()

    return error
}