import { getRequestConfig } from 'next-intl/server'
import deepAssign from '@/utils/lib/deepAssign'
import { notFound } from 'next/navigation'
import config from '@/utils/config'

const loadTranslation = async (locale: string) => ({
    messages: (await import(`../translation/${locale}/index.ts`)).default
})

export default getRequestConfig(async ({locale}) => {
    if (!([...config.locale.locales] as string[]).includes(locale)) notFound()

    const defaultTranslation = await loadTranslation(config.locale.defaultLocale)

    if (locale === config.locale.defaultLocale) return defaultTranslation

    const translation = (await loadTranslation(locale))

    return deepAssign(defaultTranslation, translation)
});