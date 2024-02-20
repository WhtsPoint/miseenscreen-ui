import config from '@/utils/config'

interface Locale {
    params: {
        locale: typeof config.locale.locales[number]
    }
}

export type { Locale }