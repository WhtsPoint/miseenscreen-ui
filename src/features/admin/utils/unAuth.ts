import { cookies } from 'next/headers'
import { redirect } from '@/utils/lib/navigation'

export default function unAuth() {
    cookies().delete('access_token')
    redirect('/login')
}