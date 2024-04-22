import { createLocalizedPathnamesNavigation } from 'next-intl/navigation'
import config from '@/utils/config'

export const { Link, useRouter, usePathname, redirect } = createLocalizedPathnamesNavigation<
    string[],
    Record<string, string>
>({
    locales: [...config.locale.locales] as string[],
    pathnames: { '/': '/' }
})