import Header from '../Header'
import { useTranslations } from 'next-intl'

export default function TranslatedHeader() {
    const t = useTranslations('header')

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