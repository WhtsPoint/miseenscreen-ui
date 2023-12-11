'use client'

import Select from '@/utils/ui/Select'
import { useLocale } from 'use-intl'
import { useRouter } from '@/utils/lib/navigation'
import styles from './style.module.scss'
import icon from '@/utils/assets/images/planet.svg'
import Image from 'next/image'

const selectValues = {
    'en': 'ENG',
    'ru': 'RUS',
    'ua': 'UA'
}
export default function LocaleSelect() {
    const currentLocale = useLocale()
    const { push } = useRouter()
    const onChange = (locale: string) => push('/', { locale })

    return (<div className={styles.localSelect}>
        <Image src={icon.src} alt={""} width={18} height={18} />
        <Select
            className={styles.localSelect__select}
            optionClass={styles.localSelect__select__options}
            options={selectValues}
            value={currentLocale}
            onChange={onChange}
        />
    </div>)
}