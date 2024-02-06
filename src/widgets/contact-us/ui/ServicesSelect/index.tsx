import Select from '@/utils/ui/Select'
import { useTranslations } from 'next-intl'

interface Params {
    value?: string,
    onChange: (service: string) => unknown,
    optionClass?: string,
    className?: string
}

export default function ServicesSelect(params: Params) {
    const t = useTranslations('contact-us.form.services')

    return (<Select
        options={{
            'ecommerce': t('ecommerce'),
            'webPortals': t('web-services'),
            'elearning': t('elearning-solution'),
            'hrSoftware': t('hr-software'),
            'analytics': t('analytics'),
            'other': t('other')
        }}
        placeholder={t('placeholder')}
        {...params}
    />)
}