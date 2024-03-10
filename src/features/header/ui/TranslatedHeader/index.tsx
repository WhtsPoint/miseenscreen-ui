import Header from '../Header'
import { getTranslations } from 'next-intl/server'

export default async function TranslatedHeader() {
    const t = await getTranslations('header')

    const translation = {
        services: t('services'),
        cases: t('cases'),
        cooperation: t('cooperation'),
        ourStory: t('our-story'),
        blog: t('blog'),
        contactUs: t('contact-us')
    }

    return (<Header translation={translation} />)
}