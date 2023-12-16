'use client'

import Select from '@/utils/ui/Select'
import { useLocale } from 'use-intl'
import { useRouter, usePathname } from '@/utils/lib/navigation'
import styles from './style.module.scss'
import icon from '@/utils/assets/images/planet.svg'
import Image from 'next/image'
import { cl } from '@/utils/lib/cl'

const selectValues = {
    'en': 'ENG',
    'ru': 'RUS',
    'ua': 'UA'
}

interface Params {
    className?: string
    optionClass?: string
}

export default function LocaleSelect({ className, optionClass }: Params) {
    const currentLocale = useLocale()
    const { push } = useRouter()
    const currentPath = usePathname()
    const onChange = (locale: string) => push(currentPath, { locale })

    return (<div className={styles.localSelect}>
        <Select
            className={cl(styles.localSelect__select, className)}
            optionClass={cl(styles.localSelect__select__options, optionClass)}
            options={selectValues}
            value={currentLocale}
            onChange={onChange}
            valueClass={styles.localSelect__select__value}
        >
            <Image src={icon.src} alt={""} width={18} height={18} />
        </Select>
    </div>)
}