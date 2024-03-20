import { redirect } from '@/utils/lib/navigation'
import { getAccessToken } from '@/features/admin'
import { AdminPage } from '@/layers/admin'

export default async function Page() {
    const accessToken = await getAccessToken()

    if (!accessToken) redirect('/login')

    return (<AdminPage />)
}