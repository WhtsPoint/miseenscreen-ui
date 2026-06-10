import { createLocalizedPathnamesNavigation, Pathnames } from 'next-intl/navigation'
import config from '@/utils/config'

const locales = config.locale.locales

export const pathnames = {
    '/': '/'
} satisfies Pathnames<typeof locales>

export const { Link, useRouter, usePathname, redirect } = createLocalizedPathnamesNavigation({
    locales,
    pathnames
})
