import { createSharedPathnamesNavigation } from 'next-intl/navigation'
import config from '@/utils/config'

const locales = config.locale.locales

export const { Link, useRouter, usePathname, redirect } = createSharedPathnamesNavigation({
    locales
})
