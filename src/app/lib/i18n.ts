import { getRequestConfig } from 'next-intl/server'
import config from '@/utils/config'
import deepAssign from '@/utils/lib/deepAssign'
import { notFound } from 'next/navigation'

const loadTranslation = async (locale: string) => ({
    messages: (await import(`../translation/${locale}.json`)).default
})

export default getRequestConfig(async ({locale}) => {
    if (!config.locale.locales.includes(locale)) notFound()

    const defaultTranslation = await loadTranslation(config.locale.defaultLocale)

    if (locale === config.locale.defaultLocale) return defaultTranslation

    const translation = (await loadTranslation(locale))

    return deepAssign(defaultTranslation, translation)
});