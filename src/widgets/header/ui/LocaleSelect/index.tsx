'use client'

import Select from '@/utils/ui/Select'
import { useLocale } from 'use-intl'
import { useRouter } from '@/utils/lib/navigation'

const selectValues = {
    'en': 'ENG',
    'ru': 'RUS',
    'ua': 'UA'
}
export default function LocaleSelect() {
    const currentLocale = useLocale()
    const { push } = useRouter()

    const onChange = (locale: string) => push('/', { locale })

    return (<Select
        options={selectValues}
        value={currentLocale}
        onChange={onChange}
    />)
}