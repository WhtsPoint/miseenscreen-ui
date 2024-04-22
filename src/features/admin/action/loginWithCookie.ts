'use server'

import type { LoginFormData } from '@/widgets/admin'
import login from '@/features/admin/api/login'
import { cookies } from 'next/headers'

export default async function loginWithCookie(data: LoginFormData): Promise<string | null> {
    const [token, error] = await login(data)

    if (error !== null) return error

    cookies().set({
        name: 'access_token',
        value: token
    })

    return null
}