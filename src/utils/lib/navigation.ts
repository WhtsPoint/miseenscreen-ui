import { createLocalizedPathnamesNavigation } from 'next-intl/navigation'
import config from '@/utils/config'
import { ObjectType } from '@/utils/types/ObjectType'

export const { Link } = createLocalizedPathnamesNavigation<
    string[],
    ObjectType<string, string>
>({
    locales: config.locale.locales,
    pathnames: { '/': '/' }
})