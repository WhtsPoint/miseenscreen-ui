'use client'

import Select from '@/utils/ui/Select'
import { useLocale } from 'use-intl'
import { useRouter, usePathname } from '@/utils/lib/navigation'
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
    const currentPath = usePathname()
    const onChange = (locale: string) => push(currentPath, { locale })

    return (<div className={styles.localSelect}>
        <Select
            className={styles.localSelect__select}
            optionClass={styles.localSelect__select__options}
            options={selectValues}
            value={currentLocale}
            onChange={onChange}
            valueClass={styles.localSelect__select__value}
        >
            <Image src={icon.src} alt={""} width={18} height={18} />
        </Select>
    </div>)
}