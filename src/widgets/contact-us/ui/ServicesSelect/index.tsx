import { useTranslations } from 'next-intl'
import MultipleSelect from '@/utils/ui/MultipleSelect'
import { Option } from '../../types/Option'

interface Params {
    values: Option[],
    onChange: (service: Option) => unknown,
    optionClass?: string,
    className?: string
}

export default function ServicesSelect(params: Params) {
    const t = useTranslations('contact-us.form.services')

    return (<MultipleSelect<Option>
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