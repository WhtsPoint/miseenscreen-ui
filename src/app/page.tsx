import { redirect } from 'next/navigation'
import config from '@/utils/config'

export default function Page() {
    redirect(`/${config.locale.defaultLocale}`)
}