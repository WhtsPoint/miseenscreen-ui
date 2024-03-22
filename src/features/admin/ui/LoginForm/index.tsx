'use client'

import { LoginForm as UnfilledLoginForm, LoginFormData } from '@/widgets/admin'
import { useRouter } from '@/utils/lib/navigation'
import loginWithCookie from '@/features/admin/action/loginWithCookie'

interface Params {
    className?: string
}

export default function LoginForm({ className }: Params) {
    const { push } = useRouter()

    const onSend = async (data: LoginFormData) => {
        const error = await loginWithCookie(data)

        if (error) return alert(error)

        push('/admin')
    }

    return (<UnfilledLoginForm className={className} onSend={onSend} />)
}