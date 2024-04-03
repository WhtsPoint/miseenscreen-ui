import { useTranslations } from 'next-intl'

export default function AllInOnceDescription() {
    const t = useTranslations('philosophy')

    return (<p>{t('allInOnce-description')}</p>)
}