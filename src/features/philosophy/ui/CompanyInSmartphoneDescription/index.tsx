import { useTranslations } from 'next-intl'

export default function CompanyInSmartphoneDescription() {
    const t = useTranslations('philosophy')

    return (<p>{t('companyInSmartphone-description')}</p>)
}